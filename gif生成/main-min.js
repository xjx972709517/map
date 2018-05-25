/**!
 * by zhangxinxu(.com)
 * @description 纯前端JavaScript生成字幕台词可配置的gif 的脚本代码
 * @version 1.0.0
 * @license MIT
 * @createTime 2018-05-03
 */
(function(e) {
    var a = $("#submitBtn");
    var t = $('input[name="radio"]');
    var i = $('input[name="template"]');
    var s = $("#result");
    var n = $("#uploadInf");
    var r = $("#form");
    var l = $("#tplList").html();
    $("#tplList").remove();
    var o = function(t) {
        if (!t.length) {
            console.error("缺少数据");
            return
        }
        var i = new GIF({
            width: t[0].img.naturalWidth,
            height: t[0].img.naturalHeight
        });
        a.addClass("loading");
        var n = e.createElement("canvas");
        var r = n.getContext("2d");
        var l = 0,
        o = t.length;
        var d = function() {
            var e = t[l];
            if (!e) {
                return
            }
            var a = e.img;
            var s = e.src;
            var o = e.message,
            c = e.delay;
            if (!c * 1) {
                c = 42
            }
            var u = a.naturalWidth,
            v = a.naturalHeight;
            if (u * v !== 0) {
                r.clearRect(0, 0, n.width, n.height);
                n.width = u;
                n.height = v;
                r.drawImage(a, 0, 0);
                if (o) {
                    r.font = "24px bold STHeiti, STXihei";
                    r.fillStyle = "#ffffff";
                    r.textAlign = "center";
                    r.textBaseline = "middle";
                    r.lineWidth = 1;
                    r.strokeStyle = "#000000";
                    r.strokeText(o, u / 2, v - 32);
                    r.fillText(o, u / 2, v - 32)
                }
                i.addFrame(r, {
                    delay: c,
                    copy: true
                })
            }
            l++;
            d()
        };
        d();
        i.on("finished",
        function(e) {
            s.html('<img src="' + URL.createObjectURL(e) + '">');
            a.removeClass("loading")
        });
        i.render()
    };
    r.on("submit",
    function(e) {
        e.preventDefault();
        if ($("#radioModule").prop("checked")) {
            var a = $('input[name="template"]:checked').val();
            var t = $("#" + a + "ListX")
        } else {
            t = n
        }
        var i = t.find(".img");
        var s = t.find('input[name="message"]');
        var r = t.find('input[name="delay"]');
        var l = [];
        i.each(function(e) {
            l.push({
                img: this,
                url: this.src,
                message: s.eq(e).val(),
                delay: r.eq(e).val() || 42
            })
        });
        o(l)
    });
    t.on("click",
    function() {
        localStorage.storeGifRadio = this.id
    });
    i.on("click",
    function() {
        var e = $(this).val();
        $(".jsPlayList").hide();
        var a = $("#" + e + "ListX").show();
        if (a.html().trim() == "") {
            a.html('<p class="pt30 pb30 tc"><span class="ui-loading-icon"></span></p>');
            $.ajax({
                url: r.attr("action"),
                data: r.serialize(),
                dataType: "json",
                beforeSend: function(e) {
                    e.setRequestHeader("Local", location.host)
                },
                success: function(t) {
                    if (t.code == 0) {
                        var i = "";
                        $.each(t.data,
                        function(a, t) {
                            t.value = e;
                            i += l.template(t)
                        });
                        a.html(i)
                    } else {
                        a.html('<p class="pt30 pb30 error">' + (t.msg || "没有找到对应数据") + "</p>")
                    }
                },
                error: function() {
                    a.html('<p class="pt30 pb30 error">网络异常，加载失败</p>')
                }
            })
        }
        $("#" + e + "ListX").show().find("img[data-src]").each(function() {
            var e = $(this).attr("data-src");
            $(this).attr("src", e).removeAttr("data-src")
        })
    });
    var d = $("#upImgBtn");
    $("#fileImage").on("change",
    function(e) {
        d.html("重新上传图片");
        c(e)
    });
    var c = function(e) {
        var a = e.target.files || e.dataTransfer.files;
        var t = [];
        for (var i = 0,
        s; s = a[i]; i++) {
            if (s.type.indexOf("image") == 0) {
                if (s.size >= 512e3) {
                    alert('您这张"' + s.name + '"图片大小过大，应小于500k')
                } else {
                    t.push(s)
                }
            } else {
                console.error('文件"' + s.name + '"不是图片。')
            }
        }
        var r = "";
        var l = 0;
        var o = function() {
            if (!t[l]) {
                n.html(r);
                return
            }
            var e = t[l];
            var a = new FileReader;
            a.onload = function(a) {
                r = r + '<div class="img-list jsImgList"><div class="img-x"><span class="img-tips">' + e.name + '</span><img src="' + a.target.result + '" class="img img-food"></div><div class="img-input-x"><div class="ui-input"><input name="message" class="jsMsg" placeholder="输入对话信息"></div><div class="ovh"><span class="l mt5 ml20">延时：</span><input type="number" name="delay" min="0" step="1" size="4" class="ui-input img-input-delay jsDelay" value="42">ms</div><a href="javascript:" class="upload_delete jsDel" title="删除" data-index="' + i + '">删除</a></div></div>';
                l++;
                o()
            };
            a.readAsDataURL(e)
        };
        o()
    };
    var u = $("#fileDragArea");
    var v = u[0];
    if (v) {
        v.addEventListener("dragover",
        function(e) {
            u.addClass("upload_drag_hover");
            e.preventDefault()
        },
        false);
        v.addEventListener("dragleave",
        function(e) {
            u.removeClass("upload_drag_hover");
            e.preventDefault()
        },
        false);
        v.addEventListener("drop",
        function(e) {
            u.removeClass("upload_drag_hover");
            c(e);
            e.preventDefault()
        },
        false)
    }
    n.on("click", ".jsDel",
    function() {
        $(this).parents(".jsImgList").fadeOut(function() {
            $(this).remove()
        })
    });
    n.on("input", ".jsMsg",
    function() {
        var e = $(this),
        a = this.value;
        var t, i;
        if (e.hasClass("jsMsg")) {
            i = $(".jsMsg")
        } else if (e.hasClass("jsDelay")) {
            i = $(".jsDelay")
        }
        var s = i.index(e);
        if (e.hasClass("jsMsg")) {
            t = $(".jsMsg:gt(" + s + ")")
        } else if (e.hasClass("jsDelay")) {
            t = $(".jsDelay:gt(" + s + ")")
        }
        t.each(function() {
            if (!this.avoidAutoFill) {
                this.value = a
            }
        })
    });
    n.on("focus", "input",
    function() {
        this.avoidAutoFill = true
    });
    String.prototype.template = function(e) {
        return this.replace(/\$\w+\$/gi,
        function(a) {
            var t = e[a.replace(/\$/g, "")];
            return typeof t == "undefined" ? "": t
        })
    }
})(document);