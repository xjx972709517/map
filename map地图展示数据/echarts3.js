!function(t, e) {
	"function" == typeof define && define.amd ? define([], e) : "object" == typeof module && module.exports ? module.exports = e() : t.echarts3 = e()
}(this, function() {
	var t, e;
	!function() {
		function i(t, e) {
			if (!e) return t;
			if (0 === t.indexOf(".")) {
				var i = e.split("/"),
					n = t.split("/"),
					r = i.length - 1,
					o = n.length,
					a = 0,
					s = 0;
				t: for (var l = 0; o > l; l++) switch (n[l]) {
				case "..":
					if (!(r > a)) break t;
					a++, s++;
					break;
				case ".":
					s++;
					break;
				default:
					break t
				}
				return i.length = r - a,
				n = n.slice(s),
				i.concat(n).join("/")
			}
			return t
		}
		function n(t) {
			function e(e, a) {
				if ("string" == typeof e) {
					var s = n[e];
					return s || (s = o(i(e, t)), n[e] = s), s
				}
				e instanceof Array && (a = a ||
				function() {}, a.apply(this, r(e, a, t)))
			}
			var n = {};
			return e
		}
		function r(e, n, r) {
			for (var s = [], l = a[r], u = 0, c = Math.min(e.length, n.length); c > u; u++) {
				var h, d = i(e[u], r);
				switch (d) {
				case "require":
					h = l && l.require || t;
					break;
				case "exports":
					h = l.exports;
					break;
				case "module":
					h = l;
					break;
				default:
					h = o(d)
				}
				s.push(h)
			}
			return s
		}
		function o(t) {
			var e = a[t];
			if (!e) throw new Error("No " + t);
			if (!e.defined) {
				var i = e.factory,
					n = i.apply(this, r(e.deps || [], i, t));
				"undefined" != typeof n && (e.exports = n), e.defined = 1
			}
			return e.exports
		}
		var a = {};
		e = function(t, e, i) {
			if (2 === arguments.length && (i = e, e = [], "function" != typeof i)) {
				var r = i;
				i = function() {
					return r
				}
			}
			a[t] = {
				id: t,
				deps: e,
				factory: i,
				defined: 0,
				exports: {},
				require: n(t)
			}
		}, t = n("")
	}(), e("zrender/graphic/Gradient", ["require"], function(t) {
		var e = function(t) {
				this.colorStops = t || []
			};
		return e.prototype = {
			constructor: e,
			addColorStop: function(t, e) {
				this.colorStops.push({
					offset: t,
					color: e
				})
			}
		}, e
	}), e("zrender/core/util", ["require", "../graphic/Gradient"], function(t) {
		function e(t) {
			if ("object" == typeof t && null !== t) {
				var i = t;
				if (t instanceof Array) {
					i = [];
					for (var n = 0, r = t.length; r > n; n++) i[n] = e(t[n])
				} else if (!M(t) && !S(t)) {
					i = {};
					for (var o in t) t.hasOwnProperty(o) && (i[o] = e(t[o]))
				}
				return i
			}
			return t
		}
		function i(t, n, r) {
			if (t) {
				if (!n) return t;
				for (var o in n) if (n.hasOwnProperty(o)) {
					var a = t[o],
						s = n[o];
					!w(s) || !w(a) || _(s) || _(a) || S(s) || S(a) || M(s) || M(a) ? !r && o in t || (t[o] = e(n[o], !0)) : i(a, s, r)
				}
				return t
			}
		}
		function n(t, e) {
			for (var n = t[0], r = 1, o = t.length; o > r; r++) n = i(n, t[r], e);
			return n
		}
		function r(t, e) {
			for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
			return t
		}
		function o(t, e, i) {
			for (var n in e) e.hasOwnProperty(n) && (i ? null != e[n] : null == t[n]) && (t[n] = e[n]);
			return t
		}
		function a() {
			return document.createElement("canvas")
		}
		function s() {
			return P || (P = B.createCanvas().getContext("2d")), P
		}
		function l(t, e) {
			if (t) {
				if (t.indexOf) return t.indexOf(e);
				for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i
			}
			return -1
		}
		function u(t, e) {
			function i() {}
			var n = t.prototype;
			i.prototype = e.prototype, t.prototype = new i;
			for (var r in n) t.prototype[r] = n[r];
			t.prototype.constructor = t, t.superClass = e
		}
		function c(t, e, i) {
			t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, o(t, e, i)
		}
		function h(t) {
			return t ? "string" == typeof t ? !1 : "number" == typeof t.length : void 0
		}
		function d(t, e, i) {
			if (t && e) if (t.forEach && t.forEach === k) t.forEach(e, i);
			else if (t.length === +t.length) for (var n = 0, r = t.length; r > n; n++) e.call(i, t[n], n, t);
			else for (var o in t) t.hasOwnProperty(o) && e.call(i, t[o], o, t)
		}
		function p(t, e, i) {
			if (t && e) {
				if (t.map && t.map === N) return t.map(e, i);
				for (var n = [], r = 0, o = t.length; o > r; r++) n.push(e.call(i, t[r], r, t));
				return n
			}
		}
		function f(t, e, i, n) {
			if (t && e) {
				if (t.reduce && t.reduce === R) return t.reduce(e, i, n);
				for (var r = 0, o = t.length; o > r; r++) i = e.call(n, i, t[r], r, t);
				return i
			}
		}
		function m(t, e, i) {
			if (t && e) {
				if (t.filter && t.filter === E) return t.filter(e, i);
				for (var n = [], r = 0, o = t.length; o > r; r++) e.call(i, t[r], r, t) && n.push(t[r]);
				return n
			}
		}
		function g(t, e, i) {
			if (t && e) for (var n = 0, r = t.length; r > n; n++) if (e.call(i, t[n], n, t)) return t[n]
		}
		function v(t, e) {
			var i = O.call(arguments, 2);
			return function() {
				return t.apply(e, i.concat(O.call(arguments)))
			}
		}
		function y(t) {
			var e = O.call(arguments, 1);
			return function() {
				return t.apply(this, e.concat(O.call(arguments)))
			}
		}
		function _(t) {
			return "[object Array]" === z.call(t)
		}
		function x(t) {
			return "function" == typeof t
		}
		function b(t) {
			return "[object String]" === z.call(t)
		}
		function w(t) {
			var e = typeof t;
			return "function" === e || !! t && "object" == e
		}
		function M(t) {
			return !!D[z.call(t)] || t instanceof A
		}
		function S(t) {
			return t && 1 === t.nodeType && "string" == typeof t.nodeName
		}
		function L(t) {
			for (var e = 0, i = arguments.length; i > e; e++) if (null != arguments[e]) return arguments[e]
		}
		function C() {
			return Function.call.apply(O, arguments)
		}
		function T(t, e) {
			if (!t) throw new Error(e)
		}
		var P, A = t("../graphic/Gradient"),
			D = {
				"[object Function]": 1,
				"[object RegExp]": 1,
				"[object Date]": 1,
				"[object Error]": 1,
				"[object CanvasGradient]": 1
			},
			z = Object.prototype.toString,
			I = Array.prototype,
			k = I.forEach,
			E = I.filter,
			O = I.slice,
			N = I.map,
			R = I.reduce,
			B = {
				inherits: u,
				mixin: c,
				clone: e,
				merge: i,
				mergeAll: n,
				extend: r,
				defaults: o,
				getContext: s,
				createCanvas: a,
				indexOf: l,
				slice: C,
				find: g,
				isArrayLike: h,
				each: d,
				map: p,
				reduce: f,
				filter: m,
				bind: v,
				curry: y,
				isArray: _,
				isString: b,
				isObject: w,
				isFunction: x,
				isBuildInObject: M,
				isDom: S,
				retrieve: L,
				assert: T,
				noop: function() {}
			};
		return B
	}), e("echarts/util/clazz", ["require", "zrender/core/util"], function(t) {
		function e(t, e) {
			for (var i, n = t.constructor, r = t[e];
			(n = n.$superClass) && (i = n.prototype[e]) && i === r;);
			return i
		}
		var i = t("zrender/core/util"),
			n = {},
			r = ".",
			o = "___EC__COMPONENT__CONTAINER___",
			a = n.parseClassType = function(t) {
				var e = {
					main: "",
					sub: ""
				};
				return t && (t = t.split(r), e.main = t[0] || "", e.sub = t[1] || ""), e
			};
		return n.enableClassExtend = function(t, n) {
			t.extend = function(r) {
				var o = function() {
						n && n.apply(this, arguments), t.apply(this, arguments)
					};
				return i.extend(o.prototype, i.extend({
					$superCall: function(t) {
						var n = i.slice(arguments, 1);
						return e(this, t).apply(this, n)
					},
					$superApply: function(t, i) {
						return e(this, t).apply(this, i)
					}
				}, r)), o.extend = this.extend, i.inherits(o, this), o.$superClass = this, o
			}
		}, n.enableClassManagement = function(t, e) {
			function n(t) {
				var e = r[t.main];
				return e && e[o] || (e = r[t.main] = {}, e[o] = !0), e
			}
			e = e || {};
			var r = {};
			if (t.registerClass = function(t, e) {
				if (e) if (e = a(e), e.sub) {
					if (e.sub !== o) {
						var i = n(e);
						i[e.sub] = t
					}
				} else {
					if (r[e.main]) throw new Error(e.main + "exists");
					r[e.main] = t
				}
				return t
			}, t.getClass = function(t, e, i) {
				var n = r[t];
				if (n && n[o] && (n = e ? n[e] : null), i && !n) throw new Error("Component " + t + "." + (e || "") + " not exists");
				return n
			}, t.getClassesByMainType = function(t) {
				t = a(t);
				var e = [],
					n = r[t.main];
				return n && n[o] ? i.each(n, function(t, i) {
					i !== o && e.push(t)
				}) : e.push(n), e
			}, t.hasClass = function(t) {
				return t = a(t), !! r[t.main]
			}, t.getAllClassMainTypes = function() {
				var t = [];
				return i.each(r, function(e, i) {
					t.push(i)
				}), t
			}, t.hasSubTypes = function(t) {
				t = a(t);
				var e = r[t.main];
				return e && e[o]
			}, t.parseClassType = a, e.registerWhenExtend) {
				var s = t.extend;
				s && (t.extend = function(e) {
					var i = s.call(this, e);
					return t.registerClass(i, e.type)
				})
			}
			return t
		}, n.setReadOnly = function(t, e) {
			i.isArray(e) || (e = null != e ? [e] : []), i.each(e, function(e) {
				var n = t[e];
				Object.defineProperty && Object.defineProperty(t, e, {
					value: n,
					writable: !1
				}), i.isArray(t[e]) && Object.freeze && Object.freeze(t[e])
			})
		}, n
	}), e("echarts/model/mixin/makeStyleMapper", ["require", "zrender/core/util"], function(t) {
		var e = t("zrender/core/util");
		return function(t) {
			for (var i = 0; i < t.length; i++) t[i][1] || (t[i][1] = t[i][0]);
			return function(i) {
				for (var n = {}, r = 0; r < t.length; r++) {
					var o = t[r][1];
					if (!(i && e.indexOf(i, o) >= 0)) {
						var a = this.getShallow(o);
						null != a && (n[t[r][0]] = a)
					}
				}
				return n
			}
		}
	}), e("echarts/model/mixin/lineStyle", ["require", "./makeStyleMapper"], function(t) {
		var e = t("./makeStyleMapper")([
			["lineWidth", "width"],
			["stroke", "color"],
			["opacity"],
			["shadowBlur"],
			["shadowOffsetX"],
			["shadowOffsetY"],
			["shadowColor"]
		]);
		return {
			getLineStyle: function(t) {
				var i = e.call(this, t),
					n = this.getLineDash();
				return n && (i.lineDash = n), i
			},
			getLineDash: function() {
				var t = this.get("type");
				return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1]
			}
		}
	}), e("echarts/model/mixin/areaStyle", ["require", "./makeStyleMapper"], function(t) {
		return {
			getAreaStyle: t("./makeStyleMapper")([
				["fill", "color"],
				["shadowBlur"],
				["shadowOffsetX"],
				["shadowOffsetY"],
				["opacity"],
				["shadowColor"]
			])
		}
	}), e("zrender/core/vector", [], function() {
		var t = "undefined" == typeof Float32Array ? Array : Float32Array,
			e = {
				create: function(e, i) {
					var n = new t(2);
					return n[0] = e || 0, n[1] = i || 0, n
				},
				copy: function(t, e) {
					return t[0] = e[0], t[1] = e[1], t
				},
				clone: function(e) {
					var i = new t(2);
					return i[0] = e[0], i[1] = e[1], i
				},
				set: function(t, e, i) {
					return t[0] = e, t[1] = i, t
				},
				add: function(t, e, i) {
					return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t
				},
				scaleAndAdd: function(t, e, i, n) {
					return t[0] = e[0] + i[0] * n, t[1] = e[1] + i[1] * n, t
				},
				sub: function(t, e, i) {
					return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t
				},
				len: function(t) {
					return Math.sqrt(this.lenSquare(t))
				},
				lenSquare: function(t) {
					return t[0] * t[0] + t[1] * t[1]
				},
				mul: function(t, e, i) {
					return t[0] = e[0] * i[0], t[1] = e[1] * i[1], t
				},
				div: function(t, e, i) {
					return t[0] = e[0] / i[0], t[1] = e[1] / i[1], t
				},
				dot: function(t, e) {
					return t[0] * e[0] + t[1] * e[1]
				},
				scale: function(t, e, i) {
					return t[0] = e[0] * i, t[1] = e[1] * i, t
				},
				normalize: function(t, i) {
					var n = e.len(i);
					return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = i[0] / n, t[1] = i[1] / n), t
				},
				distance: function(t, e) {
					return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
				},
				distanceSquare: function(t, e) {
					return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
				},
				negate: function(t, e) {
					return t[0] = -e[0], t[1] = -e[1], t
				},
				lerp: function(t, e, i, n) {
					return t[0] = e[0] + n * (i[0] - e[0]), t[1] = e[1] + n * (i[1] - e[1]), t
				},
				applyTransform: function(t, e, i) {
					var n = e[0],
						r = e[1];
					return t[0] = i[0] * n + i[2] * r + i[4], t[1] = i[1] * n + i[3] * r + i[5], t
				},
				min: function(t, e, i) {
					return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t
				},
				max: function(t, e, i) {
					return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t
				}
			};
		return e.length = e.len, e.lengthSquare = e.lenSquare, e.dist = e.distance, e.distSquare = e.distanceSquare, e
	}), e("zrender/core/matrix", [], function() {
		var t = "undefined" == typeof Float32Array ? Array : Float32Array,
			e = {
				create: function() {
					var i = new t(6);
					return e.identity(i), i
				},
				identity: function(t) {
					return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
				},
				copy: function(t, e) {
					return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
				},
				mul: function(t, e, i) {
					var n = e[0] * i[0] + e[2] * i[1],
						r = e[1] * i[0] + e[3] * i[1],
						o = e[0] * i[2] + e[2] * i[3],
						a = e[1] * i[2] + e[3] * i[3],
						s = e[0] * i[4] + e[2] * i[5] + e[4],
						l = e[1] * i[4] + e[3] * i[5] + e[5];
					return t[0] = n, t[1] = r, t[2] = o, t[3] = a, t[4] = s, t[5] = l, t
				},
				translate: function(t, e, i) {
					return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + i[0], t[5] = e[5] + i[1], t
				},
				rotate: function(t, e, i) {
					var n = e[0],
						r = e[2],
						o = e[4],
						a = e[1],
						s = e[3],
						l = e[5],
						u = Math.sin(i),
						c = Math.cos(i);
					return t[0] = n * c + a * u, t[1] = -n * u + a * c, t[2] = r * c + s * u, t[3] = -r * u + c * s, t[4] = c * o + u * l, t[5] = c * l - u * o, t
				},
				scale: function(t, e, i) {
					var n = i[0],
						r = i[1];
					return t[0] = e[0] * n, t[1] = e[1] * r, t[2] = e[2] * n, t[3] = e[3] * r, t[4] = e[4] * n, t[5] = e[5] * r, t
				},
				invert: function(t, e) {
					var i = e[0],
						n = e[2],
						r = e[4],
						o = e[1],
						a = e[3],
						s = e[5],
						l = i * a - o * n;
					return l ? (l = 1 / l, t[0] = a * l, t[1] = -o * l, t[2] = -n * l, t[3] = i * l, t[4] = (n * s - a * r) * l, t[5] = (o * r - i * s) * l, t) : null
				}
			};
		return e
	}), e("zrender/core/BoundingRect", ["require", "./vector", "./matrix"], function(t) {
		function e(t, e, i, n) {
			this.x = t, this.y = e, this.width = i, this.height = n
		}
		var i = t("./vector"),
			n = t("./matrix"),
			r = i.applyTransform,
			o = Math.min,
			a = Math.abs,
			s = Math.max;
		return e.prototype = {
			constructor: e,
			union: function(t) {
				var e = o(t.x, this.x),
					i = o(t.y, this.y);
				this.width = s(t.x + t.width, this.x + this.width) - e, this.height = s(t.y + t.height, this.y + this.height) - i, this.x = e, this.y = i
			},
			applyTransform: function() {
				var t = [],
					e = [];
				return function(i) {
					i && (t[0] = this.x, t[1] = this.y, e[0] = this.x + this.width, e[1] = this.y + this.height, r(t, t, i), r(e, e, i), this.x = o(t[0], e[0]), this.y = o(t[1], e[1]), this.width = a(e[0] - t[0]), this.height = a(e[1] - t[1]))
				}
			}(),
			calculateTransform: function(t) {
				var e = this,
					i = t.width / e.width,
					r = t.height / e.height,
					o = n.create();
				return n.translate(o, o, [-e.x, -e.y]), n.scale(o, o, [i, r]), n.translate(o, o, [t.x, t.y]), o
			},
			intersect: function(t) {
				var e = this,
					i = e.x,
					n = e.x + e.width,
					r = e.y,
					o = e.y + e.height,
					a = t.x,
					s = t.x + t.width,
					l = t.y,
					u = t.y + t.height;
				return !(a > n || i > s || l > o || r > u)
			},
			contain: function(t, e) {
				var i = this;
				return t >= i.x && t <= i.x + i.width && e >= i.y && e <= i.y + i.height
			},
			clone: function() {
				return new e(this.x, this.y, this.width, this.height)
			},
			copy: function(t) {
				this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
			}
		}, e
	}), e("zrender/contain/text", ["require", "../core/util", "../core/BoundingRect"], function(t) {
		function e(t, e) {
			var i = t + ":" + e;
			if (s[i]) return s[i];
			for (var n = (t + "").split("\n"), r = 0, o = 0, a = n.length; a > o; o++) r = Math.max(d.measureText(n[o], e).width, r);
			return l > u && (l = 0, s = {}), l++, s[i] = r, r
		}
		function i(t, i, n, r) {
			var o = ((t || "") + "").split("\n").length,
				a = e(t, i),
				s = e("国", i),
				l = o * s,
				u = new h(0, 0, a, l);
			switch (u.lineHeight = s, r) {
			case "bottom":
			case "alphabetic":
				u.y -= s;
				break;
			case "middle":
				u.y -= s / 2
			}
			switch (n) {
			case "end":
			case "right":
				u.x -= u.width;
				break;
			case "center":
				u.x -= u.width / 2
			}
			return u
		}
		function n(t, e, i, n) {
			var r = e.x,
				o = e.y,
				a = e.height,
				s = e.width,
				l = i.height,
				u = a / 2 - l / 2,
				c = "left";
			switch (t) {
			case "left":
				r -= n, o += u, c = "right";
				break;
			case "right":
				r += n + s, o += u, c = "left";
				break;
			case "top":
				r += s / 2, o -= n + l, c = "center";
				break;
			case "bottom":
				r += s / 2, o += a + n, c = "center";
				break;
			case "inside":
				r += s / 2, o += u, c = "center";
				break;
			case "insideLeft":
				r += n, o += u, c = "left";
				break;
			case "insideRight":
				r += s - n, o += u, c = "right";
				break;
			case "insideTop":
				r += s / 2, o += n, c = "center";
				break;
			case "insideBottom":
				r += s / 2, o += a - l - n, c = "center";
				break;
			case "insideTopLeft":
				r += n, o += n, c = "left";
				break;
			case "insideTopRight":
				r += s - n, o += n, c = "right";
				break;
			case "insideBottomLeft":
				r += n, o += a - l - n;
				break;
			case "insideBottomRight":
				r += s - n, o += a - l - n, c = "right"
			}
			return {
				x: r,
				y: o,
				textAlign: c,
				textBaseline: "top"
			}
		}
		function r(t, i, n, r) {
			if (!n) return "";
			r = c.defaults({
				ellipsis: "...",
				minCharacters: 3,
				maxIterations: 3,
				cnCharWidth: e("国", i),
				ascCharWidth: e("a", i)
			}, r, !0), n -= e(r.ellipsis);
			for (var a = (t + "").split("\n"), s = 0, l = a.length; l > s; s++) a[s] = o(a[s], i, n, r);
			return a.join("\n")
		}
		function o(t, i, n, r) {
			for (var o = 0;; o++) {
				var s = e(t, i);
				if (n > s || o >= r.maxIterations) {
					t += r.ellipsis;
					break
				}
				var l = 0 === o ? a(t, n, r) : Math.floor(t.length * n / s);
				if (l < r.minCharacters) {
					t = "";
					break
				}
				t = t.substr(0, l)
			}
			return t
		}
		function a(t, e, i) {
			for (var n = 0, r = 0, o = t.length; o > r && e > n; r++) {
				var a = t.charCodeAt(r);
				n += a >= 0 && 127 >= a ? i.ascCharWidth : i.cnCharWidth
			}
			return r
		}
		var s = {},
			l = 0,
			u = 5e3,
			c = t("../core/util"),
			h = t("../core/BoundingRect"),
			d = {
				getWidth: e,
				getBoundingRect: i,
				adjustTextPositionOnRect: n,
				ellipsis: r,
				measureText: function(t, e) {
					var i = c.getContext();
					return i.font = e, i.measureText(t)
				}
			};
		return d
	}), e("echarts/model/mixin/textStyle", ["require", "zrender/contain/text"], function(t) {
		function e(t, e) {
			return t && t.getShallow(e)
		}
		var i = t("zrender/contain/text");
		return {
			getTextColor: function() {
				var t = this.ecModel;
				return this.getShallow("color") || t && t.get("textStyle.color")
			},
			getFont: function() {
				var t = this.ecModel,
					i = t && t.getModel("textStyle");
				return [this.getShallow("fontStyle") || e(i, "fontStyle"), this.getShallow("fontWeight") || e(i, "fontWeight"), (this.getShallow("fontSize") || e(i, "fontSize") || 12) + "px", this.getShallow("fontFamily") || e(i, "fontFamily") || "sans-serif"].join(" ")
			},
			getTextRect: function(t) {
				var e = this.get("textStyle") || {};
				return i.getBoundingRect(t, this.getFont(), e.align, e.baseline)
			},
			ellipsis: function(t, e, n) {
				return i.ellipsis(t, this.getFont(), e, n)
			}
		}
	}), e("echarts/model/mixin/itemStyle", ["require", "./makeStyleMapper"], function(t) {
		return {
			getItemStyle: t("./makeStyleMapper")([
				["fill", "color"],
				["stroke", "borderColor"],
				["lineWidth", "borderWidth"],
				["opacity"],
				["shadowBlur"],
				["shadowOffsetX"],
				["shadowOffsetY"],
				["shadowColor"]
			])
		}
	}), e("echarts/model/Model", ["require", "zrender/core/util", "../util/clazz", "./mixin/lineStyle", "./mixin/areaStyle", "./mixin/textStyle", "./mixin/itemStyle"], function(t) {
		function e(t, e, i) {
			this.parentModel = e || null, this.ecModel = i || null, this.option = t, this.init.apply(this, arguments)
		}
		var i = t("zrender/core/util"),
			n = t("../util/clazz");
		e.prototype = {
			constructor: e,
			init: function(t) {},
			mergeOption: function(t) {
				i.merge(this.option, t, !0)
			},
			get: function(t, e) {
				if (!t) return this.option;
				"string" == typeof t && (t = t.split("."));
				for (var i = this.option, n = this.parentModel, r = 0; r < t.length && (i = i && "object" == typeof i ? i[t[r]] : null, null != i); r++);
				return null == i && n && !e && (i = n.get(t)), i
			},
			getShallow: function(t, e) {
				var i = this.option,
					n = i && i[t],
					r = this.parentModel;
				return null == n && r && !e && (n = r.getShallow(t)), n
			},
			getModel: function(t, i) {
				var n = this.get(t, !0),
					r = this.parentModel,
					o = new e(n, i || r && r.getModel(t), this.ecModel);
				return o
			},
			isEmpty: function() {
				return null == this.option
			},
			restoreData: function() {},
			clone: function() {
				var t = this.constructor;
				return new t(i.clone(this.option))
			},
			setReadOnly: function(t) {
				n.setReadOnly(this, t)
			}
		}, n.enableClassExtend(e);
		var r = i.mixin;
		return r(e, t("./mixin/lineStyle")), r(e, t("./mixin/areaStyle")), r(e, t("./mixin/textStyle")), r(e, t("./mixin/itemStyle")), e
	}), e("echarts/util/component", ["require", "zrender/core/util", "./clazz"], function(t) {
		var e = t("zrender/core/util"),
			i = t("./clazz"),
			n = i.parseClassType,
			r = 0,
			o = {},
			a = "_";
		return o.getUID = function(t) {
			return [t || "", r++, Math.random()].join(a)
		}, o.enableSubTypeDefaulter = function(t) {
			var e = {};
			return t.registerSubTypeDefaulter = function(t, i) {
				t = n(t), e[t.main] = i
			}, t.determineSubType = function(i, r) {
				var o = r.type;
				if (!o) {
					var a = n(i).main;
					t.hasSubTypes(i) && e[a] && (o = e[a](r))
				}
				return o
			}, t
		}, o.enableTopologicalTravel = function(t, i) {
			function n(t) {
				var n = {},
					a = [];
				return e.each(t, function(s) {
					var l = r(n, s),
						u = l.originalDeps = i(s),
						c = o(u, t);
					l.entryCount = c.length, 0 === l.entryCount && a.push(s), e.each(c, function(t) {
						e.indexOf(l.predecessor, t) < 0 && l.predecessor.push(t);
						var i = r(n, t);
						e.indexOf(i.successor, t) < 0 && i.successor.push(s)
					})
				}), {
					graph: n,
					noEntryList: a
				}
			}
			function r(t, e) {
				return t[e] || (t[e] = {
					predecessor: [],
					successor: []
				}), t[e]
			}
			function o(t, i) {
				var n = [];
				return e.each(t, function(t) {
					e.indexOf(i, t) >= 0 && n.push(t)
				}), n
			}
			t.topologicalTravel = function(t, i, r, o) {
				function a(t) {
					u[t].entryCount--, 0 === u[t].entryCount && c.push(t)
				}
				function s(t) {
					h[t] = !0, a(t)
				}
				if (t.length) {
					var l = n(i),
						u = l.graph,
						c = l.noEntryList,
						h = {};
					for (e.each(t, function(t) {
						h[t] = !0
					}); c.length;) {
						var d = c.pop(),
							p = u[d],
							f = !! h[d];
						f && (r.call(o, d, p.originalDeps.slice()), delete h[d]), e.each(p.successor, f ? s : a)
					}
					e.each(h, function() {
						throw new Error("Circle dependency may exists")
					})
				}
			}
		}, o
	}), e("echarts/util/number", ["require", "zrender/core/util"], function(t) {
		function e(t) {
			return t.replace(/^\s+/, "").replace(/\s+$/, "")
		}
		var i = t("zrender/core/util"),
			n = {},
			r = 1e-4;
		return n.linearMap = function(t, e, r, o) {
			if (i.isArray(t)) return i.map(t, function(t) {
				return n.linearMap(t, e, r, o)
			});
			var a = e[1] - e[0];
			if (0 === a) return (r[0] + r[1]) / 2;
			var s = (t - e[0]) / a;
			return o && (s = Math.min(Math.max(s, 0), 1)), s * (r[1] - r[0]) + r[0]
		}, n.parsePercent = function(t, i) {
			switch (t) {
			case "center":
			case "middle":
				t = "50%";
				break;
			case "left":
			case "top":
				t = "0%";
				break;
			case "right":
			case "bottom":
				t = "100%"
			}
			return "string" == typeof t ? e(t).match(/%$/) ? parseFloat(t) / 100 * i : parseFloat(t) : null == t ? NaN : +t
		}, n.round = function(t) {
			return +(+t).toFixed(12)
		}, n.asc = function(t) {
			return t.sort(function(t, e) {
				return t - e
			}), t
		}, n.getPrecision = function(t) {
			for (var e = 1, i = 0; Math.round(t * e) / e !== t;) e *= 10, i++;
			return i
		}, n.getPixelPrecision = function(t, e) {
			var i = Math.log,
				n = Math.LN10,
				r = Math.floor(i(t[1] - t[0]) / n),
				o = Math.round(i(Math.abs(e[1] - e[0])) / n);
			return Math.max(-r + o, 0)
		}, n.MAX_SAFE_INTEGER = 9007199254740991, n.remRadian = function(t) {
			var e = 2 * Math.PI;
			return (t % e + e) % e
		}, n.isRadianAroundZero = function(t) {
			return t > -r && r > t
		}, n.parseDate = function(t) {
			return t instanceof Date ? t : new Date("string" == typeof t ? t.replace(/-/g, "/") : t)
		}, n
	}), e("echarts/util/format", ["require", "zrender/core/util"], function(t) {
		function e(t) {
			return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""))
		}
		function i(t) {
			return t.toLowerCase().replace(/-(.)/g, function(t, e) {
				return e.toUpperCase()
			})
		}
		function n(t) {
			var e = t.length;
			return "number" == typeof t ? [t, t, t, t] : 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
		}
		function r(t) {
			return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
		}
		function o(t, e) {
			return "{" + t + (null == e ? "" : e) + "}"
		}
		function a(t, e) {
			s.isArray(e) || (e = [e]);
			var i = e.length;
			if (!i) return "";
			for (var n = e[0].$vars, r = 0; r < n.length; r++) {
				var a = l[r];
				t = t.replace(o(a), o(a, 0))
			}
			for (var u = 0; i > u; u++) for (var c = 0; c < n.length; c++) t = t.replace(o(l[c], u), e[u][n[c]]);
			return t
		}
		var s = t("zrender/core/util"),
			l = ["a", "b", "c", "d", "e", "f", "g"];
		return {
			normalizeCssArray: n,
			addCommas: e,
			toCamelCase: i,
			encodeHTML: r,
			formatTpl: a
		}
	}), e("echarts/util/layout", ["require", "zrender/core/util", "zrender/core/BoundingRect", "./number", "./format"], function(t) {
		function e(t, e, i, n, r) {
			var o = 0,
				a = 0;
			null == n && (n = 1 / 0), null == r && (r = 1 / 0);
			var s = 0;
			e.eachChild(function(l, u) {
				var c, h, d = l.position,
					p = l.getBoundingRect(),
					f = e.childAt(u + 1),
					m = f && f.getBoundingRect();
				if ("horizontal" === t) {
					var g = p.width + (m ? -m.x + p.x : 0);
					c = o + g, c > n || l.newline ? (o = 0, c = g, a += s + i, s = 0) : s = Math.max(s, p.height)
				} else {
					var v = p.height + (m ? -m.y + p.y : 0);
					h = a + v, h > r || l.newline ? (o += s + i, a = 0, h = v, s = 0) : s = Math.max(s, p.width)
				}
				l.newline || (d[0] = o, d[1] = a, "horizontal" === t ? o = c + i : a = h + i)
			})
		}
		var i = t("zrender/core/util"),
			n = t("zrender/core/BoundingRect"),
			r = t("./number"),
			o = t("./format"),
			a = r.parsePercent,
			s = i.each,
			l = {};
		return l.box = e, l.vbox = i.curry(e, "vertical"), l.hbox = i.curry(e, "horizontal"), l.getAvailableSize = function(t, e, i) {
			var n = e.width,
				r = e.height,
				s = a(t.x, n),
				l = a(t.y, r),
				u = a(t.x2, n),
				c = a(t.y2, r);
			return (isNaN(s) || isNaN(parseFloat(t.x))) && (s = 0), (isNaN(u) || isNaN(parseFloat(t.x2))) && (u = n), (isNaN(l) || isNaN(parseFloat(t.y))) && (l = 0), (isNaN(c) || isNaN(parseFloat(t.y2))) && (c = r), i = o.normalizeCssArray(i || 0), {
				width: Math.max(u - s - i[1] - i[3], 0),
				height: Math.max(c - l - i[0] - i[2], 0)
			}
		}, l.getLayoutRect = function(t, e, i) {
			i = o.normalizeCssArray(i || 0);
			var r = e.width,
				s = e.height,
				l = a(t.left, r),
				u = a(t.top, s),
				c = a(t.right, r),
				h = a(t.bottom, s),
				d = a(t.width, r),
				p = a(t.height, s),
				f = i[2] + i[0],
				m = i[1] + i[3],
				g = t.aspect;
			switch (isNaN(d) && (d = r - c - m - l), isNaN(p) && (p = s - h - f - u), isNaN(d) && isNaN(p) && (g > r / s ? d = .8 * r : p = .8 * s), null != g && (isNaN(d) && (d = g * p), isNaN(p) && (p = d / g)), isNaN(l) && (l = r - c - d - m), isNaN(u) && (u = s - h - p - f), t.left || t.right) {
			case "center":
				l = r / 2 - d / 2 - i[3];
				break;
			case "right":
				l = r - d - m
			}
			switch (t.top || t.bottom) {
			case "middle":
			case "center":
				u = s / 2 - p / 2 - i[0];
				break;
			case "bottom":
				u = s - p - f
			}
			var v = new n(l + i[3], u + i[0], d, p);
			return v.margin = i, v
		}, l.positionGroup = function(t, e, n, r) {
			var o = t.getBoundingRect();
			e = i.extend(i.clone(e), {
				width: o.width,
				height: o.height
			}), e = l.getLayoutRect(e, n, r), t.position = [e.x - o.x, e.y - o.y]
		}, l.mergeLayoutParam = function(t, e, i) {
			function n(n) {
				var a = {},
					l = 0,
					u = {},
					c = 0,
					h = i.ignoreSize ? 1 : 2;
				if (s(n, function(e) {
					u[e] = t[e]
				}), s(n, function(t) {
					r(e, t) && (a[t] = u[t] = e[t]), o(a, t) && l++, o(u, t) && c++
				}), c !== h && l) {
					if (h > c) {
						var d = 0;
						return s(n, function(t) {
							"auto" === u[t] && (h - c > d ? d++ : u[t] = null)
						}), u
					}
					if (l >= h) return a;
					for (var p = 0; p < n.length; p++) {
						var f = n[p];
						if (!r(a, f) && r(t, f)) {
							a[f] = t[f];
							break
						}
					}
					return a
				}
				return u
			}
			function r(t, e) {
				return t.hasOwnProperty(e)
			}
			function o(t, e) {
				return null != t[e] && "auto" !== t[e]
			}
			function a(t, e, i) {
				s(t, function(t) {
					e[t] = i[t]
				})
			}
			i = i || {};
			var l = ["width", "left", "right"],
				u = ["height", "top", "bottom"],
				c = n(l),
				h = n(u);
			a(l, t, c), a(u, t, h)
		}, l.getLayoutParams = function(t) {
			var e = {};
			return t && s(["left", "right", "top", "bottom", "width", "height"], function(i) {
				t.hasOwnProperty(i) && (e[i] = t[i])
			}), e
		}, l
	}), e("echarts/model/mixin/boxLayout", ["require"], function(t) {
		return {
			getBoxLayoutParams: function() {
				return {
					left: this.get("left"),
					top: this.get("top"),
					right: this.get("right"),
					bottom: this.get("bottom"),
					width: this.get("width"),
					height: this.get("height")
				}
			}
		}
	}), e("echarts/model/Component", ["require", "./Model", "zrender/core/util", "../util/component", "../util/clazz", "../util/layout", "./mixin/boxLayout"], function(t) {
		function e(t) {
			var e = [];
			return n.each(l.getClassesByMainType(t), function(t) {
				r.apply(e, t.prototype.dependencies || [])
			}), n.map(e, function(t) {
				return a.parseClassType(t).main
			})
		}
		var i = t("./Model"),
			n = t("zrender/core/util"),
			r = Array.prototype.push,
			o = t("../util/component"),
			a = t("../util/clazz"),
			s = t("../util/layout"),
			l = i.extend({
				type: "component",
				id: "",
				name: "",
				mainType: "",
				subType: "",
				componentIndex: 0,
				defaultOption: null,
				ecModel: null,
				dependentModels: [],
				uid: null,
				layoutMode: null,
				init: function(t, e, i, n) {
					this.mergeDefaultAndTheme(this.option, this.ecModel)
				},
				mergeDefaultAndTheme: function(t, e) {
					var i = this.layoutMode,
						r = i ? s.getLayoutParams(t) : {},
						o = e.getTheme();
					n.merge(t, o.get(this.mainType)), n.merge(t, this.getDefaultOption()), i && s.mergeLayoutParam(t, r, i)
				},
				mergeOption: function(t) {
					n.merge(this.option, t, !0);
					var e = this.layoutMode;
					e && s.mergeLayoutParam(this.option, t, e)
				},
				getDefaultOption: function() {
					if (!this.hasOwnProperty("__defaultOption")) {
						for (var t = [], e = this.constructor; e;) {
							var i = e.prototype.defaultOption;
							i && t.push(i), e = e.superClass
						}
						for (var r = {}, o = t.length - 1; o >= 0; o--) r = n.merge(r, t[o], !0);
						this.__defaultOption = r
					}
					return this.__defaultOption
				}
			});
		return a.enableClassExtend(l, function(t, e, i, r) {
			n.extend(this, r), this.uid = o.getUID("componentModel"), this.setReadOnly(["type", "id", "uid", "name", "mainType", "subType", "dependentModels", "componentIndex"])
		}), a.enableClassManagement(l, {
			registerWhenExtend: !0
		}), o.enableSubTypeDefaulter(l), o.enableTopologicalTravel(l, e), n.mixin(l, t("./mixin/boxLayout")), l
	}), e("echarts/model/globalDefault", [], function() {
		var t = "";
		return "undefined" != typeof navigator && (t = navigator.platform || ""), {
			color: ["#c23531", "#314656", "#61a0a8", "#dd8668", "#91c7ae", "#6e7074", "#61a0a8", "#bda29a", "#44525d", "#c4ccd3"],
			grid: {},
			textStyle: {
				fontFamily: t.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
				fontSize: 12,
				fontStyle: "normal",
				fontWeight: "normal"
			},
			animation: !0,
			animationThreshold: 2e3,
			animationDuration: 1e3,
			animationDurationUpdate: 300,
			animationEasing: "exponentialOut",
			animationEasingUpdate: "cubicOut"
		}
	}), e("echarts/model/Global", ["require", "zrender/core/util", "./Model", "./Component", "./globalDefault"], function(t) {
		function e(t, e) {
			for (var i in e) _.hasClass(i) || ("object" == typeof e[i] ? t[i] = t[i] ? h.merge(t[i], e[i], !1) : h.clone(e[i]) : t[i] = e[i])
		}
		function i(t) {
			t = t, this.option = {}, this._componentsMap = {}, this._seriesIndices = null, e(t, this._theme.option), h.merge(t, x, !1), this.mergeOption(t)
		}
		function n(t, e) {
			h.isArray(e) || (e = e ? [e] : []);
			var i = {};
			return p(e, function(e) {
				i[e] = (t[e] || []).slice()
			}), i
		}
		function r(t, e) {
			t = (t || []).slice();
			var i = [];
			return p(e, function(e, n) {
				if (y(e) && e.id) for (var r = 0, o = t.length; o > r; r++) if (t[r].id === e.id) return void(i[n] = t.splice(r, 1)[0])
			}), p(e, function(e, n) {
				if (y(e) && e.name && !u(e)) for (var r = 0, o = t.length; o > r; r++) if (t[r].name === e.name) return void(i[n] = t.splice(r, 1)[0])
			}), p(e, function(e, n) {
				i[n] || !t[n] || u(e) || (i[n] = t[n])
			}), i
		}
		function o(t, e, i) {
			function n(n) {
				p(e, function(e, o) {
					if (y(e)) {
						var a = i[o],
							s = r[o],
							l = t + "." + s.subType;
						n(s, e, a, l)
					}
				})
			}
			var r = [],
				o = "\x00",
				s = {},
				l = {};
			return p(e, function(e, n) {
				if (y(e)) {
					var o = i[n],
						s = a(t, e, o),
						l = {
							mainType: t,
							subType: s
						};
					r[n] = l
				}
			}), n(function(t, e, i, n) {
				t.name = i ? i.name : null != e.name ? e.name : o + "-", l[t.name] = 0
			}), n(function(t, e, i, n) {
				var r = t.name;
				if (t.id = i ? i.id : null != e.id ? e.id : o + [n, r, l[r]++].join("|"), s[t.id]) throw new Error("id duplicates: " + t.id);
				s[t.id] = 1
			}), r
		}
		function a(t, e, i) {
			var n = e.type ? e.type : i ? i.subType : _.determineSubType(t, e);
			return n
		}
		function s(t) {
			return m(t, function(t) {
				return t.componentIndex
			}) || []
		}
		function l(t, e) {
			return e.hasOwnProperty("subType") ? f(t, function(t) {
				return t.subType === e.subType
			}) : t
		}
		function u(t) {
			return t.id && 0 === (t.id + "").indexOf("\x00_ec_\x00")
		}
		function c(t) {
			if (!t._seriesIndices) throw new Error("Series is not initialized. Please depends sereis.")
		}
		var h = t("zrender/core/util"),
			d = t("./Model"),
			p = h.each,
			f = h.filter,
			m = h.map,
			g = h.isArray,
			v = h.indexOf,
			y = h.isObject,
			_ = t("./Component"),
			x = t("./globalDefault"),
			b = d.extend({
				constructor: b,
				init: function(t, e, i, n) {
					i = i || {}, this.option = null, this._theme = new d(i), this._optionManager = n
				},
				setOption: function(t, e) {
					this._optionManager.setOption(t, e), this.resetOption()
				},
				resetOption: function(t) {
					var e = !1,
						n = this._optionManager;
					if (!t || "recreate" === t) {
						var r = n.mountOption();
						this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(r)) : i.call(this, r), e = !0
					}
					if (("timeline" === t || "media" === t) && this.restoreData(), !t || "recreate" === t || "timeline" === t) {
						var o = n.getTimelineOption(this);
						o && (this.mergeOption(o), e = !0)
					}
					if (!t || "recreate" === t || "media" === t) {
						var a = n.getMediaOption(this, this._api);
						a.length && p(a, function(t) {
							this.mergeOption(t, e = !0)
						}, this)
					}
					return e
				},
				mergeOption: function(t) {
					function e(e, n) {
						var r = t[e];
						r ? a.call(this, e, r, n) : i.call(this, e), "series" === e && (this._seriesIndices = s(u.series))
					}
					function i(t) {
						p(u[t], function(t) {
							t.mergeOption({}, this)
						}, this)
					}
					function a(t, e, i) {
						h.isArray(e) || (e = [e]), u[t] || (u[t] = []);
						var a = r(u[t], e),
							s = o(t, e, a),
							c = n(u, i);
						l[t] = [], p(e, function(e, i) {
							if (y(e)) {
								var n = a[i],
									r = _.getClass(t, s[i].subType, !0);
								n && n instanceof r ? n.mergeOption(e, this) : (n = new r(e, this, this, h.extend({
									dependentModels: c,
									componentIndex: i
								}, s[i])), u[t][i] = n), l[t][i] = n.option
							}
						}, this)
					}
					var l = this.option,
						u = this._componentsMap,
						c = [];
					p(t, function(t, e) {
						null != t && (_.hasClass(e) ? c.push(e) : l[e] = null == l[e] ? h.clone(t) : h.merge(l[e], t, !0))
					}), _.topologicalTravel(c, _.getAllClassMainTypes(), e, this)
				},
				getTheme: function() {
					return this._theme
				},
				getComponent: function(t, e) {
					var i = this._componentsMap[t];
					return i ? i[e || 0] : void 0
				},
				queryComponents: function(t) {
					var e = t.mainType;
					if (!e) return [];
					var i = t.index,
						n = t.id,
						r = t.name,
						o = this._componentsMap[e];
					if (!o || !o.length) return [];
					var a;
					if (null != i) g(i) || (i = [i]), a = f(m(i, function(t) {
						return o[t]
					}), function(t) {
						return !!t
					});
					else if (null != n) {
						var s = g(n);
						a = f(o, function(t) {
							return s && v(n, t.id) >= 0 || !s && t.id === n
						})
					} else if (null != r) {
						var u = g(r);
						a = f(o, function(t) {
							return u && v(r, t.name) >= 0 || !u && t.name === r
						})
					}
					return l(a, t)
				},
				findComponents: function(t) {
					function e(t) {
						var e = r + "Index",
							i = r + "Id",
							n = r + "Name";
						return t && (t.hasOwnProperty(e) || t.hasOwnProperty(i) || t.hasOwnProperty(n)) ? {
							mainType: r,
							index: t[e],
							id: t[i],
							name: t[n]
						} : null
					}
					function i(e) {
						return t.filter ? f(e, t.filter) : e
					}
					var n = t.query,
						r = t.mainType,
						o = e(n),
						a = o ? this.queryComponents(o) : this._componentsMap[r];
					return i(l(a, t))
				},
				eachComponent: function(t, e, i) {
					var n = this._componentsMap;
					if ("function" == typeof t) i = e, e = t, p(n, function(t, n) {
						p(t, function(t, r) {
							e.call(i, n, t, r)
						})
					});
					else if (h.isString(t)) p(n[t], e, i);
					else if (y(t)) {
						var r = this.findComponents(t);
						p(r, e, i)
					}
				},
				getSeriesByName: function(t) {
					var e = this._componentsMap.series;
					return f(e, function(e) {
						return e.name === t
					})
				},
				getSeriesByIndex: function(t) {
					return this._componentsMap.series[t]
				},
				getSeriesByType: function(t) {
					var e = this._componentsMap.series;
					return f(e, function(e) {
						return e.subType === t
					})
				},
				getSeries: function() {
					return this._componentsMap.series.slice()
				},
				eachSeries: function(t, e) {
					c(this), p(this._seriesIndices, function(i) {
						var n = this._componentsMap.series[i];
						t.call(e, n, i)
					}, this)
				},
				eachRawSeries: function(t, e) {
					p(this._componentsMap.series, t, e)
				},
				eachSeriesByType: function(t, e, i) {
					c(this), p(this._seriesIndices, function(n) {
						var r = this._componentsMap.series[n];
						r.subType === t && e.call(i, r, n)
					}, this)
				},
				eachRawSeriesByType: function(t, e, i) {
					return p(this.getSeriesByType(t), e, i)
				},
				isSeriesFiltered: function(t) {
					return c(this), h.indexOf(this._seriesIndices, t.componentIndex) < 0
				},
				filterSeries: function(t, e) {
					c(this);
					var i = f(this._componentsMap.series, t, e);
					this._seriesIndices = s(i)
				},
				restoreData: function() {
					var t = this._componentsMap;
					this._seriesIndices = s(t.series);
					var e = [];
					p(t, function(t, i) {
						e.push(i)
					}), _.topologicalTravel(e, _.getAllClassMainTypes(), function(e, i) {
						p(t[e], function(t) {
							t.restoreData()
						})
					})
				}
			});
		return b
	}), e("echarts/ExtensionAPI", ["require", "zrender/core/util"], function(t) {
		function e(t) {
			i.each(n, function(e) {
				this[e] = i.bind(t[e], t)
			}, this)
		}
		var i = t("zrender/core/util"),
			n = ["getDom", "getZr", "getWidth", "getHeight", "dispatchAction", "on", "off", "getDataURL", "getConnectedDataURL"];
		return e
	}), e("echarts/CoordinateSystem", ["require"], function(t) {
		function e() {
			this._coordinateSystems = {}, this._coordinateSystemsList = []
		}
		var i = {};
		return e.prototype = {
			constructor: e,
			update: function(t, e) {
				var n = {};
				for (var r in i) n[r] = i[r].create(t, e);
				this._coordinateSystems = n
			},
			get: function(t, e) {
				var i = this._coordinateSystems[t];
				return i ? i[e || 0] : void 0
			}
		}, e.register = function(t, e) {
			i[t] = e
		}, e
	}), e("echarts/model/OptionManager", ["require", "zrender/core/util"], function(t) {
		function e(t) {
			this._api = t, this._timelineOptions, this._mediaList, this._mediaDefault, this._currentMediaIndices = [], this._optionBackup
		}
		function i(t, e) {
			var i, n, r = [],
				o = [],
				l = t.timeline;
			if ((l || t.options) && (n = t.baseOption || {}, r = (t.options || []).slice()), t.media) {
				n = t.baseOption || {};
				var u = t.media;
				s(u, function(t) {
					t && t.option && (t.query ? o.push(t) : i || (i = t))
				})
			}
			return n || (n = t), n.timeline || (n.timeline = l), s([n].concat(r).concat(a.map(o, function(t) {
				return t.option
			})), function(t) {
				s(e, function(e) {
					e(t)
				})
			}), {
				baseOption: n,
				timelineOptions: r,
				mediaDefault: i,
				mediaList: o
			}
		}
		function n(t, e, i) {
			var n = {
				width: e,
				height: i,
				aspectratio: e / i
			},
				o = !0;
			return a.each(t, function(t, e) {
				var i = e.match(c);
				if (i && i[1] && i[2]) {
					var a = i[1],
						s = i[2].toLowerCase();
					r(n[s], t, a) || (o = !1)
				}
			}), o
		}
		function r(t, e, i) {
			return "min" === i ? t >= e : "max" === i ? e >= t : t === e
		}
		function o(t, e) {
			return t.join(",") === e.join(",")
		}
		var a = t("zrender/core/util"),
			s = a.each,
			l = a.clone,
			u = a.map,
			c = /^(min|max)?(.+)$/;
		return e.prototype = {
			constructor: e,
			setOption: function(t, e) {
				t = l(t, !0), this._optionBackup = i.call(this, t, e)
			},
			mountOption: function() {
				var t = this._optionBackup;
				return this._timelineOptions = u(t.timelineOptions, l), this._mediaList = u(t.mediaList, l), this._mediaDefault = l(t.mediaDefault), this._currentMediaIndices = [], l(t.baseOption)
			},
			getTimelineOption: function(t) {
				var e, i = this._timelineOptions;
				if (i.length) {
					var n = t.getComponent("timeline");
					n && (e = l(i[n.getCurrentIndex()], !0))
				}
				return e
			},
			getMediaOption: function(t) {
				var e = this._api.getWidth(),
					i = this._api.getHeight(),
					r = this._mediaList,
					a = this._mediaDefault,
					s = [],
					c = [];
				if (!r.length && !a) return c;
				for (var h = 0, d = r.length; d > h; h++) n(r[h].query, e, i) && s.push(h);
				return !s.length && a && (s = [-1]), s.length && !o(s, this._currentMediaIndices) && (c = u(s, function(t) {
					return l(-1 === t ? a.option : r[t].option)
				})), this._currentMediaIndices = s, c
			}
		}, e
	}), e("echarts/util/model", ["require", "./format", "./number", "zrender/core/util", "../model/Model"], function(t) {
		var e = t("./format"),
			i = t("./number"),
			n = t("zrender/core/util"),
			r = t("../model/Model"),
			o = ["x", "y", "z", "radius", "angle"],
			a = {};
		return a.createNameEach = function(t, e) {
			t = t.slice();
			var i = n.map(t, a.capitalFirst);
			e = (e || []).slice();
			var r = n.map(e, a.capitalFirst);
			return function(o, a) {
				n.each(t, function(t, n) {
					for (var s = {
						name: t,
						capital: i[n]
					}, l = 0; l < e.length; l++) s[e[l]] = t + r[l];
					o.call(a, s)
				})
			}
		}, a.capitalFirst = function(t) {
			return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
		}, a.eachAxisDim = a.createNameEach(o, ["axisIndex", "axis", "index"]), a.normalizeToArray = function(t) {
			return n.isArray(t) ? t : null == t ? [] : [t]
		}, a.createLinkedNodesFinder = function(t, e, i) {
			function r(t, e) {
				return n.indexOf(e.nodes, t) >= 0
			}
			function o(t, r) {
				var o = !1;
				return e(function(e) {
					n.each(i(t, e) || [], function(t) {
						r.records[e.name][t] && (o = !0)
					})
				}), o
			}
			function a(t, r) {
				r.nodes.push(t), e(function(e) {
					n.each(i(t, e) || [], function(t) {
						r.records[e.name][t] = !0
					})
				})
			}
			return function(i) {
				function n(t) {
					!r(t, s) && o(t, s) && (a(t, s), l = !0)
				}
				var s = {
					nodes: [],
					records: {}
				};
				if (e(function(t) {
					s.records[t.name] = {}
				}), !i) return s;
				a(i, s);
				var l;
				do l = !1, t(n);
				while (l);
				return s
			}
		}, a.defaultEmphasis = function(t, e) {
			if (t) {
				var i = t.emphasis = t.emphasis || {},
					r = t.normal = t.normal || {};
				n.each(e, function(t) {
					var e = n.retrieve(i[t], r[t]);
					null != e && (i[t] = e)
				})
			}
		}, a.createDataFormatModel = function(t, e, i) {
			var o = new r;
			return n.mixin(o, a.dataFormatMixin), o.seriesIndex = t.seriesIndex, o.name = t.name || "", o.getData = function() {
				return e
			}, o.getRawDataArray = function() {
				return i
			}, o
		}, a.getDataItemValue = function(t) {
			return t && (null == t.value ? t : t.value)
		}, a.converDataValue = function(t, e) {
			var n = e && e.type;
			return "ordinal" === n ? t : ("time" !== n || isFinite(t) || null == t || "-" === t || (t = +i.parseDate(t)), null == t || "" === t ? NaN : +t)
		}, a.dataFormatMixin = {
			getDataParams: function(t) {
				var e = this.getData(),
					i = this.seriesIndex,
					n = this.name,
					r = this.getRawValue(t),
					o = e.getRawIndex(t),
					a = e.getName(t, !0),
					s = this.getRawDataArray(),
					l = s && s[o];
				return {
					seriesIndex: i,
					seriesName: n,
					name: a,
					dataIndex: o,
					data: l,
					value: r,
					$vars: ["seriesName", "name", "value"]
				}
			},
			getFormattedLabel: function(t, i, n) {
				i = i || "normal";
				var r = this.getData(),
					o = r.getItemModel(t),
					a = this.getDataParams(t);
				return n || (n = o.get(["label", i, "formatter"])), "function" == typeof n ? (a.status = i, n(a)) : "string" == typeof n ? e.formatTpl(n, a) : void 0
			},
			getRawValue: function(t) {
				var e = this.getData().getItemModel(t);
				if (e && e.option) {
					var i = e.option;
					return n.isObject(i) && !n.isArray(i) ? i.value : i
				}
			}
		}, a
	}), e("echarts/model/Series", ["require", "zrender/core/util", "../util/format", "../util/model", "./Component"], function(t) {
		var e = t("zrender/core/util"),
			i = t("../util/format"),
			n = t("../util/model"),
			r = t("./Component"),
			o = i.encodeHTML,
			a = i.addCommas,
			s = r.extend({
				type: "series",
				seriesIndex: 0,
				coordinateSystem: null,
				defaultOption: null,
				legendDataProvider: null,
				init: function(t, e, i, n) {
					this.seriesIndex = this.componentIndex, this.mergeDefaultAndTheme(t, i), this._dataBeforeProcessed = this.getInitialData(t, i), this._data = this._dataBeforeProcessed.cloneShallow()
				},
				mergeDefaultAndTheme: function(t, i) {
					e.merge(t, i.getTheme().get(this.subType)), e.merge(t, this.getDefaultOption()), n.defaultEmphasis(t.label, ["position", "show", "textStyle", "distance", "formatter"])
				},
				mergeOption: function(t, i) {
					t = e.merge(this.option, t, !0);
					var n = this.getInitialData(t, i);
					n && (this._data = n, this._dataBeforeProcessed = n.cloneShallow())
				},
				getInitialData: function() {},
				getData: function() {
					return this._data
				},
				setData: function(t) {
					this._data = t
				},
				getRawData: function() {
					return this._dataBeforeProcessed
				},
				getRawDataArray: function() {
					return this.option.data
				},
				getDimensionsOnAxis: function(t) {
					return [t]
				},
				formatTooltip: function(t, i) {
					var n = this._data,
						r = this.getRawValue(t),
						s = e.isArray(r) ? e.map(r, a).join(", ") : a(r),
						l = n.getName(t);
					return i ? o(this.name) + " : " + s : o(this.name) + "<br />" + (l ? o(l) + " : " + s : s)
				},
				restoreData: function() {
					this._data = this._dataBeforeProcessed.cloneShallow()
				}
			});
		return e.mixin(s, n.dataFormatMixin), s
	}), e("zrender/core/guid", [], function() {
		var t = 2311;
		return function() {
			return "zr_" + t++
		}
	}), e("zrender/mixin/Eventful", ["require", "../core/util"], function(t) {
		var e = Array.prototype.slice,
			i = t("../core/util"),
			n = i.indexOf,
			r = function() {
				this._$handlers = {}
			};
		return r.prototype = {
			constructor: r,
			one: function(t, e, i) {
				var r = this._$handlers;
				return e && t ? (r[t] || (r[t] = []), n(r[t], t) >= 0 ? this : (r[t].push({
					h: e,
					one: !0,
					ctx: i || this
				}), this)) : this
			},
			on: function(t, e, i) {
				var n = this._$handlers;
				return e && t ? (n[t] || (n[t] = []), n[t].push({
					h: e,
					one: !1,
					ctx: i || this
				}), this) : this
			},
			isSilent: function(t) {
				var e = this._$handlers;
				return e[t] && e[t].length
			},
			off: function(t, e) {
				var i = this._$handlers;
				if (!t) return this._$handlers = {}, this;
				if (e) {
					if (i[t]) {
						for (var n = [], r = 0, o = i[t].length; o > r; r++) i[t][r].h != e && n.push(i[t][r]);
						i[t] = n
					}
					i[t] && 0 === i[t].length && delete i[t]
				} else delete i[t];
				return this
			},
			trigger: function(t) {
				if (this._$handlers[t]) {
					var i = arguments,
						n = i.length;
					n > 3 && (i = e.call(i, 1));
					for (var r = this._$handlers[t], o = r.length, a = 0; o > a;) {
						switch (n) {
						case 1:
							r[a].h.call(r[a].ctx);
							break;
						case 2:
							r[a].h.call(r[a].ctx, i[1]);
							break;
						case 3:
							r[a].h.call(r[a].ctx, i[1], i[2]);
							break;
						default:
							r[a].h.apply(r[a].ctx, i)
						}
						r[a].one ? (r.splice(a, 1), o--) : a++
					}
				}
				return this
			},
			triggerWithContext: function(t) {
				if (this._$handlers[t]) {
					var i = arguments,
						n = i.length;
					n > 4 && (i = e.call(i, 1, i.length - 1));
					for (var r = i[i.length - 1], o = this._$handlers[t], a = o.length, s = 0; a > s;) {
						switch (n) {
						case 1:
							o[s].h.call(r);
							break;
						case 2:
							o[s].h.call(r, i[1]);
							break;
						case 3:
							o[s].h.call(r, i[1], i[2]);
							break;
						default:
							o[s].h.apply(r, i)
						}
						o[s].one ? (o.splice(s, 1), a--) : s++
					}
				}
				return this
			}
		}, r
	}), e("zrender/mixin/Transformable", ["require", "../core/matrix", "../core/vector"], function(t) {
		function e(t) {
			return t > o || -o > t
		}
		var i = t("../core/matrix"),
			n = t("../core/vector"),
			r = i.identity,
			o = 5e-5,
			a = function(t) {
				t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null
			},
			s = a.prototype;
		s.transform = null, s.needLocalTransform = function() {
			return e(this.rotation) || e(this.position[0]) || e(this.position[1]) || e(this.scale[0] - 1) || e(this.scale[1] - 1)
		}, s.updateTransform = function() {
			var t = this.parent,
				e = t && t.transform,
				n = this.needLocalTransform(),
				o = this.transform;
			return n || e ? (o = o || i.create(), n ? this.getLocalTransform(o) : r(o), e && (n ? i.mul(o, t.transform, o) : i.copy(o, t.transform)), this.transform = o, this.invTransform = this.invTransform || i.create(), void i.invert(this.invTransform, o)) : void(o && r(o))
		}, s.getLocalTransform = function(t) {
			t = t || [], r(t);
			var e = this.origin,
				n = this.scale,
				o = this.rotation,
				a = this.position;
			return e && (t[4] -= e[0], t[5] -= e[1]), i.scale(t, t, n), o && i.rotate(t, t, o), e && (t[4] += e[0], t[5] += e[1]), t[4] += a[0], t[5] += a[1], t
		}, s.setTransform = function(t) {
			var e = this.transform;
			e && t.transform(e[0], e[1], e[2], e[3], e[4], e[5])
		};
		var l = [];
		return s.decomposeTransform = function() {
			if (this.transform) {
				var t = this.parent,
					n = this.transform;
				t && t.transform && (i.mul(l, t.invTransform, n), n = l);
				var r = n[0] * n[0] + n[1] * n[1],
					o = n[2] * n[2] + n[3] * n[3],
					a = this.position,
					s = this.scale;
				e(r - 1) && (r = Math.sqrt(r)), e(o - 1) && (o = Math.sqrt(o)), n[0] < 0 && (r = -r), n[3] < 0 && (o = -o), a[0] = n[4], a[1] = n[5], s[0] = r, s[1] = o, this.rotation = Math.atan2(-n[1] / o, n[0] / r)
			}
		}, s.transformCoordToLocal = function(t, e) {
			var i = [t, e],
				r = this.invTransform;
			return r && n.applyTransform(i, i, r), i
		}, s.transformCoordToGlobal = function(t, e) {
			var i = [t, e],
				r = this.transform;
			return r && n.applyTransform(i, i, r), i
		}, a
	}), e("zrender/animation/easing", [], function() {
		var t = {
			linear: function(t) {
				return t
			},
			quadraticIn: function(t) {
				return t * t
			},
			quadraticOut: function(t) {
				return t * (2 - t)
			},
			quadraticInOut: function(t) {
				return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
			},
			cubicIn: function(t) {
				return t * t * t
			},
			cubicOut: function(t) {
				return --t * t * t + 1
			},
			cubicInOut: function(t) {
				return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
			},
			quarticIn: function(t) {
				return t * t * t * t
			},
			quarticOut: function(t) {
				return 1 - --t * t * t * t
			},
			quarticInOut: function(t) {
				return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
			},
			quinticIn: function(t) {
				return t * t * t * t * t
			},
			quinticOut: function(t) {
				return --t * t * t * t * t + 1
			},
			quinticInOut: function(t) {
				return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
			},
			sinusoidalIn: function(t) {
				return 1 - Math.cos(t * Math.PI / 2)
			},
			sinusoidalOut: function(t) {
				return Math.sin(t * Math.PI / 2)
			},
			sinusoidalInOut: function(t) {
				return .5 * (1 - Math.cos(Math.PI * t))
			},
			exponentialIn: function(t) {
				return 0 === t ? 0 : Math.pow(1024, t - 1)
			},
			exponentialOut: function(t) {
				return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
			},
			exponentialInOut: function(t) {
				return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
			},
			circularIn: function(t) {
				return 1 - Math.sqrt(1 - t * t)
			},
			circularOut: function(t) {
				return Math.sqrt(1 - --t * t)
			},
			circularInOut: function(t) {
				return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
			},
			elasticIn: function(t) {
				var e, i = .1,
					n = .4;
				return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)))
			},
			elasticOut: function(t) {
				var e, i = .1,
					n = .4;
				return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
			},
			elasticInOut: function(t) {
				var e, i = .1,
					n = .4;
				return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
			},
			backIn: function(t) {
				var e = 1.70158;
				return t * t * ((e + 1) * t - e)
			},
			backOut: function(t) {
				var e = 1.70158;
				return --t * t * ((e + 1) * t + e) + 1
			},
			backInOut: function(t) {
				var e = 2.5949095;
				return (t *= 2) < 1 ? .5 * (t * t * ((e + 1) * t - e)) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
			},
			bounceIn: function(e) {
				return 1 - t.bounceOut(1 - e)
			},
			bounceOut: function(t) {
				return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
			},
			bounceInOut: function(e) {
				return .5 > e ? .5 * t.bounceIn(2 * e) : .5 * t.bounceOut(2 * e - 1) + .5
			}
		};
		return t
	}), e("zrender/animation/Clip", ["require", "./easing"], function(t) {
		function e(t) {
			this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null == t.loop ? !1 : t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart
		}
		var i = t("./easing");
		return e.prototype = {
			constructor: e,
			step: function(t) {
				this._initialized || (this._startTime = (new Date).getTime() + this._delay, this._initialized = !0);
				var e = (t - this._startTime) / this._life;
				if (!(0 > e)) {
					e = Math.min(e, 1);
					var n = this.easing,
						r = "string" == typeof n ? i[n] : n,
						o = "function" == typeof r ? r(e) : e;
					return this.fire("frame", o), 1 == e ? this.loop ? (this.restart(), "restart") : (this._needsRemove = !0, "destroy") : null
				}
			},
			restart: function() {
				var t = (new Date).getTime(),
					e = (t - this._startTime) % this._life;
				this._startTime = (new Date).getTime() - e + this.gap, this._needsRemove = !1
			},
			fire: function(t, e) {
				t = "on" + t, this[t] && this[t](this._target, e)
			}
		}, e
	}), e("zrender/tool/color", ["require"], function(t) {
		function e(t) {
			return t = Math.round(t), 0 > t ? 0 : t > 255 ? 255 : t
		}
		function i(t) {
			return t = Math.round(t), 0 > t ? 0 : t > 360 ? 360 : t
		}
		function n(t) {
			return 0 > t ? 0 : t > 1 ? 1 : t
		}
		function r(t) {
			return e(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10))
		}
		function o(t) {
			return n(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t))
		}
		function a(t, e, i) {
			return 0 > i ? i += 1 : i > 1 && (i -= 1), 1 > 6 * i ? t + (e - t) * i * 6 : 1 > 2 * i ? e : 2 > 3 * i ? t + (e - t) * (2 / 3 - i) * 6 : t
		}
		function s(t, e, i) {
			return t + (e - t) * i
		}
		function l(t) {
			if (t) {
				t += "";
				var e = t.replace(/ /g, "").toLowerCase();
				if (e in _) return _[e].slice();
				if ("#" !== e.charAt(0)) {
					var i = e.indexOf("("),
						n = e.indexOf(")");
					if (-1 !== i && n + 1 === e.length) {
						var a = e.substr(0, i),
							s = e.substr(i + 1, n - (i + 1)).split(","),
							l = 1;
						switch (a) {
						case "rgba":
							if (4 !== s.length) return;
							l = o(s.pop());
						case "rgb":
							if (3 !== s.length) return;
							return [r(s[0]), r(s[1]), r(s[2]), l];
						case "hsla":
							if (4 !== s.length) return;
							return s[3] = o(s[3]), u(s);
						case "hsl":
							if (3 !== s.length) return;
							return u(s);
						default:
							return
						}
					}
				} else {
					if (4 === e.length) {
						var c = parseInt(e.substr(1), 16);
						if (!(c >= 0 && 4095 >= c)) return;
						return [(3840 & c) >> 4 | (3840 & c) >> 8, 240 & c | (240 & c) >> 4, 15 & c | (15 & c) << 4, 1]
					}
					if (7 === e.length) {
						var c = parseInt(e.substr(1), 16);
						if (!(c >= 0 && 16777215 >= c)) return;
						return [(16711680 & c) >> 16, (65280 & c) >> 8, 255 & c, 1]
					}
				}
			}
		}
		function u(t) {
			var i = (parseFloat(t[0]) % 360 + 360) % 360 / 360,
				n = o(t[1]),
				r = o(t[2]),
				s = .5 >= r ? r * (n + 1) : r + n - r * n,
				l = 2 * r - s,
				u = [e(255 * a(l, s, i + 1 / 3)), e(255 * a(l, s, i)), e(255 * a(l, s, i - 1 / 3))];
			return 4 === t.length && (u[3] = t[3]), u
		}
		function c(t) {
			if (t) {
				var e, i, n = t[0] / 255,
					r = t[1] / 255,
					o = t[2] / 255,
					a = Math.min(n, r, o),
					s = Math.max(n, r, o),
					l = s - a,
					u = (s + a) / 2;
				if (0 === l) e = 0, i = 0;
				else {
					i = .5 > u ? l / (s + a) : l / (2 - s - a);
					var c = ((s - n) / 6 + l / 2) / l,
						h = ((s - r) / 6 + l / 2) / l,
						d = ((s - o) / 6 + l / 2) / l;
					n === s ? e = d - h : r === s ? e = 1 / 3 + c - d : o === s && (e = 2 / 3 + h - c), 0 > e && (e += 1), e > 1 && (e -= 1)
				}
				var p = [360 * e, i, u];
				return null != t[3] && p.push(t[3]), p
			}
		}
		function h(t, e) {
			var i = l(t);
			if (i) {
				for (var n = 0; 3 > n; n++) 0 > e ? i[n] = i[n] * (1 - e) | 0 : i[n] = (255 - i[n]) * e + i[n] | 0;
				return y(i, 4 === i.length ? "rgba" : "rgb")
			}
		}
		function d(t, e) {
			var i = l(t);
			return i ? ((1 << 24) + (i[0] << 16) + (i[1] << 8) + +i[2]).toString(16).slice(1) : void 0
		}
		function p(t, i, n) {
			if (i && i.length && t >= 0 && 1 >= t) {
				n = n || [0, 0, 0, 0];
				var r = t * (i.length - 1),
					o = Math.floor(r),
					a = Math.ceil(r),
					l = i[o],
					u = i[a],
					c = r - o;
				return n[0] = e(s(l[0], u[0], c)), n[1] = e(s(l[1], u[1], c)), n[2] = e(s(l[2], u[2], c)), n[3] = e(s(l[3], u[3], c)), n
			}
		}
		function f(t, i, r) {
			if (i && i.length && t >= 0 && 1 >= t) {
				var o = t * (i.length - 1),
					a = Math.floor(o),
					u = Math.ceil(o),
					c = l(i[a]),
					h = l(i[u]),
					d = o - a,
					p = y([e(s(c[0], h[0], d)), e(s(c[1], h[1], d)), e(s(c[2], h[2], d)), n(s(c[3], h[3], d))], "rgba");
				return r ? {
					color: p,
					leftIndex: a,
					rightIndex: u,
					value: o
				} : p
			}
		}
		function m(t, e) {
			if (!(2 !== t.length || t[1] < t[0])) {
				for (var i = f(t[0], e, !0), n = f(t[1], e, !0), r = [{
					color: i.color,
					offset: 0
				}], o = n.value - i.value, a = Math.max(i.value, i.rightIndex), s = Math.min(n.value, n.leftIndex), l = a; o > 0 && s >= l; l++) r.push({
					color: e[l],
					offset: (l - i.value) / o
				});
				return r.push({
					color: n.color,
					offset: 1
				}), r
			}
		}
		function g(t, e, n, r) {
			return t = l(t), t ? (t = c(t), null != e && (t[0] = i(e)), null != n && (t[1] = o(n)), null != r && (t[2] = o(r)), y(u(t), "rgba")) : void 0
		}
		function v(t, e) {
			return t = l(t), t && null != e ? (t[3] = n(e), y(t, "rgba")) : void 0
		}
		function y(t, e) {
			return ("rgb" === e || "hsv" === e || "hsl" === e) && (t = t.slice(0, 3)), e + "(" + t.join(",") + ")"
		}
		var _ = {
			transparent: [0, 0, 0, 0],
			aliceblue: [240, 248, 255, 1],
			antiquewhite: [250, 235, 215, 1],
			aqua: [0, 255, 255, 1],
			aquamarine: [127, 255, 212, 1],
			azure: [240, 255, 255, 1],
			beige: [245, 245, 220, 1],
			bisque: [255, 228, 196, 1],
			black: [0, 0, 0, 1],
			blanchedalmond: [255, 235, 205, 1],
			blue: [0, 0, 255, 1],
			blueviolet: [138, 43, 226, 1],
			brown: [165, 42, 42, 1],
			burlywood: [222, 184, 135, 1],
			cadetblue: [95, 158, 160, 1],
			chartreuse: [127, 255, 0, 1],
			chocolate: [210, 105, 30, 1],
			coral: [255, 127, 80, 1],
			cornflowerblue: [100, 149, 237, 1],
			cornsilk: [255, 248, 220, 1],
			crimson: [220, 20, 60, 1],
			cyan: [0, 255, 255, 1],
			darkblue: [0, 0, 139, 1],
			darkcyan: [0, 139, 139, 1],
			darkgoldenrod: [184, 134, 11, 1],
			darkgray: [169, 169, 169, 1],
			darkgreen: [0, 100, 0, 1],
			darkgrey: [169, 169, 169, 1],
			darkkhaki: [189, 183, 107, 1],
			darkmagenta: [139, 0, 139, 1],
			darkolivegreen: [85, 107, 47, 1],
			darkorange: [255, 140, 0, 1],
			darkorchid: [153, 50, 204, 1],
			darkred: [139, 0, 0, 1],
			darksalmon: [233, 150, 122, 1],
			darkseagreen: [143, 188, 143, 1],
			darkslateblue: [72, 61, 139, 1],
			darkslategray: [47, 79, 79, 1],
			darkslategrey: [47, 79, 79, 1],
			darkturquoise: [0, 206, 209, 1],
			darkviolet: [148, 0, 211, 1],
			deeppink: [255, 20, 147, 1],
			deepskyblue: [0, 191, 255, 1],
			dimgray: [105, 105, 105, 1],
			dimgrey: [105, 105, 105, 1],
			dodgerblue: [30, 144, 255, 1],
			firebrick: [178, 34, 34, 1],
			floralwhite: [255, 250, 240, 1],
			forestgreen: [34, 139, 34, 1],
			fuchsia: [255, 0, 255, 1],
			gainsboro: [220, 220, 220, 1],
			ghostwhite: [248, 248, 255, 1],
			gold: [255, 215, 0, 1],
			goldenrod: [218, 165, 32, 1],
			gray: [128, 128, 128, 1],
			green: [0, 128, 0, 1],
			greenyellow: [173, 255, 47, 1],
			grey: [128, 128, 128, 1],
			honeydew: [240, 255, 240, 1],
			hotpink: [255, 105, 180, 1],
			indianred: [205, 92, 92, 1],
			indigo: [75, 0, 130, 1],
			ivory: [255, 255, 240, 1],
			khaki: [240, 230, 140, 1],
			lavender: [230, 230, 250, 1],
			lavenderblush: [255, 240, 245, 1],
			lawngreen: [124, 252, 0, 1],
			lemonchiffon: [255, 250, 205, 1],
			lightblue: [173, 216, 230, 1],
			lightcoral: [240, 128, 128, 1],
			lightcyan: [224, 255, 255, 1],
			lightgoldenrodyellow: [250, 250, 210, 1],
			lightgray: [211, 211, 211, 1],
			lightgreen: [144, 238, 144, 1],
			lightgrey: [211, 211, 211, 1],
			lightpink: [255, 182, 193, 1],
			lightsalmon: [255, 160, 122, 1],
			lightseagreen: [32, 178, 170, 1],
			lightskyblue: [135, 206, 250, 1],
			lightslategray: [119, 136, 153, 1],
			lightslategrey: [119, 136, 153, 1],
			lightsteelblue: [176, 196, 222, 1],
			lightyellow: [255, 255, 224, 1],
			lime: [0, 255, 0, 1],
			limegreen: [50, 205, 50, 1],
			linen: [250, 240, 230, 1],
			magenta: [255, 0, 255, 1],
			maroon: [128, 0, 0, 1],
			mediumaquamarine: [102, 205, 170, 1],
			mediumblue: [0, 0, 205, 1],
			mediumorchid: [186, 85, 211, 1],
			mediumpurple: [147, 112, 219, 1],
			mediumseagreen: [60, 179, 113, 1],
			mediumslateblue: [123, 104, 238, 1],
			mediumspringgreen: [0, 250, 154, 1],
			mediumturquoise: [72, 209, 204, 1],
			mediumvioletred: [199, 21, 133, 1],
			midnightblue: [25, 25, 112, 1],
			mintcream: [245, 255, 250, 1],
			mistyrose: [255, 228, 225, 1],
			moccasin: [255, 228, 181, 1],
			navajowhite: [255, 222, 173, 1],
			navy: [0, 0, 128, 1],
			oldlace: [253, 245, 230, 1],
			olive: [128, 128, 0, 1],
			olivedrab: [107, 142, 35, 1],
			orange: [255, 165, 0, 1],
			orangered: [255, 69, 0, 1],
			orchid: [218, 112, 214, 1],
			palegoldenrod: [238, 232, 170, 1],
			palegreen: [152, 251, 152, 1],
			paleturquoise: [175, 238, 238, 1],
			palevioletred: [219, 112, 147, 1],
			papayawhip: [255, 239, 213, 1],
			peachpuff: [255, 218, 185, 1],
			peru: [205, 133, 63, 1],
			pink: [255, 192, 203, 1],
			plum: [221, 160, 221, 1],
			powderblue: [176, 224, 230, 1],
			purple: [128, 0, 128, 1],
			red: [255, 0, 0, 1],
			rosybrown: [188, 143, 143, 1],
			royalblue: [65, 105, 225, 1],
			saddlebrown: [139, 69, 19, 1],
			salmon: [250, 128, 114, 1],
			sandybrown: [244, 164, 96, 1],
			seagreen: [46, 139, 87, 1],
			seashell: [255, 245, 238, 1],
			sienna: [160, 82, 45, 1],
			silver: [192, 192, 192, 1],
			skyblue: [135, 206, 235, 1],
			slateblue: [106, 90, 205, 1],
			slategray: [112, 128, 144, 1],
			slategrey: [112, 128, 144, 1],
			snow: [255, 250, 250, 1],
			springgreen: [0, 255, 127, 1],
			steelblue: [70, 130, 180, 1],
			tan: [210, 180, 140, 1],
			teal: [0, 128, 128, 1],
			thistle: [216, 191, 216, 1],
			tomato: [255, 99, 71, 1],
			turquoise: [64, 224, 208, 1],
			violet: [238, 130, 238, 1],
			wheat: [245, 222, 179, 1],
			white: [255, 255, 255, 1],
			whitesmoke: [245, 245, 245, 1],
			yellow: [255, 255, 0, 1],
			yellowgreen: [154, 205, 50, 1]
		};
		return {
			parse: l,
			lift: h,
			toHex: d,
			fastMapToColor: p,
			mapToColor: f,
			mapIntervalToColor: m,
			modifyHSL: g,
			modifyAlpha: v,
			stringify: y
		}
	}), e("zrender/animation/Animator", ["require", "./Clip", "../tool/color", "../core/util"], function(t) {
		function e(t, e) {
			return t[e]
		}
		function i(t, e, i) {
			t[e] = i
		}
		function n(t, e, i) {
			return (e - t) * i + t
		}
		function r(t, e, i) {
			return i > .5 ? e : t
		}
		function o(t, e, i, r, o) {
			var a = t.length;
			if (1 == o) for (var s = 0; a > s; s++) r[s] = n(t[s], e[s], i);
			else for (var l = t[0].length, s = 0; a > s; s++) for (var u = 0; l > u; u++) r[s][u] = n(t[s][u], e[s][u], i)
		}
		function a(t, e, i) {
			var n = t.length,
				r = e.length;
			if (n !== r) {
				var o = n > r;
				if (o) t.length = r;
				else for (var a = n; r > a; a++) t.push(1 === i ? e[a] : v.call(e[a]))
			}
		}
		function s(t, e, i) {
			if (t === e) return !0;
			var n = t.length;
			if (n !== e.length) return !1;
			if (1 === i) {
				for (var r = 0; n > r; r++) if (t[r] !== e[r]) return !1
			} else for (var o = t[0].length, r = 0; n > r; r++) for (var a = 0; o > a; a++) if (t[r][a] !== e[r][a]) return !1;
			return !0
		}
		function l(t, e, i, n, r, o, a, s, l) {
			var c = t.length;
			if (1 == l) for (var h = 0; c > h; h++) s[h] = u(t[h], e[h], i[h], n[h], r, o, a);
			else for (var d = t[0].length, h = 0; c > h; h++) for (var p = 0; d > p; p++) s[h][p] = u(t[h][p], e[h][p], i[h][p], n[h][p], r, o, a)
		}
		function u(t, e, i, n, r, o, a) {
			var s = .5 * (i - t),
				l = .5 * (n - e);
			return (2 * (e - i) + s + l) * a + (-3 * (e - i) - 2 * s - l) * o + s * r + e
		}
		function c(t) {
			if (g(t)) {
				var e = t.length;
				if (g(t[0])) {
					for (var i = [], n = 0; e > n; n++) i.push(v.call(t[n]));
					return i
				}
				return v.call(t)
			}
			return t
		}
		function h(t) {
			return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")"
		}
		function d(t, e, i, c, d) {
			var m = t._getter,
				v = t._setter,
				y = "spline" === e,
				_ = c.length;
			if (_) {
				var x, b = c[0].value,
					w = g(b),
					M = !1,
					S = !1,
					L = w && g(b[0]) ? 2 : 1;
				c.sort(function(t, e) {
					return t.time - e.time
				}), x = c[_ - 1].time;
				for (var C = [], T = [], P = c[0].value, A = !0, D = 0; _ > D; D++) {
					C.push(c[D].time / x);
					var z = c[D].value;
					if (w && s(z, P, L) || !w && z === P || (A = !1), P = z, "string" == typeof z) {
						var I = f.parse(z);
						I ? (z = I, M = !0) : S = !0
					}
					T.push(z)
				}
				if (!A) {
					if (w) {
						for (var k = T[_ - 1], D = 0; _ - 1 > D; D++) a(T[D], k, L);
						a(m(t._target, d), k, L)
					}
					var E, O, N, R, B, V, q = 0,
						Z = 0;
					if (M) var G = [0, 0, 0, 0];
					var H = function(t, e) {
							var i;
							if (Z > e) {
								for (E = Math.min(q + 1, _ - 1), i = E; i >= 0 && !(C[i] <= e); i--);
								i = Math.min(i, _ - 2)
							} else {
								for (i = q; _ > i && !(C[i] > e); i++);
								i = Math.min(i - 1, _ - 2)
							}
							q = i, Z = e;
							var a = C[i + 1] - C[i];
							if (0 !== a) if (O = (e - C[i]) / a, y) if (R = T[i], N = T[0 === i ? i : i - 1], B = T[i > _ - 2 ? _ - 1 : i + 1], V = T[i > _ - 3 ? _ - 1 : i + 2], w) l(N, R, B, V, O, O * O, O * O * O, m(t, d), L);
							else {
								var s;
								if (M) s = l(N, R, B, V, O, O * O, O * O * O, G, 1), s = h(G);
								else {
									if (S) return r(R, B, O);
									s = u(N, R, B, V, O, O * O, O * O * O)
								}
								v(t, d, s)
							} else if (w) o(T[i], T[i + 1], O, m(t, d), L);
							else {
								var s;
								if (M) o(T[i], T[i + 1], O, G, 1), s = h(G);
								else {
									if (S) return r(T[i], T[i + 1], O);
									s = n(T[i], T[i + 1], O)
								}
								v(t, d, s)
							}
						},
						F = new p({
							target: t._target,
							life: x,
							loop: t._loop,
							delay: t._delay,
							onframe: H,
							ondestroy: i
						});
					return e && "spline" !== e && (F.easing = e), F
				}
			}
		}
		var p = t("./Clip"),
			f = t("../tool/color"),
			m = t("../core/util"),
			g = m.isArrayLike,
			v = Array.prototype.slice,
			y = function(t, n, r, o) {
				this._tracks = {}, this._target = t, this._loop = n || !1, this._getter = r || e, this._setter = o || i, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
			};
		return y.prototype = {
			when: function(t, e) {
				var i = this._tracks;
				for (var n in e) {
					if (!i[n]) {
						i[n] = [];
						var r = this._getter(this._target, n);
						if (null == r) continue;
						0 !== t && i[n].push({
							time: 0,
							value: c(r)
						})
					}
					i[n].push({
						time: t,
						value: e[n]
					})
				}
				return this
			},
			during: function(t) {
				return this._onframeList.push(t), this
			},
			_doneCallback: function() {
				this._tracks = {}, this._clipList.length = 0;
				for (var t = this._doneList, e = t.length, i = 0; e > i; i++) t[i].call(this)
			},
			start: function(t) {
				var e, i = this,
					n = 0,
					r = function() {
						n--, n || i._doneCallback()
					};
				for (var o in this._tracks) {
					var a = d(this, t, r, this._tracks[o], o);
					a && (this._clipList.push(a), n++, this.animation && this.animation.addClip(a), e = a)
				}
				if (e) {
					var s = e.onframe;
					e.onframe = function(t, e) {
						s(t, e);
						for (var n = 0; n < i._onframeList.length; n++) i._onframeList[n](t, e)
					}
				}
				return n || this._doneCallback(), this
			},
			stop: function(t) {
				for (var e = this._clipList, i = this.animation, n = 0; n < e.length; n++) {
					var r = e[n];
					t && r.onframe(this._target, 1), i && i.removeClip(r)
				}
				e.length = 0
			},
			delay: function(t) {
				return this._delay = t, this
			},
			done: function(t) {
				return t && this._doneList.push(t), this
			},
			getClips: function() {
				return this._clipList
			}
		}, y
	}), e("zrender/config", [], function() {
		var t = 1;
		"undefined" != typeof window && (t = Math.max(window.devicePixelRatio || 1, 1));
		var e = {
			debugMode: 0,
			devicePixelRatio: t
		};
		return e
	}), e("zrender/core/log", ["require", "../config"], function(t) {
		var e = t("../config");
		return function() {
			if (0 !== e.debugMode) if (1 == e.debugMode) for (var t in arguments) throw new Error(arguments[t]);
			else if (e.debugMode > 1) for (var t in arguments) console.log(arguments[t])
		}
	}), e("zrender/mixin/Animatable", ["require", "../animation/Animator", "../core/util", "../core/log"], function(t) {
		var e = t("../animation/Animator"),
			i = t("../core/util"),
			n = i.isString,
			r = i.isFunction,
			o = i.isObject,
			a = t("../core/log"),
			s = function() {
				this.animators = []
			};
		return s.prototype = {
			constructor: s,
			animate: function(t, n) {
				var r, o = !1,
					s = this,
					l = this.__zr;
				if (t) {
					var u = t.split("."),
						c = s;
					o = "shape" === u[0];
					for (var h = 0, d = u.length; d > h; h++) c && (c = c[u[h]]);
					c && (r = c)
				} else r = s;
				if (!r) return void a('Property "' + t + '" is not existed in element ' + s.id);
				var p = s.animators,
					f = new e(r, n);
				return f.during(function(t) {
					s.dirty(o)
				}).done(function() {
					p.splice(i.indexOf(p, f), 1)
				}), p.push(f), l && l.animation.addAnimator(f), f
			},
			stopAnimation: function(t) {
				for (var e = this.animators, i = e.length, n = 0; i > n; n++) e[n].stop(t);
				return e.length = 0, this
			},
			animateTo: function(t, e, i, o, a) {
				function s() {
					u--, u || a && a()
				}
				n(i) ? (a = o, o = i, i = 0) : r(o) ? (a = o, o = "linear", i = 0) : r(i) ? (a = i, i = 0) : r(e) ? (a = e, e = 500) : e || (e = 500), this.stopAnimation(), this._animateToShallow("", this, t, e, i, o, a);
				var l = this.animators.slice(),
					u = l.length;
				u || a && a();
				for (var c = 0; c < l.length; c++) l[c].done(s).start(o)
			},
			_animateToShallow: function(t, e, n, r, a) {
				var s = {},
					l = 0;
				for (var u in n) if (null != e[u]) o(n[u]) && !i.isArrayLike(n[u]) ? this._animateToShallow(t ? t + "." + u : u, e[u], n[u], r, a) : (s[u] = n[u], l++);
				else if (null != n[u]) if (t) {
					var c = {};
					c[t] = {}, c[t][u] = n[u], this.attr(c)
				} else this.attr(u, n[u]);
				return l > 0 && this.animate(t, !1).when(null == r ? 500 : r, s).delay(a || 0), this
			}
		}, s
	}), e("zrender/Element", ["require", "./core/guid", "./mixin/Eventful", "./mixin/Transformable", "./mixin/Animatable", "./core/util"], function(t) {
		var e = t("./core/guid"),
			i = t("./mixin/Eventful"),
			n = t("./mixin/Transformable"),
			r = t("./mixin/Animatable"),
			o = t("./core/util"),
			a = function(t) {
				n.call(this, t), i.call(this, t), r.call(this, t), this.id = t.id || e()
			};
		return a.prototype = {
			type: "element",
			name: "",
			__zr: null,
			ignore: !1,
			clipPath: null,
			drift: function(t, e) {
				switch (this.draggable) {
				case "horizontal":
					e = 0;
					break;
				case "vertical":
					t = 0
				}
				var i = this.transform;
				i || (i = this.transform = [1, 0, 0, 1, 0, 0]), i[4] += t, i[5] += e, this.decomposeTransform(), this.dirty()
			},
			beforeUpdate: function() {},
			afterUpdate: function() {},
			update: function() {
				this.updateTransform()
			},
			traverse: function(t, e) {},
			attrKV: function(t, e) {
				if ("position" === t || "scale" === t || "origin" === t) {
					if (e) {
						var i = this[t];
						i || (i = this[t] = []), i[0] = e[0], i[1] = e[1]
					}
				} else this[t] = e
			},
			hide: function() {
				this.ignore = !0, this.__zr && this.__zr.refresh()
			},
			show: function() {
				this.ignore = !1, this.__zr && this.__zr.refresh()
			},
			attr: function(t, e) {
				if ("string" == typeof t) this.attrKV(t, e);
				else if (o.isObject(t)) for (var i in t) t.hasOwnProperty(i) && this.attrKV(i, t[i]);
				return this.dirty(), this
			},
			setClipPath: function(t) {
				var e = this.__zr;
				e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty()
			},
			removeClipPath: function() {
				var t = this.clipPath;
				t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty())
			},
			addSelfToZr: function(t) {
				this.__zr = t;
				var e = this.animators;
				if (e) for (var i = 0; i < e.length; i++) t.animation.addAnimator(e[i]);
				this.clipPath && this.clipPath.addSelfToZr(t)
			},
			removeSelfFromZr: function(t) {
				this.__zr = null;
				var e = this.animators;
				if (e) for (var i = 0; i < e.length; i++) t.animation.removeAnimator(e[i]);
				this.clipPath && this.clipPath.removeSelfFromZr(t)
			}
		}, o.mixin(a, r), o.mixin(a, n), o.mixin(a, i), a
	}), e("zrender/container/Group", ["require", "../core/util", "../Element", "../core/BoundingRect"], function(t) {
		var e = t("../core/util"),
			i = t("../Element"),
			n = t("../core/BoundingRect"),
			r = function(t) {
				t = t || {}, i.call(this, t);
				for (var e in t) this[e] = t[e];
				this._children = [], this.__storage = null, this.__dirty = !0
			};
		return r.prototype = {
			constructor: r,
			type: "group",
			children: function() {
				return this._children.slice()
			},
			childAt: function(t) {
				return this._children[t]
			},
			childOfName: function(t) {
				for (var e = this._children, i = 0; i < e.length; i++) if (e[i].name === t) return e[i]
			},
			childCount: function() {
				return this._children.length
			},
			add: function(t) {
				return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this
			},
			addBefore: function(t, e) {
				if (t && t !== this && t.parent !== this && e && e.parent === this) {
					var i = this._children,
						n = i.indexOf(e);
					n >= 0 && (i.splice(n, 0, t), this._doAdd(t))
				}
				return this
			},
			_doAdd: function(t) {
				t.parent && t.parent.remove(t), t.parent = this;
				var e = this.__storage,
					i = this.__zr;
				e && e !== t.__storage && (e.addToMap(t), t instanceof r && t.addChildrenToStorage(e)), i && i.refresh()
			},
			remove: function(t) {
				var i = this.__zr,
					n = this.__storage,
					o = this._children,
					a = e.indexOf(o, t);
				return 0 > a ? this : (o.splice(a, 1), t.parent = null, n && (n.delFromMap(t.id), t instanceof r && t.delChildrenFromStorage(n)), i && i.refresh(), this)
			},
			removeAll: function() {
				var t, e, i = this._children,
					n = this.__storage;
				for (e = 0; e < i.length; e++) t = i[e], n && (n.delFromMap(t.id), t instanceof r && t.delChildrenFromStorage(n)), t.parent = null;
				return i.length = 0, this
			},
			eachChild: function(t, e) {
				for (var i = this._children, n = 0; n < i.length; n++) {
					var r = i[n];
					t.call(e, r, n)
				}
				return this
			},
			traverse: function(t, e) {
				for (var i = 0; i < this._children.length; i++) {
					var n = this._children[i];
					t.call(e, n), "group" === n.type && n.traverse(t, e)
				}
				return this
			},
			addChildrenToStorage: function(t) {
				for (var e = 0; e < this._children.length; e++) {
					var i = this._children[e];
					t.addToMap(i), i instanceof r && i.addChildrenToStorage(t)
				}
			},
			delChildrenFromStorage: function(t) {
				for (var e = 0; e < this._children.length; e++) {
					var i = this._children[e];
					t.delFromMap(i.id), i instanceof r && i.delChildrenFromStorage(t)
				}
			},
			dirty: function() {
				return this.__dirty = !0, this.__zr && this.__zr.refresh(), this
			},
			getBoundingRect: function(t) {
				for (var e = null, i = new n(0, 0, 0, 0), r = t || this._children, o = [], a = 0; a < r.length; a++) {
					var s = r[a];
					if (!s.ignore && !s.invisible) {
						var l = s.getBoundingRect(),
							u = s.getLocalTransform(o);
						u ? (i.copy(l), i.applyTransform(u), e = e || i.clone(), e.union(i)) : (e = e || l.clone(), e.union(l))
					}
				}
				return e || i
			}
		}, e.inherits(r, i), r
	}), e("echarts/view/Component", ["require", "zrender/container/Group", "../util/component", "../util/clazz"], function(t) {
		var e = t("zrender/container/Group"),
			i = t("../util/component"),
			n = t("../util/clazz"),
			r = function() {
				this.group = new e, this.uid = i.getUID("viewComponent")
			};
		r.prototype = {
			constructor: r,
			init: function(t, e) {},
			render: function(t, e, i, n) {},
			dispose: function() {}
		};
		var o = r.prototype;
		return o.updateView = o.updateLayout = o.updateVisual = function(t, e, i, n) {}, n.enableClassExtend(r), n.enableClassManagement(r, {
			registerWhenExtend: !0
		}), r
	}), e("echarts/view/Chart", ["require", "zrender/container/Group", "../util/component", "../util/clazz"], function(t) {
		function e() {
			this.group = new r, this.uid = o.getUID("viewChart")
		}
		function i(t, e) {
			if (t && (t.trigger(e), "group" === t.type)) for (var n = 0; n < t.childCount(); n++) i(t.childAt(n), e)
		}
		function n(t, e, n) {
			if (null != e.dataIndex) {
				var r = t.getItemGraphicEl(e.dataIndex);
				i(r, n)
			} else if (e.name) {
				var o = t.indexOfName(e.name),
					r = t.getItemGraphicEl(o);
				i(r, n)
			} else t.eachItemGraphicEl(function(t) {
				i(t, n)
			})
		}
		var r = t("zrender/container/Group"),
			o = t("../util/component"),
			a = t("../util/clazz");
		e.prototype = {
			type: "chart",
			init: function(t, e) {},
			render: function(t, e, i, n) {},
			highlight: function(t, e, i, r) {
				n(t.getData(), r, "emphasis")
			},
			downplay: function(t, e, i, r) {
				n(t.getData(), r, "normal")
			},
			remove: function(t, e) {
				this.group.removeAll()
			},
			dispose: function() {}
		};
		var s = e.prototype;
		return s.updateView = s.updateLayout = s.updateVisual = function(t, e, i, n) {
			this.render(t, e, i, n)
		}, a.enableClassExtend(e), a.enableClassManagement(e, {
			registerWhenExtend: !0
		}), e
	}), e("zrender/graphic/Style", ["require"], function(t) {
		var e = ["lineCap", "lineJoin", "miterLimit", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "shadowColor"],
			i = function(t) {
				this.extendFrom(t)
			};
		i.prototype = {
			constructor: i,
			fill: "#000000",
			stroke: null,
			opacity: 1,
			lineDash: null,
			lineDashOffset: 0,
			shadowBlur: 0,
			shadowOffsetX: 0,
			shadowOffsetY: 0,
			lineWidth: 1,
			strokeNoScale: !1,
			text: null,
			textFill: "#000",
			textStroke: null,
			textPosition: "inside",
			textBaseline: null,
			textAlign: null,
			textDistance: 5,
			textShadowBlur: 0,
			textShadowOffsetX: 0,
			textShadowOffsetY: 0,
			bind: function(t, i) {
				for (var n = this.fill, r = this.stroke, o = 0; o < e.length; o++) {
					var a = e[o];
					null != this[a] && (t[a] = this[a])
				}
				if (null != r) {
					var s = this.lineWidth;
					t.lineWidth = s / (this.strokeNoScale && i && i.getLineScale ? i.getLineScale() : 1)
				}
				null != n && (t.fillStyle = n.canvasGradient ? n.canvasGradient : n), null != r && (t.strokeStyle = r.canvasGradient ? r.canvasGradient : r), null != this.opacity && (t.globalAlpha = this.opacity)
			},
			extendFrom: function(t, e) {
				if (t) {
					var i = this;
					for (var n in t)!t.hasOwnProperty(n) || !e && i.hasOwnProperty(n) || (i[n] = t[n])
				}
			},
			set: function(t, e) {
				"string" == typeof t ? this[t] = e : this.extendFrom(t, !0)
			},
			clone: function() {
				var t = new this.constructor;
				return t.extendFrom(this, !0), t
			}
		};
		var n, r, o = i.prototype;
		for (r = 0; r < e.length; r++) n = e[r], n in o || (o[n] = null);
		return i
	}), e("zrender/graphic/mixin/RectText", ["require", "../../contain/text", "../../core/BoundingRect"], function(t) {
		function e(t, e) {
			return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
		}
		function i(t, e) {
			t.transform(e[0], e[1], e[2], e[3], e[4], e[5])
		}
		var n = t("../../contain/text"),
			r = t("../../core/BoundingRect"),
			o = new r,
			a = function() {};
		return a.prototype = {
			constructor: a,
			drawRectText: function(t, r, a) {
				var s = this.style,
					l = s.text;
				if (null != l && (l += ""), l) {
					var u, c, h = s.textPosition,
						d = s.textDistance,
						p = s.textAlign,
						f = s.textFont || s.font,
						m = s.textBaseline;
					a = a || n.getBoundingRect(l, f, p, m);
					var g = this.transform,
						v = this.invTransform;
					if (g && (o.copy(r), o.applyTransform(g), r = o, i(t, v)), h instanceof Array) u = r.x + e(h[0], r.width), c = r.y + e(h[1], r.height), p = p || "left", m = m || "top";
					else {
						var y = n.adjustTextPositionOnRect(h, r, a, d);
						u = y.x, c = y.y, p = p || y.textAlign, m = m || y.textBaseline
					}
					t.textAlign = p, t.textBaseline = m;
					var _ = s.textFill,
						x = s.textStroke;
					_ && (t.fillStyle = _), x && (t.strokeStyle = x), t.font = f, t.shadowColor = s.textShadowColor, t.shadowBlur = s.textShadowBlur, t.shadowOffsetX = s.textShadowOffsetX, t.shadowOffsetY = s.textShadowOffsetY;
					for (var b = l.split("\n"), w = 0; w < b.length; w++) _ && t.fillText(b[w], u, c), x && t.strokeText(b[w], u, c), c += a.lineHeight;
					g && i(t, g)
				}
			}
		}, a
	}), e("zrender/graphic/Displayable", ["require", "../core/util", "./Style", "../Element", "./mixin/RectText"], function(t) {
		function e(t) {
			t = t || {}, r.call(this, t);
			for (var e in t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
			this.style = new n(t.style), this._rect = null, this.__clipPaths = []
		}
		var i = t("../core/util"),
			n = t("./Style"),
			r = t("../Element"),
			o = t("./mixin/RectText");
		return e.prototype = {
			constructor: e,
			type: "displayable",
			__dirty: !0,
			invisible: !1,
			z: 0,
			z2: 0,
			zlevel: 0,
			draggable: !1,
			dragging: !1,
			silent: !1,
			culling: !1,
			cursor: "pointer",
			rectHover: !1,
			beforeBrush: function(t) {},
			afterBrush: function(t) {},
			brush: function(t) {},
			getBoundingRect: function() {},
			contain: function(t, e) {
				return this.rectContain(t, e)
			},
			traverse: function(t, e) {
				t.call(e, this)
			},
			rectContain: function(t, e) {
				var i = this.transformCoordToLocal(t, e),
					n = this.getBoundingRect();
				return n.contain(i[0], i[1])
			},
			dirty: function() {
				this.__dirty = !0, this._rect = null, this.__zr && this.__zr.refresh()
			},
			animateStyle: function(t) {
				return this.animate("style", t)
			},
			attrKV: function(t, e) {
				"style" !== t ? r.prototype.attrKV.call(this, t, e) : this.style.set(e)
			},
			setStyle: function(t, e) {
				return this.style.set(t, e), this.dirty(), this
			}
		}, i.inherits(e, r), i.mixin(e, o), e
	}), e("zrender/core/curve", ["require", "./vector"], function(t) {
		function e(t) {
			return t > -x && x > t
		}
		function i(t) {
			return t > x || -x > t
		}
		function n(t, e, i, n, r) {
			var o = 1 - r;
			return o * o * (o * t + 3 * r * e) + r * r * (r * n + 3 * o * i)
		}
		function r(t, e, i, n, r) {
			var o = 1 - r;
			return 3 * (((e - t) * o + 2 * (i - e) * r) * o + (n - i) * r * r)
		}
		function o(t, i, n, r, o, a) {
			var s = r + 3 * (i - n) - t,
				l = 3 * (n - 2 * i + t),
				u = 3 * (i - t),
				c = t - o,
				h = l * l - 3 * s * u,
				d = l * u - 9 * s * c,
				p = u * u - 3 * l * c,
				f = 0;
			if (e(h) && e(d)) if (e(l)) a[0] = 0;
			else {
				var m = -u / l;
				m >= 0 && 1 >= m && (a[f++] = m)
			} else {
				var g = d * d - 4 * h * p;
				if (e(g)) {
					var v = d / h,
						m = -l / s + v,
						x = -v / 2;
					m >= 0 && 1 >= m && (a[f++] = m), x >= 0 && 1 >= x && (a[f++] = x)
				} else if (g > 0) {
					var M = _(g),
						S = h * l + 1.5 * s * (-d + M),
						L = h * l + 1.5 * s * (-d - M);
					S = 0 > S ? -y(-S, w) : y(S, w), L = 0 > L ? -y(-L, w) : y(L, w);
					var m = (-l - (S + L)) / (3 * s);
					m >= 0 && 1 >= m && (a[f++] = m)
				} else {
					var C = (2 * h * l - 3 * s * d) / (2 * _(h * h * h)),
						T = Math.acos(C) / 3,
						P = _(h),
						A = Math.cos(T),
						m = (-l - 2 * P * A) / (3 * s),
						x = (-l + P * (A + b * Math.sin(T))) / (3 * s),
						D = (-l + P * (A - b * Math.sin(T))) / (3 * s);
					m >= 0 && 1 >= m && (a[f++] = m), x >= 0 && 1 >= x && (a[f++] = x), D >= 0 && 1 >= D && (a[f++] = D)
				}
			}
			return f
		}
		function a(t, n, r, o, a) {
			var s = 6 * r - 12 * n + 6 * t,
				l = 9 * n + 3 * o - 3 * t - 9 * r,
				u = 3 * n - 3 * t,
				c = 0;
			if (e(l)) {
				if (i(s)) {
					var h = -u / s;
					h >= 0 && 1 >= h && (a[c++] = h)
				}
			} else {
				var d = s * s - 4 * l * u;
				if (e(d)) a[0] = -s / (2 * l);
				else if (d > 0) {
					var p = _(d),
						h = (-s + p) / (2 * l),
						f = (-s - p) / (2 * l);
					h >= 0 && 1 >= h && (a[c++] = h), f >= 0 && 1 >= f && (a[c++] = f)
				}
			}
			return c
		}
		function s(t, e, i, n, r, o) {
			var a = (e - t) * r + t,
				s = (i - e) * r + e,
				l = (n - i) * r + i,
				u = (s - a) * r + a,
				c = (l - s) * r + s,
				h = (c - u) * r + u;
			o[0] = t, o[1] = a, o[2] = u, o[3] = h, o[4] = h, o[5] = c, o[6] = l, o[7] = n
		}
		function l(t, e, i, r, o, a, s, l, u, c, h) {
			var d, p, f, m, g, y = .005,
				b = 1 / 0;
			M[0] = u, M[1] = c;
			for (var w = 0; 1 > w; w += .05) S[0] = n(t, i, o, s, w), S[1] = n(e, r, a, l, w), m = v(M, S), b > m && (d = w, b = m);
			b = 1 / 0;
			for (var C = 0; 32 > C && !(x > y); C++) p = d - y, f = d + y, S[0] = n(t, i, o, s, p), S[1] = n(e, r, a, l, p), m = v(S, M), p >= 0 && b > m ? (d = p, b = m) : (L[0] = n(t, i, o, s, f), L[1] = n(e, r, a, l, f), g = v(L, M), 1 >= f && b > g ? (d = f, b = g) : y *= .5);
			return h && (h[0] = n(t, i, o, s, d), h[1] = n(e, r, a, l, d)), _(b)
		}
		function u(t, e, i, n) {
			var r = 1 - n;
			return r * (r * t + 2 * n * e) + n * n * i
		}
		function c(t, e, i, n) {
			return 2 * ((1 - n) * (e - t) + n * (i - e))
		}
		function h(t, n, r, o, a) {
			var s = t - 2 * n + r,
				l = 2 * (n - t),
				u = t - o,
				c = 0;
			if (e(s)) {
				if (i(l)) {
					var h = -u / l;
					h >= 0 && 1 >= h && (a[c++] = h)
				}
			} else {
				var d = l * l - 4 * s * u;
				if (e(d)) {
					var h = -l / (2 * s);
					h >= 0 && 1 >= h && (a[c++] = h)
				} else if (d > 0) {
					var p = _(d),
						h = (-l + p) / (2 * s),
						f = (-l - p) / (2 * s);
					h >= 0 && 1 >= h && (a[c++] = h), f >= 0 && 1 >= f && (a[c++] = f)
				}
			}
			return c
		}
		function d(t, e, i) {
			var n = t + i - 2 * e;
			return 0 === n ? .5 : (t - e) / n
		}
		function p(t, e, i, n, r) {
			var o = (e - t) * n + t,
				a = (i - e) * n + e,
				s = (a - o) * n + o;
			r[0] = t, r[1] = o, r[2] = s, r[3] = s, r[4] = a, r[5] = i
		}
		function f(t, e, i, n, r, o, a, s, l) {
			var c, h = .005,
				d = 1 / 0;
			M[0] = a, M[1] = s;
			for (var p = 0; 1 > p; p += .05) {
				S[0] = u(t, i, r, p), S[1] = u(e, n, o, p);
				var f = v(M, S);
				d > f && (c = p, d = f)
			}
			d = 1 / 0;
			for (var m = 0; 32 > m && !(x > h); m++) {
				var g = c - h,
					y = c + h;
				S[0] = u(t, i, r, g), S[1] = u(e, n, o, g);
				var f = v(S, M);
				if (g >= 0 && d > f) c = g, d = f;
				else {
					L[0] = u(t, i, r, y), L[1] = u(e, n, o, y);
					var b = v(L, M);
					1 >= y && d > b ? (c = y, d = b) : h *= .5
				}
			}
			return l && (l[0] = u(t, i, r, c), l[1] = u(e, n, o, c)), _(d)
		}
		var m = t("./vector"),
			g = m.create,
			v = m.distSquare,
			y = Math.pow,
			_ = Math.sqrt,
			x = 1e-4,
			b = _(3),
			w = 1 / 3,
			M = g(),
			S = g(),
			L = g();
		return {
			cubicAt: n,
			cubicDerivativeAt: r,
			cubicRootAt: o,
			cubicExtrema: a,
			cubicSubdivide: s,
			cubicProjectPoint: l,
			quadraticAt: u,
			quadraticDerivativeAt: c,
			quadraticRootAt: h,
			quadraticExtremum: d,
			quadraticSubdivide: p,
			quadraticProjectPoint: f
		}
	}), e("zrender/core/bbox", ["require", "./vector", "./curve"], function(t) {
		var e = t("./vector"),
			i = t("./curve"),
			n = {},
			r = Math.min,
			o = Math.max,
			a = Math.sin,
			s = Math.cos,
			l = e.create(),
			u = e.create(),
			c = e.create(),
			h = 2 * Math.PI;
		return n.fromPoints = function(t, e, i) {
			if (0 !== t.length) {
				var n, a = t[0],
					s = a[0],
					l = a[0],
					u = a[1],
					c = a[1];
				for (n = 1; n < t.length; n++) a = t[n], s = r(s, a[0]), l = o(l, a[0]), u = r(u, a[1]), c = o(c, a[1]);
				e[0] = s, e[1] = u, i[0] = l, i[1] = c
			}
		}, n.fromLine = function(t, e, i, n, a, s) {
			a[0] = r(t, i), a[1] = r(e, n), s[0] = o(t, i), s[1] = o(e, n)
		}, n.fromCubic = function(t, e, n, a, s, l, u, c, h, d) {
			var p, f, m, g, v, y = [],
				_ = [],
				x = i.cubicExtrema,
				b = i.cubicAt,
				w = x(t, n, s, u, y);
			for (v = 0; w > v; v++) y[v] = b(t, n, s, u, y[v]);
			for (w = x(e, a, l, c, _), v = 0; w > v; v++) _[v] = b(e, a, l, c, _[v]);
			y.push(t, u), _.push(e, c), p = r.apply(null, y), f = o.apply(null, y), m = r.apply(null, _), g = o.apply(null, _), h[0] = p, h[1] = m, d[0] = f, d[1] = g
		}, n.fromQuadratic = function(t, e, n, a, s, l, u, c) {
			var h = i.quadraticExtremum,
				d = i.quadraticAt,
				p = o(r(h(t, n, s), 1), 0),
				f = o(r(h(e, a, l), 1), 0),
				m = d(t, n, s, p),
				g = d(e, a, l, f);
			u[0] = r(t, s, m), u[1] = r(e, l, g), c[0] = o(t, s, m), c[1] = o(e, l, g)
		}, n.fromArc = function(t, i, n, r, o, d, p, f, m) {
			var g = e.min,
				v = e.max;
			if (Math.abs(o - d) % h < 1e-4) return f[0] = t - n, f[1] = i - r, m[0] = t + n, void(m[1] = i + r);
			if (l[0] = s(o) * n + t, l[1] = a(o) * r + i, u[0] = s(d) * n + t, u[1] = a(d) * r + i, g(f, l, u), v(m, l, u), o %= h, 0 > o && (o += h), d %= h, 0 > d && (d += h), o > d && !p ? d += h : d > o && p && (o += h), p) {
				var y = d;
				d = o, o = y
			}
			for (var _ = 0; d > _; _ += Math.PI / 2) _ > o && (c[0] = s(_) * n + t, c[1] = a(_) * r + i, g(f, c, f), v(m, c, m))
		}, n
	}), e("zrender/core/PathProxy", ["require", "./curve", "./vector", "./bbox", "./BoundingRect"], function(t) {
		var e = t("./curve"),
			i = t("./vector"),
			n = t("./bbox"),
			r = t("./BoundingRect"),
			o = {
				M: 1,
				L: 2,
				C: 3,
				Q: 4,
				A: 5,
				Z: 6,
				R: 7
			},
			a = [],
			s = [],
			l = [],
			u = [],
			c = Math.min,
			h = Math.max,
			d = Math.cos,
			p = Math.sin,
			f = Math.sqrt,
			m = "undefined" != typeof Float32Array,
			g = function() {
				this.data = [], this._len = 0, this._ctx = null, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0
			};
		return g.prototype = {
			constructor: g,
			_lineDash: null,
			_dashOffset: 0,
			_dashIdx: 0,
			_dashSum: 0,
			getContext: function() {
				return this._ctx
			},
			beginPath: function(t) {
				return this._ctx = t, t && t.beginPath(), this._len = 0, this._lineDash && (this._lineDash = null, this._dashOffset = 0), this
			},
			moveTo: function(t, e) {
				return this.addData(o.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
			},
			lineTo: function(t, e) {
				return this.addData(o.L, t, e), this._ctx && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), this._xi = t, this._yi = e, this
			},
			bezierCurveTo: function(t, e, i, n, r, a) {
				return this.addData(o.C, t, e, i, n, r, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, i, n, r, a) : this._ctx.bezierCurveTo(t, e, i, n, r, a)), this._xi = r, this._yi = a, this
			},
			quadraticCurveTo: function(t, e, i, n) {
				return this.addData(o.Q, t, e, i, n), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, i, n) : this._ctx.quadraticCurveTo(t, e, i, n)), this._xi = i, this._yi = n, this
			},
			arc: function(t, e, i, n, r, a) {
				return this.addData(o.A, t, e, i, i, n, r - n, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, i, n, r, a), this._xi = d(r) * i + t, this._xi = p(r) * i + t, this
			},
			arcTo: function(t, e, i, n, r) {
				return this._ctx && this._ctx.arcTo(t, e, i, n, r), this
			},
			rect: function(t, e, i, n) {
				return this._ctx && this._ctx.rect(t, e, i, n), this.addData(o.R, t, e, i, n), this
			},
			closePath: function() {
				this.addData(o.Z);
				var t = this._ctx,
					e = this._x0,
					i = this._y0;
				return t && (this._needsDash() && this._dashedLineTo(e, i), t.closePath()), this._xi = e, this._yi = i, this
			},
			fill: function(t) {
				t && t.fill(), this.toStatic()
			},
			stroke: function(t) {
				t && t.stroke(), this.toStatic()
			},
			setLineDash: function(t) {
				if (t instanceof Array) {
					this._lineDash = t, this._dashIdx = 0;
					for (var e = 0, i = 0; i < t.length; i++) e += t[i];
					this._dashSum = e
				}
				return this
			},
			setLineDashOffset: function(t) {
				return this._dashOffset = t, this
			},
			len: function() {
				return this._len
			},
			setData: function(t) {
				var e = t.length;
				this.data && this.data.length == e || !m || (this.data = new Float32Array(e));
				for (var i = 0; e > i; i++) this.data[i] = t[i];
				this._len = e
			},
			appendPath: function(t) {
				t instanceof Array || (t = [t]);
				for (var e = t.length, i = 0, n = this._len, r = 0; e > r; r++) i += t[r].len();
				m && this.data instanceof Float32Array && (this.data = new Float32Array(n + i));
				for (var r = 0; e > r; r++) for (var o = t[r].data, a = 0; a < o.length; a++) this.data[n++] = o[a];
				this._len = n
			},
			addData: function(t) {
				var e = this.data;
				this._len + arguments.length > e.length && (this._expandData(), e = this.data);
				for (var i = 0; i < arguments.length; i++) e[this._len++] = arguments[i];
				this._prevCmd = t
			},
			_expandData: function() {
				if (!(this.data instanceof Array)) {
					for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
					this.data = t
				}
			},
			_needsDash: function() {
				return this._lineDash
			},
			_dashedLineTo: function(t, e) {
				var i, n, r = this._dashSum,
					o = this._dashOffset,
					a = this._lineDash,
					s = this._ctx,
					l = this._xi,
					u = this._yi,
					d = t - l,
					p = e - u,
					m = f(d * d + p * p),
					g = l,
					v = u,
					y = a.length;
				for (d /= m, p /= m, 0 > o && (o = r + o), o %= r, g -= o * d, v -= o * p; d >= 0 && t >= g || 0 > d && g > t;) n = this._dashIdx, i = a[n], g += d * i, v += p * i, this._dashIdx = (n + 1) % y, d > 0 && l > g || 0 > d && g > l || s[n % 2 ? "moveTo" : "lineTo"](d >= 0 ? c(g, t) : h(g, t), p >= 0 ? c(v, e) : h(v, e));
				d = g - t, p = v - e, this._dashOffset = -f(d * d + p * p)
			},
			_dashedBezierTo: function(t, i, n, r, o, a) {
				var s, l, u, c, h, d = this._dashSum,
					p = this._dashOffset,
					m = this._lineDash,
					g = this._ctx,
					v = this._xi,
					y = this._yi,
					_ = e.cubicAt,
					x = 0,
					b = this._dashIdx,
					w = m.length,
					M = 0;
				for (0 > p && (p = d + p), p %= d, s = 0; 1 > s; s += .1) l = _(v, t, n, o, s + .1) - _(v, t, n, o, s), u = _(y, i, r, a, s + .1) - _(y, i, r, a, s), x += f(l * l + u * u);
				for (; w > b && (M += m[b], !(M > p)); b++);
				for (s = (M - p) / x; 1 >= s;) c = _(v, t, n, o, s), h = _(y, i, r, a, s), b % 2 ? g.moveTo(c, h) : g.lineTo(c, h), s += m[b] / x, b = (b + 1) % w;
				b % 2 !== 0 && g.lineTo(o, a), l = o - c, u = a - h, this._dashOffset = -f(l * l + u * u)
			},
			_dashedQuadraticTo: function(t, e, i, n) {
				var r = i,
					o = n;
				i = (i + 2 * t) / 3, n = (n + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, i, n, r, o)
			},
			toStatic: function() {
				this.data.length = this._len, m && this.data instanceof Array && (this.data = new Float32Array(this.data))
			},
			getBoundingRect: function() {
				a[0] = a[1] = l[0] = l[1] = Number.MAX_VALUE, s[0] = s[1] = u[0] = u[1] = -Number.MAX_VALUE;
				for (var t = this.data, e = 0, c = 0, h = 0, f = 0, m = 0; m < t.length;) {
					var g = t[m++];
					switch (1 == m && (e = t[m], c = t[m + 1], h = e, f = c), g) {
					case o.M:
						h = t[m++], f = t[m++], e = h, c = f, l[0] = h, l[1] = f, u[0] = h, u[1] = f;
						break;
					case o.L:
						n.fromLine(e, c, t[m], t[m + 1], l, u), e = t[m++], c = t[m++];
						break;
					case o.C:
						n.fromCubic(e, c, t[m++], t[m++], t[m++], t[m++], t[m], t[m + 1], l, u), e = t[m++], c = t[m++];
						break;
					case o.Q:
						n.fromQuadratic(e, c, t[m++], t[m++], t[m], t[m + 1], l, u), e = t[m++], c = t[m++];
						break;
					case o.A:
						var v = t[m++],
							y = t[m++],
							_ = t[m++],
							x = t[m++],
							b = t[m++],
							w = t[m++] + b,
							M = (t[m++], 1 - t[m++]);
						1 == m && (h = d(b) * _ + v, f = p(b) * x + y), n.fromArc(v, y, _, x, b, w, M, l, u), e = d(w) * _ + v, c = p(w) * x + y;
						break;
					case o.R:
						h = e = t[m++], f = c = t[m++];
						var S = t[m++],
							L = t[m++];
						n.fromLine(h, f, h + S, f + L, l, u);
						break;
					case o.Z:
						e = h, c = f
					}
					i.min(a, a, l), i.max(s, s, u)
				}
				return 0 === m && (a[0] = a[1] = s[0] = s[1] = 0), new r(a[0], a[1], s[0] - a[0], s[1] - a[1])
			},
			rebuildPath: function(t) {
				for (var e = this.data, i = 0; i < this._len;) {
					var n = e[i++];
					switch (n) {
					case o.M:
						t.moveTo(e[i++], e[i++]);
						break;
					case o.L:
						t.lineTo(e[i++], e[i++]);
						break;
					case o.C:
						t.bezierCurveTo(e[i++], e[i++], e[i++], e[i++], e[i++], e[i++]);
						break;
					case o.Q:
						t.quadraticCurveTo(e[i++], e[i++], e[i++], e[i++]);
						break;
					case o.A:
						var r = e[i++],
							a = e[i++],
							s = e[i++],
							l = e[i++],
							u = e[i++],
							c = e[i++],
							h = e[i++],
							d = e[i++],
							p = s > l ? s : l,
							f = s > l ? 1 : s / l,
							m = s > l ? l / s : 1,
							g = Math.abs(s - l) > .001;
						g ? (t.translate(r, a), t.rotate(h), t.scale(f, m), t.arc(0, 0, p, u, u + c, 1 - d), t.scale(1 / f, 1 / m), t.rotate(-h), t.translate(-r, -a)) : t.arc(r, a, p, u, u + c, 1 - d);
						break;
					case o.R:
						t.rect(e[i++], e[i++], e[i++], e[i++]);
						break;
					case o.Z:
						t.closePath()
					}
				}
			}
		}, g.CMD = o, g
	}), e("zrender/contain/line", [], function() {
		return {
			containStroke: function(t, e, i, n, r, o, a) {
				if (0 === r) return !1;
				var s = r,
					l = 0,
					u = t;
				if (a > e + s && a > n + s || e - s > a && n - s > a || o > t + s && o > i + s || t - s > o && i - s > o) return !1;
				if (t === i) return Math.abs(o - t) <= s / 2;
				l = (e - n) / (t - i), u = (t * n - i * e) / (t - i);
				var c = l * o - a + u,
					h = c * c / (l * l + 1);
				return s / 2 * s / 2 >= h
			}
		}
	}), e("zrender/contain/cubic", ["require", "../core/curve"], function(t) {
		var e = t("../core/curve");
		return {
			containStroke: function(t, i, n, r, o, a, s, l, u, c, h) {
				if (0 === u) return !1;
				var d = u;
				if (h > i + d && h > r + d && h > a + d && h > l + d || i - d > h && r - d > h && a - d > h && l - d > h || c > t + d && c > n + d && c > o + d && c > s + d || t - d > c && n - d > c && o - d > c && s - d > c) return !1;
				var p = e.cubicProjectPoint(t, i, n, r, o, a, s, l, c, h, null);
				return d / 2 >= p
			}
		}
	}), e("zrender/contain/quadratic", ["require", "../core/curve"], function(t) {
		var e = t("../core/curve");
		return {
			containStroke: function(t, i, n, r, o, a, s, l, u) {
				if (0 === s) return !1;
				var c = s;
				if (u > i + c && u > r + c && u > a + c || i - c > u && r - c > u && a - c > u || l > t + c && l > n + c && l > o + c || t - c > l && n - c > l && o - c > l) return !1;
				var h = e.quadraticProjectPoint(t, i, n, r, o, a, l, u, null);
				return c / 2 >= h
			}
		}
	}), e("zrender/contain/util", ["require"], function(t) {
		var e = 2 * Math.PI;
		return {
			normalizeRadian: function(t) {
				return t %= e, 0 > t && (t += e), t
			}
		}
	}), e("zrender/contain/arc", ["require", "./util"], function(t) {
		var e = t("./util").normalizeRadian,
			i = 2 * Math.PI;
		return {
			containStroke: function(t, n, r, o, a, s, l, u, c) {
				if (0 === l) return !1;
				var h = l;
				u -= t, c -= n;
				var d = Math.sqrt(u * u + c * c);
				if (d - h > r || r > d + h) return !1;
				if (Math.abs(o - a) % i < 1e-4) return !0;
				if (s) {
					var p = o;
					o = e(a), a = e(p)
				} else o = e(o), a = e(a);
				o > a && (a += i);
				var f = Math.atan2(c, u);
				return 0 > f && (f += i), f >= o && a >= f || f + i >= o && a >= f + i
			}
		}
	}), e("zrender/contain/windingLine", [], function() {
		return function(t, e, i, n, r, o) {
			if (o > e && o > n || e > o && n > o) return 0;
			if (n === e) return 0;
			var a = e > n ? 1 : -1,
				s = (o - e) / (n - e),
				l = s * (i - t) + t;
			return l > r ? a : 0
		}
	}), e("zrender/contain/path", ["require", "../core/PathProxy", "./line", "./cubic", "./quadratic", "./arc", "./util", "../core/curve", "./windingLine"], function(t) {
		function e(t, e) {
			return Math.abs(t - e) < v
		}
		function i() {
			var t = _[0];
			_[0] = _[1], _[1] = t
		}
		function n(t, e, n, r, o, a, s, l, u, c) {
			if (c > e && c > r && c > a && c > l || e > c && r > c && a > c && l > c) return 0;
			var h = p.cubicRootAt(e, r, a, l, c, y);
			if (0 === h) return 0;
			for (var d, f, m = 0, g = -1, v = 0; h > v; v++) {
				var x = y[v],
					b = p.cubicAt(t, n, o, s, x);
				u > b || (0 > g && (g = p.cubicExtrema(e, r, a, l, _), _[1] < _[0] && g > 1 && i(), d = p.cubicAt(e, r, a, l, _[0]), g > 1 && (f = p.cubicAt(e, r, a, l, _[1]))), m += 2 == g ? x < _[0] ? e > d ? 1 : -1 : x < _[1] ? d > f ? 1 : -1 : f > l ? 1 : -1 : x < _[0] ? e > d ? 1 : -1 : d > l ? 1 : -1)
			}
			return m
		}
		function r(t, e, i, n, r, o, a, s) {
			if (s > e && s > n && s > o || e > s && n > s && o > s) return 0;
			var l = p.quadraticRootAt(e, n, o, s, y);
			if (0 === l) return 0;
			var u = p.quadraticExtremum(e, n, o);
			if (u >= 0 && 1 >= u) {
				for (var c = 0, h = p.quadraticAt(e, n, o, u), d = 0; l > d; d++) {
					var f = p.quadraticAt(t, i, r, y[d]);
					f > a || (c += y[d] < u ? e > h ? 1 : -1 : h > o ? 1 : -1)
				}
				return c
			}
			var f = p.quadraticAt(t, i, r, y[0]);
			return f > a ? 0 : e > o ? 1 : -1
		}
		function o(t, e, i, n, r, o, a, s) {
			if (s -= e, s > i || -i > s) return 0;
			var l = Math.sqrt(i * i - s * s);
			if (y[0] = -l, y[1] = l, Math.abs(n - r) % g < 1e-4) {
				n = 0, r = g;
				var u = o ? 1 : -1;
				return a >= y[0] + t && a <= y[1] + t ? u : 0
			}
			if (o) {
				var l = n;
				n = d(r), r = d(l)
			} else n = d(n), r = d(r);
			n > r && (r += g);
			for (var c = 0, h = 0; 2 > h; h++) {
				var p = y[h];
				if (p + t > a) {
					var f = Math.atan2(s, p),
						u = o ? 1 : -1;
					0 > f && (f = g + f), (f >= n && r >= f || f + g >= n && r >= f + g) && (f > Math.PI / 2 && f < 1.5 * Math.PI && (u = -u), c += u)
				}
			}
			return c
		}
		function a(t, i, a, l, d) {
			for (var p = 0, g = 0, v = 0, y = 0, _ = 0, x = 0; x < t.length;) {
				var b = t[x++];
				if (b === s.M && x > 1 && (a || (p += f(g, v, y, _, l, d)), 0 !== p)) return !0;
				switch (1 == x && (g = t[x], v = t[x + 1], y = g, _ = v), b) {
				case s.M:
					y = t[x++], _ = t[x++], g = y, v = _;
					break;
				case s.L:
					if (a) {
						if (m(g, v, t[x], t[x + 1], i, l, d)) return !0
					} else p += f(g, v, t[x], t[x + 1], l, d) || 0;
					g = t[x++], v = t[x++];
					break;
				case s.C:
					if (a) {
						if (u.containStroke(g, v, t[x++], t[x++], t[x++], t[x++], t[x], t[x + 1], i, l, d)) return !0
					} else p += n(g, v, t[x++], t[x++], t[x++], t[x++], t[x], t[x + 1], l, d) || 0;
					g = t[x++], v = t[x++];
					break;
				case s.Q:
					if (a) {
						if (c.containStroke(g, v, t[x++], t[x++], t[x], t[x + 1], i, l, d)) return !0
					} else p += r(g, v, t[x++], t[x++], t[x], t[x + 1], l, d) || 0;
					g = t[x++], v = t[x++];
					break;
				case s.A:
					var w = t[x++],
						M = t[x++],
						S = t[x++],
						L = t[x++],
						C = t[x++],
						T = t[x++],
						P = (t[x++], 1 - t[x++]),
						A = Math.cos(C) * S + w,
						D = Math.sin(C) * L + M;
					x > 1 ? p += f(g, v, A, D, l, d) : (y = A, _ = D);
					var z = (l - w) * L / S + w;
					if (a) {
						if (h.containStroke(w, M, L, C, C + T, P, i, z, d)) return !0
					} else p += o(w, M, L, C, C + T, P, z, d);
					g = Math.cos(C + T) * S + w, v = Math.sin(C + T) * L + M;
					break;
				case s.R:
					y = g = t[x++], _ = v = t[x++];
					var I = t[x++],
						k = t[x++],
						A = y + I,
						D = _ + k;
					if (a) {
						if (m(y, _, A, _, i, l, d) || m(A, _, A, D, i, l, d) || m(A, D, y, D, i, l, d) || m(y, D, A, D, i, l, d)) return !0
					} else p += f(A, _, A, D, l, d), p += f(y, D, y, _, l, d);
					break;
				case s.Z:
					if (a) {
						if (m(g, v, y, _, i, l, d)) return !0
					} else if (p += f(g, v, y, _, l, d), 0 !== p) return !0;
					g = y, v = _
				}
			}
			return a || e(v, _) || (p += f(g, v, y, _, l, d) || 0), 0 !== p
		}
		var s = t("../core/PathProxy").CMD,
			l = t("./line"),
			u = t("./cubic"),
			c = t("./quadratic"),
			h = t("./arc"),
			d = t("./util").normalizeRadian,
			p = t("../core/curve"),
			f = t("./windingLine"),
			m = l.containStroke,
			g = 2 * Math.PI,
			v = 1e-4,
			y = [-1, -1, -1],
			_ = [-1, -1];
		return {
			contain: function(t, e, i) {
				return a(t, 0, !1, e, i)
			},
			containStroke: function(t, e, i, n) {
				return a(t, e, !0, i, n)
			}
		}
	}), e("zrender/graphic/Path", ["require", "./Displayable", "../core/util", "../core/PathProxy", "../contain/path", "./Gradient"], function(t) {
		function e(t) {
			var e = t.fill;
			return null != e && "none" !== e
		}
		function i(t) {
			var e = t.stroke;
			return null != e && "none" !== e && t.lineWidth > 0
		}
		function n(t) {
			r.call(this, t), this.path = new a
		}
		var r = t("./Displayable"),
			o = t("../core/util"),
			a = t("../core/PathProxy"),
			s = t("../contain/path"),
			l = t("./Gradient"),
			u = Math.abs;
		return n.prototype = {
			constructor: n,
			type: "path",
			__dirtyPath: !0,
			strokeContainThreshold: 5,
			brush: function(t) {
				t.save();
				var n = this.style,
					r = this.path,
					o = i(n),
					a = e(n);
				this.__dirtyPath && (a && n.fill instanceof l && n.fill.updateCanvasGradient(this, t), o && n.stroke instanceof l && n.stroke.updateCanvasGradient(this, t)), n.bind(t, this), this.setTransform(t);
				var s = n.lineDash,
					u = n.lineDashOffset,
					c = !! t.setLineDash;
				this.__dirtyPath || s && !c && o ? (r = this.path.beginPath(t), s && !c && (r.setLineDash(s), r.setLineDashOffset(u)), this.buildPath(r, this.shape), this.__dirtyPath = !1) : (t.beginPath(), this.path.rebuildPath(t)), a && r.fill(t), s && c && (t.setLineDash(s), t.lineDashOffset = u), o && r.stroke(t), null != n.text && this.drawRectText(t, this.getBoundingRect()), t.restore()
			},
			buildPath: function(t, e) {},
			getBoundingRect: function() {
				var t = this._rect,
					e = this.style;
				if (!t) {
					var n = this.path;
					this.__dirtyPath && (n.beginPath(), this.buildPath(n, this.shape)), t = n.getBoundingRect()
				}
				if (i(e) && (this.__dirty || !this._rect)) {
					var r = this._rectWithStroke || (this._rectWithStroke = t.clone());
					r.copy(t);
					var o = e.lineWidth,
						a = e.strokeNoScale ? this.getLineScale() : 1;
					return o = Math.max(o, this.strokeContainThreshold), a > 1e-10 && (r.width += o / a, r.height += o / a, r.x -= o / a / 2, r.y -= o / a / 2), r
				}
				return this._rect = t, t
			},
			contain: function(t, n) {
				var r = this.transformCoordToLocal(t, n),
					o = this.getBoundingRect(),
					a = this.style;
				if (t = r[0], n = r[1], o.contain(t, n)) {
					var l = this.path.data;
					if (i(a)) {
						var u = a.lineWidth,
							c = a.strokeNoScale ? this.getLineScale() : 1;
						if (1e-10 > c) return !1;
						if (u = Math.max(u, this.strokeContainThreshold), s.containStroke(l, u / c, t, n)) return !0
					}
					if (e(a)) return s.contain(l, t, n)
				}
				return !1
			},
			dirty: function(t) {
				0 === arguments.length && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty()
			},
			animateShape: function(t) {
				return this.animate("shape", t)
			},
			attrKV: function(t, e) {
				"shape" === t ? this.setShape(e) : r.prototype.attrKV.call(this, t, e)
			},
			setShape: function(t, e) {
				var i = this.shape;
				if (i) {
					if (o.isObject(t)) for (var n in t) i[n] = t[n];
					else i[t] = e;
					this.dirty(!0)
				}
				return this
			},
			getLineScale: function() {
				var t = this.transform;
				return t && u(t[0] - 1) > 1e-10 && u(t[3] - 1) > 1e-10 ? Math.sqrt(u(t[0] * t[3] - t[2] * t[1])) : 1
			}
		}, n.extend = function(t) {
			var e = function(e) {
					n.call(this, e), t.style && this.style.extendFrom(t.style, !1);
					var i = t.shape;
					if (i) {
						this.shape = this.shape || {};
						var r = this.shape;
						for (var o in i)!r.hasOwnProperty(o) && i.hasOwnProperty(o) && (r[o] = i[o])
					}
					t.init && t.init.call(this, e)
				};
			o.inherits(e, n);
			for (var i in t)"style" !== i && "shape" !== i && (e.prototype[i] = t[i]);
			return e
		}, o.inherits(n, r), n
	}), e("zrender/tool/transformPath", ["require", "../core/PathProxy", "../core/vector"], function(t) {
		function e(t, e) {
			var n, l, u, c, h, d = t.data,
				p = i.M,
				f = i.C,
				m = i.L,
				g = i.R,
				v = i.A,
				y = i.Q;
			for (u = 0, c = 0; u < d.length;) {
				switch (n = d[u++], c = u, l = 0, n) {
				case p:
					l = 1;
					break;
				case m:
					l = 1;
					break;
				case f:
					l = 3;
					break;
				case y:
					l = 2;
					break;
				case v:
					var _ = e[4],
						x = e[5],
						b = a(e[0] * e[0] + e[1] * e[1]),
						w = a(e[2] * e[2] + e[3] * e[3]),
						M = s(-e[1] / w, e[0] / b);
					d[u + 7];
					d[u++] += _, d[u++] += x, d[u++] *= b, d[u++] *= w, d[u++] += M, d[u++] += M, u += 2, c = u;
					break;
				case g:
					S[0] = d[u++], S[1] = d[u++], r(S, S, e), d[c++] = S[0], d[c++] = S[1], S[0] += d[u++], S[1] += d[u++], r(S, S, e), d[c++] = S[0], d[c++] = S[1]
				}
				for (h = 0; l > h; h++) {
					var S = o[h];
					S[0] = d[u++], S[1] = d[u++], r(S, S, e), d[c++] = S[0], d[c++] = S[1]
				}
			}
		}
		var i = t("../core/PathProxy").CMD,
			n = t("../core/vector"),
			r = n.applyTransform,
			o = [
				[],
				[],
				[]
			],
			a = Math.sqrt,
			s = Math.atan2;
		return e
	}), e("zrender/tool/path", ["require", "../graphic/Path", "../core/PathProxy", "./transformPath", "../core/matrix"], function(t) {
		function e(t, e, i, n, r, o, a, s, l, p, g) {
			var v = l * (d / 180),
				y = h(v) * (t - i) / 2 + c(v) * (e - n) / 2,
				_ = -1 * c(v) * (t - i) / 2 + h(v) * (e - n) / 2,
				x = y * y / (a * a) + _ * _ / (s * s);
			x > 1 && (a *= u(x), s *= u(x));
			var b = (r === o ? -1 : 1) * u((a * a * (s * s) - a * a * (_ * _) - s * s * (y * y)) / (a * a * (_ * _) + s * s * (y * y))) || 0,
				w = b * a * _ / s,
				M = b * -s * y / a,
				S = (t + i) / 2 + h(v) * w - c(v) * M,
				L = (e + n) / 2 + c(v) * w + h(v) * M,
				C = m([1, 0], [(y - w) / a, (_ - M) / s]),
				T = [(y - w) / a, (_ - M) / s],
				P = [(-1 * y - w) / a, (-1 * _ - M) / s],
				A = m(T, P);
			f(T, P) <= -1 && (A = d), f(T, P) >= 1 && (A = 0), 0 === o && A > 0 && (A -= 2 * d), 1 === o && 0 > A && (A += 2 * d), g.addData(p, S, L, a, s, C, A, v, o)
		}
		function i(t) {
			if (!t) return [];
			var i, n = t.replace(/-/g, " -").replace(/  /g, " ").replace(/ /g, ",").replace(/,,/g, ",");
			for (i = 0; i < l.length; i++) n = n.replace(new RegExp(l[i], "g"), "|" + l[i]);
			var r, a = n.split("|"),
				s = 0,
				u = 0,
				c = new o,
				h = o.CMD;
			for (i = 1; i < a.length; i++) {
				var d, p = a[i],
					f = p.charAt(0),
					m = 0,
					g = p.slice(1).replace(/e,-/g, "e-").split(",");
				g.length > 0 && "" === g[0] && g.shift();
				for (var v = 0; v < g.length; v++) g[v] = parseFloat(g[v]);
				for (; m < g.length && !isNaN(g[m]) && !isNaN(g[0]);) {
					var y, _, x, b, w, M, S, L = s,
						C = u;
					switch (f) {
					case "l":
						s += g[m++], u += g[m++], d = h.L, c.addData(d, s, u);
						break;
					case "L":
						s = g[m++], u = g[m++], d = h.L, c.addData(d, s, u);
						break;
					case "m":
						s += g[m++], u += g[m++], d = h.M, c.addData(d, s, u), f = "l";
						break;
					case "M":
						s = g[m++], u = g[m++], d = h.M, c.addData(d, s, u), f = "L";
						break;
					case "h":
						s += g[m++], d = h.L, c.addData(d, s, u);
						break;
					case "H":
						s = g[m++], d = h.L, c.addData(d, s, u);
						break;
					case "v":
						u += g[m++], d = h.L, c.addData(d, s, u);
						break;
					case "V":
						u = g[m++], d = h.L, c.addData(d, s, u);
						break;
					case "C":
						d = h.C, c.addData(d, g[m++], g[m++], g[m++], g[m++], g[m++], g[m++]), s = g[m - 2], u = g[m - 1];
						break;
					case "c":
						d = h.C, c.addData(d, g[m++] + s, g[m++] + u, g[m++] + s, g[m++] + u, g[m++] + s, g[m++] + u), s += g[m - 2], u += g[m - 1];
						break;
					case "S":
						y = s, _ = u;
						var T = c.len(),
							P = c.data;
						r === h.C && (y += s - P[T - 4], _ += u - P[T - 3]), d = h.C, L = g[m++], C = g[m++], s = g[m++], u = g[m++], c.addData(d, y, _, L, C, s, u);
						break;
					case "s":
						y = s, _ = u;
						var T = c.len(),
							P = c.data;
						r === h.C && (y += s - P[T - 4], _ += u - P[T - 3]), d = h.C, L = s + g[m++], C = u + g[m++], s += g[m++], u += g[m++], c.addData(d, y, _, L, C, s, u);
						break;
					case "Q":
						L = g[m++], C = g[m++], s = g[m++], u = g[m++], d = h.Q, c.addData(d, L, C, s, u);
						break;
					case "q":
						L = g[m++] + s, C = g[m++] + u, s += g[m++], u += g[m++], d = h.Q, c.addData(d, L, C, s, u);
						break;
					case "T":
						y = s, _ = u;
						var T = c.len(),
							P = c.data;
						r === h.Q && (y += s - P[T - 4], _ += u - P[T - 3]), s = g[m++], u = g[m++], d = h.Q, c.addData(d, y, _, s, u);
						break;
					case "t":
						y = s, _ = u;
						var T = c.len(),
							P = c.data;
						r === h.Q && (y += s - P[T - 4], _ += u - P[T - 3]), s += g[m++], u += g[m++], d = h.Q, c.addData(d, y, _, s, u);
						break;
					case "A":
						x = g[m++], b = g[m++], w = g[m++], M = g[m++], S = g[m++], L = s, C = u, s = g[m++], u = g[m++], d = h.A, e(L, C, s, u, M, S, x, b, w, d, c);
						break;
					case "a":
						x = g[m++], b = g[m++], w = g[m++], M = g[m++], S = g[m++], L = s, C = u, s += g[m++], u += g[m++], d = h.A, e(L, C, s, u, M, S, x, b, w, d, c)
					}
				}("z" === f || "Z" === f) && (d = h.Z, c.addData(d)), r = d
			}
			return c.toStatic(), c
		}
		function n(t, e) {
			var n, r = i(t);
			return e = e || {}, e.buildPath = function(t) {
				t.setData(r.data), n && a(t, n);
				var e = t.getContext();
				e && t.rebuildPath(e)
			}, e.applyTransform = function(t) {
				n || (n = s.create()), s.mul(n, t, n)
			}, e
		}
		var r = t("../graphic/Path"),
			o = t("../core/PathProxy"),
			a = t("./transformPath"),
			s = t("../core/matrix"),
			l = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"],
			u = Math.sqrt,
			c = Math.sin,
			h = Math.cos,
			d = Math.PI,
			p = function(t) {
				return Math.sqrt(t[0] * t[0] + t[1] * t[1])
			},
			f = function(t, e) {
				return (t[0] * e[0] + t[1] * e[1]) / (p(t) * p(e))
			},
			m = function(t, e) {
				return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(f(t, e))
			};
		return {
			createFromString: function(t, e) {
				return new r(n(t, e))
			},
			extendFromString: function(t, e) {
				return r.extend(n(t, e))
			},
			mergePath: function(t, e) {
				var i, n, o = [],
					a = t.length;
				for (n = 0; a > n; n++) i = t[n], i.__dirty && i.buildPath(i.path, i.shape), o.push(i.path);
				var s = new r(e);
				return s.buildPath = function(t) {
					t.appendPath(o);
					var e = t.getContext();
					e && t.rebuildPath(e)
				}, s
			}
		}
	}), e("zrender/graphic/helper/roundRect", ["require"], function(t) {
		return {
			buildPath: function(t, e) {
				var i, n, r, o, a = e.x,
					s = e.y,
					l = e.width,
					u = e.height,
					c = e.r;
				"number" == typeof c ? i = n = r = o = c : c instanceof Array ? 1 === c.length ? i = n = r = o = c[0] : 2 === c.length ? (i = r = c[0], n = o = c[1]) : 3 === c.length ? (i = c[0], n = o = c[1], r = c[2]) : (i = c[0], n = c[1], r = c[2], o = c[3]) : i = n = r = o = 0;
				var h;
				i + n > l && (h = i + n, i *= l / h, n *= l / h), r + o > l && (h = r + o, r *= l / h, o *= l / h), n + r > u && (h = n + r, n *= u / h, r *= u / h), i + o > u && (h = i + o, i *= u / h, o *= u / h), t.moveTo(a + i, s), t.lineTo(a + l - n, s), 0 !== n && t.quadraticCurveTo(a + l, s, a + l, s + n), t.lineTo(a + l, s + u - r), 0 !== r && t.quadraticCurveTo(a + l, s + u, a + l - r, s + u), t.lineTo(a + o, s + u), 0 !== o && t.quadraticCurveTo(a, s + u, a, s + u - o), t.lineTo(a, s + i), 0 !== i && t.quadraticCurveTo(a, s, a + i, s)
			}
		}
	}), e("zrender/core/LRU", ["require"], function(t) {
		var e = function() {
				this.head = null, this.tail = null, this._len = 0
			},
			i = e.prototype;
		i.insert = function(t) {
			var e = new n(t);
			return this.insertEntry(e), e
		}, i.insertEntry = function(t) {
			this.head ? (this.tail.next = t, t.prev = this.tail, this.tail = t) : this.head = this.tail = t, this._len++
		}, i.remove = function(t) {
			var e = t.prev,
				i = t.next;
			e ? e.next = i : this.head = i, i ? i.prev = e : this.tail = e, t.next = t.prev = null, this._len--
		}, i.len = function() {
			return this._len
		};
		var n = function(t) {
				this.value = t, this.next, this.prev
			},
			r = function(t) {
				this._list = new e, this._map = {}, this._maxSize = t || 10
			},
			o = r.prototype;
		return o.put = function(t, e) {
			var i = this._list,
				n = this._map;
			if (null == n[t]) {
				var r = i.len();
				if (r >= this._maxSize && r > 0) {
					var o = i.head;
					i.remove(o), delete n[o.key]
				}
				var a = i.insert(e);
				a.key = t, n[t] = a
			}
		}, o.get = function(t) {
			var e = this._map[t],
				i = this._list;
			return null != e ? (e !== i.tail && (i.remove(e), i.insertEntry(e)), e.value) : void 0
		}, o.clear = function() {
			this._list.clear(), this._map = {}
		}, r
	}), e("zrender/graphic/Image", ["require", "./Displayable", "../core/BoundingRect", "../core/util", "./helper/roundRect", "../core/LRU"], function(t) {
		var e = t("./Displayable"),
			i = t("../core/BoundingRect"),
			n = t("../core/util"),
			r = t("./helper/roundRect"),
			o = t("../core/LRU"),
			a = new o(50),
			s = function(t) {
				e.call(this, t)
			};
		return s.prototype = {
			constructor: s,
			type: "image",
			brush: function(t) {
				var e, i = this.style,
					n = i.image;
				if (e = "string" == typeof n ? this._image : n, !e && n) {
					var o = a.get(n);
					if (!o) return e = new Image, e.onload = function() {
						e.onload = null;
						for (var t = 0; t < o.pending.length; t++) o.pending[t].dirty()
					}, o = {
						image: e,
						pending: [this]
					}, e.src = n, a.put(n, o), void(this._image = e);
					if (e = o.image, this._image = e, !e.width || !e.height) return void o.pending.push(this)
				}
				if (e) {
					var s = i.width || e.width,
						l = i.height || e.height,
						u = i.x || 0,
						c = i.y || 0;
					if (!e.width || !e.height) return;
					if (t.save(), i.bind(t), this.setTransform(t), i.r && (t.beginPath(), r.buildPath(t, i), t.clip()), i.sWidth && i.sHeight) {
						var h = i.sx || 0,
							d = i.sy || 0;
						t.drawImage(e, h, d, i.sWidth, i.sHeight, u, c, s, l)
					} else if (i.sx && i.sy) {
						var h = i.sx,
							d = i.sy,
							p = s - h,
							f = l - d;
						t.drawImage(e, h, d, p, f, u, c, s, l)
					} else t.drawImage(e, u, c, s, l);
					null == i.width && (i.width = s), null == i.height && (i.height = l), null != i.text && this.drawRectText(t, this.getBoundingRect()), t.restore()
				}
			},
			getBoundingRect: function() {
				var t = this.style;
				return this._rect || (this._rect = new i(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect
			}
		}, n.inherits(s, e), s
	}), e("zrender/graphic/Text", ["require", "./Displayable", "../core/util", "../contain/text"], function(t) {
		var e = t("./Displayable"),
			i = t("../core/util"),
			n = t("../contain/text"),
			r = function(t) {
				e.call(this, t)
			};
		return r.prototype = {
			constructor: r,
			type: "text",
			brush: function(t) {
				var e = this.style,
					i = e.x || 0,
					r = e.y || 0,
					o = e.text,
					a = e.fill,
					s = e.stroke;
				if (null != o && (o += ""), o) {
					t.save(), this.style.bind(t), this.setTransform(t), a && (t.fillStyle = a), s && (t.strokeStyle = s), t.font = e.textFont || e.font, t.textAlign = e.textAlign, t.textBaseline = e.textBaseline;
					for (var l = n.measureText("国", t.font).width, u = o.split("\n"), c = 0; c < u.length; c++) a && t.fillText(u[c], i, r), s && t.strokeText(u[c], i, r), r += l;
					t.restore()
				}
			},
			getBoundingRect: function() {
				if (!this._rect) {
					var t = this.style,
						e = n.getBoundingRect(t.text + "", t.textFont, t.textAlign, t.textBaseline);
					e.x += t.x || 0, e.y += t.y || 0, this._rect = e
				}
				return this._rect
			}
		}, i.inherits(r, e), r
	}), e("zrender/graphic/shape/Circle", ["require", "../Path"], function(t) {
		return t("../Path").extend({
			type: "circle",
			shape: {
				cx: 0,
				cy: 0,
				r: 0
			},
			buildPath: function(t, e) {
				t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
			}
		})
	}), e("zrender/graphic/shape/Sector", ["require", "../Path"], function(t) {
		return t("../Path").extend({
			type: "sector",
			shape: {
				cx: 0,
				cy: 0,
				r0: 0,
				r: 0,
				startAngle: 0,
				endAngle: 2 * Math.PI,
				clockwise: !0
			},
			buildPath: function(t, e) {
				var i = e.cx,
					n = e.cy,
					r = e.r0 || 0,
					o = e.r,
					a = e.startAngle,
					s = e.endAngle,
					l = e.clockwise,
					u = Math.cos(a),
					c = Math.sin(a);
				t.moveTo(u * r + i, c * r + n), t.lineTo(u * o + i, c * o + n), t.arc(i, n, o, a, s, !l), t.lineTo(Math.cos(s) * r + i, Math.sin(s) * r + n), 0 !== r && t.arc(i, n, r, s, a, l), t.closePath()
			}
		})
	}), e("zrender/graphic/helper/smoothSpline", ["require", "../../core/vector"], function(t) {
		function e(t, e, i, n, r, o, a) {
			var s = .5 * (i - t),
				l = .5 * (n - e);
			return (2 * (e - i) + s + l) * a + (-3 * (e - i) - 2 * s - l) * o + s * r + e
		}
		var i = t("../../core/vector");
		return function(t, n) {
			for (var r = t.length, o = [], a = 0, s = 1; r > s; s++) a += i.distance(t[s - 1], t[s]);
			var l = a / 2;
			l = r > l ? r : l;
			for (var s = 0; l > s; s++) {
				var u, c, h, d = s / (l - 1) * (n ? r : r - 1),
					p = Math.floor(d),
					f = d - p,
					m = t[p % r];
				n ? (u = t[(p - 1 + r) % r], c = t[(p + 1) % r], h = t[(p + 2) % r]) : (u = t[0 === p ? p : p - 1], c = t[p > r - 2 ? r - 1 : p + 1], h = t[p > r - 3 ? r - 1 : p + 2]);
				var g = f * f,
					v = f * g;
				o.push([e(u[0], m[0], c[0], h[0], f, g, v), e(u[1], m[1], c[1], h[1], f, g, v)])
			}
			return o
		}
	}), e("zrender/graphic/helper/smoothBezier", ["require", "../../core/vector"], function(t) {
		var e = t("../../core/vector"),
			i = e.min,
			n = e.max,
			r = e.scale,
			o = e.distance,
			a = e.add;
		return function(t, s, l, u) {
			var c, h, d, p, f = [],
				m = [],
				g = [],
				v = [];
			if (u) {
				d = [1 / 0, 1 / 0], p = [-(1 / 0), -(1 / 0)];
				for (var y = 0, _ = t.length; _ > y; y++) i(d, d, t[y]), n(p, p, t[y]);
				i(d, d, u[0]), n(p, p, u[1])
			}
			for (var y = 0, _ = t.length; _ > y; y++) {
				var x = t[y];
				if (l) c = t[y ? y - 1 : _ - 1], h = t[(y + 1) % _];
				else {
					if (0 === y || y === _ - 1) {
						f.push(e.clone(t[y]));
						continue
					}
					c = t[y - 1], h = t[y + 1]
				}
				e.sub(m, h, c), r(m, m, s);
				var b = o(x, c),
					w = o(x, h),
					M = b + w;
				0 !== M && (b /= M, w /= M), r(g, m, -b), r(v, m, w);
				var S = a([], x, g),
					L = a([], x, v);
				u && (n(S, S, d), i(S, S, p), n(L, L, d), i(L, L, p)), f.push(S), f.push(L)
			}
			return l && f.push(f.shift()), f
		}
	}), e("zrender/graphic/helper/poly", ["require", "./smoothSpline", "./smoothBezier"], function(t) {
		var e = t("./smoothSpline"),
			i = t("./smoothBezier");
		return {
			buildPath: function(t, n, r) {
				var o = n.points,
					a = n.smooth;
				if (o && o.length >= 2) {
					if (a && "spline" !== a) {
						var s = i(o, a, r, n.smoothConstraint);
						t.moveTo(o[0][0], o[0][1]);
						for (var l = o.length, u = 0;
						(r ? l : l - 1) > u; u++) {
							var c = s[2 * u],
								h = s[2 * u + 1],
								d = o[(u + 1) % l];
							t.bezierCurveTo(c[0], c[1], h[0], h[1], d[0], d[1])
						}
					} else {
						"spline" === a && (o = e(o, r)), t.moveTo(o[0][0], o[0][1]);
						for (var u = 1, p = o.length; p > u; u++) t.lineTo(o[u][0], o[u][1])
					}
					r && t.closePath()
				}
			}
		}
	}), e("zrender/graphic/shape/Polygon", ["require", "../helper/poly", "../Path"], function(t) {
		var e = t("../helper/poly");
		return t("../Path").extend({
			type: "polygon",
			shape: {
				points: null,
				smooth: !1,
				smoothConstraint: null
			},
			buildPath: function(t, i) {
				e.buildPath(t, i, !0)
			}
		})
	}), e("zrender/graphic/shape/Polyline", ["require", "../helper/poly", "../Path"], function(t) {
		var e = t("../helper/poly");
		return t("../Path").extend({
			type: "polyline",
			shape: {
				points: null,
				smooth: !1,
				smoothConstraint: null
			},
			style: {
				stroke: "#000",
				fill: null
			},
			buildPath: function(t, i) {
				e.buildPath(t, i, !1)
			}
		})
	}), e("zrender/graphic/shape/Rect", ["require", "../helper/roundRect", "../Path"], function(t) {
		var e = t("../helper/roundRect");
		return t("../Path").extend({
			type: "rect",
			shape: {
				r: 0,
				x: 0,
				y: 0,
				width: 0,
				height: 0
			},
			buildPath: function(t, i) {
				var n = i.x,
					r = i.y,
					o = i.width,
					a = i.height;
				i.r ? e.buildPath(t, i) : t.rect(n, r, o, a), t.closePath()
			}
		})
	}), e("zrender/graphic/shape/Line", ["require", "../Path"], function(t) {
		return t("../Path").extend({
			type: "line",
			shape: {
				x1: 0,
				y1: 0,
				x2: 0,
				y2: 0,
				percent: 1
			},
			style: {
				stroke: "#000",
				fill: null
			},
			buildPath: function(t, e) {
				var i = e.x1,
					n = e.y1,
					r = e.x2,
					o = e.y2,
					a = e.percent;
				0 !== a && (t.moveTo(i, n), 1 > a && (r = i * (1 - a) + r * a, o = n * (1 - a) + o * a), t.lineTo(r, o))
			},
			pointAt: function(t) {
				var e = this.shape;
				return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
			}
		})
	}), e("zrender/graphic/shape/BezierCurve", ["require", "../../core/curve", "../Path"], function(t) {
		var e = t("../../core/curve"),
			i = e.quadraticSubdivide,
			n = e.cubicSubdivide,
			r = e.quadraticAt,
			o = e.cubicAt,
			a = [];
		return t("../Path").extend({
			type: "bezier-curve",
			shape: {
				x1: 0,
				y1: 0,
				x2: 0,
				y2: 0,
				cpx1: 0,
				cpy1: 0,
				percent: 1
			},
			style: {
				stroke: "#000",
				fill: null
			},
			buildPath: function(t, e) {
				var r = e.x1,
					o = e.y1,
					s = e.x2,
					l = e.y2,
					u = e.cpx1,
					c = e.cpy1,
					h = e.cpx2,
					d = e.cpy2,
					p = e.percent;
				0 !== p && (t.moveTo(r, o), null == h || null == d ? (1 > p && (i(r, u, s, p, a), u = a[1], s = a[2], i(o, c, l, p, a), c = a[1], l = a[2]), t.quadraticCurveTo(u, c, s, l)) : (1 > p && (n(r, u, h, s, p, a), u = a[1], h = a[2], s = a[3], n(o, c, d, l, p, a), c = a[1], d = a[2], l = a[3]), t.bezierCurveTo(u, c, h, d, s, l)))
			},
			pointAt: function(t) {
				var e = this.shape,
					i = e.cpx2,
					n = e.cpy2;
				return null === i || null === n ? [r(e.x1, e.cpx1, e.x2, t), r(e.y1, e.cpy1, e.y2, t)] : [o(e.x1, e.cpx1, e.cpx1, e.x2, t), o(e.y1, e.cpy1, e.cpy1, e.y2, t)]
			}
		})
	}), e("zrender/graphic/shape/Arc", ["require", "../Path"], function(t) {
		return t("../Path").extend({
			type: "arc",
			shape: {
				cx: 0,
				cy: 0,
				r: 0,
				startAngle: 0,
				endAngle: 2 * Math.PI,
				clockwise: !0
			},
			style: {
				stroke: "#000",
				fill: null
			},
			buildPath: function(t, e) {
				var i = e.cx,
					n = e.cy,
					r = e.r,
					o = e.startAngle,
					a = e.endAngle,
					s = e.clockwise,
					l = Math.cos(o),
					u = Math.sin(o);
				t.moveTo(l * r + i, u * r + n), t.arc(i, n, r, o, a, !s)
			}
		})
	}), e("zrender/graphic/LinearGradient", ["require", "../core/util", "./Gradient"], function(t) {
		var e = t("../core/util"),
			i = t("./Gradient"),
			n = function(t, e, n, r, o) {
				this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == n ? 1 : n, this.y2 = null == r ? 0 : r, i.call(this, o)
			};
		return n.prototype = {
			constructor: n,
			type: "linear",
			updateCanvasGradient: function(t, e) {
				for (var i = t.getBoundingRect(), n = this.x * i.width + i.x, r = this.x2 * i.width + i.x, o = this.y * i.height + i.y, a = this.y2 * i.height + i.y, s = e.createLinearGradient(n, o, r, a), l = this.colorStops, u = 0; u < l.length; u++) s.addColorStop(l[u].offset, l[u].color);
				this.canvasGradient = s
			}
		}, e.inherits(n, i), n
	}), e("zrender/graphic/RadialGradient", ["require", "../core/util", "./Gradient"], function(t) {
		var e = t("../core/util"),
			i = t("./Gradient"),
			n = function(t, e, n, r) {
				this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == n ? .5 : n, i.call(this, r)
			};
		return n.prototype = {
			constructor: n,
			type: "radial",
			updateCanvasGradient: function(t, e) {
				for (var i = t.getBoundingRect(), n = i.width, r = i.height, o = Math.min(n, r), a = this.x * n + i.x, s = this.y * r + i.y, l = this.r * o, u = e.createRadialGradient(a, s, 0, a, s, l), c = this.colorStops, h = 0; h < c.length; h++) u.addColorStop(c[h].offset, c[h].color);
				this.canvasGradient = u
			}
		}, e.inherits(n, i), n
	}), e("echarts/util/graphic", ["require", "zrender/core/util", "zrender/tool/path", "zrender/graphic/Path", "zrender/tool/color", "zrender/core/matrix", "zrender/core/vector", "zrender/graphic/Gradient", "zrender/container/Group", "zrender/graphic/Image", "zrender/graphic/Text", "zrender/graphic/shape/Circle", "zrender/graphic/shape/Sector", "zrender/graphic/shape/Polygon", "zrender/graphic/shape/Polyline", "zrender/graphic/shape/Rect", "zrender/graphic/shape/Line", "zrender/graphic/shape/BezierCurve", "zrender/graphic/shape/Arc", "zrender/graphic/LinearGradient", "zrender/graphic/RadialGradient"], function(t) {
		function e(t) {
			if (!t.__isHover) {
				if (t.__hoverStlDirty) {
					var e = t.style.stroke,
						i = t.style.fill,
						n = t.__hoverStl;
					n.fill = n.fill || (i instanceof y ? i : m.lift(i, -.1)), n.stroke = n.stroke || (e instanceof y ? e : m.lift(e, -.1));
					var r = {};
					for (var o in n) n.hasOwnProperty(o) && (r[o] = t.style[o]);
					t.__normalStl = r, t.__hoverStlDirty = !1
				}
				t.setStyle(t.__hoverStl), t.z2 += 1, t.__isHover = !0
			}
		}
		function i(t) {
			if (t.__isHover) {
				var e = t.__normalStl;
				e && t.setStyle(e), t.z2 -= 1, t.__isHover = !1
			}
		}
		function n(t) {
			"group" === t.type ? t.traverse(function(t) {
				"group" !== t.type && e(t)
			}) : e(t)
		}
		function r(t) {
			"group" === t.type ? t.traverse(function(t) {
				"group" !== t.type && i(t)
			}) : i(t)
		}
		function o(t, e) {
			t.__hoverStl = t.hoverStyle || e, t.__hoverStlDirty = !0
		}
		function a() {
			!this.__isEmphasis && n(this)
		}
		function s() {
			!this.__isEmphasis && r(this)
		}
		function l() {
			this.__isEmphasis = !0, n(this)
		}
		function u() {
			this.__isEmphasis = !1, r(this)
		}
		function c(t, e, i, n, r) {
			var o = t ? "Update" : "",
				a = n && n.getShallow("animationDuration" + o),
				s = n && n.getShallow("animationEasing" + o);
			n && n.getShallow("animation") ? e.animateTo(i, a, s, r) : (e.attr(i), r && r())
		}
		var h = t("zrender/core/util"),
			d = t("zrender/tool/path"),
			p = Math.round,
			f = t("zrender/graphic/Path"),
			m = t("zrender/tool/color"),
			g = t("zrender/core/matrix"),
			v = t("zrender/core/vector"),
			y = t("zrender/graphic/Gradient"),
			_ = {};
		return _.Group = t("zrender/container/Group"), _.Image = t("zrender/graphic/Image"), _.Text = t("zrender/graphic/Text"), _.Circle = t("zrender/graphic/shape/Circle"), _.Sector = t("zrender/graphic/shape/Sector"), _.Polygon = t("zrender/graphic/shape/Polygon"), _.Polyline = t("zrender/graphic/shape/Polyline"), _.Rect = t("zrender/graphic/shape/Rect"), _.Line = t("zrender/graphic/shape/Line"), _.BezierCurve = t("zrender/graphic/shape/BezierCurve"), _.Arc = t("zrender/graphic/shape/Arc"), _.LinearGradient = t("zrender/graphic/LinearGradient"), _.RadialGradient = t("zrender/graphic/RadialGradient"), _.extendShape = function(t) {
			return f.extend(t)
		}, _.extendPath = function(t, e) {
			return d.extendFromString(t, e)
		}, _.makePath = function(t, e, i, n) {
			var r = d.createFromString(t, e),
				o = r.getBoundingRect();
			if (i) {
				var a = o.width / o.height;
				if ("center" === n) {
					var s, l = i.height * a;
					l <= i.width ? s = i.height : (l = i.width, s = l / a);
					var u = i.x + i.width / 2,
						c = i.y + i.height / 2;
					i.x = u - l / 2, i.y = c - s / 2, i.width = l, i.height = s
				}
				this.resizePath(r, i)
			}
			return r
		}, _.mergePath = d.mergePath, _.resizePath = function(t, e) {
			if (t.applyTransform) {
				var i = t.getBoundingRect(),
					n = i.calculateTransform(e);
				t.applyTransform(n)
			}
		}, _.subPixelOptimizeLine = function(t) {
			var e = _.subPixelOptimize,
				i = t.shape,
				n = t.style.lineWidth;
			return p(2 * i.x1) === p(2 * i.x2) && (i.x1 = i.x2 = e(i.x1, n, !0)), p(2 * i.y1) === p(2 * i.y2) && (i.y1 = i.y2 = e(i.y1, n, !0)), t
		}, _.subPixelOptimizeRect = function(t) {
			var e = _.subPixelOptimize,
				i = t.shape,
				n = t.style.lineWidth,
				r = i.x,
				o = i.y,
				a = i.width,
				s = i.height;
			return i.x = e(i.x, n, !0), i.y = e(i.y, n, !0), i.width = Math.max(e(r + a, n, !1) - i.x, 0 === a ? 0 : 1), i.height = Math.max(e(o + s, n, !1) - i.y, 0 === s ? 0 : 1), t
		}, _.subPixelOptimize = function(t, e, i) {
			var n = p(2 * t);
			return (n + p(e)) % 2 === 0 ? n / 2 : (n + (i ? 1 : -1)) / 2
		}, _.setHoverStyle = function(t, e) {
			e = e || {}, "group" === t.type ? t.traverse(function(t) {
				"group" !== t.type && o(t, e)
			}) : o(t, e), t.on("mouseover", a).on("mouseout", s), t.on("emphasis", l).on("normal", u)
		}, _.setText = function(t, e, i) {
			var n = e.getShallow("position") || "inside",
				r = n.indexOf("inside") >= 0 ? "white" : i,
				o = e.getModel("textStyle");
			h.extend(t, {
				textDistance: e.getShallow("distance") || 5,
				textFont: o.getFont(),
				textPosition: n,
				textFill: o.getTextColor() || r
			})
		}, _.updateProps = h.curry(c, !0), _.initProps = h.curry(c, !1), _.getTransform = function(t, e) {
			for (var i = g.identity([]); t && t !== e;) g.mul(i, t.getLocalTransform(), i), t = t.parent;
			return i
		}, _.applyTransform = function(t, e, i) {
			return i && (e = g.invert([], e)), v.applyTransform([], t, e)
		}, _.transformDirection = function(t, e, i) {
			var n = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
				r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
				o = ["left" === t ? -n : "right" === t ? n : 0, "top" === t ? -r : "bottom" === t ? r : 0];
			return o = _.applyTransform(o, e, i), Math.abs(o[0]) > Math.abs(o[1]) ? o[0] > 0 ? "right" : "left" : o[1] > 0 ? "bottom" : "top"
		}, _
	}), e("zrender/core/env", [], function() {
		function t(t) {
			var e = this.os = {},
				i = this.browser = {},
				n = t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
				r = t.match(/(Android);?[\s\/]+([\d.]+)?/),
				o = t.match(/(iPad).*OS\s([\d_]+)/),
				a = t.match(/(iPod)(.*OS\s([\d_]+))?/),
				s = !o && t.match(/(iPhone\sOS)\s([\d_]+)/),
				l = t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
				u = l && t.match(/TouchPad/),
				c = t.match(/Kindle\/([\d.]+)/),
				h = t.match(/Silk\/([\d._]+)/),
				d = t.match(/(BlackBerry).*Version\/([\d.]+)/),
				p = t.match(/(BB10).*Version\/([\d.]+)/),
				f = t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
				m = t.match(/PlayBook/),
				g = t.match(/Chrome\/([\d.]+)/) || t.match(/CriOS\/([\d.]+)/),
				v = t.match(/Firefox\/([\d.]+)/),
				y = t.match(/MSIE ([\d.]+)/),
				_ = n && t.match(/Mobile\//) && !g,
				x = t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/) && !g,
				y = t.match(/MSIE\s([\d.]+)/);
			return (i.webkit = !! n) && (i.version = n[1]), r && (e.android = !0, e.version = r[2]), s && !a && (e.ios = e.iphone = !0, e.version = s[2].replace(/_/g, ".")), o && (e.ios = e.ipad = !0, e.version = o[2].replace(/_/g, ".")), a && (e.ios = e.ipod = !0, e.version = a[3] ? a[3].replace(/_/g, ".") : null), l && (e.webos = !0, e.version = l[2]), u && (e.touchpad = !0), d && (e.blackberry = !0, e.version = d[2]), p && (e.bb10 = !0, e.version = p[2]), f && (e.rimtabletos = !0, e.version = f[2]), m && (i.playbook = !0), c && (e.kindle = !0, e.version = c[1]), h && (i.silk = !0, i.version = h[1]), !h && e.android && t.match(/Kindle Fire/) && (i.silk = !0), g && (i.chrome = !0, i.version = g[1]), v && (i.firefox = !0, i.version = v[1]), y && (i.ie = !0, i.version = y[1]), _ && (t.match(/Safari/) || e.ios) && (i.safari = !0), x && (i.webview = !0), y && (i.ie = !0, i.version = y[1]), e.tablet = !! (o || m || r && !t.match(/Mobile/) || v && t.match(/Tablet/) || y && !t.match(/Phone/) && t.match(/Touch/)), e.phone = !(e.tablet || e.ipod || !(r || s || l || d || p || g && t.match(/Android/) || g && t.match(/CriOS\/([\d.]+)/) || v && t.match(/Mobile/) || y && t.match(/Touch/))), {
				browser: i,
				os: e,
				node: !1,
				canvasSupported: document.createElement("canvas").getContext ? !0 : !1
			}
		}
		return "undefined" == typeof navigator ? {
			browser: {},
			os: {},
			node: !0,
			canvasSupported: !0
		} : t(navigator.userAgent)
	}), e("zrender/core/event", ["require", "../mixin/Eventful"], function(t) {
		function e(t) {
			return t.getBoundingClientRect ? t.getBoundingClientRect() : {
				left: 0,
				top: 0
			}
		}
		function i(t, i) {
			if (i = i || window.event, null != i.zrX) return i;
			var n = i.type,
				r = n && n.indexOf("touch") >= 0;
			if (r) {
				var o = "touchend" != n ? i.targetTouches[0] : i.changedTouches[0];
				if (o) {
					var a = e(t);
					i.zrX = o.clientX - a.left, i.zrY = o.clientY - a.top
				}
			} else {
				var s = 0,
					l = 0;
				i.pageX || i.pageY ? (s = i.pageX, l = i.pageY) : (s = i.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, l = i.clientY + document.body.scrollTop + document.documentElement.scrollTop);
				var u = e(t),
					c = u.top + (window.pageYOffset || t.scrollTop) - (t.clientTop || 0),
					h = u.left + (window.pageXOffset || t.scrollLeft) - (t.clientLeft || 0);
				i.zrX = s - h, i.zrY = l - c, i.zrDelta = i.wheelDelta ? i.wheelDelta / 120 : -(i.detail || 0) / 3
			}
			return i
		}
		function n(t, e, i) {
			a ? t.addEventListener(e, i) : t.attachEvent("on" + e, i)
		}
		function r(t, e, i) {
			a ? t.removeEventListener(e, i) : t.detachEvent("on" + e, i)
		}
		var o = t("../mixin/Eventful"),
			a = "undefined" != typeof window && !! window.addEventListener,
			s = a ?
		function(t) {
			t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0
		} : function(t) {
			t.returnValue = !1, t.cancelBubble = !0
		};
		return {
			normalizeEvent: i,
			addEventListener: n,
			removeEventListener: r,
			stop: s,
			Dispatcher: o
		}
	}), e("zrender/mixin/Draggable", ["require"], function(t) {
		function e() {
			this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this)
		}
		return e.prototype = {
			constructor: e,
			_dragStart: function(t) {
				var e = t.target;
				e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this._dispatchProxy(e, "dragstart", t.event))
			},
			_drag: function(t) {
				var e = this._draggingTarget;
				if (e) {
					var i = t.offsetX,
						n = t.offsetY,
						r = i - this._x,
						o = n - this._y;
					this._x = i, this._y = n, e.drift(r, o, t), this._dispatchProxy(e, "drag", t.event);
					var a = this._findHover(i, n, e),
						s = this._dropTarget;
					this._dropTarget = a, e !== a && (s && a !== s && this._dispatchProxy(s, "dragleave", t.event), a && a !== s && this._dispatchProxy(a, "dragenter", t.event))
				}
			},
			_dragEnd: function(t) {
				var e = this._draggingTarget;
				e && (e.dragging = !1), this._dispatchProxy(e, "dragend", t.event), this._dropTarget && this._dispatchProxy(this._dropTarget, "drop", t.event), this._draggingTarget = null, this._dropTarget = null
			}
		}, e
	}), e("zrender/core/GestureMgr", ["require"], function(t) {
		function e(t) {
			var e = t[1][0] - t[0][0],
				i = t[1][1] - t[0][1];
			return Math.sqrt(e * e + i * i)
		}
		function i(t) {
			return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
		}
		var n = function() {
				this._track = []
			};
		n.prototype = {
			constructor: n,
			recognize: function(t, e) {
				return this._doTrack(t, e), this._recognize(t)
			},
			clear: function() {
				return this._track.length = 0, this
			},
			_doTrack: function(t, e) {
				var i = t.touches;
				if (i) {
					for (var n = {
						points: [],
						touches: [],
						target: e,
						event: t
					}, r = 0, o = i.length; o > r; r++) {
						var a = i[r];
						n.points.push([a.clientX, a.clientY]), n.touches.push(a)
					}
					this._track.push(n)
				}
			},
			_recognize: function(t) {
				for (var e in r) if (r.hasOwnProperty(e)) {
					var i = r[e](this._track, t);
					if (i) return i
				}
			}
		};
		var r = {
			pinch: function(t, n) {
				var r = t.length;
				if (r) {
					var o = (t[r - 1] || {}).points,
						a = (t[r - 2] || {}).points || o;
					if (a && a.length > 1 && o && o.length > 1) {
						var s = e(o) / e(a);
						!isFinite(s) && (s = 1), n.pinchScale = s;
						var l = i(o);
						return n.pinchX = l[0], n.pinchY = l[1], {
							type: "pinch",
							target: t[0].target,
							event: n
						}
					}
				}
			}
		};
		return n
	}), e("zrender/Handler", ["require", "./core/env", "./core/event", "./core/util", "./mixin/Draggable", "./core/GestureMgr", "./mixin/Eventful"], function(t) {
		function e(t) {
			return "_" + t + "Handler"
		}
		function i(t, e, i) {
			return {
				type: t,
				event: i,
				target: e,
				cancelBubble: !1,
				offsetX: i.zrX,
				offsetY: i.zrY,
				gestureEvent: i.gestureEvent,
				pinchX: i.pinchX,
				pinchY: i.pinchY,
				pinchScale: i.pinchScale,
				wheelDelta: i.zrDelta
			}
		}
		function n(t, e, i) {
			var n = t._gestureMgr;
			"start" === i && n.clear();
			var r = n.recognize(e, t._findHover(e.zrX, e.zrY, null));
			if ("end" === i && n.clear(), r) {
				var o = r.type;
				e.gestureEvent = o, t._dispatchProxy(r.target, o, r.event)
			}
		}
		function r(t) {
			for (var i = d.concat(p), n = i.length; n--;) {
				var r = i[n];
				t[e(r)] = l.bind(y[r], t)
			}
		}
		function o(t, e, i) {
			if (t[t.rectHover ? "rectContain" : "contain"](e, i)) {
				for (var n = t.parent; n;) {
					if (n.clipPath && !n.clipPath.contain(e, i)) return !1;
					n = n.parent
				}
				return !0
			}
			return !1
		}
		var a = t("./core/env"),
			s = t("./core/event"),
			l = t("./core/util"),
			u = t("./mixin/Draggable"),
			c = t("./core/GestureMgr"),
			h = t("./mixin/Eventful"),
			d = ["click", "dblclick", "mousewheel", "mousemove", "mouseout", "mouseup", "mousedown"],
			p = ["touchstart", "touchend", "touchmove"],
			f = 300,
			m = s.addEventListener,
			g = s.removeEventListener,
			v = s.normalizeEvent,
			y = {
				mousemove: function(t) {
					t = v(this.root, t);
					var e = t.zrX,
						i = t.zrY,
						n = this._findHover(e, i, null),
						r = this._hovered;
					this._hovered = n, this.root.style.cursor = n ? n.cursor : this._defaultCursorStyle, r && n !== r && r.__zr && this._dispatchProxy(r, "mouseout", t), this._dispatchProxy(n, "mousemove", t), n && n !== r && this._dispatchProxy(n, "mouseover", t)
				},
				mouseout: function(t) {
					t = v(this.root, t);
					var e = t.toElement || t.relatedTarget;
					if (e != this.root) for (; e && 9 != e.nodeType;) {
						if (e === this.root) return;
						e = e.parentNode
					}
					this._dispatchProxy(this._hovered, "mouseout", t), this.trigger("globalout", {
						event: t
					})
				},
				touchstart: function(t) {
					t = v(this.root, t), this._lastTouchMoment = new Date, n(this, t, "start"), this._mousemoveHandler(t), this._mousedownHandler(t)
				},
				touchmove: function(t) {
					t = v(this.root, t), n(this, t, "change"), this._mousemoveHandler(t)
				},
				touchend: function(t) {
					t = v(this.root, t), n(this, t, "end"), this._mouseupHandler(t), +new Date - this._lastTouchMoment < f && this._clickHandler(t)
				}
			};
		l.each(["click", "mousedown", "mouseup", "mousewheel", "dblclick"], function(t) {
			y[t] = function(e) {
				e = v(this.root, e);
				var i = this._findHover(e.zrX, e.zrY, null);
				this._dispatchProxy(i, t, e)
			}
		});
		var _ = function(t, i, n) {
				h.call(this), this.root = t, this.storage = i, this.painter = n, this._hovered, this._lastTouchMoment, this._lastX, this._lastY, this._defaultCursorStyle = "default", this._gestureMgr = new c, r(this), a.os.tablet || a.os.phone ? (l.each(p, function(i) {
					m(t, i, this[e(i)])
				}, this), m(t, "mouseout", this._mouseoutHandler)) : (l.each(d, function(i) {
					m(t, i, this[e(i)])
				}, this), m(t, "DOMMouseScroll", this._mousewheelHandler)), u.call(this)
			};
		return _.prototype = {
			constructor: _,
			resize: function(t) {
				this._hovered = null
			},
			dispatch: function(t, i) {
				var n = this[e(t)];
				n && n(i)
			},
			dispose: function() {
				for (var t = this.root, i = d.concat(p), n = 0; n < i.length; n++) {
					var r = i[n];
					g(t, r, this[e(r)])
				}
				g(t, "DOMMouseScroll", this._mousewheelHandler), this.root = this.storage = this.painter = null
			},
			setDefaultCursorStyle: function(t) {
				this._defaultCursorStyle = t
			},
			_dispatchProxy: function(t, e, n) {
				for (var r = "on" + e, o = i(e, t, n), a = t; a && (a[r] && (o.cancelBubble = a[r].call(a, o)), a.trigger(e, o), a = a.parent, !o.cancelBubble););
				o.cancelBubble || (this.trigger(e, o), this.painter && this.painter.eachOtherLayer(function(t) {
					"function" == typeof t[r] && t[r].call(t, o), t.trigger && t.trigger(e, o)
				}))
			},
			_findHover: function(t, e, i) {
				for (var n = this.storage.getDisplayList(), r = n.length - 1; r >= 0; r--) if (!n[r].silent && n[r] !== i && o(n[r], t, e)) return n[r]
			}
		}, l.mixin(_, h), l.mixin(_, u), _
	}), e("zrender/Storage", ["require", "./core/util", "./container/Group"], function(t) {
		function e(t, e) {
			return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 === e.z2 ? t.__renderidx - e.__renderidx : t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
		}
		var i = t("./core/util"),
			n = t("./container/Group"),
			r = function() {
				this._elements = {}, this._roots = [], this._displayList = [], this._displayListLen = 0
			};
		return r.prototype = {
			constructor: r,
			getDisplayList: function(t) {
				return t && this.updateDisplayList(), this._displayList
			},
			updateDisplayList: function() {
				this._displayListLen = 0;
				for (var t = this._roots, i = this._displayList, n = 0, r = t.length; r > n; n++) {
					var o = t[n];
					this._updateAndAddDisplayable(o)
				}
				i.length = this._displayListLen;
				for (var n = 0, r = i.length; r > n; n++) i[n].__renderidx = n;
				i.sort(e)
			},
			_updateAndAddDisplayable: function(t, e) {
				if (!t.ignore) {
					t.beforeUpdate(), t.update(), t.afterUpdate();
					var i = t.clipPath;
					if (i && (i.parent = t, i.updateTransform(), e ? (e = e.slice(), e.push(i)) : e = [i]), "group" == t.type) {
						for (var n = t._children, r = 0; r < n.length; r++) {
							var o = n[r];
							o.__dirty = t.__dirty || o.__dirty, this._updateAndAddDisplayable(o, e)
						}
						t.__dirty = !1
					} else t.__clipPaths = e, this._displayList[this._displayListLen++] = t
				}
			},
			addRoot: function(t) {
				this._elements[t.id] || (t instanceof n && t.addChildrenToStorage(this), this.addToMap(t), this._roots.push(t))
			},
			delRoot: function(t) {
				if (null == t) {
					for (var e = 0; e < this._roots.length; e++) {
						var r = this._roots[e];
						r instanceof n && r.delChildrenFromStorage(this)
					}
					return this._elements = {}, this._roots = [], this._displayList = [], void(this._displayListLen = 0)
				}
				if (t instanceof Array) for (var e = 0, o = t.length; o > e; e++) this.delRoot(t[e]);
				else {
					var a;
					a = "string" == typeof t ? this._elements[t] : t;
					var s = i.indexOf(this._roots, a);
					s >= 0 && (this.delFromMap(a.id), this._roots.splice(s, 1), a instanceof n && a.delChildrenFromStorage(this))
				}
			},
			addToMap: function(t) {
				return t instanceof n && (t.__storage = this), t.dirty(), this._elements[t.id] = t, this
			},
			get: function(t) {
				return this._elements[t]
			},
			delFromMap: function(t) {
				var e = this._elements,
					i = e[t];
				return i && (delete e[t], i instanceof n && (i.__storage = null)), this
			},
			dispose: function() {
				this._elements = this._renderList = this._roots = null
			}
		}, r
	}), e("zrender/animation/Animation", ["require", "../core/util", "../core/event", "./Animator"], function(t) {
		var e = t("../core/util"),
			i = t("../core/event").Dispatcher,
			n = "undefined" != typeof window && (window.requestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) ||
		function(t) {
			setTimeout(t, 16)
		}, r = t("./Animator"), o = function(t) {
			t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe ||
			function() {}, this._clips = [], this._running = !1, this._time = 0, i.call(this)
		};
		return o.prototype = {
			constructor: o,
			addClip: function(t) {
				this._clips.push(t)
			},
			addAnimator: function(t) {
				t.animation = this;
				for (var e = t.getClips(), i = 0; i < e.length; i++) this.addClip(e[i])
			},
			removeClip: function(t) {
				var i = e.indexOf(this._clips, t);
				i >= 0 && this._clips.splice(i, 1)
			},
			removeAnimator: function(t) {
				for (var e = t.getClips(), i = 0; i < e.length; i++) this.removeClip(e[i]);
				t.animation = null
			},
			_update: function() {
				for (var t = (new Date).getTime(), e = t - this._time, i = this._clips, n = i.length, r = [], o = [], a = 0; n > a; a++) {
					var s = i[a],
						l = s.step(t);
					l && (r.push(l), o.push(s))
				}
				for (var a = 0; n > a;) i[a]._needsRemove ? (i[a] = i[n - 1], i.pop(), n--) : a++;
				n = r.length;
				for (var a = 0; n > a; a++) o[a].fire(r[a]);
				this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update()
			},
			start: function() {
				function t() {
					e._running && (n(t), e._update())
				}
				var e = this;
				this._running = !0, this._time = (new Date).getTime(), n(t)
			},
			stop: function() {
				this._running = !1
			},
			clear: function() {
				this._clips = []
			},
			animate: function(t, e) {
				e = e || {};
				var i = new r(t, e.loop, e.getter, e.setter);
				return i
			}
		}, e.mixin(o, i), o
	}), e("zrender/Layer", ["require", "./core/util", "./config"], function(t) {
		function e() {
			return !1
		}
		function i(t, e, i, n) {
			var r = document.createElement(e),
				o = i.getWidth(),
				a = i.getHeight(),
				s = r.style;
			return s.position = "absolute", s.left = 0, s.top = 0, s.width = o + "px", s.height = a + "px", r.width = o * n, r.height = a * n, r.setAttribute("data-zr-dom-id", t), r
		}
		var n = t("./core/util"),
			r = t("./config"),
			o = function(t, o, a) {
				var s;
				a = a || r.devicePixelRatio, "string" == typeof t ? s = i(t, "canvas", o, a) : n.isObject(t) && (s = t, t = s.id), this.id = t, this.dom = s;
				var l = s.style;
				l && (s.onselectstart = e, l["-webkit-user-select"] = "none", l["user-select"] = "none", l["-webkit-touch-callout"] = "none", l["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)"), this.domBack = null, this.ctxBack = null, this.painter = o, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = a
			};
		return o.prototype = {
			constructor: o,
			elCount: 0,
			__dirty: !0,
			initContext: function() {
				this.ctx = this.dom.getContext("2d");
				var t = this.dpr;
				1 != t && this.ctx.scale(t, t)
			},
			createBackBuffer: function() {
				var t = this.dpr;
				this.domBack = i("back-" + this.id, "canvas", this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 != t && this.ctxBack.scale(t, t)
			},
			resize: function(t, e) {
				var i = this.dpr,
					n = this.dom,
					r = n.style,
					o = this.domBack;
				r.width = t + "px", r.height = e + "px", n.width = t * i, n.height = e * i, 1 != i && this.ctx.scale(i, i), o && (o.width = t * i, o.height = e * i, 1 != i && this.ctxBack.scale(i, i))
			},
			clear: function(t) {
				var e = this.dom,
					i = this.ctx,
					n = e.width,
					r = e.height,
					o = this.clearColor,
					a = this.motionBlur && !t,
					s = this.lastFrameAlpha,
					l = this.dpr;
				if (a && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(e, 0, 0, n / l, r / l)), i.clearRect(0, 0, n / l, r / l), o && (i.save(), i.fillStyle = this.clearColor, i.fillRect(0, 0, n / l, r / l), i.restore()), a) {
					var u = this.domBack;
					i.save(), i.globalAlpha = s, i.drawImage(u, 0, 0, n / l, r / l), i.restore()
				}
			}
		}, o
	}), e("zrender/Painter", ["require", "./config", "./core/util", "./core/log", "./core/BoundingRect", "./Layer", "./graphic/Image"], function(t) {
		function e(t) {
			return parseInt(t, 10)
		}
		function i(t) {
			return t ? t.isBuildin ? !0 : "function" != typeof t.resize || "function" != typeof t.refresh ? !1 : !0 : !1
		}
		function n(t) {
			t.__unusedCount++
		}
		function r(t) {
			t.__dirty = !1, 1 == t.__unusedCount && t.clear()
		}
		function o(t, e, i) {
			return p.copy(t.getBoundingRect()), t.transform && p.applyTransform(t.transform), f.width = e, f.height = i, !p.intersect(f)
		}
		function a(t, e) {
			if (!t || !e || t.length !== e.length) return !0;
			for (var i = 0; i < t.length; i++) if (t[i] !== e[i]) return !0
		}
		function s(t, e) {
			for (var i = 0; i < t.length; i++) {
				var n, r = t[i];
				r.transform && (n = r.transform, e.transform(n[0], n[1], n[2], n[3], n[4], n[5]));
				var o = r.path;
				o.beginPath(e), r.buildPath(o, r.shape), e.clip(), r.transform && (n = r.invTransform, e.transform(n[0], n[1], n[2], n[3], n[4], n[5]))
			}
		}
		var l = t("./config"),
			u = t("./core/util"),
			c = t("./core/log"),
			h = t("./core/BoundingRect"),
			d = t("./Layer"),
			p = new h(0, 0, 0, 0),
			f = new h(0, 0, 0, 0),
			m = function(t, e, i) {
				var n = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
				i = i || {}, this.dpr = i.devicePixelRatio || l.devicePixelRatio, this._singleCanvas = n, this.root = t;
				var r = t.style;
				if (r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = "none", r["user-select"] = "none", r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e, n) {
					var o = t.width,
						a = t.height;
					this._width = o, this._height = a;
					var s = new d(t, this, 1);
					s.initContext(), this._layers = {
						0: s
					}, this._zlevelList = [0]
				} else {
					var o = this._getWidth(),
						a = this._getHeight();
					this._width = o, this._height = a;
					var u = document.createElement("div");
					this._domRoot = u;
					var c = u.style;
					c.position = "relative", c.overflow = "hidden", c.width = this._width + "px", c.height = this._height + "px", t.appendChild(u), this._layers = {}, this._zlevelList = []
				}
				this._layerConfig = {}, this.pathToImage = this._createPathToImage()
			};
		return m.prototype = {
			constructor: m,
			isSingleCanvas: function() {
				return this._singleCanvas
			},
			getViewportRoot: function() {
				return this._singleCanvas ? this._layers[0].dom : this._domRoot
			},
			refresh: function(t) {
				var e = this.storage.getDisplayList(!0),
					i = this._zlevelList;
				this._paintList(e, t);
				for (var n = 0; n < i.length; n++) {
					var r = i[n],
						o = this._layers[r];
					!o.isBuildin && o.refresh && o.refresh()
				}
				return this
			},
			_paintList: function(t, e) {
				null == e && (e = !1), this._updateLayerStatus(t);
				var i, l, u, h = this._width,
					d = this._height;
				this.eachBuildinLayer(n);
				for (var p = null, f = 0, m = t.length; m > f; f++) {
					var g = t[f],
						v = this._singleCanvas ? 0 : g.zlevel;
					if (l !== v && (l = v, i = this.getLayer(l), i.isBuildin || c("ZLevel " + l + " has been used by unkown layer " + i.id), u = i.ctx, i.__unusedCount = 0, (i.__dirty || e) && i.clear()), (i.__dirty || e) && !g.invisible && 0 !== g.style.opacity && g.scale[0] && g.scale[1] && (!g.culling || !o(g, h, d))) {
						var y = g.__clipPaths;
						a(y, p) && (p && u.restore(), y && (u.save(), s(y, u)), p = y), g.beforeBrush && g.beforeBrush(u), g.brush(u, !1), g.afterBrush && g.afterBrush(u)
					}
					g.__dirty = !1
				}
				p && u.restore(), this.eachBuildinLayer(r)
			},
			getLayer: function(t) {
				if (this._singleCanvas) return this._layers[0];
				var e = this._layers[t];
				return e || (e = new d("zr_" + t, this, this.dpr), e.isBuildin = !0, this._layerConfig[t] && u.merge(e, this._layerConfig[t], !0), this.insertLayer(t, e), e.initContext()), e
			},
			insertLayer: function(t, e) {
				var n = this._layers,
					r = this._zlevelList,
					o = r.length,
					a = null,
					s = -1,
					l = this._domRoot;
				if (n[t]) return void c("ZLevel " + t + " has been used already");
				if (!i(e)) return void c("Layer of zlevel " + t + " is not valid");
				if (o > 0 && t > r[0]) {
					for (s = 0; o - 1 > s && !(r[s] < t && r[s + 1] > t); s++);
					a = n[r[s]]
				}
				if (r.splice(s + 1, 0, t), a) {
					var u = a.dom;
					u.nextSibling ? l.insertBefore(e.dom, u.nextSibling) : l.appendChild(e.dom)
				} else l.firstChild ? l.insertBefore(e.dom, l.firstChild) : l.appendChild(e.dom);
				n[t] = e
			},
			eachLayer: function(t, e) {
				var i, n, r = this._zlevelList;
				for (n = 0; n < r.length; n++) i = r[n], t.call(e, this._layers[i], i)
			},
			eachBuildinLayer: function(t, e) {
				var i, n, r, o = this._zlevelList;
				for (r = 0; r < o.length; r++) n = o[r], i = this._layers[n], i.isBuildin && t.call(e, i, n)
			},
			eachOtherLayer: function(t, e) {
				var i, n, r, o = this._zlevelList;
				for (r = 0; r < o.length; r++) n = o[r], i = this._layers[n], i.isBuildin || t.call(e, i, n)
			},
			getLayers: function() {
				return this._layers
			},
			_updateLayerStatus: function(t) {
				var e = this._layers,
					i = {};
				this.eachBuildinLayer(function(t, e) {
					i[e] = t.elCount, t.elCount = 0
				});
				for (var n = 0, r = t.length; r > n; n++) {
					var o = t[n],
						a = this._singleCanvas ? 0 : o.zlevel,
						s = e[a];
					if (s) {
						if (s.elCount++, s.__dirty) continue;
						s.__dirty = o.__dirty
					}
				}
				this.eachBuildinLayer(function(t, e) {
					i[e] !== t.elCount && (t.__dirty = !0)
				})
			},
			clear: function() {
				return this.eachBuildinLayer(this._clearLayer), this
			},
			_clearLayer: function(t) {
				t.clear()
			},
			configLayer: function(t, e) {
				if (e) {
					var i = this._layerConfig;
					i[t] ? u.merge(i[t], e, !0) : i[t] = e;
					var n = this._layers[t];
					n && u.merge(n, i[t], !0)
				}
			},
			delLayer: function(t) {
				var e = this._layers,
					i = this._zlevelList,
					n = e[t];
				n && (n.dom.parentNode.removeChild(n.dom), delete e[t], i.splice(u.indexOf(i, t), 1))
			},
			resize: function(t, e) {
				var i = this._domRoot;
				if (i.style.display = "none", t = t || this._getWidth(), e = e || this._getHeight(), i.style.display = "", this._width != t || e != this._height) {
					i.style.width = t + "px", i.style.height = e + "px";
					for (var n in this._layers) this._layers[n].resize(t, e);
					this.refresh(!0)
				}
				return this._width = t, this._height = e, this
			},
			clearLayer: function(t) {
				var e = this._layers[t];
				e && e.clear()
			},
			dispose: function() {
				this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null
			},
			getRenderedCanvas: function(t) {
				if (t = t || {}, this._singleCanvas) return this._layers[0].dom;
				var e = new d("image", this, t.pixelRatio || this.dpr);
				e.initContext();
				var i = e.ctx;
				e.clearColor = t.backgroundColor, e.clear();
				for (var n = this.storage.getDisplayList(!0), r = 0; r < n.length; r++) {
					var o = n[r];
					o.invisible || (o.beforeBrush && o.beforeBrush(i), o.brush(i, !1), o.afterBrush && o.afterBrush(i))
				}
				return e.dom
			},
			getWidth: function() {
				return this._width
			},
			getHeight: function() {
				return this._height
			},
			_getWidth: function() {
				var t = this.root,
					i = document.defaultView.getComputedStyle(t);
				return (t.clientWidth || e(i.width) || e(t.style.width)) - (e(i.paddingLeft) || 0) - (e(i.paddingRight) || 0) | 0
			},
			_getHeight: function() {
				var t = this.root,
					i = document.defaultView.getComputedStyle(t);
				return (t.clientHeight || e(i.height) || e(t.style.height)) - (e(i.paddingTop) || 0) - (e(i.paddingBottom) || 0) | 0
			},
			_pathToImage: function(e, i, n, r, o) {
				var a = document.createElement("canvas"),
					s = a.getContext("2d");
				a.width = n * o, a.height = r * o, s.clearRect(0, 0, n * o, r * o);
				var l = {
					position: i.position,
					rotation: i.rotation,
					scale: i.scale
				};
				i.position = [0, 0, 0], i.rotation = 0, i.scale = [1, 1], i && i.brush(s);
				var u = t("./graphic/Image"),
					c = new u({
						id: e,
						style: {
							x: 0,
							y: 0,
							image: a
						}
					});
				return null != l.position && (c.position = i.position = l.position), null != l.rotation && (c.rotation = i.rotation = l.rotation), null != l.scale && (c.scale = i.scale = l.scale), c
			},
			_createPathToImage: function() {
				var t = this;
				return function(e, i, n, r) {
					return t._pathToImage(e, i, n, r, t.dpr)
				}
			}
		}, m
	}), e("zrender/zrender", ["require", "./core/guid", "./core/env", "./Handler", "./Storage", "./animation/Animation", "./Painter"], function(t) {
		function e(t) {
			delete u[t]
		}
		var i = t("./core/guid"),
			n = t("./core/env"),
			r = t("./Handler"),
			o = t("./Storage"),
			a = t("./animation/Animation"),
			s = !n.canvasSupported,
			l = {
				canvas: t("./Painter")
			},
			u = {},
			c = {};
		c.version = "3.0.0", c.init = function(t, e) {
			var n = new h(i(), t, e);
			return u[n.id] = n, n
		}, c.dispose = function(t) {
			if (t) t.dispose();
			else {
				for (var e in u) u[e].dispose();
				u = {}
			}
			return c
		}, c.getInstance = function(t) {
			return u[t]
		}, c.registerPainter = function(t, e) {
			l[t] = e
		};
		var h = function(t, e, i) {
				i = i || {}, this.dom = e, this.id = t;
				var u = this,
					c = new o,
					h = i.renderer;
				if (s) {
					if (!l.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
					h = "vml"
				} else h && l[h] || (h = "canvas");
				var d = new l[h](e, c, i);
				this.storage = c, this.painter = d, n.node || (this.handler = new r(d.getViewportRoot(), c, d)), this.animation = new a({
					stage: {
						update: function() {
							u._needsRefresh && u.refreshImmediately()
						}
					}
				}), this.animation.start(), this._needsRefresh;
				var p = c.delFromMap,
					f = c.addToMap;
				c.delFromMap = function(t) {
					var e = c.get(t);
					p.call(c, t), e && e.removeSelfFromZr(u)
				}, c.addToMap = function(t) {
					f.call(c, t), t.addSelfToZr(u)
				}
			};
		return h.prototype = {
			constructor: h,
			getId: function() {
				return this.id
			},
			add: function(t) {
				this.storage.addRoot(t), this._needsRefresh = !0
			},
			remove: function(t) {
				this.storage.delRoot(t), this._needsRefresh = !0
			},
			configLayer: function(t, e) {
				this.painter.configLayer(t, e), this._needsRefresh = !0
			},
			refreshImmediately: function() {
				this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1
			},
			refresh: function() {
				this._needsRefresh = !0
			},
			resize: function() {
				this.painter.resize(), this.handler && this.handler.resize()
			},
			clearAnimation: function() {
				this.animation.clear()
			},
			getWidth: function() {
				return this.painter.getWidth()
			},
			getHeight: function() {
				return this.painter.getHeight()
			},
			toDataURL: function(t, e, i) {
				return this.painter.toDataURL(t, e, i)
			},
			pathToImage: function(t, e, n) {
				var r = i();
				return this.painter.pathToImage(r, t, e, n)
			},
			setDefaultCursorStyle: function(t) {
				this.handler.setDefaultCursorStyle(t)
			},
			on: function(t, e, i) {
				this.handler && this.handler.on(t, e, i)
			},
			off: function(t, e) {
				this.handler && this.handler.off(t, e)
			},
			trigger: function(t, e) {
				this.handler && this.handler.trigger(t, e)
			},
			clear: function() {
				this.storage.delRoot(), this.painter.clear()
			},
			dispose: function() {
				this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler && this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, e(this.id)
			}
		}, c
	}), e("zrender", ["zrender/zrender"], function(t) {
		return t
	}), e("echarts/loading/default", ["require", "../util/graphic", "zrender/core/util"], function(t) {
		var e = t("../util/graphic"),
			i = t("zrender/core/util"),
			n = Math.PI;
		return function(t, r) {
			r = r || {}, i.defaults(r, {
				text: "loading",
				color: "#c23531",
				textColor: "#000",
				maskColor: "rgba(255, 255, 255, 0.8)",
				zlevel: 0
			});
			var o = new e.Rect({
				style: {
					fill: r.maskColor
				},
				zlevel: r.zlevel,
				z: 1e4
			}),
				a = new e.Arc({
					shape: {
						startAngle: -n / 2,
						endAngle: -n / 2 + .1,
						r: 10
					},
					style: {
						stroke: r.color,
						lineCap: "round",
						lineWidth: 5
					},
					zlevel: r.zlevel,
					z: 10001
				}),
				s = new e.Rect({
					style: {
						fill: "none",
						text: r.text,
						textPosition: "right",
						textDistance: 10,
						textFill: r.textColor
					},
					zlevel: r.zlevel,
					z: 10001
				});
			a.animateShape(!0).when(1e3, {
				endAngle: 3 * n / 2
			}).start("circularInOut"), a.animateShape(!0).when(1e3, {
				startAngle: 3 * n / 2
			}).delay(300).start("circularInOut");
			var l = new e.Group;
			return l.add(a), l.add(s), l.add(o), l.resize = function() {
				var e = t.getWidth() / 2,
					i = t.getHeight() / 2;
				a.setShape({
					cx: e,
					cy: i
				});
				var n = a.shape.r;
				s.setShape({
					x: e - n,
					y: i - n,
					width: 2 * n,
					height: 2 * n
				}), o.setShape({
					x: 0,
					y: 0,
					width: t.getWidth(),
					height: t.getHeight()
				})
			}, l.resize(), l
		}
	}), e("echarts/visual/seriesColor", ["require", "zrender/graphic/Gradient"], function(t) {
		var e = t("zrender/graphic/Gradient");
		return function(t, i, n) {
			function r(t) {
				var r = [i, "normal", "color"],
					o = n.get("color"),
					a = t.getData(),
					s = t.get(r) || o[t.seriesIndex % o.length];
				a.setVisual("color", s), n.isSeriesFiltered(t) || ("function" != typeof s || s instanceof e || a.each(function(e) {
					a.setItemVisual(e, "color", s(t.getDataParams(e)))
				}), a.each(function(t) {
					var e = a.getItemModel(t),
						i = e.get(r, !0);
					null != i && a.setItemVisual(t, "color", i)
				}))
			}
			t ? n.eachSeriesByType(t, r) : n.eachSeries(r)
		}
	}), e("echarts/preprocessor/helper/compatStyle", ["require", "zrender/core/util"], function(t) {
		function e(t) {
			var e = t && t.itemStyle;
			e && i.each(n, function(n) {
				var r = e.normal,
					o = e.emphasis;
				r && r[n] && (t[n] = t[n] || {}, t[n].normal ? i.merge(t[n].normal, r[n]) : t[n].normal = r[n], r[n] = null), o && o[n] && (t[n] = t[n] || {}, t[n].emphasis ? i.merge(t[n].emphasis, o[n]) : t[n].emphasis = o[n], o[n] = null)
			})
		}
		var i = t("zrender/core/util"),
			n = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
		return function(t) {
			e(t);
			var n = t.data;
			if (n) {
				for (var r = 0; r < n.length; r++) e(n[r]);
				var o = t.markPoint;
				if (o && o.data) for (var a = o.data, r = 0; r < a.length; r++) e(a[r]);
				var s = t.markLine;
				if (s && s.data) for (var l = s.data, r = 0; r < l.length; r++) i.isArray(l[r]) ? (e(l[r][0]), e(l[r][1])) : e(l[r])
			}
		}
	}), e("echarts/preprocessor/backwardCompat", ["require", "zrender/core/util", "./helper/compatStyle"], function(t) {
		function e(t, e) {
			e = e.split(",");
			for (var i = t, n = 0; n < e.length && (i = i && i[e[n]], null != i); n++);
			return i
		}
		function i(t, e, i, n) {
			e = e.split(",");
			for (var r, o = t, a = 0; a < e.length - 1; a++) r = e[a], null == o[r] && (o[r] = {}), o = o[r];
			(n || null == o[e[a]]) && (o[e[a]] = i)
		}
		function n(t) {
			u(a, function(e) {
				e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
			})
		}
		var r = t("zrender/core/util"),
			o = t("./helper/compatStyle"),
			a = [
				["x", "left"],
				["y", "top"],
				["x2", "right"],
				["y2", "bottom"]
			],
			s = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
			l = ["bar", "boxplot", "candlestick", "chord", "effectScatter", "funnel", "gauge", "lines", "graph", "heatmap", "line", "map", "parallel", "pie", "radar", "sankey", "scatter", "treemap"],
			u = r.each;
		return function(t) {
			u(t.series, function(t) {
				if (r.isObject(t)) {
					var a = t.type;
					if (o(t), ("pie" === a || "gauge" === a) && null != t.clockWise && (t.clockwise = t.clockWise), "gauge" === a) {
						var s = e(t, "pointer.color");
						null != s && i(t, "itemStyle.normal.color", s)
					}
					for (var u = 0; u < l.length; u++) if (l[u] === t.type) {
						n(t);
						break
					}
				}
			}), t.dataRange && (t.visualMap = t.dataRange), u(s, function(e) {
				var i = t[e];
				i && (r.isArray(i) || (i = [i]), u(i, function(t) {
					n(t)
				}))
			})
		}
	}), e("echarts/echarts", ["require", "./model/Global", "./ExtensionAPI", "./CoordinateSystem", "./model/OptionManager", "./model/Component", "./model/Series", "./view/Component", "./view/Chart", "./util/graphic", "zrender", "zrender/core/util", "zrender/tool/color", "zrender/core/env", "zrender/mixin/Eventful", "./loading/default", "./visual/seriesColor", "./preprocessor/backwardCompat", "echarts/util/graphic", "echarts/util/number", "echarts/util/format", "echarts/coord/geo/Geo"], function(t) {
		function e(t, e, i) {
			t = t && t.toLowerCase(), C.prototype.on.call(this, t, e, i)
		}
		function i() {
			C.call(this)
		}
		function n(t, e, n) {
			n = n || {}, e && P(V, function(t) {
				t(e)
			}), this.id, this.group, this._dom = t, this._zr = w.init(t, {
				renderer: n.renderer || "canvas",
				devicePixelRatio: n.devicePixelRatio
			}), "string" == typeof e && (e = Z[e]), this._theme = M.clone(e), this.Geo = T, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._api = new f(this), this._coordinateSystem = new m, C.call(this), this._messageCenter = new i, this._initEvents(), this.resize = M.bind(this.resize, this)
		}
		function r(t, e) {
			var i = this._model;
			i && i.eachComponent({
				mainType: "series",
				query: e
			}, function(n, r) {
				var o = this._chartsMap[n.__viewId];
				o && o[t](n, i, this._api, e)
			}, this)
		}
		function o(t, e, i) {
			var n = this._api;
			P(this._componentsViews, function(r) {
				var o = r.__model;
				r[t](o, e, n, i), d(o, r)
			}, this), e.eachSeries(function(r, o) {
				var a = this._chartsMap[r.__viewId];
				a[t](r, e, n, i), d(r, a)
			}, this)
		}
		function a(t, e) {
			for (var i = "component" === t, n = i ? this._componentsViews : this._chartsViews, r = i ? this._componentsMap : this._chartsMap, o = this._zr, a = 0; a < n.length; a++) n[a].__keepAlive = !1;
			e[i ? "eachComponent" : "eachSeries"](function(t, a) {
				if (i) {
					if ("series" === t) return
				} else a = t;
				var s = a.id + "_" + a.type,
					l = r[s];
				if (!l) {
					var u = v.parseClassType(a.type),
						c = i ? _.getClass(u.main, u.sub) : x.getClass(u.sub);
					if (!c) return;
					l = new c, l.init(e, this._api), r[s] = l, n.push(l), o.add(l.group)
				}
				a.__viewId = s, l.__keepAlive = !0, l.__id = s, l.__model = a
			}, this);
			for (var a = 0; a < n.length;) {
				var s = n[a];
				s.__keepAlive ? a++ : (o.remove(s.group), s.dispose(e, this._api), n.splice(a, 1), delete r[s.__id])
			}
		}
		function s(t) {
			P(D, function(e) {
				P(B[e] || [], function(e) {
					e(t)
				})
			})
		}
		function l(t) {
			var e = {};
			t.eachSeries(function(t) {
				var i = t.get("stack"),
					n = t.getData();
				if (i && "list" === n.type) {
					var r = e[i];
					r && (n.stackedOn = r), e[i] = n
				}
			})
		}
		function u(t, e) {
			var i = this._api;
			P(R, function(n) {
				n(t, i, e)
			})
		}
		function c(t, e) {
			P(A, function(i) {
				P(q[i] || [], function(i) {
					i(t, e)
				})
			})
		}
		function h(t, e) {
			var i = this._api;
			P(this._componentsViews, function(n) {
				var r = n.__model;
				n.render(r, t, i, e), d(r, n)
			}, this), P(this._chartsViews, function(t) {
				t.__keepAlive = !1
			}, this), t.eachSeries(function(n, r) {
				var o = this._chartsMap[n.__viewId];
				o.__keepAlive = !0, o.render(n, t, i, e), d(n, o)
			}, this), P(this._chartsViews, function(e) {
				e.__keepAlive || e.remove(t, i)
			}, this)
		}
		function d(t, e) {
			var i = t.get("z"),
				n = t.get("zlevel");
			e.group.traverse(function(t) {
				null != i && (t.z = i), null != n && (t.zlevel = n)
			})
		}
		var p = t("./model/Global"),
			f = t("./ExtensionAPI"),
			m = t("./CoordinateSystem"),
			g = t("./model/OptionManager"),
			v = t("./model/Component"),
			y = t("./model/Series"),
			_ = t("./view/Component"),
			x = t("./view/Chart"),
			b = t("./util/graphic"),
			w = t("zrender"),
			M = t("zrender/core/util"),
			S = t("zrender/tool/color"),
			L = t("zrender/core/env"),
			C = t("zrender/mixin/Eventful"),
			T = t("echarts/coord/geo/Geo"),
			P = M.each,
			A = ["echarts", "chart", "component"],
			D = ["transform", "filter", "statistic"];
		i.prototype.on = e, M.mixin(i, C);
		var z = n.prototype;
		z.getDom = function() {
			return this._dom
		}, z.getZr = function() {
			return this._zr
		}, z.setOption = function(t, e, i) {
			(!this._model || e) && (this._model = new p(null, null, this._theme, new g(this._api))), this._model.setOption(t, V), I.prepareAndUpdate.call(this), !i && this._zr.refreshImmediately()
		}, z.setTheme = function() {
			console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
		}, z.getModel = function() {
			return this._model
		}, z.getWidth = function() {
			return this._zr.getWidth()
		}, z.getHeight = function() {
			return this._zr.getHeight()
		}, z.getRenderedCanvas = function(t) {
			if (L.canvasSupported) {
				t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");
				var e = this._zr,
					i = e.storage.getDisplayList();
				return M.each(i, function(t) {
					t.stopAnimation(!0)
				}), e.painter.getRenderedCanvas(t)
			}
		}, z.getDataURL = function(t) {
			t = t || {};
			var e = t.excludeComponents,
				i = this._model,
				n = [],
				r = this;
			P(e, function(t) {
				i.eachComponent({
					mainType: t
				}, function(t) {
					var e = r._componentsMap[t.__viewId];
					e.group.ignore || (n.push(e), e.group.ignore = !0)
				})
			});
			var o = this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
			return P(n, function(t) {
				t.group.ignore = !1
			}), o
		}, z.getConnectedDataURL = function(t) {
			if (L.canvasSupported) {
				var e = this.group,
					i = Math.min,
					n = Math.max,
					r = 1 / 0;
				if (H[e]) {
					var o = r,
						a = r,
						s = -r,
						l = -r,
						u = [],
						c = t && t.pixelRatio || 1;
					for (var h in G) {
						var d = G[h];
						if (d.group === e) {
							var p = d.getRenderedCanvas(M.clone(t)),
								f = d.getDom().getBoundingClientRect();
							o = i(f.left, o), a = i(f.top, a), s = n(f.right, s), l = n(f.bottom, l), u.push({
								dom: p,
								left: f.left,
								top: f.top
							})
						}
					}
					o *= c, a *= c, s *= c, l *= c;
					var m = s - o,
						g = l - a,
						v = M.createCanvas();
					v.width = m, v.height = g;
					var y = w.init(v);
					return P(u, function(t) {
						var e = new b.Image({
							style: {
								x: t.left * c - o,
								y: t.top * c - a,
								image: t.dom
							}
						});
						y.add(e)
					}), y.refreshImmediately(), v.toDataURL("image/" + (t && t.type || "png"))
				}
				return this.getDataURL(t)
			}
		};
		var I = {
			update: function(t) {
				var e = this._model;
				if (e) {
					e.restoreData(), s.call(this, e), l.call(this, e), this._coordinateSystem.update(e, this._api), u.call(this, e, t), c.call(this, e, t), h.call(this, e, t);
					var i = e.get("backgroundColor");
					if (!L.canvasSupported) {
						var n = S.parse(i);
						i = S.stringify(n, "rgb"), 0 === n[3] && (i = "transparent")
					}
					var r = this._zr.painter;
					r.isSingleCanvas && r.isSingleCanvas() ? this._zr.configLayer(0, {
						clearColor: i
					}) : (i = i || "transparent", this._dom.style.backgroundColor = i)
				}
			},
			updateView: function(t) {
				var e = this._model;
				e && (u.call(this, e, t), c.call(this, e, t), o.call(this, "updateView", e, t))
			},
			updateVisual: function(t) {
				var e = this._model;
				e && (c.call(this, e, t), o.call(this, "updateVisual", e, t))
			},
			updateLayout: function(t) {
				var e = this._model;
				e && (u.call(this, e, t), o.call(this, "updateLayout", e, t))
			},
			highlight: function(t) {
				r.call(this, "highlight", t)
			},
			downplay: function(t) {
				r.call(this, "downplay", t)
			},
			prepareAndUpdate: function(t) {
				var e = this._model;
				a.call(this, "component", e), a.call(this, "chart", e), I.update.call(this, t)
			}
		};
		z.resize = function() {
			this._zr.resize();
			var t = this._model && this._model.resetOption("media");
			I[t ? "prepareAndUpdate" : "update"].call(this), this._loadingFX && this._loadingFX.resize()
		};
		var k = t("./loading/default");
		z.showLoading = function(t, e) {
			M.isObject(t) && (e = t, t = "default");
			var i = k(this._api, e),
				n = this._zr;
			this._loadingFX = i, n.painter.clear(), n.add(i)
		}, z.hideLoading = function() {
			this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null
		}, z.makeActionFromEvent = function(t) {
			var e = M.extend({}, t);
			return e.type = N[t.type], e
		}, z.dispatchAction = function(t, e) {
			var i = O[t.type];
			if (i) {
				var n = i.actionInfo,
					r = n.update || "update",
					o = [t],
					a = !1;
				t.batch && (a = !0, o = M.map(t.batch, function(e) {
					return e = M.defaults(M.extend({}, e), t), e.batch = null, e
				}));
				for (var s, l = [], u = "highlight" === t.type || "downplay" === t.type, c = 0; c < o.length; c++) {
					var h = o[c];
					s = i.action(h, this._model), s = s || M.extend({}, h), s.type = n.event || s.type, l.push(s), u && I[r].call(this, h)
				}
				"none" !== r && !u && I[r].call(this, t), e || (s = a ? {
					type: l[0].type,
					batch: l
				} : l[0], this._messageCenter.trigger(s.type, s))
			}
		}, z.on = e;
		var E = ["click", "dblclick", "mouseover", "mouseout", "globalout"];
		z._initEvents = function() {
			var t = this._zr;
			P(E, function(e) {
				t.on(e, function(t) {
					var i = this.getModel(),
						n = t.target;
					if (n && null != n.dataIndex) {
						var r = n.hostModel || i.getSeriesByIndex(n.seriesIndex),
							o = r && r.getDataParams(n.dataIndex) || {};
						o.event = t, o.type = e, this.trigger(e, o)
					}
				}, this)
			}, this), P(N, function(t, e) {
				this._messageCenter.on(e, function(t) {
					this.trigger(e, t)
				}, this)
			}, this)
		}, z.isDisposed = function() {
			return this._disposed
		}, z.dispose = function() {
			this._disposed = !0;
			var t = this._api,
				e = this._model;
			P(this._componentsViews, function(i) {
				i.dispose(e, t)
			}), P(this._chartsViews, function(i) {
				i.dispose(e, t)
			}), this._zr.dispose(), G[this.id] = null
		}, M.mixin(n, C);
		var O = [],
			N = {},
			R = [],
			B = {},
			V = [],
			q = {},
			Z = {},
			G = {},
			H = {},
			F = new Date - 0,
			W = new Date - 0,
			U = "_echarts_instance_",
			j = {
				version: "3.0.0",
				dependencies: {
					zrender: "3.0.0"
				}
			};
		return j.init = function(t, e, i) {
			if (w.version.replace(".", "") - 0 < j.dependencies.zrender.replace(".", "") - 0) throw new Error("ZRender " + w.version + " is too old for ECharts " + j.version + ". Current version need ZRender " + j.dependencies.zrender + "+");
			if (!t) throw new Error("Initialize failed: invalid dom.");
			var r = new n(t, e, i);
			return r.id = F++, G[r.id] = r, t.setAttribute && t.setAttribute(U, r.id), M.each(N, function(t, e) {
				r._messageCenter.on(e, function(t) {
					if (H[r.group]) {
						r.__connectedActionDispatching = !0;
						for (var e in G) {
							var i = r.makeActionFromEvent(t),
								n = G[e];
							n !== r && n.group === r.group && (n.__connectedActionDispatching || n.dispatchAction(i))
						}
						r.__connectedActionDispatching = !1
					}
				})
			}), r
		}, j.connect = function(t) {
			if (M.isArray(t)) {
				var e = t;
				t = null, M.each(e, function(e) {
					null != e.group && (t = e.group)
				}), t = t || W++, M.each(e, function(e) {
					e.group = t
				})
			}
			return H[t] = !0, t
		}, j.disConnect = function(t) {
			H[t] = !1
		}, j.dispose = function(t) {
			M.isDom(t) ? t = j.getInstanceByDom(t) : "string" == typeof t && (t = G[t]), t instanceof n && !t.isDisposed() && t.dispose()
		}, j.getInstanceByDom = function(t) {
			var e = t.getAttribute(U);
			return G[e]
		}, j.getInstanceById = function(t) {
			return G[t]
		}, j.registerTheme = function(t, e) {
			Z[t] = e
		}, j.registerPreprocessor = function(t) {
			V.push(t)
		}, j.registerProcessor = function(t, e) {
			if (M.indexOf(D, t) < 0) throw new Error("stage should be one of " + D);
			var i = B[t] || (B[t] = []);
			i.push(e)
		}, j.registerAction = function(t, e, i) {
			"function" == typeof e && (i = e, e = "");
			var n = M.isObject(t) ? t.type : [t, t = {
				event: e
			}][0];
			t.event = (t.event || n).toLowerCase(), e = t.event, O[n] || (O[n] = {
				action: i,
				actionInfo: t
			}), N[e] = n
		}, j.registerCoordinateSystem = function(t, e) {
			m.register(t, e)
		}, j.registerLayout = function(t) {
			M.indexOf(R, t) < 0 && R.push(t)
		}, j.registerVisualCoding = function(t, e) {
			if (M.indexOf(A, t) < 0) throw new Error("stage should be one of " + A);
			var i = q[t] || (q[t] = []);
			i.push(e)
		}, j.extendChartView = function(t) {
			return x.extend(t)
		}, j.extendComponentModel = function(t) {
			return v.extend(t)
		}, j.extendSeriesModel = function(t) {
			return y.extend(t)
		}, j.extendComponentView = function(t) {
			return _.extend(t)
		}, j.setCanvasCreator = function(t) {
			M.createCanvas = t
		}, j.registerVisualCoding("echarts", M.curry(t("./visual/seriesColor"), "", "itemStyle")), j.registerPreprocessor(t("./preprocessor/backwardCompat")), j.registerAction({
			type: "highlight",
			event: "highlight",
			update: "highlight"
		}, M.noop), j.registerAction({
			type: "downplay",
			event: "downplay",
			update: "downplay"
		}, M.noop), j.graphic = t("echarts/util/graphic"), j.number = t("echarts/util/number"), j.format = t("echarts/util/format"), j.util = {}, P(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend"], function(t) {
			j.util[t] = M[t]
		}), j
	}), e("echarts", ["echarts/echarts"], function(t) {
		return t
	}), e("echarts/data/DataDiffer", ["require"], function(t) {
		function e(t) {
			return t
		}
		function i(t, i, n, r) {
			this._old = t, this._new = i, this._oldKeyGetter = n || e, this._newKeyGetter = r || e
		}
		function n(t, e, i) {
			for (var n = 0; n < t.length; n++) {
				var r = i(t[n]),
					o = e[r];
				null == o ? e[r] = n : (o.length || (e[r] = o = [o]), o.push(n))
			}
		}
		return i.prototype = {
			constructor: i,
			add: function(t) {
				return this._add = t, this
			},
			update: function(t) {
				return this._update = t, this
			},
			remove: function(t) {
				return this._remove = t, this
			},
			execute: function() {
				var t, e = this._old,
					i = this._new,
					r = this._oldKeyGetter,
					o = this._newKeyGetter,
					a = {},
					s = {};
				for (n(e, a, r), n(i, s, o), t = 0; t < e.length; t++) {
					var l = r(e[t]),
						u = s[l];
					if (null != u) {
						var c = u.length;
						c ? (1 === c && (s[l] = null), u = u.unshift()) : s[l] = null, this._update && this._update(u, t)
					} else this._remove && this._remove(t)
				}
				for (var l in s) if (s.hasOwnProperty(l)) {
					var u = s[l];
					if (null == u) continue;
					if (u.length) for (var t = 0, c = u.length; c > t; t++) this._add && this._add(u[t]);
					else this._add && this._add(u)
				}
			}
		}, i
	}), e("echarts/data/List", ["require", "../model/Model", "./DataDiffer", "zrender/core/util", "../util/model"], function(t) {
		function e(t) {
			return u.isArray(t) || (t = [t]), t
		}
		var i = "undefined",
			n = "undefined" == typeof window ? global : window,
			r = typeof n.Float64Array === i ? Array : n.Float64Array,
			o = typeof n.Int32Array === i ? Array : n.Int32Array,
			a = {
				"float": r,
				"int": o,
				ordinal: Array,
				number: Array,
				time: Array
			},
			s = t("../model/Model"),
			l = t("./DataDiffer"),
			u = t("zrender/core/util"),
			c = t("../util/model"),
			h = u.isObject,
			d = ["stackedOn", "_nameList", "_idList", "_rawData"],
			p = function(t, e, i) {
				u.each(d.concat(i || []), function(i) {
					e.hasOwnProperty(i) && (t[i] = e[i])
				})
			},
			f = function(t, e) {
				t = t || ["x", "y"];
				for (var i = {}, n = [], r = 0; r < t.length; r++) {
					var o, a = {};
					"string" == typeof t[r] ? (o = t[r], a = {
						name: o,
						stackable: !1,
						type: "number"
					}) : (a = t[r], o = a.name, a.type = a.type || "number"), n.push(o), i[o] = a
				}
				this.dimensions = n, this._dimensionInfos = i, this.hostModel = e, this.indices = [], this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this.stackedOn = null, this._visual = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._rawData
			},
			m = f.prototype;
		m.type = "list", m.getDimension = function(t) {
			return isNaN(t) || (t = this.dimensions[t] || t), t
		}, m.getDimensionInfo = function(t) {
			return this._dimensionInfos[this.getDimension(t)]
		}, m.initData = function(t, e, i) {
			t = t || [], this._rawData = t;
			var n = this._storage = {},
				r = this.indices = [],
				o = this.dimensions,
				s = t.length,
				l = this._dimensionInfos,
				h = [],
				d = {};
			e = e || [];
			for (var p = 0; p < o.length; p++) {
				var f = l[o[p]],
					m = a[f.type];
				n[o[p]] = new m(s)
			}
			i = i ||
			function(t, e, i, n) {
				var r = c.getDataItemValue(t);
				return c.converDataValue(u.isArray(r) ? r[n] : r, l[e])
			};
			for (var g = 0; g < t.length; g++) {
				for (var v = t[g], y = 0; y < o.length; y++) {
					var _ = o[y],
						x = n[_];
					x[g] = i(v, _, g, y)
				}
				r.push(g)
			}
			for (var p = 0; p < t.length; p++) {
				var b = "";
				e[p] || (e[p] = t[p].name, b = t[p].id);
				var w = e[p] || "";
				!b && w && (d[w] = d[w] || 0, b = w, d[w] > 0 && (b += "__ec__" + d[w]), d[w]++), b && (h[p] = b)
			}
			this._nameList = e, this._idList = h
		}, m.count = function() {
			return this.indices.length
		}, m.get = function(t, e, i) {
			var n = this._storage,
				r = this.indices[e],
				o = n[t] && n[t][r],
				a = this._dimensionInfos[t];
			if (i && a && a.stackable) for (var s = this.stackedOn; s;) {
				var l = s.get(t, e);
				(o >= 0 && l > 0 || 0 >= o && 0 > l) && (o += l), s = s.stackedOn
			}
			return o
		}, m.getValues = function(t, e, i) {
			var n = [];
			u.isArray(t) || (i = e, e = t, t = this.dimensions);
			for (var r = 0, o = t.length; o > r; r++) n.push(this.get(t[r], e, i));
			return n
		}, m.hasValue = function(t) {
			for (var e = this.dimensions, i = this._dimensionInfos, n = 0, r = e.length; r > n; n++) if ("ordinal" !== i[e[n]].type && isNaN(this.get(e[n], t))) return !1;
			return !0
		}, m.getDataExtent = function(t, e) {
			var i = this._storage[t],
				n = this.getDimensionInfo(t);
			e = n && n.stackable && e;
			var r, o = (this._extent || (this._extent = {}))[t + !! e];
			if (o) return o;
			if (i) {
				for (var a = 1 / 0, s = -(1 / 0), l = 0, u = this.count(); u > l; l++) r = this.get(t, l, e), a > r && (a = r), r > s && (s = r);
				return this._extent[t + e] = [a, s]
			}
			return [1 / 0, -(1 / 0)]
		}, m.getSum = function(t, e) {
			var i = this._storage[t],
				n = 0;
			if (i) for (var r = 0, o = this.count(); o > r; r++) {
				var a = this.get(t, r, e);
				isNaN(a) || (n += a)
			}
			return n
		}, m.indexOf = function(t, e) {
			var i = this._storage,
				n = i[t],
				r = this.indices;
			if (n) for (var o = 0, a = r.length; a > o; o++) {
				var s = r[o];
				if (n[s] === e) return o
			}
			return -1
		}, m.indexOfName = function(t) {
			for (var e = this.indices, i = this._nameList, n = 0, r = e.length; r > n; n++) {
				var o = e[n];
				if (i[o] === t) return n
			}
			return -1
		}, m.indexOfNearest = function(t, e, i) {
			u.isArray(t) || (t = t ? [t] : []);
			var n = this._storage,
				r = n[t];
			if (r) {
				for (var o = Number.MAX_VALUE, a = -1, s = 0, l = t.length; l > s; s++) for (var c = 0, h = this.count(); h > c; c++) {
					var d = Math.abs(this.get(t[s], c, i) - e);
					o >= d && (o = d, a = c)
				}
				return a
			}
			return -1
		}, m.getRawIndex = function(t) {
			var e = this.indices[t];
			return null == e ? -1 : e
		}, m.getName = function(t) {
			return this._nameList[this.indices[t]] || ""
		}, m.getId = function(t) {
			return this._idList[this.indices[t]] || this.getRawIndex(t) + ""
		}, m.each = function(t, i, n, r) {
			"function" == typeof t && (r = n, n = i, i = t, t = []), t = u.map(e(t), this.getDimension, this);
			var o = [],
				a = t.length,
				s = this.indices;
			r = r || this;
			for (var l = 0; l < s.length; l++) if (0 === a) i.call(r, l);
			else if (1 === a) i.call(r, this.get(t[0], l, n), l);
			else {
				for (var c = 0; a > c; c++) o[c] = this.get(t[c], l, n);
				o[c] = l, i.apply(r, o)
			}
		}, m.filterSelf = function(t, i, n, r) {
			"function" == typeof t && (r = n, n = i, i = t, t = []), t = u.map(e(t), this.getDimension, this);
			var o = [],
				a = [],
				s = t.length,
				l = this.indices;
			r = r || this;
			for (var c = 0; c < l.length; c++) {
				var h;
				if (1 === s) h = i.call(r, this.get(t[0], c, n), c);
				else {
					for (var d = 0; s > d; d++) a[d] = this.get(t[d], c, n);
					a[d] = c, h = i.apply(r, a)
				}
				h && o.push(l[c])
			}
			return this.indices = o, this._extent = {}, this
		}, m.mapArray = function(t, e, i, n) {
			"function" == typeof t && (n = i, i = e, e = t, t = []);
			var r = [];
			return this.each(t, function() {
				r.push(e && e.apply(this, arguments))
			}, i, n), r
		}, m.map = function(t, i, n, r) {
			t = u.map(e(t), this.getDimension, this);
			var o = this.dimensions,
				a = new f(u.map(o, this.getDimensionInfo, this), this.hostModel),
				s = a.indices = this.indices;
			p(a, this, this._wrappedMethods);
			for (var l = a._storage = {}, c = this._storage, h = 0; h < o.length; h++) {
				var d = o[h],
					m = c[d];
				u.indexOf(t, d) >= 0 ? l[d] = new m.constructor(c[d].length) : l[d] = c[d]
			}
			var g = [];
			return this.each(t, function() {
				var e = arguments[arguments.length - 1],
					n = i && i.apply(this, arguments);
				if (null != n) {
					"number" == typeof n && (g[0] = n, n = g);
					for (var r = 0; r < n.length; r++) {
						var o = t[r],
							a = l[o],
							u = s[e];
						a && (a[u] = n[r])
					}
				}
			}), a
		};
		var g = new s(null);
		m.getItemModel = function(t, e) {
			var i, n = this.hostModel;
			return t = this.indices[t], i = e ? new s(null, n) : g, i.option = this._rawData[t], i.parentModel = n, i.ecModel = n.ecModel, i
		}, m.diff = function(t) {
			var e = this._idList,
				i = t && t._idList;
			return new l(t ? t.indices : [], this.indices, function(t) {
				return i[t] || t + ""
			}, function(t) {
				return e[t] || t + ""
			})
		}, m.getVisual = function(t) {
			var e = this._visual;
			return e && e[t]
		}, m.setVisual = function(t, e) {
			if (h(t)) for (var i in t) t.hasOwnProperty(i) && this.setVisual(i, t[i]);
			else this._visual = this._visual || {}, this._visual[t] = e
		}, m.getItemLayout = function(t) {
			return this._itemLayouts[t]
		}, m.setItemLayout = function(t, e, i) {
			this._itemLayouts[t] = i ? u.extend(this._itemLayouts[t] || {}, e) : e
		}, m.getItemVisual = function(t, e, i) {
			var n = this._itemVisuals[t],
				r = n && n[e];
			return null != r || i ? r : this.getVisual(e)
		}, m.setItemVisual = function(t, e, i) {
			var n = this._itemVisuals[t] || {};
			if (this._itemVisuals[t] = n, h(e)) for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r]);
			else n[e] = i
		};
		var v = function(t) {
				t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex
			};
		return m.setItemGraphicEl = function(t, e) {
			var i = this.hostModel;
			e && (e.dataIndex = t, e.seriesIndex = i && i.seriesIndex, "group" === e.type && e.traverse(v, e)), this._graphicEls[t] = e
		}, m.getItemGraphicEl = function(t) {
			return this._graphicEls[t]
		}, m.eachItemGraphicEl = function(t, e) {
			u.each(this._graphicEls, function(i, n) {
				i && t && t.call(e, i, n)
			})
		}, m.cloneShallow = function() {
			var t = u.map(this.dimensions, this.getDimensionInfo, this),
				e = new f(t, this.hostModel);
			return e._storage = this._storage, p(e, this, this._wrappedMethods), e.indices = this.indices.slice(), e
		}, m.wrapMethod = function(t, e) {
			var i = this[t];
			"function" == typeof i && (this._wrappedMethods = this._wrappedMethods || [], this._wrappedMethods.push(t), this[t] = function() {
				var t = i.apply(this, arguments);
				return e.call(this, t)
			})
		}, f
	}), e("echarts/data/helper/completeDimensions", ["require", "zrender/core/util"], function(t) {
		function e(t, e, o) {
			var a = n(e[0]),
				s = r.isArray(a) && a.length || 1;
			o = o || [];
			for (var l = 0; s > l; l++) if (!t[l]) {
				var u = o[l] || "extra" + (l - o.length);
				t[l] = i(e, l) ? {
					type: "ordinal",
					name: u
				} : u
			}
			return t
		}
		function i(t, e) {
			for (var i = 0, o = t.length; o > i; i++) {
				var a = n(t[i]);
				if (!r.isArray(a)) return !1;
				var a = a[e];
				if (null != a && isFinite(a)) return !1;
				if (r.isString(a) && "-" !== a) return !0
			}
			return !1
		}
		function n(t) {
			return r.isArray(t) ? t : r.isObject(t) ? t.value : t
		}
		var r = t("zrender/core/util");
		return e
	}), e("echarts/chart/helper/createListFromArray", ["require", "../../data/List", "../../data/helper/completeDimensions", "zrender/core/util", "../../util/model"], function(t) {
		function e(t) {
			for (var e = 0; e < t.length && null == t[e];) e++;
			return t[e]
		}
		function i(t) {
			var i = e(t);
			return null != i && !l.isArray(c(i))
		}
		function n(t, e, n) {
			t = t || [];
			var r = d[e.get("coordinateSystem")](t, e, n),
				s = r.dimensions,
				l = r.categoryAxisModel,
				u = "ordinal" === s[0].type ? 0 : "ordinal" === s[1].type ? 1 : -1,
				p = new a(s, e),
				f = o(r, t),
				m = l && i(t) ?
			function(t, e, i, n) {
				return n === u ? i : h(c(t), s[n])
			} : function(t, e, i, n) {
				var r = c(t);
				return h(r && r[n], s[n])
			};
			return p.initData(t, f, m), p
		}
		function r(t) {
			return "category" !== t && "time" !== t
		}
		function o(t, e) {
			var i = [];
			if (t.categoryAxisModel) {
				var n = t.categoryAxisModel.getCategories();
				if (n) {
					var r = e.length;
					if (l.isArray(e[0]) && e[0].length > 1) {
						i = [];
						for (var o = 0; r > o; o++) i[o] = n[e[o][0]]
					} else i = n.slice(0)
				}
			}
			return i
		}
		var a = t("../../data/List"),
			s = t("../../data/helper/completeDimensions"),
			l = t("zrender/core/util"),
			u = t("../../util/model"),
			c = u.getDataItemValue,
			h = u.converDataValue,
			d = {
				cartesian2d: function(t, e, i) {
					var n = i.getComponent("xAxis", e.get("xAxisIndex")),
						o = i.getComponent("yAxis", e.get("yAxisIndex")),
						a = n.get("type"),
						l = o.get("type"),
						u = "category" === l,
						c = "category" === a,
						h = [{
							name: "x",
							type: c ? "ordinal" : "float",
							stackable: r(a)
						}, {
							name: "y",
							type: u ? "ordinal" : "float",
							stackable: r(l)
						}];
					return s(h, t, ["x", "y", "z"]), {
						dimensions: h,
						categoryAxisModel: c ? n : u ? o : null
					}
				},
				polar: function(t, e, i) {
					var n = e.get("polarIndex") || 0,
						o = function(t) {
							return t.get("polarIndex") === n
						},
						a = i.findComponents({
							mainType: "angleAxis",
							filter: o
						})[0],
						l = i.findComponents({
							mainType: "radiusAxis",
							filter: o
						})[0],
						u = "category" === l.get("type"),
						c = "category" === a.get("type"),
						h = [{
							name: "radius",
							type: u ? "ordinal" : "float",
							stackable: r(l.get("type"))
						}, {
							name: "angle",
							type: c ? "ordinal" : "float",
							stackable: r(a.get("type"))
						}];
					return s(h, t, ["radius", "angle", "value"]), {
						dimensions: h,
						categoryAxisModel: c ? a : u ? l : null
					}
				},
				geo: function(t, e, i) {
					return {
						dimensions: s([{
							name: "lng"
						}, {
							name: "lat"
						}], t, ["lng", "lat", "value"])
					}
				}
			};
		return n
	}), e("echarts/chart/line/LineSeries", ["require", "../helper/createListFromArray", "../../model/Series"], function(t) {
		var e = t("../helper/createListFromArray"),
			i = t("../../model/Series");
		return i.extend({
			type: "series.line",
			dependencies: ["grid", "polar"],
			getInitialData: function(t, i) {
				return e(t.data, this, i)
			},
			defaultOption: {
				zlevel: 0,
				z: 2,
				coordinateSystem: "cartesian2d",
				legendHoverLink: !0,
				hoverAnimation: !0,
				xAxisIndex: 0,
				yAxisIndex: 0,
				polarIndex: 0,
				clipOverflow: !0,
				label: {
					normal: {
						position: "top"
					},
					emphasis: {
						position: "top"
					}
				},
				lineStyle: {
					normal: {
						width: 2,
						type: "solid"
					}
				},
				symbol: "emptyCircle",
				symbolSize: 4,
				showSymbol: !0,
				animationEasing: "linear"
			}
		})
	}), e("echarts/util/symbol", ["require", "./graphic", "zrender/core/BoundingRect"], function(t) {
		var e = t("./graphic"),
			i = t("zrender/core/BoundingRect"),
			n = e.extendShape({
				type: "triangle",
				shape: {
					cx: 0,
					cy: 0,
					width: 0,
					height: 0
				},
				buildPath: function(t, e) {
					var i = e.cx,
						n = e.cy,
						r = e.width / 2,
						o = e.height / 2;
					t.moveTo(i, n - o), t.lineTo(i + r, n + o), t.lineTo(i - r, n + o), t.closePath()
				}
			}),
			r = e.extendShape({
				type: "diamond",
				shape: {
					cx: 0,
					cy: 0,
					width: 0,
					height: 0
				},
				buildPath: function(t, e) {
					var i = e.cx,
						n = e.cy,
						r = e.width / 2,
						o = e.height / 2;
					t.moveTo(i, n - o), t.lineTo(i + r, n), t.lineTo(i, n + o), t.lineTo(i - r, n), t.closePath()
				}
			}),
			o = e.extendShape({
				type: "pin",
				shape: {
					x: 0,
					y: 0,
					width: 0,
					height: 0
				},
				buildPath: function(t, e) {
					var i = e.x,
						n = e.y,
						r = e.width / 5 * 3,
						o = Math.max(r, e.height),
						a = r / 2,
						s = a * a / (o - a),
						l = n - o + a + s,
						u = Math.asin(s / a),
						c = Math.cos(u) * a,
						h = Math.sin(u),
						d = Math.cos(u);
					t.arc(i, l, a, Math.PI - u, 2 * Math.PI + u);
					var p = .6 * a,
						f = .7 * a;
					t.bezierCurveTo(i + c - h * p, l + s + d * p, i, n - f, i, n), t.bezierCurveTo(i, n - f, i - c + h * p, l + s + d * p, i - c, l + s), t.closePath()
				}
			}),
			a = e.extendShape({
				type: "arrow",
				shape: {
					x: 0,
					y: 0,
					width: 0,
					height: 0
				},
				buildPath: function(t, e) {
					var i = e.height,
						n = e.width,
						r = e.x,
						o = e.y,
						a = n / 3 * 2;
					t.moveTo(r, o), t.lineTo(r + a, o + i), t.lineTo(r, o + i / 4 * 3), t.lineTo(r - a, o + i), t.lineTo(r, o), t.closePath()
				}
			}),
			s = {
				line: e.Line,
				rect: e.Rect,
				roundRect: e.Rect,
				square: e.Rect,
				circle: e.Circle,
				diamond: r,
				pin: o,
				arrow: a,
				triangle: n
			},
			l = {
				line: function(t, e, i, n, r) {
					r.x1 = t, r.y1 = e + n / 2, r.x2 = t + i, r.y2 = e + n / 2
				},
				rect: function(t, e, i, n, r) {
					r.x = t, r.y = e, r.width = i, r.height = n
				},
				roundRect: function(t, e, i, n, r) {
					r.x = t, r.y = e, r.width = i, r.height = n, r.r = Math.min(i, n) / 4
				},
				square: function(t, e, i, n, r) {
					var o = Math.min(i, n);
					r.x = t, r.y = e, r.width = o, r.height = o
				},
				circle: function(t, e, i, n, r) {
					r.cx = t + i / 2, r.cy = e + n / 2, r.r = Math.min(i, n) / 2
				},
				diamond: function(t, e, i, n, r) {
					r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r.height = n
				},
				pin: function(t, e, i, n, r) {
					r.x = t + i / 2, r.y = e + n / 2, r.width = i, r.height = n
				},
				arrow: function(t, e, i, n, r) {
					r.x = t + i / 2, r.y = e + n / 2, r.width = i, r.height = n
				},
				triangle: function(t, e, i, n, r) {
					r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r.height = n
				}
			},
			u = {};
		for (var c in s) u[c] = new s[c];
		var h = e.extendShape({
			type: "symbol",
			shape: {
				symbolType: "",
				x: 0,
				y: 0,
				width: 0,
				height: 0
			},
			beforeBrush: function() {
				var t = this.style,
					e = this.shape;
				"pin" === e.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"], t.textAlign = "center", t.textBaseline = "middle")
			},
			buildPath: function(t, e) {
				var i = e.symbolType,
					n = u[i];
				"none" !== e.symbolType && (n || (i = "rect", n = u[i]), l[i](e.x, e.y, e.width, e.height, n.shape), n.buildPath(t, n.shape))
			}
		}),
			d = function(t) {
				if ("image" !== this.type) {
					var e = this.style,
						i = this.shape;
					i && "line" === i.symbolType ? e.stroke = t : this.__isEmptyBrush ? (e.stroke = t, e.fill = "#fff") : (e.fill && (e.fill = t), e.stroke && (e.stroke = t)), this.dirty()
				}
			},
			p = {
				createSymbol: function(t, n, r, o, a, s) {
					var l = 0 === t.indexOf("empty");
					l && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
					var u;
					return u = 0 === t.indexOf("image://") ? new e.Image({
						style: {
							image: t.slice(8),
							x: n,
							y: r,
							width: o,
							height: a
						}
					}) : 0 === t.indexOf("path://") ? e.makePath(t.slice(7), {}, new i(n, r, o, a)) : new h({
						shape: {
							symbolType: t,
							x: n,
							y: r,
							width: o,
							height: a
						}
					}), u.__isEmptyBrush = l, u.setColor = d, u.setColor(s), u
				}
			};
		return p
	}), e("echarts/chart/helper/Symbol", ["require", "zrender/core/util", "../../util/symbol", "../../util/graphic", "../../util/number"], function(t) {
		function e(t) {
			return r.isArray(t) || (t = [+t, +t]), t
		}
		function i(t, e) {
			a.Group.call(this), this.updateData(t, e)
		}
		function n(t, e) {
			this.parent.drift(t, e)
		}
		var r = t("zrender/core/util"),
			o = t("../../util/symbol"),
			a = t("../../util/graphic"),
			s = t("../../util/number"),
			l = i.prototype;
		l._createSymbol = function(t, i, r) {
			this.removeAll();
			var s = i.hostModel,
				l = i.getItemVisual(r, "color"),
				u = o.createSymbol(t, -.5, -.5, 1, 1, l);
			u.attr({
				style: {
					strokeNoScale: !0
				},
				z2: 100,
				scale: [0, 0]
			}), u.drift = n;
			var c = e(i.getItemVisual(r, "symbolSize"));
			a.initProps(u, {
				scale: c
			}, s), this._symbolType = t, this.add(u)
		}, l.stopSymbolAnimation = function(t) {
			this.childAt(0).stopAnimation(t)
		}, l.getScale = function() {
			return this.childAt(0).scale
		}, l.highlight = function() {
			this.childAt(0).trigger("emphasis")
		}, l.downplay = function() {
			this.childAt(0).trigger("normal")
		}, l.setZ = function(t, e) {
			var i = this.childAt(0);
			i.zlevel = t, i.z = e
		}, l.setDraggable = function(t) {
			var e = this.childAt(0);
			e.draggable = t, e.cursor = t ? "move" : "pointer"
		}, l.updateData = function(t, i) {
			var n = t.getItemVisual(i, "symbol") || "circle",
				r = t.hostModel,
				o = e(t.getItemVisual(i, "symbolSize"));
			if (n !== this._symbolType) this._createSymbol(n, t, i);
			else {
				var s = this.childAt(0);
				a.updateProps(s, {
					scale: o
				}, r)
			}
			this._updateCommon(t, i, o), this._seriesModel = r
		};
		var u = ["itemStyle", "normal"],
			c = ["itemStyle", "emphasis"],
			h = ["label", "normal"],
			d = ["label", "emphasis"];
		return l._updateCommon = function(t, i, n) {
			var o = this.childAt(0),
				l = t.hostModel,
				p = t.getItemModel(i),
				f = p.getModel(u),
				m = t.getItemVisual(i, "color"),
				g = p.getModel(c).getItemStyle();
			o.rotation = p.getShallow("symbolRotate") * Math.PI / 180 || 0;
			var v = p.getShallow("symbolOffset");
			if (v) {
				var y = o.position;
				y[0] = s.parsePercent(v[0], n[0]), y[1] = s.parsePercent(v[1], n[1])
			}
			o.setColor(m), r.extend(o.style, f.getItemStyle(["color"]));
			var _ = p.getModel(h),
				x = p.getModel(d),
				b = t.dimensions[t.dimensions.length - 1],
				w = l.getFormattedLabel(i, "normal") || t.get(b, i),
				M = o.style;
			_.get("show") ? (a.setText(M, _, m), M.text = w) : M.text = "", x.getShallow("show") ? (a.setText(g, x, m), g.text = w) : g.text = "", a.setHoverStyle(o, g);
			var S = e(t.getItemVisual(i, "symbolSize"));
			if (o.off("mouseover").off("mouseout").off("emphasis").off("normal"), p.getShallow("hoverAnimation")) {
				var L = function() {
						var t = S[1] / S[0];
						this.animateTo({
							scale: [Math.max(1.1 * S[0], S[0] + 3), Math.max(1.1 * S[1], S[1] + 3 * t)]
						}, 400, "elasticOut")
					},
					C = function() {
						this.animateTo({
							scale: S
						}, 400, "elasticOut")
					};
				o.on("mouseover", L).on("mouseout", C).on("emphasis", L).on("normal", C)
			}
		}, l.fadeOut = function(t) {
			var e = this.childAt(0);
			e.style.text = "", a.updateProps(e, {
				scale: [0, 0]
			}, this._seriesModel, t)
		}, r.inherits(i, a.Group), i
	}), e("echarts/chart/helper/SymbolDraw", ["require", "../../util/graphic", "./Symbol"], function(t) {
		function e(t) {
			this.group = new n.Group, this._symbolCtor = t || r
		}
		function i(t, e, i) {
			var n = t.getItemLayout(e);
			return n && !isNaN(n[0]) && !isNaN(n[1]) && !(i && i(e)) && "none" !== t.getItemVisual(e, "symbol")
		}
		var n = t("../../util/graphic"),
			r = t("./Symbol"),
			o = e.prototype;
		return o.updateData = function(t, e) {
			var r = this.group,
				o = t.hostModel,
				a = this._data,
				s = this._symbolCtor;
			t.diff(a).add(function(n) {
				var o = t.getItemLayout(n);
				if (i(t, n, e)) {
					var a = new s(t, n);
					a.attr("position", o), t.setItemGraphicEl(n, a), r.add(a)
				}
			}).update(function(l, u) {
				var c = a.getItemGraphicEl(u),
					h = t.getItemLayout(l);
				return i(t, l, e) ? (c ? (c.updateData(t, l), n.updateProps(c, {
					position: h
				}, o)) : (c = new s(t, l), c.attr("position", h)), r.add(c), void t.setItemGraphicEl(l, c)) : void r.remove(c)
			}).remove(function(t) {
				var e = a.getItemGraphicEl(t);
				e && e.fadeOut(function() {
					r.remove(e)
				})
			}).execute(), this._data = t
		}, o.updateLayout = function() {
			var t = this._data;
			t && t.eachItemGraphicEl(function(e, i) {
				e.attr("position", t.getItemLayout(i))
			})
		}, o.remove = function(t) {
			var e = this.group,
				i = this._data;
			i && (t ? i.eachItemGraphicEl(function(t) {
				t.fadeOut(function() {
					e.remove(t)
				})
			}) : e.removeAll())
		}, e
	}), e("zrender/core/arrayDiff", ["require"], function(t) {
		function e(t, e) {
			return t === e
		}
		function i(t, e, i) {
			var n = {
				cmd: t,
				idx: e
			};
			return "=" === t && (n.idx1 = i), n
		}
		function n(t, e, n, r) {
			t.push(i(e, n, r))
		}
		function r(t, e, i, n, r, o, a, l) {
			var u, c, h, d = i > n,
				p = r > o,
				f = s(n - i),
				m = s(o - r);
			for (c = 0; f >= c; c++) for (h = 0; m >= h; h++) if (0 === c) l[h] = h;
			else if (0 === h) u = l[h], l[h] = c;
			else {
				var g = t[d ? i - c : c - 1 + i],
					v = e[p ? r - h : h - 1 + r],
					y = u + (a(g, v) ? 0 : 2),
					_ = l[h] + 1,
					x = l[h - 1] + 1;
				u = l[h], l[h] = _ > y ? y : _, x < l[h] && (l[h] = x)
			}
			return l
		}
		function o(t, e, i, a, s, l, u, c, h) {
			var d, p, f = [],
				m = a - i,
				g = l - s;
			if (m) if (g) if (1 === m) {
				var v = t[i],
					y = !1;
				for (p = 0; g > p; p++) u(v, e[p + s]) && !y ? (y = !0, n(f, "=", i, p + s)) : n(f, "+", p + s);
				y || n(f, "-", i)
			} else if (1 === g) {
				var _ = e[s],
					y = !1;
				for (d = 0; m > d; d++) u(_, t[d + i]) && !y ? (y = !0, n(f, "=", d + i, s)) : n(f, "-", d + i);
				y || n(f, "+", s)
			} else {
				var x = (m / 2 | 0) + i;
				r(t, e, i, x, s, l, u, c), r(t, e, a, x + 1, l, s, u, h);
				var b, w = 1 / 0,
					M = 0;
				for (p = 0; g >= p; p++) b = c[p] + h[g - p], w > b && (w = b, M = p);
				M += s, f = o(t, e, i, x, s, M, u, c, h);
				var S = o(t, e, x, a, M, l, u, c, h);
				for (d = 0; d < S.length; d++) f.push(S[d])
			} else for (d = 0; m > d; d++) n(f, "-", d + i);
			else for (p = 0; g > p; p++) n(f, "+", p + s);
			return f
		}
		function a(t, i, r) {
			r = r || e;
			var a, s, l = t.length,
				u = i.length,
				c = Math.min(l, u),
				h = [];
			for (a = 0; c > a && r(t[a], i[a]); a++) n(h, "=", a, a);
			for (s = 0; c > s && r(t[l - s - 1], i[u - s - 1]); s++);
			if (l - s >= a || u - s >= a) {
				var d = o(t, i, a, l - s, a, u - s, r, [], []);
				for (a = 0; a < d.length; a++) h.push(d[a]);
				for (a = 0; s > a; a++) n(h, "=", l - s + a, u - s + a)
			}
			return h
		}
		var s = Math.abs;
		return a
	}), e("echarts/chart/line/lineAnimationDiff", ["require", "zrender/core/arrayDiff"], function(t) {
		function e(t) {
			return t >= 0 ? 1 : -1
		}
		function i(t, i, n) {
			for (var r, o = t.getBaseAxis(), a = t.getOtherAxis(o), s = o.onZero ? 0 : a.scale.getExtent()[0], l = a.dim, u = "x" === l || "radius" === l ? 1 : 0, c = i.stackedOn, h = i.get(l, n); c && e(c.get(l, n)) === e(h);) {
				r = c;
				break
			}
			var d = [];
			return d[u] = i.get(o.dim, n), d[1 - u] = r ? r.get(l, n, !0) : s, t.dataToPoint(d)
		}
		var n = t("zrender/core/arrayDiff");
		return function(t, e, r, o, a, s) {
			for (var l = e.mapArray(e.getId), u = t.mapArray(t.getId), c = [], h = [], d = [], p = [], f = [], m = [], g = [], v = n(u, l), y = s.dimensions, _ = 0; _ < v.length; _++) {
				var x = v[_],
					b = !0;
				switch (x.cmd) {
				case "=":
					c.push(t.getItemLayout(x.idx)), h.push(e.getItemLayout(x.idx1)), d.push(r[x.idx]), p.push(o[x.idx1]), g.push(e.getRawIndex(x.idx1));
					break;
				case "+":
					var w = x.idx;
					c.push(a.dataToPoint([e.get(y[0], w, !0), e.get(y[1], w, !0)])), h.push(e.getItemLayout(w).slice()), d.push(i(a, e, w)), p.push(o[w]), g.push(e.getRawIndex(w));
					break;
				case "-":
					var w = x.idx,
						M = t.getRawIndex(w);
					M !== w ? (c.push(t.getItemLayout(w)), h.push(s.dataToPoint([t.get(y[0], w, !0), t.get(y[1], w, !0)])), d.push(r[w]), p.push(i(s, t, w)), g.push(M)) : b = !1
				}
				b && (f.push(x), m.push(m.length))
			}
			m.sort(function(t, e) {
				return g[t] - g[e]
			});
			for (var S = [], L = [], C = [], T = [], P = [], _ = 0; _ < m.length; _++) {
				var w = m[_];
				S[_] = c[w], L[_] = h[w], C[_] = d[w], T[_] = p[w], P[_] = f[w]
			}
			return {
				current: S,
				next: L,
				stackedOnCurrent: C,
				stackedOnNext: T,
				status: P
			}
		}
	}), e("echarts/chart/line/poly", ["require", "zrender/graphic/Path", "zrender/core/vector"], function(t) {
		function e(t, e, i, n, f, m, g, v, y) {
			for (var _ = i, x = 0; f > x; x++) {
				var b = e[_];
				if (_ >= n || 0 > _ || isNaN(b[0]) || isNaN(b[1])) break;
				if (_ === i) t[m > 0 ? "moveTo" : "lineTo"](b[0], b[1]), c(d, b);
				else if (y > 0) {
					var w = _ - m,
						M = _ + m;
					m > 0 ? (w = a(w, i), M = o(M, n - 1)) : (M = a(M, 0), w = o(w, i));
					var S = e[w],
						L = e[M];
					(isNaN(L[0]) || isNaN(L[1])) && (L = b), r.sub(h, L, S), u(p, b, h, -y / 2), s(d, d, v), l(d, d, g), s(p, p, v), l(p, p, g), t.bezierCurveTo(d[0], d[1], p[0], p[1], b[0], b[1]), u(d, b, h, y / 2)
				} else t.lineTo(b[0], b[1]);
				_ += m
			}
			return x
		}
		function i(t) {
			for (var e = [1 / 0, 1 / 0], i = [-(1 / 0), -(1 / 0)], n = 0; n < t.length; n++) {
				var r = t[n];
				r[0] < e[0] && (e[0] = r[0]), r[1] < e[1] && (e[1] = r[1]), r[0] > i[0] && (i[0] = r[0]), r[1] > i[1] && (i[1] = r[1])
			}
			return {
				min: e,
				max: i
			}
		}
		var n = t("zrender/graphic/Path"),
			r = t("zrender/core/vector"),
			o = Math.min,
			a = Math.max,
			s = r.min,
			l = r.max,
			u = r.scaleAndAdd,
			c = r.copy,
			h = [],
			d = [],
			p = [];
		return {
			Polyline: n.extend({
				type: "ec-polyline",
				shape: {
					points: [],
					smooth: 0
				},
				style: {
					fill: null,
					stroke: "#000",
					smooth: 0
				},
				buildPath: function(t, n) {
					for (var r = n.points, o = 0, a = r.length, s = i(r); a > o;) o += e(t, r, o, a, a, 1, s.min, s.max, n.smooth) + 1
				}
			}),
			Polygon: n.extend({
				type: "ec-polygon",
				shape: {
					points: [],
					stackedOnPoints: [],
					smooth: 0,
					stackedOnSmooth: 0
				},
				buildPath: function(t, n) {
					for (var r = n.points, o = n.stackedOnPoints, a = 0, s = r.length, l = i(r), u = i(o); s > a;) {
						var c = e(t, r, a, s, s, 1, l.min, l.max, n.smooth);
						e(t, o, a + c - 1, s, c, -1, u.min, u.max, n.stackedOnSmooth), a += c + 1, t.closePath()
					}
				}
			})
		}
	}), e("echarts/chart/line/LineView", ["require", "zrender/core/util", "../helper/SymbolDraw", "../helper/Symbol", "./lineAnimationDiff", "../../util/graphic", "./poly", "../../view/Chart"], function(t) {
		function e(t, e) {
			if (t.length === e.length) {
				for (var i = 0; i < t.length; i++) {
					var n = t[i],
						r = e[i];
					if (n[0] !== r[0] || n[1] !== r[1]) return
				}
				return !0
			}
		}
		function i(t) {
			return "number" == typeof t ? t : t ? .3 : 0
		}
		function n(t) {
			var e = t.getGlobalExtent();
			if (t.onBand) {
				var i = t.getBandWidth() / 2 - 1,
					n = e[1] > e[0] ? 1 : -1;
				e[0] += n * i, e[1] -= n * i
			}
			return e
		}
		function r(t) {
			return t >= 0 ? 1 : -1
		}
		function o(t, e) {
			var i = t.getBaseAxis(),
				n = t.getOtherAxis(i),
				o = i.onZero ? 0 : n.scale.getExtent()[0],
				a = n.dim,
				s = "x" === a || "radius" === a ? 1 : 0;
			return e.mapArray([a], function(n, l) {
				for (var u, c = e.stackedOn; c && r(c.get(a, l)) === r(n);) {
					u = c;
					break
				}
				var h = [];
				return h[s] = e.get(i.dim, l), h[1 - s] = u ? u.get(a, l, !0) : o, t.dataToPoint(h)
			}, !0)
		}
		function a(t, e) {
			return null != e.dataIndex ? e.dataIndex : null != e.name ? t.indexOfName(e.name) : void 0
		}
		function s(t, e, i) {
			var r = n(t.getAxis("x")),
				o = n(t.getAxis("y")),
				a = t.getBaseAxis().isHorizontal(),
				s = r[0],
				l = o[0],
				u = r[1] - s,
				c = o[1] - l;
			i.get("clipOverflow") || (a ? (l -= c, c *= 3) : (s -= u, u *= 3));
			var h = new f.Rect({
				shape: {
					x: s,
					y: l,
					width: u,
					height: c
				}
			});
			return e && (h.shape[a ? "width" : "height"] = 0, f.initProps(h, {
				shape: {
					width: u,
					height: c
				}
			}, i)), h
		}
		function l(t, e, i) {
			var n = t.getAngleAxis(),
				r = t.getRadiusAxis(),
				o = r.getExtent(),
				a = n.getExtent(),
				s = Math.PI / 180,
				l = new f.Sector({
					shape: {
						cx: t.cx,
						cy: t.cy,
						r0: o[0],
						r: o[1],
						startAngle: -a[0] * s,
						endAngle: -a[1] * s,
						clockwise: n.inverse
					}
				});
			return e && (l.shape.endAngle = -a[0] * s, f.initProps(l, {
				shape: {
					endAngle: -a[1] * s
				}
			}, i)), l
		}
		function u(t, e, i) {
			return "polar" === t.type ? l(t, e, i) : s(t, e, i)
		}
		var c = t("zrender/core/util"),
			h = t("../helper/SymbolDraw"),
			d = t("../helper/Symbol"),
			p = t("./lineAnimationDiff"),
			f = t("../../util/graphic"),
			m = t("./poly"),
			g = t("../../view/Chart");
		return g.extend({
			type: "line",
			init: function() {
				var t = new f.Group,
					e = new h;
				this.group.add(e.group), this.group.add(t), this._symbolDraw = e, this._lineGroup = t
			},
			render: function(t, n, r) {
				var a = t.coordinateSystem,
					s = this.group,
					l = t.getData(),
					h = t.getModel("lineStyle.normal"),
					d = t.getModel("areaStyle.normal"),
					p = l.mapArray(l.getItemLayout, !0),
					f = "polar" === a.type,
					m = this._coordSys,
					g = this._symbolDraw,
					v = this._polyline,
					y = this._polygon,
					_ = this._lineGroup,
					x = t.get("animation"),
					b = !d.isEmpty(),
					w = o(a, l),
					M = t.get("showSymbol"),
					S = M && !f && !t.get("showAllSymbol") && this._getSymbolIgnoreFunc(l, a),
					L = this._data;
				L && L.eachItemGraphicEl(function(t, e) {
					t.__temp && (s.remove(t), L.setItemGraphicEl(e, null))
				}), M || g.remove(), v && m.type === a.type ? (x && _.setClipPath(u(a, !1, t)), M && g.updateData(l, S), l.eachItemGraphicEl(function(t) {
					t.stopAnimation(!0)
				}), e(this._stackedOnPoints, w) && e(this._points, p) || (x ? this._updateAnimation(l, w, a, r) : (v.setShape({
					points: p
				}), y && y.setShape({
					points: p,
					stackedOnPoints: w
				}))), s.add(_)) : (M && g.updateData(l, S), v = this._newPolyline(s, p, a, x), b && (y = this._newPolygon(s, p, w, a, x)), _.setClipPath(u(a, !0, t))), v.setStyle(c.defaults(h.getLineStyle(), {
					stroke: l.getVisual("color"),
					lineJoin: "bevel"
				}));
				var C = t.get("smooth");
				if (C = i(t.get("smooth")), v.shape.smooth = C, y) {
					var T = y.shape,
						P = l.stackedOn,
						A = 0;
					if (y.style.opacity = .7, y.setStyle(c.defaults(d.getAreaStyle(), {
						fill: l.getVisual("color"),
						lineJoin: "bevel"
					})), T.smooth = C, P) {
						var D = P.hostModel;
						A = i(D.get("smooth"))
					}
					T.stackedOnSmooth = A
				}
				this._data = l, this._coordSys = a, this._stackedOnPoints = w, this._points = p
			},
			highlight: function(t, e, i, n) {
				var r = t.getData(),
					o = a(r, n);
				if (null != o && o >= 0) {
					var s = r.getItemGraphicEl(o);
					if (!s) {
						var l = r.getItemLayout(o);
						s = new d(r, o, i), s.position = l, s.setZ(t.get("zlevel"), t.get("z")), s.ignore = isNaN(l[0]) || isNaN(l[1]), s.__temp = !0, r.setItemGraphicEl(o, s), s.stopSymbolAnimation(!0), this.group.add(s)
					}
					s.highlight()
				} else g.prototype.highlight.call(this, t, e, i, n)
			},
			downplay: function(t, e, i, n) {
				var r = t.getData(),
					o = a(r, n);
				if (null != o && o >= 0) {
					var s = r.getItemGraphicEl(o);
					s && (s.__temp ? (r.setItemGraphicEl(o, null), this.group.remove(s)) : s.downplay())
				} else g.prototype.downplay.call(this, t, e, i, n)
			},
			_newPolyline: function(t, e) {
				var i = this._polyline;
				return i && t.remove(i), i = new m.Polyline({
					shape: {
						points: e
					},
					silent: !0,
					z2: 10
				}), this._lineGroup.add(i), this._polyline = i, i
			},
			_newPolygon: function(t, e, i) {
				var n = this._polygon;
				return n && t.remove(n), n = new m.Polygon({
					shape: {
						points: e,
						stackedOnPoints: i
					},
					silent: !0
				}), this._lineGroup.add(n), this._polygon = n, n
			},
			_getSymbolIgnoreFunc: function(t, e) {
				var i = e.getAxesByScale("ordinal")[0];
				return i && i.isLabelIgnored ? c.bind(i.isLabelIgnored, i) : void 0
			},
			_updateAnimation: function(t, e, i, n) {
				var r = this._polyline,
					o = this._polygon,
					a = t.hostModel,
					s = p(this._data, t, this._stackedOnPoints, e, this._coordSys, i);
				r.shape.points = s.current, f.updateProps(r, {
					shape: {
						points: s.next
					}
				}, a), o && (o.setShape({
					points: s.current,
					stackedOnPoints: s.stackedOnCurrent
				}), f.updateProps(o, {
					shape: {
						points: s.next,
						stackedOnPoints: s.stackedOnNext
					}
				}, a));
				for (var l = [], u = s.status, c = 0; c < u.length; c++) {
					var h = u[c].cmd;
					if ("=" === h) {
						var d = t.getItemGraphicEl(u[c].idx1);
						d && l.push({
							el: d,
							ptIdx: c
						})
					}
				}
				r.animators && r.animators.length && r.animators[0].during(function() {
					for (var t = 0; t < l.length; t++) {
						var e = l[t].el;
						e.attr("position", r.shape.points[l[t].ptIdx])
					}
				})
			},
			remove: function(t) {
				var e = this.group;
				e.remove(this._lineGroup), this._symbolDraw.remove(!0)
			}
		})
	}), e("echarts/visual/symbol", ["require"], function(t) {
		return function(t, e, i, n, r) {
			n.eachRawSeriesByType(t, function(t) {
				var r = t.getData(),
					o = t.get("symbol") || e,
					a = t.get("symbolSize");
				r.setVisual({
					legendSymbol: i || o,
					symbol: o,
					symbolSize: a
				}), n.isSeriesFiltered(t) || ("function" == typeof a && r.each(function(e) {
					var i = t.getRawValue(e),
						n = t.getDataParams(e);
					r.setItemVisual(e, "symbolSize", a(i, n))
				}), r.each(function(t) {
					var e = r.getItemModel(t),
						i = e.get("symbol", !0),
						n = e.get("symbolSize", !0);
					null != i && r.setItemVisual(t, "symbol", i), null != n && r.setItemVisual(t, "symbolSize", n)
				}))
			})
		}
	}), e("echarts/layout/points", ["require"], function(t) {
		return function(t, e, i) {
			e.eachSeriesByType(t, function(t) {
				var e = t.getData(),
					i = t.coordinateSystem,
					n = i.dimensions;
				e.each(n, function(t, n, r) {
					var o;
					o = isNaN(t) || isNaN(n) ? [NaN, NaN] : i.dataToPoint([t, n]), e.setItemLayout(r, o)
				}, !0)
			})
		}
	}), e("echarts/chart/line", ["require", "zrender/core/util", "../echarts", "./line/LineSeries", "./line/LineView", "../visual/symbol", "../layout/points"], function(t) {
		var e = t("zrender/core/util"),
			i = t("../echarts");
		t("./line/LineSeries"), t("./line/LineView"), i.registerVisualCoding("chart", e.curry(t("../visual/symbol"), "line", "circle", "line")), i.registerLayout(e.curry(t("../layout/points"), "line"))
	}), e("echarts/scale/Scale", ["require", "../util/clazz"], function(t) {
		function e() {
			this._extent = [1 / 0, -(1 / 0)], this._interval = 0, this.init && this.init.apply(this, arguments)
		}
		var i = t("../util/clazz"),
			n = e.prototype;
		return n.contain = function(t) {
			var e = this._extent;
			return t >= e[0] && t <= e[1]
		}, n.normalize = function(t) {
			var e = this._extent;
			return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
		}, n.scale = function(t) {
			var e = this._extent;
			return t * (e[1] - e[0]) + e[0]
		}, n.unionExtent = function(t) {
			var e = this._extent;
			t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
		}, n.getExtent = function() {
			return this._extent.slice()
		}, n.setExtent = function(t, e) {
			var i = this._extent;
			isNaN(t) || (i[0] = t), isNaN(e) || (i[1] = e)
		}, n.getTicksLabels = function() {
			for (var t = [], e = this.getTicks(), i = 0; i < e.length; i++) t.push(this.getLabel(e[i]));
			return t
		}, i.enableClassExtend(e), i.enableClassManagement(e, {
			registerWhenExtend: !0
		}), e
	}), e("echarts/scale/Ordinal", ["require", "zrender/core/util", "./Scale"], function(t) {
		var e = t("zrender/core/util"),
			i = t("./Scale"),
			n = i.prototype,
			r = i.extend({
				type: "ordinal",
				init: function(t, e) {
					this._data = t, this._extent = e || [0, t.length - 1]
				},
				contain: function(t) {
					return n.contain.call(this, t) && null != this._data[t]
				},
				normalize: function(t) {
					return "string" == typeof t && (t = e.indexOf(this._data, t)), n.normalize.call(this, t)
				},
				scale: function(t) {
					return Math.round(n.scale.call(this, t))
				},
				getTicks: function() {
					for (var t = [], e = this._extent, i = e[0]; i <= e[1];) t.push(i), i++;
					return t
				},
				getLabel: function(t) {
					return this._data[t]
				},
				count: function() {
					return this._extent[1] - this._extent[0] + 1
				},
				niceTicks: e.noop,
				niceExtent: e.noop
			});
		return r.create = function() {
			return new r
		}, r
	}), e("echarts/scale/Interval", ["require", "../util/number", "../util/format", "./Scale"], function(t) {
		var e = t("../util/number"),
			i = t("../util/format"),
			n = t("./Scale"),
			r = Math.floor,
			o = Math.ceil,
			a = n.extend({
				type: "interval",
				_interval: 0,
				setExtent: function(t, e) {
					var i = this._extent;
					isNaN(t) || (i[0] = t), isNaN(e) || (i[1] = e)
				},
				unionExtent: function(t) {
					var e = this._extent;
					t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), a.prototype.setExtent.call(this, e[0], e[1])
				},
				getInterval: function() {
					return this._interval || this.niceTicks(), this._interval
				},
				setInterval: function(t) {
					this._interval = t, this._niceExtent = this._extent.slice()
				},
				getTicks: function() {
					this._interval || this.niceTicks();
					var t = this._interval,
						i = this._extent,
						n = [],
						r = 1e4;
					if (t) {
						var o = this._niceExtent;
						i[0] < o[0] && n.push(i[0]);
						for (var a = o[0]; a <= o[1];) if (n.push(a), a = e.round(a + t), n.length > r) return [];
						i[1] > o[1] && n.push(i[1])
					}
					return n
				},
				getTicksLabels: function() {
					for (var t = [], e = this.getTicks(), i = 0; i < e.length; i++) t.push(this.getLabel(e[i]));
					return t
				},
				getLabel: function(t) {
					return i.addCommas(t)
				},
				niceTicks: function(t) {
					t = t || 10;
					var i = this._extent,
						n = i[1] - i[0];
					if (!(n === 1 / 0 || 0 >= n)) {
						var a = Math.pow(10, Math.floor(Math.log(n / t) / Math.LN10)),
							s = t / n * a;.15 >= s ? a *= 10 : .3 >= s ? a *= 5 : .5 >= s ? a *= 3 : .75 >= s && (a *= 2);
						var l = [e.round(o(i[0] / a) * a), e.round(r(i[1] / a) * a)];
						this._interval = a, this._niceExtent = l
					}
				},
				niceExtent: function(t, i, n) {
					var a = this._extent;
					if (a[0] === a[1]) {
						var s = a[0] / 2 || 1;
						a[0] -= s, a[1] += s
					}
					if (a[1] === -(1 / 0) && a[0] === 1 / 0) return a[1] = 1, a[0] = -1, this._niceExtent = [-1, 1], void(this._interval = .5);
					this.niceTicks(t, i, n);
					var l = this._interval;
					i || (a[0] = e.round(r(a[0] / l) * l)), n || (a[1] = e.round(o(a[1] / l) * l))
				}
			});
		return a.create = function() {
			return new a
		}, a
	}), e("echarts/scale/Time", ["require", "zrender/core/util", "../util/number", "./Interval"], function(t) {
		var e = t("zrender/core/util"),
			i = t("../util/number"),
			n = t("./Interval"),
			r = n.prototype,
			o = Math.ceil,
			a = Math.floor,
			s = function(t, e, i, n) {
				for (; n > i;) {
					var r = i + n >>> 1;
					t[r][2] < e ? i = r + 1 : n = r
				}
				return i
			},
			l = function(t) {
				return 10 > t ? "0" + t : t
			},
			u = function(t, e) {
				("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t = "MM-dd\nyyyy");
				var n = i.parseDate(e),
					r = n.getFullYear(),
					o = n.getMonth() + 1,
					a = n.getDate(),
					s = n.getHours(),
					u = n.getMinutes(),
					c = n.getSeconds();
				return t = t.replace("MM", l(o)).toLowerCase().replace("yyyy", r).replace("yy", r % 100).replace("dd", l(a)).replace("d", a).replace("hh", l(s)).replace("h", s).replace("mm", l(u)).replace("m", u).replace("ss", l(c)).replace("s", c)
			},
			c = n.extend({
				type: "time",
				getLabel: function(t) {
					var e = this._stepLvl,
						i = new Date(t);
					return u(e[0], i)
				},
				niceTicks: function(t) {
					t = t || 10;
					var e = this._extent,
						i = e[1] - e[0],
						n = i / t,
						r = h.length,
						l = s(h, n, 0, r),
						u = h[Math.min(l, r - 1)],
						c = u[2],
						d = [o(e[0] / c) * c, a(e[1] / c) * c];
					this._stepLvl = u, this._interval = c, this._niceExtent = d
				}
			});
		e.each(["contain", "normalize"], function(t) {
			c.prototype[t] = function(e) {
				return e = +i.parseDate(e), r[t].call(this, e)
			}
		});
		var h = [
			["hh:mm:ss", 1, 1e3],
			["hh:mm:ss", 5, 5e3],
			["hh:mm:ss", 10, 1e4],
			["hh:mm:ss", 15, 15e3],
			["hh:mm:ss", 30, 3e4],
			["hh:mm\nMM-dd", 1, 6e4],
			["hh:mm\nMM-dd", 5, 3e5],
			["hh:mm\nMM-dd", 10, 6e5],
			["hh:mm\nMM-dd", 15, 9e5],
			["hh:mm\nMM-dd", 30, 18e5],
			["hh:mm\nMM-dd", 1, 36e5],
			["hh:mm\nMM-dd", 2, 72e5],
			["hh:mm\nMM-dd", 6, 216e5],
			["hh:mm\nMM-dd", 12, 432e5],
			["MM-dd\nyyyy", 1, 864e5],
			["week", 7, 6048e5],
			["month", 1, 26784e5],
			["quarter", 3, 8208e6],
			["half-year", 6, 16416e6],
			["year", 1, 32832e6]
		];
		return c.create = function() {
			return new c
		}, c
	}), e("echarts/scale/Log", ["require", "zrender/core/util", "./Scale", "../util/number", "./Interval"], function(t) {
		var e = t("zrender/core/util"),
			i = t("./Scale"),
			n = t("../util/number"),
			r = t("./Interval"),
			o = i.prototype,
			a = r.prototype,
			s = Math.floor,
			l = Math.ceil,
			u = Math.pow,
			c = 10,
			h = Math.log,
			d = i.extend({
				type: "log",
				getTicks: function() {
					return e.map(a.getTicks.call(this), function(t) {
						return n.round(u(c, t))
					})
				},
				getLabel: a.getLabel,
				scale: function(t) {
					return t = o.scale.call(this, t), u(c, t)
				},
				setExtent: function(t, e) {
					t = h(t) / h(c), e = h(e) / h(c), a.setExtent.call(this, t, e)
				},
				getExtent: function() {
					var t = o.getExtent.call(this);
					return t[0] = u(c, t[0]), t[1] = u(c, t[1]), t
				},
				unionExtent: function(t) {
					t[0] = h(t[0]) / h(c), t[1] = h(t[1]) / h(c), o.unionExtent.call(this, t)
				},
				niceTicks: function(t) {
					t = t || 10;
					var e = this._extent,
						i = e[1] - e[0];
					if (!(i === 1 / 0 || 0 >= i)) {
						var r = u(10, s(h(i / t) / Math.LN10)),
							o = t / i * r;.5 >= o && (r *= 10);
						var a = [n.round(l(e[0] / r) * r), n.round(s(e[1] / r) * r)];
						this._interval = r, this._niceExtent = a
					}
				},
				niceExtent: a.niceExtent
			});
		return e.each(["contain", "normalize"], function(t) {
			d.prototype[t] = function(e) {
				return e = h(e) / h(c), o[t].call(this, e)
			}
		}), d.create = function() {
			return new d
		}, d
	}), e("echarts/coord/axisHelper", ["require", "../scale/Ordinal", "../scale/Interval", "../scale/Time", "../scale/Log", "../scale/Scale", "../util/number", "zrender/core/util", "zrender/contain/text"], function(t) {
		var e = t("../scale/Ordinal"),
			i = t("../scale/Interval");
		t("../scale/Time"), t("../scale/Log");
		var n = t("../scale/Scale"),
			r = t("../util/number"),
			o = t("zrender/core/util"),
			a = t("zrender/contain/text"),
			s = {};
		return s.niceScaleExtent = function(t, e) {
			var i = t.scale;
			if ("ordinal" !== i.type) {
				var n = e.get("min"),
					a = e.get("max"),
					s = e.get("boundaryGap");
				o.isArray(s) || (s = [s || 0, s || 0]), s[0] = r.parsePercent(s[0], 1), s[1] = r.parsePercent(s[1], 1);
				var l = i.getExtent(),
					u = l[1] - l[0],
					c = !0,
					h = !0;
				null == n && (n = l[0] - s[0] * u, c = !1), null == a && (a = l[1] + s[1] * u, h = !1), "dataMin" === n && (n = l[0]), "dataMax" === a && (a = l[1]), i.setExtent(n, a), i.niceExtent(e.get("splitNumber"), c, h);
				var d = e.get("interval");
				null != d && i.setInterval && i.setInterval(d)
			}
		}, s.createScaleByModel = function(t, r) {
			if (r = r || t.get("type")) switch (r) {
			case "category":
				return new e(t.getCategories(), [1 / 0, -(1 / 0)]);
			case "value":
				return new i;
			default:
				return (n.getClass(r) || i).create(t)
			}
		}, s.ifAxisCrossZero = function(t) {
			var e = t.scale.getExtent(),
				i = e[0],
				n = e[1],
				r = t.model.get("min"),
				o = t.model.get("max");
			return isNaN(r) || (i = Math.min(r, i)), isNaN(o) || (n = Math.max(o, n)), !(i > 0 && n > 0 || 0 > i && 0 > n) || s.ifAxisNeedsCrossZero(t)
		}, s.ifAxisNeedsCrossZero = function(t) {
			return !t.model.get("scale")
		}, s.getAxisLabelInterval = function(t, e, i, n) {
			for (var r, o = 0, s = 0, l = 0; l < t.length; l++) {
				var u = t[l],
					c = a.getBoundingRect(e[l], i, "center", "top");
				c[n ? "x" : "y"] += u, c[n ? "width" : "height"] *= 1.5, r ? r.intersect(c) ? (s++, o = Math.max(o, s)) : (r.union(c), s = 0) : r = c.clone()
			}
			return o
		}, s.getFormattedLabels = function(t, e) {
			var i = t.scale,
				n = i.getTicksLabels(),
				r = i.getTicks();
			return "string" == typeof e ? (e = function(t) {
				return function(e) {
					return t.replace("{value}", e)
				}
			}(e), o.map(n, e)) : "function" == typeof e ? o.map(r, function(n, r) {
				return e("category" === t.type ? i.getLabel(n) : n, r)
			}, this) : n
		}, s
	}), e("echarts/coord/cartesian/Cartesian", ["require", "zrender/core/util"], function(t) {
		function e(t) {
			return this._axes[t]
		}
		var i = t("zrender/core/util"),
			n = function(t) {
				this._axes = {}, this._dimList = [], this.name = t || ""
			};
		return n.prototype = {
			constructor: n,
			type: "cartesian",
			getAxis: function(t) {
				return this._axes[t]
			},
			getAxes: function() {
				return i.map(this._dimList, e, this)
			},
			getAxesByScale: function(t) {
				return t = t.toLowerCase(), i.filter(this.getAxes(), function(e) {
					return e.scale.type === t
				})
			},
			addAxis: function(t) {
				var e = t.dim;
				this._axes[e] = t, this._dimList.push(e)
			},
			dataToCoord: function(t) {
				return this._dataCoordConvert(t, "dataToCoord")
			},
			coordToData: function(t) {
				return this._dataCoordConvert(t, "coordToData")
			},
			_dataCoordConvert: function(t, e) {
				for (var i = this._dimList, n = t instanceof Array ? [] : {}, r = 0; r < i.length; r++) {
					var o = i[r],
						a = this._axes[o];
					n[o] = a[e](t[o])
				}
				return n
			}
		}, n
	}), e("echarts/coord/cartesian/Cartesian2D", ["require", "zrender/core/util", "./Cartesian"], function(t) {
		function e(t) {
			n.call(this, t), this.dimensions = ["x", "y"]
		}
		var i = t("zrender/core/util"),
			n = t("./Cartesian");
		return e.prototype = {
			constructor: e,
			type: "cartesian2d",
			getBaseAxis: function() {
				return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x")
			},
			containPoint: function(t) {
				var e = this.getAxis("x"),
					i = this.getAxis("y");
				return e.contain(e.toLocalCoord(t[0])) && i.contain(i.toLocalCoord(t[1]))
			},
			containData: function(t) {
				return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1])
			},
			dataToPoints: function(t, e) {
				return t.mapArray(["x", "y"], function(t, e) {
					return this.dataToPoint([t, e])
				}, e, this)
			},
			dataToPoint: function(t, e) {
				var i = this.getAxis("x"),
					n = this.getAxis("y");
				return [i.toGlobalCoord(i.dataToCoord(t[0], e)), n.toGlobalCoord(n.dataToCoord(t[1], e))]
			},
			pointToData: function(t, e) {
				var i = this.getAxis("x"),
					n = this.getAxis("y");
				return [i.coordToData(i.toLocalCoord(t[0]), e), n.coordToData(n.toLocalCoord(t[1]), e)]
			},
			getOtherAxis: function(t) {
				return this.getAxis("x" === t.dim ? "y" : "x")
			}
		}, i.inherits(e, n), e
	}), e("echarts/coord/Axis", ["require", "../util/number", "zrender/core/util"], function(t) {
		function e(t, e) {
			var i = t[1] - t[0],
				n = e,
				r = i / n / 2;
			t[0] += r, t[1] -= r
		}
		var i = t("../util/number"),
			n = i.linearMap,
			r = t("zrender/core/util"),
			o = function(t, e, i) {
				this.dim = t, this.scale = e, this._extent = i || [0, 0], this.inverse = !1, this.onBand = !1
			};
		return o.prototype = {
			constructor: o,
			contain: function(t) {
				var e = this._extent,
					i = Math.min(e[0], e[1]),
					n = Math.max(e[0], e[1]);
				return t >= i && n >= t
			},
			containData: function(t) {
				return this.contain(this.dataToCoord(t))
			},
			getExtent: function() {
				var t = this._extent.slice();
				return t
			},
			getPixelPrecision: function(t) {
				return i.getPixelPrecision(t || this.scale.getExtent(), this._extent)
			},
			setExtent: function(t, e) {
				var i = this._extent;
				i[0] = t, i[1] = e
			},
			dataToCoord: function(t, i) {
				t = this.scale.normalize(t);
				var r = this.getExtent(),
					o = this.scale;
				return this.onBand && "ordinal" === o.type && e(r, o.count()), n(t, [0, 1], r, i)
			},
			coordToData: function(t, i) {
				var r = this.getExtent();
				this.onBand && e(r, this.scale.count());
				var o = n(t, r, [0, 1], i);
				return this.scale.scale(o)
			},
			getTicksCoords: function() {
				if (this.onBand) {
					for (var t = this.getBands(), e = [], i = 0; i < t.length; i++) e.push(t[i][0]);
					return t[i - 1] && e.push(t[i - 1][1]), e
				}
				return r.map(this.scale.getTicks(), this.dataToCoord, this)
			},
			getLabelsCoords: function() {
				if (this.onBand) {
					for (var t, e = this.getBands(), i = [], n = 0; n < e.length; n++) t = e[n], i.push((t[0] + t[1]) / 2);
					return i
				}
				return r.map(this.scale.getTicks(), this.dataToCoord, this)
			},
			getBands: function() {
				for (var t = this.getExtent(), e = [], i = this.scale.count(), n = t[0], r = t[1], o = r - n, a = 0; i > a; a++) e.push([o * a / i + n, o * (a + 1) / i + n]);
				return e
			},
			getBandWidth: function() {
				var t = this._extent,
					e = this.scale.getExtent(),
					i = e[1] - e[0] + (this.onBand ? 1 : 0),
					n = Math.abs(t[1] - t[0]);
				return Math.abs(n) / i
			}
		}, o
	}), e("echarts/coord/cartesian/axisLabelInterval", ["require", "zrender/core/util", "../axisHelper"], function(t) {
		var e = t("zrender/core/util"),
			i = t("../axisHelper");
		return function(t) {
			var n = t.model,
				r = n.getModel("axisLabel"),
				o = r.get("interval");
			return "category" !== t.type || "auto" !== o ? "auto" === o ? 0 : o : i.getAxisLabelInterval(e.map(t.scale.getTicks(), t.dataToCoord, t), n.getFormattedLabels(), r.getModel("textStyle").getFont(), t.isHorizontal())
		}
	}), e("echarts/coord/cartesian/Axis2D", ["require", "zrender/core/util", "../Axis", "./axisLabelInterval"], function(t) {
		var e = t("zrender/core/util"),
			i = t("../Axis"),
			n = t("./axisLabelInterval"),
			r = function(t, e, n, r, o) {
				i.call(this, t, e, n), this.type = r || "value", this.position = o || "bottom"
			};
		return r.prototype = {
			constructor: r,
			index: 0,
			onZero: !1,
			model: null,
			isHorizontal: function() {
				var t = this.position;
				return "top" === t || "bottom" === t
			},
			getGlobalExtent: function() {
				var t = this.getExtent();
				return t[0] = this.toGlobalCoord(t[0]), t[1] = this.toGlobalCoord(t[1]), t
			},
			getLabelInterval: function() {
				var t = this._labelInterval;
				return t || (t = this._labelInterval = n(this)), t
			},
			isLabelIgnored: function(t) {
				if ("category" === this.type) {
					var e = this.getLabelInterval();
					return "function" == typeof e && !e(t, this.scale.getLabel(t)) || t % (e + 1)
				}
			},
			toLocalCoord: null,
			toGlobalCoord: null
		}, e.inherits(r, i), r
	}), e("echarts/coord/axisDefault", ["require", "zrender/core/util"], function(t) {
		var e = t("zrender/core/util"),
			i = {
				show: !0,
				zlevel: 0,
				z: 0,
				inverse: !1,
				name: "",
				nameLocation: "end",
				nameTextStyle: {},
				nameGap: 15,
				axisLine: {
					show: !0,
					onZero: !0,
					lineStyle: {
						color: "#333",
						width: 1,
						type: "solid"
					}
				},
				axisTick: {
					show: !0,
					inside: !1,
					length: 5,
					lineStyle: {
						color: "#333",
						width: 1
					}
				},
				axisLabel: {
					show: !0,
					inside: !1,
					rotate: 0,
					margin: 8,
					textStyle: {
						color: "#333",
						fontSize: 12
					}
				},
				splitLine: {
					show: !0,
					lineStyle: {
						color: ["#ccc"],
						width: 1,
						type: "solid"
					}
				},
				splitArea: {
					show: !1,
					areaStyle: {
						color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
					}
				}
			},
			n = e.merge({
				boundaryGap: !0,
				axisTick: {
					interval: "auto"
				},
				axisLabel: {
					interval: "auto"
				}
			}, i),
			r = e.defaults({
				boundaryGap: [0, 0],
				splitNumber: 5
			}, i),
			o = e.defaults({
				scale: !0,
				min: "dataMin",
				max: "dataMax"
			}, r),
			a = e.defaults({}, r);
		return a.scale = !0, {
			categoryAxis: n,
			valueAxis: r,
			timeAxis: o,
			logAxis: a
		}
	}), e("echarts/coord/axisModelCreator", ["require", "./axisDefault", "zrender/core/util", "../model/Component"], function(t) {
		var e = t("./axisDefault"),
			i = t("zrender/core/util"),
			n = t("../model/Component"),
			r = ["value", "category", "time", "log"];
		return function(t, o, a, s) {
			i.each(r, function(n) {
				o.extend({
					type: t + "Axis." + n,
					mergeDefaultAndTheme: function(e, r) {
						var o = r.getTheme();
						i.merge(e, o.get(n + "Axis")), i.merge(e, this.getDefaultOption()), e.type = a(t, e)
					},
					defaultOption: i.mergeAll([{},
					e[n + "Axis"], s], !0)
				})
			}), n.registerSubTypeDefaulter(t + "Axis", i.curry(a, t))
		}
	}), e("echarts/coord/axisModelCommonMixin", ["require", "zrender/core/util", "./axisHelper"], function(t) {
		function e(t) {
			return r.isObject(t) && null != t.value ? t.value : t
		}
		function i() {
			return "category" === this.get("type") && r.map(this.get("data"), e)
		}
		function n() {
			return o.getFormattedLabels(this.axis, this.get("axisLabel.formatter"))
		}
		var r = t("zrender/core/util"),
			o = t("./axisHelper");
		return {
			getFormattedLabels: n,
			getCategories: i
		}
	}), e("echarts/coord/cartesian/AxisModel", ["require", "../../model/Component", "zrender/core/util", "../axisModelCreator", "../axisModelCommonMixin"], function(t) {
		function e(t, e) {
			return e.type || (e.data ? "category" : "value")
		}
		var i = t("../../model/Component"),
			n = t("zrender/core/util"),
			r = t("../axisModelCreator"),
			o = i.extend({
				type: "cartesian2dAxis",
				axis: null,
				setNeedsCrossZero: function(t) {
					this.option.scale = !t
				},
				setMin: function(t) {
					this.option.min = t
				},
				setMax: function(t) {
					this.option.max = t
				}
			});
		n.merge(o.prototype, t("../axisModelCommonMixin"));
		var a = {
			gridIndex: 0
		};
		return r("x", o, e, a), r("y", o, e, a), o
	}), e("echarts/coord/cartesian/GridModel", ["require", "./AxisModel", "../../model/Component"], function(t) {
		t("./AxisModel");
		var e = t("../../model/Component");
		return e.extend({
			type: "grid",
			dependencies: ["xAxis", "yAxis"],
			layoutMode: "box",
			coordinateSystem: null,
			defaultOption: {
				show: !1,
				zlevel: 0,
				z: 0,
				left: "10%",
				top: 60,
				right: "10%",
				bottom: 60,
				containLabel: !1,
				backgroundColor: "rgba(0,0,0,0)",
				borderWidth: 1,
				borderColor: "#ccc"
			}
		})
	}), e("echarts/coord/cartesian/Grid", ["require", "exports", "module", "../../util/layout", "../../coord/axisHelper", "zrender/core/util", "./Cartesian2D", "./Axis2D", "./GridModel", "../../CoordinateSystem"], function(t, e) {
		function i(t, e, i) {
			return i.getComponent("grid", t.get("gridIndex")) === e
		}
		function n(t) {
			for (var e, i = t.model, n = i.getFormattedLabels(), r = 0; r < n.length; r++) if (!t.isLabelIgnored(r)) {
				var o = i.getTextRect(n[r]);
				e ? e.union(o) : e = o
			}
			return e
		}
		function r(t, e, i) {
			this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t, e, i)
		}
		function o(t, e) {
			var i = t.getExtent(),
				n = i[0] + i[1];
			t.toGlobalCoord = "x" === t.dim ?
			function(t) {
				return t + e
			} : function(t) {
				return n - t + e
			}, t.toLocalCoord = "x" === t.dim ?
			function(t) {
				return t - e
			} : function(t) {
				return n - t + e
			}
		}
		var a = t("../../util/layout"),
			s = t("../../coord/axisHelper"),
			l = t("zrender/core/util"),
			u = t("./Cartesian2D"),
			c = t("./Axis2D"),
			h = l.each,
			d = s.ifAxisCrossZero,
			p = s.ifAxisNeedsCrossZero,
			f = s.niceScaleExtent;
		t("./GridModel");
		var m = r.prototype;
		return m.type = "grid", m.getRect = function() {
			return this._rect
		}, m.resize = function(t, e) {
			function i() {
				h(s, function(t) {
					var e = t.isHorizontal(),
						i = e ? [0, r.width] : [0, r.height],
						n = t.inverse ? 1 : 0;
					t.setExtent(i[n], i[1 - n]), o(t, e ? r.x : r.y)
				})
			}
			var r = a.getLayoutRect(t.getBoxLayoutParams(), {
				width: e.getWidth(),
				height: e.getHeight()
			});
			this._rect = r;
			var s = this._axesList;
			i(), t.get("containLabel") && (h(s, function(t) {
				if (!t.model.get("axisLabel.inside")) {
					var e = n(t);
					if (e) {
						var i = t.isHorizontal() ? "height" : "width",
							o = t.model.get("axisLabel.margin");
						r[i] -= e[i] + o, "top" === t.position ? r.y += e.height + o : "left" === t.position && (r.x += e.width + o)
					}
				}
			}), i())
		}, m.getAxis = function(t, e) {
			if (null != e) {
				var i = t + e;
				return this._axesMap[i]
			}
			for (var n = this._axesList, r = 0; r < n.length; r++) if (n[r].dim === t) return n[r]
		}, m.getCartesian = function(t, e) {
			var i = "x" + t + "y" + e;
			return this._coordsMap[i]
		}, m._initCartesian = function(t, e, n) {
			function r(t) {
				var e = l[t];
				return e[0] && ("category" === e[0].type || !d(e[0])) || e[1] && ("category" === e[1].type || !d(e[1]))
			}
			function o(n) {
				return function(r, o) {
					if (i(r, t, e)) {
						var u = r.get("position");
						"x" === n ? ("top" !== u && "bottom" !== u && (u = "bottom"), a[u] && (u = "top" === u ? "bottom" : "top")) : ("left" !== u && "right" !== u && (u = "left"), a[u] && (u = "left" === u ? "right" : "left")), a[u] = !0;
						var h = new c(n, s.createScaleByModel(r), [0, 0], r.get("type"), u),
							d = "category" === h.type;
						h.onBand = d && r.get("boundaryGap"), h.inverse = r.get("inverse"), h.onZero = r.get("axisLine.onZero"), r.axis = h, h.model = r, h.index = o, this._axesList.push(h), this._axesMap[n + o] = h, l[n][o] = h, m[n]++
					}
				}
			}
			var a = {
				left: !1,
				right: !1,
				top: !1,
				bottom: !1
			},
				l = {
					x: {},
					y: {}
				},
				m = {
					x: 0,
					y: 0
				};
			return e.eachComponent("xAxis", o("x"), this), e.eachComponent("yAxis", o("y"), this), m.x && m.y ? (h(l.x, function(t, e) {
				h(l.y, function(i, n) {
					var r = "x" + e + "y" + n,
						o = new u(r);
					o.grid = this, this._coordsMap[r] = o, this._coordsList.push(o), o.addAxis(t), o.addAxis(i)
				}, this)
			}, this), this._updateCartesianFromSeries(e, t), h(l.x, function(t) {
				r("y") && (t.onZero = !1), p(t) && t.scale.unionExtent([0, 0]), f(t, t.model)
			}, this), void h(l.y, function(t) {
				r("x") && (t.onZero = !1), p(t) && t.scale.unionExtent([0, 0]), f(t, t.model)
			}, this)) : (this._axesMap = {}, void(this._axesList = []))
		}, m._updateCartesianFromSeries = function(t, e) {
			function n(t, e, i, n) {
				h(n.getDimensionsOnAxis(i), function(i) {
					e.scale.unionExtent(t.getDataExtent(i, "ordinal" !== e.scale.type))
				})
			}
			t.eachSeries(function(r) {
				if ("cartesian2d" === r.get("coordinateSystem")) {
					var o = r.get("xAxisIndex"),
						a = r.get("yAxisIndex"),
						s = t.getComponent("xAxis", o),
						l = t.getComponent("yAxis", a);
					if (!i(s, e, t) || !i(l, e, t)) return;
					var u = this.getCartesian(o, a),
						c = r.getData();
					"list" === c.type && (n(c, u.getAxis("x"), "x", r), n(c, u.getAxis("y"), "y", r))
				}
			}, this)
		}, r.create = function(t, e) {
			var i = [];
			return t.eachComponent("grid", function(n, o) {
				var a = new r(n, t, e);
				a.name = "grid_" + o, a.resize(n, e), n.coordinateSystem = a, i.push(a)
			}), t.eachSeries(function(e) {
				if ("cartesian2d" === e.get("coordinateSystem")) {
					var n = e.get("xAxisIndex"),
						r = t.getComponent("xAxis", n),
						o = i[r.get("gridIndex")];
					e.coordinateSystem = o.getCartesian(n, e.get("yAxisIndex"))
				}
			}), i
		}, t("../../CoordinateSystem").register("grid", r), r
	}), e("echarts/chart/bar/BarSeries", ["require", "../../model/Series", "../helper/createListFromArray"], function(t) {
		var e = t("../../model/Series"),
			i = t("../helper/createListFromArray");
		return e.extend({
			type: "series.bar",
			dependencies: ["grid", "polar"],
			getInitialData: function(t, e) {
				return i(t.data, this, e)
			},
			defaultOption: {
				zlevel: 0,
				z: 2,
				coordinateSystem: "cartesian2d",
				legendHoverLink: !0,
				xAxisIndex: 0,
				yAxisIndex: 0,
				barMinHeight: 0,
				barGap: "30%",
				barCategoryGap: "20%",
				itemStyle: {
					normal: {
						barBorderColor: "#fff",
						barBorderWidth: 0
					},
					emphasis: {
						barBorderColor: "#fff",
						barBorderWidth: 0
					}
				}
			}
		})
	}), e("echarts/chart/bar/barItemStyle", ["require", "../../model/mixin/makeStyleMapper"], function(t) {
		return {
			getBarItemStyle: t("../../model/mixin/makeStyleMapper")([
				["fill", "color"],
				["stroke", "barBorderColor"],
				["lineWidth", "barBorderWidth"],
				["opacity"],
				["shadowBlur"],
				["shadowOffsetX"],
				["shadowOffsetY"],
				["shadowColor"]
			])
		}
	}), e("echarts/chart/bar/BarView", ["require", "zrender/core/util", "../../util/graphic", "../../model/Model", "./barItemStyle", "../../echarts"], function(t) {
		function e(t, e) {
			var i = t.width > 0 ? 1 : -1,
				n = t.height > 0 ? 1 : -1;
			t.x += i * e / 2, t.y += n * e / 2, t.width -= i * e, t.height -= n * e
		}
		var i = t("zrender/core/util"),
			n = t("../../util/graphic");
		return i.extend(t("../../model/Model").prototype, t("./barItemStyle")), t("../../echarts").extendChartView({
			type: "bar",
			render: function(t, e, i) {
				var n = t.get("coordinateSystem");
				return "cartesian2d" === n && this._renderOnCartesian(t, e, i), this.group
			},
			_renderOnCartesian: function(t, r, o) {
				function a(r, o) {
					var a = l.getItemLayout(r),
						s = l.getItemModel(r).get(f) || 0;
					e(a, s);
					var u = new n.Rect({
						shape: i.extend({}, a)
					});
					if (p) {
						var c = u.shape,
							h = d ? "height" : "width",
							m = {};
						c[h] = 0, m[h] = a[h], n[o ? "updateProps" : "initProps"](u, {
							shape: m
						}, t)
					}
					return u
				}
				var s = this.group,
					l = t.getData(),
					u = this._data,
					c = t.coordinateSystem,
					h = c.getBaseAxis(),
					d = h.isHorizontal(),
					p = t.get("animation"),
					f = ["itemStyle", "normal", "barBorderWidth"];
				l.diff(u).add(function(t) {
					if (l.hasValue(t)) {
						var e = a(t);
						l.setItemGraphicEl(t, e), s.add(e)
					}
				}).update(function(i, r) {
					var o = u.getItemGraphicEl(r);
					if (!l.hasValue(i)) return void s.remove(o);
					o || (o = a(i, !0));
					var c = l.getItemLayout(i),
						h = l.getItemModel(i).get(f) || 0;
					e(c, h), n.updateProps(o, {
						shape: c
					}, t), l.setItemGraphicEl(i, o), s.add(o)
				}).remove(function(e) {
					var i = u.getItemGraphicEl(e);
					i && (i.style.text = "", n.updateProps(i, {
						shape: {
							width: 0
						}
					}, t, function() {
						s.remove(i)
					}))
				}).execute(), this._updateStyle(t, l, d), this._data = l
			},
			_updateStyle: function(t, e, r) {
				function o(t, e, i, r, o) {
					n.setText(t, e, i), t.text = r, "outside" === t.textPosition && (t.textPosition = o)
				}
				e.eachItemGraphicEl(function(a, s) {
					var l = e.getItemModel(s),
						u = l.getModel("label.normal"),
						c = e.getItemVisual(s, "color"),
						h = e.getItemLayout(s),
						d = l.getModel("itemStyle.emphasis").getItemStyle();
					a.setStyle(i.defaults({
						fill: c
					}, l.getModel("itemStyle.normal").getBarItemStyle()));
					var p = r ? h.height > 0 ? "bottom" : "top" : h.width > 0 ? "left" : "right",
						u = l.getModel("label.normal"),
						f = l.getModel("label.emphasis"),
						m = a.style;
					u.get("show") ? o(m, u, c, t.getFormattedLabel(s, "normal") || t.getRawValue(s), p) : m.text = "", f.get("show") ? o(d, f, c, t.getFormattedLabel(s, "emphasis") || t.getRawValue(s), p) : d.text = "", n.setHoverStyle(a, d)
				})
			},
			remove: function(t, e) {
				var i = this.group;
				t.get("animation") ? this._data && this._data.eachItemGraphicEl(function(e) {
					e.style.text = "", n.updateProps(e, {
						shape: {
							width: 0
						}
					}, t, function() {
						i.remove(e)
					})
				}) : i.removeAll()
			}
		})
	}), e("echarts/layout/barGrid", ["require", "zrender/core/util", "../util/number"], function(t) {
		function e(t) {
			return t.get("stack") || "__ec_stack_" + t.seriesIndex
		}
		function i(t, i) {
			var n = {};
			r.each(t, function(t, i) {
				var r = t.coordinateSystem,
					o = r.getBaseAxis(),
					a = n[o.index] || {
						remainedWidth: o.getBandWidth(),
						autoWidthCount: 0,
						categoryGap: "20%",
						gap: "30%",
						axis: o,
						stacks: {}
					},
					s = a.stacks;
				n[o.index] = a;
				var l = e(t);
				s[l] || a.autoWidthCount++, s[l] = s[l] || {
					width: 0,
					maxWidth: 0
				};
				var u = t.get("barWidth"),
					c = t.get("barMaxWidth"),
					h = t.get("barGap"),
					d = t.get("barCategoryGap");
				u && !s[l].width && (u = Math.min(a.remainedWidth, u), s[l].width = u, a.remainedWidth -= u), c && (s[l].maxWidth = c), null != h && (a.gap = h), null != d && (a.categoryGap = d)
			});
			var o = {};
			return r.each(n, function(t, e) {
				o[e] = {};
				var i = t.stacks,
					n = t.axis,
					s = n.getBandWidth(),
					l = a(t.categoryGap, s),
					u = a(t.gap, 1),
					c = t.remainedWidth,
					h = t.autoWidthCount,
					d = (c - l) / (h + (h - 1) * u);
				d = Math.max(d, 0), r.each(i, function(t, e) {
					var i = t.maxWidth;
					!t.width && i && d > i && (i = Math.min(i, c), c -= i, t.width = i, h--)
				}), d = (c - l) / (h + (h - 1) * u), d = Math.max(d, 0);
				var p, f = 0;
				r.each(i, function(t, e) {
					t.width || (t.width = d), p = t, f += t.width * (1 + u)
				}), p && (f -= p.width * u);
				var m = -f / 2;
				r.each(i, function(t, i) {
					o[e][i] = o[e][i] || {
						offset: m,
						width: t.width
					}, m += t.width * (1 + u)
				})
			}), o
		}
		function n(t, n, o) {
			var a = i(r.filter(n.getSeriesByType(t), function(t) {
				return !n.isSeriesFiltered(t) && t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type
			})),
				s = {};
			n.eachSeriesByType(t, function(t) {
				var i = t.getData(),
					n = t.coordinateSystem,
					r = n.getBaseAxis(),
					o = e(t),
					l = a[r.index][o],
					u = l.offset,
					c = l.width,
					h = n.getOtherAxis(r),
					d = t.get("barMinHeight") || 0,
					p = r.onZero ? h.toGlobalCoord(h.dataToCoord(0)) : h.getGlobalExtent()[0],
					f = n.dataToPoints(i, !0);
				s[o] = s[o] || [], i.each(h.dim, function(t, e) {
					if (!isNaN(t)) {
						s[o][e] || (s[o][e] = {
							p: p,
							n: p
						});
						var n, r, a, l, m = t >= 0 ? "p" : "n",
							g = f[e],
							v = s[o][e][m];
						h.isHorizontal() ? (n = v, r = g[1] + u, a = g[0] - v, l = c, Math.abs(a) < d && (a = (0 > a ? -1 : 1) * d), s[o][e][m] += a) : (n = g[0] + u, r = v, a = c, l = g[1] - v, Math.abs(l) < d && (l = (0 >= l ? -1 : 1) * d), s[o][e][m] += l), i.setItemLayout(e, {
							x: n,
							y: r,
							width: a,
							height: l
						})
					}
				}, !0)
			}, this)
		}
		var r = t("zrender/core/util"),
			o = t("../util/number"),
			a = o.parsePercent;
		return n
	}), e("echarts/chart/bar", ["require", "zrender/core/util", "../coord/cartesian/Grid", "./bar/BarSeries", "./bar/BarView", "../layout/barGrid", "../echarts"], function(t) {
		var e = t("zrender/core/util");
		t("../coord/cartesian/Grid"), t("./bar/BarSeries"), t("./bar/BarView");
		var i = t("../layout/barGrid"),
			n = t("../echarts");
		n.registerLayout(e.curry(i, "bar")), n.registerVisualCoding("chart", function(t) {
			t.eachSeriesByType("bar", function(t) {
				var e = t.getData();
				e.setVisual("legendSymbol", "roundRect")
			})
		})
	}), e("echarts/component/axis/AxisBuilder", ["require", "zrender/core/util", "../../util/graphic", "../../model/Model", "../../util/number"], function(t) {
		function e(t, e, i) {
			var n, r, o = s(e - t.rotation);
			return l(o) ? (r = i > 0 ? "top" : "bottom", n = "center") : l(o - u) ? (r = i > 0 ? "bottom" : "top", n = "center") : (r = "middle", n = o > 0 && u > o ? i > 0 ? "right" : "left" : i > 0 ? "left" : "right"), {
				rotation: o,
				textAlign: n,
				textBaseline: r
			}
		}
		function i(t, e, i) {
			var n, r, o = s(-t.rotation),
				a = i[0] > i[1],
				c = "start" === e && !a || "start" !== e && a;
			return l(o - u / 2) ? (r = c ? "bottom" : "top", n = "center") : l(o - 1.5 * u) ? (r = c ? "top" : "bottom", n = "center") : (r = "middle", n = 1.5 * u > o && o > u / 2 ? c ? "left" : "right" : c ? "right" : "left"), {
				rotation: o,
				textAlign: n,
				textBaseline: r
			}
		}
		var n = t("zrender/core/util"),
			r = t("../../util/graphic"),
			o = t("../../model/Model"),
			a = t("../../util/number"),
			s = a.remRadian,
			l = a.isRadianAroundZero,
			u = Math.PI,
			c = function(t, e) {
				this.opt = e, this.axisModel = t, n.defaults(e, {
					labelOffset: 0,
					nameDirection: 1,
					tickDirection: 1,
					labelDirection: 1,
					silent: !0
				}), this.group = new r.Group({
					position: e.position.slice(),
					rotation: e.rotation
				})
			};
		c.prototype = {
			constructor: c,
			hasBuilder: function(t) {
				return !!h[t]
			},
			add: function(t) {
				h[t].call(this)
			},
			getGroup: function() {
				return this.group
			}
		};
		var h = {
			axisLine: function() {
				var t = this.opt,
					e = this.axisModel;
				if (e.get("axisLine.show")) {
					var i = this.axisModel.axis.getExtent();
					this.group.add(new r.Line({
						shape: {
							x1: i[0],
							y1: 0,
							x2: i[1],
							y2: 0
						},
						style: n.extend({
							lineCap: "round"
						}, e.getModel("axisLine.lineStyle").getLineStyle()),
						strokeContainThreshold: t.strokeContainThreshold,
						silent: !! t.silent,
						z2: 1
					}))
				}
			},
			axisTick: function() {
				var t = this.axisModel;
				if (t.get("axisTick.show")) {
					for (var e = t.axis, i = t.getModel("axisTick"), n = this.opt, o = i.getModel("lineStyle"), a = i.get("length"), s = p(i, n.labelInterval), l = e.getTicksCoords(), u = [], c = 0; c < l.length; c++) if (!d(e, c, s)) {
						var h = l[c];
						u.push(new r.Line(r.subPixelOptimizeLine({
							shape: {
								x1: h,
								y1: 0,
								x2: h,
								y2: n.tickDirection * a
							},
							style: {
								lineWidth: o.get("width")
							},
							silent: !0
						})))
					}
					this.group.add(r.mergePath(u, {
						style: o.getLineStyle(),
						silent: !0
					}))
				}
			},
			axisLabel: function() {
				function t(t, e) {
					var i = t && t.getBoundingRect().clone(),
						n = e && e.getBoundingRect().clone();
					return i && n ? (i.applyTransform(t.getLocalTransform()), n.applyTransform(e.getLocalTransform()), i.intersect(n)) : void 0
				}
				var i = this.axisModel;
				if (i.get("axisLabel.show")) {
					var n = this.opt,
						a = i.axis,
						s = i.getModel("axisLabel"),
						l = s.getModel("textStyle"),
						c = s.get("margin"),
						h = a.scale.getTicks(),
						p = i.getFormattedLabels(),
						f = n.labelRotation;
					null == f && (f = s.get("rotate") || 0), f = f * u / 180;
					for (var m = e(n, f, n.labelDirection), g = i.get("data"), v = [], y = 0; y < h.length; y++) if (!d(a, y, n.labelInterval)) {
						var _ = l;
						g && g[y] && g[y].textStyle && (_ = new o(g[y].textStyle, l, i.ecModel));
						var x = a.dataToCoord(h[y]),
							b = [x, n.labelOffset + n.labelDirection * c],
							w = new r.Text({
								style: {
									text: p[y],
									textAlign: _.get("align", !0) || m.textAlign,
									textBaseline: _.get("baseline", !0) || m.textBaseline,
									textFont: _.getFont(),
									fill: _.getTextColor()
								},
								position: b,
								rotation: m.rotation,
								silent: !0,
								z2: 10
							});
						v.push(w), this.group.add(w)
					}
					if ("category" !== a.type) {
						if (i.get("min")) {
							var M = v[0],
								S = v[1];
							t(M, S) && (M.ignore = !0)
						}
						if (i.get("max")) {
							var L = v[v.length - 1],
								C = v[v.length - 2];
							t(C, L) && (L.ignore = !0)
						}
					}
				}
			},
			axisName: function() {
				var t = this.opt,
					n = this.axisModel,
					o = this.opt.axisName;
				if (null == o && (o = n.get("name")), o) {
					var a, s = n.get("nameLocation"),
						l = t.nameDirection,
						u = n.getModel("nameTextStyle"),
						c = n.get("nameGap") || 0,
						h = this.axisModel.axis.getExtent(),
						d = h[0] > h[1] ? -1 : 1,
						p = ["start" === s ? h[0] - d * c : "end" === s ? h[1] + d * c : (h[0] + h[1]) / 2, "middle" === s ? t.labelOffset + l * c : 0];
					a = "middle" === s ? e(t, t.rotation, l) : i(t, s, h), this.group.add(new r.Text({
						style: {
							text: o,
							textFont: u.getFont(),
							fill: u.getTextColor() || n.get("axisLine.lineStyle.color"),
							textAlign: a.textAlign,
							textBaseline: a.textBaseline
						},
						position: p,
						rotation: a.rotation,
						silent: !0,
						z2: 1
					}))
				}
			}
		},
			d = c.ifIgnoreOnTick = function(t, e, i) {
				return "ordinal" === t.scale.type && "function" == typeof i && !i(e, t.scale.getLabel(e)) || e % (i + 1)
			},
			p = c.getInterval = function(t, e) {
				var i = t.get("interval");
				return (null == i || "auto" == i) && (i = e), i
			};
		return c
	}), e("echarts/component/axis/AxisView", ["require", "zrender/core/util", "../../util/graphic", "./AxisBuilder", "../../echarts"], function(t) {
		function e(t, e) {
			function i(t, e) {
				var i = n.getAxis(t);
				return i.toGlobalCoord(i.dataToCoord(0))
			}
			var n = t.coordinateSystem,
				r = e.axis,
				o = {},
				a = r.position,
				s = r.onZero ? "onZero" : a,
				l = r.dim,
				u = n.getRect(),
				c = [u.x, u.x + u.width, u.y, u.y + u.height],
				h = {
					x: {
						top: c[2],
						bottom: c[3]
					},
					y: {
						left: c[0],
						right: c[1]
					}
				};
			h.x.onZero = Math.max(Math.min(i("y"), h.x.bottom), h.x.top), h.y.onZero = Math.max(Math.min(i("x"), h.y.right), h.y.left), o.position = ["y" === l ? h.y[s] : c[0], "x" === l ? h.x[s] : c[3]];
			var d = {
				x: 0,
				y: 1
			};
			o.rotation = Math.PI / 2 * d[l];
			var p = {
				top: -1,
				bottom: 1,
				left: -1,
				right: 1
			};
			o.labelDirection = o.tickDirection = o.nameDirection = p[a], r.onZero && (o.labelOffset = h[l][a] - h[l].onZero), e.getModel("axisTick").get("inside") && (o.tickDirection = -o.tickDirection), e.getModel("axisLabel").get("inside") && (o.labelDirection = -o.labelDirection);
			var f = e.getModel("axisLabel").get("rotate");
			return o.labelRotation = "top" === s ? -f : f, o.labelInterval = r.getLabelInterval(), o.z2 = 1, o
		}
		var i = t("zrender/core/util"),
			n = t("../../util/graphic"),
			r = t("./AxisBuilder"),
			o = r.ifIgnoreOnTick,
			a = r.getInterval,
			s = ["axisLine", "axisLabel", "axisTick", "axisName"],
			l = ["splitLine", "splitArea"],
			u = t("../../echarts").extendComponentView({
				type: "axis",
				render: function(t, n) {
					if (this.group.removeAll(), t.get("show")) {
						var o = n.getComponent("grid", t.get("gridIndex")),
							a = e(o, t),
							u = new r(t, a);
						i.each(s, u.add, u), this.group.add(u.getGroup()), i.each(l, function(e) {
							t.get(e + ".show") && this["_" + e](t, o, a.labelInterval)
						}, this)
					}
				},
				_splitLine: function(t, e, i) {
					var r = t.axis,
						s = t.getModel("splitLine"),
						l = s.getModel("lineStyle"),
						u = l.get("width"),
						c = l.get("color"),
						h = a(s, i);
					c = c instanceof Array ? c : [c];
					for (var d = e.coordinateSystem.getRect(), p = r.isHorizontal(), f = [], m = 0, g = r.getTicksCoords(), v = [], y = [], _ = 0; _ < g.length; _++) if (!o(r, _, h)) {
						var x = r.toGlobalCoord(g[_]);
						p ? (v[0] = x, v[1] = d.y, y[0] = x, y[1] = d.y + d.height) : (v[0] = d.x, v[1] = x, y[0] = d.x + d.width, y[1] = x);
						var b = m++ % c.length;
						f[b] = f[b] || [], f[b].push(new n.Line(n.subPixelOptimizeLine({
							shape: {
								x1: v[0],
								y1: v[1],
								x2: y[0],
								y2: y[1]
							},
							style: {
								lineWidth: u
							},
							silent: !0
						})))
					}
					for (var _ = 0; _ < f.length; _++) this.group.add(n.mergePath(f[_], {
						style: {
							stroke: c[_ % c.length],
							lineDash: l.getLineDash(),
							lineWidth: u
						},
						silent: !0
					}))
				},
				_splitArea: function(t, e, i) {
					var r = t.axis,
						s = t.getModel("splitArea"),
						l = s.get("areaStyle.color"),
						u = e.coordinateSystem.getRect(),
						c = r.getTicksCoords(),
						h = c[0],
						d = c[0],
						p = [],
						f = 0,
						m = a(s, i);
					l = l instanceof Array ? l : [l];
					for (var g = 1; g < c.length; g++) if (!o(r, g, m)) {
						var v, y, _, x, b = r.toGlobalCoord(c[g]);
						r.isHorizontal() ? (v = h, y = u.y, _ = b - v, x = u.height) : (v = u.x, y = d, _ = u.width, x = b - y);
						var w = f++ % l.length;
						p[w] = p[w] || [], p[w].push(new n.Rect({
							shape: {
								x: v,
								y: y,
								width: _,
								height: x
							},
							silent: !0
						})), h = v + _, d = y + x
					}
					for (var g = 0; g < p.length; g++) this.group.add(n.mergePath(p[g], {
						style: {
							fill: l[g % l.length]
						},
						silent: !0
					}))
				}
			});
		u.extend({
			type: "xAxis"
		}), u.extend({
			type: "yAxis"
		})
	}), e("echarts/component/axis", ["require", "../coord/cartesian/AxisModel", "./axis/AxisView"], function(t) {
		t("../coord/cartesian/AxisModel"), t("./axis/AxisView")
	}), e("echarts/component/grid", ["require", "../util/graphic", "zrender/core/util", "../coord/cartesian/Grid", "./axis", "../echarts"], function(t) {
		var e = t("../util/graphic"),
			i = t("zrender/core/util");
		t("../coord/cartesian/Grid"), t("./axis"), t("../echarts").extendComponentView({
			type: "grid",
			render: function(t, n) {
				this.group.removeAll(), t.get("show") && this.group.add(new e.Rect({
					shape: t.coordinateSystem.getRect(),
					style: i.defaults({
						fill: t.get("backgroundColor")
					}, t.getItemStyle()),
					silent: !0
				}))
			}
		})
	}), e("echarts/chart/helper/dataSelectableMixin", ["require", "zrender/core/util"], function(t) {
		var e = t("zrender/core/util");
		return {
			updateSelectedMap: function() {
				var t = this.option;
				this._dataOptMap = e.reduce(t.data, function(t, e) {
					return t[e.name] = e, t
				}, {})
			},
			select: function(t) {
				var i = this._dataOptMap,
					n = i[t],
					r = this.get("selectedMode");
				"single" === r && e.each(i, function(t) {
					t.selected = !1
				}), n && (n.selected = !0)
			},
			unSelect: function(t) {
				var e = this._dataOptMap[t];
				e && (e.selected = !1)
			},
			toggleSelected: function(t) {
				var e = this._dataOptMap[t];
				return null != e ? (this[e.selected ? "unSelect" : "select"](t), e.selected) : void 0
			},
			isSelected: function(t) {
				var e = this._dataOptMap[t];
				return e && e.selected
			}
		}
	}), e("echarts/chart/pie/PieSeries", ["require", "../../data/List", "zrender/core/util", "../../util/model", "../../data/helper/completeDimensions", "../helper/dataSelectableMixin", "../../echarts"], function(t) {
		var e = t("../../data/List"),
			i = t("zrender/core/util"),
			n = t("../../util/model"),
			r = t("../../data/helper/completeDimensions"),
			o = t("../helper/dataSelectableMixin"),
			a = t("../../echarts").extendSeriesModel({
				type: "series.pie",
				init: function(t) {
					this.$superApply("init", arguments), this.legendDataProvider = function() {
						return this._dataBeforeProcessed
					}, this.updateSelectedMap(), this._defaultLabelLine(t)
				},
				mergeOption: function(t) {
					this.$superCall("mergeOption", t), this.updateSelectedMap()
				},
				getInitialData: function(t, i) {
					var n = r(["value"], t.data),
						o = new e(n, this);
					return o.initData(t.data), o
				},
				getDataParams: function(t) {
					var e = this._data,
						i = this.$superCall("getDataParams", t);
					return i.percent = +(e.get("value", t) / e.getSum("value") * 100).toFixed(2), i.$vars.push("percent"), i
				},
				_defaultLabelLine: function(t) {
					n.defaultEmphasis(t.labelLine, ["show"]);
					var e = t.labelLine.normal,
						i = t.labelLine.emphasis;
					e.show = e.show && t.label.normal.show, i.show = i.show && t.label.emphasis.show
				},
				defaultOption: {
					zlevel: 0,
					z: 2,
					legendHoverLink: !0,
					hoverAnimation: !0,
					center: ["50%", "50%"],
					radius: [0, "75%"],
					clockwise: !0,
					startAngle: 90,
					minAngle: 0,
					selectedOffset: 10,
					avoidLabelOverlap: !0,
					label: {
						normal: {
							rotate: !1,
							show: !0,
							position: "outer"
						},
						emphasis: {}
					},
					labelLine: {
						normal: {
							show: !0,
							length: 20,
							length2: 5,
							smooth: !1,
							lineStyle: {
								width: 1,
								type: "solid"
							}
						}
					},
					itemStyle: {
						normal: {
							borderColor: "rgba(0,0,0,0)",
							borderWidth: 1
						},
						emphasis: {
							borderColor: "rgba(0,0,0,0)",
							borderWidth: 1
						}
					},
					animationEasing: "cubicOut",
					data: []
				}
			});
		return i.mixin(a, o), a
	}), e("echarts/chart/pie/PieView", ["require", "../../util/graphic", "zrender/core/util", "../../view/Chart"], function(t) {
		function e(t, e, n, r) {
			var o = e.getData(),
				a = this.dataIndex,
				s = o.getName(a),
				l = e.get("selectedOffset");
			r.dispatchAction({
				type: "pieToggleSelect",
				from: t,
				name: s,
				seriesId: e.id
			}), o.each(function(t) {
				i(o.getItemGraphicEl(t), o.getItemLayout(t), e.isSelected(o.getName(t)), l, n)
			})
		}
		function i(t, e, i, n, r) {
			var o = (e.startAngle + e.endAngle) / 2,
				a = Math.cos(o),
				s = Math.sin(o),
				l = i ? n : 0,
				u = [a * l, s * l];
			r ? t.animate().when(200, {
				position: u
			}).start("bounceOut") : t.attr("position", u)
		}
		function n(t, e) {
			function i() {
				a.ignore = a.hoverIgnore, s.ignore = s.hoverIgnore
			}
			function n() {
				a.ignore = a.normalIgnore, s.ignore = s.normalIgnore
			}
			o.Group.call(this);
			var r = new o.Sector({
				z2: 2
			}),
				a = new o.Polyline,
				s = new o.Text;
			this.add(r), this.add(a), this.add(s), this.updateData(t, e, !0), this.on("emphasis", i).on("normal", n).on("mouseover", i).on("mouseout", n)
		}
		function r(t, e, i, n) {
			var r = n.getModel("textStyle"),
				o = n.get("position"),
				a = "inside" === o || "inner" === o;
			return {
				fill: r.getTextColor() || (a ? "#fff" : t.getItemVisual(e, "color")),
				textFont: r.getFont(),
				text: t.hostModel.getFormattedLabel(e, i) || t.getName(e)
			}
		}
		var o = t("../../util/graphic"),
			a = t("zrender/core/util"),
			s = n.prototype;
		s.updateData = function(t, e, n) {
			function r() {
				l.stopAnimation(!0), l.animateTo({
					shape: {
						r: h.r + 10
					}
				}, 300, "elasticOut")
			}
			function s() {
				l.stopAnimation(!0), l.animateTo({
					shape: {
						r: h.r
					}
				}, 300, "elasticOut")
			}
			var l = this.childAt(0),
				u = t.hostModel,
				c = t.getItemModel(e),
				h = t.getItemLayout(e),
				d = a.extend({}, h);
			d.label = null, n ? (l.setShape(d), l.shape.endAngle = h.startAngle, o.updateProps(l, {
				shape: {
					endAngle: h.endAngle
				}
			}, u)) : o.updateProps(l, {
				shape: d
			}, u);
			var p = c.getModel("itemStyle"),
				f = t.getItemVisual(e, "color");
			l.setStyle(a.defaults({
				fill: f
			}, p.getModel("normal").getItemStyle())), l.hoverStyle = p.getModel("emphasis").getItemStyle(), i(this, t.getItemLayout(e), c.get("selected"), u.get("selectedOffset"), u.get("animation")), l.off("mouseover").off("mouseout").off("emphasis").off("normal"), c.get("hoverAnimation") && l.on("mouseover", r).on("mouseout", s).on("emphasis", r).on("normal", s), this._updateLabel(t, e), o.setHoverStyle(this)
		}, s._updateLabel = function(t, e) {
			var i = this.childAt(1),
				n = this.childAt(2),
				a = t.hostModel,
				s = t.getItemModel(e),
				l = t.getItemLayout(e),
				u = l.label,
				c = t.getItemVisual(e, "color");
			o.updateProps(i, {
				shape: {
					points: u.linePoints || [
						[u.x, u.y],
						[u.x, u.y],
						[u.x, u.y]
					]
				}
			}, a), o.updateProps(n, {
				style: {
					x: u.x,
					y: u.y
				}
			}, a), n.attr({
				style: {
					textAlign: u.textAlign,
					textBaseline: u.textBaseline,
					textFont: u.font
				},
				rotation: u.rotation,
				origin: [u.x, u.y],
				z2: 10
			});
			var h = s.getModel("label.normal"),
				d = s.getModel("label.emphasis"),
				p = s.getModel("labelLine.normal"),
				f = s.getModel("labelLine.emphasis");
			n.setStyle(r(t, e, "normal", h)), n.ignore = n.normalIgnore = !h.get("show"), n.hoverIgnore = !d.get("show"), i.ignore = i.normalIgnore = !p.get("show"), i.hoverIgnore = !f.get("show"), i.setStyle({
				stroke: c
			}), i.setStyle(p.getModel("lineStyle").getLineStyle()), n.hoverStyle = r(t, e, "emphasis", d), i.hoverStyle = f.getModel("lineStyle").getLineStyle();
			var m = p.get("smooth");
			m && m === !0 && (m = .4), i.setShape({
				smooth: m
			})
		}, a.inherits(n, o.Group);
		var l = t("../../view/Chart").extend({
			type: "pie",
			init: function() {
				var t = new o.Group;
				this._sectorGroup = t
			},
			render: function(t, i, r, o) {
				if (!o || o.from !== this.uid) {
					var s = t.getData(),
						l = this._data,
						u = this.group,
						c = i.get("animation"),
						h = !l,
						d = a.curry(e, this.uid, t, c, r),
						p = t.get("selectedMode");
					if (s.diff(l).add(function(t) {
						var e = new n(s, t);
						h && e.eachChild(function(t) {
							t.stopAnimation(!0)
						}), p && e.on("click", d), s.setItemGraphicEl(t, e), u.add(e)
					}).update(function(t, e) {
						var i = l.getItemGraphicEl(e);
						i.updateData(s, t), i.off("click"), p && i.on("click", d), u.add(i), s.setItemGraphicEl(t, i)
					}).remove(function(t) {
						var e = l.getItemGraphicEl(t);
						u.remove(e)
					}).execute(), c && h && s.count() > 0) {
						var f = s.getItemLayout(0),
							m = Math.max(r.getWidth(), r.getHeight()) / 2,
							g = a.bind(u.removeClipPath, u);
						u.setClipPath(this._createClipPath(f.cx, f.cy, m, f.startAngle, f.clockwise, g, t))
					}
					this._data = s
				}
			},
			_createClipPath: function(t, e, i, n, r, a, s) {
				var l = new o.Sector({
					shape: {
						cx: t,
						cy: e,
						r0: 0,
						r: i,
						startAngle: n,
						endAngle: n,
						clockwise: r
					}
				});
				return o.initProps(l, {
					shape: {
						endAngle: n + (r ? 1 : -1) * Math.PI * 2
					}
				}, s, a), l
			}
		});
		return l
	}), e("echarts/action/createDataSelectAction", ["require", "../echarts", "zrender/core/util"], function(t) {
		var e = t("../echarts"),
			i = t("zrender/core/util");
		return function(t, n) {
			i.each(n, function(i) {
				i.update = "updateView", e.registerAction(i, function(e, n) {
					var r = {};
					return n.eachComponent({
						mainType: "series",
						subType: t,
						query: e
					}, function(t) {
						t[i.method] && t[i.method](e.name);
						var n = t.getData();
						n.each(function(e) {
							var i = n.getName(e);
							r[i] = t.isSelected(i) || !1
						})
					}), {
						name: e.name,
						selected: r
					}
				})
			})
		}
	}), e("echarts/visual/dataColor", ["require"], function(t) {
		return function(t, e) {
			e.eachSeriesByType(t, function(t) {
				var i = t.get("color"),
					n = t.getRawData();
				if (!e.isSeriesFiltered(t)) {
					var r = t.getData();
					r.each(function(t) {
						var e = r.getItemModel(t),
							o = r.getRawIndex(t);
						if (!r.getItemVisual(t, "color", !0)) {
							var a = e.get("itemStyle.normal.color") || i[o % i.length];
							n.setItemVisual(o, "color", a), r.setItemVisual(t, "color", a)
						}
					})
				}
			})
		}
	}), e("echarts/chart/pie/labelLayout", ["require", "zrender/contain/text"], function(t) {
		function e(t, e, i, n, r, o, a) {
			function s(e, i, n, r) {
				for (var o = e; i > o; o++) if (t[o].y += n, o > e && i > o + 1 && t[o + 1].y > t[o].y + t[o].height) return void l(o, n / 2);
				l(i - 1, n / 2)
			}
			function l(e, i) {
				for (var n = e; n >= 0 && (t[n].y -= i, !(n > 0 && t[n].y > t[n - 1].y + t[n - 1].height)); n--);
			}
			t.sort(function(t, e) {
				return t.y - e.y
			});
			for (var u, c = 0, h = t.length, d = [], p = [], f = 0; h > f; f++) u = t[f].y - c, 0 > u && s(f, h, -u, r), c = t[f].y + t[f].height;
			0 > a - c && l(h - 1, c - a);
			for (var f = 0; h > f; f++) t[f].y >= i ? p.push(t[f]) : d.push(t[f])
		}
		function i(t, i, n, r, o, a) {
			for (var s = [], l = [], u = 0; u < t.length; u++) t[u].x < i ? s.push(t[u]) : l.push(t[u]);
			e(s, i, n, r, -1, o, a), e(l, i, n, r, 1, o, a);
			for (var u = 0; u < t.length; u++) {
				var c = t[u].linePoints;
				c && (t[u].x < i ? c[2][0] = t[u].x + 3 : c[2][0] = t[u].x - 3, c[1][1] = c[2][1] = t[u].y)
			}
		}
		var n = t("zrender/contain/text");
		return function(t, e, r, o) {
			var a, s, l = t.getData(),
				u = [],
				c = !1;
			l.each(function(i) {
				var r, o, h, d, p = l.getItemLayout(i),
					f = l.getItemModel(i),
					m = f.getModel("label.normal"),
					g = m.get("position"),
					v = f.getModel("labelLine.normal"),
					y = v.get("length"),
					_ = v.get("length2"),
					x = (p.startAngle + p.endAngle) / 2,
					b = Math.cos(x),
					w = Math.sin(x);
				if (a = p.cx, s = p.cy, "center" === g) r = p.cx, o = p.cy, d = "center";
				else {
					var M = "inside" === g || "inner" === g,
						S = (M ? p.r / 2 * b : p.r * b) + a,
						L = (M ? p.r / 2 * w : p.r * w) + s;
					if (y += e - p.r, r = S + 3 * b, o = L + 3 * w, !M) {
						var C = S + b * y,
							T = L + w * y,
							P = C + (0 > b ? -1 : 1) * _,
							A = T;
						r = P + (0 > b ? -5 : 5), o = A, h = [
							[S, L],
							[C, T],
							[P, A]
						]
					}
					d = M ? "center" : b > 0 ? "left" : "right"
				}
				var D = "middle",
					z = m.getModel("textStyle").getFont(),
					I = m.get("rotate") ? 0 > b ? -x + Math.PI : -x : 0,
					k = t.getFormattedLabel(i, "normal") || l.getName(i),
					E = n.getBoundingRect(k, z, d, D);
				c = !! I, p.label = {
					x: r,
					y: o,
					height: E.height,
					length: y,
					length2: _,
					linePoints: h,
					textAlign: d,
					textBaseline: D,
					font: z,
					rotation: I
				}, u.push(p.label)
			}), !c && t.get("avoidLabelOverlap") && i(u, a, s, e, r, o)
		}
	}), e("echarts/chart/pie/pieLayout", ["require", "../../util/number", "./labelLayout", "zrender/core/util"], function(t) {
		var e = t("../../util/number"),
			i = e.parsePercent,
			n = t("./labelLayout"),
			r = t("zrender/core/util"),
			o = 2 * Math.PI,
			a = Math.PI / 180;
		return function(t, s, l) {
			s.eachSeriesByType(t, function(t) {
				var s = t.get("center"),
					u = t.get("radius");
				r.isArray(u) || (u = [0, u]), r.isArray(s) || (s = [s, s]);
				var c = l.getWidth(),
					h = l.getHeight(),
					d = Math.min(c, h),
					p = i(s[0], c),
					f = i(s[1], h),
					m = i(u[0], d / 2),
					g = i(u[1], d / 2),
					v = t.getData(),
					y = -t.get("startAngle") * a,
					_ = t.get("minAngle") * a,
					x = v.getSum("value");
				0 === x && (x = v.count());
				var b = Math.PI / x * 2,
					w = t.get("clockwise"),
					M = t.get("roseType"),
					S = v.getDataExtent("value");
				S[0] = 0;
				var L = o,
					C = 0,
					T = y,
					P = w ? 1 : -1;
				if (v.each("value", function(t, i) {
					var n;
					n = "area" !== M ? 0 === x ? b : t * b : o / (v.count() || 1), _ > n ? (n = _, L -= _) : C += t;
					var r = T + P * n;
					v.setItemLayout(i, {
						angle: n,
						startAngle: T,
						endAngle: r,
						clockwise: w,
						cx: p,
						cy: f,
						r0: m,
						r: M ? e.linearMap(t, S, [m, g]) : g
					}), T = r
				}, !0), o > L) if (.001 >= L) {
					var A = o / v.count();
					v.each(function(t) {
						var e = v.getItemLayout(t);
						e.startAngle = y + P * t * A, e.endAngle = y + P * (t + 1) * A
					})
				} else b = L / C, T = y, v.each("value", function(t, e) {
					var i = v.getItemLayout(e),
						n = i.angle === _ ? _ : t * b;
					i.startAngle = T, i.endAngle = T + P * n, T += n
				});
				n(t, g, c, h)
			})
		}
	}), e("echarts/processor/dataFilter", [], function() {
		return function(t, e) {
			var i = e.findComponents({
				mainType: "legend"
			});
			i && i.length && e.eachSeriesByType(t, function(t) {
				var e = t.getData();
				e.filterSelf(function(t) {
					for (var n = e.getName(t), r = 0; r < i.length; r++) if (!i[r].isSelected(n)) return !1;
					return !0
				}, this)
			}, this)
		}
	}), e("echarts/chart/pie", ["require", "zrender/core/util", "../echarts", "./pie/PieSeries", "./pie/PieView", "../action/createDataSelectAction", "../visual/dataColor", "./pie/pieLayout", "../processor/dataFilter"], function(t) {
		var e = t("zrender/core/util"),
			i = t("../echarts");
		t("./pie/PieSeries"), t("./pie/PieView"), t("../action/createDataSelectAction")("pie", [{
			type: "pieToggleSelect",
			event: "pieselectchanged",
			method: "toggleSelected"
		}, {
			type: "pieSelect",
			event: "pieselected",
			method: "select"
		}, {
			type: "pieUnSelect",
			event: "pieunselected",
			method: "unSelect"
		}]), i.registerVisualCoding("chart", e.curry(t("../visual/dataColor"), "pie")), i.registerLayout(e.curry(t("./pie/pieLayout"), "pie")), i.registerProcessor("filter", e.curry(t("../processor/dataFilter"), "pie"))
	}), e("echarts/chart/scatter/ScatterSeries", ["require", "../helper/createListFromArray", "../../model/Series"], function(t) {
		var e = t("../helper/createListFromArray"),
			i = t("../../model/Series");
		return i.extend({
			type: "series.scatter",
			dependencies: ["grid", "polar"],
			getInitialData: function(t, i) {
				var n = e(t.data, this, i);
				return n
			},
			defaultOption: {
				coordinateSystem: "cartesian2d",
				zlevel: 0,
				z: 2,
				legendHoverLink: !0,
				hoverAnimation: !0,
				xAxisIndex: 0,
				yAxisIndex: 0,
				polarIndex: 0,
				geoIndex: 0,
				symbolSize: 10,
				large: !1,
				largeThreshold: 2e3,
				itemStyle: {
					normal: {
						opacity: .8
					}
				}
			}
		})
	}), e("echarts/chart/helper/LargeSymbolDraw", ["require", "../../util/graphic", "../../util/symbol", "zrender/core/util"], function(t) {
		function e() {
			this.group = new i.Group, this._symbolEl = new o({
				silent: !0
			})
		}
		var i = t("../../util/graphic"),
			n = t("../../util/symbol"),
			r = t("zrender/core/util"),
			o = i.extendShape({
				shape: {
					points: null,
					sizes: null
				},
				symbolProxy: null,
				buildPath: function(t, e) {
					for (var i = e.points, n = e.sizes, r = this.symbolProxy, o = r.shape, a = 0; a < i.length; a++) {
						var s = i[a],
							l = n[a];
						l[0] < 4 ? t.rect(s[0] - l[0] / 2, s[1] - l[1] / 2, l[0], l[1]) : (o.x = s[0] - l[0] / 2, o.y = s[1] - l[1] / 2, o.width = l[0], o.height = l[1], r.buildPath(t, o))
					}
				}
			}),
			a = e.prototype;
		return a.updateData = function(t) {
			this.group.removeAll();
			var e = this._symbolEl,
				i = t.hostModel;
			e.setShape({
				points: t.mapArray(t.getItemLayout),
				sizes: t.mapArray(function(e) {
					var i = t.getItemVisual(e, "symbolSize");
					return r.isArray(i) || (i = [i, i]), i
				})
			}), e.symbolProxy = n.createSymbol(t.getVisual("symbol"), 0, 0, 0, 0), e.setColor = e.symbolProxy.setColor, e.setStyle(i.getModel("itemStyle.normal").getItemStyle(["color"]));
			var o = t.getVisual("color");
			o && e.setColor(o), this.group.add(this._symbolEl)
		}, a.updateLayout = function(t) {
			var e = t.getData();
			this._symbolEl.setShape({
				points: e.mapArray(e.getItemLayout)
			})
		}, a.remove = function() {
			this.group.removeAll()
		}, e
	}), e("echarts/chart/scatter/ScatterView", ["require", "../helper/SymbolDraw", "../helper/LargeSymbolDraw", "../../echarts"], function(t) {
		var e = t("../helper/SymbolDraw"),
			i = t("../helper/LargeSymbolDraw");
		t("../../echarts").extendChartView({
			type: "scatter",
			init: function() {
				this._normalSymbolDraw = new e, this._largeSymbolDraw = new i
			},
			render: function(t, e, i) {
				var n = t.getData(),
					r = this._largeSymbolDraw,
					o = this._normalSymbolDraw,
					a = this.group,
					s = t.get("large") && n.count() > t.get("largeThreshold") ? r : o;
				this._symbolDraw = s, s.updateData(n), a.add(s.group), a.remove(s === r ? o.group : r.group)
			},
			updateLayout: function() {
				this._symbolDraw.updateLayout()
			},
			remove: function(t, e) {
				this._symbolDraw && this._symbolDraw.remove(e, !0)
			}
		})
	}), e("echarts/chart/scatter", ["require", "zrender/core/util", "../echarts", "./scatter/ScatterSeries", "./scatter/ScatterView", "../visual/symbol", "../layout/points"], function(t) {
		var e = t("zrender/core/util"),
			i = t("../echarts");
		t("./scatter/ScatterSeries"), t("./scatter/ScatterView"), i.registerVisualCoding("chart", e.curry(t("../visual/symbol"), "scatter", "circle", null)), i.registerLayout(e.curry(t("../layout/points"), "scatter"))
	}), e("echarts/component/tooltip/TooltipModel", ["require", "../../echarts"], function(t) {
		t("../../echarts").extendComponentModel({
			type: "tooltip",
			defaultOption: {
				zlevel: 0,
				z: 8,
				show: !0,
				showContent: !0,
				trigger: "item",
				triggerOn: "mousemove",
				alwaysShowContent: !1,
				hideDelay: 100,
				transitionDuration: .4,
				enterable: !1,
				backgroundColor: "rgba(50,50,50,0.7)",
				borderColor: "#333",
				borderRadius: 4,
				borderWidth: 0,
				padding: 5,
				axisPointer: {
					type: "line",
					axis: "auto",
					animation: !0,
					animationDurationUpdate: 200,
					animationEasingUpdate: "exponentialOut",
					lineStyle: {
						color: "#555",
						width: 1,
						type: "solid"
					},
					crossStyle: {
						color: "#555",
						width: 1,
						type: "dashed",
						textStyle: {}
					},
					shadowStyle: {
						color: "rgba(150,150,150,0.3)"
					}
				},
				textStyle: {
					color: "#fff",
					fontSize: 14
				}
			}
		})
	}), e("echarts/component/tooltip/TooltipContent", ["require", "zrender/core/util", "zrender/tool/color", "zrender/core/event", "../../util/format"], function(t) {
		function e(t) {
			var e = "cubic-bezier(0.23, 1, 0.32, 1)",
				i = "left " + t + "s " + e + ",top " + t + "s " + e;
			return a.map(d, function(t) {
				return t + "transition:" + i
			}).join(";")
		}
		function i(t) {
			var e = [],
				i = t.get("fontSize"),
				n = t.getTextColor();
			return n && e.push("color:" + n), e.push("font:" + t.getFont()), i && e.push("line-height:" + Math.round(3 * i / 2) + "px"), c(["decoration", "align"], function(i) {
				var n = t.get(i);
				n && e.push("text-" + i + ":" + n)
			}), e.join(";")
		}
		function n(t) {
			t = t;
			var n = [],
				r = t.get("transitionDuration"),
				o = t.get("backgroundColor"),
				a = t.getModel("textStyle"),
				l = t.get("padding");
			return r && n.push(e(r)), o && (n.push("background-Color:" + s.toHex(o)), n.push("filter:alpha(opacity=70)"), n.push("background-Color:" + o)), c(["width", "color", "radius"], function(e) {
				var i = "border-" + e,
					r = h(i),
					o = t.get(r);
				null != o && n.push(i + ":" + o + ("color" === e ? "" : "px"))
			}), n.push(i(a)), null != l && n.push("padding:" + u.normalizeCssArray(l).join("px ") + "px"), n.join(";") + ";"
		}
		function r(t, e) {
			var i = document.createElement("div"),
				n = e.getZr();
			this.el = i, this._x = e.getWidth() / 2, this._y = e.getHeight() / 2, t.appendChild(i), this._container = t, this._show = !1, this._hideTimeout;
			var r = this;
			i.onmouseenter = function() {
				r.enterable && (clearTimeout(r._hideTimeout), r._show = !0), r._inContent = !0
			}, i.onmousemove = function(e) {
				if (!r.enterable) {
					var i = n.handler;
					l.normalizeEvent(t, e), i.dispatch("mousemove", e)
				}
			}, i.onmouseleave = function() {
				r.enterable && r._show && r.hideLater(r._hideDelay), r._inContent = !1
			}, o(i, t)
		}
		function o(t, e) {
			function i(t) {
				n(t.target) && t.preventDefault()
			}
			function n(i) {
				for (; i && i !== e;) {
					if (i === t) return !0;
					i = i.parentNode
				}
			}
			l.addEventListener(e, "touchstart", i), l.addEventListener(e, "touchmove", i), l.addEventListener(e, "touchend", i)
		}
		var a = t("zrender/core/util"),
			s = t("zrender/tool/color"),
			l = t("zrender/core/event"),
			u = t("../../util/format"),
			c = a.each,
			h = u.toCamelCase,
			d = ["", "-webkit-", "-moz-", "-o-"],
			p = "position:absolute;display:block;border-style:solid;white-space:nowrap;";
		return r.prototype = {
			constructor: r,
			enterable: !0,
			update: function() {
				var t = this._container,
					e = t.currentStyle || document.defaultView.getComputedStyle(t),
					i = t.style;
				"absolute" !== i.position && "absolute" !== e.position && (i.position = "relative"), this.hide()
			},
			show: function(t) {
				clearTimeout(this._hideTimeout), this.el.style.cssText = p + n(t) + ";left:" + this._x + "px;top:" + this._y + "px;", this._show = !0
			},
			setContent: function(t) {
				var e = this.el;
				e.innerHTML = t, e.style.display = t ? "block" : "none"
			},
			moveTo: function(t, e) {
				var i = this.el.style;
				i.left = t + "px", i.top = e + "px", this._x = t, this._y = e
			},
			hide: function() {
				this.el.style.display = "none", this._show = !1
			},
			hideLater: function(t) {
				!this._show || this._inContent && this.enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(a.bind(this.hide, this), t)) : this.hide())
			},
			isShow: function() {
				return this._show
			}
		}, r
	}), e("echarts/component/tooltip/TooltipView", ["require", "./TooltipContent", "../../util/graphic", "zrender/core/util", "../../util/format", "../../util/number", "../../echarts"], function(t) {
		function e(t, e) {
			if (!t || !e) return !1;
			var i = p.round;
			return i(t[0]) === i(e[0]) && i(t[1]) === i(e[1])
		}
		function i(t, e, i, n) {
			return {
				x1: t,
				y1: e,
				x2: i,
				y2: n
			}
		}
		function n(t, e, i, n) {
			return {
				x: t,
				y: e,
				width: i,
				height: n
			}
		}
		function r(t, e, i, n, r, o) {
			return {
				cx: t,
				cy: e,
				r0: i,
				r: n,
				startAngle: r,
				endAngle: o,
				clockwise: !0
			}
		}
		function o(t, e, i, n, r) {
			var o = i.clientWidth,
				a = i.clientHeight,
				s = 20;
			return t + o + s > n ? t -= o + s : t += s, e + a + s > r ? e -= a + s : e += s, [t, e]
		}
		function a(t, e, i) {
			var n = i.clientWidth,
				r = i.clientHeight,
				o = 5,
				a = 0,
				s = 0,
				l = e.width,
				u = e.height;
			switch (t) {
			case "inside":
				a = e.x + l / 2 - n / 2, s = e.y + u / 2 - r / 2;
				break;
			case "top":
				a = e.x + l / 2 - n / 2, s = e.y - r - o;
				break;
			case "bottom":
				a = e.x + l / 2 - n / 2, s = e.y + u + o;
				break;
			case "left":
				a = e.x - n - o, s = e.y + u / 2 - r / 2;
				break;
			case "right":
				a = e.x + l + o, s = e.y + u / 2 - r / 2
			}
			return [a, s]
		}
		function s(t, e, i, n, r, s, l) {
			var u = l.getWidth(),
				c = l.getHeight(),
				d = s && s.getBoundingRect().clone();
			if (s && d.applyTransform(s.transform), "function" == typeof t && (t = t([e, i], r, d)), h.isArray(t)) e = f(t[0], u), i = f(t[1], c);
			else if ("string" == typeof t && s) {
				var p = a(t, d, n.el);
				e = p[0], i = p[1]
			} else {
				var p = o(e, i, n.el, u, c);
				e = p[0], i = p[1]
			}
			n.moveTo(e, i)
		}
		function l(t) {
			var e = t.coordinateSystem,
				i = t.get("tooltip.trigger", !0);
			return !(!e || "cartesian2d" !== e.type && "polar" !== e.type || "item" === i)
		}
		var u = t("./TooltipContent"),
			c = t("../../util/graphic"),
			h = t("zrender/core/util"),
			d = t("../../util/format"),
			p = t("../../util/number"),
			f = p.parsePercent;
		t("../../echarts").extendComponentView({
			type: "tooltip",
			_axisPointers: {},
			init: function(t, e) {
				var i = new u(e.getDom(), e);
				this._tooltipContent = i, e.on("showTip", this._manuallyShowTip, this), e.on("hideTip", this._hide, this)
			},
			render: function(t, e, i) {
				this.group.removeAll(), this._axisPointers = {}, this._tooltipModel = t, this._ecModel = e, this._api = i, this._lastHover = {};
				var n = this._tooltipContent;
				n.update(), n.enterable = t.get("enterable"), this._alwaysShowContent = t.get("alwaysShowContent"), this._seriesGroupByAxis = this._prepareAxisTriggerData(t, e);
				var r = this._crossText;
				r && this.group.add(r);
				var o = this._api.getZr(),
					a = this._tryShow;
				o.off("click", a), o.off("mousemove", a), o.off("mouseout", this._hide), "click" === t.get("triggerOn") ? o.on("click", a, this) : (o.on("mousemove", a, this), o.on("mouseout", this._hide, this))
			},
			_manuallyShowTip: function(t) {
				if (t.from !== this.uid) {
					var e = this._ecModel,
						i = t.seriesIndex,
						n = t.dataIndex,
						r = e.getSeriesByIndex(i),
						o = this._api;
					if (null == t.x || null == t.y) {
						if (r || e.eachSeries(function(t) {
							l(t) && !r && (r = t)
						}), r) {
							var a = r.getData();
							null == n && (n = a.indexOfName(t.name));
							var s = a.getItemGraphicEl(n);
							if (s) {
								var u = s.getBoundingRect().clone();
								u.applyTransform(s.transform);
								var c = u.x + u.width / 2,
									h = u.y + u.height / 2;
								this._tryShow({
									offsetX: c,
									offsetY: h,
									target: s,
									event: {}
								})
							}
						}
					} else o.getZr().handler.dispatch("mousemove", {
						zrX: t.x,
						zrY: t.y
					})
				}
			},
			_prepareAxisTriggerData: function(t, e) {
				var i = {};
				return e.eachSeries(function(t) {
					if (l(t)) {
						var e, n, r = t.coordinateSystem;
						"cartesian2d" === r.type ? (e = r.getBaseAxis(), n = e.dim + e.index) : (e = r.getBaseAxis(), n = e.dim + r.name), i[n] = i[n] || {
							coordSys: [],
							series: []
						}, i[n].coordSys.push(r), i[n].series.push(t)
					}
				}, this), i
			},
			_tryShow: function(t) {
				var e = t.target,
					i = this._tooltipModel,
					n = i.get("trigger"),
					r = this._ecModel,
					o = this._api;
				if (i) if (e && null != e.dataIndex) {
					var a = e.hostModel || r.getSeriesByIndex(e.seriesIndex),
						s = e.dataIndex,
						l = a.getData().getItemModel(s);
					"axis" === (l.get("tooltip.trigger") || n) ? this._showAxisTooltip(i, r, t) : (this._ticket = "", this._hideAxisPointer(), this._resetLastHover(), this._showItemTooltipContent(a, s, t)), o.dispatchAction({
						type: "showTip",
						from: this.uid,
						dataIndex: e.dataIndex,
						seriesIndex: e.seriesIndex
					})
				} else "item" === n ? this._hide() : this._showAxisTooltip(i, r, t), o.dispatchAction({
					type: "showTip",
					from: this.uid,
					x: t.offsetX,
					y: t.offsetY
				})
			},
			_showAxisTooltip: function(t, i, n) {
				var r = t.getModel("axisPointer"),
					o = r.get("type");
				if ("cross" === o) {
					var a = n.target;
					if (a && null != a.dataIndex) {
						var s = i.getSeriesByIndex(a.seriesIndex),
							l = a.dataIndex;
						this._showItemTooltipContent(s, l, n)
					}
				}
				this._showAxisPointer();
				var u = !0;
				h.each(this._seriesGroupByAxis, function(t) {
					var i = t.coordSys,
						a = i[0],
						s = [n.offsetX, n.offsetY];
					if (!a.containPoint(s)) return void this._hideAxisPointer(a.name);
					u = !1;
					var l = a.dimensions,
						c = a.pointToData(s, !0);
					s = a.dataToPoint(c);
					var d = a.getBaseAxis(),
						p = r.get("axis");
					"auto" === p && (p = d.dim);
					var f = !1,
						m = this._lastHover;
					if ("cross" === o) e(m.data, c) && (f = !0), m.data = c;
					else {
						var g = h.indexOf(l, p);
						m.data === c[g] && (f = !0), m.data = c[g]
					}
					"cartesian2d" !== a.type || f ? "polar" !== a.type || f || this._showPolarPointer(r, a, p, s) : this._showCartesianPointer(r, a, p, s), "cross" !== o && this._showSeriesTooltipContent(a, t.series, s, c, f)
				}, this), u && this._hide()
			},
			_showCartesianPointer: function(t, e, r, o) {
				function a(n, r, o) {
					var a = "x" === n ? i(r[0], o[0], r[0], o[1]) : i(o[0], r[1], o[1], r[1]),
						s = l._getPointerElement(e, t, n, a);
					h ? c.updateProps(s, {
						shape: a
					}, t) : s.attr({
						shape: a
					})
				}
				function s(i, r, o) {
					var a = e.getAxis(i),
						s = a.getBandWidth(),
						u = o[1] - o[0],
						d = "x" === i ? n(r[0] - s / 2, o[0], s, u) : n(o[0], r[1] - s / 2, u, s),
						p = l._getPointerElement(e, t, i, d);
					h ? c.updateProps(p, {
						shape: d
					}, t) : p.attr({
						shape: d
					})
				}
				var l = this,
					u = t.get("type"),
					h = "cross" !== u;
				if ("cross" === u) a("x", o, e.getAxis("y").getGlobalExtent()), a("y", o, e.getAxis("x").getGlobalExtent()), this._updateCrossText(e, o, t);
				else {
					var d = e.getAxis("x" === r ? "y" : "x"),
						p = d.getGlobalExtent();
					"cartesian2d" === e.type && ("line" === u ? a : s)(r, o, p)
				}
			},
			_showPolarPointer: function(t, e, n, o) {
				function a(n, r, o) {
					var a, s = e.pointToCoord(r);
					if ("angle" === n) {
						var u = e.coordToPoint([o[0], s[1]]),
							h = e.coordToPoint([o[1], s[1]]);
						a = i(u[0], u[1], h[0], h[1])
					} else a = {
						cx: e.cx,
						cy: e.cy,
						r: s[0]
					};
					var d = l._getPointerElement(e, t, n, a);
					p ? c.updateProps(d, {
						shape: a
					}, t) : d.attr({
						shape: a
					})
				}
				function s(i, n, o) {
					var a, s = e.getAxis(i),
						u = s.getBandWidth(),
						h = e.pointToCoord(n),
						d = Math.PI / 180;
					a = "angle" === i ? r(e.cx, e.cy, o[0], o[1], (-h[1] - u / 2) * d, (-h[1] + u / 2) * d) : r(e.cx, e.cy, h[0] - u / 2, h[0] + u / 2, 0, 2 * Math.PI);
					var f = l._getPointerElement(e, t, i, a);
					p ? c.updateProps(f, {
						shape: a
					}, t) : f.attr({
						shape: a
					})
				}
				var l = this,
					u = t.get("type"),
					h = e.getAngleAxis(),
					d = e.getRadiusAxis(),
					p = "cross" !== u;
				if ("cross" === u) a("angle", o, d.getExtent()), a("radius", o, h.getExtent()), this._updateCrossText(e, o, t);
				else {
					var f = e.getAxis("radius" === n ? "angle" : "radius"),
						m = f.getExtent();
					("line" === u ? a : s)(n, o, m)
				}
			},
			_updateCrossText: function(t, e, i) {
				var n = i.getModel("crossStyle"),
					r = n.getModel("textStyle"),
					o = this._tooltipModel,
					a = this._crossText;
				a || (a = this._crossText = new c.Text({
					style: {
						textAlign: "left",
						textBaseline: "bottom"
					}
				}), this.group.add(a));
				var s = t.pointToData(e),
					l = t.dimensions;
				s = h.map(s, function(e, i) {
					var n = t.getAxis(l[i]);
					return e = "category" === n.type || "time" === n.type ? n.scale.getLabel(e) : d.addCommas(e.toFixed(n.getPixelPrecision()))
				}), a.setStyle({
					fill: r.getTextColor() || n.get("color"),
					textFont: r.getFont(),
					text: s.join(", "),
					x: e[0] + 5,
					y: e[1] - 5
				}), a.z = o.get("z"), a.zlevel = o.get("zlevel")
			},
			_getPointerElement: function(t, e, i, n) {
				var r = this._tooltipModel,
					o = r.get("z"),
					a = r.get("zlevel"),
					s = this._axisPointers,
					l = t.name;
				if (s[l] = s[l] || {}, s[l][i]) return s[l][i];
				var u = e.get("type"),
					h = e.getModel(u + "Style"),
					d = "shadow" === u,
					p = h[d ? "getAreaStyle" : "getLineStyle"](),
					f = "polar" === t.type ? d ? "Sector" : "radius" === i ? "Circle" : "Line" : d ? "Rect" : "Line";
				d ? p.stroke = null : p.fill = null;
				var m = s[l][i] = new c[f]({
					style: p,
					z: o,
					zlevel: a,
					silent: !0,
					shape: n
				});
				return this.group.add(m), m
			},
			_showSeriesTooltipContent: function(t, e, i, n, r) {
				var o = this._tooltipModel,
					a = this._tooltipContent,
					l = t.getBaseAxis(),
					u = n["x" === l.dim || "radius" === l.dim ? 0 : 1],
					c = h.map(e, function(t) {
						return {
							seriesIndex: t.seriesIndex,
							dataIndex: t.getData().indexOfNearest(t.getDimensionsOnAxis(l.dim), u)
						}
					}),
					p = this._api,
					f = this._lastHover;
				if (f.payloadBatch && !r && this._api.dispatchAction({
					type: "downplay",
					batch: h.clone(f.payloadBatch)
				}), r || (this._api.dispatchAction({
					type: "highlight",
					batch: h.clone(c)
				}), f.payloadBatch = c), l && o.get("showContent")) {
					var m, g = o.get("formatter"),
						v = o.get("position"),
						y = h.map(e, function(t, e) {
							return t.getDataParams(c[e].dataIndex)
						});
					a.show(o);
					var _ = c[0].dataIndex;
					if (!r) {
						if (this._ticket = "", g) {
							if ("string" == typeof g) m = d.formatTpl(g, y);
							else if ("function" == typeof g) {
								var x = this,
									b = "axis_" + t.name + "_" + _,
									w = function(t, e) {
										t === x._ticket && (a.setContent(e), s(v, i[0], i[1], a, y, null, p))
									};
								x._ticket = b, m = g(y, b, w)
							}
						} else m = e[0].getData().getName(_) + "<br />" + h.map(e, function(t, e) {
							return t.formatTooltip(c[e].dataIndex, !0)
						}).join("<br />");
						a.setContent(m)
					}
					s(v, i[0], i[1], a, y, null, p)
				}
			},
			_showItemTooltipContent: function(t, e, i) {
				var n = this._api,
					r = t.getData(),
					o = r.getItemModel(e),
					a = this._tooltipModel,
					l = this._tooltipContent,
					u = o.getModel("tooltip");
				if (u.parentModel ? u.parentModel.parentModel = a : u.parentModel = this._tooltipModel, u.get("showContent")) {
					var c, h = u.get("formatter"),
						p = u.get("position"),
						f = t.getDataParams(e);
					if (h) {
						if ("string" == typeof h) c = d.formatTpl(h, f);
						else if ("function" == typeof h) {
							var m = this,
								g = "item_" + t.name + "_" + e,
								v = function(t, e) {
									t === m._ticket && (l.setContent(e), s(p, i.offsetX, i.offsetY, l, f, i.target, n))
								};
							m._ticket = g, c = h(f, g, v)
						}
					} else c = t.formatTooltip(e);
					l.show(u), l.setContent(c), s(p, i.offsetX, i.offsetY, l, f, i.target, n)
				}
			},
			_showAxisPointer: function(t) {
				if (t) {
					var e = this._axisPointers[t];
					e && h.each(e, function(t) {
						t.show()
					})
				} else this.group.eachChild(function(t) {
					t.show()
				}), this.group.show()
			},
			_resetLastHover: function() {
				var t = this._lastHover;
				t.payloadBatch && this._api.dispatchAction({
					type: "downplay",
					batch: t.payloadBatch
				}), this._lastHover = {}
			},
			_hideAxisPointer: function(t) {
				if (t) {
					var e = this._axisPointers[t];
					e && h.each(e, function(t) {
						t.hide()
					})
				} else this.group.hide()
			},
			_hide: function() {
				this._hideAxisPointer(), this._resetLastHover(), this._alwaysShowContent || this._tooltipContent.hideLater(this._tooltipModel.get("hideDelay"))
			},
			dispose: function(t, e) {
				var i = e.getZr();
				i.off("click", this._tryShow), i.off("mousemove", this._tryShow), i.off("mouseout", this._hide), e.off("showTip")
			}
		})
	}), e("echarts/component/tooltip", ["require", "./tooltip/TooltipModel", "./tooltip/TooltipView", "../echarts", "../echarts"], function(t) {
		t("./tooltip/TooltipModel"), t("./tooltip/TooltipView"), t("../echarts").registerAction({
			type: "showTip",
			event: "showTip",
			update: "none"
		}, function() {}), t("../echarts").registerAction({
			type: "hideTip",
			event: "hideTip",
			update: "none"
		}, function() {})
	}), e("echarts/coord/polar/RadiusAxis", ["require", "zrender/core/util", "../Axis"], function(t) {
		function e(t, e) {
			n.call(this, "radius", t, e), this.type = "category"
		}
		var i = t("zrender/core/util"),
			n = t("../Axis");
		return e.prototype = {
			constructor: e,
			dataToRadius: n.prototype.dataToCoord,
			radiusToData: n.prototype.coordToData
		}, i.inherits(e, n), e
	}), e("echarts/coord/polar/AngleAxis", ["require", "zrender/core/util", "../Axis"], function(t) {
		function e(t, e) {
			e = e || [0, 360], n.call(this, "angle", t, e), this.type = "category"
		}
		var i = t("zrender/core/util"),
			n = t("../Axis");
		return e.prototype = {
			constructor: e,
			dataToAngle: n.prototype.dataToCoord,
			angleToData: n.prototype.coordToData
		}, i.inherits(e, n), e
	}), e("echarts/coord/polar/Polar", ["require", "./RadiusAxis", "./AngleAxis"], function(t) {
		var e = t("./RadiusAxis"),
			i = t("./AngleAxis"),
			n = function(t) {
				this.name = t || "", this.cx = 0, this.cy = 0, this.dimensions = ["radius", "angle"], this._radiusAxis = new e, this._angleAxis = new i
			};
		return n.prototype = {
			constructor: n,
			type: "polar",
			containPoint: function(t) {
				var e = this.pointToCoord(t);
				return this._radiusAxis.contain(e[0]) && this._angleAxis.contain(e[1])
			},
			containData: function(t) {
				return this._radiusAxis.containData(t[0]) && this._angleAxis.containData(t[1])
			},
			getAxis: function(t) {
				return this["_" + t + "Axis"]
			},
			getAxesByScale: function(t) {
				var e = [],
					i = this._angleAxis,
					n = this._radiusAxis;
				return i.scale.type === t && e.push(i), n.scale.type === t && e.push(n), e
			},
			getAngleAxis: function() {
				return this._angleAxis
			},
			getRadiusAxis: function() {
				return this._radiusAxis
			},
			getOtherAxis: function(t) {
				var e = this._angleAxis;
				return t === e ? this._radiusAxis : e
			},
			getBaseAxis: function() {
				return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAngleAxis()
			},
			dataToPoints: function(t) {
				return t.mapArray(this.dimensions, function(t, e) {
					return this.dataToPoint([t, e])
				}, this)
			},
			dataToPoint: function(t, e) {
				return this.coordToPoint([this._radiusAxis.dataToRadius(t[0], e), this._angleAxis.dataToAngle(t[1], e)])
			},
			pointToData: function(t, e) {
				var i = this.pointToCoord(t);
				return [this._radiusAxis.radiusToData(i[0], e), this._angleAxis.angleToData(i[1], e)]
			},
			pointToCoord: function(t) {
				var e = t[0] - this.cx,
					i = t[1] - this.cy,
					n = this.getAngleAxis(),
					r = n.getExtent(),
					o = Math.min(r[0], r[1]),
					a = Math.max(r[0], r[1]);
				n.inverse ? o = a - 360 : a = o + 360;
				var s = Math.sqrt(e * e + i * i);
				e /= s, i /= s;
				for (var l = Math.atan2(-i, e) / Math.PI * 180, u = o > l ? 1 : -1; o > l || l > a;) l += 360 * u;
				return [s, l]
			},
			coordToPoint: function(t) {
				var e = t[0],
					i = t[1] / 180 * Math.PI,
					n = Math.cos(i) * e + this.cx,
					r = -Math.sin(i) * e + this.cy;
				return [n, r]
			}
		}, n
	}), e("echarts/coord/polar/AxisModel", ["require", "zrender/core/util", "../../model/Component", "../axisModelCreator", "../axisModelCommonMixin"], function(t) {
		function e(t, e) {
			return e.type || (e.data ? "category" : "value")
		}
		var i = t("zrender/core/util"),
			n = t("../../model/Component"),
			r = t("../axisModelCreator"),
			o = n.extend({
				type: "polarAxis",
				axis: null
			});
		i.merge(o.prototype, t("../axisModelCommonMixin"));
		var a = {
			angle: {
				polarIndex: 0,
				startAngle: 90,
				clockwise: !0,
				splitNumber: 12,
				axisLabel: {
					rotate: !1
				}
			},
			radius: {
				polarIndex: 0,
				splitNumber: 5
			}
		};
		r("angle", o, e, a.angle), r("radius", o, e, a.radius)
	}), e("echarts/coord/polar/PolarModel", ["require", "./AxisModel", "../../echarts"], function(t) {
		t("./AxisModel"), t("../../echarts").extendComponentModel({
			type: "polar",
			dependencies: ["polarAxis", "angleAxis"],
			coordinateSystem: null,
			findAxisModel: function(t) {
				var e, i = this.ecModel;
				return i.eachComponent(t, function(t) {
					i.getComponent("polar", t.getShallow("polarIndex")) === this && (e = t)
				}, this), e
			},
			defaultOption: {
				zlevel: 0,
				z: 0,
				center: ["50%", "50%"],
				radius: "80%"
			}
		})
	}), e("echarts/coord/polar/polarCreator", ["require", "./Polar", "../../util/number", "zrender/core/util", "../../coord/axisHelper", "./PolarModel", "../../CoordinateSystem"], function(t) {
		function e(t, e) {
			var i = t.get("center"),
				n = t.get("radius"),
				r = e.getWidth(),
				a = e.getHeight(),
				s = o.parsePercent;
			this.cx = s(i[0], r), this.cy = s(i[1], a);
			var l = this.getRadiusAxis(),
				u = Math.min(r, a) / 2;
			l.setExtent(0, s(n, u))
		}
		function i(t, e) {
			if (t.type = e.get("type"), t.scale = s.createScaleByModel(e), t.onBand = e.get("boundaryGap") && "category" === t.type, "angleAxis" === e.mainType) {
				var i = e.get("startAngle");
				t.inverse = e.get("inverse") ^ e.get("clockwise"), t.setExtent(i, i + (t.inverse ? -360 : 360))
			}
			e.axis = t, t.model = e
		}
		function n(t, e, i) {
			e.eachSeries(function(e) {
				if ("polar" === e.get("coordinateSystem")) {
					var i = e.get("polarIndex") || 0,
						n = t[i];
					if (!n) return;
					e.coordinateSystem = n;
					var r = n.getRadiusAxis(),
						o = n.getAngleAxis(),
						a = e.getData();
					r.scale.unionExtent(a.getDataExtent("radius", "category" !== r.type)), o.scale.unionExtent(a.getDataExtent("angle", "category" !== o.type))
				}
			}), a.each(t, function(t) {
				var e = t.getAngleAxis(),
					i = t.getRadiusAxis();
				l(e, e.model), l(i, i.model)
			})
		}
		var r = t("./Polar"),
			o = t("../../util/number"),
			a = t("zrender/core/util"),
			s = t("../../coord/axisHelper"),
			l = s.niceScaleExtent;
		t("./PolarModel");
		var u = {
			create: function(t, o) {
				var s = [];
				return t.eachComponent("polar", function(t, n) {
					var a = new r(n);
					a.resize = e;
					var l = a.getRadiusAxis(),
						u = a.getAngleAxis(),
						c = t.findAxisModel("radiusAxis"),
						h = t.findAxisModel("angleAxis");
					i(l, c), i(u, h), a.resize(t, o), s.push(a), t.coordinateSystem = a
				}), n(s, t, o), a.each(s, function(t) {
					var e = t.getAngleAxis();
					if ("category" === e.type && !e.onBand) {
						var i = e.getExtent(),
							n = 360 / e.scale.count();
						e.inverse ? i[1] += n : i[1] -= n, e.setExtent(i[0], i[1])
					}
				}), s
			}
		};
		t("../../CoordinateSystem").register("polar", u)
	}), e("echarts/component/axis/AngleAxisView", ["require", "zrender/core/util", "../../util/graphic", "../../model/Model", "../../echarts"], function(t) {
		function e(t, e, i, n) {
			var r = t.coordToPoint([e, n]),
				o = t.coordToPoint([i, n]);
			return {
				x1: r[0],
				y1: r[1],
				x2: o[0],
				y2: o[1]
			}
		}
		var i = t("zrender/core/util"),
			n = t("../../util/graphic"),
			r = t("../../model/Model"),
			o = ["axisLine", "axisLabel", "axisTick", "splitLine", "splitArea"];
		t("../../echarts").extendComponentView({
			type: "angleAxis",
			render: function(t, e) {
				if (this.group.removeAll(), t.get("show")) {
					var n = e.getComponent("polar", t.get("polarIndex")),
						r = t.axis,
						a = n.coordinateSystem,
						s = a.getRadiusAxis().getExtent(),
						l = r.getTicksCoords();
					"category" !== r.type && l.pop(), i.each(o, function(e) {
						t.get(e + ".show") && this["_" + e](t, a, l, s)
					}, this)
				}
			},
			_axisLine: function(t, e, i, r) {
				var o = t.getModel("axisLine.lineStyle"),
					a = new n.Circle({
						shape: {
							cx: e.cx,
							cy: e.cy,
							r: r[1]
						},
						style: o.getLineStyle(),
						z2: 1,
						silent: !0
					});
				a.style.fill = null, this.group.add(a)
			},
			_axisTick: function(t, r, o, a) {
				var s = t.getModel("axisTick"),
					l = (s.get("inside") ? -1 : 1) * s.get("length"),
					u = i.map(o, function(t) {
						return new n.Line({
							shape: e(r, a[1], a[1] + l, t)
						})
					});
				this.group.add(n.mergePath(u, {
					style: s.getModel("lineStyle").getLineStyle()
				}))
			},
			_axisLabel: function(t, e, i, o) {
				for (var a = t.axis, s = t.get("data"), l = t.getModel("axisLabel"), u = l.getModel("textStyle"), c = t.getFormattedLabels(), h = l.get("margin"), d = a.getLabelsCoords(), p = 0; p < i.length; p++) {
					var f = o[1],
						m = e.coordToPoint([f + h, d[p]]),
						g = e.cx,
						v = e.cy,
						y = Math.abs(m[0] - g) / f < .3 ? "center" : m[0] > g ? "left" : "right",
						_ = Math.abs(m[1] - v) / f < .3 ? "middle" : m[1] > v ? "top" : "bottom",
						x = u;
					s && s[p] && s[p].textStyle && (x = new r(s[p].textStyle, u)), this.group.add(new n.Text({
						style: {
							x: m[0],
							y: m[1],
							fill: x.getTextColor(),
							text: c[p],
							textAlign: y,
							textBaseline: _,
							textFont: x.getFont()
						},
						silent: !0
					}))
				}
			},
			_splitLine: function(t, r, o, a) {
				var s = t.getModel("splitLine"),
					l = s.getModel("lineStyle"),
					u = l.get("color"),
					c = 0;
				u = u instanceof Array ? u : [u];
				for (var h = [], d = 0; d < o.length; d++) {
					var p = c++ % u.length;
					h[p] = h[p] || [], h[p].push(new n.Line({
						shape: e(r, a[0], a[1], o[d])
					}))
				}
				for (var d = 0; d < h.length; d++) this.group.add(n.mergePath(h[d], {
					style: i.defaults({
						stroke: u[d % u.length]
					}, l.getLineStyle()),
					silent: !0,
					z: t.get("z")
				}))
			},
			_splitArea: function(t, e, r, o) {
				var a = t.getModel("splitArea"),
					s = a.getModel("areaStyle"),
					l = s.get("color"),
					u = 0;
				l = l instanceof Array ? l : [l];
				for (var c = [], h = Math.PI / 180, d = -r[0] * h, p = Math.min(o[0], o[1]), f = Math.max(o[0], o[1]), m = t.get("clockwise"), g = 1; g < r.length; g++) {
					var v = u++ % l.length;
					c[v] = c[v] || [], c[v].push(new n.Sector({
						shape: {
							cx: e.cx,
							cy: e.cy,
							r0: p,
							r: f,
							startAngle: d,
							endAngle: -r[g] * h,
							clockwise: m
						},
						silent: !0
					})), d = -r[g] * h
				}
				for (var g = 0; g < c.length; g++) this.group.add(n.mergePath(c[g], {
					style: i.defaults({
						fill: l[g % l.length]
					}, s.getAreaStyle()),
					silent: !0
				}))
			}
		})
	}), e("echarts/component/angleAxis", ["require", "../coord/polar/polarCreator", "./axis/AngleAxisView"], function(t) {
		t("../coord/polar/polarCreator"), t("./axis/AngleAxisView")
	}), e("echarts/component/axis/RadiusAxisView", ["require", "zrender/core/util", "../../util/graphic", "./AxisBuilder", "../../echarts"], function(t) {
		function e(t, e, i) {
			return {
				position: [t.cx, t.cy],
				rotation: i / 180 * Math.PI,
				labelDirection: -1,
				tickDirection: -1,
				nameDirection: 1,
				labelRotation: e.getModel("axisLabel").get("rotate"),
				z2: 1
			}
		}
		var i = t("zrender/core/util"),
			n = t("../../util/graphic"),
			r = t("./AxisBuilder"),
			o = ["axisLine", "axisLabel", "axisTick", "axisName"],
			a = ["splitLine", "splitArea"];
		t("../../echarts").extendComponentView({
			type: "radiusAxis",
			render: function(t, n) {
				if (this.group.removeAll(), t.get("show")) {
					var s = n.getComponent("polar", t.get("polarIndex")),
						l = s.coordinateSystem.getAngleAxis(),
						u = t.axis,
						c = s.coordinateSystem,
						h = u.getTicksCoords(),
						d = l.getExtent()[0],
						p = u.getExtent(),
						f = e(c, t, d),
						m = new r(t, f);
					i.each(o, m.add, m), this.group.add(m.getGroup()), i.each(a, function(e) {
						t.get(e + ".show") && this["_" + e](t, c, d, p, h)
					}, this)
				}
			},
			_splitLine: function(t, e, r, o, a) {
				var s = t.getModel("splitLine"),
					l = s.getModel("lineStyle"),
					u = l.get("color"),
					c = 0;
				u = u instanceof Array ? u : [u];
				for (var h = [], d = 0; d < a.length; d++) {
					var p = c++ % u.length;
					h[p] = h[p] || [], h[p].push(new n.Circle({
						shape: {
							cx: e.cx,
							cy: e.cy,
							r: a[d]
						},
						silent: !0
					}))
				}
				for (var d = 0; d < h.length; d++) this.group.add(n.mergePath(h[d], {
					style: i.defaults({
						stroke: u[d % u.length],
						fill: null
					}, l.getLineStyle()),
					silent: !0
				}))
			},
			_splitArea: function(t, e, r, o, a) {
				var s = t.getModel("splitArea"),
					l = s.getModel("areaStyle"),
					u = l.get("color"),
					c = 0;
				u = u instanceof Array ? u : [u];
				for (var h = [], d = a[0], p = 1; p < a.length; p++) {
					var f = c++ % u.length;
					h[f] = h[f] || [], h[f].push(new n.Sector({
						shape: {
							cx: e.cx,
							cy: e.cy,
							r0: d,
							r: a[p],
							startAngle: 0,
							endAngle: 2 * Math.PI
						},
						silent: !0
					})), d = a[p]
				}
				for (var p = 0; p < h.length; p++) this.group.add(n.mergePath(h[p], {
					style: i.defaults({
						fill: u[p % u.length]
					}, l.getAreaStyle()),
					silent: !0
				}))
			}
		})
	}), e("echarts/component/radiusAxis", ["require", "../coord/polar/polarCreator", "./axis/RadiusAxisView"], function(t) {
		t("../coord/polar/polarCreator"), t("./axis/RadiusAxisView")
	}), e("echarts/component/polar", ["require", "../coord/polar/polarCreator", "./angleAxis", "./radiusAxis", "../echarts"], function(t) {
		t("../coord/polar/polarCreator"), t("./angleAxis"), t("./radiusAxis"), t("../echarts").extendComponentView({
			type: "polar"
		})
	}), e("echarts/chart/radar/RadarSeries", ["require", "../helper/createListFromArray", "../../model/Series", "zrender/core/util", "../../util/number", "../../component/polar"], function(t) {
		var e = t("../helper/createListFromArray"),
			i = t("../../model/Series"),
			n = t("zrender/core/util"),
			r = t("../../util/number"),
			o = r.linearMap;
		return t("../../component/polar"), i.extend({
			type: "series.radar",
			dependencies: ["polar"],
			getInitialData: function(t, i) {
				var r = t.indicator,
					a = e(t.data, this, i);
				if (r) {
					var s = n.reduce(r, function(t, e, i) {
						return t[e.name] = e, t
					}, {});
					a = a.map(["radius"], function(t, e) {
						var i = s[a.getName(e)];
						return i && i.max ? o(t, [i.min || 0, i.max], [0, 1]) : void 0
					});
					var l = this.getRawValue;
					this.getRawValue = function(t) {
						var e = l.call(this, t),
							i = s[a.getName(t)];
						return i && null != i.max ? o(e, [0, 1], [i.min || 0, i.max]) : void 0
					}
				}
				return a
			},
			defaultOption: {
				zlevel: 0,
				z: 2,
				coordinateSystem: "polar",
				legendHoverLink: !0,
				polarIndex: 0,
				lineStyle: {
					normal: {
						width: 2,
						type: "solid"
					}
				},
				symbol: "emptyCircle",
				symbolSize: 4,
				showAllSymbol: !1
			}
		})
	}), e("echarts/chart/radar/RadarView", ["require", "../helper/SymbolDraw", "../../util/graphic", "zrender/core/util", "../../echarts"], function(t) {
		var e = t("../helper/SymbolDraw"),
			i = t("../../util/graphic"),
			n = t("zrender/core/util");
		return t("../../echarts").extendChartView({
			type: "radar",
			init: function() {
				this._symbolDraw = new e
			},
			render: function(t, e, r) {
				function o() {
					return n.map(u, function(t) {
						return [a.cx, a.cy]
					})
				}
				var a = t.coordinateSystem,
					s = this.group,
					l = t.getData(),
					u = l.mapArray(l.getItemLayout, !0);
				if (!(u.length < 1)) {
					u.push(u[0].slice());
					var c = this._polygon || (this._polygon = new i.Polygon({
						shape: {
							points: []
						}
					})),
						h = this._polyline || (this._polyline = new i.Polyline({
							shape: {
								points: []
							},
							z2: 10
						})),
						d = h.shape,
						p = c.shape,
						f = {
							shape: {
								points: u
							}
						};
					d.points.length !== u.length ? (p.points = o(), d.points = o(), i.initProps(h, f, t), i.initProps(c, f, t)) : (i.updateProps(h, f, t), i.updateProps(c, f, t)), this._symbolDraw.updateData(l), h.setStyle(n.extend(t.getModel("lineStyle.normal").getLineStyle(), {
						stroke: l.getVisual("color")
					}));
					var m = t.getModel("areaStyle.normal");
					c.ignore = m.isEmpty(), i.setHoverStyle(h, t.getModel("lineStyle.emphasis").getLineStyle()), c.ignore || (c.setStyle(n.defaults(m.getAreaStyle(), {
						fill: l.getVisual("color"),
						opacity: .7
					})), i.setHoverStyle(c, t.getModel("areaStyle.emphasis").getLineStyle())), s.add(h), s.add(c), s.add(this._symbolDraw.group), this._data = l
				}
			}
		})
	}), e("echarts/chart/radar/backwardCompat", ["require", "zrender/core/util", "../../scale/Interval"], function(t) {
		var e = t("zrender/core/util"),
			i = t("../../scale/Interval"),
			n = e.isArray,
			r = e.each,
			o = e.filter;
		return function(t) {
			var a = t.polar,
				s = t.radiusAxis,
				l = t.angleAxis,
				u = o(t.series, function(t) {
					return "radar" === t.type
				}) || [];
			a && u.length && (n(a) || (a = [a]), s ? n(s) || (s = [s]) : s = t.radiusAxis = [], l ? n(l) || (l = [l]) : l = t.angleAxis = [], r(a, function(n, a) {
				if (n.indicator) {
					var c = e.map(n.indicator, function(t) {
						var e = t.min,
							i = t.max;
						return null != i && i >= 0 && (e = 0), {
							name: t.text,
							min: e,
							max: i
						}
					}),
						h = e.find(s, function(t) {
							return (t.polarIndex || 0) === a
						}),
						d = e.find(l, function(t) {
							return (t.polarIndex || 0) === a
						});
					h || (h = {
						type: "value",
						polarIndex: a
					}, s.push(h)), d || (d = {
						type: "category",
						polarIndex: a
					}, l.push(d)), d.data = e.map(n.indicator, function(t) {
						var e = {
							value: t.text
						},
							i = t.axisLabel;
						return i && i.textStyle && (e.textStyle = i.textStyle), e
					}), d.startAngle = n.startAngle || 90, n.axisLine && (d.splitLine = n.axisLine), n.axisLabel && (d.axisLabel = n.axisLabel), n.splitLine && (h.splitLine = n.splitLine), n.splitArea && (h.splitArea = n.splitArea), h.splitLine = h.splitLine || {}, h.splitArea = h.splitArea || {}, null == h.splitLine.show && (h.splitLine.show = !0), null == h.splitArea.show && (h.splitArea.show = !0), d.boundaryGap = !1, h.min = 0, h.max = 1, h.interval = 1 / (n.splitNumber || 5), h.axisLine = {
						show: !1
					}, h.axisLabel = {
						show: !1
					}, h.axisTick = {
						show: !1
					};
					var p = o(u, function(t) {
						return (t.polarIndex || 0) === a
					}),
						f = e.map(c, function() {
							return []
						});
					r(p, function(i) {
						if (i.indicator = c, i.data[0] && e.isArray(i.data[0].value)) {
							var n = i.data,
								r = n[0];
							i.data = r.value, i.name = r.name;
							for (var o = 1; o < n.length; o++) {
								var r = n[o],
									a = e.clone(i);
								t.series.push(e.extend(a, {
									name: r.name,
									data: r.value,
									indicator: c
								}))
							}
							for (var o = 0; o < r.value.length; o++) for (var s = 0; s < n.length; s++) f[o].push(n[s].value[o])
						}
					}), r(f, function(t, e) {
						var r = new i,
							o = 1 / 0,
							a = -(1 / 0),
							s = t.length;
						if (s) {
							for (var l = 0; s > l; l++) o = Math.min(o, t[l]), a = Math.max(a, t[l]);
							r.setExtent(o, a), r.niceExtent(n.splitNumber || 5);
							var u = r.getExtent();
							null == c[e].min && (c[e].min = u[0]), null == c[e].max && (c[e].max = u[1])
						}
					})
				}
			}))
		}
	}), e("echarts/chart/radar", ["require", "zrender/core/util", "../echarts", "./radar/RadarSeries", "./radar/RadarView", "../visual/symbol", "../layout/points", "./radar/backwardCompat"], function(t) {
		var e = t("zrender/core/util"),
			i = t("../echarts");
		t("./radar/RadarSeries"), t("./radar/RadarView"), i.registerVisualCoding("chart", e.curry(t("../visual/symbol"), "radar", "circle", null)), i.registerLayout(e.curry(t("../layout/points"), "radar")), i.registerPreprocessor(t("./radar/backwardCompat"))
	}), e("echarts/component/legend/LegendModel", ["require", "zrender/core/util", "../../model/Model", "../../echarts"], function(t) {
		var e = t("zrender/core/util"),
			i = t("../../model/Model");
		return t("../../echarts").extendComponentModel({
			type: "legend",
			dependencies: ["series"],
			layoutMode: {
				type: "box",
				ignoreSize: !0
			},
			init: function(t, n, r) {
				this.mergeDefaultAndTheme(t, r), t.selected = t.selected || {};
				var o = e.map(t.data || [], function(t) {
					return "string" == typeof t && (t = {
						name: t
					}), new i(t, this, this.ecModel)
				}, this);
				this._data = o, this._updateAvailableNames(r);
				var a = this.option.selected;
				if (o[0] && "single" === this.get("selectedMode")) {
					var s = !1;
					for (var l in a) a[l] && (this.select(l), s = !0);
					!s && this.select(o[0].get("name"))
				}
			},
			mergeOption: function(t) {
				this.$superCall("mergeOption", t), this._updateAvailableNames(this.ecModel)
			},
			_updateAvailableNames: function(t) {
				var i = e.map(t.getSeries(), function(t) {
					return t.name
				});
				t.eachSeries(function(t) {
					if (t.legendDataProvider) {
						var e = t.legendDataProvider();
						i = i.concat(e.mapArray(e.getName))
					}
				}), this._availableNames = i
			},
			getData: function() {
				return this._data
			},
			select: function(t) {
				var i = this.option.selected,
					n = this.get("selectedMode");
				if ("single" === n) {
					var r = this._data;
					e.each(r, function(t) {
						i[t.get("name")] = !1
					})
				}
				i[t] = !0
			},
			unSelect: function(t) {
				"single" !== this.get("selectedMode") && (this.option.selected[t] = !1)
			},
			toggleSelected: function(t) {
				var e = this.option.selected;
				t in e || (e[t] = !0), this[e[t] ? "unSelect" : "select"](t)
			},
			isSelected: function(t) {
				var i = this.option.selected;
				return !(t in i && !i[t]) && e.indexOf(this._availableNames, t) >= 0
			},
			defaultOption: {
				zlevel: 0,
				z: 4,
				show: !0,
				orient: "horizontal",
				left: "center",
				top: "top",
				align: "auto",
				backgroundColor: "rgba(0,0,0,0)",
				borderColor: "#ccc",
				borderWidth: 0,
				padding: 5,
				itemGap: 10,
				itemWidth: 25,
				itemHeight: 14,
				textStyle: {
					color: "#333"
				},
				selectedMode: !0
			}
		})
	}), e("echarts/component/legend/legendAction", ["require", "../../echarts", "zrender/core/util"], function(t) {
		function e(t, e, i) {
			var r, o = {},
				a = "toggleSelected" === t;
			return i.eachComponent("legend", function(i) {
				a && null != r ? i[r ? "select" : "unSelect"](e.name) : (i[t](e.name), r = i.isSelected(e.name));
				var s = i.getData();
				n.each(s, function(t) {
					var e = t.get("name");
					if ("\n" !== e && "" !== e) {
						var n = i.isSelected(e);
						e in o ? o[e] = o[e] && n : o[e] = n
					}
				})
			}), {
				name: e.name,
				selected: o
			}
		}
		var i = t("../../echarts"),
			n = t("zrender/core/util");
		i.registerAction("legendToggleSelect", "legendselectchanged", n.curry(e, "toggleSelected")), i.registerAction("legendSelect", "legendselected", n.curry(e, "select")), i.registerAction("legendUnSelect", "legendunselected", n.curry(e, "unSelect"))
	}), e("echarts/component/helper/listComponent", ["require", "../../util/layout", "../../util/format", "../../util/graphic"], function(t) {
		function e(t, e, n) {
			i.positionGroup(t, e.getBoxLayoutParams(), {
				width: n.getWidth(),
				height: n.getHeight()
			}, e.get("padding"))
		}
		var i = t("../../util/layout"),
			n = t("../../util/format"),
			r = t("../../util/graphic");
		return {
			layout: function(t, n, r) {
				i.box(n.get("orient"), t, n.get("itemGap"), r.getWidth(), r.getHeight()), e(t, n, r)
			},
			addBackground: function(t, e) {
				var i = n.normalizeCssArray(e.get("padding")),
					o = t.getBoundingRect(),
					a = e.getItemStyle(["color", "opacity"]);
				a.fill = e.get("backgroundColor");
				var s = new r.Rect({
					shape: {
						x: o.x - i[3],
						y: o.y - i[0],
						width: o.width + i[1] + i[3],
						height: o.height + i[0] + i[2]
					},
					style: a,
					silent: !0
				});
				r.subPixelOptimizeRect(s), t.add(s)
			}
		}
	}), e("echarts/component/legend/LegendView", ["require", "zrender/core/util", "../../util/symbol", "../../util/graphic", "../helper/listComponent", "../../echarts"], function(t) {
		function e(t, e) {
			e.dispatchAction({
				type: "legendToggleSelect",
				name: t
			})
		}
		function i(t, e, i) {
			t.get("legendHoverLink") && i.dispatchAction({
				type: "highlight",
				seriesName: t.name,
				name: e
			})
		}
		function n(t, e, i) {
			t.get("legendHoverLink") && i.dispatchAction({
				type: "downplay",
				seriesName: t.name,
				name: e
			})
		}
		var r = t("zrender/core/util"),
			o = t("../../util/symbol"),
			a = t("../../util/graphic"),
			s = t("../helper/listComponent"),
			l = r.curry,
			u = "#ccc";
		return t("../../echarts").extendComponentView({
			type: "legend",
			init: function() {
				this._symbolTypeStore = {}
			},
			render: function(t, o, c) {
				var h = t.get("selectedMode"),
					d = t.get("itemWidth"),
					p = t.get("itemHeight"),
					f = t.get("align"),
					m = this.group;
				m.removeAll(), "auto" === f && (f = "right" === t.get("left") && "vertical" === t.get("orient") ? "right" : "left");
				var g = {},
					v = {};
				r.each(t.getData(), function(r) {
					var s = r.get("name");
					("" === s || "\n" === s) && m.add(new a.Group({
						newline: !0
					}));
					var y = o.getSeriesByName(s)[0];
					if (g[s] = r, y && !v[s]) {
						var _ = y.getData(),
							x = _.getVisual("color");
						t.isSelected(s) || (x = u), "function" == typeof x && (x = x(y.getDataParams(0)));
						var b = _.getVisual("legendSymbol") || "roundRect",
							w = _.getVisual("symbol"),
							M = this._createItem(s, r, t, b, w, d, p, f, x, h);
						M.on("click", l(e, s, c)).on("mouseover", l(i, y, "", c)).on("mouseout", l(n, y, "", c)), v[s] = !0
					}
				}, this), o.eachRawSeries(function(r) {
					if (r.legendDataProvider) {
						var o = r.legendDataProvider();
						o.each(function(a) {
							var s = o.getName(a);
							if (g[s] && !v[s]) {
								var m = o.getItemVisual(a, "color");
								t.isSelected(s) || (m = u);
								var y = "roundRect",
									_ = this._createItem(s, g[s], t, y, null, d, p, f, m, h);
								_.on("click", l(e, s, c)).on("mouseover", l(i, r, s, c)).on("mouseout", l(n, r, s, c)), v[s] = !0
							}
						}, !1, this)
					}
				}, this), s.layout(m, t, c), s.addBackground(m, t)
			},
			_createItem: function(t, e, i, n, r, s, l, u, c, h) {
				var d = new a.Group,
					p = e.getModel("textStyle"),
					f = e.get("icon");
				if (n = f || n, d.add(o.createSymbol(n, 0, 0, s, l, c)), !f && r && r !== n && "none" != r) {
					var m = .8 * l;
					d.add(o.createSymbol(r, (s - m) / 2, (l - m) / 2, m, m, c))
				}
				var g = "left" === u ? s + 5 : -5,
					v = u,
					y = i.get("formatter");
				"string" == typeof y && y ? t = y.replace("{name}", t) : "function" == typeof y && (t = y(t));
				var _ = new a.Text({
					style: {
						text: t,
						x: g,
						y: l / 2,
						fill: p.getTextColor(),
						textFont: p.getFont(),
						textAlign: v,
						textBaseline: "middle"
					}
				});
				return d.add(_), d.add(new a.Rect({
					shape: d.getBoundingRect(),
					invisible: !0
				})), d.eachChild(function(t) {
					t.silent = !h
				}), this.group.add(d), d
			}
		})
	}), e("echarts/component/legend/legendFilter", [], function() {
		return function(t) {
			var e = t.findComponents({
				mainType: "legend"
			});
			e && e.length && t.filterSeries(function(t) {
				for (var i = 0; i < e.length; i++) if (!e[i].isSelected(t.name)) return !1;
				return !0
			})
		}
	}), e("echarts/component/legend", ["require", "./legend/LegendModel", "./legend/legendAction", "./legend/LegendView", "../echarts", "./legend/legendFilter"], function(t) {
		t("./legend/LegendModel"), t("./legend/legendAction"), t("./legend/LegendView");
		var e = t("../echarts");
		e.registerProcessor("filter", t("./legend/legendFilter"))
	}), e("echarts/chart/map/MapSeries", ["require", "../../data/List", "../../echarts", "../../model/Series", "zrender/core/util", "../../data/helper/completeDimensions", "../../util/format", "../helper/dataSelectableMixin"], function(t) {
		function e(t, e) {
			for (var i = {}, n = e.features, r = 0; r < t.length; r++) i[t[r].name] = t[r];
			for (var r = 0; r < n.length; r++) {
				var o = n[r].properties.name;
				i[o] || t.push({
					value: NaN,
					name: o
				})
			}
			return t
		}
		var i = t("../../data/List"),
			n = t("../../echarts"),
			r = t("../../model/Series"),
			o = t("zrender/core/util"),
			a = t("../../data/helper/completeDimensions"),
			s = t("../../util/format"),
			l = s.encodeHTML,
			u = s.addCommas,
			c = t("../helper/dataSelectableMixin"),
			h = r.extend({
				type: "series.map",
				needsDrawMap: !1,
				seriesGroup: [],
				init: function(t) {
					t = this._fillOption(t), this.option = t, this.$superApply("init", arguments), this.updateSelectedMap()
				},
				getInitialData: function(t) {
					var e = a(["value"], t.data),
						n = new i(e, this);
					return n.initData(t.data), n
				},
				mergeOption: function(t) {
					t = this._fillOption(t), r.prototype.mergeOption.call(this, t), this.updateSelectedMap()
				},
				_fillOption: function(t) {
					t = o.extend({}, t);
					var i = n.getMap(t.mapType),
						r = i && i.geoJson;
					return r && t.data && (t.data = e(t.data, r)), t
				},
				setRoamZoom: function(t) {
					var e = this.option.roamDetail;
					e && (e.zoom = t)
				},
				setRoamPan: function(t, e) {
					var i = this.option.roamDetail;
					i && (i.x = t, i.y = e)
				},
				formatTooltip: function(t) {
					for (var e = this._data, i = u(this.getRawValue(t)), n = e.getName(t), r = this.seriesGroup, o = [], a = 0; a < r.length; a++) isNaN(r[a].getRawValue(t)) || o.push(l(r[a].name));
					return o.join(", ") + "<br />" + n + " : " + i
				},
				defaultOption: {
					zlevel: 0,
					z: 2,
					coordinateSystem: "geo",
					map: "china",
					left: "center",
					top: "center",
					showLegendSymbol: !0,
					dataRangeHoverLink: !0,
					roamDetail: {
						x: 0,
						y: 0,
						zoom: 1
					},
					label: {
						normal: {
							show: !1,
							textStyle: {
								color: "#000"
							}
						},
						emphasis: {
							show: !1,
							textStyle: {
								color: "#000"
							}
						}
					},
					itemStyle: {
						normal: {
							borderWidth: .5,
							borderColor: "#444",
							areaColor: "#eee"
						},
						emphasis: {
							areaColor: "rgba(255,215, 0, 0.8)"
						}
					}
				}
			});
		return o.mixin(h, c), h
	}), e("echarts/component/helper/interactionMutex", ["require"], function(t) {
		function e(t) {
			return t[i] || (t[i] = {})
		}
		var i = "\x00_ec_interaction_mutex",
			n = {
				take: function(t, i) {
					e(i)[t] = !0
				},
				release: function(t, i) {
					e(i)[t] = !1
				},
				isTaken: function(t, i) {
					return !!e(i)[t]
				}
			};
		return n
	}), e("echarts/component/helper/RoamController", ["require", "zrender/mixin/Eventful", "zrender/core/util", "zrender/core/event", "./interactionMutex"], function(t) {
		function e(t) {
			if (!t.target || !t.target.draggable) {
				var e = t.offsetX,
					i = t.offsetY,
					n = this.rect;
				n && n.contain(e, i) && (this._x = e, this._y = i, this._dragging = !0)
			}
		}
		function i(t) {
			if (this._dragging && (c.stop(t.event), "pinch" !== t.gestureEvent)) {
				if (h.isTaken("globalPan", this._zr)) return;
				var e = t.offsetX,
					i = t.offsetY,
					n = e - this._x,
					r = i - this._y;
				this._x = e, this._y = i;
				var o = this.target;
				if (o) {
					var a = o.position;
					a[0] += n, a[1] += r, o.dirty()
				}
				c.stop(t.event), this.trigger("pan", n, r)
			}
		}
		function n(t) {
			this._dragging = !1
		}
		function r(t) {
			c.stop(t.event);
			var e = t.wheelDelta < 0 ? 1.1 : 1 / 1.1;
			a.call(this, t, e, t.offsetX, t.offsetY)
		}
		function o(t) {
			if (!h.isTaken("globalPan", this._zr)) {
				c.stop(t.event);
				var e = t.pinchScale > 1 ? 1.1 : 1 / 1.1;
				a.call(this, t, e, t.pinchX, t.pinchY)
			}
		}
		function a(t, e, i, n) {
			var r = this.rect;
			if (r && r.contain(i, n)) {
				var o = this.target;
				if (o) {
					var a = o.position,
						s = o.scale,
						l = this._zoom = this._zoom || 1;
					l *= e;
					var u = l / this._zoom;
					this._zoom = l, a[0] -= (i - a[0]) * (u - 1), a[1] -= (n - a[1]) * (u - 1), s[0] *= u, s[1] *= u, o.dirty()
				}
				this.trigger("zoom", e, i, n)
			}
		}
		function s(t, a, s) {
			this.target = a, this.rect = s, this._zr = t;
			var c = u.bind,
				h = c(e, this),
				d = c(i, this),
				p = c(n, this),
				f = c(r, this),
				m = c(o, this);
			l.call(this), this.enable = function(e) {
				this.disable(), null == e && (e = !0), e && "scale" !== e && (t.on("mousedown", h), t.on("mousemove", d), t.on("mouseup", p)), e && "move" !== e && (t.on("mousewheel", f), t.on("pinch", m))
			}, this.disable = function() {
				t.off("mousedown", h), t.off("mousemove", d), t.off("mouseup", p), t.off("mousewheel", f), t.off("pinch", m)
			}, this.dispose = this.disable, this.isDragging = function() {
				return this._dragging
			}, this.isPinching = function() {
				return this._pinching
			}
		}
		var l = t("zrender/mixin/Eventful"),
			u = t("zrender/core/util"),
			c = t("zrender/core/event"),
			h = t("./interactionMutex");
		return u.mixin(s, l), s
	}), e("echarts/component/helper/MapDraw", ["require", "./RoamController", "../../util/graphic", "zrender/core/util"], function(t) {
		function e(t, e) {
			var i = t.getItemStyle(),
				n = t.get("areaColor");
			return n && (i.fill = n), i
		}
		function i(t, e, i, r, o) {
			i.off("click"), t.get("selectedMode") && i.on("click", function(i) {
				var a = i.target.dataIndex;
				if (null != a) {
					var s = e.getName(a);
					r.dispatchAction({
						type: "mapToggleSelect",
						seriesIndex: t.seriesIndex,
						name: s,
						from: o.uid
					}), n(t, e, r)
				}
			})
		}
		function n(t, e) {
			e.eachItemGraphicEl(function(i, n) {
				var r = e.getName(n);
				i.trigger(t.isSelected(r) ? "emphasis" : "normal")
			})
		}
		function r(t, e) {
			var i = new a.Group;
			this._controller = new o(t.getZr(), e ? i : null, null), this.group = i, this._updateGroup = e
		}
		var o = t("./RoamController"),
			a = t("../../util/graphic"),
			s = t("zrender/core/util");
		return r.prototype = {
			constructor: r,
			draw: function(t, r, o, l) {
				var u = t.getData && t.getData(),
					c = t.coordinateSystem,
					h = this.group;
				h.removeAll();
				var d = c.scale;
				h.position = c.position.slice(), h.scale = d.slice();
				var p, f, m, g, v, y, _ = ["itemStyle", "normal"],
					x = ["itemStyle", "emphasis"],
					b = ["label", "normal"],
					w = ["label", "emphasis"];
				u || (p = t.getModel(_), f = t.getModel(x), m = e(p, d), g = e(f, d), v = t.getModel(b), y = t.getModel(w)), s.each(c.regions, function(i) {
					var n, r = new a.Group;
					if (u) {
						n = u.indexOfName(i.name);
						var o = u.getItemModel(n),
							l = u.getItemVisual(n, "color", !0);
						p = o.getModel(_), f = o.getModel(x), m = e(p, d), g = e(f, d), v = o.getModel(b), y = o.getModel(w), l && (m.fill = l)
					}
					var c = v.getModel("textStyle"),
						M = y.getModel("textStyle");
					s.each(i.contours, function(t) {
						var e = new a.Polygon({
							shape: {
								points: t
							},
							style: {
								strokeNoScale: !0
							},
							culling: !0
						});
						e.setStyle(m), r.add(e)
					});
					var S = v.get("show"),
						L = y.get("show"),
						C = u && isNaN(u.get("value", n)),
						T = u && u.getItemLayout(n);
					if (!u || C && (S || L) || T && T.showLabel) {
						var P = u ? n : i.name,
							A = t.getFormattedLabel(P, "normal"),
							D = t.getFormattedLabel(P, "emphasis"),
							z = new a.Text({
								style: {
									text: S ? A || i.name : "",
									fill: c.getTextColor(),
									textFont: c.getFont(),
									textAlign: "center",
									textBaseline: "middle"
								},
								hoverStyle: {
									text: L ? D || i.name : "",
									fill: M.getTextColor(),
									textFont: M.getFont()
								},
								position: i.center.slice(),
								scale: [1 / d[0], 1 / d[1]],
								z2: 10,
								silent: !0
							});
						r.add(z)
					}
					u && u.setItemGraphicEl(n, r), a.setHoverStyle(r, g), h.add(r)
				}), this._updateController(t, r, o), u && i(t, u, h, o, l), u && n(t, u)
			},
			remove: function() {
				this.group.removeAll(), this._controller.dispose()
			},
			_updateController: function(t, e, i) {
				var n = t.coordinateSystem,
					r = this._controller;
				r.enable(t.get("roam") || !1);
				var o = t.type.split(".")[0];
				r.off("pan").on("pan", function(e, n) {
					i.dispatchAction({
						type: "geoRoam",
						component: o,
						name: t.name,
						dx: e,
						dy: n
					})
				}), r.off("zoom").on("zoom", function(e, n, r) {
					if (i.dispatchAction({
						type: "geoRoam",
						component: o,
						name: t.name,
						zoom: e,
						originX: n,
						originY: r
					}), this._updateGroup) {
						var a = this.group,
							s = a.scale;
						a.traverse(function(t) {
							"text" === t.type && t.attr("scale", [1 / s[0], 1 / s[1]])
						})
					}
				}, this), r.rect = n.getViewRect()
			}
		}, r
	}), e("echarts/chart/map/MapView", ["require", "../../util/graphic", "../../component/helper/MapDraw", "../../echarts"], function(t) {
		var e = t("../../util/graphic"),
			i = t("../../component/helper/MapDraw");
		t("../../echarts").extendChartView({
			type: "map",
			render: function(t, e, n, r) {
				if (!r || "mapToggleSelect" !== r.type || r.from !== this.uid) {
					var o = this.group;
					if (o.removeAll(), r && "geoRoam" === r.type && "series" === r.component && r.name === t.name) {
						var a = this._mapDraw;
						a && o.add(a.group)
					} else if (t.needsDrawMap) {
						var a = this._mapDraw || new i(n, !0);
						o.add(a.group), a.draw(t, e, n, this), this._mapDraw = a
					} else this._mapDraw && this._mapDraw.remove(), this._mapDraw = null;
					t.get("showLegendSymbol") && e.getComponent("legend") && this._renderSymbols(t, e, n)
				}
			},
			remove: function() {
				this._mapDraw && this._mapDraw.remove(), this._mapDraw = null, this.group.removeAll()
			},
			_renderSymbols: function(t, i, n) {
				var r = t.getData(),
					o = this.group;
				r.each("value", function(t, i) {
					if (!isNaN(t)) {
						var n = r.getItemLayout(i);
						if (n && n.point) {
							var a = n.point,
								s = n.offset,
								l = new e.Circle({
									style: {
										fill: r.getVisual("color")
									},
									shape: {
										cx: a[0] + 9 * s,
										cy: a[1],
										r: 3
									},
									silent: !0,
									z2: 10
								});
							if (!s) {
								var u = r.getName(i),
									c = r.getItemModel(i),
									h = c.getModel("label.normal"),
									d = c.getModel("label.emphasis"),
									p = h.getModel("textStyle"),
									f = d.getModel("textStyle"),
									m = r.getItemGraphicEl(i);
								l.setStyle({
									textPosition: "bottom"
								});
								var g = function() {
										l.setStyle({
											text: d.get("show") ? u : "",
											textFill: f.getTextColor(),
											textFont: f.getFont()
										})
									},
									v = function() {
										l.setStyle({
											text: h.get("show") ? u : "",
											textFill: p.getTextColor(),
											textFont: p.getFont()
										})
									};
								m.on("mouseover", g).on("mouseout", v).on("emphasis", g).on("normal", v), v()
							}
							o.add(l)
						}
					}
				})
			}
		})
	}), e("echarts/action/roamHelper", ["require"], function(t) {
		var e = {};
		return e.calcPanAndZoom = function(t, e) {
			var i = e.dx,
				n = e.dy,
				r = e.zoom,
				o = t.get("x") || 0,
				a = t.get("y") || 0,
				s = t.get("zoom") || 1;
			if (null != i && null != n && (o += i, a += n), null != r) {
				var l = (e.originX - o) * (r - 1),
					u = (e.originY - a) * (r - 1);
				o -= l, a -= u
			}
			return {
				x: o,
				y: a,
				zoom: (r || 1) * s
			}
		}, e
	}), e("echarts/action/geoRoam", ["require", "zrender/core/util", "./roamHelper", "../echarts"], function(t) {
		var e = t("zrender/core/util"),
			i = t("./roamHelper"),
			n = t("../echarts"),
			r = {
				type: "geoRoam",
				event: "geoRoam",
				update: "updateLayout"
			};
		n.registerAction(r, function(t, n) {
			var r = t.component || "series";
			n.eachComponent(r, function(n) {
				if (n.name === t.name) {
					var o = n.coordinateSystem;
					if ("geo" !== o.type) return;
					var a = n.getModel("roamDetail"),
						s = i.calcPanAndZoom(a, t);
					n.setRoamPan && n.setRoamPan(s.x, s.y), n.setRoamZoom && n.setRoamZoom(s.zoom), o && o.setPan(s.x, s.y), o && o.setZoom(s.zoom), "series" === r && e.each(n.seriesGroup, function(t) {
						t.setRoamPan(s.x, s.y), t.setRoamZoom(s.zoom)
					})
				}
			})
		})
	}), e("echarts/coord/geo/GeoModel", ["require", "../../util/model", "../../model/Component"], function(t) {
		var e = t("../../util/model"),
			i = t("../../model/Component");
		i.extend({
			type: "geo",
			coordinateSystem: null,
			init: function(t) {
				i.prototype.init.apply(this, arguments), e.defaultEmphasis(t.label, ["position", "show", "textStyle", "distance", "formatter"])
			},
			defaultOption: {
				zlevel: 0,
				z: 0,
				show: !0,
				left: "center",
				top: "center",
				map: "",
				roamDetail: {
					x: 0,
					y: 0,
					zoom: 1
				},
				label: {
					normal: {
						show: !1,
						textStyle: {
							color: "#000"
						}
					},
					emphasis: {
						show: !0,
						textStyle: {
							color: "rgb(100,0,0)"
						}
					}
				},
				itemStyle: {
					normal: {
						borderWidth: .5,
						borderColor: "#444",
						color: "#eee"
					},
					emphasis: {
						color: "rgba(255,215,0,0.8)"
					}
				}
			},
			getFormattedLabel: function(t, e) {
				var i = this.get("label." + e + ".formatter"),
					n = {
						name: t
					};
				return "function" == typeof i ? (n.status = e, i(n)) : "string" == typeof i ? i.replace("{a}", n.seriesName) : void 0
			},
			setRoamZoom: function(t) {
				var e = this.option.roamDetail;
				e && (e.zoom = t)
			},
			setRoamPan: function(t, e) {
				var i = this.option.roamDetail;
				i && (i.x = t, i.y = e)
			}
		})
	}), e("zrender/contain/polygon", ["require", "./windingLine"], function(t) {
		function e(t, e) {
			return Math.abs(t - e) < r
		}
		function i(t, i, r) {
			var o = 0,
				a = t[0];
			if (!a) return !1;
			for (var s = 1; s < t.length; s++) {
				var l = t[s];
				o += n(a[0], a[1], l[0], l[1], i, r), a = l
			}
			var u = t[0];
			return e(a[0], u[0]) && e(a[1], u[1]) || (o += n(a[0], a[1], u[0], u[1], i, r)), 0 !== o
		}
		var n = t("./windingLine"),
			r = 1e-8;
		return {
			contain: i
		}
	}), e("echarts/coord/geo/Region", ["require", "zrender/contain/polygon", "zrender/core/BoundingRect", "zrender/core/bbox", "zrender/core/vector"], function(t) {
		function e(t, e, i) {
			if (this.name = t, this.contours = e, i) i = [i[0], i[1]];
			else {
				var n = this.getBoundingRect();
				i = [n.x + n.width / 2, n.y + n.height / 2]
			}
			this.center = i
		}
		var i = t("zrender/contain/polygon"),
			n = t("zrender/core/BoundingRect"),
			r = t("zrender/core/bbox"),
			o = t("zrender/core/vector");
		return e.prototype = {
			constructor: e,
			getBoundingRect: function() {
				var t = this._rect;
				if (t) return t;
				for (var e = Number.MAX_VALUE, i = [e, e], a = [-e, -e], s = [], l = [], u = this.contours, c = 0; c < u.length; c++) r.fromPoints(u[c], s, l), o.min(i, i, s), o.max(a, a, l);
				return 0 === c && (i[0] = i[1] = a[0] = a[1] = 0), this._rect = new n(i[0], i[1], a[0] - i[0], a[1] - i[1])
			},
			contain: function(t) {
				var e = this.getBoundingRect(),
					n = this.contours;
				if (e.contain(t[0], t[1])) for (var r = 0, o = n.length; o > r; r++) if (i.contain(n[r], t[0], t[1])) return !0;
				return !1
			},
			transformTo: function(t, e, i, r) {
				var a = this.getBoundingRect(),
					s = a.width / a.height;
				i ? r || (r = i / s) : i = s * r;
				for (var l = new n(t, e, i, r), u = a.calculateTransform(l), c = this.contours, h = 0; h < c.length; h++) for (var d = 0; d < c[h].length; d++) o.applyTransform(c[h][d], c[h][d], u);
				a = this._rect, a.copy(l), this.center = [a.x + a.width / 2, a.y + a.height / 2]
			}
		}, e
	}), e("echarts/coord/geo/parseGeoJson", ["require", "zrender/core/util", "./Region"], function(t) {
		function e(t) {
			if (!t.UTF8Encoding) return t;
			for (var e = t.features, n = 0; n < e.length; n++) for (var r = e[n], o = r.geometry, a = o.coordinates, s = o.encodeOffsets, l = 0; l < a.length; l++) {
				var u = a[l];
				if ("Polygon" === o.type) a[l] = i(u, s[l]);
				else if ("MultiPolygon" === o.type) for (var c = 0; c < u.length; c++) {
					var h = u[c];
					u[c] = i(h, s[l][c])
				}
			}
			return t.UTF8Encoding = !1, t
		}
		function i(t, e) {
			for (var i = [], n = e[0], r = e[1], o = 0; o < t.length; o += 2) {
				var a = t.charCodeAt(o) - 64,
					s = t.charCodeAt(o + 1) - 64;
				a = a >> 1 ^ -(1 & a), s = s >> 1 ^ -(1 & s), a += n, s += r, n = a, r = s, i.push([a / 1024, s / 1024])
			}
			return i
		}
		function n(t) {
			for (var e = [], i = 0; i < t.length; i++) for (var n = 0; n < t[i].length; n++) e.push(t[i][n]);
			return e
		}
		var r = t("zrender/core/util"),
			o = t("./Region");
		return function(t) {
			return e(t), r.map(r.filter(t.features, function(t) {
				return t.geometry && t.properties
			}), function(t) {
				var e = t.properties,
					i = t.geometry,
					r = i.coordinates;
				return "MultiPolygon" === i.type && (r = n(r)), new o(e.name, r, e.cp)
			})
		}
	}), e("echarts/coord/View", ["require", "zrender/core/vector", "zrender/core/matrix", "zrender/mixin/Transformable", "zrender/core/util", "zrender/core/BoundingRect"], function(t) {
		function e() {
			o.call(this)
		}
		function i(t) {
			this.name = t, this.dimensions = ["x", "y"], o.call(this), this._roamTransform = new e, this._viewTransform = new e
		}
		var n = t("zrender/core/vector"),
			r = t("zrender/core/matrix"),
			o = t("zrender/mixin/Transformable"),
			a = t("zrender/core/util"),
			s = t("zrender/core/BoundingRect"),
			l = n.applyTransform;
		return a.mixin(e, o), i.prototype = {
			constructor: i,
			type: "view",
			setBoundingRect: function(t, e, i, n) {
				return this._rect = new s(t, e, i, n), this._rect
			},
			getBoundingRect: function() {
				return this._rect
			},
			setViewRect: function(t, e, i, n) {
				this.transformTo(t, e, i, n), this._viewRect = new s(t, e, i, n)
			},
			transformTo: function(t, e, i, n) {
				var r = this.getBoundingRect(),
					o = this._viewTransform;
				o.transform = r.calculateTransform(new s(t, e, i, n)), o.decomposeTransform(), this._updateTransform()
			},
			setPan: function(t, e) {
				this._roamTransform.position = [t, e], this._updateTransform()
			},
			setZoom: function(t) {
				this._roamTransform.scale = [t, t], this._updateTransform()
			},
			getRoamTransform: function() {
				return this._roamTransform.transform
			},
			_updateTransform: function() {
				var t = this._roamTransform,
					e = this._viewTransform;
				e.parent = t, t.updateTransform(), e.updateTransform(), e.transform && r.copy(this.transform || (this.transform = []), e.transform), this.decomposeTransform()
			},
			getViewRect: function() {
				return this._viewRect
			},
			dataToPoint: function(t) {
				var e = this.transform;
				return e ? l([], t, e) : [t[0], t[1]]
			},
			pointToData: function(t) {
				var e = this.invTransform;
				return e ? l([], t, e) : [t[0], t[1]]
			}
		}, a.mixin(i, o), i
	}), e("echarts/coord/geo/fix/nanhai", ["require", "../Region"], function(t) {
		for (var e = t("../Region"), i = [126, 25], n = [
			[
				[0, 3.5],
				[7, 11.2],
				[15, 11.9],
				[30, 7],
				[42, .7],
				[52, .7],
				[56, 7.7],
				[59, .7],
				[64, .7],
				[64, 0],
				[5, 0],
				[0, 3.5]
			],
			[
				[13, 16.1],
				[19, 14.7],
				[16, 21.7],
				[11, 23.1],
				[13, 16.1]
			],
			[
				[12, 32.2],
				[14, 38.5],
				[15, 38.5],
				[13, 32.2],
				[12, 32.2]
			],
			[
				[16, 47.6],
				[12, 53.2],
				[13, 53.2],
				[18, 47.6],
				[16, 47.6]
			],
			[
				[6, 64.4],
				[8, 70],
				[9, 70],
				[8, 64.4],
				[6, 64.4]
			],
			[
				[23, 82.6],
				[29, 79.8],
				[30, 79.8],
				[25, 82.6],
				[23, 82.6]
			],
			[
				[37, 70.7],
				[43, 62.3],
				[44, 62.3],
				[39, 70.7],
				[37, 70.7]
			],
			[
				[48, 51.1],
				[51, 45.5],
				[53, 45.5],
				[50, 51.1],
				[48, 51.1]
			],
			[
				[51, 35],
				[51, 28.7],
				[53, 28.7],
				[53, 35],
				[51, 35]
			],
			[
				[52, 22.4],
				[55, 17.5],
				[56, 17.5],
				[53, 22.4],
				[52, 22.4]
			],
			[
				[58, 12.6],
				[62, 7],
				[63, 7],
				[60, 12.6],
				[58, 12.6]
			],
			[
				[0, 3.5],
				[0, 93.1],
				[64, 93.1],
				[64, 0],
				[63, 0],
				[63, 92.4],
				[1, 92.4],
				[1, 3.5],
				[0, 3.5]
			]
		], r = 0; r < n.length; r++) for (var o = 0; o < n[r].length; o++) n[r][o][0] /= 10.5, n[r][o][1] /= -14, n[r][o][0] += i[0], n[r][o][1] += i[1];
		return function(t) {
			"china" === t.map && t.regions.push(new e("南海诸岛", n, i))
		}
	}), e("echarts/coord/geo/fix/textCoord", ["require", "zrender/core/util"], function(t) {
		var e = t("zrender/core/util"),
			i = {
				"南海诸岛": [32, 80],
				"广东": [0, -10],
				"香港": [10, 5],
				"澳门": [-10, 10],
				"天津": [5, 5]
			};
		return function(t) {
			e.each(t.regions, function(t) {
				var e = i[t.name];
				if (e) {
					var n = t.center;
					n[0] += e[0] / 10.5, n[1] += -e[1] / 14
				}
			})
		}
	}), e("echarts/coord/geo/fix/geoCoord", ["require", "zrender/core/util"], function(t) {
		var e = t("zrender/core/util"),
			i = {
				Russia: [100, 60],
				"United States of America": [-99, 38]
			};
		return function(t) {
			e.each(t.regions, function(t) {
				var e = i[t.name];
				if (e) {
					var n = t.center;
					n[0] = e[0], n[1] = e[1]
				}
			})
		}
	}), e("echarts/coord/geo/Geo", ["require", "./parseGeoJson", "zrender/core/util", "zrender/core/BoundingRect", "../View", "./fix/nanhai", "./fix/textCoord", "./fix/geoCoord"], function(t) {
		function e(t, e, i, n, r) {
			o.call(this, t), this.map = e, this.dimensions = ["lng", "lat"], this._nameCoordMap = {}, this.loadGeoJson(i, n, r)
		}
		var i = t("./parseGeoJson"),
			n = t("zrender/core/util"),
			r = t("zrender/core/BoundingRect"),
			o = t("../View"),
			a = [t("./fix/nanhai"), t("./fix/textCoord"), t("./fix/geoCoord")];
		return e.prototype = {
			constructor: e,
			type: "geo",
			loadGeoJson: function(t, e, r) {
				try {
					this.regions = t ? i(t) : []
				} catch (o) {
					throw "Invalid geoJson format\n" + o
				}
				e = e || {}, r = r || {};
				for (var s = this.regions, l = {}, u = 0; u < s.length; u++) {
					var c = s[u].name;
					c = r[c] || c, s[u].name = c, l[c] = s[u], this.addGeoCoord(c, s[u].center);
					var h = e[c];
					h && s[u].transformTo(h.left, h.top, h.width, h.height)
				}
				this._regionsMap = l, this._rect = null, n.each(a, function(t) {
					t(this)
				}, this)
			},
			transformTo: function(t, e, i, n) {
				var o = this.getBoundingRect();
				o = o.clone(), o.y = -o.y - o.height;
				var a = this._viewTransform;
				a.transform = o.calculateTransform(new r(t, e, i, n)), a.decomposeTransform();
				var s = a.scale;
				s[1] = -s[1], a.updateTransform(), this._updateTransform()
			},
			getRegion: function(t) {
				return this._regionsMap[t]
			},
			addGeoCoord: function(t, e) {
				this._nameCoordMap[t] = e
			},
			getGeoCoord: function(t) {
				return this._nameCoordMap[t]
			},
			getBoundingRect: function() {
				if (this._rect) return this._rect;
				for (var t, e = this.regions, i = 0; i < e.length; i++) {
					var n = e[i].getBoundingRect();
					t = t || n.clone(), t.union(n)
				}
				return this._rect = t || new r(0, 0, 0, 0)
			},
			dataToPoints: function(t) {
				var e = [];
				return t.mapArray(["lng", "lat"], function(t, i) {
					return e[0] = t, e[1] = i, this.dataToPoint(e)
				}, this)
			},
			dataToPoint: function(t) {
				return "string" == typeof t && (t = this.getGeoCoord(t)), t ? o.prototype.dataToPoint.call(this, t) : void 0
			}
		}, n.mixin(e, o), e
	}), e("echarts/coord/geo/geoCreator", ["require", "./GeoModel", "./Geo", "../../util/layout", "zrender/core/util", "../../echarts"], function(t) {
		function e(t, e) {
			var i = this.getBoundingRect(),
				n = t.getBoxLayoutParams();
			n.aspect = i.width / i.height * .75;
			var o = r.getLayoutRect(n, {
				width: e.getWidth(),
				height: e.getHeight()
			});
			this.setViewRect(o.x, o.y, o.width, o.height);
			var a = t.getModel("roamDetail"),
				s = a.get("x") || 0,
				l = a.get("y") || 0,
				u = a.get("zoom") || 1;
			this.setPan(s, l), this.setZoom(u)
		}
		function i(t, e) {
			o.each(e.get("geoCoord"), function(e, i) {
				t.addGeoCoord(i, e)
			})
		}
		t("./GeoModel");
		var n = t("./Geo"),
			r = t("../../util/layout"),
			o = t("zrender/core/util"),
			a = {},
			s = {
				create: function(t, r) {
					var s = [];
					t.eachComponent("geo", function(t, o) {
						var l = t.get("map"),
							u = a[l],
							c = new n(l + o, l, u && u.geoJson, u && u.specialAreas, t.get("nameMap"));
						s.push(c), i(c, t), t.coordinateSystem = c, c.model = t, c.resize = e, c.resize(t, r)
					}), t.eachSeries(function(t) {
						var e = t.get("coordinateSystem");
						if ("geo" === e) {
							var i = t.get("geoIndex") || 0;
							t.coordinateSystem = s[i]
						}
					});
					var l = {};
					return t.eachSeriesByType("map", function(t) {
						var e = t.get("map");
						l[e] = l[e] || [], l[e].push(t)
					}), o.each(l, function(t, l) {
						var u = a[l],
							c = o.map(t, function(t) {
								return t.get("nameMap")
							}),
							h = new n(l, l, u && u.geoJson, u && u.specialAreas, o.mergeAll(c));
						s.push(h), h.resize = e, h.resize(t[0], r), o.each(t, function(t) {
							t.coordinateSystem = h, i(h, t)
						})
					}), s
				},
				registerMap: function(t, e, i) {
					e.geoJson && !e.features && (i = e.specialAreas, e = e.geoJson), "string" == typeof e && (e = "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")()), a[t] = {
						geoJson: e,
						specialAreas: i
					}
				},
				getMap: function(t) {
					return a[t]
				}
			},
			l = t("../../echarts");
		l.registerMap = s.registerMap, l.getMap = s.getMap, l.loadMap = function() {}, l.registerCoordinateSystem("geo", s)
	}), e("echarts/chart/map/mapSymbolLayout", ["require", "zrender/core/util"], function(t) {
		var e = t("zrender/core/util");
		return function(t) {
			var i = {};
			t.eachSeriesByType("map", function(n) {
				var r = n.get("mapType");
				if (!i[r]) {
					var o = {};
					e.each(n.seriesGroup, function(e) {
						var i = e.coordinateSystem,
							n = e.getData();
						e.get("showLegendSymbol") && t.getComponent("legend") && n.each("value", function(t, e) {
							var r = n.getName(e),
								a = i.getRegion(r);
							if (a && !isNaN(t)) {
								var s = o[r] || 0,
									l = i.dataToPoint(a.center);
								o[r] = s + 1, n.setItemLayout(e, {
									point: l,
									offset: s
								})
							}
						})
					});
					var a = n.getData();
					a.each(function(t) {
						var e = a.getName(t),
							i = a.getItemLayout(t) || {};
						i.showLabel = !o[e], a.setItemLayout(t, i)
					}), i[r] = !0
				}
			})
		}
	}), e("echarts/chart/map/mapVisual", ["require"], function(t) {
		return function(t) {
			t.eachSeriesByType("map", function(t) {
				var e = t.get("color"),
					i = t.getModel("itemStyle.normal"),
					n = i.get("areaColor"),
					r = i.get("color") || e[t.seriesIndex % e.length];
				t.getData().setVisual({
					areaColor: n,
					color: r
				})
			})
		}
	}), e("echarts/chart/map/mapDataStatistic", ["require", "zrender/core/util"], function(t) {
		function e(t, e) {
			for (var i = {}, n = ["value"], r = 0; r < t.length; r++) t[r].each(n, function(e, n) {
				var o = t[r].getName(n);
				i[o] = i[o] || [], isNaN(e) || i[o].push(e)
			});
			return t[0].map(n, function(n, r) {
				for (var o = t[0].getName(r), a = 0, s = 1 / 0, l = -(1 / 0), u = i[o].length, c = 0; u > c; c++) s = Math.min(s, i[o][c]), l = Math.max(l, i[o][c]), a += i[o][c];
				var h;
				return h = "min" === e ? s : "max" === e ? l : "average" === e ? a / u : a, 0 === u ? NaN : h
			})
		}
		var i = t("zrender/core/util");
		return function(t) {
			var n = {};
			t.eachSeriesByType("map", function(t) {
				var e = t.get("map");
				n[e] = n[e] || [], n[e].push(t)
			}), i.each(n, function(t, n) {
				var r = e(i.map(t, function(t) {
					return t.getData()
				}), t[0].get("mapValueCalculation"));
				t[0].seriesGroup = [], t[0].setData(r);
				for (var o = 0; o < t.length; o++) t[o].seriesGroup = t, t[o].needsDrawMap = 0 === o
			})
		}
	}), e("echarts/chart/map/backwardCompat", ["require", "zrender/core/util"], function(t) {
		function e(t) {
			var e = {};
			return i.each(n, function(i) {
				null != t[i] && (e[i] = t[i])
			}), e
		}
		var i = t("zrender/core/util"),
			n = ["x", "y", "x2", "y2", "width", "height", "map", "roam", "roamDetail", "label", "itemStyle"],
			r = {};
		return function(t) {
			var n = [];
			i.each(t.series, function(t) {
				"map" === t.type && n.push(t), i.extend(r, t.geoCoord)
			});
			var o = {};
			i.each(n, function(n) {
				if (n.map = n.map || n.mapType, i.defaults(n, n.mapLocation), n.markPoint) {
					var a = n.markPoint;
					if (a.data = i.map(a.data, function(t) {
						if (!i.isArray(t.value)) {
							var e;
							t.geoCoord ? e = t.geoCoord : t.name && (e = r[t.name]);
							var n = e ? [e[0], e[1]] : [NaN, NaN];
							null != t.value && n.push(t.value), t.value = n
						}
						return t
					}), !n.data || !n.data.length) {
						t.geo || (t.geo = []);
						var s = o[n.map];
						s || (s = o[n.map] = e(n), t.geo.push(s));
						var l = n.markPoint;
						l.type = t.effect && t.effect.show ? "effectScatter" : "scatter", l.coordinateSystem = "geo", l.geoIndex = i.indexOf(t.geo, s), l.name = n.name, t.series.splice(i.indexOf(t.series, n), 1, l)
					}
				}
			})
		}
	}), e("echarts/chart/map", ["require", "../echarts", "./map/MapSeries", "./map/MapView", "../action/geoRoam", "../coord/geo/geoCreator", "./map/mapSymbolLayout", "./map/mapVisual", "./map/mapDataStatistic", "./map/backwardCompat", "../action/createDataSelectAction"], function(t) {
		var e = t("../echarts");
		t("./map/MapSeries"), t("./map/MapView"), t("../action/geoRoam"), t("../coord/geo/geoCreator"), e.registerLayout(t("./map/mapSymbolLayout")), e.registerVisualCoding("chart", t("./map/mapVisual")), e.registerProcessor("statistic", t("./map/mapDataStatistic")), e.registerPreprocessor(t("./map/backwardCompat")), t("../action/createDataSelectAction")("map", [{
			type: "mapToggleSelect",
			event: "mapselectchanged",
			method: "toggleSelected"
		}, {
			type: "mapSelect",
			event: "mapselected",
			method: "select"
		}, {
			type: "mapUnSelect",
			event: "mapunselected",
			method: "unSelect"
		}])
	}), e("echarts/data/helper/linkList", ["require", "zrender/core/util"], function(t) {
		function e(t, e, n) {
			return i.each(r, function(r, o) {
				var a = t[o];
				t[o] = i.curry(r, a, e, n)
			}), t[n] = e, e.data = t, t
		}
		var i = t("zrender/core/util"),
			n = Array.prototype.slice,
			r = {
				cloneShallow: function(t, i, r) {
					var o = t.apply(this, n.call(arguments, 3));
					return e(o, i, r)
				},
				map: function(t, i, r) {
					var o = t.apply(this, n.call(arguments, 3));
					return e(o, i, r)
				},
				filterSelf: function(t, e, i) {
					var r = t.apply(this, n.call(arguments, 3));
					return e.update(), r
				}
			};
		return {
			linkToGraph: function(t, i) {
				e(t, i, "graph")
			},
			linkToTree: function(t, i) {
				e(t, i, "tree")
			}
		}
	}), e("echarts/data/Tree", ["require", "zrender/core/util", "../model/Model", "./List", "./helper/linkList", "./helper/completeDimensions"], function(t) {
		function e(t, e) {
			this.root, this.data, this._nodes = [], this.hostModel = t, this.levelModels = n.map(e || [], function(e) {
				return new r(e, t, t.ecModel)
			})
		}
		function i(t, e) {
			var i = e.children;
			t.parentNode !== e && (i.push(t), t.parentNode = e, e.hostTree._nodes.push(t))
		}
		var n = t("zrender/core/util"),
			r = t("../model/Model"),
			o = t("./List"),
			a = t("./helper/linkList"),
			s = t("./helper/completeDimensions"),
			l = function(t, e, i) {
				this.name = t || "", this.depth = 0, this.height = 0, this.parentNode = null, this.dataIndex = null == e ? -1 : e, this.children = [], this.viewChildren = [], this.hostTree = i
			};
		return l.prototype = {
			constructor: l,
			isRemoved: function() {
				return this.dataIndex < 0
			},
			eachNode: function(t, e, i) {
				"function" == typeof t && (i = e, e = t, t = null), t = t || {}, n.isString(t) && (t = {
					order: t
				});
				var r, o = t.order || "preorder",
					a = this[t.attr || "children"];
				"preorder" === o && (r = e.call(i, this));
				for (var s = 0; !r && s < a.length; s++) a[s].eachNode(t, e, i);
				"postorder" === o && e.call(i, this)
			},
			updateDepthAndHeight: function(t) {
				var e = 0;
				this.depth = t;
				for (var i = 0; i < this.children.length; i++) {
					var n = this.children[i];
					n.updateDepthAndHeight(t + 1), n.height > e && (e = n.height)
				}
				this.height = e + 1
			},
			getNodeById: function(t) {
				if (this.getId() === t) return this;
				for (var e = 0, i = this.children, n = i.length; n > e; e++) {
					var r = i[e].getNodeById(t);
					if (r) return r
				}
			},
			contains: function(t) {
				if (t === this) return !0;
				for (var e = 0, i = this.children, n = i.length; n > e; e++) {
					var r = i[e].contains(t);
					if (r) return r
				}
			},
			getAncestors: function(t) {
				for (var e = [], i = t ? this : this.parentNode; i;) e.push(i), i = i.parentNode;
				return e.reverse(), e
			},
			getValue: function(t) {
				var e = this.hostTree.data;
				return e.get(e.getDimension(t || "value"), this.dataIndex)
			},
			setLayout: function(t, e) {
				this.dataIndex >= 0 && this.hostTree.data.setItemLayout(this.dataIndex, t, e)
			},
			getLayout: function() {
				return this.hostTree.data.getItemLayout(this.dataIndex)
			},
			getModel: function(t) {
				if (!(this.dataIndex < 0)) {
					var e = this.hostTree,
						i = e.data.getItemModel(this.dataIndex),
						n = this.getLevelModel();
					return i.getModel(t, (n || e.hostModel).getModel(t))
				}
			},
			getLevelModel: function() {
				return (this.hostTree.levelModels || [])[this.depth]
			},
			setVisual: function(t, e) {
				this.dataIndex >= 0 && this.hostTree.data.setItemVisual(this.dataIndex, t, e)
			},
			getVisual: function(t, e) {
				return this.hostTree.data.getItemVisual(this.dataIndex, t, e)
			},
			getRawIndex: function() {
				return this.hostTree.data.getRawIndex(this.dataIndex)
			},
			getId: function() {
				return this.hostTree.data.getId(this.dataIndex)
			}
		}, e.prototype = {
			constructor: e,
			type: "tree",
			eachNode: function(t, e, i) {
				this.root.eachNode(t, e, i)
			},
			getNodeByDataIndex: function(t) {
				var e = this.data.getRawIndex(t);
				return this._nodes[e]
			},
			getNodeByName: function(t) {
				return this.root.getNodeByName(t)
			},
			update: function() {
				for (var t = this.data, e = this._nodes, i = 0, n = e.length; n > i; i++) e[i].dataIndex = -1;
				for (var i = 0, n = t.count(); n > i; i++) e[t.getRawIndex(i)].dataIndex = i
			}
		}, e.createTree = function(t, n, r) {
			function u(t, e) {
				h.push(t);
				var n = new l(t.name, h.length - 1, c);
				e ? i(n, e) : c.root = n;
				var r = t.children;
				if (r) for (var o = 0; o < r.length; o++) u(r[o], n)
			}
			var c = new e(n, r),
				h = [];
			u(t), c.root.updateDepthAndHeight(0);
			var d = s([{
				name: "value"
			}], h),
				p = new o(d, n);
			return p.initData(h), a.linkToTree(p, c), c
		}, e
	}), e("echarts/chart/treemap/TreemapSeries", ["require", "../../model/Series", "../../data/Tree", "zrender/core/util", "../../model/Model", "../../util/format"], function(t) {
		function e(t, i) {
			var n = 0;
			o.each(t.children, function(t) {
				e(t, i);
				var r = t.value;
				o.isArray(r) && (r = r[0]), n += r
			});
			var r = t.value;
			i >= 0 && (o.isArray(r) ? r = r[0] : t.value = new Array(i)), (null == r || isNaN(r)) && (r = n), 0 > r && (r = 0), i >= 0 ? t.value[0] = r : t.value = r
		}
		function i(t, e) {
			var i = e.get("color");
			if (i) {
				t = t || [];
				var n;
				if (o.each(t, function(t) {
					var e = new a(t),
						i = e.get("color");
					(e.get("itemStyle.normal.color") || i && "none" !== i) && (n = !0)
				}), !n) {
					var r = t[0] || (t[0] = {});
					r.color = i.slice()
				}
				return t
			}
		}
		var n = t("../../model/Series"),
			r = t("../../data/Tree"),
			o = t("zrender/core/util"),
			a = t("../../model/Model"),
			s = t("../../util/format"),
			l = s.encodeHTML,
			u = s.addCommas;
		return n.extend({
			type: "series.treemap",
			dependencies: ["grid", "polar"],
			defaultOption: {
				left: "center",
				top: "middle",
				right: null,
				bottom: null,
				width: "80%",
				height: "80%",
				sort: !0,
				clipWindow: "origin",
				squareRatio: .5 * (1 + Math.sqrt(5)),
				root: null,
				visualDimension: 0,
				zoomToNodeRatio: .1024,
				roam: !0,
				animation: !0,
				animationDurationUpdate: 1500,
				animationEasing: "quinticInOut",
				breadcrumb: {
					show: !0,
					height: 22,
					left: "center",
					top: "bottom",
					emptyItemWidth: 25,
					itemStyle: {
						normal: {
							color: "rgba(0,0,0,0.7)",
							borderColor: "rgba(255,255,255,0.7)",
							borderWidth: 1,
							shadowColor: "rgba(150,150,150,1)",
							shadowBlur: 3,
							shadowOffsetX: 0,
							shadowOffsetY: 0,
							textStyle: {
								color: "#fff"
							}
						},
						emphasis: {
							textStyle: {}
						}
					}
				},
				label: {
					normal: {
						show: !0,
						position: ["50%", "50%"],
						textStyle: {
							align: "center",
							baseline: "middle",
							color: "#fff",
							ellipsis: !0
						}
					}
				},
				itemStyle: {
					normal: {
						color: null,
						colorAlpha: null,
						colorSaturation: null,
						borderWidth: 0,
						gapWidth: 0,
						borderColor: "#fff",
						borderColorSaturation: null
					},
					emphasis: {}
				},
				color: "none",
				colorAlpha: null,
				colorSaturation: null,
				colorMappingBy: "index",
				visibleMin: 10,
				childrenVisibleMin: null,
				levels: []
			},
			getInitialData: function(t, n) {
				var a = t.data || [],
					s = t.name;
				null == s && (s = t.name);
				var l = {
					name: s,
					children: t.data
				},
					u = (a[0] || {}).value;
				e(l, o.isArray(u) ? u.length : -1);
				var c = t.levels || [];
				return c = t.levels = i(c, n), r.createTree(l, this, c).data
			},
			getViewRoot: function() {
				var t = this.option.root,
					e = this.getData().tree.root;
				return t && e.getNodeById(t) || e
			},
			formatTooltip: function(t) {
				var e = this.getData(),
					i = this.getRawValue(t),
					n = u(o.isArray(i) ? i[0] : i),
					r = e.getName(t);
				return l(r) + ": " + n
			},
			getDataParams: function(t) {
				for (var e = n.prototype.getDataParams.apply(this, arguments), i = this.getData(), r = i.tree.getNodeByDataIndex(t), o = e.treePathInfo = []; r;) {
					var a = r.dataIndex;
					o.push({
						name: r.name,
						dataIndex: a,
						value: this.getRawValue(a)
					}), r = r.parentNode
				}
				return o.reverse(), e
			},
			setLayoutInfo: function(t) {
				this.layoutInfo = this.layoutInfo || {}, o.extend(this.layoutInfo, t)
			},
			mapIdToIndex: function(t) {
				var e = this._idIndexMap;
				e || (e = this._idIndexMap = {}, this._idIndexMapCount = 0);
				var i = e[t];
				return null == i && (e[t] = i = this._idIndexMapCount++), i
			}
		})
	}), e("echarts/chart/treemap/helper", ["require"], function(t) {
		var e = {
			retrieveTargetInfo: function(t, e) {
				if (t && "treemapZoomToNode" === t.type) {
					var i = e.getData().tree.root,
						n = t.targetNode;
					if (n && i.contains(n)) return {
						node: n
					};
					var r = t.targetNodeId;
					return null != r && (n = i.getNodeById(r)) ? {
						node: n
					} : null
				}
			}
		};
		return e
	}), e("echarts/chart/treemap/Breadcrumb", ["require", "../../util/graphic", "../../util/layout", "zrender/core/util"], function(t) {
		function e(t, e) {
			this.group = new n.Group, t.add(this.group), this._onSelect = e || o.noop
		}
		function i(t, e, i, n, r, o) {
			var a = [
				[r ? t : t - l, e],
				[t + i, e],
				[t + i, e + n],
				[r ? t : t - l, e + n]
			];
			return !o && a.splice(2, 0, [t + i + l, e + n / 2]), !r && a.push([t, e + n / 2]), a
		}
		var n = t("../../util/graphic"),
			r = t("../../util/layout"),
			o = t("zrender/core/util"),
			a = 8,
			s = 8,
			l = 5;
		return e.prototype = {
			constructor: e,
			render: function(t, e, i) {
				var n = t.getModel("breadcrumb"),
					o = this.group;
				if (o.removeAll(), n.get("show") && i) {
					var a = n.getModel("itemStyle.normal"),
						s = a.getModel("textStyle"),
						l = {
							pos: {
								left: n.get("left"),
								right: n.get("right"),
								top: n.get("top"),
								bottom: n.get("bottom")
							},
							box: {
								width: e.getWidth(),
								height: e.getHeight()
							},
							emptyItemWidth: n.get("emptyItemWidth"),
							totalWidth: 0,
							renderList: []
						};
					this._prepare(n, i, l, s), this._renderContent(n, i, l, a, s), r.positionGroup(o, l.pos, l.box)
				}
			},
			_prepare: function(t, e, i, n) {
				for (var r = e; r; r = r.parentNode) {
					var o = r.getModel().get("name"),
						l = n.getTextRect(o),
						u = Math.max(l.width + 2 * a, i.emptyItemWidth);
					i.totalWidth += u + s, i.renderList.push({
						node: r,
						text: o,
						width: u
					})
				}
			},
			_renderContent: function(t, e, a, l, u) {
				for (var c = 0, h = a.emptyItemWidth, d = t.get("height"), p = r.getAvailableSize(a.pos, a.box), f = a.totalWidth, m = a.renderList, g = m.length - 1; g >= 0; g--) {
					var v = m[g],
						y = v.width,
						_ = v.text;
					f > p.width && (f -= y - h, y = h, _ = ""), this.group.add(new n.Polygon({
						shape: {
							points: i(c, 0, y, d, g === m.length - 1, 0 === g)
						},
						style: o.defaults(l.getItemStyle(), {
							lineJoin: "bevel",
							text: _,
							textFill: u.getTextColor(),
							textFont: u.getFont()
						}),
						onclick: o.bind(this._onSelect, this, v.node)
					})), c += y + s
				}
			},
			remove: function() {
				this.group.removeAll()
			}
		}, e
	}), e("echarts/util/animation", ["require", "zrender/core/util"], function(t) {
		function e() {
			var t, e = [],
				n = {};
			return {
				add: function(t, r, o, a, s) {
					return i.isString(a) && (s = a, a = 0), n[t.id] ? !1 : (n[t.id] = 1, e.push({
						el: t,
						target: r,
						time: o,
						delay: a,
						easing: s
					}), !0)
				},
				done: function(e) {
					return t = e, this
				},
				start: function() {
					function i() {
						r--, r || (e.length = 0, n = {}, t && t())
					}
					for (var r = e.length, o = 0, a = e.length; a > o; o++) {
						var s = e[o];
						s.el.animateTo(s.target, s.time, s.delay, s.easing, i)
					}
					return this
				}
			}
		}
		var i = t("zrender/core/util");
		return {
			createWrap: e
		}
	}), e("echarts/chart/treemap/TreemapView", ["require", "zrender/core/util", "../../util/graphic", "../../data/DataDiffer", "./helper", "./Breadcrumb", "../../component/helper/RoamController", "zrender/core/BoundingRect", "zrender/core/matrix", "../../util/animation", "../../echarts"], function(t) {
		function e() {
			return {
				nodeGroup: [],
				background: [],
				content: []
			}
		}
		var i = t("zrender/core/util"),
			n = t("../../util/graphic"),
			r = t("../../data/DataDiffer"),
			o = t("./helper"),
			a = t("./Breadcrumb"),
			s = t("../../component/helper/RoamController"),
			l = t("zrender/core/BoundingRect"),
			u = t("zrender/core/matrix"),
			c = t("../../util/animation"),
			h = i.bind,
			d = n.Group,
			p = n.Rect,
			f = i.each,
			m = 3;
		return t("../../echarts").extendChartView({
			type: "treemap",
			init: function(t, i) {
				this._containerGroup, this._storage = e(), this._oldTree, this._breadcrumb, this._controller, this._state = "ready", this._mayClick
			},
			render: function(t, e, n, r) {
				var a = e.findComponents({
					mainType: "series",
					subType: "treemap",
					query: r
				});
				if (!(i.indexOf(a, t) < 0)) {
					this.seriesModel = t, this.api = n, this.ecModel = e;
					var s = r && r.type,
						l = t.layoutInfo,
						u = !this._oldTree,
						c = this._giveContainerGroup(l),
						h = this._doRender(c, t);
					u || s && "treemapZoomToNode" !== s ? h.renderFinally() : this._doAnimation(c, h, t), this._resetController(n);
					var d = o.retrieveTargetInfo(r, t);
					this._renderBreadcrumb(t, n, d)
				}
			},
			_giveContainerGroup: function(t) {
				var e = this._containerGroup;
				return e || (e = this._containerGroup = new d, this._initEvents(e), this.group.add(e)), e.position = [t.x, t.y], e
			},
			_doRender: function(t, n) {
				function o(t, e, n, a, s) {
					function l(t) {
						return t.getId()
					}
					function u(i, r) {
						var l = null != i ? t[i] : null,
							u = null != r ? e[r] : null,
							c = s || l === _;
						c || (l = null);
						var h = y(l, u, n);
						h && o(l && l.viewChildren || [], u && u.viewChildren || [], h, a, c)
					}
					a ? (e = t, f(t, function(t, e) {
						!t.isRemoved() && u(e, e)
					})) : new r(e, t, l, l).add(u).update(u).remove(i.curry(u, null)).execute()
				}
				function a(t) {
					var i = e();
					return t && f(t, function(t, e) {
						var n = i[e];
						f(t, function(t) {
							t && (n.push(t), t.__tmWillDelete = e)
						})
					}), i
				}
				function s() {
					f(v, function(t) {
						f(t, function(t) {
							t.parent && t.parent.remove(t)
						})
					}), f(m, function(t) {
						t.invisible = !0
					}), f(g, function(t) {
						t.invisible = !1, t.__tmWillVisible = !1, t.dirty()
					})
				}
				var l = n.getData().tree,
					u = this._oldTree,
					c = e(),
					d = e(),
					p = this._storage,
					m = [],
					g = [],
					v = [],
					y = h(this._renderNode, this, d, p, c, m, g),
					_ = n.getViewRoot();
				o(l.root ? [l.root] : [], u && u.root ? [u.root] : [], t, l === u || !u, _ === l.root);
				var v = a(p);
				return this._oldTree = l, this._storage = d, {
					lastsForAnimation: c,
					willDeleteEls: v,
					renderFinally: s
				}
			},
			_renderNode: function(t, e, n, r, o, a, s, l) {
				function u(i, r) {
					var o = null != g && e[i][g],
						a = n[i];
					return o ? (e[i][g] = null, c(a, o, i)) : x || (o = new r, h(a, o, i)), t[i][m] = o
				}
				function c(t, e, n) {
					var r = t[m] = {};
					r.old = "nodeGroup" === n ? e.position.slice() : i.extend({}, e.shape)
				}
				function h(t, e, i) {
					if ("background" === i) e.invisible = !0, e.__tmWillVisible = !0, o.push(e);
					else {
						var r, s = a.parentNode,
							l = 0,
							u = 0;
						s && (r = n.background[s.getRawIndex()]) && (l = r.old.width, u = r.old.height);
						var c = t[m] = {};
						c.old = "nodeGroup" === i ? [l, u] : {
							x: l,
							y: u,
							width: 0,
							height: 0
						}, c.fadein = "nodeGroup" !== i
					}
				}
				function f(t, e) {
					x ? !t.invisible && r.push(t) : (t.setStyle(e), t.__tmWillVisible || (t.invisible = !1))
				}
				var m = a && a.getRawIndex(),
					g = s && s.getRawIndex();
				if (a) {
					var v = a.getLayout(),
						y = v.width,
						_ = v.height,
						x = v.invisible,
						b = u("nodeGroup", d);
					if (b) {
						l.add(b), b.position = [v.x, v.y], b.__tmNodeWidth = y, b.__tmNodeHeight = _;
						var w = u("background", p);
						w && (w.setShape({
							x: 0,
							y: 0,
							width: y,
							height: _
						}), f(w, {
							fill: a.getVisual("borderColor", !0)
						}), b.add(w));
						var M = a.viewChildren;
						if (!M || !M.length) {
							var S = v.borderWidth,
								L = u("content", p);
							if (L) {
								var C = Math.max(y - 2 * S, 0),
									T = Math.max(_ - 2 * S, 0),
									P = a.getModel("label.normal"),
									A = a.getModel("label.normal.textStyle"),
									D = a.getModel().get("name"),
									z = A.getTextRect(D),
									I = P.get("show");
								!I || z.height > T ? D = "" : z.width > C && (D = A.get("ellipsis") ? A.ellipsis(D, C) : ""), L.dataIndex = a.dataIndex, L.seriesIndex = this.seriesModel.seriesIndex, L.culling = !0, L.setShape({
									x: S,
									y: S,
									width: C,
									height: T
								}), f(L, {
									fill: a.getVisual("color", !0),
									text: D,
									textPosition: P.get("position"),
									textFill: A.getTextColor(),
									textAlign: A.get("align"),
									textBaseline: A.get("baseline"),
									textFont: A.getFont()
								}), b.add(L)
							}
						}
						return b
					}
				}
			},
			_doAnimation: function(t, e, n) {
				if (n.get("animation")) {
					var r = n.get("animationDurationUpdate"),
						o = n.get("animationEasing"),
						a = c.createWrap(),
						s = this.seriesModel.getViewRoot(),
						l = this._storage.nodeGroup[s.getRawIndex()];
					l && l.traverse(function(t) {
						var e;
						if (!t.invisible && (e = t.__tmWillDelete)) {
							var i = 0,
								n = 0,
								s = t.parent;
							s.__tmWillDelete || (i = s.__tmNodeWidth, n = s.__tmNodeHeight);
							var l = "nodeGroup" === e ? {
								position: [i, n],
								style: {
									opacity: 0
								}
							} : {
								shape: {
									x: i,
									y: n,
									width: 0,
									height: 0
								},
								style: {
									opacity: 0
								}
							};
							a.add(t, l, r, o)
						}
					}), f(this._storage, function(t, n) {
						f(t, function(t, s) {
							var l, u = e.lastsForAnimation[n][s];
							u && ("nodeGroup" === n ? (l = {
								position: t.position.slice()
							}, t.position = u.old) : (l = {
								shape: i.extend({}, t.shape)
							}, t.setShape(u.old), u.fadein ? (t.setStyle("opacity", 0), l.style = {
								opacity: 1
							}) : 1 !== t.style.opacity && (l.style = {
								opacity: 1
							})), a.add(t, l, r, o))
						})
					}, this), this._state = "animating", a.done(h(function() {
						this._state = "ready", e.renderFinally()
					}, this)).start()
				}
			},
			_resetController: function(t) {
				function e(t) {
					return this._mayClick = !1, t.apply(this, Array.prototype.slice.call(arguments, 1))
				}
				var i = this._controller;
				return i || (i = this._controller = new s(t.getZr()), i.enable(), i.on("pan", h(e, this, this._onPan)), i.on("zoom", h(e, this, this._onZoom))), i.rect = new l(0, 0, t.getWidth(), t.getHeight()), this.seriesModel.get("roam") ? void 0 : (i.off("pan").off("zoom"), void(this._controller = null))
			},
			_onPan: function(t, e) {
				if ("animating" !== this._state && (Math.abs(t) > m || Math.abs(e) > m)) {
					var i = this.seriesModel.getViewRoot();
					if (!i) return;
					var n = i.getLayout();
					if (!n) return;
					this.api.dispatchAction({
						type: "treemapMove",
						from: this.uid,
						seriesId: this.seriesModel.id,
						rootRect: {
							x: n.x + t,
							y: n.y + e,
							width: n.width,
							height: n.height
						}
					})
				}
			},
			_onZoom: function(t, e, i) {
				if ("animating" !== this._state) {
					var n = this.seriesModel.getViewRoot();
					if (!n) return;
					var r = n.getLayout();
					if (!r) return;
					var o = new l(r.x, r.y, r.width, r.height),
						a = this.seriesModel.layoutInfo;
					e -= a.x, i -= a.y;
					var s = u.create();
					u.translate(s, s, [-e, -i]), u.scale(s, s, [t, t]), u.translate(s, s, [e, i]), o.applyTransform(s), this.api.dispatchAction({
						type: "treemapRender",
						from: this.uid,
						seriesId: this.seriesModel.id,
						rootRect: {
							x: o.x,
							y: o.y,
							width: o.width,
							height: o.height
						}
					})
				}
			},
			_initEvents: function(t) {
				function e(t) {
					var e = this.findTarget(t.offsetX, t.offsetY);
					e && this._zoomToNode(e)
				}
				t.on("mousedown", function(t) {
					"ready" === this._state && (this._mayClick = !0)
				}, this), t.on("mouseup", function(t) {
					this._mayClick && (this._mayClick = !1, "ready" === this._state && e.call(this, t))
				}, this)
			},
			_renderBreadcrumb: function(t, e, i) {
				function n(t) {
					this._zoomToNode({
						node: t
					})
				}
				i || (i = this.findTarget(e.getWidth() / 2, e.getHeight() / 2), i || (i = {
					node: t.getData().tree.root
				})), (this._breadcrumb || (this._breadcrumb = new a(this.group, h(n, this)))).render(t, e, i.node)
			},
			remove: function() {
				this._containerGroup && this._containerGroup.removeAll(), this._storage = e(), this._state = "ready", this._breadcrumb && this._breadcrumb.remove()
			},
			_zoomToNode: function(t) {
				this.api.dispatchAction({
					type: "treemapZoomToNode",
					from: this.uid,
					seriesId: this.seriesModel.id,
					targetNode: t.node
				})
			},
			findTarget: function(t, e) {
				var i, n = this.seriesModel.getViewRoot();
				return n.eachNode({
					attr: "viewChildren",
					order: "preorder"
				}, function(n) {
					var r = this._storage.background[n.getRawIndex()];
					if (r) {
						var o = r.transformCoordToLocal(t, e),
							a = r.shape;
						if (!(a.x <= o[0] && o[0] <= a.x + a.width && a.y <= o[1] && o[1] <= a.y + a.height)) return !1;
						i = {
							node: n,
							offsetX: o[0],
							offsetY: o[1]
						}
					}
				}, this), i
			}
		})
	}), e("echarts/chart/treemap/treemapAction", ["require", "../../echarts"], function(t) {
		var e = t("../../echarts"),
			i = function() {};
		e.registerAction({
			type: "treemapZoomToNode",
			update: "updateView"
		}, i), e.registerAction({
			type: "treemapRender",
			update: "updateView"
		}, i), e.registerAction({
			type: "treemapMove",
			update: "updateView"
		}, i)
	}), e("echarts/visual/VisualMapping", ["require", "zrender/core/util", "zrender/tool/color", "../util/number"], function(t) {
		function e(t) {
			var e = t.pieceList;
			t.hasSpecialVisual = !1, l.each(e, function(e, i) {
				e.originIndex = i, e.visual && (t.hasSpecialVisual = !0)
			})
		}
		function i(t) {
			var e = t.categories,
				i = t.visual,
				n = l.isArray(i);
			if (!e) {
				if (n) return;
				throw new Error
			}
			var r = t.categoryMap = {};
			if (h(e, function(t, e) {
				r[t] = e
			}), !n) {
				var o = [];
				l.isObject(i) ? h(i, function(t, e) {
					var i = r[e];
					o[null != i ? i : p] = t
				}) : o[p] = i, i = t.visual = o
			}
			for (var a = e.length - 1; a >= 0; a--) null == i[a] && (delete r[e[a]], e.pop())
		}
		function n(t) {
			return {
				applyVisual: function(e, i, n) {
					var r = i("color"),
						o = l.isArray(e);
					if (e = o ? [this.mapValueToVisual(e[0]), this.mapValueToVisual(e[1])] : this.mapValueToVisual(e), l.isArray(r)) for (var a = 0, s = r.length; s > a; a++) r[a].color = t(r[a].color, o ? e[a] : e);
					else n("color", t(r, e))
				},
				mapValueToVisual: function(t) {
					var e = this._normalizeData(t),
						i = this._getSpecifiedVisual(t),
						n = this.option.visual;
					return null == i && (i = s(this) ? a(this, n, e) : c(e, [0, 1], n, !0)), i
				}
			}
		}
		function r(t, e) {
			return t[Math.round(c(e, [0, 1], [0, t.length - 1], !0))]
		}
		function o(t, e, i) {
			i("color", this.mapValueToVisual(t))
		}
		function a(t, e, i) {
			return e[t.option.loop && i !== p ? i % e.length : i]
		}
		function s(t) {
			return "category" === t.option.mappingMethod
		}
		var l = t("zrender/core/util"),
			u = t("zrender/tool/color"),
			c = t("../util/number").linearMap,
			h = l.each,
			d = l.isObject,
			p = -1,
			f = function(t) {
				var n = t.mappingMethod,
					r = t.type;
				this.type = r, this.mappingMethod = n;
				var o = this.option = l.clone(t);
				this._normalizeData = g[n], this._getSpecifiedVisual = l.bind(v[n], this, r), l.extend(this, m[r]), "piecewise" === n && e(o), "category" === n && i(o)
			};
		f.prototype = {
			constructor: f,
			applyVisual: null,
			isValueActive: null,
			mapValueToVisual: null,
			getNormalizer: function() {
				return l.bind(this._normalizeData, this)
			}
		};
		var m = f.visualHandlers = {
			color: {
				applyVisual: o,
				getColorMapper: function() {
					var t = s(this) ? this.option.visual : l.map(this.option.visual, u.parse);
					return l.bind(s(this) ?
					function(e, i) {
						return !i && (e = this._normalizeData(e)), a(this, t, e)
					} : function(e, i, n) {
						var r = !! n;
						return !i && (e = this._normalizeData(e)), n = u.fastMapToColor(e, t, n), r ? n : l.stringify(n, "rgba")
					}, this)
				},
				mapValueToVisual: function(t) {
					var e = this.option.visual;
					if (l.isArray(t)) return t = [this._normalizeData(t[0]), this._normalizeData(t[1])], u.mapIntervalToColor(t, e);
					var i = this._normalizeData(t),
						n = this._getSpecifiedVisual(t);
					return null == n && (n = s(this) ? a(this, e, i) : u.mapToColor(i, e)), n
				}
			},
			colorHue: n(function(t, e) {
				return u.modifyHSL(t, e)
			}),
			colorSaturation: n(function(t, e) {
				return u.modifyHSL(t, null, e)
			}),
			colorLightness: n(function(t, e) {
				return u.modifyHSL(t, null, null, e)
			}),
			colorAlpha: n(function(t, e) {
				return u.modifyAlpha(t, e)
			}),
			symbol: {
				applyVisual: function(t, e, i) {
					var n = this.mapValueToVisual(t);
					if (l.isString(n)) i("symbol", n);
					else if (d(n)) for (var r in n) n.hasOwnProperty(r) && i(r, n[r])
				},
				mapValueToVisual: function(t) {
					var e = this._normalizeData(t),
						i = this._getSpecifiedVisual(t),
						n = this.option.visual;
					return null == i && (i = s(this) ? a(this, n, e) : r(n, e) || {}), i
				}
			},
			symbolSize: {
				applyVisual: function(t, e, i) {
					i("symbolSize", this.mapValueToVisual(t))
				},
				mapValueToVisual: function(t) {
					var e = this._normalizeData(t),
						i = this._getSpecifiedVisual(t),
						n = this.option.visual;
					return null == i && (i = s(this) ? a(this, n, e) : c(e, [0, 1], n, !0)), i
				}
			}
		},
			g = {
				linear: function(t) {
					return c(t, this.option.dataExtent, [0, 1], !0)
				},
				piecewise: function(t) {
					var e = this.option.pieceList,
						i = f.findPieceIndex(t, e);
					return null != i ? c(i, [0, e.length - 1], [0, 1], !0) : void 0
				},
				category: function(t) {
					var e = this.option.categories ? this.option.categoryMap[t] : t;
					return null == e ? p : e
				}
			},
			v = {
				linear: l.noop,
				piecewise: function(t, e) {
					var i = this.option,
						n = i.pieceList;
					if (i.hasSpecialVisual) {
						var r = f.findPieceIndex(e, n),
							o = n[r];
						if (o && o.visual) return o.visual[t]
					}
				},
				category: l.noop
			};
		return f.addVisualHandler = function(t, e) {
			m[t] = e
		}, f.isValidType = function(t) {
			return m.hasOwnProperty(t)
		}, f.eachVisual = function(t, e, i) {
			l.isObject(t) ? l.each(t, e, i) : e.call(i, t)
		}, f.mapVisual = function(t, e, i) {
			var n, r = l.isArray(t) ? [] : l.isObject(t) ? {} : (n = !0, null);
			return f.eachVisual(t, function(t, o) {
				var a = e.call(i, t, o);
				n ? r = a : r[o] = a
			}), r
		}, f.isInVisualCluster = function(t, e) {
			return "color" === e ? !(!t || 0 !== t.indexOf(e)) : t === e
		}, f.retrieveVisuals = function(t) {
			var e, i = {};
			return t && h(m, function(n, r) {
				t.hasOwnProperty(r) && (i[r] = t[r], e = !0)
			}), e ? i : null
		}, f.prepareVisualTypes = function(t) {
			if (d(t)) {
				var e = [];
				h(t, function(t, i) {
					e.push(i)
				}), t = e
			} else {
				if (!l.isArray(t)) return [];
				t = t.slice()
			}
			return t.sort(function(t, e) {
				return "color" === e && "color" !== t && 0 === t.indexOf("color") ? 1 : -1
			}), t
		}, f.findPieceIndex = function(t, e) {
			for (var i = 0, n = e.length; n > i; i++) {
				var r = e[i];
				if (null != r.value && r.value === t) return i
			}
			for (var i = 0, n = e.length; n > i; i++) {
				var r = e[i],
					o = r.interval;
				if (o) if (o[0] === -(1 / 0)) {
					if (t < o[1]) return i
				} else if (o[1] === 1 / 0) {
					if (o[0] < t) return i
				} else if (r.interval[0] <= t && t <= r.interval[1]) return i
			}
		}, f
	}), e("echarts/chart/treemap/treemapVisual", ["require", "../../visual/VisualMapping", "zrender/tool/color", "zrender/core/util"], function(t) {
		function e(t, o, s, u, c, d) {
			var f = t.getModel(),
				m = t.getLayout();
			if (!m.invisible) {
				var g, v = t.getModel(p),
					y = s[t.depth],
					_ = i(v, o, y, u),
					x = v.get("borderColor"),
					b = v.get("borderColorSaturation");
				null != b && (g = n(_, t), x = r(b, g)), t.setVisual("borderColor", x);
				var w = t.viewChildren;
				if (w && w.length) {
					var M = a(t, f, m, v, _, w);
					h.each(w, function(t, i) {
						if (t.depth >= c.length || t === c[t.depth]) {
							var n = l(f, _, t, i, M, d);
							e(t, n, s, u, c, d)
						}
					})
				} else g = n(_, t), t.setVisual("color", g)
			}
		}
		function i(t, e, i, n) {
			var r = h.extend({}, e);
			return h.each(["color", "colorAlpha", "colorSaturation"], function(o) {
				var a = t.get(o, !0);
				null == a && i && (a = i[o]), null == a && (a = e[o]), null == a && (a = n.get(o)), null != a && (r[o] = a)
			}), r
		}
		function n(t) {
			var e = o(t, "color");
			if (e) {
				var i = o(t, "colorAlpha"),
					n = o(t, "colorSaturation");
				return n && (e = c.modifyHSL(e, null, null, n)), i && (e = c.modifyAlpha(e, i)), e
			}
		}
		function r(t, e) {
			return null != e ? c.modifyHSL(e, null, null, t) : null
		}
		function o(t, e) {
			var i = t[e];
			return null != i && "none" !== i ? i : void 0
		}
		function a(t, e, i, n, r, o) {
			if (o && o.length) {
				var a = s(e, "color") || null != r.color && "none" !== r.color && (s(e, "colorAlpha") || s(e, "colorSaturation"));
				if (a) {
					var l = e.get("colorMappingBy"),
						c = {
							type: a.name,
							dataExtent: i.dataExtent,
							visual: a.range
						};
					"color" !== c.type || "index" !== l && "id" !== l ? c.mappingMethod = "linear" : (c.mappingMethod = "category", c.loop = !0);
					var h = new u(c);
					return h.__drColorMappingBy = l, h
				}
			}
		}
		function s(t, e) {
			var i = t.get(e);
			return d(i) && i.length ? {
				name: e,
				range: i
			} : null
		}
		function l(t, e, i, n, r, o) {
			var a = h.extend({}, e);
			if (r) {
				var s = r.type,
					l = "color" === s && r.__drColorMappingBy,
					u = "index" === l ? n : "id" === l ? o.mapIdToIndex(i.getId()) : i.getValue(t.get("visualDimension"));
				a[s] = r.mapValueToVisual(u)
			}
			return a
		}
		var u = t("../../visual/VisualMapping"),
			c = t("zrender/tool/color"),
			h = t("zrender/core/util"),
			d = h.isArray,
			p = "itemStyle.normal";
		return function(t, i) {
			var n = {
				mainType: "series",
				subType: "treemap",
				query: i
			};
			t.eachComponent(n, function(t) {
				var i = t.getData().tree,
					n = i.root,
					r = t.getModel(p);
				if (!n.isRemoved()) {
					var o = h.map(i.levelModels, function(t) {
						return t ? t.get(p) : null
					});
					e(n, {}, o, r, t.getViewRoot().getAncestors(), t)
				}
			})
		}
	}), e("echarts/chart/treemap/treemapLayout", ["require", "zrender/core/util", "../../util/number", "../../util/layout", "zrender/core/BoundingRect", "./helper"], function(t) {
		function e(t, e, n) {
			var r = {
				mainType: "series",
				subType: "treemap",
				query: n
			};
			t.eachComponent(r, function(t) {
				var r = e.getWidth(),
					o = e.getHeight(),
					a = t.get("size") || [],
					s = v(y(t.get("width"), a[0]), r),
					l = v(y(t.get("height"), a[1]), o),
					d = g.getLayoutRect(t.getBoxLayoutParams(), {
						width: e.getWidth(),
						height: e.getHeight()
					}),
					p = n && n.type,
					f = x.retrieveTargetInfo(n, t),
					m = "treemapRender" === p || "treemapMove" === p ? n.rootRect : null,
					b = t.getViewRoot();
				if ("treemapMove" !== p) {
					var w = "treemapZoomToNode" === p ? u(t, f, s, l) : m ? [m.width, m.height] : [s, l],
						M = t.get("sort");
					M && "asc" !== M && "desc" !== M && (M = "desc");
					var S = {
						squareRatio: t.get("squareRatio"),
						sort: M
					};
					b.setLayout({
						x: 0,
						y: 0,
						width: w[0],
						height: w[1],
						area: w[0] * w[1]
					}), i(b, S)
				}
				b.setLayout(c(d, m, f), !0), t.setLayoutInfo(d), h(b, new _(-d.x, -d.y, r, o))
			})
		}
		function i(t, e) {
			var r, o;
			if (!t.isRemoved()) {
				var a = t.getLayout();
				r = a.width, o = a.height;
				var u = t.getModel("itemStyle.normal"),
					c = u.get("borderWidth"),
					h = u.get("gapWidth") / 2,
					m = c - h,
					g = t.getModel();
				t.setLayout({
					borderWidth: c
				}, !0), r = d(r - 2 * m, 0), o = d(o - 2 * m, 0);
				var v = r * o,
					y = n(t, g, v, e);
				if (y.length) {
					var _ = {
						x: m,
						y: m,
						width: r,
						height: o
					},
						x = p(r, o),
						b = 1 / 0,
						w = [];
					w.area = 0;
					for (var M = 0, S = y.length; S > M;) {
						var L = y[M];
						w.push(L), w.area += L.getLayout().area;
						var C = s(w, x, e.squareRatio);
						b >= C ? (M++, b = C) : (w.area -= w.pop().getLayout().area, l(w, x, _, h, !1), x = p(_.width, _.height), w.length = w.area = 0, b = 1 / 0)
					}
					w.length && l(w, x, _, h, !0);
					var T;
					if (!e.hideChildren) {
						var P = g.get("childrenVisibleMin");
						null != P && P > v && (T = !0)
					}
					for (var M = 0, S = y.length; S > M; M++) {
						var A = f.extend({
							hideChildren: T
						}, e);
						i(y[M], A)
					}
				}
			}
		}
		function n(t, e, i, n) {
			var s = t.children || [],
				l = n.sort;
			if ("asc" !== l && "desc" !== l && (l = null), n.hideChildren) return t.viewChildren = [];
			s = f.filter(s, function(t) {
				return !t.isRemoved()
			}), o(s, l);
			var u = a(e, s, l);
			if (0 === u.sum) return t.viewChildren = [];
			if (u.sum = r(e, i, u.sum, l, s), 0 === u.sum) return t.viewChildren = [];
			for (var c = 0, h = s.length; h > c; c++) {
				var d = s[c].getValue() / u.sum * i;
				s[c].setLayout({
					area: d
				})
			}
			return t.viewChildren = s, t.setLayout({
				dataExtent: u.dataExtent
			}, !0), s
		}
		function r(t, e, i, n, r) {
			if (!n) return i;
			for (var o = t.get("visibleMin"), a = r.length, s = a, l = a - 1; l >= 0; l--) {
				var u = r["asc" === n ? a - l - 1 : l].getValue();
				o > u / i * e && (s = l, i -= u)
			}
			return "asc" === n ? r.splice(0, a - s) : r.splice(s, a - s), i
		}
		function o(t, e) {
			return e && t.sort(function(t, i) {
				return "asc" === e ? t.getValue() - i.getValue() : i.getValue() - t.getValue()
			}), t
		}
		function a(t, e, i) {
			for (var n = 0, r = 0, o = e.length; o > r; r++) n += e[r].getValue();
			var a, s = t.get("visualDimension");
			if (e && e.length) if ("value" === s && i) a = [e[e.length - 1].getValue(), e[0].getValue()], "asc" === i && a.reverse();
			else {
				var a = [1 / 0, -(1 / 0)];
				f.each(e, function(t) {
					var e = t.getValue(s);
					e < a[0] && (a[0] = e), e > a[1] && (a[1] = e)
				})
			} else a = [NaN, NaN];
			return {
				sum: n,
				dataExtent: a
			}
		}
		function s(t, e, i) {
			for (var n, r = 0, o = 1 / 0, a = 0, s = t.length; s > a; a++) n = t[a].getLayout().area, n && (o > n && (o = n), n > r && (r = n));
			var l = t.area * t.area,
				u = e * e * i;
			return l ? d(u * r / l, l / (u * o)) : 1 / 0
		}
		function l(t, e, i, n, r) {
			var o = e === i.width ? 0 : 1,
				a = 1 - o,
				s = ["x", "y"],
				l = ["width", "height"],
				u = i[s[o]],
				c = e ? t.area / e : 0;
			(r || c > i[l[a]]) && (c = i[l[a]]);
			for (var h = 0, f = t.length; f > h; h++) {
				var m = t[h],
					g = {},
					v = c ? m.getLayout().area / c : 0,
					y = g[l[a]] = d(c - 2 * n, 0),
					_ = i[s[o]] + i[l[o]] - u,
					x = h === f - 1 || v > _ ? _ : v,
					b = g[l[o]] = d(x - 2 * n, 0);
				g[s[a]] = i[s[a]] + p(n, y / 2), g[s[o]] = u + p(n, b / 2), u += x, m.setLayout(g, !0)
			}
			i[s[a]] += c, i[l[a]] -= c
		}
		function u(t, e, i, n) {
			var r = (e || {}).node,
				o = [i, n];
			if (!r || r === t.getViewRoot()) return o;
			for (var a, s = i * n, l = s * t.get("zoomToNodeRatio"); a = r.parentNode;) {
				for (var u = 0, c = a.children, h = 0, d = c.length; d > h; h++) u += c[h].getValue();
				var p = r.getValue();
				if (0 === p) return o;
				l *= u / p;
				var f = a.getModel("itemStyle.normal").get("borderWidth");
				isFinite(f) && (l += 4 * f * f + 4 * f * Math.pow(l, .5)), l > m.MAX_SAFE_INTEGER && (l = m.MAX_SAFE_INTEGER), r = a
			}
			s > l && (l = s);
			var g = Math.pow(l / s, .5);
			return [i * g, n * g]
		}
		function c(t, e, i) {
			if (e) return {
				x: e.x,
				y: e.y
			};
			var n = {
				x: 0,
				y: 0
			};
			if (!i) return n;
			var r = i.node,
				o = r.getLayout();
			if (!o) return n;
			for (var a = [o.width / 2, o.height / 2], s = r; s;) {
				var l = s.getLayout();
				a[0] += l.x, a[1] += l.y, s = s.parentNode
			}
			return {
				x: t.width / 2 - a[0],
				y: t.height / 2 - a[1]
			}
		}
		function h(t, e) {
			var i = t.getLayout();
			t.setLayout({
				invisible: !e.intersect(i)
			}, !0);
			for (var n = t.viewChildren || [], r = 0, o = n.length; o > r; r++) {
				var a = new _(e.x - i.x, e.y - i.y, e.width, e.height);
				h(n[r], a)
			}
		}
		var d = Math.max,
			p = Math.min,
			f = t("zrender/core/util"),
			m = t("../../util/number"),
			g = t("../../util/layout"),
			v = m.parsePercent,
			y = f.retrieve,
			_ = t("zrender/core/BoundingRect"),
			x = t("./helper");
		return e
	}), e("echarts/chart/treemap", ["require", "../echarts", "./treemap/TreemapSeries", "./treemap/TreemapView", "./treemap/treemapAction", "./treemap/treemapVisual", "./treemap/treemapLayout"], function(t) {
		var e = t("../echarts");
		t("./treemap/TreemapSeries"), t("./treemap/TreemapView"), t("./treemap/treemapAction"), e.registerVisualCoding("chart", t("./treemap/treemapVisual")), e.registerLayout(t("./treemap/treemapLayout"))
	}), e("echarts/data/Graph", ["require", "zrender/core/util"], function(t) {
		function e(t, e) {
			this.id = null == t ? "" : t, this.inEdges = [], this.outEdges = [], this.edges = [], this.hostGraph, this.dataIndex = null == e ? -1 : e
		}
		function i(t, e, i) {
			this.node1 = t, this.node2 = e, this.dataIndex = null == i ? -1 : i
		}
		var n = t("zrender/core/util"),
			r = function(t) {
				this._directed = t || !1, this.nodes = [], this.edges = [], this._nodesMap = {}, this._edgesMap = {}, this.data, this.edgeData
			},
			o = r.prototype;
		o.type = "graph", o.isDirected = function() {
			return this._directed
		}, o.addNode = function(t, i) {
			var n = this._nodesMap;
			if (!n[t]) {
				var r = new e(t, i);
				return r.hostGraph = this, this.nodes.push(r), n[t] = r, r
			}
		}, o.getNodeByIndex = function(t) {
			var e = this.data.getRawIndex(t);
			return this.nodes[e]
		}, o.getNodeById = function(t) {
			return this._nodesMap[t]
		}, o.addEdge = function(t, n, r) {
			var o = this._nodesMap,
				a = this._edgesMap;
			if (t instanceof e || (t = o[t]), n instanceof e || (n = o[n]), t && n) {
				var s = t.id + "-" + n.id;
				if (!a[s]) {
					var l = new i(t, n, r);
					return l.hostGraph = this, this._directed && (t.outEdges.push(l), n.inEdges.push(l)), t.edges.push(l), t !== n && n.edges.push(l), this.edges.push(l), a[s] = l, l
				}
			}
		}, o.getEdgeByIndex = function(t) {
			var e = this.edgeData.getRawIndex(t);
			return this.edges[e]
		}, o.getEdge = function(t, i) {
			t instanceof e && (t = t.id), i instanceof e && (i = i.id);
			var n = this._edgesMap;
			return this._directed ? n[t + "-" + i] : n[t + "-" + i] || n[i + "-" + t]
		}, o.eachNode = function(t, e) {
			for (var i = this.nodes, n = i.length, r = 0; n > r; r++) i[r].dataIndex >= 0 && t.call(e, i[r], r)
		}, o.eachEdge = function(t, e) {
			for (var i = this.edges, n = i.length, r = 0; n > r; r++) i[r].dataIndex >= 0 && i[r].node1.dataIndex >= 0 && i[r].node2.dataIndex >= 0 && t.call(e, i[r], r)
		}, o.breadthFirstTraverse = function(t, i, n, r) {
			if (!i instanceof e && (i = this._nodesMap[i]), i) {
				for (var o = "out" === n ? "outEdges" : "in" === n ? "inEdges" : "edges", a = 0; a < this.nodes.length; a++) this.nodes[a].__visited = !1;
				if (!t.call(r, i, null)) for (var s = [i]; s.length;) for (var l = s.shift(), u = l[o], a = 0; a < u.length; a++) {
					var c = u[a],
						h = c.node1 === l ? c.node2 : c.node1;
					if (!h.__visited) {
						if (t.call(h, h, l)) return;
						s.push(h), h.__visited = !0
					}
				}
			}
		}, o.update = function() {
			for (var t = this.data, e = this.edgeData, i = this.nodes, n = this.edges, r = 0, o = i.length; o > r; r++) i[r].dataIndex = -1;
			for (var r = 0, o = t.count(); o > r; r++) i[t.getRawIndex(r)].dataIndex = r;
			e.filterSelf(function(t) {
				var i = n[e.getRawIndex(t)];
				return i.node1.dataIndex >= 0 && i.node2.dataIndex >= 0
			});
			for (var r = 0, o = n.length; o > r; r++) n[r].dataIndex = -1;
			for (var r = 0, o = e.count(); o > r; r++) n[e.getRawIndex(r)].dataIndex = r
		}, o.setEdgeData = function(t) {
			this.edgeData = t, this._edgeDataSaved = t.cloneShallow()
		}, o.restoreData = function() {
			this.edgeData = this._edgeDataSaved.cloneShallow()
		}, o.clone = function() {
			for (var t = new r(this._directed), e = this.nodes, i = this.edges, n = 0; n < e.length; n++) t.addNode(e[n].id, e[n].dataIndex);
			for (var n = 0; n < i.length; n++) {
				var o = i[n];
				t.addEdge(o.node1.id, o.node2.id, o.dataIndex)
			}
			return t
		}, e.prototype = {
			constructor: e,
			degree: function() {
				return this.edges.length
			},
			inDegree: function() {
				return this.inEdges.length
			},
			outDegree: function() {
				return this.outEdges.length
			},
			getModel: function(t) {
				if (!(this.dataIndex < 0)) {
					var e = this.hostGraph,
						i = e.data.getItemModel(this.dataIndex);
					return i.getModel(t)
				}
			}
		}, i.prototype.getModel = function(t) {
			if (!(this.dataIndex < 0)) {
				var e = this.hostGraph,
					i = e.data.getItemModel(this.dataIndex);
				return i.getModel(t)
			}
		};
		var a = function(t, e) {
				return {
					getValue: function(i) {
						var n = this[t][e];
						return n.get(n.getDimension(i || "value"), this.dataIndex)
					},
					setVisual: function(i, n) {
						this.dataIndex >= 0 && this[t][e].setItemVisual(this.dataIndex, i, n)
					},
					getVisual: function(i, n) {
						return this[t][e].getItemVisual(this.dataIndex, i, n)
					},
					setLayout: function(i, n) {
						this.dataIndex >= 0 && this[t][e].setItemLayout(this.dataIndex, i, n)
					},
					getLayout: function() {
						return this[t][e].getItemLayout(this.dataIndex)
					},
					getGraphicEl: function() {
						return this[t][e].getItemGraphicEl(this.dataIndex)
					},
					getRawIndex: function() {
						return this[t][e].getRawIndex(this.dataIndex)
					}
				}
			};
		return n.mixin(e, a("hostGraph", "data")), n.mixin(i, a("hostGraph", "edgeData")), r.Node = e, r.Edge = i, r
	}), e("echarts/chart/helper/createGraphFromNodeEdge", ["require", "../../data/List", "../../data/Graph", "../../data/helper/linkList", "../../data/helper/completeDimensions", "zrender/core/util"], function(t) {
		var e = t("../../data/List"),
			i = t("../../data/Graph"),
			n = t("../../data/helper/linkList"),
			r = t("../../data/helper/completeDimensions"),
			o = t("zrender/core/util");
		return function(t, a, s, l) {
			for (var u = new i(l), c = 0; c < t.length; c++) u.addNode(o.retrieve(t[c].id, t[c].name, c), c);
			for (var h = [], d = [], c = 0; c < a.length; c++) {
				var p = a[c];
				u.addEdge(p.source, p.target, c) && (d.push(p), h.push(o.retrieve(p.id, p.source + " - " + p.target)))
			}
			var f = r(["value"], t),
				m = new e(f, s),
				g = new e(["value"], s);
			return m.initData(t), g.initData(d, h), u.setEdgeData(g), n.linkToGraph(m, u), u.update(), u
		}
	}), e("echarts/chart/graph/GraphSeries", ["require", "../../data/List", "zrender/core/util", "../helper/createGraphFromNodeEdge", "../../echarts"], function(t) {
		var e = t("../../data/List"),
			i = t("zrender/core/util"),
			n = t("../helper/createGraphFromNodeEdge");
		return t("../../echarts").extendSeriesModel({
			type: "series.graph",
			init: function(t) {
				this.$superApply("init", arguments), this.legendDataProvider = function() {
					return this._categoriesData
				}, this._updateCategoriesData()
			},
			mergeOption: function(t) {
				this.$superApply("mergeOption", arguments), this._updateCategoriesData()
			},
			getInitialData: function(t, e) {
				var i = t.edges || t.links,
					r = t.data || t.nodes;
				if (r && i) {
					var o = n(r, i, this, !0),
						a = o.data,
						s = this;
					return a.wrapMethod("getItemModel", function(t) {
						var e = s._categoriesModels,
							i = t.getShallow("category"),
							n = e[i];
						return n && (n.parentModel = t.parentModel, t.parentModel = n), t
					}), a
				}
			},
			restoreData: function() {
				this.$superApply("restoreData", arguments), this.getGraph().restoreData()
			},
			getGraph: function() {
				return this.getData().graph
			},
			getEdgeData: function() {
				return this.getGraph().edgeData
			},
			getCategoriesData: function() {
				return this._categoriesData
			},
			_updateCategoriesData: function() {
				var t = i.map(this.option.categories || [], function(t) {
					return null != t.value ? t : i.extend({
						value: 0
					}, t)
				}),
					n = new e(["value"], this);
				n.initData(t), this._categoriesData = n, this._categoriesModels = n.mapArray(function(t) {
					return n.getItemModel(t, !0)
				})
			},
			setRoamZoom: function(t) {
				var e = this.option.roamDetail;
				e && (e.zoom = t)
			},
			setRoamPan: function(t, e) {
				var i = this.option.roamDetail;
				i && (i.x = t, i.y = e)
			},
			defaultOption: {
				zlevel: 0,
				z: 2,
				color: ["#61a0a8", "#d14a61", "#fd9c35", "#675bba", "#fec42c", "#dd4444", "#fd9c35", "#cd4870"],
				coordinateSystem: "view",
				legendHoverLink: !0,
				hoverAnimation: !0,
				layout: null,
				force: {
					initLayout: null,
					repulsion: 50,
					gravity: .1,
					edgeLength: 30,
					layoutAnimation: !0
				},
				left: "center",
				top: "center",
				symbol: "circle",
				symbolSize: 10,
				draggable: !1,
				roam: !1,
				roamDetail: {
					x: 0,
					y: 0,
					zoom: 1
				},
				nodeScaleRatio: .6,
				label: {
					normal: {
						show: !1
					},
					emphasis: {
						show: !0
					}
				},
				itemStyle: {
					normal: {},
					emphasis: {}
				},
				lineStyle: {
					normal: {
						color: "#aaa",
						width: 1,
						curveness: 0,
						opacity: .5
					},
					emphasis: {}
				}
			}
		})
	}), e("echarts/chart/helper/LinePath", ["require", "../../util/graphic"], function(t) {
		var e = t("../../util/graphic"),
			i = e.Line.prototype,
			n = e.BezierCurve.prototype;
		return e.extendShape({
			type: "ec-line",
			style: {
				stroke: "#000",
				fill: null
			},
			shape: {
				x1: 0,
				y1: 0,
				x2: 0,
				y2: 0,
				percent: 1,
				cpx1: null,
				cpy1: null
			},
			buildPath: function(t, e) {
				(null == e.cpx1 || null == e.cpy1 ? i : n).buildPath(t, e)
			},
			pointAt: function(t) {
				var e = this.shape;
				return null == e.cpx1 || null == e.cpy1 ? i.pointAt.call(this, t) : n.pointAt.call(this, t)
			}
		})
	}), e("echarts/chart/helper/Line", ["require", "../../util/symbol", "zrender/core/vector", "./LinePath", "../../util/graphic", "zrender/core/util", "../../util/number"], function(t) {
		function e(t, e, i) {
			var n = e.getItemVisual(i, "color"),
				r = e.getItemVisual(i, "symbol"),
				o = e.getItemVisual(i, "symbolSize");
			if ("none" !== r) {
				d.isArray(o) || (o = [o, o]);
				var a = l.createSymbol(r, -o[0] / 2, -o[1] / 2, o[0], o[1], n);
				return a.name = t, a
			}
		}
		function i(t) {
			var e = new c({
				name: "line",
				style: {
					strokeNoScale: !0
				}
			});
			return n(e.shape, t), e
		}
		function n(t, e) {
			var i = e[0],
				n = e[1],
				r = e[2];
			t.x1 = i[0], t.y1 = i[1], t.x2 = n[0], t.y2 = n[1], t.percent = 1, r && (t.cpx1 = r[0], t.cpy1 = r[1])
		}
		function r(t) {
			return "symbol" === t.type && "arrow" === t.shape.symbolType
		}
		function o() {
			var t = this,
				e = t.childOfName("line");
			if (this.__dirty || e.__dirty) {
				var i = t.childOfName("fromSymbol"),
					n = t.childOfName("toSymbol"),
					o = t.childOfName("label"),
					s = e.pointAt(0),
					l = e.pointAt(e.shape.percent),
					c = u.sub([], l, s);
				u.normalize(c, c), i && (i.attr("position", s), r(n) && n.attr("rotation", a(s, l))), n && (n.attr("position", l), r(i) && i.attr("rotation", a(l, s))), o.attr("position", l);
				var h, d, p;
				"end" === o.__position ? (h = [5 * c[0] + l[0], 5 * c[1] + l[1]], d = c[0] > .8 ? "left" : c[0] < -.8 ? "right" : "center", p = c[1] > .8 ? "top" : c[1] < -.8 ? "bottom" : "middle") : (h = [5 * -c[0] + s[0], 5 * -c[1] + s[1]], d = c[0] > .8 ? "right" : c[0] < -.8 ? "left" : "center", p = c[1] > .8 ? "bottom" : c[1] < -.8 ? "top" : "middle"), o.attr({
					style: {
						textBaseline: o.__textBaseline || p,
						textAlign: o.__textAlign || d
					},
					position: h
				})
			}
		}
		function a(t, e) {
			return -Math.PI / 2 - Math.atan2(e[1] - t[1], e[0] - t[0])
		}
		function s(t, e, i, n) {
			h.Group.call(this), this._createLine(t, e, i, n)
		}
		var l = t("../../util/symbol"),
			u = t("zrender/core/vector"),
			c = t("./LinePath"),
			h = t("../../util/graphic"),
			d = t("zrender/core/util"),
			p = t("../../util/number"),
			f = s.prototype;
		return f.beforeUpdate = o, f._createLine = function(t, n, r, o) {
			var a = t.hostModel,
				s = t.getItemLayout(o),
				l = i(s);
			l.shape.percent = 0, h.initProps(l, {
				shape: {
					percent: 1
				}
			}, a), this.add(l);
			var u = new h.Text({
				name: "label"
			});
			if (this.add(u), n) {
				var c = e("fromSymbol", n, o);
				this.add(c), this._fromSymbolType = n.getItemVisual(o, "symbol")
			}
			if (r) {
				var d = e("toSymbol", r, o);
				this.add(d), this._toSymbolType = r.getItemVisual(o, "symbol")
			}
			this._updateCommonStl(t, n, r, o)
		}, f.updateData = function(t, i, r, o) {
			var a = t.hostModel,
				s = this.childOfName("line"),
				l = t.getItemLayout(o),
				u = {
					shape: {}
				};
			if (n(u.shape, l), h.updateProps(s, u, a), i) {
				var c = i.getItemVisual(o, "symbol");
				if (this._fromSymbolType !== c) {
					var d = e("fromSymbol", i, o);
					this.remove(s.childOfName("fromSymbol")), this.add(d)
				}
				this._fromSymbolType = c
			}
			if (r) {
				var p = r.getItemVisual(o, "symbol");
				if (p !== this._toSymbolType) {
					var f = e("toSymbol", r, o);
					this.remove(s.childOfName("toSymbol")), this.add(f)
				}
				this._toSymbolType = p
			}
			this._updateCommonStl(t, i, r, o)
		}, f._updateCommonStl = function(t, e, i, n) {
			var r = t.hostModel,
				o = this.childOfName("line"),
				a = t.getItemModel(n),
				s = a.getModel("label.normal"),
				l = s.getModel("textStyle"),
				u = a.getModel("label.emphasis"),
				c = u.getModel("textStyle"),
				f = p.round(r.getRawValue(n));
			isNaN(f) && (f = t.getName(n)), o.setStyle(d.extend({
				stroke: t.getItemVisual(n, "color")
			}, a.getModel("lineStyle.normal").getLineStyle()));
			var m = this.childOfName("label");
			m.setStyle({
				text: s.get("show") ? r.getFormattedLabel(n, "normal") || f : "",
				textFont: l.getFont(),
				fill: l.getTextColor() || t.getItemVisual(n, "color")
			}), m.hoverStyle = {
				text: u.get("show") ? r.getFormattedLabel(n, "emphasis") || f : "",
				textFont: l.getFont(),
				fill: c.getTextColor()
			}, m.__textAlign = l.get("align"), m.__textBaseline = l.get("baseline"), m.__position = s.get("position"), h.setHoverStyle(this, a.getModel("lineStyle.emphasis").getLineStyle())
		}, f.updateLayout = function(t, e, i, r) {
			var o = t.getItemLayout(r),
				a = this.childOfName("line");
			n(a.shape, o), a.dirty(!0), e && e.getItemGraphicEl(r).attr("position", o[0]), i && i.getItemGraphicEl(r).attr("position", o[1])
		}, d.inherits(s, h.Group), s
	}), e("echarts/chart/helper/LineDraw", ["require", "../../util/graphic", "./Line"], function(t) {
		function e(t) {
			this._ctor = t || n, this.group = new i.Group
		}
		var i = t("../../util/graphic"),
			n = t("./Line"),
			r = e.prototype;
		return r.updateData = function(t, e, i) {
			var n = this._lineData,
				r = this.group,
				o = this._ctor;
			t.diff(n).add(function(n) {
				var a = new o(t, e, i, n);
				t.setItemGraphicEl(n, a), r.add(a)
			}).update(function(o, a) {
				var s = n.getItemGraphicEl(a);
				s.updateData(t, e, i, o), t.setItemGraphicEl(o, s), r.add(s)
			}).remove(function(t) {
				r.remove(n.getItemGraphicEl(t))
			}).execute(), this._lineData = t, this._fromData = e, this._toData = i
		}, r.updateLayout = function() {
			var t = this._lineData;
			t.eachItemGraphicEl(function(e, i) {
				e.updateLayout(t, this._fromData, this._toData, i)
			}, this)
		}, r.remove = function() {
			this.group.removeAll()
		}, e
	}), e("echarts/chart/graph/GraphView", ["require", "../helper/SymbolDraw", "../helper/LineDraw", "../../component/helper/RoamController", "../../util/model", "../../util/graphic", "../../echarts"], function(t) {
		var e = t("../helper/SymbolDraw"),
			i = t("../helper/LineDraw"),
			n = t("../../component/helper/RoamController"),
			r = t("../../util/model"),
			o = t("../../util/graphic");
		t("../../echarts").extendChartView({
			type: "graph",
			init: function(t, r) {
				var o = new e,
					a = new i,
					s = this.group,
					l = new n(r.getZr(), s);
				s.add(o.group), s.add(a.group), this._symbolDraw = o, this._lineDraw = a, this._controller = l, this._firstRender = !0
			},
			render: function(t, e, i) {
				var n = t.coordinateSystem;
				if ("geo" === n.type || "view" === n.type) {
					var a = t.getData();
					this._model = t;
					var s = this._symbolDraw,
						l = this._lineDraw;
					s.updateData(a);
					var u = a.graph.edgeData,
						c = t.option,
						h = r.createDataFormatModel(t, u, c.edges || c.links);
					h.formatTooltip = function(t) {
						var e = this.getDataParams(t),
							i = e.data,
							n = i.source + " > " + i.target;
						return e.value && (n += ":" + e.value), n
					}, l.updateData(u, null, null), u.eachItemGraphicEl(function(t) {
						t.traverse(function(t) {
							t.hostModel = h
						})
					}), a.graph.eachEdge(function(t) {
						t.__lineWidth = t.getModel("lineStyle.normal").get("width")
					});
					var d = this.group,
						p = {
							position: n.position,
							scale: n.scale
						};
					this._firstRender ? d.attr(p) : o.updateProps(d, p, t), this._nodeScaleRatio = t.get("nodeScaleRatio"), this._updateNodeAndLinkScale(), this._updateController(t, n, i), clearTimeout(this._layoutTimeout);
					var f = t.forceLayout,
						m = t.get("force.layoutAnimation");
					f && this._startForceLayoutIteration(f, m), a.eachItemGraphicEl(function(t, e) {
						var i = a.getItemModel(e).get("draggable");
						i && f ? t.on("drag", function() {
							f.warmUp(), !this._layouting && this._startForceLayoutIteration(f, m), f.setFixed(e), a.setItemLayout(e, t.position)
						}, this).on("dragend", function() {
							f.setUnfixed(e)
						}, this) : t.off("drag"), t.setDraggable(i)
					}, this), this._firstRender = !1
				}
			},
			_startForceLayoutIteration: function(t, e) {
				var i = this;
				!
				function n() {
					t.step(function(t) {
						i.updateLayout(), (i._layouting = !t) && (e ? i._layoutTimeout = setTimeout(n, 16) : n())
					})
				}()
			},
			_updateController: function(t, e, i) {
				var n = this._controller;
				n.rect = e.getViewRect(), n.enable(t.get("roam")), n.off("pan").off("zoom").on("pan", function(e, n) {
					i.dispatchAction({
						seriesId: t.id,
						type: "graphRoam",
						dx: e,
						dy: n
					})
				}).on("zoom", function(e, n, r) {
					i.dispatchAction({
						seriesId: t.id,
						type: "graphRoam",
						zoom: e,
						originX: n,
						originY: r
					})
				}).on("zoom", this._updateNodeAndLinkScale, this)
			},
			_updateNodeAndLinkScale: function() {
				var t = this._model,
					e = t.getData(),
					i = this.group,
					n = this._nodeScaleRatio,
					r = i.scale[0],
					o = (r - 1) * n + 1,
					a = [o / r, o / r];
				e.eachItemGraphicEl(function(t, e) {
					t.attr("scale", a)
				})
			},
			updateLayout: function(t, e) {
				this._symbolDraw.updateLayout(), this._lineDraw.updateLayout()
			},
			remove: function(t, e) {
				this._symbolDraw && this._symbolDraw.remove(), this._lineDraw && this._lineDraw.remove()
			}
		})
	}), e("echarts/chart/graph/roamAction", ["require", "../../echarts", "../../action/roamHelper"], function(t) {
		var e = t("../../echarts"),
			i = t("../../action/roamHelper"),
			n = {
				type: "graphRoam",
				event: "graphRoam",
				update: "none"
			};
		e.registerAction(n, function(t, e) {
			e.eachComponent({
				mainType: "series",
				query: t
			}, function(e) {
				var n = e.coordinateSystem,
					r = e.getModel("roamDetail"),
					o = i.calcPanAndZoom(r, t);
				e.setRoamPan && e.setRoamPan(o.x, o.y), e.setRoamZoom && e.setRoamZoom(o.zoom), n && n.setPan(o.x, o.y), n && n.setZoom(o.zoom)
			})
		})
	}), e("echarts/chart/graph/categoryFilter", ["require"], function(t) {
		return function(t) {
			var e = t.findComponents({
				mainType: "legend"
			});
			e && e.length && t.eachSeriesByType("graph", function(t) {
				var i = t.getCategoriesData(),
					n = t.getGraph(),
					r = n.data,
					o = i.mapArray(i.getName);
				r.filterSelf(function(t) {
					var i = r.getItemModel(t),
						n = i.getShallow("category");
					if (null != n) {
						"number" == typeof n && (n = o[n]);
						for (var a = 0; a < e.length; a++) if (!e[a].isSelected(n)) return !1
					}
					return !0
				})
			}, this)
		}
	}), e("echarts/chart/graph/categoryVisual", ["require"], function(t) {
		return function(t) {
			t.eachSeriesByType("graph", function(t) {
				var e = t.get("color"),
					i = t.getCategoriesData(),
					n = t.getData(),
					r = {};
				i.each(function(t) {
					r[i.getName(t)] = t;
					var n = i.getItemModel(t),
						o = i.getRawIndex(t),
						a = n.get("itemStyle.normal.color") || e[o % e.length];
					i.setItemVisual(t, "color", a)
				}), i.count() && n.each(function(t) {
					var e = n.getItemModel(t),
						o = e.getShallow("category");
					null != o && ("string" == typeof o && (o = r[o]), n.setItemVisual(t, "color", i.getItemVisual(o, "color")))
				})
			})
		}
	}), e("echarts/chart/graph/simpleLayoutHelper", ["require"], function(t) {
		return function(t) {
			var e = t.coordinateSystem;
			if (!e || "view" === e.type) {
				var i = t.getGraph();
				i.eachNode(function(t) {
					var e = t.getModel();
					t.setLayout([+e.get("x"), +e.get("y")])
				}), i.eachEdge(function(t) {
					var e, i = t.getModel().get("lineStyle.normal.curveness") || 0,
						n = t.node1.getLayout(),
						r = t.node2.getLayout();
					i > 0 && (e = [(n[0] + r[0]) / 2 - (n[1] - r[1]) * i, (n[1] + r[1]) / 2 - (r[0] - n[0]) * i]), t.setLayout([n, r, e])
				})
			}
		}
	}), e("echarts/chart/graph/simpleLayout", ["require", "./simpleLayoutHelper"], function(t) {
		var e = t("./simpleLayoutHelper");
		return function(t, i) {
			t.eachSeriesByType("graph", function(t) {
				var i = t.get("layout");
				i && "none" !== i || e(t)
			})
		}
	}), e("echarts/chart/graph/circularLayoutHelper", ["require"], function(t) {
		return function(t) {
			var e = t.coordinateSystem;
			if (!e || "view" === e.type) {
				var i = e.getBoundingRect(),
					n = t.getData(),
					r = n.graph,
					o = 0,
					a = n.getSum("value"),
					s = 2 * Math.PI / (a || n.count()),
					l = i.width / 2 + i.x,
					u = i.height / 2 + i.y,
					c = Math.min(i.width, i.height) / 2;
				r.eachNode(function(t) {
					var e = t.getValue("value");
					o += s * (a ? e : 2) / 2, t.setLayout([c * Math.cos(o) + l, c * Math.sin(o) + u]), o += s * (a ? e : 2) / 2
				}), r.eachEdge(function(t) {
					var e, i = t.getModel().get("lineStyle.normal.curveness") || 0,
						n = t.node1.getLayout(),
						r = t.node2.getLayout();
					i > 0 && (e = [l, u]), t.setLayout([n, r, e])
				})
			}
		}
	}), e("echarts/chart/graph/circularLayout", ["require", "./circularLayoutHelper"], function(t) {
		var e = t("./circularLayoutHelper");
		return function(t, i) {
			t.eachSeriesByType("graph", function(t) {
				"circular" === t.get("layout") && e(t)
			})
		}
	}), e("echarts/chart/graph/forceHelper", ["require", "zrender/core/vector"], function(t) {
		var e = t("zrender/core/vector"),
			i = e.scaleAndAdd;
		return function(t, n, r) {
			for (var o = r.rect, a = o.width, s = o.height, l = [o.x + a / 2, o.y + s / 2], u = null == r.gravity ? .1 : r.gravity, c = 0; c < t.length; c++) {
				var h = t[c];
				h.p || (h.p = e.create(a * (Math.random() - .5) + l[0], s * (Math.random() - .5) + l[1])), h.pp = e.clone(h.p), h.edges = null
			}
			var d = .6;
			return {
				warmUp: function() {
					d = .5
				},
				setFixed: function(e) {
					t[e].fixed = !0
				},
				setUnfixed: function(e) {
					t[e].fixed = !1
				},
				step: function(r) {
					for (var o = [], a = t.length, s = 0; s < n.length; s++) {
						var c = n[s],
							h = c.n1,
							p = c.n2;
						e.sub(o, p.p, h.p);
						var f = e.len(o) - c.d,
							m = p.w / (h.w + p.w);
						e.normalize(o, o), !h.fixed && i(h.p, h.p, o, m * f * d), !p.fixed && i(p.p, p.p, o, -(1 - m) * f * d)
					}
					for (var s = 0; a > s; s++) {
						var g = t[s];
						g.fixed || (e.sub(o, l, g.p), e.scaleAndAdd(g.p, g.p, o, u * d))
					}
					for (var s = 0; a > s; s++) for (var h = t[s], v = s + 1; a > v; v++) {
						var p = t[v];
						e.sub(o, p.p, h.p);
						var f = e.len(o);
						0 === f && (e.set(o, Math.random() - .5, Math.random() - .5), f = 1);
						var y = (h.rep + p.rep) / f / f;
						!h.fixed && i(h.pp, h.pp, o, y), !p.fixed && i(p.pp, p.pp, o, -y)
					}
					for (var _ = [], s = 0; a > s; s++) {
						var g = t[s];
						g.fixed || (e.sub(_, g.p, g.pp), e.scaleAndAdd(g.p, g.p, _, d), e.copy(g.pp, g.p))
					}
					d = .992 * d, r && r(t, n, .01 > d)
				}
			}
		}
	}), e("echarts/chart/graph/forceLayout", ["require", "./forceHelper", "../../util/number", "./simpleLayoutHelper", "./circularLayoutHelper", "zrender/core/vector"], function(t) {
		var e = t("./forceHelper"),
			i = t("../../util/number"),
			n = t("./simpleLayoutHelper"),
			r = t("./circularLayoutHelper"),
			o = t("zrender/core/vector");
		return function(t, a) {
			t.eachSeriesByType("graph", function(t) {
				if ("force" === t.get("layout")) {
					var a = t.preservedPoints || {},
						s = t.getGraph(),
						l = s.data,
						u = s.edgeData,
						c = t.getModel("force"),
						h = c.get("initLayout");
					t.preservedPoints ? l.each(function(t) {
						var e = l.getId(t);
						l.setItemLayout(t, a[e] || [NaN, NaN])
					}) : h && "none" !== h ? "circular" === h && r(t) : n(t);
					var d = l.getDataExtent("value"),
						p = c.get("repulsion"),
						f = c.get("edgeLength"),
						m = l.mapArray("value", function(t, e) {
							var n = l.getItemLayout(e),
								r = i.linearMap(t, d, [0, p]) || p / 2;
							return {
								w: r,
								rep: r,
								p: !n || isNaN(n[0]) || isNaN(n[1]) ? null : n
							}
						}),
						g = u.mapArray("value", function(t, e) {
							var i = s.getEdgeByIndex(e);
							return {
								n1: m[i.node1.dataIndex],
								n2: m[i.node2.dataIndex],
								d: f,
								curveness: i.getModel().get("lineStyle.normal.curveness") || 0
							}
						}),
						v = t.coordinateSystem,
						y = v.getBoundingRect(),
						_ = e(m, g, {
							rect: y,
							gravity: c.get("gravity")
						}),
						x = _.step;
					_.step = function(t) {
						for (var e = 0, i = m.length; i > e; e++) m[e].fixed && o.copy(m[e].p, s.getNodeByIndex(e).getLayout());
						x(function(e, i, n) {
							for (var r = 0, o = e.length; o > r; r++) e[r].fixed || s.getNodeByIndex(r).setLayout(e[r].p), a[l.getId(r)] = e[r].p;
							for (var r = 0, o = i.length; o > r; r++) {
								var u = i[r],
									c = u.n1.p,
									h = u.n2.p,
									d = [c, h];
								u.curveness > 0 && d.push([(c[0] + h[0]) / 2 - (c[1] - h[1]) * u.curveness, (c[1] + h[1]) / 2 - (h[0] - c[0]) * u.curveness]), s.getEdgeByIndex(r).setLayout(d)
							}
							t && t(n)
						})
					}, t.forceLayout = _, t.preservedPoints = a, _.step()
				} else t.forceLayout = null
			})
		}
	}), e("echarts/chart/graph/createView", ["require", "../../coord/View", "../../util/layout", "zrender/core/bbox"], function(t) {
		function e(t, e, i) {
			var r = t.getBoxLayoutParams();
			return r.aspect = i, n.getLayoutRect(r, {
				width: e.getWidth(),
				height: e.getHeight()
			})
		}
		var i = t("../../coord/View"),
			n = t("../../util/layout"),
			r = t("zrender/core/bbox");
		return function(t, n) {
			t.eachSeriesByType("graph", function(t) {
				var o = t.get("coordinateSystem");
				if (!o || "view" === o) {
					var a = new i,
						s = t.getData(),
						l = s.mapArray(function(t) {
							var e = s.getItemModel(t);
							return [+e.get("x"), +e.get("y")]
						}),
						u = [],
						c = [];
					r.fromPoints(l, u, c);
					var h = e(t, n, (c[0] - u[0]) / (c[1] - u[1]) || 1);
					(isNaN(u[0]) || isNaN(u[1])) && (u = [h.x, h.y], c = [h.x + h.width, h.y + h.height]);
					var d = c[0] - u[0],
						p = c[1] - u[1],
						f = h.width,
						m = h.height;
					a = t.coordinateSystem = new i, a.setBoundingRect(u[0], u[1], d, p), a.setViewRect(h.x, h.y, f, m);
					var g = t.getModel("roamDetail");
					a.setPan(g.get("x") || 0, g.get("y") || 0), a.setZoom(g.get("zoom") || 1)
				}
			})
		}
	}), e("echarts/chart/graph", ["require", "../echarts", "zrender/core/util", "./graph/GraphSeries", "./graph/GraphView", "./graph/roamAction", "./graph/categoryFilter", "../visual/symbol", "./graph/categoryVisual", "./graph/simpleLayout", "./graph/circularLayout", "./graph/forceLayout", "./graph/createView"], function(t) {
		var e = t("../echarts"),
			i = t("zrender/core/util");
		t("./graph/GraphSeries"), t("./graph/GraphView"), t("./graph/roamAction"), e.registerProcessor("filter", t("./graph/categoryFilter")), e.registerVisualCoding("chart", i.curry(t("../visual/symbol"), "graph", "circle", null)), e.registerVisualCoding("chart", t("./graph/categoryVisual")), e.registerLayout(t("./graph/simpleLayout")), e.registerLayout(t("./graph/circularLayout")), e.registerLayout(t("./graph/forceLayout")), e.registerCoordinateSystem("graphView", {
			create: t("./graph/createView")
		})
	}), e("echarts/chart/gauge/GaugeSeries", ["require", "../../data/List", "../../model/Series", "zrender/core/util"], function(t) {
		var e = t("../../data/List"),
			i = t("../../model/Series"),
			n = t("zrender/core/util"),
			r = i.extend({
				type: "series.gauge",
				getInitialData: function(t, i) {
					var r = new e(["value"], this),
						o = t.data || [];
					return n.isArray(o) || (o = [o]), r.initData(o), r
				},
				defaultOption: {
					zlevel: 0,
					z: 2,
					center: ["50%", "50%"],
					legendHoverLink: !0,
					radius: "75%",
					startAngle: 225,
					endAngle: -45,
					clockwise: !0,
					min: 0,
					max: 100,
					splitNumber: 10,
					axisLine: {
						show: !0,
						lineStyle: {
							color: [
								[.2, "#91c7ae"],
								[.8, "#63869e"],
								[1, "#c23531"]
							],
							width: 30
						}
					},
					splitLine: {
						show: !0,
						length: 30,
						lineStyle: {
							color: "#eee",
							width: 2,
							type: "solid"
						}
					},
					axisTick: {
						show: !0,
						splitNumber: 5,
						length: 8,
						lineStyle: {
							color: "#eee",
							width: 1,
							type: "solid"
						}
					},
					axisLabel: {
						show: !0,
						textStyle: {
							color: "auto"
						}
					},
					pointer: {
						show: !0,
						length: "80%",
						width: 8
					},
					itemStyle: {
						normal: {
							color: "auto"
						}
					},
					title: {
						show: !0,
						offsetCenter: [0, "-40%"],
						textStyle: {
							color: "#333",
							fontSize: 15
						}
					},
					detail: {
						show: !0,
						backgroundColor: "rgba(0,0,0,0)",
						borderWidth: 0,
						borderColor: "#ccc",
						width: 100,
						height: 40,
						offsetCenter: [0, "40%"],
						textStyle: {
							color: "auto",
							fontSize: 30
						}
					}
				}
			});
		return r
	}), e("echarts/chart/gauge/PointerPath", ["require", "zrender/graphic/Path"], function(t) {
		return t("zrender/graphic/Path").extend({
			type: "echartsGaugePointer",
			shape: {
				angle: 0,
				width: 10,
				r: 10,
				x: 0,
				y: 0
			},
			buildPath: function(t, e) {
				var i = Math.cos,
					n = Math.sin,
					r = e.r,
					o = e.width,
					a = e.angle,
					s = e.x - i(a) * o * (o >= r / 3 ? 1 : 2),
					l = e.y - n(a) * o * (o >= r / 3 ? 1 : 2);
				a = e.angle - Math.PI / 2, t.moveTo(s, l), t.lineTo(e.x + i(a) * o, e.y + n(a) * o), t.lineTo(e.x + i(e.angle) * r, e.y + n(e.angle) * r), t.lineTo(e.x - i(a) * o, e.y - n(a) * o), t.lineTo(s, l)
			}
		})
	}), e("echarts/chart/gauge/GaugeView", ["require", "./PointerPath", "../../util/graphic", "../../util/number", "../../view/Chart"], function(t) {
		function e(t, e) {
			var i = t.get("center"),
				n = e.getWidth(),
				r = e.getHeight(),
				o = Math.min(n, r),
				s = a(i[0], e.getWidth()),
				l = a(i[1], e.getHeight()),
				u = a(t.get("radius"), o / 2);
			return {
				cx: s,
				cy: l,
				r: u
			}
		}
		function i(t, e) {
			return e && ("string" == typeof e ? t = e.replace("{value}", t) : "function" == typeof e && (t = e(t))), t
		}
		var n = t("./PointerPath"),
			r = t("../../util/graphic"),
			o = t("../../util/number"),
			a = o.parsePercent,
			s = 2 * Math.PI,
			l = t("../../view/Chart").extend({
				type: "gauge",
				render: function(t, i, n) {
					this.group.removeAll();
					var r = t.get("axisLine.lineStyle.color"),
						o = e(t, n);
					this._renderMain(t, i, n, r, o)
				},
				_renderMain: function(t, e, i, n, o) {
					for (var a = this.group, l = t.getModel("axisLine"), u = l.getModel("lineStyle"), c = t.get("clockwise"), h = -t.get("startAngle") / 180 * Math.PI, d = -t.get("endAngle") / 180 * Math.PI, p = (d - h) % s, f = h, m = u.get("width"), g = 0; g < n.length; g++) {
						var d = h + p * n[g][0],
							v = new r.Sector({
								shape: {
									startAngle: f,
									endAngle: d,
									cx: o.cx,
									cy: o.cy,
									clockwise: c,
									r0: o.r - m,
									r: o.r
								},
								silent: !0
							});
						v.setStyle({
							fill: n[g][1]
						}), v.setStyle(u.getLineStyle(["color", "borderWidth", "borderColor"])), a.add(v), f = d
					}
					var y = function(t) {
							if (0 >= t) return n[0][1];
							for (var e = 0; e < n.length; e++) if (n[e][0] >= t && (0 === e ? 0 : n[e - 1][0]) < t) return n[e][1];
							return n[e - 1][1]
						};
					if (!c) {
						var _ = h;
						h = d, d = _
					}
					this._renderTicks(t, e, i, y, o, h, d, c), this._renderPointer(t, e, i, y, o, h, d, c), this._renderTitle(t, e, i, y, o), this._renderDetail(t, e, i, y, o)
				},
				_renderTicks: function(t, e, n, a, s, l, u, c) {
					for (var h = this.group, d = s.cx, p = s.cy, f = s.r, m = t.get("min"), g = t.get("max"), v = t.getModel("splitLine"), y = t.getModel("axisTick"), _ = t.getModel("axisLabel"), x = t.get("splitNumber"), b = y.get("splitNumber"), w = v.get("length"), M = y.get("length"), S = l, L = (u - l) / x, C = L / b, T = v.getModel("lineStyle").getLineStyle(), P = y.getModel("lineStyle").getLineStyle(), A = _.getModel("textStyle"), D = 0; x >= D; D++) {
						var z = Math.cos(S),
							I = Math.sin(S);
						if (v.get("show")) {
							var k = new r.Line({
								shape: {
									x1: z * f + d,
									y1: I * f + p,
									x2: z * (f - w) + d,
									y2: I * (f - w) + p
								},
								style: T,
								silent: !0
							});
							"auto" === T.stroke && k.setStyle({
								stroke: a(D / x)
							}), h.add(k)
						}
						if (_.get("show")) {
							var E = i(o.round(D / x * (g - m) + m), _.get("formatter")),
								O = new r.Text({
									style: {
										text: E,
										x: z * (f - w - 5) + d,
										y: I * (f - w - 5) + p,
										fill: A.getTextColor(),
										textFont: A.getFont(),
										textBaseline: -.4 > I ? "top" : I > .4 ? "bottom" : "middle",
										textAlign: -.4 > z ? "left" : z > .4 ? "right" : "center"
									},
									silent: !0
								});
							"auto" === O.style.fill && O.setStyle({
								fill: a(D / x)
							}), h.add(O)
						}
						if (y.get("show") && D !== x) {
							for (var N = 0; b >= N; N++) {
								var z = Math.cos(S),
									I = Math.sin(S),
									R = new r.Line({
										shape: {
											x1: z * f + d,
											y1: I * f + p,
											x2: z * (f - M) + d,
											y2: I * (f - M) + p
										},
										silent: !0,
										style: P
									});
								"auto" === P.stroke && R.setStyle({
									stroke: a((D + N / b) / x)
								}), h.add(R), S += C
							}
							S -= C
						} else S += L
					}
				},
				_renderPointer: function(t, e, i, s, l, u, c, h) {
					var d = o.linearMap,
						p = [+t.get("min"), +t.get("max")],
						f = [u, c];
					h || (f = f.reverse());
					var m = t.getData(),
						g = this._data,
						v = this.group;
					m.diff(g).add(function(e) {
						var i = new n({
							shape: {
								angle: u
							}
						});
						r.updateProps(i, {
							shape: {
								angle: d(m.get("value", e), p, f)
							}
						}, t), v.add(i), m.setItemGraphicEl(e, i)
					}).update(function(e, i) {
						var n = g.getItemGraphicEl(i);
						r.updateProps(n, {
							shape: {
								angle: d(m.get("value", e), p, f)
							}
						}, t), v.add(n), m.setItemGraphicEl(e, n)
					}).remove(function(t) {
						var e = g.getItemGraphicEl(t);
						v.remove(e)
					}).execute(), m.eachItemGraphicEl(function(t, e) {
						var i = m.getItemModel(e),
							n = i.getModel("pointer");
						t.attr({
							shape: {
								x: l.cx,
								y: l.cy,
								width: n.get("width"),
								r: a(n.get("length"), l.r)
							},
							style: i.getModel("itemStyle.normal").getItemStyle()
						}), "auto" === t.style.fill && t.setStyle("fill", s((m.get("value", e) - p[0]) / (p[1] - p[0]))), r.setHoverStyle(t, i.getModel("itemStyle.emphasis").getItemStyle())
					}), this._data = m
				},
				_renderTitle: function(t, e, i, n, o) {
					var s = t.getModel("title");
					if (s.get("show")) {
						var l = s.getModel("textStyle"),
							u = s.get("offsetCenter"),
							c = o.cx + a(u[0], o.r),
							h = o.cy + a(u[1], o.r),
							d = new r.Text({
								style: {
									x: c,
									y: h,
									text: t.getData().getName(0),
									fill: l.getTextColor(),
									textFont: l.getFont(),
									textAlign: "center",
									textBaseline: "middle"
								}
							});
						this.group.add(d)
					}
				},
				_renderDetail: function(t, e, n, o, s) {
					var l = t.getModel("detail"),
						u = t.get("min"),
						c = t.get("max");
					if (l.get("show")) {
						var h = l.getModel("textStyle"),
							d = l.get("offsetCenter"),
							p = s.cx + a(d[0], s.r),
							f = s.cy + a(d[1], s.r),
							m = a(l.get("width"), s.r),
							g = a(l.get("height"), s.r),
							v = t.getData().get("value", 0),
							y = new r.Rect({
								shape: {
									x: p - m / 2,
									y: f - g / 2,
									width: m,
									height: g
								},
								style: {
									text: i(v, l.get("formatter")),
									fill: l.get("backgroundColor"),
									textFill: h.getTextColor(),
									textFont: h.getFont()
								}
							});
						"auto" === y.style.textFill && y.setStyle("textFill", o((v - u) / (c - u))), y.setStyle(l.getItemStyle(["color"])), this.group.add(y)
					}
				}
			});
		return l
	}), e("echarts/chart/gauge", ["require", "./gauge/GaugeSeries", "./gauge/GaugeView"], function(t) {
		t("./gauge/GaugeSeries"), t("./gauge/GaugeView")
	}), e("echarts/chart/funnel/FunnelSeries", ["require", "../../data/List", "../../util/model", "../../data/helper/completeDimensions", "../../echarts"], function(t) {
		var e = t("../../data/List"),
			i = t("../../util/model"),
			n = t("../../data/helper/completeDimensions");
		t("../../echarts").extendSeriesModel({
			type: "series.funnel",
			init: function(t) {
				this.$superApply("init", arguments), this.legendDataProvider = function() {
					return this._dataBeforeProcessed
				}, this._defaultLabelLine(t)
			},
			getInitialData: function(t, i) {
				var r = n(["value"], t.data),
					o = new e(r, this);
				return o.initData(t.data), o
			},
			_defaultLabelLine: function(t) {
				i.defaultEmphasis(t.labelLine, ["show"]);
				var e = t.labelLine.normal,
					n = t.labelLine.emphasis;
				e.show = e.show && t.label.normal.show, n.show = n.show && t.label.emphasis.show
			},
			defaultOption: {
				zlevel: 0,
				z: 2,
				legendHoverLink: !0,
				left: 80,
				top: 60,
				right: 80,
				bottom: 60,
				minSize: "0%",
				maxSize: "100%",
				sort: "descending",
				gap: 0,
				funnelAlign: "center",
				label: {
					normal: {
						show: !0,
						position: "outer"
					},
					emphasis: {
						show: !0
					}
				},
				labelLine: {
					normal: {
						show: !0,
						length: 20,
						lineStyle: {
							width: 1,
							type: "solid"
						}
					},
					emphasis: {}
				},
				itemStyle: {
					normal: {
						borderColor: "#fff",
						borderWidth: 1
					},
					emphasis: {}
				}
			}
		})
	}), e("echarts/chart/funnel/FunnelView", ["require", "../../util/graphic", "zrender/core/util", "../../view/Chart"], function(t) {
		function e(t, e) {
			function i() {
				a.ignore = a.hoverIgnore, s.ignore = s.hoverIgnore
			}
			function r() {
				a.ignore = a.normalIgnore, s.ignore = s.normalIgnore
			}
			n.Group.call(this);
			var o = new n.Polygon,
				a = new n.Polyline,
				s = new n.Text;
			this.add(o), this.add(a), this.add(s), this.updateData(t, e, !0), this.on("emphasis", i).on("normal", r).on("mouseover", i).on("mouseout", r)
		}
		function i(t, e, i, n) {
			var r = n.getModel("textStyle"),
				o = n.get("position"),
				a = "inside" === o || "inner" === o || "center" === o;
			return {
				fill: r.getTextColor() || (a ? "#fff" : t.getItemVisual(e, "color")),
				textFont: r.getFont(),
				text: t.hostModel.getFormattedLabel(e, i) || t.getName(e)
			}
		}
		var n = t("../../util/graphic"),
			r = t("zrender/core/util"),
			o = e.prototype,
			a = ["itemStyle", "normal", "opacity"];
		o.updateData = function(t, e, i) {
			var o = this.childAt(0),
				s = t.hostModel,
				l = t.getItemModel(e),
				u = t.getItemLayout(e),
				c = t.getItemModel(e).get(a);
			c = null == c ? 1 : c, i ? (o.setShape({
				points: u.points
			}), o.setStyle({
				opacity: 0
			}), n.updateProps(o, {
				style: {
					opacity: c
				}
			}, s)) : n.initProps(o, {
				shape: {
					points: u.points
				}
			}, s);
			var h = l.getModel("itemStyle"),
				d = t.getItemVisual(e, "color");
			o.setStyle(r.defaults({
				fill: d
			}, h.getModel("normal").getItemStyle())), o.hoverStyle = h.getModel("emphasis").getItemStyle(), this._updateLabel(t, e), n.setHoverStyle(this)
		}, o._updateLabel = function(t, e) {
			var r = this.childAt(1),
				o = this.childAt(2),
				a = t.hostModel,
				s = t.getItemModel(e),
				l = t.getItemLayout(e),
				u = l.label,
				c = t.getItemVisual(e, "color");
			n.updateProps(r, {
				shape: {
					points: u.linePoints || u.linePoints
				}
			}, a), n.updateProps(o, {
				style: {
					x: u.x,
					y: u.y
				}
			}, a), o.attr({
				style: {
					textAlign: u.textAlign,
					textBaseline: u.textBaseline,
					textFont: u.font
				},
				rotation: u.rotation,
				origin: [u.x, u.y],
				z2: 10
			});
			var h = s.getModel("label.normal"),
				d = s.getModel("label.emphasis"),
				p = s.getModel("labelLine.normal"),
				f = s.getModel("labelLine.emphasis");
			o.setStyle(i(t, e, "normal", h)), o.ignore = o.normalIgnore = !h.get("show"), o.hoverIgnore = !d.get("show"), r.ignore = r.normalIgnore = !p.get("show"), r.hoverIgnore = !f.get("show"), r.setStyle({
				stroke: c
			}), r.setStyle(p.getModel("lineStyle").getLineStyle()), o.hoverStyle = i(t, e, "emphasis", d), r.hoverStyle = f.getModel("lineStyle").getLineStyle()
		}, r.inherits(e, n.Group);
		var s = t("../../view/Chart").extend({
			type: "funnel",
			render: function(t, i, n) {
				var r = t.getData(),
					o = this._data,
					a = this.group;
				r.diff(o).add(function(t) {
					var i = new e(r, t);
					r.setItemGraphicEl(t, i), a.add(i)
				}).update(function(t, e) {
					var i = o.getItemGraphicEl(e);
					i.updateData(r, t), a.add(i), r.setItemGraphicEl(t, i)
				}).remove(function(t) {
					var e = o.getItemGraphicEl(t);
					a.remove(e)
				}).execute(), this._data = r
			},
			remove: function() {
				this.group.removeAll(), this._data = null
			}
		});
		return s
	}), e("echarts/chart/funnel/funnelLayout", ["require", "../../util/layout", "../../util/number"], function(t) {
		function e(t, e) {
			return r.getLayoutRect(t.getBoxLayoutParams(), {
				width: e.getWidth(),
				height: e.getHeight()
			})
		}
		function i(t, e) {
			for (var i = t.mapArray("value", function(t) {
				return t
			}), n = [], r = "ascending" === e, o = 0, a = t.count(); a > o; o++) n[o] = o;
			return n.sort(function(t, e) {
				return r ? i[t] - i[e] : i[e] - i[t]
			}), n
		}
		function n(t) {
			t.each(function(e) {
				var i, n, r, o, a = t.getItemModel(e),
					s = a.getModel("label.normal"),
					l = s.get("position"),
					u = a.getModel("labelLine.normal"),
					c = t.getItemLayout(e),
					h = c.points,
					d = "inner" === l || "inside" === l || "center" === l;
				if (d) n = (h[0][0] + h[1][0] + h[2][0] + h[3][0]) / 4, r = (h[0][1] + h[1][1] + h[2][1] + h[3][1]) / 4, i = "center", o = [
					[n, r],
					[n, r]
				];
				else {
					var p, f, m, g = u.get("length");
					"left" === l ? (p = (h[3][0] + h[0][0]) / 2, f = (h[3][1] + h[0][1]) / 2, m = p - g, n = m - 5, i = "right") : (p = (h[1][0] + h[2][0]) / 2, f = (h[1][1] + h[2][1]) / 2, m = p + g, n = m + 5, i = "left");
					var v = f;
					o = [
						[p, f],
						[m, v]
					], r = v
				}
				c.label = {
					linePoints: o,
					x: n,
					y: r,
					textBaseline: "middle",
					textAlign: i,
					inside: d
				}
			})
		}
		var r = t("../../util/layout"),
			o = t("../../util/number"),
			a = o.parsePercent;
		return function(t, r) {
			t.eachSeriesByType("funnel", function(t) {
				var s = t.getData(),
					l = t.get("sort"),
					u = e(t, r),
					c = i(s, l),
					h = [a(t.get("minSize"), u.width), a(t.get("maxSize"), u.width)],
					d = s.getDataExtent("value"),
					p = t.get("min"),
					f = t.get("max");
				null == p && (p = Math.min(d[0], 0)), null == f && (f = d[1]);
				var m = t.get("funnelAlign"),
					g = t.get("gap"),
					v = (u.height - g * (s.count() - 1)) / s.count(),
					y = u.y,
					_ = function(t, e) {
						var i, n = s.get("value", t) || 0,
							r = o.linearMap(n, [p, f], h, !0);
						switch (m) {
						case "left":
							i = u.x;
							break;
						case "center":
							i = u.x + (u.width - r) / 2;
							break;
						case "right":
							i = u.x + u.width - r
						}
						return [[i, e], [i + r, e]]
					};
				"ascending" === l && (v = -v, g = -g, y += u.height, c = c.reverse());
				for (var x = 0; x < c.length; x++) {
					var b = c[x],
						w = c[x + 1],
						M = _(b, y),
						S = _(w, y + v);
					y += v + g, s.setItemLayout(b, {
						points: M.concat(S.slice().reverse())
					})
				}
				n(s)
			})
		}
	}), e("echarts/chart/funnel", ["require", "zrender/core/util", "../echarts", "./funnel/FunnelSeries", "./funnel/FunnelView", "../visual/dataColor", "./funnel/funnelLayout", "../processor/dataFilter"], function(t) {
		var e = t("zrender/core/util"),
			i = t("../echarts");
		t("./funnel/FunnelSeries"), t("./funnel/FunnelView"), i.registerVisualCoding("chart", e.curry(t("../visual/dataColor"), "funnel")), i.registerLayout(t("./funnel/funnelLayout")), i.registerProcessor("filter", e.curry(t("../processor/dataFilter"), "funnel"))
	}), e("echarts/coord/parallel/ParallelAxis", ["require", "zrender/core/util", "../Axis"], function(t) {
		var e = t("zrender/core/util"),
			i = t("../Axis"),
			n = function(t, e, n, r, o) {
				i.call(this, t, e, n), this.type = r || "value", this.axisIndex = o
			};
		return n.prototype = {
			constructor: n,
			model: null
		}, e.inherits(n, i), n
	}), e("echarts/coord/parallel/Parallel", ["require", "../../util/layout", "../../coord/axisHelper", "zrender/core/util", "./ParallelAxis", "zrender/core/matrix", "zrender/core/vector"], function(t) {
		function e(t, e, i) {
			this._axesMap = {}, this._axesLayout = {}, this.dimensions = t.dimensions, this._rect, this._init(t, e, i)
		}
		var i = t("../../util/layout"),
			n = t("../../coord/axisHelper"),
			r = t("zrender/core/util"),
			o = t("./ParallelAxis"),
			a = t("zrender/core/matrix"),
			s = t("zrender/core/vector"),
			l = r.each,
			u = Math.PI;
		return e.prototype = {
			type: "parallel",
			constructor: e,
			_init: function(t, e, i) {
				var r = t.dimensions,
					a = t.parallelAxisIndex;
				l(r, function(t, i) {
					var r = a[i],
						s = e.getComponent("parallelAxis", r),
						l = this._axesMap[t] = new o(t, n.createScaleByModel(s), [0, 0], s.get("type"), r),
						u = "category" === l.type;
					l.onBand = u && s.get("boundaryGap"), l.inverse = s.get("inverse"), s.axis = l, l.model = s
				}, this), this._updateAxesFromSeries(t, e)
			},
			_updateAxesFromSeries: function(t, e) {
				e.eachSeries(function(i) {
					if (t.contains(i, e)) {
						var n = i.getData();
						l(this.dimensions, function(t) {
							this._axesMap[t].scale.unionExtent(n.getDataExtent(t))
						}, this)
					}
				}, this)
			},
			resize: function(t, e) {
				this._rect = i.getLayoutRect(t.getBoxLayoutParams(), {
					width: e.getWidth(),
					height: e.getHeight()
				}), this._layoutAxes(t)
			},
			getRect: function() {
				return this._rect
			},
			_layoutAxes: function(t) {
				var e = this._rect,
					i = t.get("layout"),
					r = this._axesMap,
					o = this.dimensions,
					s = [e.width, e.height],
					c = "horizontal" === i ? 0 : 1,
					h = s[c],
					d = s[1 - c],
					p = [0, d];
				l(r, function(t) {
					var e = t.inverse ? 1 : 0;
					t.setExtent(p[e], p[1 - e]), n.niceScaleExtent(t, t.model)
				}), l(o, function(t, n) {
					var r = h * n / (o.length - 1),
						s = {
							horizontal: {
								x: r,
								y: d
							},
							vertical: {
								x: 0,
								y: r
							}
						},
						l = {
							horizontal: u / 2,
							vertical: 0
						},
						c = [s[i].x + e.x, s[i].y + e.y],
						p = l[i],
						f = a.create();
					a.rotate(f, f, p), a.translate(f, f, c), this._axesLayout[t] = {
						position: c,
						rotation: p,
						transform: f,
						tickDirection: 1,
						labelDirection: 1
					}
				}, this)
			},
			getAxis: function(t) {
				return this._axesMap[t]
			},
			dataToPoint: function(t, e) {
				return this.axisCoordToPoint(this._axesMap[e].dataToCoord(t), e)
			},
			eachActiveState: function(t, e, i) {
				for (var n = this.dimensions, r = this._axesMap, o = !1, a = 0, s = n.length; s > a; a++)"normal" !== r[n[a]].model.getActiveState() && (o = !0);
				for (var l = 0, u = t.count(); u > l; l++) {
					var c, h = t.getValues(n, l);
					if (o) {
						c = "active";
						for (var a = 0, s = n.length; s > a; a++) {
							var d = n[a],
								p = r[d].model.getActiveState(h[a], a);
							if ("inactive" === p) {
								c = "inactive";
								break
							}
						}
					} else c = "normal";
					e.call(i, c, l)
				}
			},
			axisCoordToPoint: function(t, e) {
				var i = this._axesLayout[e],
					n = [t, 0];
				return s.applyTransform(n, n, i.transform), n
			},
			getAxisLayout: function(t) {
				return r.clone(this._axesLayout[t])
			}
		}, e
	}), e("echarts/coord/parallel/parallelCreator", ["require", "./Parallel", "../../CoordinateSystem"], function(t) {
		function e(t, e) {
			var n = [];
			return t.eachComponent("parallel", function(r, o) {
				var a = new i(r, t, e);
				a.name = "parallel_" + o, a.resize(r, e), r.coordinateSystem = a, a.model = r, n.push(a)
			}), t.eachSeries(function(t) {
				if ("parallel" === t.get("coordinateSystem")) {
					var e = t.get("parallelIndex");
					t.coordinateSystem = n[e]
				}
			}), n
		}
		var i = t("./Parallel");
		t("../../CoordinateSystem").register("parallel", {
			create: e
		})
	}), e("echarts/coord/parallel/AxisModel", ["require", "../../model/Component", "zrender/core/util", "../../model/mixin/makeStyleMapper", "../axisModelCreator", "../../util/number", "../axisModelCommonMixin"], function(t) {
		function e(t, e) {
			return e.type || (e.data ? "category" : "value")
		}
		var i = t("../../model/Component"),
			n = t("zrender/core/util"),
			r = t("../../model/mixin/makeStyleMapper"),
			o = t("../axisModelCreator"),
			a = t("../../util/number"),
			s = i.extend({
				type: "baseParallelAxis",
				axis: null,
				activeIntervals: [],
				getAreaSelectStyle: function() {
					return r([
						["fill", "color"],
						["lineWidth", "borderWidth"],
						["stroke", "borderColor"],
						["width", "width"],
						["opacity", "opacity"]
					]).call(this.getModel("areaSelectStyle"))
				},
				setActiveIntervals: function(t) {
					var e = this.activeIntervals = n.clone(t);
					if (e) for (var i = e.length - 1; i >= 0; i--) a.asc(e[i])
				},
				getActiveState: function(t) {
					var e = this.activeIntervals;
					if (!e.length) return "normal";
					if (null == t) return "inactive";
					for (var i = 0, n = e.length; n > i; i++) if (e[i][0] <= t && t <= e[i][1]) return "active";
					return "inactive"
				}
			}),
			l = {
				type: "value",
				dim: null,
				parallelIndex: null,
				areaSelectStyle: {
					width: 20,
					borderWidth: 1,
					borderColor: "rgba(160,197,232)",
					color: "rgba(160,197,232)",
					opacity: .3
				},
				z: 10
			};
		return n.merge(s.prototype, t("../axisModelCommonMixin")), o("parallel", s, e, l), s
	}), e("echarts/coord/parallel/ParallelModel", ["require", "zrender/core/util", "../../model/Component", "./AxisModel"], function(t) {
		var e = t("zrender/core/util"),
			i = t("../../model/Component");
		t("./AxisModel"), i.extend({
			type: "parallel",
			dependencies: ["parallelAxis"],
			coordinateSystem: null,
			dimensions: null,
			parallelAxisIndex: null,
			defaultOption: {
				zlevel: 0,
				z: 0,
				left: 80,
				top: 60,
				right: 80,
				bottom: 60,
				layout: "horizontal",
				parallelAxisDefault: null
			},
			init: function() {
				i.prototype.init.apply(this, arguments), this.mergeOption({})
			},
			mergeOption: function(t) {
				var i = this.option;
				t && e.merge(i, t), this._initDimensions()
			},
			contains: function(t, e) {
				var i = t.get("parallelIndex");
				return null != i && e.getComponent("parallel", i) === this
			},
			_initDimensions: function() {
				var t = this.dimensions = [],
					i = this.parallelAxisIndex = [],
					n = e.filter(this.dependentModels.parallelAxis, function(t) {
						return t.get("parallelIndex") === this.componentIndex
					});
				e.each(n, function(e) {
					t.push("dim" + e.get("dim")), i.push(e.componentIndex)
				})
			}
		})
	}), e("echarts/component/axis/parallelAxisAction", ["require", "../../echarts"], function(t) {
		var e = t("../../echarts"),
			i = {
				type: "axisAreaSelect",
				event: "axisAreaSelected",
				update: "updateVisual"
			};
		e.registerAction(i, function(t, e) {
			e.eachComponent({
				mainType: "parallelAxis",
				query: t
			}, function(e) {
				e.axis.model.setActiveIntervals(t.intervals)
			})
		})
		function e(t, e, i) {
			f.call(this), this.type = t, this.zr = e, this.opt = m.clone(i), this.group = new g.Group, this._containerRect = null, this._track = [], this._dragging, this._cover, this._disabled = !0, this._handlers = {
				mousedown: v(r, this),
				mousemove: v(o, this),
				mouseup: v(a, this)
			}, y(M, function(t) {
				this.zr.on(t, this._handlers[t])
			}, this)
		}
		function i(t, e) {
			var i = this.group.transformCoordToLocal(t, e);
			return !this._containerRect || this._containerRect.contain(i[0], i[1])
		}
		function n(t) {
			var e = t.event;
			e.preventDefault && e.preventDefault()
		}
		function r(t) {
			if (!(this._disabled || t.target && t.target.draggable)) {
				n(t);
				var e = t.offsetX,
					r = t.offsetY;
				i.call(this, e, r) && (this._dragging = !0, this._track = [
					[e, r]
				])
			}
		}
		function o(t) {
			this._dragging && !this._disabled && (n(t), s.call(this, t))
		}
		function a(t) {
			this._dragging && !this._disabled && (n(t), s.call(this, t, !0), this._dragging = !1, this._track = [])
		}
		function s(t, e) {
			var n = t.offsetX,
				r = t.offsetY;
			if (i.call(this, n, r)) {
				this._track.push([n, r]);
				var o = l.call(this) ? S[this.type].getRanges.call(this) : [];
				u.call(this, o), this.trigger("selected", m.clone(o)), e && this.trigger("selectEnd", m.clone(o))
			}
		}
		function l() {
			var t = this._track;
			if (!t.length) return !1;
			var e = t[t.length - 1],
				i = t[0],
				n = e[0] - i[0],
				r = e[1] - i[1],
				o = b(n * n + r * r, .5);
			return o > w
		}
		function u(t) {
			var e = S[this.type];
			t && t.length ? (this._cover || (this._cover = e.create.call(this), this.group.add(this._cover)), e.update.call(this, t)) : (this.group.remove(this._cover), this._cover = null)
		}
		function c() {
			var t = this.group,
				e = t.parent;
			e && e.remove(t)
		}
		function h() {
			var t = this.opt;
			return new g.Rect({
				style: {
					stroke: t.stroke,
					fill: t.fill,
					lineWidth: t.lineWidth,
					opacity: t.opacity
				}
			})
		}
		function d() {
			return m.map(this._track, function(t) {
				return this.group.transformCoordToLocal(t[0], t[1])
			}, this)
		}
		function p() {
			var t = d.call(this),
				e = t.length - 1;
			return 0 > e && (e = 0), [t[0], t[e]]
		}
		var f = t("zrender/mixin/Eventful"),
			m = t("zrender/core/util"),
			g = t("../../util/graphic"),
			v = m.bind,
			y = m.each,
			_ = Math.min,
			x = Math.max,
			b = Math.pow,
			w = 2,
			M = ["mousedown", "mousemove", "mouseup"];
		e.prototype = {
			constructor: e,
			enable: function(t, e) {
				this._disabled = !1, c.call(this), this._containerRect = e !== !1 ? e || t.getBoundingRect() : null, t.add(this.group)
			},
			update: function(t) {
				u.call(this, t && m.clone(t))
			},
			disable: function() {
				this._disabled = !0, c.call(this)
			},
			dispose: function() {
				this.disable(), y(M, function(t) {
					this.zr.off(t, this._handlers[t])
				}, this)
			}
		}, m.mixin(e, f);
		var S = {
			line: {
				create: h,
				getRanges: function() {
					var t = p.call(this),
						e = _(t[0][0], t[1][0]),
						i = x(t[0][0], t[1][0]);
					return [[e, i]]
				},
				update: function(t) {
					var e = t[0],
						i = this.opt.width;
					this._cover.setShape({
						x: e[0],
						y: -i / 2,
						width: e[1] - e[0],
						height: i
					})
				}
			},
			rect: {
				create: h,
				getRanges: function() {
					var t = p.call(this),
						e = [_(t[1][0], t[0][0]), _(t[1][1], t[0][1])],
						i = [x(t[1][0], t[0][0]), x(t[1][1], t[0][1])];
					return [[
						[e[0], i[0]],
						[e[1], i[1]]
					]]
				},
				update: function(t) {
					var e = t[0];
					this._cover.setShape({
						x: e[0][0],
						y: e[1][0],
						width: e[0][1] - e[0][0],
						height: e[1][1] - e[1][0]
					})
				}
			}
		};
		return e
	}), e("echarts/component/helper/SelectController", ["require", "zrender/mixin/Eventful", "zrender/core/util", "../../util/graphic"], function(t) {
	}), e("echarts/component/axis/ParallelAxisView", ["require", "zrender/core/util", "./AxisBuilder", "../helper/SelectController", "../../echarts"], function(t) {
		function e(t, e, i) {
			return i && "axisAreaSelect" === i.type && e.findComponents({
				mainType: "parallelAxis",
				query: i
			})[0] === t
		}
		var i = t("zrender/core/util"),
			n = t("./AxisBuilder"),
			r = t("../helper/SelectController"),
			o = ["axisLine", "axisLabel", "axisTick", "axisName"],
			a = t("../../echarts").extendComponentView({
				type: "parallelAxis",
				_selectController: null,
				render: function(t, r, a, s) {
					if (!e(t, r, s) && (this.axisModel = t, this.api = a, this.group.removeAll(), t.get("show"))) {
						var l = r.getComponent("parallel", t.get("parallelIndex")).coordinateSystem,
							u = t.getAreaSelectStyle(),
							c = u.width,
							h = l.getAxisLayout(t.axis.dim),
							d = i.extend({
								strokeContainThreshold: c,
								silent: !(c > 0)
							}, h),
							p = new n(t, d);
						i.each(o, p.add, p);
						var f = p.getGroup();
						this.group.add(f), this._buildSelectController(f, u, t, a)
					}
				},
				_buildSelectController: function(t, e, n, o) {
					var a = n.axis,
						s = this._selectController;
					s || (s = this._selectController = new r("line", o.getZr(), e), s.on("selected", i.bind(this._onSelected, this))), s.enable(t);
					var l = i.map(n.activeIntervals, function(t) {
						return [a.dataToCoord(t[0], !0), a.dataToCoord(t[1], !0)]
					});
					s.update(l)
				},
				_onSelected: function(t) {
					var e = this.axisModel,
						n = e.axis,
						r = i.map(t, function(t) {
							return [n.coordToData(t[0], !0), n.coordToData(t[1], !0)]
						});
					this.api.dispatchAction({
						type: "axisAreaSelect",
						parallelAxisId: e.id,
						intervals: r
					})
				},
				remove: function() {
					this._selectController && this._selectController.disable()
				},
				dispose: function() {
					this._selectController && (this._selectController.dispose(), this._selectController = null)
				}
			});
		return a
	}), e("echarts/component/parallelAxis", ["require", "../coord/parallel/parallelCreator", "./axis/parallelAxisAction", "./axis/ParallelAxisView"], function(t) {
		t("../coord/parallel/parallelCreator"), t("./axis/parallelAxisAction"), t("./axis/ParallelAxisView")
	}), e("echarts/coord/parallel/parallelPreprocessor", ["require", "zrender/core/util", "../../util/model"], function(t) {
		function e(t) {
			if (!t.parallel) {
				var e = !1;
				n.each(t.series, function(t) {
					t && "parallel" === t.type && (e = !0)
				}), e && (t.parallel = [{}])
			}
		}
		function i(t) {
			var e = r.normalizeToArray(t.parallelAxis);
			n.each(e, function(e) {
				if (n.isObject(e)) {
					var i = e.parallelIndex || 0,
						o = r.normalizeToArray(t.parallel)[i];
					o && o.parallelAxisDefault && n.merge(e, o.parallelAxisDefault, !1)
				}
			})
		}
		var n = t("zrender/core/util"),
			r = t("../../util/model");
		return function(t) {
			e(t), i(t)
		}
	}), e("echarts/component/parallel", ["require", "../coord/parallel/parallelCreator", "../coord/parallel/ParallelModel", "./parallelAxis", "../echarts", "../coord/parallel/parallelPreprocessor"], function(t) {
		t("../coord/parallel/parallelCreator"), t("../coord/parallel/ParallelModel"), t("./parallelAxis");
		var e = t("../echarts");
		e.extendComponentView({
			type: "parallel"
		}), e.registerPreprocessor(t("../coord/parallel/parallelPreprocessor"))
	}), e("echarts/chart/parallel/ParallelSeries", ["require", "../../data/List", "zrender/core/util", "../../model/Series"], function(t) {
		function e(t, e, i) {
			var r = t.get("data"),
				o = +e.replace("dim", "");
			r && r.length && n.each(i, function(t) {
				if (t) {
					var e = n.indexOf(r, t[o]);
					t[o] = e >= 0 ? e : NaN
				}
			})
		}
		var i = t("../../data/List"),
			n = t("zrender/core/util"),
			r = t("../../model/Series");
		return r.extend({
			type: "series.parallel",
			dependencies: ["parallel"],
			getInitialData: function(t, r) {
				var o = r.getComponent("parallel", this.get("parallelIndex")),
					a = o.dimensions,
					s = o.parallelAxisIndex,
					l = t.data,
					u = n.map(a, function(t, i) {
						var n = r.getComponent("parallelAxis", s[i]);
						return "category" === n.get("type") ? (e(n, t, l), {
							name: t,
							type: "ordinal"
						}) : t
					}),
					c = new i(u, this);
				return c.initData(l), c
			},
			defaultOption: {
				zlevel: 0,
				z: 2,
				coordinateSystem: "parallel",
				parallelIndex: 0,
				label: {
					normal: {
						show: !1
					},
					emphasis: {
						show: !1
					}
				},
				inactiveOpacity: .05,
				activeOpacity: 1,
				lineStyle: {
					normal: {
						width: 2,
						opacity: .45,
						type: "solid"
					}
				},
				animationEasing: "linear"
			}
		})
	}), e("echarts/chart/parallel/ParallelView", ["require", "../../util/graphic", "zrender/core/util", "../../view/Chart"], function(t) {
		function e(t, e, i) {
			var n = t.model,
				r = t.getRect(),
				a = new o.Rect({
					shape: {
						x: r.x,
						y: r.y,
						width: r.width,
						height: r.height
					}
				}),
				s = "horizontal" === n.get("layout") ? "width" : "height";
			return a.setShape(s, 0), o.initProps(a, {
				shape: {
					width: r.width,
					height: r.height
				}
			}, e, i), a
		}
		function i(t, e, i, n) {
			for (var o = 0, a = e.length - 1; a > o; o++) {
				var s = e[o],
					l = e[o + 1],
					u = t[o],
					c = t[o + 1];
				n(r(u, i.getAxis(s).type) || r(c, i.getAxis(l).type) ? null : [i.dataToPoint(u, s), i.dataToPoint(c, l)], o)
			}
		}
		function n(t) {
			return new o.Polyline({
				shape: {
					points: t
				},
				silent: !0
			})
		}
		function r(t, e) {
			return "category" === e ? null == t : null == t || isNaN(t)
		}
		var o = t("../../util/graphic"),
			a = t("zrender/core/util"),
			s = t("../../view/Chart").extend({
				type: "parallel",
				init: function() {
					this._dataGroup = new o.Group, this.group.add(this._dataGroup), this._data
				},
				render: function(t, r, s, l) {
					function u(t) {
						var e = p.getValues(g, t),
							r = new o.Group;
						d.add(r), i(e, g, m, function(t, e) {
							t && r.add(n(t))
						}), p.setItemGraphicEl(t, r)
					}
					function c(e, r) {
						var a = p.getValues(g, e),
							s = f.getItemGraphicEl(r),
							l = [],
							u = 0;
						i(a, g, m, function(e, i) {
							var r = s.childAt(u++);
							e && !r ? l.push(n(e)) : e && o.updateProps(r, {
								shape: {
									points: e
								}
							}, t)
						});
						for (var c = s.childCount() - 1; c >= u; c--) s.remove(s.childAt(c));
						for (var c = 0, h = l.length; h > c; c++) s.add(l[c]);
						p.setItemGraphicEl(e, s)
					}
					function h(t) {
						var e = f.getItemGraphicEl(t);
						d.remove(e)
					}
					var d = this._dataGroup,
						p = t.getData(),
						f = this._data,
						m = t.coordinateSystem,
						g = m.dimensions;
					p.diff(f).add(u).update(c).remove(h).execute(), p.eachItemGraphicEl(function(t, e) {
						var i = p.getItemModel(e),
							n = i.getModel("lineStyle.normal");
						t.eachChild(function(t) {
							t.setStyle(a.extend(n.getLineStyle(), {
								stroke: p.getItemVisual(e, "color"),
								opacity: p.getItemVisual(e, "opacity")
							}))
						})
					}), this._data || d.setClipPath(e(m, t, function() {
						d.removeClipPath()
					})), this._data = p
				},
				remove: function() {
					this._dataGroup && this._dataGroup.removeAll(), this._data = null
				}
			});
		return s
	}), e("echarts/chart/parallel/parallelVisual", ["require"], function(t) {
		return function(t, e) {
			t.eachSeriesByType("parallel", function(e) {
				var i = e.getModel("itemStyle.normal"),
					n = t.get("color"),
					r = i.get("color") || n[e.seriesIndex % n.length],
					o = e.get("inactiveOpacity"),
					a = e.get("activeOpacity"),
					s = e.getModel("lineStyle.normal").getLineStyle(),
					l = e.coordinateSystem,
					u = e.getData(),
					c = {
						normal: s.opacity,
						active: a,
						inactive: o
					};
				l.eachActiveState(u, function(t, e) {
					u.setItemVisual(e, "opacity", c[t])
				}), u.setVisual("color", r)
			})
		}
	}), e("echarts/chart/parallel", ["require", "../echarts", "../component/parallel", "./parallel/ParallelSeries", "./parallel/ParallelView", "./parallel/parallelVisual"], function(t) {
		var e = t("../echarts");
		t("../component/parallel"), t("./parallel/ParallelSeries"), t("./parallel/ParallelView"), e.registerVisualCoding("chart", t("./parallel/parallelVisual"))
	}), e("echarts/chart/sankey/SankeySeries", ["require", "../../model/Series", "../helper/createGraphFromNodeEdge"], function(t) {
		var e = t("../../model/Series"),
			i = t("../helper/createGraphFromNodeEdge");
		return e.extend({
			type: "series.sankey",
			layoutInfo: null,
			getInitialData: function(t, e) {
				var n = t.edges || t.links,
					r = t.data || t.nodes;
				if (r && n) {
					var o = i(r, n, this, !0);
					return o.data
				}
			},
			getGraph: function() {
				return this.getData().graph
			},
			getEdgeData: function() {
				return this.getGraph().edgeData
			},
			defaultOption: {
				zlevel: 0,
				z: 2,
				coordinateSystem: "view",
				layout: null,
				left: "5%",
				top: "5%",
				right: "20%",
				bottom: "5%",
				nodeWidth: 20,
				nodeGap: 8,
				layoutIterations: 32,
				label: {
					normal: {
						show: !0,
						position: "right",
						textStyle: {
							color: "#000",
							fontSize: 12
						}
					},
					emphasis: {
						show: !0
					}
				},
				itemStyle: {
					normal: {},
					emphasis: {}
				},
				lineStyle: {
					normal: {
						color: "#314656",
						opacity: .2,
						curveness: .5
					},
					emphasis: {
						opacity: .6
					}
				},
				color: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
				animationEasing: "linear",
				animationDuration: 1e3
			}
		})
	}), e("echarts/chart/sankey/SankeyView", ["require", "../../util/graphic", "../../util/model", "zrender/core/util", "../../echarts"], function(t) {
		function e(t, e, n) {
			var r = new i.Rect({
				shape: {
					x: t.x - 10,
					y: t.y - 10,
					width: 0,
					height: t.height + 20
				}
			});
			return i.initProps(r, {
				shape: {
					width: t.width + 20,
					height: t.height + 20
				}
			}, e, n), r
		}
		var i = t("../../util/graphic"),
			n = t("../../util/model"),
			r = t("zrender/core/util"),
			o = i.extendShape({
				shape: {
					x1: 0,
					y1: 0,
					x2: 0,
					y2: 0,
					cpx1: 0,
					cpy1: 0,
					cpx2: 0,
					cpy2: 0,
					extent: 0
				},
				buildPath: function(t, e) {
					var i = e.extent / 2;
					t.moveTo(e.x1, e.y1 - i), t.bezierCurveTo(e.cpx1, e.cpy1 - i, e.cpx2, e.cpy2 - i, e.x2, e.y2 - i), t.lineTo(e.x2, e.y2 + i), t.bezierCurveTo(e.cpx2, e.cpy2 + i, e.cpx1, e.cpy1 + i, e.x1, e.y1 + i), t.closePath()
				}
			});
		return t("../../echarts").extendChartView({
			type: "sankey",
			_model: null,
			render: function(t, a, s) {
				var l = t.getGraph(),
					u = this.group,
					c = t.layoutInfo;
				this._model = t, u.removeAll(), u.position = [c.x, c.y];
				var h = l.edgeData,
					d = t.option,
					p = n.createDataFormatModel(t, h, d.edges || d.links);
				p.formatTooltip = function(t) {
					var e = this.getDataParams(t),
						i = e.data,
						n = i.source + " -- " + i.target;
					return e.value && (n += ":" + e.value), n
				}, l.eachNode(function(e) {
					var n = e.getLayout(),
						o = e.getModel(),
						a = o.getModel("label.normal"),
						s = a.getModel("textStyle"),
						l = o.getModel("label.emphasis"),
						c = l.getModel("textStyle"),
						h = new i.Rect({
							shape: {
								x: n.x,
								y: n.y,
								width: e.getLayout().dx,
								height: e.getLayout().dy
							},
							style: {
								text: a.get("show") ? t.getFormattedLabel(e.dataIndex, "normal") || e.id : "",
								textFont: s.getFont(),
								textFill: s.getTextColor(),
								textPosition: a.get("position")
							}
						});
					h.setStyle(r.defaults({
						fill: e.getVisual("color")
					}, o.getModel("itemStyle.normal").getItemStyle())), i.setHoverStyle(h, r.extend(e.getModel("itemStyle.emphasis"), {
						text: l.get("show") ? t.getFormattedLabel(e.dataIndex, "emphasis") || e.id : "",
						textFont: c.getFont(),
						textFill: c.getTextColor(),
						textPosition: l.get("position")
					})), u.add(h)
				}), l.eachEdge(function(t) {
					var e = new o;
					e.dataIndex = t.dataIndex, e.hostModel = p;
					var n = t.getModel("lineStyle.normal"),
						r = n.get("curveness"),
						a = t.node1.getLayout(),
						s = t.node2.getLayout(),
						l = t.getLayout();
					e.shape.extent = Math.max(1, l.dy);
					var c = a.x + a.dx,
						h = a.y + l.sy + l.dy / 2,
						d = s.x,
						f = s.y + l.ty + l.dy / 2,
						m = c * (1 - r) + d * r,
						g = h,
						v = c * r + d * (1 - r),
						y = f;
					e.setShape({
						x1: c,
						y1: h,
						x2: d,
						y2: f,
						cpx1: m,
						cpy1: g,
						cpx2: v,
						cpy2: y
					}), e.setStyle(n.getItemStyle()), i.setHoverStyle(e, t.getModel("lineStyle.emphasis").getItemStyle()), u.add(e)
				}), this._data || u.setClipPath(e(u.getBoundingRect(), t, function() {
					u.removeClipPath()
				})), this._data = t.getData()
			}
		})
	}), e("echarts/util/array/nest", ["require", "zrender/core/util"], function(t) {
		function e() {
			function t(e, r) {
				if (r >= n.length) return e;
				for (var o = -1, a = e.length, s = n[r++], l = {}, u = {}; ++o < a;) {
					var c = s(e[o]),
						h = u[c];
					h ? h.push(e[o]) : u[c] = [e[o]]
				}
				return i.each(u, function(e, i) {
					l[i] = t(e, r)
				}), l
			}
			function e(t, o) {
				if (o >= n.length) return t;
				var a = [],
					s = r[o++];
				return i.each(t, function(t, i) {
					a.push({
						key: i,
						values: e(t, o)
					})
				}), s ? a.sort(function(t, e) {
					return s(t.key, e.key)
				}) : a
			}
			var n = [],
				r = [];
			return {
				key: function(t) {
					return n.push(t), this
				},
				sortKeys: function(t) {
					return r[n.length - 1] = t, this
				},
				entries: function(i) {
					return e(t(i, 0), 0)
				}
			}
		}
		var i = t("zrender/core/util");
		return e
	}), e("echarts/chart/sankey/sankeyLayout", ["require", "../../util/layout", "../../util/array/nest", "zrender/core/util"], function(t) {
		function e(t, e) {
			return w.getLayoutRect(t.getBoxLayoutParams(), {
				width: e.getWidth(),
				height: e.getHeight()
			})
		}
		function i(t, e, i, n, o, a, l) {
			r(t, i, o), s(t, e, a, n, l), f(t)
		}
		function n(t) {
			S.each(t, function(t) {
				var e = v(t.outEdges, b),
					i = v(t.inEdges, b),
					n = Math.max(e, i);
				t.setLayout({
					value: n
				}, !0)
			})
		}
		function r(t, e, i) {
			for (var n = t, r = null, s = 0, l = 0; n.length;) r = [], S.each(n, function(t) {
				t.setLayout({
					x: s
				}, !0), t.setLayout({
					dx: e
				}, !0), S.each(t.outEdges, function(t) {
					r.push(t.node2)
				})
			}), n = r, ++s;
			o(t, s), l = (i - e) / (s - 1), a(t, l)
		}
		function o(t, e) {
			S.each(t, function(t) {
				t.outEdges.length || t.setLayout({
					x: e - 1
				}, !0)
			})
		}
		function a(t, e) {
			S.each(t, function(t) {
				var i = t.getLayout().x * e;
				t.setLayout({
					x: i
				}, !0)
			})
		}
		function s(t, e, i, n, r) {
			var o = M().key(function(t) {
				return t.getLayout().x
			}).sortKeys(x).entries(t).map(function(t) {
				return t.values
			});
			l(t, o, e, i, n), u(o, n, i);
			for (var a = 1; r > 0; r--) a *= .99, c(o, a), u(o, n, i), d(o, a), u(o, n, i)
		}
		function l(t, e, i, n, r) {
			var o = [];
			S.each(e, function(t) {
				var e = t.length,
					i = 0;
				S.each(t, function(t) {
					i += t.getLayout().value
				});
				var a = (n - (e - 1) * r) / i;
				o.push(a)
			}), o.sort(function(t, e) {
				return t - e
			});
			var a = o[0];
			S.each(e, function(t) {
				S.each(t, function(t, e) {
					t.setLayout({
						y: e
					}, !0);
					var i = t.getLayout().value * a;
					t.setLayout({
						dy: i
					}, !0)
				})
			}), S.each(i, function(t) {
				var e = +t.getValue() * a;
				t.setLayout({
					dy: e
				}, !0)
			})
		}
		function u(t, e, i) {
			S.each(t, function(t) {
				var n, r, o, a = 0,
					s = t.length;
				for (t.sort(_), o = 0; s > o; o++) {
					if (n = t[o], r = a - n.getLayout().y, r > 0) {
						var l = n.getLayout().y + r;
						n.setLayout({
							y: l
						}, !0)
					}
					a = n.getLayout().y + n.getLayout().dy + e
				}
				if (r = a - e - i, r > 0) {
					var l = n.getLayout().y - r;
					for (n.setLayout({
						y: l
					}, !0), a = n.getLayout().y, o = s - 2; o >= 0; --o) n = t[o], r = n.getLayout().y + n.getLayout().dy + e - a, r > 0 && (l = n.getLayout().y - r, n.setLayout({
						y: l
					}, !0)), a = n.getLayout().y
				}
			})
		}
		function c(t, e) {
			S.each(t.slice().reverse(), function(t) {
				S.each(t, function(t) {
					if (t.outEdges.length) {
						var i = v(t.outEdges, h) / v(t.outEdges, b),
							n = t.getLayout().y + (i - y(t)) * e;
						t.setLayout({
							y: n
						}, !0)
					}
				})
			})
		}
		function h(t) {
			return y(t.node2) * t.getValue()
		}
		function d(t, e) {
			S.each(t, function(t) {
				S.each(t, function(t) {
					if (t.inEdges.length) {
						var i = v(t.inEdges, p) / v(t.inEdges, b),
							n = t.getLayout().y + (i - y(t)) * e;
						t.setLayout({
							y: n
						}, !0)
					}
				})
			})
		}
		function p(t) {
			return y(t.node1) * t.getValue()
		}
		function f(t) {
			S.each(t, function(t) {
				t.outEdges.sort(m), t.inEdges.sort(g)
			}), S.each(t, function(t) {
				var e = 0,
					i = 0;
				S.each(t.outEdges, function(t) {
					t.setLayout({
						sy: e
					}, !0), e += t.getLayout().dy
				}), S.each(t.inEdges, function(t) {
					t.setLayout({
						ty: i
					}, !0), i += t.getLayout().dy
				})
			})
		}
		function m(t, e) {
			return t.node2.getLayout().y - e.node2.getLayout().y
		}
		function g(t, e) {
			return t.node1.getLayout().y - e.node1.getLayout().y
		}
		function v(t, e) {
			var i, n = 0,
				r = t.length,
				o = -1;
			if (1 === arguments.length) for (; ++o < r;) i = +t[o], isNaN(i) || (n += i);
			else for (; ++o < r;) i = +e.call(t, t[o], o), isNaN(i) || (n += i);
			return n
		}
		function y(t) {
			return t.getLayout().y + t.getLayout().dy / 2
		}
		function _(t, e) {
			return t.getLayout().y - e.getLayout().y
		}
		function x(t, e) {
			return e > t ? -1 : t > e ? 1 : t == e ? 0 : NaN
		}
		function b(t) {
			return t.getValue()
		}
		var w = t("../../util/layout"),
			M = t("../../util/array/nest"),
			S = t("zrender/core/util");
		return function(t, r) {
			t.eachSeriesByType("sankey", function(t) {
				var o = t.get("nodeWidth"),
					a = t.get("nodeGap"),
					s = e(t, r);
				t.layoutInfo = s;
				var l = s.width,
					u = s.height,
					c = t.getGraph(),
					h = c.nodes,
					d = c.edges;
				n(h);
				var p = h.filter(function(t) {
					return 0 === t.getLayout().value
				}),
					f = 0 !== p.length ? 0 : t.get("layoutIterations");
				i(h, d, o, a, l, u, f)
			})
		}
	}), e("echarts/chart/sankey/sankeyVisual", ["require", "../../visual/VisualMapping"], function(t) {
		var e = t("../../visual/VisualMapping");
		return function(t, i) {
			t.eachSeriesByType("sankey", function(t) {
				var i = t.getGraph(),
					n = i.nodes;
				n.sort(function(t, e) {
					return t.getLayout().value - e.getLayout().value
				});
				var r = n[0].getLayout().value,
					o = n[n.length - 1].getLayout().value;
				n.forEach(function(i) {
					var n = new e({
						type: "color",
						mappingMethod: "linear",
						dataExtent: [r, o],
						visual: t.get("color")
					}),
						a = n.mapValueToVisual(i.getLayout().value);
					i.setVisual("color", a)
				})
			})
		}
	}), e("echarts/chart/sankey", ["require", "../echarts", "./sankey/SankeySeries", "./sankey/SankeyView", "./sankey/sankeyLayout", "./sankey/sankeyVisual"], function(t) {
		var e = t("../echarts");
		t("./sankey/SankeySeries"), t("./sankey/SankeyView"), e.registerLayout(t("./sankey/sankeyLayout")), e.registerVisualCoding("chart", t("./sankey/sankeyVisual"))
	}), e("echarts/chart/helper/WhiskerBoxDraw", ["require", "zrender/core/util", "../../util/graphic", "zrender/graphic/Path"], function(t) {
		function e(t, e, i, n) {
			a.Group.call(this), this.bodyIndex, this.whiskerIndex, this.styleUpdater = i, this._createContent(t, e, n), this.updateData(t, e, n), this._seriesModel
		}
		function i(t, e, i) {
			return o.map(t, function(t) {
				return t = t.slice(), t[e] = i.initBaseline, t
			})
		}
		function n(t) {
			var e = {};
			return o.each(t, function(t, i) {
				e["ends" + i] = t
			}), e
		}
		function r(t) {
			this.group = new a.Group, this.styleUpdater = t
		}
		var o = t("zrender/core/util"),
			a = t("../../util/graphic"),
			s = t("zrender/graphic/Path"),
			l = s.extend({
				type: "whiskerInBox",
				shape: {},
				buildPath: function(t, e) {
					for (var i in e) if (0 === i.indexOf("ends")) {
						var n = e[i];
						t.moveTo(n[0][0], n[0][1]), t.lineTo(n[1][0], n[1][1])
					}
				}
			}),
			u = e.prototype;
		u._createContent = function(t, e, r) {
			var s = t.getItemLayout(e),
				u = "horizontal" === s.chartLayout ? 1 : 0,
				c = 0;
			this.add(new a.Polygon({
				shape: {
					points: r ? i(s.bodyEnds, u, s) : s.bodyEnds
				},
				style: {
					strokeNoScale: !0
				},
				z2: 100
			})), this.bodyIndex = c++;
			var h = o.map(s.whiskerEnds, function(t) {
				return r ? i(t, u, s) : t
			});
			this.add(new l({
				shape: n(h),
				style: {
					strokeNoScale: !0
				},
				z2: 100
			})), this.whiskerIndex = c++
		}, u.updateData = function(t, e, i) {
			var r = this._seriesModel = t.hostModel,
				o = t.getItemLayout(e),
				s = a[i ? "initProps" : "updateProps"];
			s(this.childAt(this.bodyIndex), {
				shape: {
					points: o.bodyEnds
				}
			}, r), s(this.childAt(this.whiskerIndex), {
				shape: n(o.whiskerEnds)
			}, r), this.styleUpdater.call(null, this, t, e)
		}, o.inherits(e, a.Group);
		var c = r.prototype;
		return c.updateData = function(t) {
			var i = this.group,
				n = this._data,
				r = this.styleUpdater;
			t.diff(n).add(function(n) {
				if (t.hasValue(n)) {
					var o = new e(t, n, r, !0);
					t.setItemGraphicEl(n, o), i.add(o)
				}
			}).update(function(o, a) {
				var s = n.getItemGraphicEl(a);
				return t.hasValue(o) ? (s ? s.updateData(t, o) : s = new e(t, o, r), i.add(s), void t.setItemGraphicEl(o, s)) : void i.remove(s)
			}).remove(function(t) {
				var e = n.getItemGraphicEl(t);
				e && i.remove(e)
			}).execute(), this._data = t
		}, c.remove = function() {
			var t = this.group,
				e = this._data;
			this._data = null, e && e.eachItemGraphicEl(function(e) {
				e && t.remove(e)
			})
		}, r
	}), e("echarts/chart/helper/whiskerBoxCommon", ["require", "../../data/List", "../../data/helper/completeDimensions", "../helper/WhiskerBoxDraw"], function(t) {
		function e(t) {
			return null == t.value ? t : t.value
		}
		var i = t("../../data/List"),
			n = t("../../data/helper/completeDimensions"),
			r = t("../helper/WhiskerBoxDraw"),
			o = {
				_baseAxisDim: null,
				getInitialData: function(t, r) {
					var o, a, s = r.getComponent("xAxis", this.get("xAxisIndex")),
						l = r.getComponent("yAxis", this.get("yAxisIndex")),
						u = s.get("type"),
						c = l.get("type");
					"category" === u ? (t.layout = "horizontal", o = s.getCategories(), a = !0) : "category" === c ? (t.layout = "vertical", o = l.getCategories(), a = !0) : t.layout = t.layout || "horizontal", this._baseAxisDim = "horizontal" === t.layout ? "x" : "y";
					var h = t.data,
						d = this.dimensions = ["base"].concat(this.valueDimensions);
					n(d, h);
					var p = new i(d, this);
					return p.initData(h, o ? o.slice() : null, function(t, i, n, r) {
						var o = e(t);
						return a ? "base" === i ? n : o[r - 1] : o[r]
					}), p
				},
				getDimensionsOnAxis: function(t) {
					var e = this.valueDimensions.slice(),
						i = ["base"],
						n = {
							horizontal: {
								x: i,
								y: e
							},
							vertical: {
								x: e,
								y: i
							}
						};
					return n[this.get("layout")][t]
				},
				getBaseAxisModel: function() {
					var t = this._baseAxisDim;
					return this.ecModel.getComponent(t + "Axis", this.get(t + "AxisIndex"))
				}
			},
			a = {
				init: function() {
					var t = this._whiskerBoxDraw = new r(this.getStyleUpdater());
					this.group.add(t.group)
				},
				render: function(t, e, i) {
					this._whiskerBoxDraw.updateData(t.getData())
				},
				remove: function(t) {
					this._whiskerBoxDraw.remove()
				}
			};
		return {
			seriesModelMixin: o,
			viewMixin: a
		}
	}), e("echarts/chart/boxplot/BoxplotSeries", ["require", "zrender/core/util", "../../model/Series", "../helper/whiskerBoxCommon"], function(t) {
		var e = t("zrender/core/util"),
			i = t("../../model/Series"),
			n = t("../helper/whiskerBoxCommon"),
			r = i.extend({
				type: "series.boxplot",
				dependencies: ["xAxis", "yAxis", "grid"],
				valueDimensions: ["min", "Q1", "median", "Q3", "max"],
				dimensions: null,
				defaultOption: {
					zlevel: 0,
					z: 2,
					coordinateSystem: "cartesian2d",
					legendHoverLink: !0,
					hoverAnimation: !0,
					xAxisIndex: 0,
					yAxisIndex: 0,
					layout: null,
					boxWidth: [7, 50],
					itemStyle: {
						normal: {
							color: "#fff",
							borderWidth: 1
						},
						emphasis: {
							borderWidth: 2,
							shadowBlur: 5,
							shadowOffsetX: 2,
							shadowOffsetY: 2,
							shadowColor: "rgba(0,0,0,0.4)"
						}
					},
					animationEasing: "elasticOut",
					animationDuration: 800
				}
			});
		return e.mixin(r, n.seriesModelMixin, !0), r
	}), e("echarts/chart/boxplot/BoxplotView", ["require", "zrender/core/util", "../../view/Chart", "../../util/graphic", "../helper/whiskerBoxCommon"], function(t) {
		function e(t, e, i) {
			var n = e.getItemModel(i),
				o = n.getModel(s),
				a = e.getItemVisual(i, "color"),
				u = o.getItemStyle(["borderColor"]),
				c = t.childAt(t.whiskerIndex);
			c.style.set(u), c.style.stroke = a, c.dirty();
			var h = t.childAt(t.bodyIndex);
			h.style.set(u), h.style.stroke = a, h.dirty();
			var d = n.getModel(l).getItemStyle();
			r.setHoverStyle(t, d)
		}
		var i = t("zrender/core/util"),
			n = t("../../view/Chart"),
			r = t("../../util/graphic"),
			o = t("../helper/whiskerBoxCommon"),
			a = n.extend({
				type: "boxplot",
				getStyleUpdater: function() {
					return e
				}
			});
		i.mixin(a, o.viewMixin, !0);
		var s = ["itemStyle", "normal"],
			l = ["itemStyle", "emphasis"];
		return a
	}), e("echarts/chart/boxplot/boxplotVisual", ["require"], function(t) {
		var e = ["itemStyle", "normal", "borderColor"];
		return function(t, i) {
			var n = t.get("color");
			t.eachRawSeriesByType("boxplot", function(i) {
				var r = n[i.seriesIndex % n.length],
					o = i.getData();
				o.setVisual({
					legendSymbol: "roundRect",
					color: i.get(e) || r
				}), t.isSeriesFiltered(i) || o.each(function(t) {
					var i = o.getItemModel(t);
					o.setItemVisual(t, {
						color: i.get(e, !0)
					})
				})
			})
		}
	}), e("echarts/chart/boxplot/boxplotLayout", ["require", "zrender/core/util", "../../util/number"], function(t) {
		function e(t) {
			var e = [],
				i = [];
			return t.eachSeriesByType("boxplot", function(t) {
				var n = t.getBaseAxisModel().axis,
					o = r.indexOf(i, n);
				0 > o && (o = i.length, i[o] = n, e[o] = {
					axis: n,
					seriesModels: []
				}), e[o].seriesModels.push(t)
			}), e
		}
		function i(t) {
			var e, i, n = t.axis,
				o = t.seriesModels,
				l = o.length,
				u = t.boxWidthList = [],
				c = t.boxOffsetList = [],
				h = [];
			if ("category" === n.type) i = n.getBandWidth();
			else {
				var d = 0;
				s(o, function(t) {
					d = Math.max(d, t.getData().count())
				}), e = n.getExtent(), Math.abs(e[1] - e[0]) / d
			}
			s(o, function(t) {
				var e = t.get("boxWidth");
				r.isArray(e) || (e = [e, e]), h.push([a(e[0], i) || 0, a(e[1], i) || 0])
			});
			var p = .8 * i - 2,
				f = p / l * .3,
				m = (p - f * (l - 1)) / l,
				g = m / 2 - p / 2;
			s(o, function(t, e) {
				c.push(g), g += f + m, u.push(Math.min(Math.max(m, h[e][0]), h[e][1]))
			})
		}
		function n(t, e, i) {
			var n = t.coordinateSystem,
				r = t.getData(),
				o = t.dimensions,
				a = t.get("layout"),
				s = i / 2;
			r.each(o, function() {
				function t(t) {
					var i = [];
					i[p] = h, i[f] = t;
					var r;
					return isNaN(h) || isNaN(t) ? r = [NaN, NaN] : (r = n.dataToPoint(i), r[p] += e), r
				}
				function i(t, e) {
					var i = t.slice(),
						n = t.slice();
					i[p] += s, n[p] -= s, e ? _.push(i, n) : _.push(n, i)
				}
				function l(t) {
					var e = [t.slice(), t.slice()];
					e[0][p] -= s, e[1][p] += s, y.push(e)
				}
				var u = arguments,
					c = o.length,
					h = u[0],
					d = u[c],
					p = "horizontal" === a ? 0 : 1,
					f = 1 - p,
					m = t(u[3]),
					g = t(u[1]),
					v = t(u[5]),
					y = [
						[g, t(u[2])],
						[v, t(u[4])]
					];
				l(g), l(v), l(m);
				var _ = [];
				i(y[0][1], 0), i(y[1][1], 1), r.setItemLayout(d, {
					chartLayout: a,
					initBaseline: m[f],
					median: m,
					bodyEnds: _,
					whiskerEnds: y
				})
			})
		}
		var r = t("zrender/core/util"),
			o = t("../../util/number"),
			a = o.parsePercent,
			s = r.each;
		return function(t, r) {
			var o = e(t);
			s(o, function(t) {
				var e = t.seriesModels;
				e.length && (i(t), s(e, function(e, i) {
					n(e, t.boxOffsetList[i], t.boxWidthList[i])
				}))
			})
		}
	}), e("echarts/chart/boxplot", ["require", "../echarts", "./boxplot/BoxplotSeries", "./boxplot/BoxplotView", "./boxplot/boxplotVisual", "./boxplot/boxplotLayout"], function(t) {
		var e = t("../echarts");
		t("./boxplot/BoxplotSeries"), t("./boxplot/BoxplotView"), e.registerVisualCoding("chart", t("./boxplot/boxplotVisual")), e.registerLayout(t("./boxplot/boxplotLayout"))
	}), e("echarts/chart/candlestick/CandlestickSeries", ["require", "zrender/core/util", "../../model/Series", "../helper/whiskerBoxCommon", "../../util/format"], function(t) {
		var e = t("zrender/core/util"),
			i = t("../../model/Series"),
			n = t("../helper/whiskerBoxCommon"),
			r = t("../../util/format"),
			o = r.encodeHTML,
			a = r.addCommas,
			s = i.extend({
				type: "series.candlestick",
				dependencies: ["xAxis", "yAxis", "grid"],
				valueDimensions: ["open", "close", "lowest", "highest"],
				dimensions: null,
				defaultOption: {
					zlevel: 0,
					z: 2,
					coordinateSystem: "cartesian2d",
					legendHoverLink: !0,
					hoverAnimation: !0,
					xAxisIndex: 0,
					yAxisIndex: 0,
					layout: null,
					itemStyle: {
						normal: {
							color: "#c23531",
							color0: "#314656",
							borderWidth: 1,
							borderColor: "#c23531",
							borderColor0: "#314656"
						},
						emphasis: {
							borderWidth: 2
						}
					},
					animationUpdate: !1,
					animationEasing: "linear",
					animationDuration: 300
				},
				getShadowDim: function() {
					return "open"
				},
				formatTooltip: function(t, i) {
					var n = e.map(this.valueDimensions, function(e) {
						return e + ": " + a(this._data.get(e, t))
					}, this);
					return o(this.name) + "<br />" + n.join("<br />")
				}
			});
		return e.mixin(s, n.seriesModelMixin, !0), s
	}), e("echarts/chart/candlestick/CandlestickView", ["require", "zrender/core/util", "../../view/Chart", "../../util/graphic", "../helper/whiskerBoxCommon"], function(t) {
		function e(t, e, i) {
			var n = e.getItemModel(i),
				o = n.getModel(s),
				a = e.getItemVisual(i, "color"),
				u = e.getItemVisual(i, "borderColor"),
				c = o.getItemStyle(["color", "color0", "borderColor", "borderColor0"]),
				h = t.childAt(t.whiskerIndex);
			h.style.set(c), h.style.stroke = u, h.dirty();
			var d = t.childAt(t.bodyIndex);
			d.style.set(c), d.style.fill = a, d.style.stroke = u, d.dirty();
			var p = n.getModel(l).getItemStyle();
			r.setHoverStyle(t, p)
		}
		var i = t("zrender/core/util"),
			n = t("../../view/Chart"),
			r = t("../../util/graphic"),
			o = t("../helper/whiskerBoxCommon"),
			a = n.extend({
				type: "candlestick",
				getStyleUpdater: function() {
					return e
				}
			});
		i.mixin(a, o.viewMixin, !0);
		var s = ["itemStyle", "normal"],
			l = ["itemStyle", "emphasis"];
		return a
	}), e("echarts/chart/candlestick/preprocessor", ["require", "zrender/core/util"], function(t) {
		var e = t("zrender/core/util");
		return function(t) {
			t && e.isArray(t.series) && e.each(t.series, function(t) {
				e.isObject(t) && "k" === t.type && (t.type = "candlestick")
			})
		}
	}), e("echarts/chart/candlestick/candlestickVisual", ["require"], function(t) {
		var e = ["itemStyle", "normal", "borderColor"],
			i = ["itemStyle", "normal", "borderColor0"],
			n = ["itemStyle", "normal", "color"],
			r = ["itemStyle", "normal", "color0"];
		return function(t, o) {
			t.eachRawSeriesByType("candlestick", function(o) {
				var a = o.getData();
				a.setVisual({
					legendSymbol: "roundRect"
				}), t.isSeriesFiltered(o) || a.each(function(t) {
					var o = a.getItemModel(t),
						s = a.getItemLayout(t).sign;
					a.setItemVisual(t, {
						color: o.get(s > 0 ? n : r),
						borderColor: o.get(s > 0 ? e : i)
					})
				})
			})
		}
	}), e("echarts/chart/candlestick/candlestickLayout", ["require"], function(t) {
		function e(t, e) {
			var o, a = t.getBaseAxisModel().axis,
				s = "category" === a.type ? a.getBandWidth() : (o = a.getExtent(), Math.abs(o[1] - o[0]) / e.count());
			return s / 2 - 2 > n ? s / 2 - 2 : s - n > r ? n : Math.max(s - r, i)
		}
		var i = 2,
			n = 5,
			r = 4;
		return function(t, i) {
			t.eachSeriesByType("candlestick", function(t) {
				var i = t.coordinateSystem,
					n = t.getData(),
					r = t.dimensions,
					o = t.get("layout"),
					a = e(t, n);
				n.each(r, function() {
					function t(t) {
						var e = [];
						return e[h] = u, e[d] = t, isNaN(u) || isNaN(t) ? [NaN, NaN] : i.dataToPoint(e)
					}
					function e(t, e) {
						var i = t.slice(),
							n = t.slice();
						i[h] += a / 2, n[h] -= a / 2, e ? S.push(i, n) : S.push(n, i)
					}
					var s = arguments,
						l = r.length,
						u = s[0],
						c = s[l],
						h = "horizontal" === o ? 0 : 1,
						d = 1 - h,
						p = s[1],
						f = s[2],
						m = s[3],
						g = s[4],
						v = Math.min(p, f),
						y = Math.max(p, f),
						_ = t(v),
						x = t(y),
						b = t(m),
						w = t(g),
						M = [
							[w, x],
							[b, _]
						],
						S = [];
					e(x, 0), e(_, 1), n.setItemLayout(c, {
						chartLayout: o,
						sign: p > f ? -1 : f > p ? 1 : 0,
						initBaseline: p > f ? x[d] : _[d],
						bodyEnds: S,
						whiskerEnds: M
					})
				}, !0)
			})
		}
	}), e("echarts/chart/candlestick", ["require", "../echarts", "./candlestick/CandlestickSeries", "./candlestick/CandlestickView", "./candlestick/preprocessor", "./candlestick/candlestickVisual", "./candlestick/candlestickLayout"], function(t) {
		var e = t("../echarts");
		t("./candlestick/CandlestickSeries"), t("./candlestick/CandlestickView"), e.registerPreprocessor(t("./candlestick/preprocessor")), e.registerVisualCoding("chart", t("./candlestick/candlestickVisual")), e.registerLayout(t("./candlestick/candlestickLayout"))
	}), e("echarts/chart/effectScatter/EffectScatterSeries", ["require", "../helper/createListFromArray", "../../model/Series"], function(t) {
		var e = t("../helper/createListFromArray"),
			i = t("../../model/Series");
		return i.extend({
			type: "series.effectScatter",
			dependencies: ["grid", "polar"],
			getInitialData: function(t, i) {
				var n = e(t.data, this, i);
				return n
			},
			defaultOption: {
				coordinateSystem: "cartesian2d",
				zlevel: 0,
				z: 2,
				legendHoverLink: !0,
				effectType: "ripple",
				showEffectOn: "render",
				rippleEffect: {
					period: 4,
					scale: 2.5,
					brushType: "fill"
				},
				xAxisIndex: 0,
				yAxisIndex: 0,
				polarIndex: 0,
				geoIndex: 0,
				symbolSize: 10
			}
		})
	}), e("echarts/chart/helper/EffectSymbol", ["require", "zrender/core/util", "../../util/symbol", "../../util/graphic", "../../util/number", "./Symbol"], function(t) {
		function e(t) {
			return n.isArray(t) || (t = [+t, +t]), t
		}
		function i(t, e) {
			l.call(this);
			var i = new s(t, e),
				n = new l;
			this.add(i), this.add(n), n.beforeUpdate = function() {
				this.attr(i.getScale())
			}, this.updateData(t, e)
		}
		var n = t("zrender/core/util"),
			r = t("../../util/symbol"),
			o = t("../../util/graphic"),
			a = t("../../util/number"),
			s = t("./Symbol"),
			l = o.Group,
			u = 3,
			c = i.prototype;
		return c.stopEffectAnimation = function() {
			this.childAt(1).removeAll()
		}, c.startEffectAnimation = function(t, e, i, n, o, a) {
			for (var s = this._symbolType, l = this._color, c = this.childAt(1), h = 0; u > h; h++) {
				var d = r.createSymbol(s, -.5, -.5, 1, 1, l);
				d.attr({
					style: {
						stroke: "stroke" === e ? l : null,
						fill: "fill" === e ? l : null,
						strokeNoScale: !0
					},
					z2: 99,
					silent: !0,
					scale: [1, 1],
					z: o,
					zlevel: a
				});
				var p = -h / u * t + n;
				d.animate("", !0).when(t, {
					scale: [i, i]
				}).delay(p).start(), d.animateStyle(!0).when(t, {
					opacity: 0
				}).delay(p).start(), c.add(d)
			}
		}, c.highlight = function() {
			this.trigger("emphasis")
		}, c.downplay = function() {
			this.trigger("normal")
		}, c.updateData = function(t, i) {
			function n() {
				b.trigger("emphasis"), "render" !== f && this.startEffectAnimation(v, g, m, y, _, x)
			}
			function r() {
				b.trigger("normal"), "render" !== f && this.stopEffectAnimation()
			}
			var o = t.hostModel;
			this.childAt(0).updateData(t, i);
			var s = this.childAt(1),
				l = t.getItemModel(i),
				u = t.getItemVisual(i, "symbol"),
				c = e(t.getItemVisual(i, "symbolSize")),
				h = t.getItemVisual(i, "color");
			s.attr("scale", c), s.traverse(function(t) {
				t.attr({
					fill: h
				})
			});
			var d = l.getShallow("symbolOffset");
			if (d) {
				var p = s.position;
				p[0] = a.parsePercent(d[0], c[0]), p[1] = a.parsePercent(d[1], c[1])
			}
			this._symbolType = u, this._color = h;
			var f = o.get("showEffectOn"),
				m = l.get("rippleEffect.scale"),
				g = l.get("rippleEffect.brushType"),
				v = 1e3 * l.get("rippleEffect.period"),
				y = i / t.count(),
				_ = l.getShallow("z") || 0,
				x = l.getShallow("zlevel") || 0;
			this.stopEffectAnimation(), "render" === f && this.startEffectAnimation(v, g, m, y, _, x);
			var b = this.childAt(0);
			this.on("mouseover", n, this).on("mouseout", r, this).on("emphasis", n, this).on("normal", r, this)
		}, c.fadeOut = function(t) {
			t && t()
		}, n.inherits(i, l), i
	}), e("echarts/chart/effectScatter/EffectScatterView", ["require", "../helper/SymbolDraw", "../helper/EffectSymbol", "../../echarts"], function(t) {
		var e = t("../helper/SymbolDraw"),
			i = t("../helper/EffectSymbol");
		t("../../echarts").extendChartView({
			type: "effectScatter",
			init: function() {
				this._symbolDraw = new e(i)
			},
			render: function(t, e, i) {
				var n = t.getData(),
					r = this._symbolDraw;
				r.updateData(n), this.group.add(r.group)
			},
			updateLayout: function() {
				this._symbolDraw.updateLayout()
			},
			remove: function(t, e) {
				this._symbolDraw && this._symbolDraw.remove(e)
			}
		})
	}), e("echarts/chart/effectScatter", ["require", "zrender/core/util", "../echarts", "./effectScatter/EffectScatterSeries", "./effectScatter/EffectScatterView", "../visual/symbol", "../layout/points"], function(t) {
		var e = t("zrender/core/util"),
			i = t("../echarts");
		t("./effectScatter/EffectScatterSeries"), t("./effectScatter/EffectScatterView"), i.registerVisualCoding("chart", e.curry(t("../visual/symbol"), "effectScatter", "circle", null)), i.registerLayout(e.curry(t("../layout/points"), "effectScatter"))
	}), e("echarts/chart/lines/LinesSeries", ["require", "../../model/Series", "../../data/List", "zrender/core/util"], function(t) {
		var e = t("../../model/Series"),
			i = t("../../data/List"),
			n = t("zrender/core/util");
		return e.extend({
			type: "series.lines",
			dependencies: ["grid", "polar"],
			getInitialData: function(t, e) {
				function r(t, e, i, n) {
					return t.coord && t.coord[n]
				}
				var o = [],
					a = [],
					s = [];
				n.each(t.data, function(t) {
					o.push(t[0]), a.push(t[1]), s.push(n.extend(n.extend({}, n.isArray(t[0]) ? null : t[0]), n.isArray(t[1]) ? null : t[1]))
				});
				var l = t.coordinateSystem;
				if ("cartesian2d" !== l && "geo" !== l) throw new Error("Coordinate system can only be cartesian2d or geo in lines");
				var u = "geo" === l ? ["lng", "lat"] : ["x", "y"],
					c = new i(u, this),
					h = new i(u, this),
					d = new i(["value"], this);
				return c.initData(o, null, r), h.initData(a, null, r), d.initData(s), this.fromData = c, this.toData = h, d
			},
			formatTooltip: function(t) {
				var e = this.fromData.getName(t),
					i = this.toData.getName(t);
				return e + " > " + i
			},
			defaultOption: {
				coordinateSystem: "geo",
				zlevel: 0,
				z: 2,
				legendHoverLink: !0,
				hoverAnimation: !0,
				xAxisIndex: 0,
				yAxisIndex: 0,
				geoIndex: 0,
				effect: {
					show: !1,
					period: 4,
					symbol: "circle",
					symbolSize: 3,
					trailLength: .2
				},
				large: !1,
				largeThreshold: 2e3,
				label: {
					normal: {
						show: !1,
						position: "end"
					}
				},
				lineStyle: {
					normal: {
						opacity: .5
					}
				}
			}
		})
	}), e("echarts/chart/helper/EffectLine", ["require", "../../util/graphic", "./Line", "zrender/core/util", "../../util/symbol", "zrender/core/curve"], function(t) {
		function e(t, e, i, n) {
			r.Group.call(this);
			var a = new o(t, e, i, n);
			this.add(a), this._updateEffectSymbol(t, n)
		}
		function i(t, e) {
			t.__p1 = e[0], t.__p2 = e[1], t.__cp1 = e[2] || [(e[0][0] + e[1][0]) / 2, (e[0][1] + e[1][1]) / 2]
		}
		function n() {
			var t = this.__p1,
				e = this.__p2,
				i = this.__cp1,
				n = this.__t,
				r = this.position,
				o = l.quadraticAt,
				a = l.quadraticDerivativeAt;
			r[0] = o(t[0], i[0], e[0], n), r[1] = o(t[1], i[1], e[1], n);
			var s = a(t[0], i[0], e[0], n),
				u = a(t[1], i[1], e[1], n);
			this.rotation = -Math.atan2(u, s) - Math.PI / 2, this.ignore = !1
		}
		var r = t("../../util/graphic"),
			o = t("./Line"),
			a = t("zrender/core/util"),
			s = t("../../util/symbol"),
			l = t("zrender/core/curve"),
			u = e.prototype;
		return u._updateEffectSymbol = function(t, e) {
			var r = t.getItemModel(e),
				o = r.getModel("effect"),
				l = o.get("symbolSize"),
				u = o.get("symbol");
			a.isArray(l) || (l = [l, l]);
			var c = o.get("color") || t.getItemVisual(e, "color"),
				h = this.childAt(1),
				d = 1e3 * o.get("period");
			(this._symbolType !== u || d !== this._period) && (h = s.createSymbol(u, -.5, -.5, 1, 1, c), h.ignore = !0, h.z2 = 100, this._symbolType = u, this._period = d, this.add(h), h.__t = 0, h.animate("", !0).when(d, {
				__t: 1
			}).delay(e / t.count() * d / 2).during(a.bind(n, h)).start()), h.setStyle("shadowColor", c), h.setStyle(o.getItemStyle(["color"])), h.attr("scale", l);
			var p = t.getItemLayout(e);
			i(h, p), h.setColor(c), h.attr("scale", l)
		}, u.updateData = function(t, e, i, n) {
			this.childAt(0).updateData(t, e, i, n), this._updateEffectSymbol(t, n)
		}, u.updateLayout = function(t, e, n, r) {
			this.childAt(0).updateLayout(t, e, n, r);
			var o = this.childAt(1),
				a = t.getItemLayout(r);
			i(o, a)
		}, a.inherits(e, r.Group), e
	}), e("echarts/chart/lines/LinesView", ["require", "../helper/LineDraw", "../helper/EffectLine", "../helper/Line", "../../echarts"], function(t) {
		var e = t("../helper/LineDraw"),
			i = t("../helper/EffectLine"),
			n = t("../helper/Line");
		t("../../echarts").extendChartView({
			type: "lines",
			init: function() {},
			render: function(t, r, o) {
				var a = t.getData(),
					s = this._lineDraw,
					l = t.get("effect.show");
				l !== this._hasEffet && (s && s.remove(), s = this._lineDraw = new e(l ? i : n), this._hasEffet = l);
				var u = t.get("zlevel"),
					c = t.get("effect.trailLength"),
					h = o.getZr();
				h.painter.getLayer(u).clear(!0), null != this._lastZlevel && h.configLayer(this._lastZlevel, {
					motionBlur: !1
				}), l && c && h.configLayer(u, {
					motionBlur: !0,
					lastFrameAlpha: Math.max(Math.min(c / 10 + .9, 1), 0)
				}), this.group.add(s.group), s.updateData(a), this._lastZlevel = u
			},
			updateLayout: function(t, e, i) {
				this._lineDraw.updateLayout();
				var n = i.getZr();
				n.painter.getLayer(this._lastZlevel).clear(!0)
			},
			remove: function(t, e) {
				this._lineDraw && this._lineDraw.remove(e, !0)
			}
		})
	}), e("echarts/chart/lines/linesLayout", ["require"], function(t) {
		return function(t) {
			t.eachSeriesByType("lines", function(t) {
				var e = t.coordinateSystem,
					i = t.fromData,
					n = t.toData,
					r = t.getData(),
					o = e.dimensions;
				i.each(o, function(t, n, r) {
					i.setItemLayout(r, e.dataToPoint([t, n]))
				}), n.each(o, function(t, i, r) {
					n.setItemLayout(r, e.dataToPoint([t, i]))
				}), r.each(function(t) {
					var e, o = i.getItemLayout(t),
						a = n.getItemLayout(t),
						s = r.getItemModel(t).get("lineStyle.normal.curveness");
					s > 0 && (e = [(o[0] + a[0]) / 2 - (o[1] - a[1]) * s, (o[1] + a[1]) / 2 - (a[0] - o[0]) * s]), r.setItemLayout(t, [o, a, e])
				})
			})
		}
	}), e("echarts/chart/lines", ["require", "./lines/LinesSeries", "./lines/LinesView", "zrender/core/util", "../echarts", "./lines/linesLayout", "../visual/seriesColor"], function(t) {
		t("./lines/LinesSeries"), t("./lines/LinesView");
		var e = t("zrender/core/util"),
			i = t("../echarts");
		i.registerLayout(t("./lines/linesLayout")), i.registerVisualCoding("chart", e.curry(t("../visual/seriesColor"), "lines", "lineStyle"))
	}), e("echarts/chart/heatmap/HeatmapSeries", ["require", "../../model/Series", "../helper/createListFromArray"], function(t) {
		var e = t("../../model/Series"),
			i = t("../helper/createListFromArray");
		return e.extend({
			type: "series.heatmap",
			getInitialData: function(t, e) {
				return i(t.data, this, e)
			},
			defaultOption: {
				coordinateSystem: "cartesian2d",
				zlevel: 0,
				z: 2,
				xAxisIndex: 0,
				yAxisIndex: 0,
				geoIndex: 0,
				blurSize: 20
			}
		})
	}), e("echarts/chart/heatmap/HeatmapLayer", ["require", "zrender/core/util"], function(t) {
		function e() {
			var t = r.createCanvas();
			this.canvas = t, this.blurSize = 30, this.opacity = 1, this._gradientPixels = {}
		}
		var i = 20,
			n = 256,
			r = t("zrender/core/util");
		return e.prototype = {
			update: function(t, e, r, o, a, s) {
				var l = this._getBrush(),
					u = this._getGradient(t, a, "inRange"),
					c = this._getGradient(t, a, "outOfRange"),
					h = i + this.blurSize,
					d = this.canvas,
					p = d.getContext("2d"),
					f = t.length;
				d.width = e, d.height = r;
				for (var m = 0; f > m; ++m) {
					var g = t[m],
						v = g[0],
						y = g[1],
						_ = g[2],
						x = o(_);
					p.globalAlpha = x, p.drawImage(l, v - h, y - h)
				}
				for (var b = p.getImageData(0, 0, d.width, d.height), w = b.data, M = 0, S = w.length; S > M;) {
					var x = w[M + 3] / 256,
						L = 4 * Math.floor(x * (n - 1));
					if (x > 0) {
						var C = s(x) ? u : c;
						w[M++] = C[L], w[M++] = C[L + 1], w[M++] = C[L + 2], w[M++] *= this.opacity * C[L + 3]
					} else M += 4
				}
				return p.putImageData(b, 0, 0), d
			},
			_getBrush: function() {
				var t = this._brushCanvas || (this._brushCanvas = r.createCanvas()),
					e = i + this.blurSize,
					n = 2 * e;
				t.width = n, t.height = n;
				var o = t.getContext("2d");
				return o.clearRect(0, 0, n, n), o.shadowOffsetX = n, o.shadowBlur = this.blurSize, o.shadowColor = "#000", o.beginPath(), o.arc(-e, e, i, 0, 2 * Math.PI, !0), o.closePath(), o.fill(), t
			},
			_getGradient: function(t, e, i) {
				for (var n = this._gradientPixels, r = n[i] || (n[i] = new Uint8ClampedArray(1024)), o = [], a = 0, s = 0; 256 > s; s++) e[i](s / 255, !0, o), r[a++] = o[0], r[a++] = o[1], r[a++] = o[2], r[a++] = o[3];
				return r
			}
		}, e
	}), e("echarts/chart/heatmap/HeatmapView", ["require", "../../util/graphic", "./HeatmapLayer", "zrender/core/util", "../../echarts"], function(t) {
		function e(t, e, i) {
			var n = t[1] - t[0];
			e = o.map(e, function(e) {
				return {
					interval: [(e.interval[0] - t[0]) / n, (e.interval[1] - t[0]) / n]
				}
			});
			var r = e.length,
				a = 0;
			return function(t) {
				for (var n = a; r > n; n++) {
					var o = e[n].interval;
					if (o[0] <= t && t <= o[1]) {
						a = n;
						break
					}
				}
				if (n === r) for (var n = a - 1; n >= 0; n--) {
					var o = e[n].interval;
					if (o[0] <= t && t <= o[1]) {
						a = n;
						break
					}
				}
				return n >= 0 && r > n && i[n]
			}
		}
		function i(t, e) {
			var i = t[1] - t[0];
			return e = [(e[0] - t[0]) / i, (e[1] - t[0]) / i], function(t) {
				return t >= e[0] && t <= e[1]
			}
		}
		var n = t("../../util/graphic"),
			r = t("./HeatmapLayer"),
			o = t("zrender/core/util");
		return t("../../echarts").extendChartView({
			type: "heatmap",
			render: function(t, e, i) {
				var n;
				if (e.eachComponent("visualMap", function(e) {
					e.eachTargetSeries(function(i) {
						i === t && (n = e)
					})
				}), !n) throw new Error("Heatmap must use with visualMap");
				this.group.removeAll();
				var r = t.coordinateSystem;
				"cartesian2d" === r.type ? this._renderOnCartesian(r, t, i) : "geo" === r.type && this._renderOnGeo(r, t, n, i)
			},
			_renderOnCartesian: function(t, e, i) {
				var r = t.getAxis("x"),
					o = t.getAxis("y"),
					a = this.group;
				if ("category" !== r.type || "category" !== o.type) throw new Error("Heatmap on cartesian must have two category axes");
				if (!r.onBand || !o.onBand) throw new Error("Heatmap on cartesian must have two axes with boundaryGap true");
				var s = r.getBandWidth(),
					l = o.getBandWidth(),
					u = e.getData();
				u.each(["x", "y", "z"], function(i, r, o, c) {
					var h = u.getItemModel(c),
						d = t.dataToPoint([i, r]);
					if (!isNaN(o)) {
						var p = new n.Rect({
							shape: {
								x: d[0] - s / 2,
								y: d[1] - l / 2,
								width: s,
								height: l
							},
							style: {
								fill: u.getItemVisual(c, "color")
							}
						}),
							f = h.getModel("itemStyle.normal").getItemStyle(["color"]),
							m = h.getModel("itemStyle.emphasis").getItemStyle(),
							g = h.getModel("label.normal"),
							v = h.getModel("label.emphasis"),
							y = e.getRawValue(c),
							_ = "-";
						y && null != y[2] && (_ = y[2]), g.get("show") && (n.setText(f, g), f.text = e.getFormattedLabel(c, "normal") || _), v.get("show") && (n.setText(m, v), m.text = e.getFormattedLabel(c, "emphasis") || _), p.setStyle(f), n.setHoverStyle(p, m), a.add(p), u.setItemGraphicEl(c, p)
					}
				})
			},
			_renderOnGeo: function(t, o, a, s) {
				var l = a.targetVisuals.inRange,
					u = a.targetVisuals.outOfRange,
					c = o.getData(),
					h = this._hmLayer || this._hmLayer || new r;
				h.blurSize = o.get("blurSize");
				var d = t.getViewRect().clone(),
					p = t.getRoamTransform();
				d.applyTransform(p);
				var f = Math.max(d.x, 0),
					m = Math.max(d.y, 0),
					g = Math.min(d.width + d.x, s.getWidth()),
					v = Math.min(d.height + d.y, s.getHeight()),
					y = g - f,
					_ = v - m,
					x = c.mapArray(["lng", "lat", "value"], function(e, i, n) {
						var r = t.dataToPoint([e, i]);
						return r[0] -= f, r[1] -= m, r.push(n), r
					}),
					b = a.getExtent(),
					w = "visualMap.continuous" === a.type ? i(b, a.option.range) : e(b, a.getPieceList(), a.option.selected);
				h.update(x, y, _, l.color.getNormalizer(), {
					inRange: l.color.getColorMapper(),
					outOfRange: u.color.getColorMapper()
				}, w);
				var M = new n.Image({
					style: {
						width: y,
						height: _,
						x: f,
						y: m,
						image: h.canvas
					},
					silent: !0
				});
				this.group.add(M)
			}
		})
	}), e("echarts/chart/heatmap", ["require", "./heatmap/HeatmapSeries", "./heatmap/HeatmapView"], function(t) {
		t("./heatmap/HeatmapSeries"), t("./heatmap/HeatmapView")
	}), e("echarts/component/geo/GeoView", ["require", "../helper/MapDraw", "../../echarts"], function(t) {
		var e = t("../helper/MapDraw");
		return t("../../echarts").extendComponentView({
			type: "geo",
			init: function(t, i) {
				var n = new e(i, !0);
				this._mapDraw = n, this.group.add(n.group)
			},
			render: function(t, e, i) {
				t.get("show") && this._mapDraw.draw(t, e, i)
			}
		})
	}), e("echarts/component/geo", ["require", "../coord/geo/geoCreator", "./geo/GeoView", "../action/geoRoam"], function(t) {
		t("../coord/geo/geoCreator"), t("./geo/GeoView"), t("../action/geoRoam")
	}), e("echarts/component/title", ["require", "../echarts", "../util/graphic", "../util/layout"], function(t) {
		var e = t("../echarts"),
			i = t("../util/graphic"),
			n = t("../util/layout");
		e.extendComponentModel({
			type: "title",
			defaultOption: {
				zlevel: 0,
				z: 6,
				show: !0,
				text: "",
				target: "blank",
				subtext: "",
				subtarget: "blank",
				left: "left",
				top: "top",
				backgroundColor: "rgba(0,0,0,0)",
				borderColor: "#ccc",
				borderWidth: 0,
				padding: 5,
				itemGap: 10,
				textStyle: {
					fontSize: 18,
					fontWeight: "bolder",
					color: "#333"
				},
				subtextStyle: {
					color: "#aaa"
				}
			}
		}), e.extendComponentView({
			type: "title",
			render: function(t, e, r) {
				if (this.group.removeAll(), t.get("show")) {
					var o = this.group,
						a = t.getModel("textStyle"),
						s = t.getModel("subtextStyle"),
						l = t.get("textAlign"),
						u = new i.Text({
							style: {
								text: t.get("text"),
								textFont: a.getFont(),
								fill: a.getTextColor(),
								textBaseline: "top"
							},
							z2: 10
						}),
						c = u.getBoundingRect(),
						h = t.get("subtext"),
						d = new i.Text({
							style: {
								text: h,
								textFont: s.getFont(),
								fill: s.getTextColor(),
								y: c.height + t.get("itemGap"),
								textBaseline: "top"
							},
							z2: 10
						}),
						p = t.get("link"),
						f = t.get("sublink");
					u.silent = !p, d.silent = !f, p && u.on("click", function() {
						window.open(p, t.get("target"))
					}), f && d.on("click", function() {
						window.open(f, t.get("subtarget"))
					}), o.add(u), h && o.add(d);
					var m = o.getBoundingRect(),
						g = t.getBoxLayoutParams();
					g.width = m.width, g.height = m.height;
					var v = n.getLayoutRect(g, {
						width: r.getWidth(),
						height: r.getHeight()
					}, t.get("padding"));
					if (!l) {
						var y = v.x / r.getWidth(),
							_ = (v.x + v.width) / r.getWidth();.2 > y ? l = "left" : _ > .8 ? (v.x += v.width, l = "right") : (v.x += v.width / 2, l = "center")
					}
					o.position = [v.x, v.y], u.setStyle("textAlign", l), d.setStyle("textAlign", l), m = o.getBoundingRect();
					var x = v.margin,
						b = t.getItemStyle(["color", "opacity"]);
					b.fill = t.get("backgroundColor");
					var w = new i.Rect({
						shape: {
							x: m.x - x[3],
							y: m.y - x[0],
							width: m.width + x[1] + x[3],
							height: m.height + x[0] + x[2]
						},
						style: b,
						silent: !0
					});
					i.subPixelOptimizeRect(w), o.add(w)
				}
			}
		})
	}), e("echarts/component/dataZoom/typeDefaulter", ["require", "../../model/Component"], function(t) {
		t("../../model/Component").registerSubTypeDefaulter("dataZoom", function(t) {
			return "slider"
		})
	}), e("echarts/component/dataZoom/AxisProxy", ["require", "zrender/core/util", "../../util/number"], function(t) {
		function e(t, e) {
			var i = [Number.MAX_VALUE, Number.MIN_VALUE];
			return a(e, function(e) {
				var n = e.getData();
				n && a(e.getDimensionsOnAxis(t), function(t) {
					var e = n.getDataExtent(t);
					e[0] < i[0] && (i[0] = e[0]), e[1] > i[1] && (i[1] = e[1])
				})
			}, this), i
		}
		function i(t, e, i) {
			var r = [0, 100],
				l = t.option,
				u = [l.start, l.end],
				c = [l.startValue, l.endValue],
				h = ["floor", "ceil"];
			return a([0, 1], function(t) {
				var a, s = c[t],
					l = !0;
				n(s) && (a = u[t], n(a) && (a = r[t]), s = o.linearMap(a, r, e, !0), l = !1), i && (s = Math[h[t]](s)), l && (a = o.linearMap(s, e, r, !0)), c[t] = s, u[t] = a
			}), {
				valueWindow: s(c),
				percentWindow: s(u)
			}
		}
		function n(t) {
			return isNaN(t) || null == t
		}
		var r = t("zrender/core/util"),
			o = t("../../util/number"),
			a = r.each,
			s = o.asc,
			l = function(t, e, i, n) {
				this._dimName = t, this._axisIndex = e, this._backup, this._valueWindow, this._percentWindow, this._dataExtent, this.ecModel = n, this._model = i
			};
		return l.prototype = {
			constructor: l,
			hostedBy: function(t) {
				return this._model === t
			},
			backup: function(t, e) {
				t === this._model && (this._backup = e)
			},
			getBackup: function() {
				return r.clone(this._backup)
			},
			getDataExtent: function() {
				return this._dataExtent.slice()
			},
			getDataValueWindow: function() {
				return this._valueWindow.slice()
			},
			getDataPercentWindow: function() {
				return this._percentWindow.slice()
			},
			getTargetSeriesModels: function() {
				var t = [];
				return this.ecModel.eachSeries(function(e) {
					this._axisIndex === e.get(this._dimName + "AxisIndex") && t.push(e)
				}, this), t
			},
			getAxisModel: function() {
				return this.ecModel.getComponent(this._dimName + "Axis", this._axisIndex)
			},
			getOtherAxisModel: function() {
				var t, e, i = this._dimName,
					n = this.ecModel,
					r = this.getAxisModel(),
					o = "x" === i || "y" === i;
				o ? (e = "gridIndex", t = "x" === i ? "y" : "x") : (e = "polarIndex", t = "angle" === i ? "radius" : "angle");
				var a;
				return n.eachComponent(t + "Axis", function(t) {
					(t.get(e) || 0) === (r.get(e) || 0) && (a = t)
				}), a
			},
			reset: function(t) {
				if (t === this._model) {
					var n = this._dimName,
						r = this.getAxisModel(),
						o = "category" === r.get("type"),
						a = this.getTargetSeriesModels(),
						s = e(n, a),
						l = i(t, s, o);
					this._dataExtent = s.slice(), this._valueWindow = l.valueWindow.slice(), this._percentWindow = l.percentWindow.slice()
				}
			},
			filterData: function(t) {
				function e(t) {
					return t >= o[0] && t <= o[1]
				}
				if (t === this._model) {
					var i = this._dimName,
						n = this.getTargetSeriesModels(),
						r = t.get("filterMode"),
						o = this._valueWindow,
						s = this.getOtherAxisModel();
					t.get("$fromToolbox") && s && "category" === s.get("type") && (r = "empty"), a(n, function(t) {
						var n = t.getData();
						n && a(t.getDimensionsOnAxis(i), function(i) {
							"empty" === r ? t.setData(n.map(i, function(t) {
								return e(t) ? t : NaN
							})) : n.filterSelf(i, e)
						})
					})
				}
			}
		}, l
	}), e("echarts/component/dataZoom/DataZoomModel", ["require", "zrender/core/util", "zrender/core/env", "../../echarts", "../../util/model", "./AxisProxy"], function(t) {
		var e = t("zrender/core/util"),
			i = t("zrender/core/env"),
			n = t("../../echarts"),
			r = t("../../util/model"),
			o = t("./AxisProxy"),
			a = e.each,
			s = r.eachAxisDim;
		return n.extendComponentModel({
			type: "dataZoom",
			dependencies: ["xAxis", "yAxis", "zAxis", "radiusAxis", "angleAxis", "series"],
			defaultOption: {
				zlevel: 0,
				z: 4,
				orient: null,
				xAxisIndex: null,
				yAxisIndex: null,
				filterMode: "filter",
				throttle: 100,
				start: 0,
				end: 100,
				startValue: null,
				endValue: null
			},
			init: function(t, e, i) {
				this._autoMode, this._dataIntervalByAxis = {}, this._dataInfo = {}, this._axisProxies = {}, this.textStyleModel, this.mergeDefaultAndTheme(t, i), this.mergeOption({}, !0)
			},
			mergeOption: function(t, n) {
				var r = this.option;
				t && e.merge(r, t), i.canvasSupported || (r.realtime = !1), this.textStyleModel = this.getModel("textStyle"), this._resetTarget(t, n), this._giveAxisProxies(), this._backup()
			},
			_giveAxisProxies: function() {
				var t = this._axisProxies;
				this.eachTargetAxis(function(e, i, n, r) {
					var a = this.dependentModels[e.axis][i],
						s = a.__dzAxisProxy || (a.__dzAxisProxy = new o(e.name, i, this, r));
					t[e.name + "_" + i] = s
				}, this)
			},
			_resetTarget: function(t, e) {
				this._resetAutoMode(t, e);
				var i = this.option;
				s(function(t) {
					var e = t.axisIndex;
					i[e] = "axisIndex" === n ? [] : r.normalizeToArray(i[e])
				}, this);
				var n = this._autoMode;
				"axisIndex" === n ? this._autoSetAxisIndex() : "orient" === n && this._autoSetOrient()
			},
			_resetAutoMode: function(t, e) {
				var i = e ? this.option : t,
					n = !1;
				s(function(t) {
					null != i[t.axisIndex] && (n = !0)
				}, this);
				var r = i.orient;
				null == r && n ? this._autoMode = "orient" : (null == r && (this.option.orient = "horizontal"), n || (this._autoMode = "axisIndex"))
			},
			_autoSetAxisIndex: function() {
				var t = "axisIndex" === this._autoMode,
					i = this.get("orient"),
					n = this.option;
				if (t) {
					var r = "vertical" === i ? {
						dim: "y",
						axisIndex: "yAxisIndex",
						axis: "yAxis"
					} : {
						dim: "x",
						axisIndex: "xAxisIndex",
						axis: "xAxis"
					};
					this.dependentModels[r.axis].length && (n[r.axisIndex] = [0], t = !1)
				}
				t && s(function(e) {
					if (t) {
						var i = [],
							r = this.dependentModels[e.axis];
						if (r.length && !i.length) for (var o = 0, a = r.length; a > o; o++)"category" === r[o].get("type") && i.push(o);
						n[e.axisIndex] = i, i.length && (t = !1)
					}
				}, this), t && this.ecModel.eachSeries(function(t) {
					this._isSeriesHasAllAxesTypeOf(t, "value") && s(function(i) {
						var r = n[i.axisIndex],
							o = t.get(i.axisIndex);
						e.indexOf(r, o) < 0 && r.push(o)
					})
				}, this)
			},
			_autoSetOrient: function() {
				var t;
				this.eachTargetAxis(function(e) {
					!t && (t = e.name)
				}, this), this.option.orient = "y" === t ? "vertical" : "horizontal"
			},
			_isSeriesHasAllAxesTypeOf: function(t, e) {
				var i = !0;
				return s(function(n) {
					var r = t.get(n.axisIndex),
						o = this.dependentModels[n.axis][r];
					o && o.get("type") === e || (i = !1)
				}, this), i
			},
			_backup: function() {
				this.eachTargetAxis(function(t, e, i, n) {
					var r = n.getComponent(t.axis, e);
					this.getAxisProxy(t.name, e).backup(this, {
						scale: r.get("scale", !0),
						min: r.get("min", !0),
						max: r.get("max", !0)
					})
				}, this)
			},
			getFirstTargetAxisModel: function() {
				var t;
				return s(function(e) {
					if (null == t) {
						var i = this.get(e.axisIndex);
						i.length && (t = this.dependentModels[e.axis][i[0]])
					}
				}, this), t
			},
			eachTargetAxis: function(t, e) {
				var i = this.ecModel;
				s(function(n) {
					a(this.get(n.axisIndex), function(r) {
						t.call(e, n, r, this, i)
					}, this)
				}, this)
			},
			getAxisProxy: function(t, e) {
				return this._axisProxies[t + "_" + e]
			},
			setRawRange: function(t) {
				a(["start", "end", "startValue", "endValue"], function(e) {
					this.option[e] = t[e]
				}, this)
			},
			getPercentRange: function() {
				var t = this._axisProxies;
				for (var e in t) if (t.hasOwnProperty(e) && t[e].hostedBy(this)) return t[e].getDataPercentWindow();
				for (var e in t) if (t.hasOwnProperty(e) && !t[e].hostedBy(this)) return t[e].getDataPercentWindow()
			}
		})
	}), e("echarts/component/dataZoom/DataZoomView", ["require", "../../view/Component"], function(t) {
		var e = t("../../view/Component");
		return e.extend({
			type: "dataZoom",
			render: function(t, e, i, n) {
				this.dataZoomModel = t, this.ecModel = e, this.api = i
			},
			getTargetInfo: function() {
				function t(t, e, i, n) {
					for (var r, o = 0; o < i.length; o++) if (i[o].model === t) {
						r = i[o];
						break
					}
					r || i.push(r = {
						model: t,
						axisModels: [],
						coordIndex: n
					}), r.axisModels.push(e)
				}
				var e = this.dataZoomModel,
					i = this.ecModel,
					n = [],
					r = [],
					o = [];
				return e.eachTargetAxis(function(e, a) {
					var s = i.getComponent(e.axis, a);
					if (s) {
						o.push(s);
						var l = s.get("gridIndex"),
							u = s.get("polarIndex");
						if (null != l) {
							var c = i.getComponent("grid", l);
							t(c, s, n, l)
						} else if (null != u) {
							var c = i.getComponent("polar", u);
							t(c, s, r, u)
						}
					}
				}, this), {
					cartesians: n,
					polars: r,
					axisModels: o
				}
			}
		})
	}), e("echarts/component/dataZoom/SliderZoomModel", ["require", "./DataZoomModel"], function(t) {
		var e = t("./DataZoomModel");
		return e.extend({
			type: "dataZoom.slider",
			layoutMode: "box",
			defaultOption: {
				show: !0,
				left: "auto",
				right: "auto",
				top: "auto",
				bottom: "auto",
				width: "auto",
				height: "auto",
				backgroundColor: "rgba(47,69,84,0)",
				dataBackgroundColor: "#ddd",
				fillerColor: "rgba(47,69,84,0.25)",
				handleColor: "rgba(47,69,84,0.65)",
				handleSize: 10,
				labelPrecision: null,
				labelFormatter: null,
				showDetail: !0,
				showDataShadow: "auto",
				realtime: !0,
				zoomLock: !1,
				textStyle: {
					color: "#333"
				}
			}
		})
	}), e("echarts/util/throttle", [], function() {
		var t = {},
			e = "\x00__throttleOriginMethod",
			i = "\x00__throttleRate";
		return t.throttle = function(t, e, i, n) {
			function r(r) {
				function p() {
					c = (new Date).getTime(), h = null, (d ? t : t[r]).apply(a, s || [])
				}
				var f = function() {
						l = (new Date).getTime(), a = this, s = arguments, o = l - (n ? u : c) - e, clearTimeout(h), n ? i ? h = setTimeout(p, e) : o >= 0 && p() : o >= 0 ? p() : i && (h = setTimeout(p, -o)), u = l
					};
				return f.clear = function() {
					h && (clearTimeout(h), h = null)
				}, f
			}
			var o, a, s, l = (new Date).getTime(),
				u = 0,
				c = 0,
				h = null,
				d = "function" == typeof t;
			if (e = e || 0, d) return r();
			for (var p = [], f = 0; f < t.length; f++) p[f] = r(f);
			return p
		}, t.fixRate = function(e, i) {
			return null != i ? t.throttle(e, i, !0, !1) : e
		}, t.debounce = function(e, i) {
			return null != i ? t.throttle(e, i, !0, !0) : e
		}, t.createOrUpdate = function(n, r, o, a) {
			var s = n[r];
			if (s && null != o && a) {
				var l = s[e] || s,
					u = s[i];
				u !== o && (s = n[r] = t[a](l, o), s[e] = l, s[i] = o)
			}
		}, t.clear = function(t, i) {
			var n = t[i];
			n && n[e] && (t[i] = n[e])
		}, t
	}), e("echarts/component/helper/sliderMove", ["require"], function(t) {
		return function(t, e, i, n, r) {
			function o(t, e, i) {
				var n = e.length ? e.slice() : [e, e];
				return e[0] > e[1] && n.reverse(), 0 > t && n[0] + t < i[0] && (t = i[0] - n[0]), t > 0 && n[1] + t > i[1] && (t = i[1] - n[1]), t
			}
			return t ? ("rigid" === n ? (t = o(t, e, i), e[0] += t, e[1] += t) : (t = o(t, e[r], i), e[r] += t, "push" === n && e[0] > e[1] && (e[1 - r] = e[r])), e) : e
		}
	}), e("echarts/component/dataZoom/SliderZoomView", ["require", "zrender/core/util", "../../util/graphic", "../../util/throttle", "./DataZoomView", "../../util/number", "../../util/layout", "../helper/sliderMove"], function(t) {
		function e(t) {
			return "x" === t ? "y" : "x"
		}
		var i = t("zrender/core/util"),
			n = t("../../util/graphic"),
			r = t("../../util/throttle"),
			o = t("./DataZoomView"),
			a = n.Rect,
			s = t("../../util/number"),
			l = s.linearMap,
			u = t("../../util/layout"),
			c = t("../helper/sliderMove"),
			h = s.asc,
			d = i.bind,
			p = Math.round,
			f = Math.max,
			m = i.each,
			g = 7,
			v = 1,
			y = 30,
			_ = "horizontal",
			x = "vertical",
			b = 5,
			w = ["line", "bar", "candlestick", "scatter"];
		return o.extend({
			type: "dataZoom.slider",
			init: function(t, e) {
				this._displayables = {}, this._orient, this._range, this._handleEnds, this._size, this._halfHandleSize, this._location, this._dragging, this._dataShadowInfo, this.api = e
			},
			render: function(t, e, i, n) {
				return this.$superApply("render", arguments), r.createOrUpdate(this, "_dispatchZoomAction", this.dataZoomModel.get("throttle"), "fixRate"), this._orient = t.get("orient"), this._halfHandleSize = p(t.get("handleSize") / 2), this.dataZoomModel.get("show") === !1 ? void this.group.removeAll() : (n && "dataZoom" === n.type && n.from === this.uid || this._buildView(), void this._updateView())
			},
			remove: function() {
				this.$superApply("remove", arguments), r.clear(this, "_dispatchZoomAction")
			},
			dispose: function() {
				this.$superApply("dispose", arguments), r.clear(this, "_dispatchZoomAction")
			},
			_buildView: function() {
				var t = this.group;
				t.removeAll(), this._resetLocation(), this._resetInterval();
				var e = this._displayables.barGroup = new n.Group;
				this._renderBackground(), this._renderDataShadow(), this._renderHandle(), t.add(e), this._positionGroup()
			},
			_resetLocation: function() {
				var t = this.dataZoomModel,
					e = this.api,
					n = this._findCoordRect(),
					r = {
						width: e.getWidth(),
						height: e.getHeight()
					},
					o = this._orient === _ ? {
						left: n.x,
						top: r.height - y - g,
						width: n.width,
						height: y
					} : {
						right: g,
						top: n.y,
						width: y,
						height: n.height
					};
				i.each(u.getLayoutParams(t.option), function(t, e) {
					"auto" !== t && (o[e] = t)
				});
				var a = u.getLayoutRect(o, r, t.padding);
				this._location = {
					x: a.x,
					y: a.y
				}, this._size = [a.width, a.height], this._orient === x && this._size.reverse()
			},
			_positionGroup: function() {
				var t = this.group,
					e = this._location,
					i = this._orient,
					n = this.dataZoomModel.getFirstTargetAxisModel(),
					r = n && n.get("inverse"),
					o = this._displayables.barGroup,
					a = (this._dataShadowInfo || {}).otherAxisInverse;
				o.attr(i !== _ || r ? i === _ && r ? {
					scale: a ? [-1, 1] : [-1, -1]
				} : i !== x || r ? {
					scale: a ? [-1, -1] : [-1, 1],
					rotation: Math.PI / 2
				} : {
					scale: a ? [1, -1] : [1, 1],
					rotation: Math.PI / 2
				} : {
					scale: a ? [1, 1] : [1, -1]
				});
				var s = t.getBoundingRect([o]);
				t.position[0] = e.x - s.x, t.position[1] = e.y - s.y
			},
			_getViewExtent: function() {
				var t = this._halfHandleSize,
					e = f(this._size[0], 4 * t),
					i = [t, e - t];
				return i
			},
			_renderBackground: function() {
				var t = this.dataZoomModel,
					e = this._size;
				this._displayables.barGroup.add(new a({
					silent: !0,
					shape: {
						x: 0,
						y: 0,
						width: e[0],
						height: e[1]
					},
					style: {
						fill: t.get("backgroundColor")
					}
				}))
			},
			_renderDataShadow: function() {
				var t = this._dataShadowInfo = this._prepareDataShadowInfo();
				if (t) {
					var e = this._size,
						i = t.series,
						r = i.getRawData(),
						o = i.getShadowDim ? i.getShadowDim() : t.otherDim,
						a = r.getDataExtent(o),
						s = .3 * (a[1] - a[0]);
					a = [a[0] - s, a[1] + s];
					var u = [0, e[1]],
						c = [0, e[0]],
						h = [
							[e[0], 0],
							[0, 0]
						],
						d = c[1] / r.count(),
						p = 0,
						f = Math.round(r.count() / e[0]);
					r.each([o], function(t, e) {
						if (f > 0 && e % f) return void(p += d);
						var i = null == t || isNaN(t) || "" === t ? null : l(t, a, u, !0);
						null != i && h.push([p, i]), p += d
					}), this._displayables.barGroup.add(new n.Polyline({
						shape: {
							points: h
						},
						style: {
							fill: this.dataZoomModel.get("dataBackgroundColor"),
							lineWidth: 0
						},
						silent: !0,
						z2: -20
					}))
				}
			},
			_prepareDataShadowInfo: function() {
				var t = this.dataZoomModel,
					n = t.get("showDataShadow");
				if (n !== !1) {
					var r, o = this.ecModel;
					return t.eachTargetAxis(function(a, s) {
						var l = t.getAxisProxy(a.name, s).getTargetSeriesModels();
						i.each(l, function(t) {
							if (!(r || n !== !0 && i.indexOf(w, t.get("type")) < 0)) {
								var l = e(a.name),
									u = o.getComponent(a.axis, s).axis;
								r = {
									thisAxis: u,
									series: t,
									thisDim: a.name,
									otherDim: l,
									otherAxisInverse: t.coordinateSystem.getOtherAxis(u).inverse
								}
							}
						}, this)
					}, this), r
				}
			},
			_renderHandle: function() {
				var t = this._displayables,
					e = t.handles = [],
					i = t.handleLabels = [],
					r = this._displayables.barGroup,
					o = this._size;
				r.add(t.filler = new a({
					draggable: !0,
					cursor: "move",
					drift: d(this._onDragMove, this, "all"),
					ondragend: d(this._onDragEnd, this),
					onmouseover: d(this._showDataInfo, this, !0),
					onmouseout: d(this._showDataInfo, this, !1),
					style: {
						fill: this.dataZoomModel.get("fillerColor"),
						textPosition: "inside"
					}
				})), r.add(new a(n.subPixelOptimizeRect({
					silent: !0,
					shape: {
						x: 0,
						y: 0,
						width: o[0],
						height: o[1]
					},
					style: {
						stroke: this.dataZoomModel.get("dataBackgroundColor"),
						lineWidth: v,
						fill: "rgba(0,0,0,0)"
					}
				}))), m([0, 1], function(t) {
					r.add(e[t] = new a({
						style: {
							fill: this.dataZoomModel.get("handleColor")
						},
						cursor: "move",
						draggable: !0,
						drift: d(this._onDragMove, this, t),
						ondragend: d(this._onDragEnd, this),
						onmouseover: d(this._showDataInfo, this, !0),
						onmouseout: d(this._showDataInfo, this, !1)
					}));
					var o = this.dataZoomModel.textStyleModel;
					this.group.add(i[t] = new n.Text({
						silent: !0,
						invisible: !0,
						style: {
							x: 0,
							y: 0,
							text: "",
							textBaseline: "middle",
							textAlign: "center",
							fill: o.getTextColor(),
							textFont: o.getFont()
						}
					}))
				}, this)
			},
			_resetInterval: function() {
				var t = this._range = this.dataZoomModel.getPercentRange();
				this._handleEnds = l(t, [0, 100], this._getViewExtent(), !0)
			},
			_updateInterval: function(t, e) {
				var i = this._handleEnds,
					n = this._getViewExtent();
				c(e, i, n, "all" === t || this.dataZoomModel.get("zoomLock") ? "rigid" : "cross", t), this._range = h(l(i, n, [0, 100], !0))
			},
			_updateView: function() {
				var t = this._displayables,
					e = this._handleEnds,
					i = h(e.slice()),
					n = this._size,
					r = this._halfHandleSize;
				m([0, 1], function(i) {
					var o = t.handles[i];
					o.setShape({
						x: e[i] - r,
						y: -1,
						width: 2 * r,
						height: n[1] + 2,
						r: 1
					})
				}, this), t.filler.setShape({
					x: i[0],
					y: 0,
					width: i[1] - i[0],
					height: this._size[1]
				}), this._updateDataInfo()
			},
			_updateDataInfo: function() {
				function t(t) {
					var e = n.getTransform(i.handles[t], this.group),
						s = n.transformDirection(0 === t ? "right" : "left", e),
						l = this._halfHandleSize + b,
						c = n.applyTransform([u[t] + (0 === t ? -l : l), this._size[1] / 2], e);
					r[t].setStyle({
						x: c[0],
						y: c[1],
						textBaseline: o === _ ? "middle" : s,
						textAlign: o === _ ? s : "center",
						text: a[t]
					})
				}
				var e = this.dataZoomModel,
					i = this._displayables,
					r = i.handleLabels,
					o = this._orient,
					a = ["", ""];
				if (e.get("showDetail")) {
					var s, l;
					e.eachTargetAxis(function(t, i) {
						s || (s = e.getAxisProxy(t.name, i).getDataValueWindow(), l = this.ecModel.getComponent(t.axis, i).axis)
					}, this), s && (a = [this._formatLabel(s[0], l), this._formatLabel(s[1], l)])
				}
				var u = h(this._handleEnds.slice());
				t.call(this, 0), t.call(this, 1)
			},
			_formatLabel: function(t, e) {
				var n = this.dataZoomModel,
					r = n.get("labelFormatter");
				if (i.isFunction(r)) return r(t);
				var o = n.get("labelPrecision");
				return (null == o || "auto" === o) && (o = e.getPixelPrecision()), t = null == t && isNaN(t) ? "" : "category" === e.type || "time" === e.type ? e.scale.getLabel(Math.round(t)) : t.toFixed(Math.min(o, 20)), i.isString(r) && (t = r.replace("{value}", t)), t
			},
			_showDataInfo: function(t) {
				t = this._dragging || t;
				var e = this._displayables.handleLabels;
				e[0].attr("invisible", !t), e[1].attr("invisible", !t)
			},
			_onDragMove: function(t, e, i) {
				this._dragging = !0;
				var n = this._applyBarTransform([e, i], !0);
				this._updateInterval(t, n[0]), this._updateView(), this.dataZoomModel.get("realtime") && this._dispatchZoomAction()
			},
			_onDragEnd: function() {
				this._dragging = !1, this._showDataInfo(!1), this._dispatchZoomAction()
			},
			_dispatchZoomAction: function() {
				var t = this._range;
				this.api.dispatchAction({
					type: "dataZoom",
					from: this.uid,
					dataZoomId: this.dataZoomModel.id,
					start: t[0],
					end: t[1]
				})
			},
			_applyBarTransform: function(t, e) {
				var i = this._displayables.barGroup.getLocalTransform();
				return n.applyTransform(t, i, e)
			},
			_findCoordRect: function() {
				var t, e = this.getTargetInfo();
				if (e.cartesians.length) t = e.cartesians[0].model.coordinateSystem.getRect();
				else {
					var i = this.api.getWidth(),
						n = this.api.getHeight();
					t = {
						x: .2 * i,
						y: .2 * n,
						width: .6 * i,
						height: .6 * n
					}
				}
				return t
			}
		})
	}), e("echarts/component/dataZoom/InsideZoomModel", ["require", "./DataZoomModel"], function(t) {
		var e = t("./DataZoomModel");
		return e.extend({
			type: "dataZoom.inside"
		})
	}), e("echarts/component/dataZoom/InsideZoomView", ["require", "./DataZoomView", "../../util/throttle", "zrender/core/util", "../helper/sliderMove", "../../component/helper/RoamController"], function(t) {
		function e(t, e, i, r) {
			e = e.slice();
			var o = r.axisModels[0];
			if (o) {
				var a = n(t, o, i),
					s = a.signal * (e[1] - e[0]) * a.pixel / a.pixelLength;
				return l(s, e, [0, 100], "rigid"), e
			}
		}
		function i(t, e, i, o, a, s) {
			i = i.slice();
			var l = a.axisModels[0];
			if (l) {
				var u = n(e, l, o),
					c = u.pixel - u.pixelStart,
					h = c / u.pixelLength * (i[1] - i[0]) + i[0];
				return t = Math.max(t, 0), i[0] = (i[0] - h) * t + h, i[1] = (i[1] - h) * t + h, r(i)
			}
		}
		function n(t, e, i) {
			var n = e.axis,
				r = i.rect,
				o = {};
			return "x" === n.dim ? (o.pixel = t[0], o.pixelLength = r.width, o.pixelStart = r.x, o.signal = n.inverse ? 1 : -1) : (o.pixel = t[1], o.pixelLength = r.height, o.pixelStart = r.y, o.signal = n.inverse ? -1 : 1), o
		}
		function r(t) {
			var e = [0, 100];
			return !(t[0] <= e[1]) && (t[0] = e[1]), !(t[1] <= e[1]) && (t[1] = e[1]), !(t[0] >= e[0]) && (t[0] = e[0]), !(t[1] >= e[0]) && (t[1] = e[0]), t
		}
		var o = t("./DataZoomView"),
			a = t("../../util/throttle"),
			s = t("zrender/core/util"),
			l = t("../helper/sliderMove"),
			u = t("../../component/helper/RoamController"),
			c = s.bind;
		return o.extend({
			type: "dataZoom.inside",
			init: function(t, e) {
				this._controllers = {}, this._range
			},
			render: function(t, e, i, n) {
				this.$superApply("render", arguments), a.createOrUpdate(this, "_dispatchZoomAction", this.dataZoomModel.get("throttle"), "fixRate"), n && "dataZoom" === n.type && n.from === this.uid || (this._range = t.getPercentRange()), this._resetController(i)
			},
			remove: function() {
				this.$superApply("remove", arguments);
				var t = this._controllers;
				s.each(t, function(t) {
					t.off("pan").off("zoom")
				}), t.length = 0, a.clear(this, "_dispatchZoomAction")
			},
			dispose: function() {
				this.$superApply("dispose", arguments), a.clear(this, "_dispatchZoomAction")
			},
			_resetController: function(t) {
				var e = this._controllers,
					i = this.getTargetInfo();
				s.each(i.cartesians, function(i) {
					var n = "cartesian" + i.coordIndex,
						r = e[n];
					r || (r = e[n] = new u(t.getZr()), r.enable(), r.on("pan", c(this._onPan, this, r, i)), r.on("zoom", c(this._onZoom, this, r, i))), r.rect = i.model.coordinateSystem.getRect().clone()
				}, this)
			},
			_onPan: function(t, i, n, r) {
				var o = this._range = e([n, r], this._range, t, i);
				o && this._dispatchZoomAction(o)
			},
			_onZoom: function(t, e, n, r, o) {
				var a = this.dataZoomModel;
				n = 1 / n;
				var s = this._range = i(n, [r, o], this._range, t, e, a);
				this._dispatchZoomAction(s)
			},
			_dispatchZoomAction: function(t) {
				this.api.dispatchAction({
					type: "dataZoom",
					from: this.uid,
					dataZoomId: this.dataZoomModel.id,
					start: t[0],
					end: t[1]
				})
			}
		})
	}), e("echarts/component/dataZoom/dataZoomProcessor", ["require", "../../echarts", "../../util/number"], function(t) {
		function e(t, e, i, n) {
			var o = t.name,
				a = i.getAxisProxy(o, e);
			a.reset(i);
			var s = a.getDataPercentWindow(),
				l = a.getDataValueWindow(),
				u = n.getComponent(t.axis, e),
				c = 0 === s[0] && 100 === s[1],
				h = a.getBackup(),
				d = r.getPixelPrecision(l, [0, 500]),
				p = !(20 > d && d >= 0);
			u.setNeedsCrossZero && u.setNeedsCrossZero(c ? !h.scale : !1), u.setMin && u.setMin(c || p ? h.min : +l[0].toFixed(d)), u.setMax && u.setMax(c || p ? h.max : +l[1].toFixed(d))
		}
		function i(t, e, i, n) {
			i.getAxisProxy(t.name, e).filterData(i)
		}
		var n = t("../../echarts"),
			r = t("../../util/number");
		n.registerProcessor("filter", function(t, n) {
			t.eachComponent("dataZoom", function(t) {
				t.eachTargetAxis(e)
			}), t.eachComponent("dataZoom", function(t) {
				t.eachTargetAxis(i)
			})
		})
	}), e("echarts/component/dataZoom/dataZoomAction", ["require", "zrender/core/util", "../../util/model", "../../echarts"], function(t) {
		var e = t("zrender/core/util"),
			i = t("../../util/model"),
			n = t("../../echarts");
		n.registerAction("dataZoom", function(t, n) {
			var r = i.createLinkedNodesFinder(e.bind(n.eachComponent, n, "dataZoom"), i.eachAxisDim, function(t, e) {
				return t.get(e.axisIndex)
			}),
				o = [];
			n.eachComponent({
				mainType: "dataZoom",
				query: t
			}, function(t, e) {
				o.push.apply(o, r(t).nodes)
			}), e.each(o, function(e, i) {
				e.setRawRange({
					start: t.start,
					end: t.end,
					startValue: t.startValue,
					endValue: t.endValue
				})
			})
		})
	}), e("echarts/component/dataZoom", ["require", "./dataZoom/typeDefaulter", "./dataZoom/DataZoomModel", "./dataZoom/DataZoomView", "./dataZoom/SliderZoomModel", "./dataZoom/SliderZoomView", "./dataZoom/InsideZoomModel", "./dataZoom/InsideZoomView", "./dataZoom/dataZoomProcessor", "./dataZoom/dataZoomAction"], function(t) {
		t("./dataZoom/typeDefaulter"), t("./dataZoom/DataZoomModel"), t("./dataZoom/DataZoomView"), t("./dataZoom/SliderZoomModel"), t("./dataZoom/SliderZoomView"), t("./dataZoom/InsideZoomModel"), t("./dataZoom/InsideZoomView"), t("./dataZoom/dataZoomProcessor"), t("./dataZoom/dataZoomAction")
	}), e("echarts/component/visualMap/preprocessor", ["require", "zrender/core/util"], function(t) {
		function e(t, e) {
			return t && t.hasOwnProperty && t.hasOwnProperty(e)
		}
		var i = t("zrender/core/util"),
			n = i.each;
		return function(t) {
			var r = t && t.visualMap;
			i.isArray(r) || (r = r ? [r] : []), n(r, function(t) {
				if (t) {
					e(t, "splitList") && !e(t, "pieces") && (t.pieces = t.splitList, delete t.splitList);
					var r = t.pieces;
					r && i.isArray(r) && n(r, function(t) {
						i.isObject(t) && (e(t, "start") && !e(t, "min") && (t.min = t.start), e(t, "end") && !e(t, "max") && (t.max = t.end))
					})
				}
			})
		}
	}), e("echarts/component/visualMap/typeDefaulter", ["require", "../../model/Component"], function(t) {
		t("../../model/Component").registerSubTypeDefaulter("visualMap", function(t) {
			return t.categories || (t.pieces ? t.pieces.length > 0 : t.splitNumber > 0) && !t.calculable ? "piecewise" : "continuous"
		})
	}), e("echarts/component/visualMap/visualCoding", ["require", "../../echarts", "../../visual/VisualMapping", "zrender/core/util"], function(t) {
		function e(t, e) {
			var i = t.targetVisuals,
				o = {};
			r.each(["inRange", "outOfRange"], function(t) {
				var e = n.prepareVisualTypes(i[t]);
				o[t] = e
			}), t.eachTargetSeries(function(e) {
				function n(t) {
					return s.getItemVisual(a, t)
				}
				function r(t, e) {
					s.setItemVisual(a, t, e)
				}
				var a, s = e.getData(),
					l = t.getDataDimension(s);
				s.each([l], function(e, s) {
					a = s;
					for (var l = t.getValueState(e), u = i[l], c = o[l], h = 0, d = c.length; d > h; h++) {
						var p = c[h];
						u[p] && u[p].applyVisual(e, n, r)
					}
				})
			})
		}
		var i = t("../../echarts"),
			n = t("../../visual/VisualMapping"),
			r = t("zrender/core/util");
		i.registerVisualCoding("component", function(t) {
			t.eachComponent("visualMap", function(i) {
				e(i, t)
			})
		})
	}), e("echarts/visual/visualDefault", ["require", "zrender/core/util"], function(t) {
		var e = t("zrender/core/util"),
			i = {
				get: function(t, i, r) {
					var o = e.clone((n[t] || {})[i]);
					return r && e.isArray(o) ? o[o.length - 1] : o
				}
			},
			n = {
				color: {
					active: ["#006edd", "#e0ffff"],
					inactive: ["rgba(0,0,0,0)"]
				},
				colorHue: {
					active: [0, 360],
					inactive: [0, 0]
				},
				colorSaturation: {
					active: [.3, 1],
					inactive: [0, 0]
				},
				colorLightness: {
					active: [.9, .5],
					inactive: [0, 0]
				},
				colorAlpha: {
					active: [.3, 1],
					inactive: [0, 0]
				},
				symbol: {
					active: ["circle", "roundRect", "diamond"],
					inactive: ["none"]
				},
				symbolSize: {
					active: [10, 50],
					inactive: [0, 0]
				}
			};
		return i
	}), e("echarts/component/visualMap/VisualMapModel", ["require", "zrender/core/util", "zrender/core/env", "../../echarts", "../../util/model", "../../visual/visualDefault", "../../visual/VisualMapping", "../../util/number"], function(t) {
		var e = t("zrender/core/util"),
			i = t("zrender/core/env"),
			n = t("../../echarts"),
			r = t("../../util/model"),
			o = t("../../visual/visualDefault"),
			a = t("../../visual/VisualMapping"),
			s = a.mapVisual,
			l = a.eachVisual,
			u = t("../../util/number"),
			c = e.isArray,
			h = e.each,
			d = u.asc,
			p = u.linearMap;
		return n.extendComponentModel({
			type: "visualMap",
			dependencies: ["series"],
			dataBound: [-(1 / 0), 1 / 0],
			stateList: ["inRange", "outOfRange"],
			layoutMode: {
				type: "box",
				ignoreSize: !0
			},
			defaultOption: {
				show: !0,
				zlevel: 0,
				z: 4,
				min: 0,
				max: 200,
				dimension: null,
				inRange: null,
				outOfRange: null,
				left: 0,
				right: null,
				top: null,
				bottom: 0,
				itemWidth: null,
				itemHeight: null,
				inverse: !1,
				orient: "vertical",
				seriesIndex: null,
				backgroundColor: "rgba(0,0,0,0)",
				borderColor: "#ccc",
				contentColor: "#5793f3",
				inactiveColor: "#aaa",
				borderWidth: 0,
				padding: 5,
				textGap: 10,
				precision: 0,
				color: ["#bf444c", "#d88273", "#f6efa6"],
				formatter: null,
				text: null,
				textStyle: {
					color: "#333"
				}
			},
			init: function(t, e, i) {
				this._autoSeriesIndex = !1, this._dataExtent, this.controllerVisuals = {}, this.targetVisuals = {}, this.textStyleModel, this.itemSize, this.mergeDefaultAndTheme(t, i), this.doMergeOption({}, !0)
			},
			mergeOption: function(t) {
				this.$superApply("mergeOption", arguments), this.doMergeOption(t, !1)
			},
			doMergeOption: function(t, e) {
				var n = this.option;
				i.canvasSupported || (n.realtime = !1), this.textStyleModel = this.getModel("textStyle"), this.resetItemSize(), this.completeVisualOption()
			},
			formatValueText: function(t, i) {
				function n(t) {
					return t === l[0] ? "min" : t === l[1] ? "max" : (+t).toFixed(s)
				}
				var r, o, a = this.option,
					s = a.precision,
					l = this.dataBound,
					u = a.formatter;
				return e.isArray(t) && (t = t.slice(), r = !0), o = i ? t : r ? [n(t[0]), n(t[1])] : n(t), e.isString(u) ? u.replace("{value}", r ? o[0] : o).replace("{value2}", r ? o[1] : o) : e.isFunction(u) ? r ? u(t[0], t[1]) : u(t) : r ? t[0] === l[0] ? "< " + o[1] : t[1] === l[1] ? "> " + o[0] : o[0] + " - " + o[1] : o
			},
			resetTargetSeries: function(t, e) {
				var i = this.option,
					n = this._autoSeriesIndex = null == (e ? i : t).seriesIndex;
				i.seriesIndex = n ? [] : r.normalizeToArray(i.seriesIndex), n && this.ecModel.eachSeries(function(t, e) {
					var n = t.getData();
					"list" === n.type && i.seriesIndex.push(e)
				})
			},
			resetExtent: function() {
				var t = this.option,
					e = d([t.min, t.max]);
				this._dataExtent = e
			},
			getDataDimension: function(t) {
				var e = this.option.dimension;
				return null != e ? e : t.dimensions.length - 1
			},
			getExtent: function() {
				return this._dataExtent.slice()
			},
			resetVisual: function(t) {
				function e(e, n) {
					h(this.stateList, function(r) {
						var o = n[r] || (n[r] = {}),
							s = this.option[e][r] || {};
						h(s, function(e, n) {
							if (a.isValidType(n)) {
								var s = {
									type: n,
									dataExtent: i,
									visual: e
								};
								t && t.call(this, s, r), o[n] = new a(s)
							}
						}, this)
					}, this)
				}
				var i = this.getExtent();
				e.call(this, "controller", this.controllerVisuals), e.call(this, "target", this.targetVisuals)
			},
			completeVisualOption: function() {
				function t(t) {
					c(r.color) && !t.inRange && (t.inRange = {
						color: r.color.slice().reverse()
					}), h(this.stateList, function(i) {
						var n = t[i];
						if (e.isString(n)) {
							var r = o.get(n, "active", m);
							r ? (t[i] = {}, t[i][n] = r) : delete t[i]
						}
					}, this)
				}
				function i(t, e, i) {
					var n = t[e],
						r = t[i];
					n && !r && (r = t[i] = {}, h(n, function(t, e) {
						var i = o.get(e, "inactive", m);
						a.isValidType(e) && i && (r[e] = i)
					}))
				}
				function n(t) {
					var i = (t.inRange || {}).symbol || (t.outOfRange || {}).symbol,
						n = (t.inRange || {}).symbolSize || (t.outOfRange || {}).symbolSize,
						r = this.get("inactiveColor");
					h(this.stateList, function(o) {
						var a = this.itemSize,
							u = t[o];
						u || (u = t[o] = {
							color: m ? r : [r]
						}), u.symbol || (u.symbol = i && e.clone(i) || (m ? "roundRect" : ["roundRect"])), u.symbolSize || (u.symbolSize = n && e.clone(n) || (m ? a[0] : [a[0], a[0]])), u.symbol = s(u.symbol, function(t) {
							return "none" === t || "square" === t ? "roundRect" : t
						});
						var c = u.symbolSize;
						if (c) {
							var h = -(1 / 0);
							l(c, function(t) {
								t > h && (h = t)
							}), u.symbolSize = s(c, function(t) {
								return p(t, [0, h], [0, a[0]], !0)
							})
						}
					}, this)
				}
				var r = this.option,
					u = {
						inRange: r.inRange,
						outOfRange: r.outOfRange
					},
					d = r.target || (r.target = {}),
					f = r.controller || (r.controller = {});
				e.merge(d, u), e.merge(f, u);
				var m = this.isCategory();
				t.call(this, d), t.call(this, f), i.call(this, d, "inRange", "outOfRange"), i.call(this, d, "outOfRange", "inRange"), n.call(this, f)
			},
			eachTargetSeries: function(t, i) {
				e.each(this.option.seriesIndex, function(e) {
					t.call(i, this.ecModel.getSeriesByIndex(e))
				}, this)
			},
			isCategory: function() {
				return !!this.option.categories
			},
			resetItemSize: function() {
				this.itemSize = [parseFloat(this.get("itemWidth")), parseFloat(this.get("itemHeight"))]
			},
			setSelected: e.noop,
			getValueState: e.noop
		})
	}), e("echarts/component/visualMap/ContinuousModel", ["require", "./VisualMapModel", "zrender/core/util", "../../util/number"], function(t) {
		var e = t("./VisualMapModel"),
			i = t("zrender/core/util"),
			n = t("../../util/number"),
			r = [20, 140];
		return e.extend({
			type: "visualMap.continuous",
			defaultOption: {
				handlePosition: "auto",
				calculable: !1,
				range: [-(1 / 0), 1 / 0],
				hoverLink: !0,
				realtime: !0,
				itemWidth: null,
				itemHeight: null
			},
			doMergeOption: function(t, e) {
				this.$superApply("doMergeOption", arguments), this.resetTargetSeries(t, e), this.resetExtent(), this.resetVisual(function(t) {
					t.mappingMethod = "linear"
				}), this._resetRange()
			},
			resetItemSize: function() {
				e.prototype.resetItemSize.apply(this, arguments);
				var t = this.itemSize;
				"horizontal" === this._orient && t.reverse(), (null == t[0] || isNaN(t[0])) && (t[0] = r[0]), (null == t[1] || isNaN(t[1])) && (t[1] = r[1])
			},
			_resetRange: function() {
				var t = this.getExtent(),
					e = this.option.range;
				e[0] > e[1] && e.reverse(), e[0] = Math.max(e[0], t[0]), e[1] = Math.min(e[1], t[1])
			},
			completeVisualOption: function() {
				e.prototype.completeVisualOption.apply(this, arguments), i.each(this.stateList, function(t) {
					var e = this.option.controller[t].symbolSize;
					e && e[0] !== e[1] && (e[0] = 0)
				}, this)
			},
			setSelected: function(t) {
				this.option.range = t.slice(), this._resetRange()
			},
			getSelected: function() {
				var t = this.getExtent(),
					e = n.asc((this.get("range") || []).slice());
				return e[0] > t[1] && (e[0] = t[1]), e[1] > t[1] && (e[1] = t[1]), e[0] < t[0] && (e[0] = t[0]), e[1] < t[0] && (e[1] = t[0]), e
			},
			getValueState: function(t) {
				var e = this.option.range,
					i = this.getExtent();
				return (e[0] <= i[0] || e[0] <= t) && (e[1] >= i[1] || t <= e[1]) ? "inRange" : "outOfRange"
			}
		})
	}), e("echarts/component/visualMap/VisualMapView", ["require", "../../echarts", "zrender/core/util", "../../util/graphic", "../../util/format", "../../util/layout", "../../visual/VisualMapping"], function(t) {
		var e = t("../../echarts"),
			i = t("zrender/core/util"),
			n = t("../../util/graphic"),
			r = t("../../util/format"),
			o = t("../../util/layout"),
			a = t("../../visual/VisualMapping");
		return e.extendComponentView({
			type: "visualMap",
			autoPositionValues: {
				left: 1,
				right: 1,
				top: 1,
				bottom: 1
			},
			init: function(t, e) {
				this.ecModel = t, this.api = e, this.visualMapModel, this._updatableShapes = {}
			},
			render: function(t, e, i, n) {
				return this.visualMapModel = t, t.get("show") === !1 ? void this.group.removeAll() : void this.doRender.apply(this, arguments)
			},
			renderBackground: function(t) {
				var e = this.visualMapModel,
					i = r.normalizeCssArray(e.get("padding") || 0),
					o = t.getBoundingRect();
				t.add(new n.Rect({
					z2: -1,
					silent: !0,
					shape: {
						x: o.x - i[3],
						y: o.y - i[0],
						width: o.width + i[3] + i[1],
						height: o.height + i[0] + i[2]
					},
					style: {
						fill: e.get("backgroundColor"),
						stroke: e.get("borderColor"),
						lineWidth: e.get("borderWidth")
					}
				}))
			},
			getControllerVisual: function(t, e, n) {
				function r(t) {
					return h[t]
				}
				function o(t, e) {
					h[t] = e
				}
				var s = this.visualMapModel,
					l = i.isArray(t);
				if (l && (!e || "color" !== n)) throw new Error(t);
				var u = s.controllerVisuals[e || s.getValueState(t)],
					c = s.get("contentColor"),
					h = {
						symbol: s.get("itemSymbol"),
						color: l ? [{
							color: c,
							offset: 0
						}, {
							color: c,
							offset: 1
						}] : c
					},
					d = a.prepareVisualTypes(u);
				return i.each(d, function(e) {
					var i = u[e];
					(!n || a.isInVisualCluster(e, n)) && i && i.applyVisual(t, r, o)
				}), h
			},
			positionGroup: function(t) {
				var e = this.visualMapModel,
					i = this.api;
				o.positionGroup(t, e.getBoxLayoutParams(), {
					width: i.getWidth(),
					height: i.getHeight()
				})
			},
			doRender: i.noop
		})
	}), e("echarts/component/visualMap/helper", ["require", "../../util/layout"], function(t) {
		var e = t("../../util/layout"),
			i = {
				getItemAlign: function(t, i, n) {
					var r = t.option,
						o = r.align;
					if (null != o && "auto" !== o) return o;
					for (var a = {
						width: i.getWidth(),
						height: i.getHeight()
					}, s = "horizontal" === r.orient ? 1 : 0, l = [
						["left", "right", "width"],
						["top", "bottom", "height"]
					], u = l[s], c = [0, null, 10], h = {}, d = 0; 3 > d; d++) h[l[1 - s][d]] = c[d], h[u[d]] = 2 === d ? n[0] : r[u[d]];
					var p = [
						["x", "width", 3],
						["y", "height", 0]
					][s],
						f = e.getLayoutRect(h, a, r.padding);
					return u[(f.margin[p[2]] || 0) + f[p[0]] + .5 * f[p[1]] < .5 * a[p[1]] ? 0 : 1]
				}
			};
		return i
	}), e("echarts/component/visualMap/ContinuousView", ["require", "./VisualMapView", "../../util/graphic", "zrender/core/util", "../../util/number", "../helper/sliderMove", "zrender/graphic/LinearGradient", "./helper"], function(t) {
		function e(t, e, i) {
			return new r.Polygon({
				shape: {
					points: t
				},
				draggable: !! e,
				cursor: i,
				drift: e
			})
		}
		function i(t, e) {
			return 0 === t ? [
				[0, 0],
				[e, 0],
				[e, -e]
			] : [
				[0, 0],
				[e, 0],
				[e, e]
			]
		}
		var n = t("./VisualMapView"),
			r = t("../../util/graphic"),
			o = t("zrender/core/util"),
			a = t("../../util/number"),
			s = t("../helper/sliderMove"),
			l = a.linearMap,
			u = t("zrender/graphic/LinearGradient"),
			c = t("./helper"),
			h = o.each,
			d = n.extend({
				type: "visualMap.continuous",
				init: function() {
					n.prototype.init.apply(this, arguments), this._shapes = {}, this._dataInterval = [], this._handleEnds = [], this._orient, this._useHandle
				},
				doRender: function(t, e, i, n) {
					n && "selectDataRange" === n.type && n.from === this.uid ? this._updateView() : this._buildView()
				},
				_buildView: function() {
					this.group.removeAll();
					var t = this.visualMapModel,
						e = this.group;
					this._orient = t.get("orient"), this._useHandle = t.get("calculable"), this._resetInterval(), this._renderBar(e);
					var i = t.get("text");
					this._renderEndsText(e, i, 0), this._renderEndsText(e, i, 1), this._updateView(!0), this.renderBackground(e), this._updateView(), this.positionGroup(e)
				},
				_renderEndsText: function(t, e, i) {
					if (e) {
						var n = e[1 - i];
						n = null != n ? n + "" : "";
						var o = this.visualMapModel,
							a = o.get("textGap"),
							s = o.itemSize,
							l = this._shapes.barGroup,
							u = this._applyTransform([s[0] / 2, 0 === i ? -a : s[1] + a], l),
							c = this._applyTransform(0 === i ? "bottom" : "top", l),
							h = this._orient,
							d = this.visualMapModel.textStyleModel;
						this.group.add(new r.Text({
							style: {
								x: u[0],
								y: u[1],
								textBaseline: "horizontal" === h ? "middle" : c,
								textAlign: "horizontal" === h ? c : "center",
								text: n,
								textFont: d.getFont(),
								fill: d.getTextColor()
							}
						}))
					}
				},
				_renderBar: function(t) {
					var i = this.visualMapModel,
						n = this._shapes,
						r = i.itemSize,
						a = this._orient,
						s = this._useHandle,
						l = c.getItemAlign(i, this.api, r),
						u = n.barGroup = this._createBarGroup(l);
					u.add(n.outOfRange = e()), u.add(n.inRange = e(null, o.bind(this._modifyHandle, this, "all"), s ? "move" : null));
					var h = i.textStyleModel.getTextRect("国"),
						d = Math.max(h.width, h.height);
					s && (n.handleGroups = [], n.handleThumbs = [], n.handleLabels = [], n.handleLabelPoints = [], this._createHandle(u, 0, r, d, a, l), this._createHandle(u, 1, r, d, a, l)), t.add(u)
				},
				_createHandle: function(t, n, a, s, l) {
					var u = new r.Group({
						position: [a[0], 0]
					}),
						c = e(i(n, s), o.bind(this._modifyHandle, this, n), "move");
					u.add(c);
					var h = {
						x: "horizontal" === l ? s / 2 : 1.5 * s,
						y: "horizontal" === l ? 0 === n ? -(1.5 * s) : 1.5 * s : 0 === n ? -s / 2 : s / 2
					},
						d = this.visualMapModel.textStyleModel,
						p = new r.Text({
							silent: !0,
							style: {
								x: 0,
								y: 0,
								text: "",
								textBaseline: "middle",
								textFont: d.getFont(),
								fill: d.getTextColor()
							}
						});
					this.group.add(p);
					var f = this._shapes;
					f.handleThumbs[n] = c, f.handleGroups[n] = u, f.handleLabelPoints[n] = h, f.handleLabels[n] = p, t.add(u)
				},
				_modifyHandle: function(t, e, i) {
					if (this._useHandle) {
						var n = this._applyTransform([e, i], this._shapes.barGroup, !0);
						this._updateInterval(t, n[1]), this.api.dispatchAction({
							type: "selectDataRange",
							from: this.uid,
							visualMapId: this.visualMapModel.id,
							selected: this._dataInterval.slice()
						})
					}
				},
				_resetInterval: function() {
					var t = this.visualMapModel,
						e = this._dataInterval = t.getSelected();
					this._handleEnds = l(e, t.getExtent(), [0, t.itemSize[1]], !0)
				},
				_updateInterval: function(t, e) {
					e = e || 0;
					var i = this.visualMapModel,
						n = this._handleEnds;
					s(e, n, [0, i.itemSize[1]], "all" === t ? "rigid" : "push", t), this._dataInterval = l(n, [0, i.itemSize[1]], i.getExtent(), !0)
				},
				_updateView: function(t) {
					var e = this.visualMapModel,
						i = e.getExtent(),
						n = this._shapes,
						r = this._dataInterval,
						o = [0, e.itemSize[1]],
						a = t ? o : this._handleEnds,
						s = this._createBarVisual(r, i, a, "inRange"),
						l = this._createBarVisual(i, i, o, "outOfRange");
					n.inRange.setStyle("fill", s.barColor).setShape("points", s.barPoints), n.outOfRange.setStyle("fill", l.barColor).setShape("points", l.barPoints), this._useHandle && h([0, 1], function(t) {
						n.handleThumbs[t].setStyle("fill", s.handlesColor[t]), n.handleLabels[t].setStyle({
							text: e.formatValueText(r[t]),
							textAlign: this._applyTransform("horizontal" === this._orient ? 0 === t ? "bottom" : "top" : "left", n.barGroup)
						})
					}, this), this._updateHandlePosition(a)
				},
				_createBarVisual: function(t, e, i, n) {
					var r = this.getControllerVisual(t, n, "color").color,
						o = [this.getControllerVisual(t[0], n, "symbolSize").symbolSize, this.getControllerVisual(t[1], n, "symbolSize").symbolSize],
						a = this._createBarPoints(i, o);
					return {
						barColor: new u(0, 0, 1, 1, r),
						barPoints: a,
						handlesColor: [r[0].color, r[r.length - 1].color]
					}
				},
				_createBarPoints: function(t, e) {
					var i = this.visualMapModel.itemSize;
					return [[i[0] - e[0], t[0]], [i[0], t[0]], [i[0], t[1]], [i[0] - e[1], t[1]]]
				},
				_createBarGroup: function(t) {
					var e = this._orient,
						i = this.visualMapModel.get("inverse");
					return new r.Group("horizontal" !== e || i ? "horizontal" === e && i ? {
						scale: "bottom" === t ? [-1, 1] : [1, 1],
						rotation: -Math.PI / 2
					} : "vertical" !== e || i ? {
						scale: "left" === t ? [1, 1] : [-1, 1]
					} : {
						scale: "left" === t ? [1, -1] : [-1, -1]
					} : {
						scale: "bottom" === t ? [1, 1] : [-1, 1],
						rotation: Math.PI / 2
					})
				},
				_updateHandlePosition: function(t) {
					if (this._useHandle) {
						var e = this._shapes;
						h([0, 1], function(i) {
							var n = e.handleGroups[i];
							n.position[1] = t[i];
							var o = e.handleLabelPoints[i],
								a = r.applyTransform([o.x, o.y], r.getTransform(n, this.group));
							e.handleLabels[i].setStyle({
								x: a[0],
								y: a[1]
							})
						}, this)
					}
				},
				_applyTransform: function(t, e, i) {
					var n = r.getTransform(e, this.group);
					return r[o.isArray(t) ? "applyTransform" : "transformDirection"](t, n, i)
				}
			});
		return d
	}), e("echarts/component/visualMap/visualMapAction", ["require", "../../echarts"], function(t) {
		var e = t("../../echarts"),
			i = {
				type: "selectDataRange",
				event: "dataRangeSelected",
				update: "update"
			};
		e.registerAction(i, function(t, e) {
			e.eachComponent({
				mainType: "visualMap",
				query: t
			}, function(e) {
				e.setSelected(t.selected)
			})
		})
	}), e("echarts/component/visualMapContinuous", ["require", "../echarts", "./visualMap/preprocessor", "./visualMap/typeDefaulter", "./visualMap/visualCoding", "./visualMap/ContinuousModel", "./visualMap/ContinuousView", "./visualMap/visualMapAction"], function(t) {
		t("../echarts").registerPreprocessor(t("./visualMap/preprocessor")), t("./visualMap/typeDefaulter"), t("./visualMap/visualCoding"), t("./visualMap/ContinuousModel"), t("./visualMap/ContinuousView"), t("./visualMap/visualMapAction")
	}), e("echarts/component/visualMap/PiecewiseModel", ["require", "./VisualMapModel", "zrender/core/util", "../../visual/VisualMapping"], function(t) {
		function e(t, e) {
			var i = t.inverse;
			("vertical" === t.orient ? !i : i) && e.reverse()
		}
		var i = t("./VisualMapModel"),
			n = t("zrender/core/util"),
			r = t("../../visual/VisualMapping"),
			o = i.extend({
				type: "visualMap.piecewise",
				defaultOption: {
					selected: null,
					align: "auto",
					itemWidth: 20,
					itemHeight: 14,
					itemSymbol: "roundRect",
					pieceList: null,
					categories: null,
					splitNumber: 5,
					selectedMode: "multiple",
					itemGap: 10
				},
				doMergeOption: function(t, e) {
					this.$superApply("doMergeOption", arguments), this._pieceList = [], this.resetTargetSeries(t, e), this.resetExtent();
					var i = this._mode = this._decideMode();
					a[this._mode].call(this), this._resetSelected(t, e);
					var r = this.option.categories;
					this.resetVisual(function(t, e) {
						"categories" === i ? (t.mappingMethod = "category", t.categories = n.clone(r)) : (t.mappingMethod = "piecewise", t.pieceList = n.map(this._pieceList, function(t) {
							var t = n.clone(t);
							return "inRange" !== e && (t.visual = null), t
						}))
					})
				},
				_resetSelected: function(t, e) {
					var i = this.option,
						r = this._pieceList,
						o = (e ? i : t).selected || {};
					if (i.selected = o, n.each(r, function(t, e) {
						var i = this.getSelectedMapKey(t);
						i in o || (o[i] = !0)
					}, this), "single" === i.selectedMode) {
						var a = !1;
						n.each(r, function(t, e) {
							var i = this.getSelectedMapKey(t);
							o[i] && (a ? o[i] = !1 : a = !0)
						}, this)
					}
				},
				getSelectedMapKey: function(t) {
					return "categories" === this._mode ? t.value + "" : t.index + ""
				},
				getPieceList: function() {
					return this._pieceList
				},
				_decideMode: function() {
					var t = this.option;
					return t.pieces && t.pieces.length > 0 ? "pieces" : this.option.categories ? "categories" : "splitNumber"
				},
				setSelected: function(t) {
					this.option.selected = n.clone(t)
				},
				getValueState: function(t) {
					var e = this._pieceList,
						i = r.findPieceIndex(t, e);
					return null != i && this.option.selected[this.getSelectedMapKey(e[i])] ? "inRange" : "outOfRange"
				}
			}),
			a = {
				splitNumber: function() {
					var t = this.option,
						e = t.precision,
						i = this.getExtent(),
						n = t.splitNumber;
					n = Math.max(parseInt(n, 10), 1), t.splitNumber = n;
					for (var r = (i[1] - i[0]) / n; + r.toFixed(e) !== r && 5 > e;) e++;
					t.precision = e, r = +r.toFixed(e);
					for (var o = 0, a = i[0]; n > o; o++, a += r) {
						var s = o === n - 1 ? i[1] : a + r;
						this._pieceList.push({
							text: this.formatValueText([a, s]),
							index: o,
							interval: [a, s]
						})
					}
				},
				categories: function() {
					var t = this.option;
					n.each(t.categories, function(t) {
						this._pieceList.push({
							text: this.formatValueText(t, !0),
							value: t
						})
					}, this), e(t, this._pieceList)
				},
				pieces: function() {
					var t = this.option;
					n.each(t.pieces, function(t, e) {
						n.isObject(t) || (t = {
							value: t
						});
						var i, o = {
							text: "",
							index: e
						};
						if (null != t.label && (o.text = t.label, i = !0), t.hasOwnProperty("value")) o.value = t.value, i || (o.text = this.formatValueText(o.value));
						else {
							var a = t.min,
								s = t.max;
							null == a && (a = -(1 / 0)), null == s && (s = 1 / 0), a === s && (o.value = a), o.interval = [a, s], i || (o.text = this.formatValueText([a, s]))
						}
						o.visual = r.retrieveVisuals(t), this._pieceList.push(o)
					}, this), e(t, this._pieceList)
				}
			};
		return o
	}), e("echarts/component/visualMap/PiecewiseView", ["require", "./VisualMapView", "zrender/core/util", "../../util/graphic", "../../util/symbol", "../../util/layout", "./helper"], function(t) {
		var e = t("./VisualMapView"),
			i = t("zrender/core/util"),
			n = t("../../util/graphic"),
			r = t("../../util/symbol"),
			o = t("../../util/layout"),
			a = t("./helper"),
			s = e.extend({
				type: "visualMap.piecewise",
				doRender: function() {
					function t(t) {
						var r = new n.Group;
						r.onclick = i.bind(this._onItemClick, this, t.piece), this._createItemSymbol(r, t.piece, [0, 0, h[0], h[1]]), p && r.add(new n.Text({
							style: {
								x: "right" === c ? -a : h[0] + a,
								y: h[1] / 2,
								text: t.piece.text,
								textBaseline: "middle",
								textAlign: c,
								textFont: l,
								fill: u
							}
						})), e.add(r)
					}
					var e = this.group;
					e.removeAll();
					var r = this.visualMapModel,
						a = r.get("textGap"),
						s = r.textStyleModel,
						l = s.getFont(),
						u = s.getTextColor(),
						c = this._getItemAlign(),
						h = r.itemSize,
						d = this._getViewData(),
						p = !d.endsText,
						f = !p;
					f && this._renderEndsText(e, d.endsText[0], h), i.each(d.pieceList, t, this), f && this._renderEndsText(e, d.endsText[1], h), o.box(r.get("orient"), e, r.get("itemGap")), this.renderBackground(e), this.positionGroup(e)
				},
				_getItemAlign: function() {
					var t = this.visualMapModel,
						e = t.option;
					if ("vertical" === e.orient) return a.getItemAlign(t, this.api, t.itemSize);
					var i = e.align;
					return i && "auto" !== i || (i = "left"), i
				},
				_renderEndsText: function(t, e, i) {
					if (e) {
						var r = new n.Group,
							o = this.visualMapModel.textStyleModel;
						r.add(new n.Text({
							style: {
								x: i[0] / 2,
								y: i[1] / 2,
								textBaseline: "middle",
								textAlign: "center",
								text: e,
								textFont: o.getFont(),
								fill: o.getTextColor()
							}
						})), t.add(r)
					}
				},
				_getViewData: function() {
					var t = this.visualMapModel,
						e = i.map(t.getPieceList(), function(t, e) {
							return {
								piece: t,
								index: e
							}
						}),
						n = t.get("text"),
						r = t.get("orient"),
						o = t.get("inverse");
					return ("horizontal" === r ? o : !o) ? e.reverse() : n && (n = n.slice().reverse()), {
						pieceList: e,
						endsText: n
					}
				},
				_createItemSymbol: function(t, e, i) {
					var n;
					if (this.visualMapModel.isCategory()) n = e.value;
					else if (null != e.value) n = e.value;
					else {
						var o = e.interval || [];
						n = (o[0] + o[1]) / 2
					}
					var a = this.getControllerVisual(n);
					t.add(r.createSymbol(a.symbol, i[0], i[1], i[2], i[3], a.color))
				},
				_onItemClick: function(t) {
					var e = this.visualMapModel,
						n = e.option,
						r = i.clone(n.selected),
						o = e.getSelectedMapKey(t);
					"single" === n.selectedMode ? (r[o] = !0, i.each(r, function(t, e) {
						r[e] = e === o
					})) : r[o] = !r[o], this.api.dispatchAction({
						type: "selectDataRange",
						from: this.uid,
						visualMapId: this.visualMapModel.id,
						selected: r
					})
				}
			});
		return s
	}), e("echarts/component/visualMapPiecewise", ["require", "../echarts", "./visualMap/preprocessor", "./visualMap/typeDefaulter", "./visualMap/visualCoding", "./visualMap/PiecewiseModel", "./visualMap/PiecewiseView", "./visualMap/visualMapAction"], function(t) {
		t("../echarts").registerPreprocessor(t("./visualMap/preprocessor")), t("./visualMap/typeDefaulter"), t("./visualMap/visualCoding"), t("./visualMap/PiecewiseModel"), t("./visualMap/PiecewiseView"), t("./visualMap/visualMapAction")
	}), e("echarts/component/visualMap", ["require", "./visualMapContinuous", "./visualMapPiecewise"], function(t) {
		t("./visualMapContinuous"), t("./visualMapPiecewise")
	}), e("echarts/component/marker/MarkPointModel", ["require", "../../model/globalDefault", "../../util/model", "../../echarts"], function(t) {
		var e = t("../../model/globalDefault"),
			i = t("../../util/model");
		e.markPoint = {};
		var n = t("../../echarts").extendComponentModel({
			type: "markPoint",
			dependencies: ["series", "grid", "polar"],
			init: function(t, e, i, n, r) {
				this.mergeDefaultAndTheme(t, i), this.mergeOption(t, r, !0)
			},
			mergeOption: function(t, e, r) {
				if (!e) {
					var o = this.ecModel;
					o.eachSeries(function(t) {
						var e = t.get("markPoint"),
							a = t.markPointModel;
						if (!e || !e.data) return void(t.markPointModel = null);
						if (a) a.mergeOption(e, !0);
						else {
							r && i.defaultEmphasis(e.label, ["position", "show", "textStyle", "distance", "formatter"]);
							var s = {
								seriesIndex: t.seriesIndex,
								name: t.name
							};
							a = new n(e, this, o, s, !0)
						}
						t.markPointModel = a
					}, this)
				}
			},
			defaultOption: {
				zlevel: 0,
				z: 5,
				symbol: "pin",
				symbolSize: 50,
				tooltip: {
					trigger: "item"
				},
				label: {
					normal: {
						show: !0,
						position: "inside"
					},
					emphasis: {
						show: !0
					}
				},
				itemStyle: {
					normal: {
						borderWidth: 2
					},
					emphasis: {}
				}
			}
		});
		return n
	}), e("echarts/component/marker/markerHelper", ["require", "zrender/core/util", "../../util/number"], function(t) {
		function e(t, e, i) {
			var n = -1;
			do n = Math.max(r.getPrecision(t.get(e, i)), n), t = t.stackedOn;
			while (t);
			return n
		}
		function i(t, i, n, r, o) {
			var a = i.getDataExtent(r),
				s = [],
				l = a[0],
				u = a[1],
				c = (u - l) * t + l,
				h = i.indexOfNearest(r, c);
			s[1 - o] = i.get(n, h), s[o] = i.get(r, h, !0);
			var d = e(i, r, h);
			return d >= 0 && (s[o] = +s[o].toFixed(d)), s
		}
		var n = t("zrender/core/util"),
			r = t("../../util/number"),
			o = n.curry,
			a = {
				min: o(i, 0),
				max: o(i, 1),
				average: o(i, .5)
			},
			s = function(t, e, i) {
				if ((isNaN(i.x) || isNaN(i.y)) && !n.isArray(i.coord) && e) {
					var r, o, s, l;
					null != i.valueIndex ? (r = e.dimensions[i.valueIndex], o = e.dimensions[1 - i.valueIndex], s = e.getAxis(r), l = e.getAxis(o)) : (l = e.getBaseAxis(), s = e.getOtherAxis(l), o = l.dim, r = s.dim);
					var u = null != i.valueIndex ? i.valueIndex : "angle" === r || "x" === r ? 0 : 1;
					i = n.extend({}, i), i.type && a[i.type] && l && s ? i.coord = a[i.type](t, l.dim, r, u) : i.coord = [null != i.xAxis ? i.xAxis : i.radiusAxis, null != i.yAxis ? i.yAxis : i.angleAxis]
				}
				return i
			},
			l = function(t, e) {
				return t && e.coord && (null == e.x || null == e.y) ? t.containData(e.coord) : !0
			},
			u = function(t, e, i, n) {
				return 2 > n ? t.coord && t.coord[n] : void t.value
			};
		return {
			dataTransform: s,
			dataFilter: l,
			dimValueGetter: u
		}
	}), e("echarts/component/marker/MarkPointView", ["require", "../../chart/helper/SymbolDraw", "zrender/core/util", "../../util/format", "../../util/model", "../../util/number", "../../data/List", "./markerHelper", "../../echarts"], function(t) {
		function e(t, e, i) {
			var r = e.dimensions,
				o = new u(n.map(r, e.getDimensionInfo, e), i);
			return t && o.initData(n.filter(n.map(i.get("data"), n.curry(c.dataTransform, e, t)), n.curry(c.dataFilter, t)), null, c.dimValueGetter), o
		}
		var i = t("../../chart/helper/SymbolDraw"),
			n = t("zrender/core/util"),
			r = t("../../util/format"),
			o = t("../../util/model"),
			a = t("../../util/number"),
			s = r.addCommas,
			l = r.encodeHTML,
			u = t("../../data/List"),
			c = t("./markerHelper"),
			h = {
				getRawDataArray: function() {
					return this.option.data
				},
				formatTooltip: function(t) {
					var e = this.getData(),
						i = this.getRawValue(t),
						r = n.isArray(i) ? n.map(i, s).join(", ") : s(i),
						o = e.getName(t);
					return this.name + "<br />" + ((o ? l(o) + " : " : "") + r)
				},
				getData: function() {
					return this._data
				},
				setData: function(t) {
					this._data = t
				}
			};
		n.defaults(h, o.dataFormatMixin), t("../../echarts").extendComponentView({
			type: "markPoint",
			init: function() {
				this._symbolDrawMap = {}
			},
			render: function(t, e, i) {
				var n = this._symbolDrawMap;
				for (var r in n) n[r].__keep = !1;
				e.eachSeries(function(t) {
					var e = t.markPointModel;
					e && this._renderSeriesMP(t, e, i)
				}, this);
				for (var r in n) n[r].__keep || (n[r].remove(), this.group.remove(n[r].group))
			},
			_renderSeriesMP: function(t, r, o) {
				var s = t.coordinateSystem,
					l = t.name,
					u = t.getData(),
					c = this._symbolDrawMap,
					d = c[l];
				d || (d = c[l] = new i);
				var p = e(s, u, r),
					f = s && s.dimensions;
				n.mixin(r, h), r.setData(p), p.each(function(t) {
					var e, i = p.getItemModel(t),
						n = i.getShallow("x"),
						l = i.getShallow("y");
					if (null != n && null != l) e = [a.parsePercent(n, o.getWidth()), a.parsePercent(l, o.getHeight())];
					else if (s) {
						var c = p.get(f[0], t),
							h = p.get(f[1], t);
						e = s.dataToPoint([c, h])
					}
					p.setItemLayout(t, e);
					var d = i.getShallow("symbolSize");
					"function" == typeof d && (d = d(r.getRawValue(t), r.getDataParams(t))), p.setItemVisual(t, {
						symbolSize: d,
						color: i.get("itemStyle.normal.color") || u.getVisual("color"),
						symbol: i.getShallow("symbol")
					})
				}), d.updateData(p), this.group.add(d.group), p.eachItemGraphicEl(function(t) {
					t.traverse(function(t) {
						t.hostModel = r
					})
				}), d.__keep = !0
			}
		})
	}), e("echarts/component/markPoint", ["require", "./marker/MarkPointModel", "./marker/MarkPointView"], function(t) {
		t("./marker/MarkPointModel"), t("./marker/MarkPointView")
	}), e("echarts/component/marker/MarkLineModel", ["require", "../../model/globalDefault", "../../util/model", "../../echarts"], function(t) {
		var e = t("../../model/globalDefault"),
			i = t("../../util/model");
		e.markLine = {};
		var n = t("../../echarts").extendComponentModel({
			type: "markLine",
			dependencies: ["series", "grid", "polar"],
			init: function(t, e, i, n, r) {
				this.mergeDefaultAndTheme(t, i), this.mergeOption(t, r, !0)
			},
			mergeOption: function(t, e, r) {
				if (!e) {
					var o = this.ecModel;
					o.eachSeries(function(t) {
						var e = t.get("markLine"),
							a = t.markLineModel;
						if (!e || !e.data) return void(t.markLineModel = null);
						if (a) a.mergeOption(e, !0);
						else {
							r && i.defaultEmphasis(e.label, ["position", "show", "textStyle", "distance", "formatter"]);
							var s = {
								seriesIndex: t.seriesIndex,
								name: t.name
							};
							a = new n(e, this, o, s, !0)
						}
						t.markLineModel = a
					}, this)
				}
			},
			defaultOption: {
				zlevel: 0,
				z: 5,
				symbol: ["circle", "arrow"],
				symbolSize: [8, 16],
				precision: 2,
				tooltip: {
					trigger: "item"
				},
				label: {
					normal: {
						show: !0,
						position: "end"
					},
					emphasis: {
						show: !0
					}
				},
				lineStyle: {
					normal: {
						type: "dashed"
					},
					emphasis: {
						width: 3
					}
				},
				animationEasing: "linear"
			}
		});
		return n
	}), e("echarts/component/marker/MarkLineView", ["require", "zrender/core/util", "../../data/List", "../../util/format", "../../util/model", "../../util/number", "./markerHelper", "../../chart/helper/LineDraw", "../../echarts"], function(t) {
		function e(t, e) {
			return c.dataFilter(t, e[0]) && c.dataFilter(t, e[1])
		}
		function i(t, i, o) {
			var a = t.dimensions,
				s = new r(a, o),
				l = new r(a, o),
				u = new r([], o);
			if (t) {
				var h = t.getBaseAxis(),
					p = t.getOtherAxis(h),
					f = n.filter(n.map(o.get("data"), n.curry(d, i, t, h, p)), n.curry(e, t));
				s.initData(n.map(f, function(t) {
					return t[0]
				}), null, c.dimValueGetter), l.initData(n.map(f, function(t) {
					return t[1]
				}), null, c.dimValueGetter), u.initData(n.map(f, function(t) {
					return t[2]
				}))
			}
			return {
				from: s,
				to: l,
				line: u
			}
		}
		var n = t("zrender/core/util"),
			r = t("../../data/List"),
			o = t("../../util/format"),
			a = t("../../util/model"),
			s = t("../../util/number"),
			l = o.addCommas,
			u = o.encodeHTML,
			c = t("./markerHelper"),
			h = t("../../chart/helper/LineDraw"),
			d = function(t, e, i, r, o) {
				var a = o.type;
				if (!n.isArray(o) && "min" === a || "max" === a || "average" === a) {
					null != o.valueIndex && (i = e.getAxis(e.dimensions[1 - o.valueIndex]), r = e.getAxis(e.dimensions[o.valueIndex]));
					var s = i.dim + "Axis",
						l = r.dim + "Axis",
						u = i.scale.getExtent(),
						h = n.extend({}, o),
						d = {},
						p = t.getDataExtent(r.dim, !0);
					h.type = null, h[s] = u[0], d[s] = u[1];
					var f = "average" === a ? .5 : "max" === a ? 1 : 0,
						m = (p[1] - p[0]) * f + p[0];
					m = r.coordToData(r.dataToCoord(m)), h[l] = d[l] = m, o = [h, d,
					{
						type: a
					}]
				}
				return o = [c.dataTransform(t, e, o[0]), c.dataTransform(t, e, o[1]),
				{}], n.merge(o[2], o[0]), n.merge(o[2], o[1]), o
			},
			p = {
				formatTooltip: function(t) {
					var e = this._data,
						i = this.getRawValue(t),
						r = n.isArray(i) ? n.map(i, l).join(", ") : l(i),
						o = e.getName(t);
					return this.name + "<br />" + ((o ? u(o) + " : " : "") + r)
				},
				getRawDataArray: function() {
					return this.option.data
				},
				getData: function() {
					return this._data
				},
				setData: function(t) {
					this._data = t
				}
			};
		n.defaults(p, a.dataFormatMixin), t("../../echarts").extendComponentView({
			type: "markLine",
			init: function() {
				this._markLineMap = {}
			},
			render: function(t, e, i) {
				var n = this._markLineMap;
				for (var r in n) n[r].__keep = !1;
				e.eachSeries(function(t) {
					var n = t.markLineModel;
					n && this._renderSeriesML(t, n, e, i)
				}, this);
				for (var r in n) n[r].__keep || this.group.remove(n[r].group)
			},
			_renderSeriesML: function(t, e, r, o) {
				function a(t, e, i) {
					var n, r = t.getItemModel(e),
						a = r.get("x"),
						u = r.get("y");
					if (null != a && null != u) n = [s.parsePercent(a, o.getWidth()), s.parsePercent(u, o.getHeight())];
					else {
						var h = t.get(g[0], e),
							d = t.get(g[1], e);
						n = l.dataToPoint([h, d])
					}
					t.setItemLayout(e, n), t.setItemVisual(e, {
						symbolSize: r.get("symbolSize") || b[i ? 0 : 1],
						symbol: r.get("symbol", !0) || x[i ? 0 : 1],
						color: r.get("itemStyle.normal.color") || c.getVisual("color")
					})
				}
				var l = t.coordinateSystem,
					u = t.name,
					c = t.getData(),
					d = this._markLineMap,
					f = d[u];
				f || (f = d[u] = new h), this.group.add(f.group);
				var m = i(l, c, e),
					g = l.dimensions,
					v = m.from,
					y = m.to,
					_ = m.line;
				n.extend(e, p), e.setData(_);
				var x = e.get("symbol"),
					b = e.get("symbolSize");
				n.isArray(x) || (x = [x, x]), "number" == typeof b && (b = [b, b]), m.from.each(function(t) {
					a(v, t, !0), a(y, t)
				}), _.each(function(t) {
					var e = _.getItemModel(t).get("lineStyle.normal.color");
					_.setItemVisual(t, {
						color: e || v.getItemVisual(t, "color")
					}), _.setItemLayout(t, [v.getItemLayout(t), y.getItemLayout(t)])
				}), f.updateData(_, v, y), m.line.eachItemGraphicEl(function(t, i) {
					t.traverse(function(t) {
						t.hostModel = e
					})
				}), f.__keep = !0
			}
		})
	}), e("echarts/component/markLine", ["require", "./marker/MarkLineModel", "./marker/MarkLineView"], function(t) {
		t("./marker/MarkLineModel"), t("./marker/MarkLineView")
	}), e("echarts/component/timeline/preprocessor", ["require", "zrender/core/util"], function(t) {
		function e(t) {
			var e = t.type,
				o = {
					number: "value",
					time: "time"
				};
			if (o[e] && (t.axisType = o[e], delete t.type), i(t), n(t, "controlPosition")) {
				var a = t.controlStyle || (t.controlStyle = {});
				n(a, "position") || (a.position = t.controlPosition), "none" !== a.position || n(a, "show") || (a.show = !1, delete a.position), delete t.controlPosition
			}
			r.each(t.data || [], function(t) {
				r.isObject(t) && !r.isArray(t) && (!n(t, "value") && n(t, "name") && (t.value = t.name), i(t))
			})
		}
		function i(t) {
			var e = t.itemStyle || (t.itemStyle = {}),
				i = e.emphasis || (e.emphasis = {}),
				o = (e.normal || (e.normal = {}), t.label || t.label || {}),
				a = o.normal || (o.normal = {}),
				s = {
					normal: 1,
					emphasis: 1
				};
			r.each(o, function(t, e) {
				s[e] || n(a, e) || (a[e] = t)
			}), i.label && !n(o, "emphasis") && (o.emphasis = i.label, delete i.label)
		}
		function n(t, e) {
			return t.hasOwnProperty(e)
		}
		var r = t("zrender/core/util");
		return function(t) {
			var i = t && t.timeline;
			r.isArray(i) || (i = i ? [i] : []), r.each(i, function(t) {
				t && e(t)
			})
		}
	}), e("echarts/component/timeline/typeDefaulter", ["require", "../../model/Component"], function(t) {
		t("../../model/Component").registerSubTypeDefaulter("timeline", function() {
			return "slider"
		})
	}), e("echarts/component/timeline/timelineAction", ["require", "../../echarts"], function(t) {
		var e = t("../../echarts");
		e.registerAction({
			type: "timelineChange",
			event: "timelineChanged",
			update: "prepareAndUpdate"
		}, function(t, e) {
			var i = e.getComponent("timeline");
			i && null != t.currentIndex && (i.setCurrentIndex(t.currentIndex), !i.get("loop", !0) && i.isIndexMax() && i.setPlayState(!1)), e.resetOption("timeline")
		}), e.registerAction({
			type: "timelinePlayChange",
			event: "timelinePlayChanged",
			update: "update"
		}, function(t, e) {
			var i = e.getComponent("timeline");
			i && null != t.playState && i.setPlayState(t.playState)
		})
	}), e("echarts/component/timeline/TimelineModel", ["require", "../../model/Component", "../../data/List", "zrender/core/util", "../../util/model"], function(t) {
		var e = t("../../model/Component"),
			i = t("../../data/List"),
			n = t("zrender/core/util"),
			r = t("../../util/model"),
			o = e.extend({
				type: "timeline",
				layoutMode: "box",
				defaultOption: {
					zlevel: 0,
					z: 4,
					show: !0,
					axisType: "time",
					realtime: !0,
					left: "20%",
					top: null,
					right: "20%",
					bottom: 0,
					width: null,
					height: 40,
					padding: 5,
					controlPosition: "left",
					autoPlay: !1,
					rewind: !1,
					loop: !0,
					playInterval: 2e3,
					currentIndex: 0,
					itemStyle: {
						normal: {},
						emphasis: {}
					},
					label: {
						normal: {
							textStyle: {
								color: "#000"
							}
						},
						emphasis: {}
					},
					data: []
				},
				init: function(t, e, i) {
					this._data, this._names, this.mergeDefaultAndTheme(t, i), this._initData()
				},
				mergeOption: function(t) {
					this.$superApply("mergeOption", arguments), this._initData()
				},
				setCurrentIndex: function(t) {
					null == t && (t = this.option.currentIndex);
					var e = this._data.count();
					this.option.loop ? t = (t % e + e) % e : (t >= e && (t = e - 1), 0 > t && (t = 0)), this.option.currentIndex = t
				},
				getCurrentIndex: function() {
					return this.option.currentIndex
				},
				isIndexMax: function() {
					return this.getCurrentIndex() >= this._data.count() - 1
				},
				setPlayState: function(t) {
					this.option.autoPlay = !! t
				},
				getPlayState: function() {
					return !!this.option.autoPlay
				},
				_initData: function() {
					var t = this.option,
						e = t.data || [],
						o = t.axisType,
						a = this._names = [];
					if ("category" === o) {
						var s = [];
						n.each(e, function(t, e) {
							var i, o = r.getDataItemValue(t);
							n.isObject(t) ? (i = n.clone(t), i.value = e) : i = e, s.push(i), n.isString(o) || null != o && !isNaN(o) || (o = ""), a.push(o + "")
						}), e = s
					}
					var l = {
						category: "ordinal",
						time: "time"
					}[o] || "number",
						u = this._data = new i([{
							name: "value",
							type: l
						}], this);
					u.initData(e, a)
				},
				getData: function() {
					return this._data
				},
				getCategories: function() {
					return "category" === this.get("axisType") ? this._names.slice() : void 0
				}
			});
		return o
	}), e("echarts/component/timeline/SliderTimelineModel", ["require", "./TimelineModel"], function(t) {
		var e = t("./TimelineModel");
		return e.extend({
			type: "timeline.slider",
			defaultOption: {
				backgroundColor: "rgba(0,0,0,0)",
				borderColor: "#ccc",
				borderWidth: 0,
				orient: "horizontal",
				inverse: !1,
				tooltip: !1,
				symbol: "emptyCircle",
				symbolSize: 10,
				lineStyle: {
					show: !0,
					width: 2,
					color: "#304654"
				},
				label: {
					position: "auto",
					normal: {
						show: !0,
						interval: "auto",
						rotate: 0,
						textStyle: {
							color: "#304654"
						}
					},
					emphasis: {
						show: !0,
						textStyle: {
							color: "#c23531"
						}
					}
				},
				itemStyle: {
					normal: {
						color: "#304654",
						borderWidth: 1
					},
					emphasis: {
						color: "#c23531"
					}
				},
				checkpointStyle: {
					symbol: "circle",
					symbolSize: 13,
					color: "#c23531",
					borderWidth: 5,
					borderColor: "rgba(194,53,49, 0.5)",
					animation: !0,
					animationDuration: 300,
					animationEasing: "quinticInOut"
				},
				controlStyle: {
					show: !0,
					showPlayBtn: !0,
					showPrevBtn: !0,
					showNextBtn: !0,
					itemSize: 22,
					itemGap: 12,
					position: "left",
					playIcon: "path://M31.6,53C17.5,53,6,41.5,6,27.4S17.5,1.8,31.6,1.8C45.7,1.8,57.2,13.3,57.2,27.4S45.7,53,31.6,53z M31.6,3.3 C18.4,3.3,7.5,14.1,7.5,27.4c0,13.3,10.8,24.1,24.1,24.1C44.9,51.5,55.7,40.7,55.7,27.4C55.7,14.1,44.9,3.3,31.6,3.3z M24.9,21.3 c0-2.2,1.6-3.1,3.5-2l10.5,6.1c1.899,1.1,1.899,2.9,0,4l-10.5,6.1c-1.9,1.1-3.5,0.2-3.5-2V21.3z",
					stopIcon: "path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z",
					nextIcon: "path://M18.6,50.8l22.5-22.5c0.2-0.2,0.3-0.4,0.3-0.7c0-0.3-0.1-0.5-0.3-0.7L18.7,4.4c-0.1-0.1-0.2-0.3-0.2-0.5 c0-0.4,0.3-0.8,0.8-0.8c0.2,0,0.5,0.1,0.6,0.3l23.5,23.5l0,0c0.2,0.2,0.3,0.4,0.3,0.7c0,0.3-0.1,0.5-0.3,0.7l-0.1,0.1L19.7,52 c-0.1,0.1-0.3,0.2-0.5,0.2c-0.4,0-0.8-0.3-0.8-0.8C18.4,51.2,18.5,51,18.6,50.8z",
					prevIcon: "path://M43,52.8L20.4,30.3c-0.2-0.2-0.3-0.4-0.3-0.7c0-0.3,0.1-0.5,0.3-0.7L42.9,6.4c0.1-0.1,0.2-0.3,0.2-0.5 c0-0.4-0.3-0.8-0.8-0.8c-0.2,0-0.5,0.1-0.6,0.3L18.3,28.8l0,0c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.3,0.1,0.5,0.3,0.7l0.1,0.1L41.9,54 c0.1,0.1,0.3,0.2,0.5,0.2c0.4,0,0.8-0.3,0.8-0.8C43.2,53.2,43.1,53,43,52.8z",
					normal: {
						color: "#304654",
						borderColor: "#304654",
						borderWidth: 1
					},
					emphasis: {
						color: "#c23531",
						borderColor: "#c23531",
						borderWidth: 2
					}
				},
				data: []
			}
		})
	}), e("echarts/component/timeline/TimelineView", ["require", "../../view/Component"], function(t) {
		var e = t("../../view/Component");
		return e.extend({
			type: "timeline"
		})
	}), e("echarts/component/timeline/TimelineAxis", ["require", "zrender/core/util", "../../coord/Axis", "../../coord/axisHelper"], function(t) {
		var e = t("zrender/core/util"),
			i = t("../../coord/Axis"),
			n = t("../../coord/axisHelper"),
			r = function(t, e, n, r) {
				i.call(this, t, e, n), this.type = r || "value", this._autoLabelInterval, this.model = null
			};
		return r.prototype = {
			constructor: r,
			getLabelInterval: function() {
				var t = this.model,
					i = t.getModel("label.normal"),
					r = i.get("interval");
				if (null != r && "auto" != r) return r;
				var r = this._autoLabelInterval;
				return r || (r = this._autoLabelInterval = n.getAxisLabelInterval(e.map(this.scale.getTicks(), this.dataToCoord, this), n.getFormattedLabels(this, i.get("formatter")), i.getModel("textStyle").getFont(), "horizontal" === t.get("orient"))), r
			},
			isLabelIgnored: function(t) {
				if ("category" === this.type) {
					var e = this.getLabelInterval();
					return "function" == typeof e && !e(t, this.scale.getLabel(t)) || t % (e + 1)
				}
			}
		}, e.inherits(r, i), r
	}), e("echarts/component/timeline/SliderTimelineView", ["require", "zrender/core/util", "../../util/graphic", "../../util/layout", "./TimelineView", "./TimelineAxis", "../../util/symbol", "../../coord/axisHelper", "zrender/core/BoundingRect", "zrender/core/matrix", "../../util/number", "../../util/model", "../../util/format"], function(t) {
		function e(t, e) {
			return s.getLayoutRect(t.getBoxLayoutParams(), {
				width: e.getWidth(),
				height: e.getHeight()
			}, t.get("padding"))
		}
		function i(t, e, i, n) {
			var r = a.makePath(t.get(e).replace(/^path:\/\//, ""), o.clone(n || {}), new d(i[0], i[1], i[2], i[3]), "center");
			return r
		}
		function n(t, e, i, n, r, a) {
			var s = t.get("symbol"),
				l = e.get("color"),
				u = t.get("symbolSize"),
				h = u / 2,
				d = e.getItemStyle(["color", "symbol", "symbolSize"]);
			return r ? (r.setStyle(d), r.setColor(l), i.add(r), a && a.onUpdate(r)) : (r = c.createSymbol(s, -h, -h, u, u, l), i.add(r), a && a.onCreate(r)), n = o.merge({
				rectHover: !0,
				style: d,
				z2: 100
			}, n, !0), r.attr(n), r
		}
		function r(t, e, i, n, r) {
			if (!t.dragging) {
				var o = n.getModel("checkpointStyle"),
					a = i.dataToCoord(n.getData().get(["value"], e));
				r || !o.get("animation", !0) ? t.attr({
					position: [a, 0]
				}) : (t.stopAnimation(!0), t.animateTo({
					position: [a, 0]
				}, o.get("animationDuration", !0), o.get("animationEasing", !0)))
			}
		}
		var o = t("zrender/core/util"),
			a = t("../../util/graphic"),
			s = t("../../util/layout"),
			l = t("./TimelineView"),
			u = t("./TimelineAxis"),
			c = t("../../util/symbol"),
			h = t("../../coord/axisHelper"),
			d = t("zrender/core/BoundingRect"),
			p = t("zrender/core/matrix"),
			f = t("../../util/number"),
			m = t("../../util/model"),
			g = t("../../util/format"),
			v = g.encodeHTML,
			y = o.bind,
			_ = o.each,
			x = Math.PI;
		return l.extend({
			type: "timeline.slider",
			init: function(t, e) {
				this.api = e, this._axis, this._viewRect, this._timer, this._currentPointer, this._mainGroup, this._labelGroup
			},
			render: function(t, e, i, n) {
				this.model = t, this.api = i, this.ecModel = e, this.group.removeAll();
				var r = this._layout(t, i),
					o = this._createGroup("mainGroup"),
					a = this._createGroup("labelGroup"),
					s = this._axis = this._createAxis(r, t);
				_(["AxisLine", "AxisTick", "Control", "CurrentPointer"], function(e) {
					this["_render" + e](r, o, s, t)
				}, this), this._renderAxisLabel(r, a, s, t), this._position(r, t), this._doPlayStop()
			},
			remove: function() {
				this._clearTimer(), this.group.removeAll()
			},
			dispose: function() {
				this._clearTimer()
			},
			_layout: function(t, i) {
				var n = t.get("label.normal.position"),
					r = t.get("orient"),
					o = e(t, i);
				null == n || "auto" === n ? n = "horizontal" === r ? o.y + o.height / 2 < i.getHeight() / 2 ? "-" : "+" : o.x + o.width / 2 < i.getWidth() / 2 ? "+" : "-" : isNaN(n) && (n = {
					horizontal: {
						top: "-",
						bottom: "+"
					},
					vertical: {
						left: "-",
						right: "+"
					}
				}[r][n]);
				var a = {
					horizontal: "center",
					vertical: n >= 0 || "+" === n ? "left" : "right"
				},
					s = {
						horizontal: n >= 0 || "+" === n ? "top" : "bottom",
						vertical: "middle"
					},
					l = {
						horizontal: 0,
						vertical: x / 2
					},
					u = "vertical" === r ? o.height : o.width,
					c = t.getModel("controlStyle"),
					h = c.get("show"),
					d = h ? c.get("itemSize") : 0,
					p = h ? c.get("itemGap") : 0,
					f = d + p,
					m = t.get("label.normal.rotate") || 0;
				m = m * x / 180;
				var g, v, y, _, b = c.get("position", !0),
					h = c.get("show", !0),
					w = h && c.get("showPlayBtn", !0),
					M = h && c.get("showPrevBtn", !0),
					S = h && c.get("showNextBtn", !0),
					L = 0,
					C = u;
				return "left" === b || "bottom" === b ? (w && (g = [0, 0], L += f), M && (v = [L, 0], L += f), S && (y = [C - d, 0], C -= f)) : (w && (g = [C - d, 0], C -= f), M && (v = [0, 0], L += f), S && (y = [C - d, 0], C -= f)), _ = [L, C], t.get("inverse") && _.reverse(), {
					viewRect: o,
					mainLength: u,
					orient: r,
					rotation: l[r],
					labelRotation: m,
					labelPosOpt: n,
					labelAlign: a[r],
					labelBaseline: s[r],
					playPosition: g,
					prevBtnPosition: v,
					nextBtnPosition: y,
					axisExtent: _,
					controlSize: d,
					controlGap: p
				}
			},
			_position: function(t, e) {
				function i(t) {
					var e = t.position;
					t.origin = [h[0][0] - e[0], h[1][0] - e[1]]
				}
				function n(t) {
					return [[t.x, t.x + t.width], [t.y, t.y + t.height]]
				}
				function r(t, e, i, n, r) {
					t[n] += i[n][r] - e[n][r]
				}
				var o = this._mainGroup,
					a = this._labelGroup,
					s = t.viewRect;
				if ("vertical" === t.orient) {
					var l = p.create(),
						u = s.x,
						c = s.y + s.height;
					p.translate(l, l, [-u, -c]), p.rotate(l, l, -x / 2), p.translate(l, l, [u, c]), s = s.clone(), s.applyTransform(l)
				}
				var h = n(s),
					d = n(o.getBoundingRect()),
					f = n(a.getBoundingRect()),
					m = o.position,
					g = a.position;
				g[0] = m[0] = h[0][0];
				var v = t.labelPosOpt;
				if (isNaN(v)) {
					var y = "+" === v ? 0 : 1;
					r(m, d, h, 1, y), r(g, f, h, 1, 1 - y)
				} else {
					var y = v >= 0 ? 0 : 1;
					r(m, d, h, 1, y), g[1] = m[1] + v
				}
				o.position = m, a.position = g, o.rotation = a.rotation = t.rotation, i(o), i(a)
			},
			_createAxis: function(t, e) {
				var i = e.getData(),
					n = e.get("axisType"),
					r = h.createScaleByModel(e, n),
					o = i.getDataExtent("value");
				r.setExtent(o[0], o[1]), this._customizeScale(r, i), r.niceTicks();
				var a = new u("value", r, t.axisExtent, n);
				return a.model = e, a
			},
			_customizeScale: function(t, e) {
				t.getTicks = function() {
					return e.mapArray(["value"], function(t) {
						return t
					})
				}, t.getTicksLabels = function() {
					return o.map(this.getTicks(), t.getLabel, t)
				}
			},
			_createGroup: function(t) {
				var e = this["_" + t] = new a.Group;
				return this.group.add(e), e
			},
			_renderAxisLine: function(t, e, i, n) {
				var r = i.getExtent();
				n.get("lineStyle.show") && e.add(new a.Line({
					shape: {
						x1: r[0],
						y1: 0,
						x2: r[1],
						y2: 0
					},
					style: o.extend({
						lineCap: "round"
					}, n.getModel("lineStyle").getLineStyle()),
					silent: !0,
					z2: 1
				}))
			},
			_renderAxisTick: function(t, e, i, r) {
				var o = r.getData(),
					s = i.scale.getTicks(),
					l = this._prepareTooltipHostModel(o, r);
				_(s, function(t, r) {
					var s = i.dataToCoord(t),
						u = o.getItemModel(r),
						c = u.getModel("itemStyle.normal"),
						h = u.getModel("itemStyle.emphasis"),
						d = {
							position: [s, 0],
							onclick: y(this._changeTimeline, this, r)
						},
						p = n(u, c, e, d);
					a.setHoverStyle(p, h.getItemStyle()), u.get("tooltip") ? (p.dataIndex = r, p.hostModel = l) : p.dataIndex = p.hostModel = null
				}, this)
			},
			_prepareTooltipHostModel: function(t, e) {
				var i = m.createDataFormatModel({}, t, e.get("data")),
					n = this;
				return i.formatTooltip = function(t) {
					return v(n._axis.scale.getLabel(t))
				}, i
			},
			_renderAxisLabel: function(t, e, i, n) {
				var r = n.getModel("label.normal");
				if (r.get("show")) {
					var o = n.getData(),
						s = i.scale.getTicks(),
						l = h.getFormattedLabels(i, r.get("formatter")),
						u = i.getLabelInterval();
					_(s, function(n, r) {
						if (!i.isLabelIgnored(r, u)) {
							var s = o.getItemModel(r),
								c = s.getModel("label.normal.textStyle"),
								h = s.getModel("label.emphasis.textStyle"),
								d = i.dataToCoord(n),
								p = new a.Text({
									style: {
										text: l[r],
										textAlign: t.labelAlign,
										textBaseline: t.labelBaseline,
										textFont: c.getFont(),
										fill: c.getTextColor()
									},
									position: [d, 0],
									rotation: t.labelRotation - t.rotation,
									onclick: y(this._changeTimeline, this, r),
									silent: !1
								});
							e.add(p), a.setHoverStyle(p, h.getItemStyle())
						}
					}, this)
				}
			},
			_renderControl: function(t, e, n, r) {
				function o(t, n, o, d) {
					if (t) {
						var p = {
							position: t,
							origin: [s / 2, 0],
							rotation: d ? -l : 0,
							rectHover: !0,
							style: u,
							onclick: o
						},
							f = i(r, n, h, p);
						e.add(f), a.setHoverStyle(f, c)
					}
				}
				var s = t.controlSize,
					l = t.rotation,
					u = r.getModel("controlStyle.normal").getItemStyle(),
					c = r.getModel("controlStyle.emphasis").getItemStyle(),
					h = [0, -s / 2, s, s],
					d = r.getPlayState(),
					p = r.get("inverse", !0);
				o(t.nextBtnPosition, "controlStyle.nextIcon", y(this._changeTimeline, this, p ? "-" : "+")), o(t.prevBtnPosition, "controlStyle.prevIcon", y(this._changeTimeline, this, p ? "+" : "-")), o(t.playPosition, "controlStyle." + (d ? "stopIcon" : "playIcon"), y(this._handlePlayClick, this, !d), !0)
			},
			_renderCurrentPointer: function(t, e, i, o) {
				var a = o.getData(),
					s = o.getCurrentIndex(),
					l = a.getItemModel(s).getModel("checkpointStyle"),
					u = this,
					c = {
						onCreate: function(t) {
							t.draggable = !0, t.drift = y(u._handlePointerDrag, u), t.ondragend = y(u._handlePointerDragend, u), r(t, s, i, o, !0)
						},
						onUpdate: function(t) {
							r(t, s, i, o)
						}
					};
				this._currentPointer = n(l, l, this._mainGroup, {}, this._currentPointer, c)
			},
			_handlePlayClick: function(t) {
				this._clearTimer(), this.api.dispatchAction({
					type: "timelinePlayChange",
					playState: t,
					from: this.uid
				})
			},
			_handlePointerDrag: function(t, e, i) {
				this._clearTimer(), this._pointerChangeTimeline([i.offsetX, i.offsetY])
			},
			_handlePointerDragend: function(t) {
				this._pointerChangeTimeline([t.offsetX, t.offsetY], !0)
			},
			_pointerChangeTimeline: function(t, e) {
				var i = this._toAxisCoord(t)[0],
					n = this._axis,
					r = f.asc(n.getExtent().slice());
				i > r[1] && (i = r[1]), i < r[0] && (i = r[0]), this._currentPointer.position[0] = i, this._currentPointer.dirty();
				var o = this._findNearestTick(i),
					a = this.model;
				(e || o !== a.getCurrentIndex() && a.get("realtime")) && this._changeTimeline(o)
			},
			_doPlayStop: function() {
				function t() {
					var t = this.model;
					this._changeTimeline(t.getCurrentIndex() + (t.get("rewind", !0) ? -1 : 1))
				}
				this._clearTimer(), this.model.getPlayState() && (this._timer = setTimeout(y(t, this), this.model.get("playInterval")))
			},
			_toAxisCoord: function(t) {
				var e = this._mainGroup.getLocalTransform();
				return a.applyTransform(t, e, !0)
			},
			_findNearestTick: function(t) {
				var e, i = this.model.getData(),
					n = 1 / 0,
					r = this._axis;
				return i.each(["value"], function(i, o) {
					var a = r.dataToCoord(i),
						s = Math.abs(a - t);
					n > s && (n = s, e = o)
				}), e
			},
			_clearTimer: function() {
				this._timer && (clearTimeout(this._timer), this._timer = null)
			},
			_changeTimeline: function(t) {
				var e = this.model.getCurrentIndex();
				"+" === t ? t = e + 1 : "-" === t && (t = e - 1), this.api.dispatchAction({
					type: "timelineChange",
					currentIndex: t,
					from: this.uid
				})
			}
		})
	}), e("echarts/component/timeline", ["require", "../echarts", "./timeline/preprocessor", "./timeline/typeDefaulter", "./timeline/timelineAction", "./timeline/SliderTimelineModel", "./timeline/SliderTimelineView"], function(t) {
		var e = t("../echarts");
		e.registerPreprocessor(t("./timeline/preprocessor")), t("./timeline/typeDefaulter"), t("./timeline/timelineAction"), t("./timeline/SliderTimelineModel"), t("./timeline/SliderTimelineView")
	}), e("echarts/component/toolbox/featureManager", ["require"], function(t) {
		var e = {};
		return {
			register: function(t, i) {
				e[t] = i
			},
			get: function(t) {
				return e[t]
			}
		}
	}), e("echarts/component/toolbox/ToolboxModel", ["require", "./featureManager", "zrender/core/util", "../../echarts"], function(t) {
		var e = t("./featureManager"),
			i = t("zrender/core/util");
		t("../../echarts").extendComponentModel({
			type: "toolbox",
			mergeDefaultAndTheme: function(t) {
				this.$superApply("mergeDefaultAndTheme", arguments), i.each(this.option.feature, function(t, n) {
					var r = e.get(n);
					r && i.merge(t, r.defaultOption)
				})
			},
			defaultOption: {
				show: !0,
				z: 6,
				zlevel: 0,
				orient: "horizontal",
				left: "right",
				top: "top",
				backgroundColor: "transparent",
				borderColor: "#ccc",
				borderWidth: 0,
				padding: 5,
				itemSize: 15,
				itemGap: 8,
				showTitle: !0,
				iconStyle: {
					normal: {
						borderColor: "#666",
						color: "none"
					},
					emphasis: {
						borderColor: "#3E98C5"
					}
				}
			}
		})
	}), e("echarts/component/toolbox/ToolboxView", ["require", "./featureManager", "zrender/core/util", "../../util/graphic", "../../model/Model", "../../data/DataDiffer", "../helper/listComponent", "zrender/contain/text", "../../echarts"], function(t) {
		var e = t("./featureManager"),
			i = t("zrender/core/util"),
			n = t("../../util/graphic"),
			r = t("../../model/Model"),
			o = t("../../data/DataDiffer"),
			a = t("../helper/listComponent"),
			s = t("zrender/contain/text");
		return t("../../echarts").extendComponentView({
			type: "toolbox",
			render: function(t, l, u) {
				function c(i, n) {
					var o, a = g[i],
						s = g[n],
						c = f[a],
						d = new r(c, t, t.ecModel);
					if (a && !s) {
						var p = e.get(a);
						if (!p) return;
						m[a] = o = new p(d)
					} else {
						if (o = m[s], !o) return;
						o.model = d
					}
					return !a && s ? void(o.dispose && o.dispose(l, u)) : d.get("show") ? (h(d, o, a), d.setIconStatus = function(t, e) {
						var i = this.option,
							n = this.iconPaths;
						i.iconStatus = i.iconStatus || {}, i.iconStatus[t] = e, n[t] && n[t].trigger(e)
					}, void(o.render && o.render(d, l, u))) : void(o.remove && o.remove(l, u))
				}
				function h(e, r, o) {
					var a = e.getModel("iconStyle"),
						s = r.getIcons ? r.getIcons() : e.get("icon"),
						c = e.get("title") || {};
					if ("string" == typeof s) {
						var h = s,
							f = c;
						s = {}, c = {}, s[o] = h, c[o] = f
					}
					var m = e.iconPaths = {};
					i.each(s, function(o, s) {
						var h = a.getModel("normal").getItemStyle(),
							f = a.getModel("emphasis").getItemStyle(),
							g = n.makePath(o, {
								style: h,
								hoverStyle: f,
								rectHover: !0
							}, {
								x: -p / 2,
								y: -p / 2,
								width: p,
								height: p
							}, "center");
						n.setHoverStyle(g), t.get("showTitle") && (g.__title = c[s], g.on("mouseover", function() {
							g.setStyle({
								text: c[s],
								textPosition: f.textPosition || "bottom",
								textFill: f.fill || f.stroke || "#000",
								textAlign: f.textAlign || "center"
							})
						}).on("mouseout", function() {
							g.setStyle({
								textFill: null
							})
						})), g.trigger(e.get("iconStatus." + s) || "normal"), d.add(g), g.on("click", i.bind(r.onclick, r, l, u, s)), m[s] = g
					})
				}
				var d = this.group;
				if (d.removeAll(), t.get("show")) {
					var p = +t.get("itemSize"),
						f = t.get("feature") || {},
						m = this._features || (this._features = {}),
						g = [];
					i.each(f, function(t, e) {
						g.push(e)
					}), new o(this._featureNames || [], g).add(c).update(c).remove(i.curry(c, null)).execute(), this._featureNames = g, a.layout(d, t, u), a.addBackground(d, t), d.eachChild(function(t) {
						var e = t.__title,
							i = t.hoverStyle;
						if (i && e) {
							var n = s.getBoundingRect(e, i.font),
								r = t.position[0] + d.position[0],
								o = t.position[1] + d.position[1] + p,
								a = !1;
							o + n.height > u.getHeight() && (i.textPosition = "top", a = !0);
							var l = a ? -5 - n.height : p + 8;
							r + n.width / 2 > u.getWidth() ? (i.textPosition = ["100%", l], i.textAlign = "right") : r - n.width / 2 < 0 && (i.textPosition = [0, l], i.textAlign = "left")
						}
					})
				}
			},
			remove: function(t, e) {
				i.each(this._features, function(i) {
					i.remove && i.remove(t, e)
				}), this.group.removeAll()
			},
			dispose: function(t, e) {
				i.each(this._features, function(i) {
					i.dispose && i.dispose(t, e)
				})
			}
		})
	}), e("echarts/component/toolbox/feature/SaveAsImage", ["require", "../featureManager"], function(t) {
		function e(t) {
			this.model = t
		}
		e.defaultOption = {
			show: !0,
			icon: "M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6            M29.2,45.1L29.2,0",
			title: "保存为图片",
			type: "png",
			name: "",
			excludeComponents: ["toolbox"],
			pixelRatio: 1
		};
		var i = e.prototype;
		return i.onclick = function(t, e) {
			var i = this.model,
				n = t.get("title.0.text") || "echarts",
				r = document.createElement("a"),
				o = i.get("type", !0) || "png";
			r.download = n + "." + o, r.target = "_blank", r.href = e.getConnectedDataURL({
				type: o,
				backgroundColor: i.get("backgroundColor", !0) || t.get("backgroundColor") || "#fff",
				excludeComponents: i.get("excludeComponents"),
				pixelRatio: i.get("pixelRatio")
			}), r.click()
		}, t("../featureManager").register("saveAsImage", e), e
	}), e("echarts/component/toolbox/feature/MagicType", ["require", "zrender/core/util", "../../../echarts", "../featureManager"], function(t) {
		function e(t) {
			this.model = t
		}
		var i = t("zrender/core/util");
		e.defaultOption = {
			show: !0,
			type: [],
			icon: {
				line: "M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4",
				bar: "M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7",
				stack: "M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z",
				tiled: "M2.3,2.2h22.8V25H2.3V2.2z M35,2.2h22.8V25H35V2.2zM2.3,35h22.8v22.8H2.3V35z M35,35h22.8v22.8H35V35z"
			},
			title: {
				line: "切换为折线图",
				bar: "切换为柱状图",
				stack: "切换为堆叠",
				tiled: "切换为平铺"
			},
			option: {},
			seriesIndex: {}
		};
		var n = e.prototype;
		n.getIcons = function() {
			var t = this.model,
				e = t.get("icon"),
				n = {};
			return i.each(t.get("type"), function(t) {
				e[t] && (n[t] = e[t])
			}), n
		};
		var r = {
			line: function(t, e, n, r) {
				return "bar" === t ? i.merge({
					id: e,
					type: "line",
					data: n.get("data"),
					stack: n.get("stack")
				}, r.get("option.line")) : void 0
			},
			bar: function(t, e, n, r) {
				return "line" === t ? i.merge({
					id: e,
					type: "bar",
					data: n.get("data"),
					stack: n.get("stack")
				}, r.get("option.bar")) : void 0
			},
			stack: function(t, e, i, n) {
				return "line" === t || "bar" === t ? {
					id: e,
					stack: "__ec_magicType_stack__"
				} : void 0
			},
			tiled: function(t, e, i, n) {
				return "line" === t || "bar" === t ? {
					id: e,
					stack: ""
				} : void 0
			}
		},
			o = [
				["line", "bar"],
				["stack", "tiled"]
			];
		n.onclick = function(t, e, n) {
			var a = this.model,
				s = a.get("seriesIndex." + n);
			if (r[n]) {
				var l = {
					series: []
				},
					u = function(t) {
						var e = t.subType,
							o = t.id,
							s = r[n](e, o, t, a);
						s && (i.defaults(s, t.option), l.series.push(s))
					};
				i.each(o, function(t) {
					i.indexOf(t, n) >= 0 && i.each(t, function(t) {
						a.setIconStatus(t, "normal")
					})
				}), a.setIconStatus(n, "emphasis"), t.eachComponent({
					mainType: "series",
					seriesIndex: s
				}, u), e.dispatchAction({
					type: "changeMagicType",
					currentType: n,
					newOption: l
				})
			}
		};
		var a = t("../../../echarts");
		return a.registerAction({
			type: "changeMagicType",
			event: "magicTypeChanged",
			update: "prepareAndUpdate"
		}, function(t, e) {
			e.mergeOption(t.newOption)
		}), t("../featureManager").register("magicType", e), e
	}), e("echarts/component/toolbox/feature/DataView", ["require", "zrender/core/util", "zrender/core/event", "../featureManager", "../../../echarts"], function(t) {
		function e(t) {
			var e = {},
				i = [],
				n = [];
			return t.eachRawSeries(function(t) {
				var r = t.coordinateSystem;
				if (!r || "cartesian2d" !== r.type && "polar" !== r.type) i.push(t);
				else {
					var o = r.getBaseAxis();
					if ("category" === o.type) {
						var a = o.dim + "_" + o.index;
						e[a] || (e[a] = {
							categoryAxis: o,
							valueAxis: r.getOtherAxis(o),
							series: []
						}, n.push({
							axisDim: o.dim,
							axisIndex: o.index
						})), e[a].series.push(t)
					} else i.push(t)
				}
			}), {
				seriesGroupByCategoryAxis: e,
				other: i,
				meta: n
			}
		}
		function i(t) {
			var e = [];
			return d.each(t, function(t, i) {
				var n = t.categoryAxis,
					r = t.valueAxis,
					o = r.dim,
					a = [" "].concat(d.map(t.series, function(t) {
						return t.name
					})),
					s = [n.model.getCategories()];
				d.each(t.series, function(t) {
					s.push(t.getRawData().mapArray(o, function(t) {
						return t
					}))
				});
				for (var l = [a.join(m)], u = 0; u < s[0].length; u++) {
					for (var c = [], h = 0; h < s.length; h++) c.push(s[h][u]);
					l.push(c.join(m))
				}
				e.push(l.join("\n"))
			}), e.join("\n\n" + f + "\n\n")
		}
		function n(t) {
			return d.map(t, function(t) {
				var e = t.getRawData(),
					i = [t.name],
					n = [];
				return e.each(e.dimensions, function() {
					for (var t = arguments.length, r = arguments[t - 1], o = e.getName(r), a = 0; t - 1 > a; a++) n[a] = arguments[a];
					i.push((o ? o + m : "") + n.join(m))
				}), i.join("\n")
			}).join("\n\n" + f + "\n\n")
		}
		function r(t) {
			var r = e(t);
			return {
				value: d.filter([i(r.seriesGroupByCategoryAxis), n(r.other)], function(t) {
					return t.replace(/[\n\t\s]/g, "")
				}).join("\n\n" + f + "\n\n"),
				meta: r.meta
			}
		}
		function o(t) {
			return t.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
		}
		function a(t) {
			var e = t.slice(0, t.indexOf("\n"));
			return e.indexOf(m) >= 0 ? !0 : void 0
		}
		function s(t) {
			for (var e = t.split(/\n+/g), i = o(e.shift()).split(g), n = [], r = d.map(i, function(t) {
				return {
					name: t,
					data: []
				}
			}), a = 0; a < e.length; a++) {
				var s = o(e[a]).split(g);
				n.push(s.shift());
				for (var l = 0; l < s.length; l++) r[l] && (r[l].data[a] = s[l])
			}
			return {
				series: r,
				categories: n
			}
		}
		function l(t) {
			for (var e = t.split(/\n+/g), i = o(e.shift()), n = [], r = 0; r < e.length; r++) {
				var a, s = o(e[r]).split(g),
					l = "",
					u = !1;
				isNaN(s[0]) ? (u = !0, l = s[0], s = s.slice(1), n[r] = {
					name: l,
					value: []
				}, a = n[r].value) : a = n[r] = [];
				for (var c = 0; c < s.length; c++) a.push(+s[c]);
				1 === a.length && (u ? n[r].value = a[0] : n[r] = a[0])
			}
			return {
				name: i,
				data: n
			}
		}
		function u(t, e) {
			var i = t.split(new RegExp("\n*" + f + "\n*", "g")),
				n = {
					series: []
				};
			return d.each(i, function(t, i) {
				if (a(t)) {
					var r = s(t),
						o = e[i],
						u = o.axisDim + "Axis";
					o && (n[u] = n[u] || [], n[u][o.axisIndex] = {
						data: r.categories
					}, n.series = n.series.concat(r.series))
				} else {
					var r = l(t);
					n.series.push(r)
				}
			}), n
		}
		function c(t) {
			this._dom = null, this.model = t
		}
		function h(t, e) {
			return d.map(t, function(t, i) {
				var n = e && e[i];
				return d.isObject(n) && !d.isArray(n) ? (d.isObject(t) && !d.isArray(t) && (t = t.value), d.defaults({
					value: t
				}, n)) : t
			})
		}
		var d = t("zrender/core/util"),
			p = t("zrender/core/event"),
			f = new Array(60).join("-"),
			m = "	",
			g = new RegExp("[" + m + "| ]+", "g");
		return c.defaultOption = {
			show: !0,
			readOnly: !1,
			icon: "M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28",
			title: "数据视图",
			lang: ["数据视图", "关闭", "刷新"],
			backgroundColor: "#fff",
			textColor: "#000",
			textareaColor: "#fff",
			textareaBorderColor: "#333",
			buttonColor: "#c23531",
			buttonTextColor: "#fff"
		}, c.prototype.onclick = function(t, e) {
			function i() {
				n.removeChild(a), _._dom = null
			}
			var n = e.getDom(),
				o = this.model;
			this._dom && n.removeChild(this._dom);
			var a = document.createElement("div");
			a.style.cssText = "position:absolute;left:5px;top:5px;bottom:5px;right:5px;", a.style.backgroundColor = o.get("backgroundColor") || "#fff";
			var s = document.createElement("h4"),
				l = o.get("lang") || [];
			s.innerHTML = l[0] || o.get("title"), s.style.cssText = "margin: 10px 20px;", s.style.color = o.get("textColor");
			var c = document.createElement("textarea");
			c.style.cssText = "display:block;width:100%;font-size:14px;line-height:1.6rem;font-family:Monaco,Consolas,Courier new,monospace", c.readOnly = o.get("readOnly"), c.style.color = o.get("textColor"), c.style.borderColor = o.get("textareaBorderColor"), c.style.backgroundColor = o.get("textareaColor");
			var h = r(t);
			c.value = h.value;
			var d = h.meta,
				f = document.createElement("div");
			f.style.cssText = "position:absolute;bottom:0;left:0;right:0;";
			var g = "float:right;margin-right:20px;border:none;cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px",
				v = document.createElement("div"),
				y = document.createElement("div");
			g += ";background-color:" + o.get("buttonColor"), g += ";color:" + o.get("buttonTextColor");
			var _ = this;
			p.addEventListener(v, "click", i), p.addEventListener(y, "click", function() {
				var t;
				try {
					t = u(c.value, d)
				} catch (n) {
					throw i(), new Error("Data view format error " + n)
				}
				e.dispatchAction({
					type: "changeDataView",
					newOption: t
				}), i()
			}), v.innerHTML = l[1], y.innerHTML = l[2], y.style.cssText = g, v.style.cssText = g, f.appendChild(y), f.appendChild(v), p.addEventListener(c, "keydown", function(t) {
				if (9 === (t.keyCode || t.which)) {
					var e = this.value,
						i = this.selectionStart,
						n = this.selectionEnd;
					this.value = e.substring(0, i) + m + e.substring(n), this.selectionStart = this.selectionEnd = i + 1, p.stop(t)
				}
			}), a.appendChild(s), a.appendChild(c), a.appendChild(f), c.style.height = n.clientHeight - 80 + "px", n.appendChild(a), this._dom = a
		}, c.prototype.remove = function(t, e) {
			this._dom && e.getDom().removeChild(this._dom)
		}, c.prototype.dispose = function(t, e) {
			this.remove(t, e)
		}, t("../featureManager").register("dataView", c), t("../../../echarts").registerAction({
			type: "changeDataView",
			event: "dataViewChanged",
			update: "prepareAndUpdate"
		}, function(t, e) {
			var i = [];
			d.each(t.newOption.series, function(t) {
				var n = e.getSeriesByName(t.name)[0];
				if (n) {
					var r = n.get("data");
					i.push({
						name: t.name,
						data: h(t.data, r)
					})
				} else i.push(d.extend({
					type: "scatter"
				}, t))
			}), e.mergeOption(d.defaults({
				series: i
			}, t.newOption))
		}), c
	}), e("echarts/component/dataZoom/history", ["require", "zrender/core/util"], function(t) {
		function e(t) {
			var e = t[r];
			return e || (e = t[r] = [{}]), e
		}
		var i = t("zrender/core/util"),
			n = i.each,
			r = "\x00_ec_hist_store",
			o = {
				push: function(t, i) {
					var r = e(t);
					n(i, function(e, i) {
						for (var n = r.length - 1; n >= 0; n--) {
							var o = r[n];
							if (o[i]) break
						}
						if (0 > n) {
							var a = t.queryComponents({
								mainType: "dataZoom",
								subType: "select",
								id: i
							})[0];
							if (a) {
								var s = a.getPercentRange();
								r[0][i] = {
									dataZoomId: i,
									start: s[0],
									end: s[1]
								}
							}
						}
					}), r.push(i)
				},
				pop: function(t) {
					var i = e(t),
						r = i[i.length - 1];
					i.length > 1 && i.pop();
					var o = {};
					return n(r, function(t, e) {
						for (var n = i.length - 1; n >= 0; n--) {
							var t = i[n][e];
							if (t) {
								o[e] = t;
								break
							}
						}
					}), o
				},
				clear: function(t) {
					t[r] = null
				},
				count: function(t) {
					return e(t).length
				}
			};
		return o
	}), e("echarts/component/dataZoom/SelectZoomModel", ["require", "./DataZoomModel"], function(t) {
		var e = t("./DataZoomModel");
		return e.extend({
			type: "dataZoom.select"
		})
	}), e("echarts/component/dataZoom/SelectZoomView", ["require", "./DataZoomView"], function(t) {
		return t("./DataZoomView").extend({
			type: "dataZoom.select"
		})
	}), e("echarts/component/dataZoomSelect", ["require", "./dataZoom/typeDefaulter", "./dataZoom/DataZoomModel", "./dataZoom/DataZoomView", "./dataZoom/SelectZoomModel", "./dataZoom/SelectZoomView", "./dataZoom/dataZoomProcessor", "./dataZoom/dataZoomAction"], function(t) {
		t("./dataZoom/typeDefaulter"), t("./dataZoom/DataZoomModel"), t("./dataZoom/DataZoomView"), t("./dataZoom/SelectZoomModel"), t("./dataZoom/SelectZoomView"), t("./dataZoom/dataZoomProcessor"), t("./dataZoom/dataZoomAction")
	}), e("echarts/component/toolbox/feature/DataZoom", ["require", "zrender/core/util", "../../../util/number", "../../helper/SelectController", "zrender/core/BoundingRect", "zrender/container/Group", "../../dataZoom/history", "../../helper/interactionMutex", "../../dataZoomSelect", "../featureManager", "../../../echarts"], function(t) {
		function e(t) {
			this.model = t, this._controllerGroup, this._controller, this._isZoomActive
		}
		function i(t, e) {
			var i = [{
				axisModel: t.getAxis("x").model,
				axisIndex: 0
			}, {
				axisModel: t.getAxis("y").model,
				axisIndex: 0
			}];
			return i.grid = t, e.eachComponent({
				mainType: "dataZoom",
				subType: "select"
			}, function(t, r) {
				n("xAxis", i[0].axisModel, t, e) && (i[0].dataZoomModel = t), n("yAxis", i[1].axisModel, t, e) && (i[1].dataZoomModel = t)
			}), i
		}
		function n(t, e, i, n) {
			var r = i.get(t + "Index");
			return null != r && n.getComponent(t, r) === e
		}
		function r(t, e) {
			var i = e.grid,
				n = new c(t[0][0], t[1][0], t[0][1] - t[0][0], t[1][1] - t[1][0]);
			if (n.intersect(i.getRect())) {
				var r = i.getCartesian(e[0].axisIndex, e[1].axisIndex),
					o = r.pointToData([t[0][0], t[1][0]], !0),
					a = r.pointToData([t[0][1], t[1][1]], !0);
				return [m([o[0], a[0]]), m([o[1], a[1]])]
			}
		}
		function o(t, e, i, n) {
			var r = e[i],
				o = r.dataZoomModel;
			return {
				dataZoomId: o.id,
				startValue: t[i][0],
				endValue: t[i][1]
			}
		}
		function a(t, e) {
			t.setIconStatus("back", d.count(e) > 1 ? "emphasis" : "normal")
		}
		var s = t("zrender/core/util"),
			l = t("../../../util/number"),
			u = t("../../helper/SelectController"),
			c = t("zrender/core/BoundingRect"),
			h = t("zrender/container/Group"),
			d = t("../../dataZoom/history"),
			p = t("../../helper/interactionMutex"),
			f = s.each,
			m = l.asc;
		t("../../dataZoomSelect");
		var g = "\x00_ec_\x00toolbox-dataZoom_";
		e.defaultOption = {
			show: !0,
			icon: {
				zoom: "M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1",
				back: "M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26"
			},
			title: {
				zoom: "区域缩放",
				back: "区域缩放还原"
			}
		};
		var v = e.prototype;
		v.render = function(t, e, i) {
			a(t, e)
		}, v.onclick = function(t, e, i) {
			var n = this._controllerGroup;
			this._controllerGroup || (n = this._controllerGroup = new h, e.getZr().add(n)), y[i].call(this, n, this.model, t, e)
		}, v.remove = function(t, e) {
			this._disposeController(), p.release("globalPan", e.getZr())
		}, v.dispose = function(t, e) {
			var i = e.getZr();
			p.release("globalPan", i), this._disposeController(), this._controllerGroup && i.remove(this._controllerGroup)
		};
		var y = {
			zoom: function(t, e, i, n) {
				var r = this._isZoomActive = !this._isZoomActive,
					o = n.getZr();
				p[r ? "take" : "release"]("globalPan", o), e.setIconStatus("zoom", r ? "emphasis" : "normal"), r ? (o.setDefaultCursorStyle("crosshair"), this._createController(t, e, i, n)) : (o.setDefaultCursorStyle("default"), this._disposeController())
			},
			back: function(t, e, i, n) {
				this._dispatchAction(d.pop(i), n)
			}
		};
		return v._createController = function(t, e, i, n) {
			var r = this._controller = new u("rect", n.getZr(), {
				lineWidth: 3,
				stroke: "#333",
				fill: "rgba(0,0,0,0.2)"
			});
			r.on("selectEnd", s.bind(this._onSelected, this, r, e, i, n)), r.enable(t, !1)
		}, v._disposeController = function() {
			var t = this._controller;
			t && (t.off("selected"), t.dispose())
		}, v._onSelected = function(t, e, n, a, s) {
			if (s.length) {
				var l = s[0];
				t.update();
				var u = {};
				n.eachComponent("grid", function(t, e) {
					var a = t.coordinateSystem,
						s = i(a, n),
						c = r(l, s);
					if (c) {
						var h = o(c, s, 0, "x"),
							d = o(c, s, 1, "y");
						h && (u[h.dataZoomId] = h), d && (u[d.dataZoomId] = d)
					}
				}, this), d.push(n, u), this._dispatchAction(u, a)
			}
		}, v._dispatchAction = function(t, e) {
			var i = [];
			f(t, function(t) {
				i.push(t)
			}), i.length && e.dispatchAction({
				type: "dataZoom",
				from: this.uid,
				batch: s.clone(i, !0)
			})
		}, t("../featureManager").register("dataZoom", e), t("../../../echarts").registerPreprocessor(function(t) {
			function e(t) {
				i(t, function(e, i) {
					var r = {
						type: "select",
						$fromToolbox: !0,
						id: g + t + i
					};
					r[t + "Index"] = i, n.push(r)
				})
			}
			function i(e, i) {
				var n = t[e];
				s.isArray(n) || (n = n ? [n] : []), f(n, i)
			}
			if (t) {
				var n = t.dataZoom || (t.dataZoom = []);
				s.isArray(n) || (n = [n]);
				var r = t.toolbox;
				r && (s.isArray(r) && (r = r[0]), r && r.feature && r.feature.dataZoom && (e("xAxis"), e("yAxis")))
			}
		}), e
	}), e("echarts/component/toolbox/feature/Restore", ["require", "../../dataZoom/history", "../featureManager", "../../../echarts"], function(t) {
		function e(t) {
			this.model = t
		}
		var i = t("../../dataZoom/history");
		e.defaultOption = {
			show: !0,
			icon: "M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5",
			title: "还原"
		};
		var n = e.prototype;
		return n.onclick = function(t, e, n) {
			i.clear(t), e.dispatchAction({
				type: "restore",
				from: this.uid
			})
		}, t("../featureManager").register("restore", e), t("../../../echarts").registerAction({
			type: "restore",
			event: "restore",
			update: "prepareAndUpdate"
		}, function(t, e) {
			e.resetOption("recreate")
		}), e
	}), e("echarts/component/toolbox", ["require", "./toolbox/ToolboxModel", "./toolbox/ToolboxView", "./toolbox/feature/SaveAsImage", "./toolbox/feature/MagicType", "./toolbox/feature/DataView", "./toolbox/feature/DataZoom", "./toolbox/feature/Restore"], function(t) {
		t("./toolbox/ToolboxModel"), t("./toolbox/ToolboxView"), t("./toolbox/feature/SaveAsImage"), t("./toolbox/feature/MagicType"), t("./toolbox/feature/DataView"), t("./toolbox/feature/DataZoom"), t("./toolbox/feature/Restore")
	}), e("zrender/vml/core", ["require", "../core/env"], function(t) {
		function e() {
			if (!a) {
				a = !0;
				var t = o.styleSheets;
				t.length < 31 ? o.createStyleSheet().addRule(".zrvml", "behavior:url(#default#VML)") : t[0].addRule(".zrvml", "behavior:url(#default#VML)")
			}
		}
		if (!t("../core/env").canvasSupported) {
			var i, n = "urn:schemas-microsoft-com:vml",
				r = window,
				o = r.document,
				a = !1;
			try {
				!o.namespaces.zrvml && o.namespaces.add("zrvml", n), i = function(t) {
					return o.createElement("<zrvml:" + t + ' class="zrvml">')
				}
			} catch (s) {
				i = function(t) {
					return o.createElement("<" + t + ' xmlns="' + n + '" class="zrvml">')
				}
			}
			return {
				doc: o,
				initVML: e,
				createNode: i
			}
		}
	}), e("zrender/vml/graphic", ["require", "../core/env", "../core/vector", "../core/BoundingRect", "../core/PathProxy", "../tool/color", "../contain/text", "../graphic/mixin/RectText", "../graphic/Displayable", "../graphic/Image", "../graphic/Text", "../graphic/Path", "../graphic/Gradient", "./core"], function(t) {
		function e(t) {
			t.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;", t.coordsize = V + "," + V, t.coordorigin = "0,0"
		}
		function i(t) {
			return String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
		}
		function n(t, e, i) {
			return "rgb(" + [t, e, i].join(",") + ")"
		}
		function r(t, e) {
			e && t && e.parentNode !== t && t.appendChild(e)
		}
		function o(t, e) {
			e && t && e.parentNode === t && t.removeChild(e)
		}
		function a(t, e, i) {
			return (parseFloat(t) || 0) * Z + (parseFloat(e) || 0) * G + i
		}
		function s(t, e, i) {
			var r = b.parse(e);
			i = +i, isNaN(i) && (i = 1), r && (t.color = n(r[0], r[1], r[2]), t.opacity = i * r[3])
		}
		function l(t) {
			var e = b.parse(t);
			return [n(e[0], e[1], e[2]), e[3]]
		}
		function u(t, e, i) {
			var n = e.fill;
			if (null != n) if (n instanceof P) {
				var r, o = 0,
					a = [0, 0],
					u = 0,
					c = 1,
					h = i.getBoundingRect(),
					d = h.width,
					p = h.height;
				if ("linear" === n.type) {
					r = "gradient";
					var f = i.transform,
						m = [n.x * d, n.y * p],
						g = [n.x2 * d, n.y2 * p];
					f && (N(m, m, f), N(g, g, f));
					var v = g[0] - m[0],
						y = g[1] - m[1];
					o = 180 * Math.atan2(v, y) / Math.PI, 0 > o && (o += 360), 1e-6 > o && (o = 0)
				} else {
					r = "gradientradial";
					var m = [n.x * d, n.y * p],
						f = i.transform,
						_ = i.scale,
						x = d,
						b = p;
					a = [(m[0] - h.x) / x, (m[1] - h.y) / b], f && N(m, m, f), x /= _[0] * V, b /= _[1] * V;
					var w = O(x, b);
					u = 0 / w, c = 2 * n.r / w - u
				}
				var M = n.colorStops.slice();
				M.sort(function(t, e) {
					return t.offset - e.offset
				});
				for (var S = M.length, L = [], C = [], T = 0; S > T; T++) {
					var A = M[T],
						D = l(A.color);
					C.push(A.offset * c + u + " " + D[0]), (0 === T || T === S - 1) && L.push(D)
				}
				if (S >= 2) {
					var z = L[0][0],
						I = L[1][0],
						k = L[0][1] * e.opacity,
						E = L[1][1] * e.opacity;
					t.type = r, t.method = "none", t.focus = "100%", t.angle = o, t.color = z, t.color2 = I, t.colors = C.join(","), t.opacity = E, t.opacity2 = k
				}
				"radial" === r && (t.focusposition = a.join(","))
			} else s(t, n, e.opacity)
		}
		function c(t, e) {
			null != e.lineJoin && (t.joinstyle = e.lineJoin), null != e.miterLimit && (t.miterlimit = e.miterLimit * V), null != e.lineCap && (t.endcap = e.lineCap), null != e.lineDash && (t.dashstyle = e.lineDash.join(" ")), null == e.stroke || e.stroke instanceof P || s(t, e.stroke, e.opacity)
		}
		function h(t, e, i, n) {
			var a = "fill" == e,
				s = t.getElementsByTagName(e)[0];
			null != i[e] && "none" !== i[e] && (a || !a && i.lineWidth) ? (t[a ? "filled" : "stroked"] = "true", i[e] instanceof P && o(t, s), s || (s = A.createNode(e)), a ? u(s, i, n) : c(s, i), r(t, s)) : (t[a ? "filled" : "stroked"] = "false", o(t, s))
		}
		function d(t, e) {
			var i, n, r, o, a, s, l = x.M,
				u = x.C,
				c = x.L,
				h = x.A,
				d = x.Q,
				p = [];
			for (o = 0; o < t.length;) {
				switch (r = t[o++], n = "", i = 0, r) {
				case l:
					n = " m ", i = 1, a = t[o++], s = t[o++], H[0][0] = a, H[0][1] = s;
					break;
				case c:
					n = " l ", i = 1, a = t[o++], s = t[o++], H[0][0] = a, H[0][1] = s;
					break;
				case d:
				case u:
					n = " c ", i = 3;
					var f, m, g = t[o++],
						v = t[o++],
						y = t[o++],
						_ = t[o++];
					r === d ? (f = y, m = _, y = (y + 2 * g) / 3, _ = (_ + 2 * v) / 3, g = (a + 2 * g) / 3, v = (s + 2 * v) / 3) : (f = t[o++], m = t[o++]), H[0][0] = g, H[0][1] = v, H[1][0] = y, H[1][1] = _, H[2][0] = f, H[2][1] = m, a = f, s = m;
					break;
				case h:
					var b = 0,
						w = 0,
						M = 1,
						S = 1,
						L = 0;
					e && (b = e[4], w = e[5], M = z(e[0] * e[0] + e[1] * e[1]), S = z(e[2] * e[2] + e[3] * e[3]), L = Math.atan2(-e[1] / S, e[0] / M));
					var C = t[o++],
						T = t[o++],
						P = t[o++],
						A = t[o++],
						I = t[o++] + L,
						O = t[o++] + I + L;
					o++;
					var B = t[o++],
						Z = C + k(I) * P,
						G = T + E(I) * A,
						g = C + k(O) * P,
						v = T + E(O) * A,
						F = B ? " wa " : " at ";
					p.push(F, D(((C - P) * M + b) * V - q), R, D(((T - A) * S + w) * V - q), R, D(((C + P) * M + b) * V - q), R, D(((T + A) * S + w) * V - q), R, D((Z * M + b) * V - q), R, D((G * S + w) * V - q), R, D((g * M + b) * V - q), R, D((v * S + w) * V - q)), a = g, s = v;
					break;
				case x.R:
					var W = H[0],
						U = H[1];
					W[0] = t[o++], W[1] = t[o++], U[0] = W[0] + t[o++], U[1] = W[1] + t[o++], e && (N(W, W, e), N(U, U, e)), W[0] = D(W[0] * V - q), U[0] = D(U[0] * V - q), W[1] = D(W[1] * V - q), U[1] = D(U[1] * V - q), p.push(" m ", W[0], R, W[1], " l ", U[0], R, W[1], " l ", U[0], R, U[1], " l ", W[0], R, U[1]);
					break;
				case x.Z:
					p.push(" x ")
				}
				if (i > 0) {
					p.push(n);
					for (var j = 0; i > j; j++) {
						var X = H[j];
						e && N(X, X, e), p.push(D(X[0] * V - q), R, D(X[1] * V - q), i - 1 > j ? R : "")
					}
				}
			}
			return p.join("")
		}
		function p(t) {
			return "object" == typeof t && t.tagName && "IMG" === t.tagName.toUpperCase()
		}
		function f(t) {
			var e = U[t];
			if (!e) {
				j > X && (j = 0, U = {});
				var i, n = Y.style;
				try {
					n.font = t, i = n.fontFamily.split(",")[0]
				} catch (r) {}
				e = {
					style: n.fontStyle || W,
					variant: n.fontVariant || W,
					weight: n.fontWeight || W,
					size: 0 | parseFloat(n.fontSize || 12),
					family: i || "Microsoft YaHei"
				}, U[t] = e, j++
			}
			return e
		}
		function m(t, n, o, s) {
			var l = this.style,
				u = l.text;
			if (u) {
				var c, d, p = l.textAlign,
					m = f(l.textFont),
					g = m.style + " " + m.variant + " " + m.weight + " " + m.size + 'px "' + m.family + '"',
					v = l.textBaseline;
				o = o || w.getBoundingRect(u, g, p, v);
				var y = this.transform;
				if (y && !s && (J.copy(n), J.applyTransform(y), n = J), s) c = n.x, d = n.y;
				else {
					var _ = l.textPosition,
						x = l.textDistance;
					if (_ instanceof Array) c = n.x + _[0], d = n.y + _[1], p = p || "left", v = v || "top";
					else {
						var b = w.adjustTextPositionOnRect(_, n, o, x);
						c = b.x, d = b.y, p = p || b.textAlign, v = v || b.textBaseline
					}
				}
				var M = m.size;
				switch (v) {
				case "hanging":
				case "top":
					d += M / 1.75;
					break;
				case "middle":
					break;
				default:
					d -= M / 2.25
				}
				switch (p) {
				case "left":
					break;
				case "center":
					c -= o.width / 2;
					break;
				case "right":
					c -= o.width
				}
				var S, L, C, T = A.createNode,
					P = this._textVmlEl;
				P ? (C = P.firstChild, S = C.nextSibling, L = S.nextSibling) : (P = T("line"), S = T("path"), L = T("textpath"), C = T("skew"), L.style["v-text-align"] = "left", e(P), S.textpathok = !0, L.on = !0, P.from = "0 0", P.to = "1000 0.05", r(P, C), r(P, S), r(P, L), this._textVmlEl = P);
				var z = [c, d],
					I = P.style;
				y && s ? (N(z, z, y), C.on = !0, C.matrix = y[0].toFixed(3) + R + y[2].toFixed(3) + R + y[1].toFixed(3) + R + y[3].toFixed(3) + ",0,0", C.offset = (D(z[0]) || 0) + "," + (D(z[1]) || 0), C.origin = "0 0", I.left = "0px", I.top = "0px") : (C.on = !1, I.left = D(c) + "px", I.top = D(d) + "px"), L.string = i(u);
				try {
					L.style.font = g
				} catch (k) {}
				h(P, "fill", {
					fill: s ? l.fill : l.textFill,
					opacity: l.opacity
				}, this), h(P, "stroke", {
					stroke: s ? l.stroke : l.textStroke,
					opacity: l.opacity,
					lineDash: l.lineDash
				}, this), P.style.zIndex = a(this.zlevel, this.z, this.z2), r(t, P)
			}
		}
		function g(t) {
			o(t, this._textVmlEl), this._textVmlEl = null
		}
		function v(t) {
			r(t, this._textVmlEl)
		}
		if (!t("../core/env").canvasSupported) {
			var y = t("../core/vector"),
				_ = t("../core/BoundingRect"),
				x = t("../core/PathProxy").CMD,
				b = t("../tool/color"),
				w = t("../contain/text"),
				M = t("../graphic/mixin/RectText"),
				S = t("../graphic/Displayable"),
				L = t("../graphic/Image"),
				C = t("../graphic/Text"),
				T = t("../graphic/Path"),
				P = t("../graphic/Gradient"),
				A = t("./core"),
				D = Math.round,
				z = Math.sqrt,
				I = Math.abs,
				k = Math.cos,
				E = Math.sin,
				O = Math.max,
				N = y.applyTransform,
				R = ",",
				B = "progid:DXImageTransform.Microsoft",
				V = 21600,
				q = V / 2,
				Z = 1e5,
				G = 1e3,
				H = [
					[],
					[],
					[]
				];
			T.prototype.brush = function(t) {
				var i = this.style,
					n = this._vmlEl;
				n || (n = A.createNode("shape"), e(n), this._vmlEl = n), h(n, "fill", i, this), h(n, "stroke", i, this);
				var o = this.transform,
					s = null != o,
					l = n.getElementsByTagName("stroke")[0];
				if (l) {
					var u = i.lineWidth;
					if (s && !i.strokeNoScale) {
						var c = o[0] * o[3] - o[1] * o[2];
						u *= z(I(c))
					}
					l.weight = u + "px"
				}
				var p = this.path;
				this.__dirtyPath && (p.beginPath(), this.buildPath(p, this.shape), this.__dirtyPath = !1), n.path = d(p.data, this.transform), n.style.zIndex = a(this.zlevel, this.z, this.z2), r(t, n), i.text && this.drawRectText(t, this.getBoundingRect())
			}, T.prototype.onRemoveFromStorage = function(t) {
				o(t, this._vmlEl), this.removeRectText(t)
			}, T.prototype.onAddToStorage = function(t) {
				r(t, this._vmlEl), this.appendRectText(t)
			}, L.prototype.brush = function(t) {
				var i, n, o = this.style,
					s = o.image;
				if (p(s)) {
					var l = s.src;
					if (l === this._imageSrc) i = this._imageWidth, n = this._imageHeight;
					else {
						var u = s.runtimeStyle,
							c = u.width,
							h = u.height;
						u.width = "auto", u.height = "auto", i = s.width, n = s.height, u.width = c, u.height = h, this._imageSrc = l, this._imageWidth = i, this._imageHeight = n
					}
					s = l
				} else s === this._imageSrc && (i = this._imageWidth, n = this._imageHeight);
				if (s) {
					var d = o.x || 0,
						f = o.y || 0,
						m = o.width,
						g = o.height,
						v = o.sWidth,
						y = o.sHeight,
						_ = o.sx || 0,
						x = o.sy || 0,
						b = v && y,
						w = this._vmlEl;
					w || (w = A.doc.createElement("div"), e(w), this._vmlEl = w);
					var M, S = w.style,
						L = !1,
						C = 1,
						T = 1;
					if (this.transform && (M = this.transform, C = z(M[0] * M[0] + M[1] * M[1]), T = z(M[2] * M[2] + M[3] * M[3]), L = M[1] || M[2]), L) {
						var P = [d, f],
							I = [d + m, f],
							k = [d, f + g],
							E = [d + m, f + g];
						N(P, P, M), N(I, I, M), N(k, k, M), N(E, E, M);
						var V = O(P[0], I[0], k[0], E[0]),
							q = O(P[1], I[1], k[1], E[1]),
							Z = [];
						Z.push("M11=", M[0] / C, R, "M12=", M[2] / T, R, "M21=", M[1] / C, R, "M22=", M[3] / T, R, "Dx=", D(d * C + M[4]), R, "Dy=", D(f * T + M[5])), S.padding = "0 " + D(V) + "px " + D(q) + "px 0", S.filter = B + ".Matrix(" + Z.join("") + ", SizingMethod=clip)"
					} else M && (d = d * C + M[4], f = f * T + M[5]), S.filter = "", S.left = D(d) + "px", S.top = D(f) + "px";
					var G = this._imageEl,
						H = this._cropEl;
					G || (G = A.doc.createElement("div"), this._imageEl = G);
					var F = G.style;
					if (b) {
						if (i && n) F.width = D(C * i * m / v) + "px", F.height = D(T * n * g / y) + "px";
						else {
							var W = new Image,
								U = this;
							W.onload = function() {
								W.onload = null, i = W.width, n = W.height, F.width = D(C * i * m / v) + "px", F.height = D(T * n * g / y) + "px", U._imageWidth = i, U._imageHeight = n, U._imageSrc = s
							}, W.src = s
						}
						H || (H = A.doc.createElement("div"), H.style.overflow = "hidden", this._cropEl = H);
						var j = H.style;
						j.width = D((m + _ * m / v) * C), j.height = D((g + x * g / y) * T), j.filter = B + ".Matrix(Dx=" + -_ * m / v * C + ",Dy=" + -x * g / y * T + ")", H.parentNode || w.appendChild(H), G.parentNode != H && H.appendChild(G)
					} else F.width = D(C * m) + "px", F.height = D(T * g) + "px", w.appendChild(G), H && H.parentNode && (w.removeChild(H), this._cropEl = null);
					var X = "",
						Y = o.opacity;
					1 > Y && (X += ".Alpha(opacity=" + D(100 * Y) + ") "), X += B + ".AlphaImageLoader(src=" + s + ", SizingMethod=scale)", F.filter = X, w.style.zIndex = a(this.zlevel, this.z, this.z2), r(t, w), o.text && this.drawRectText(t, this.getBoundingRect())
				}
			}, L.prototype.onRemoveFromStorage = function(t) {
				o(t, this._vmlEl), this._vmlEl = null, this._cropEl = null, this._imageEl = null, this.removeRectText(t)
			}, L.prototype.onAddToStorage = function(t) {
				r(t, this._vmlEl), this.appendRectText(t)
			};
			var F, W = "normal",
				U = {},
				j = 0,
				X = 100,
				Y = document.createElement("div");
			w.measureText = function(t, e) {
				var i = A.doc;
				F || (F = i.createElement("div"), F.style.cssText = "position:absolute;top:-20000px;left:0;                padding:0;margin:0;border:none;white-space:pre;", A.doc.body.appendChild(F));
				try {
					F.style.font = e
				} catch (n) {}
				return F.innerHTML = "", F.appendChild(i.createTextNode(t)), {
					width: F.offsetWidth
				}
			};
			for (var J = new _, K = [M, S, L, T, C], Q = 0; Q < K.length; Q++) {
				var $ = K[Q].prototype;
				$.drawRectText = m, $.removeRectText = g, $.appendRectText = v
			}
			C.prototype.brush = function(t) {
				var e = this.style;
				e.text && this.drawRectText(t, {
					x: e.x || 0,
					y: e.y || 0,
					width: 0,
					height: 0
				}, this.getBoundingRect(), !0)
			}, C.prototype.onRemoveFromStorage = function(t) {
				this.removeRectText(t)
			}, C.prototype.onAddToStorage = function(t) {
				this.appendRectText(t)
			}
		}
	}), e("zrender/vml/Painter", ["require", "../core/log", "./core"], function(t) {
		function e(t) {
			return parseInt(t, 10)
		}
		function i(t, e) {
			o.initVML(), this.root = t, this.storage = e;
			var i = document.createElement("div"),
				n = document.createElement("div");
			i.style.cssText = "display:inline-block;overflow:hidden;position:relative;width:300px;height:150px;", n.style.cssText = "position:absolute;left:0;top:0;", t.appendChild(i), this._vmlRoot = n, this._vmlViewport = i, this.resize();
			var r = e.delFromMap,
				a = e.addToMap;
			e.delFromMap = function(t) {
				var i = e.get(t);
				r.call(e, t), i && i.onRemoveFromStorage && i.onRemoveFromStorage(n)
			}, e.addToMap = function(t) {
				t.onAddToStorage && t.onAddToStorage(n), a.call(e, t)
			}, this._firstPaint = !0
		}
		function n(t) {
			return function() {
				r('In IE8.0 VML mode painter not support method "' + t + '"')
			}
		}
		var r = t("../core/log"),
			o = t("./core");
		i.prototype = {
			constructor: i,
			getViewportRoot: function() {
				return this._vmlViewport
			},
			refresh: function() {
				var t = this.storage.getDisplayList(!0);
				this._paintList(t)
			},
			_paintList: function(t) {
				for (var e = this._vmlRoot, i = 0; i < t.length; i++) {
					var n = t[i];
					n.__dirty && !n.invisible && (n.beforeBrush && n.beforeBrush(), n.brush(e), n.afterBrush && n.afterBrush()), n.__dirty = !1
				}
				this._firstPaint && (this._vmlViewport.appendChild(e), this._firstPaint = !1)
			},
			resize: function() {
				var t = this._getWidth(),
					e = this._getHeight();
				if (this._width != t && this._height != e) {
					this._width = t, this._height = e;
					var i = this._vmlViewport.style;
					i.width = t + "px", i.height = e + "px"
				}
			},
			dispose: function() {
				this.root.innerHTML = "", this._vmlRoot = this._vmlViewport = this.storage = null
			},
			getWidth: function() {
				return this._width
			},
			getHeight: function() {
				return this._height
			},
			_getWidth: function() {
				var t = this.root,
					i = t.currentStyle;
				return (t.clientWidth || e(i.width)) - e(i.paddingLeft) - e(i.paddingRight) | 0
			},
			_getHeight: function() {
				var t = this.root,
					i = t.currentStyle;
				return (t.clientHeight || e(i.height)) - e(i.paddingTop) - e(i.paddingBottom) | 0
			}
		};
		for (var a = ["getLayer", "insertLayer", "eachLayer", "eachBuildinLayer", "eachOtherLayer", "getLayers", "modLayer", "delLayer", "clearLayer", "toDataURL", "pathToImage"], s = 0; s < a.length; s++) {
			var l = a[s];
			i.prototype[l] = n(l)
		}
		return i
	}), e("zrender/vml/vml", ["require", "./graphic", "../zrender", "./Painter"], function(t) {
		t("./graphic"), t("../zrender").registerPainter("vml", t("./Painter"))
	});
	var i = t("echarts");
	return t("echarts/chart/line"), t("echarts/chart/bar"), t("echarts/component/grid"), t("echarts/chart/pie"), t("echarts/chart/scatter"), t("echarts/component/tooltip"), t("echarts/component/polar"), t("echarts/chart/radar"), t("echarts/component/legend"), t("echarts/chart/map"), t("echarts/chart/treemap"), t("echarts/chart/graph"), t("echarts/chart/gauge"), t("echarts/chart/funnel"), t("echarts/chart/parallel"), t("echarts/chart/sankey"), t("echarts/chart/boxplot"), t("echarts/chart/candlestick"), t("echarts/chart/effectScatter"), t("echarts/chart/lines"), t("echarts/chart/heatmap"), t("echarts/component/geo"), t("echarts/component/parallel"), t("echarts/component/title"), t("echarts/component/dataZoom"), t("echarts/component/visualMap"), t("echarts/component/markPoint"), t("echarts/component/markLine"), t("echarts/component/timeline"), t("echarts/component/toolbox"), t("zrender/vml/vml"), i
}), function(t, e) {
	"function" == typeof define && define.amd ? define(["exports", "echarts"], e) : "object" == typeof exports && "string" != typeof exports.nodeName ? e(exports, require("echarts")) : e({}, t.echarts3)
}(this, function(t, e) {
	var i = function(t) {
			"undefined" != typeof console && console && console.error && console.error(t)
		};
	return e ? e.registerMap ? void e.registerMap("china", {
		type: "FeatureCollection",
		features: [{
			id: "710000",
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@°Ü¯Û", "@@ƛĴÕƊÉɼģºðʀ\\ƎsÆNŌÔĚänÜƤɊĂǀĆĴĤǊŨxĚĮǂƺòƌâÔ®ĮXŦţƸZûÐƕƑGđ¨ĭMó·ęcëƝɉlÝƯֹÅŃ^Ó·śŃǋƏďíåɛGɉ¿IċããF¥ĘWǬÏĶñÄ", "@@\\p|WoYG¿¥Ij@", "@@¡@V^RqBbAnTXeQr©C", "@@ÆEEkWqë I"]
				],
				encodeOffsets: [
					[
						[122886, 24033],
						[123335, 22980],
						[122375, 24193],
						[122518, 24117],
						[124427, 22618]
					]
				]
			},
			properties: {
				cp: [121.509062, 25.044332],
				name: "台湾",
				childNum: 5
			}
		}, {
			id: "130000",
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@\\aM`Ç½ÓnUKĜēs¤­©yrý§uģcJ»eIP]ªrºc_ħ²G¼s`jÎŸnüsÂľP", "@@U`Ts¿mÄ", "@@FOhđ©OiÃ`ww^ÌkÑH«ƇǤŗĺtFu{Z}Ö@U´ʚLg®¯Oı°Ãw ^VbÉsmAê]]w§RRl£ŭuwNÁ`ÇFēÝčȻuT¡Ĺ¯Õ¯sŗő£YªhVƍ£ƅnëYNgq¼ś¿µı²UºÝUąąŖóxV@tƯJ]eR¾fe|rHA|h~Ėƍl§ÏjVë` ØoÅbbx³^zÃĶ¶Sj®AyÂhðk`«PËµEFÛ¬Y¨Ļrõqi¼Wi°§Ð±²°`[À|ĠO@ÆxO\\ta\\p_Zõ^û{ġȧXýĪÓjùÎRb^Î»j{íděYfíÙTymńŵōHim½éŅ­aVcř§ax¹XŻácWU£ôãºQ¨÷Ñws¥qEHÙ|šYQoŕÇyáĂ£MÃ°oťÊP¡mWO¡v{ôvîēÜISpÌhp¨ jdeŔQÖjX³àĈ[n`Yp@UcM`RKhEbpŞlNut®EtqnsÁgAiúoHqCXhfgu~ÏWP½¢G^}¯ÅīGCÑ^ãziMáļMTÃƘrMc|O_¯Ŏ´|morDkO\\mĆJfl@cĢ¬¢aĦtRıÒXòë¬WP{ŵǫƝīÛ÷ąV×qƥV¿aȉd³BqPBmaËđŻģmÅ®V¹d^KKonYg¯XhqaLdu¥Ípǅ¡KąÅkĝęěhq}HyÃ]¹ǧ£Í÷¿qágPmoei¤o^á¾ZEY^Ný{nOl±Í@Mċèk§daNaÇį¿]øRiiñEūiǱàUtėGyl}ÓM}jpEC~¡FtoQiHkk{ILgĽxqÈƋÄdeVDJj£J|ÅdzÂFt~KŨ¸IÆv|¢r}èonb}`RÎÄn°ÒdÞ²^®lnÐèĄlðÓ×]ªÆ}LiĂ±Ö`^°Ç¶p®đDcŋ`ZÔ¶êqvFÆN®ĆTH®¦O¾IbÐã´BĐɢŴÆíȦpĐÞXR·nndO¤OÀĈƒ­QgµFo|gȒęSWb©osx|hYhgŃfmÖĩnºTÌSp¢dYĤ¶UĈjlǐpäðëx³kÛfw²Xjz~ÂqbTÑěŨ@|oMzv¢ZrÃVw¬ŧĖ¸f°ÐTªqs{S¯r æÝl¼ÖĞ ǆiGĘJ¼lr}~K¨ŸƐÌWö¼Þ°nÞoĦL|C~D©|q]SvKÑcwpÏÏĿćènĪWlĄkT}¬Tp~®Hgd˒ĺBVtEÀ¢ôPĎƗè@~kü\\rÊĔÖæW_§¼F´©òDòjYÈrbĞāøŀG{ƀ|¦ðrb|ÀH`pʞkvGpuARhÞÆǶgĘTǼƹS£¨¡ù³ŘÍ]¿ÂyôEP xX¶¹ÜO¡gÚ¡IwÃé¦ÅBÏ|Ç°N«úmH¯âbęU~xĈbȒ{^xÖlD¸dɂ~"]
				],
				encodeOffsets: [
					[
						[120023, 41045],
						[121616, 39981],
						[122102, 42307]
					]
				]
			},
			properties: {
				cp: [114.502461, 38.045474],
				name: "河北",
				childNum: 3
			}
		}, {
			id: "140000",
			geometry: {
				type: "Polygon",
				coordinates: ["@@ħÜ_ªlìwGkÛÃǏokćiµVZģ¡coTSË¹ĪmnÕńehZg{gtwªpXaĚThȑp{¶Eh®RćƑP¿£PmcªaJyý{ýȥoÅîɡųAďä³aÏJ½¥PG­ąSM­sWz½µÛYÓŖgxoOkĒCo­Èµ]¯_²ÕjāK~©ÅØ^ÔkïçămÏk]­±cÝ¯ÑÃmQÍ~_apm~ç¡qu{JÅŧ·Ls}EyÁÆcI{¤IiCfUcƌÃp§]ě«vD@¡SÀµMÅwuYY¡DbÑc¡h×]nkoQdaMç~eDÛtT©±@¥ù@É¡ZcW|WqOJmĩl«ħşvOÓ«IqăV¥D[mI~Ó¢cehiÍ]Ɠ~ĥqX·eƷn±}v[ěďŕ]_œ`¹§ÕōIo©b­s^}Ét±ū«³p£ÿ¥WÑxçÁ«h×u×¥ř¾dÒ{ºvĴÎêÌɊ²¶ü¨|ÞƸµȲLLúÉƎ¤ϊęĔV`_bªS^|dzY|dz¥pZbÆ£¶ÒK}tĦÔņƠPYznÍvX¶Ěn ĠÔzý¦ª÷ÑĸÙUȌ¸dòÜJð´ìúNM¬XZ´¤ŊǸ_tldI{¦ƀðĠȤ¥NehXnYGR° ƬDj¬¸|CĞKqºfƐiĺ©ª~ĆOQª ¤@ìǦɌ²æBÊTĞHƘÁĪËĖĴŞȀÆÿȄlŤĒötÎ½î¼ĨXh|ªM¤ÐzÞĩÒSrao³"],
				encodeOffsets: [
					[117016, 41452]
				]
			},
			properties: {
				cp: [112.549248, 37.857014],
				name: "山西",
				childNum: 1
			}
		}, {
			id: "150000",
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@ǪƫÌÛMĂ[`ÕCn}¶Vcês¯PqFB|S³C|kñHdiÄ¥sŉÅPóÑÑE^ÅPpy_YtShQ·aHwsOnŉÃs©iqjUSiº]ïW«gW¡ARëśĳĘů`çõh]y»ǃǛҤxÒm~zf}pf|ÜroÈzrKÈĵSƧż؜Ġu~è¬vîS¼ĂhĖMÈÄw\\fŦ°W ¢¾luŸDw\\Ŗĝ", "@@GVu»Aylßí¹ãe]Eāò³C¹ð¾²iÒAdkò^P²CǜңǄ z¼g^èöŰ_Ĳĕê}gÁnUI«m]jvV¼euhwqAaW_µj»çjioQR¹ēÃßt@r³[ÛlćË^ÍÉáGOUÛOB±XkÅ¹£k|e]olkVÍ¼ÕqtaÏõjgÁ£§U^RLËnX°ÇBz^~wfvypV ¯ƫĉ˭ȫƗŷɿÿĿƑ˃ĝÿÃǃßËőó©ǐȍŒĖM×ÍEyxþp]ÉvïèvƀnÂĴÖ@V~Ĉ³MEĸÅĖtējyÄDXÄxGQuv_i¦aBçw˛wD©{tāmQ{EJ§KPśƘƿ¥@sCTÉ}ɃwƇy±gÑ}T[÷kÐç¦«SÒ¥¸ëBX½HáÅµÀğtSÝÂa[ƣ°¯¦Pï¡]£ġÒk®G²èQ°óMq}EóƐÇ\\@áügQÍu¥FTÕ¿Jû]|mvāÎYua^WoÀa·­ząÒot×¶CLƗi¯¤mƎHǊ¤îìɾŊìTdåwsRÖgĒųúÍġäÕ}Q¶¿A[¡{d×uQAMxVvMOmăl«ct[wº_ÇÊjbÂ£ĦS_éQZ_lwgOiýe`YYJq¥IÁǳ£ÙË[ÕªuƏ³ÍTs·bÁĽäė[b[ŗfãcn¥îC¿÷µ[ŏÀQ­ōĉm¿Á^£mJVmL[{Ï_£F¥Ö{ŹA}×Wu©ÅaųĳƳhB{·TQqÙIķËZđ©Yc|M¡LeVUóK_QWk_ĥ¿ãZ»X\\ĴuUèlG®ěłTĠğDŃGÆÍz]±ŭ©Å]ÅÐ}UË¥©TċïxgckfWgi\\ÏĒ¥HkµEë{»ÏetcG±ahUiñiWsɁ·cCÕk]wȑ|ća}wVaĚá G°ùnM¬¯{ÈÐÆA¥ÄêJxÙ¢hP¢ÛºµwWOóFÁz^ÀŗÎú´§¢T¤ǻƺSėǵhÝÅQgvBHouʝl_o¿Ga{ïq{¥|ſĿHĂ÷aĝÇqZñiñC³ª»E`¨åXēÕqÉû[l}ç@čƘóO¿¡FUsAʽīccocÇS}£IS~ălkĩXçmĈŀÐoÐdxÒuL^T{r@¢ÍĝKén£kQyÅõËXŷƏL§~}kq»IHėǅjĝ»ÑÞoå°qTt|r©ÏS¯·eŨĕx«È[eM¿yupN~¹ÏyN£{©għWí»Í¾səšǅ_ÃĀɗ±ąĳĉʍŌŷSÉA±åǥɋ@ë£R©ąP©}ĹªƏj¹erLDĝ·{i«ƫC½ÉshVzGS|úþXgp{ÁX¿ć{ƱȏñZáĔyoÁhA}ŅĆfdŉ_¹Y°ėǩÑ¡H¯¶oMQqð¡Ë|Ñ`ƭŁX½·óÛxğįÅcQs«tȋǅFù^it«Č¯[hAi©á¥ÇĚ×l|¹y¯Kȝqgů{ñǙµïċĹzŚȭ¶¡oŽäÕG\\ÄT¿Òõr¯LguÏYęRƩɷŌO\\İÐ¢æ^Ŋ ĲȶȆbÜGĝ¬¿ĚVĎgª^íu½jÿĕęjık@Ľ]ėl¥ËĭûÁėéV©±ćn©­ȇÍq¯½YÃÔŉÉNÑÅÝy¹NqáʅDǡËñ­ƁYÅy̱os§ȋµʽǘǏƬɱàưN¢ƔÊuľýľώȪƺɂļxZĈ}ÌŉŪĺœĭFЛĽ̅ȣͽÒŵìƩÇϋÿȮǡŏçƑůĕ~Ç¼ȳÐUfdIxÿ\\G zâɏÙOº·pqy£@qþ@Ǟ˽IBäƣzsÂZÁàĻdñ°ŕzéØűzșCìDȐĴĺf®Àľưø@ɜÖÞKĊŇƄ§͑těï͡VAġÑÑ»d³öǍÝXĉĕÖ{þĉu¸ËʅğU̎éhɹƆ̗̮ȘǊ֥ड़ࡰţાíϲäʮW¬®ҌeרūȠkɬɻ̼ãüfƠSצɩςåȈHϚÎKǳͲOðÏȆƘ¼CϚǚ࢚˼ФÔ¤ƌĞ̪Qʤ´¼mȠJˀƲÀɠmɆǄĜƠ´ǠN~ʢĜ¶ƌĆĘźʆȬ˪ĚĒ¸ĞGȖƴƀj`ĢçĶāàŃºēĢĖćYÀŎüôQÐÂŎŞǆŞêƖoˆDĤÕºÑǘÛˤ³̀gńƘĔÀ^ªƂ`ªt¾äƚêĦĀ¼ÐĔǎ¨Ȕ»͠^ˮÊȦƤøxRrŜH¤¸ÂxDÄ|ø˂˜ƮÐ¬ɚwɲFjĔ²Äw°ǆdÀÉ_ĸdîàŎjÊêTĞªŌŜWÈ|tqĢUB~´°ÎFCU¼pĀēƄN¦¾O¶łKĊOjĚj´ĜYp{¦SĚÍ\\T×ªV÷Ší¨ÅDK°ßtŇĔK¨ǵÂcḷ̌ĚǣȄĽFlġUĵŇȣFʉɁMğįʏƶɷØŭOǽ«ƽū¹Ʊő̝Ȩ§ȞʘĖiɜɶʦ}¨֪ࠜ̀ƇǬ¹ǨE˦ĥªÔêFxúQEr´Wrh¤Ɛ \\talĈDJÜ|[Pll̚¸ƎGú´P¬W¦^¦H]prRn|or¾wLVnÇIujkmon£cX^Bh`¥V¦U¤¸}xRj[^xN[~ªxQ[`ªHÆÂExx^wN¶Ê|¨ìMrdYpoRzNyÀDs~bcfÌ`L¾n|¾T°c¨È¢ar¤`[|òDŞĔöxElÖdHÀI`Ď\\Àì~ÆR¼tf¦^¢ķ¶eÐÚMptgjɡČÅyġLûŇV®ÄÈƀĎ°P|ªVVªj¬ĚÒêp¬E|ŬÂ_~¼rƐK f{ĘFĒƌXưăkÃĄ}nµo×q£ç­kX{uĩ«āíÓUŅÝVUŌ]Ť¥lyň[oi{¦LĸĦ^ôâJ¨^UZðÚĒL¿Ìf£K£ʺoqNwğc`uetOj×°KJ±qÆġmĚŗos¬qehqsuH{¸kH¡ÊRǪÇƌbȆ¢´äÜ¢NìÉʖ¦â©Ɨؗ"]
				],
				encodeOffsets: [
					[
						[128500, 52752],
						[127089, 51784]
					]
				]
			},
			properties: {
				cp: [111.670801, 40.818311],
				name: "内蒙古",
				childNum: 2
			}
		}, {
			id: "210000",
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@L@@s]", "@@MnNm", "@@dc", "@@eÀC@b", "@@fXwkbrÄ`qg", "@@^jtWQ", "@@~ Y[c", "@@I`ĖN^_¿ZÁM", "@@Ïxǌ{q_×^Gigp", "@@iX¶BY", "@@YZ", "@@L_yG`b", "@@^WqCTZ", "@@\\[§t|]", "@@m`p[", "@@@é^BntaÊU]x ¯ÄPĲ­°hʙK³VÕ@Y~|EvĹsÇ¦­L^pÃ²ŸÒG Ël]xxÄ_fT¤Ď¤cPC¨¸TVjbgH²sdÎdHt`B²¬GJję¶[ÐhjeXdlwhðSČ¦ªVÊÏÆZÆŶ®²^ÎyÅHńĚDMħĜŁH­kçvV[ĳ¼WYÀäĦ`XlR`ôLUVfK¢{NZdĒªYĸÌÚJRr¸SA|ƴgŴĴÆbvªØX~źB|¦ÕE¤Ð`\\|KUnnI]¤ÀÂĊnŎR®Ő¿¶\\ÀøíDm¦ÎbŨabaĘ\\ľãÂ¸atÎSƐ´©v\\ÖÚÌǴ¤Â¨JKrZ_ZfjþhPkx`YRIjJcVf~sCN¤ EhæmsHy¨SðÑÌ\\\\ĐRÊwS¥fqŒßýáĞÙÉÖ[^¯ǤŲê´\\¦¬ĆPM¯£»uïpùzExanµyoluqe¦W^£ÊL}ñrkqWňûPUP¡ôJoo·U}£[·¨@XĸDXm­ÛÝºGUCÁª½{íĂ^cjk¶Ã[q¤LÉö³cux«|Zd²BWÇ®Yß½ve±ÃCý£W{Ú^q^sÑ·¨ËMr¹·C¥GDrí@wÕKţÃ«V·i}xËÍ÷i©ĝɝǡ]{c±OW³Ya±_ç©HĕoƫŇqr³Lys[ñ³¯OSďOMisZ±ÅFC¥Pq{Ã[Pg}\\¿ghćOk^ĩÃXaĕËĥM­oEqqZûěŉ³F¦oĵhÕP{¯~TÍlªNßYÐ{Ps{ÃVUeĎwk±ŉVÓ½ŽJãÇÇ»Jm°dhcÀffdF~ĀeĖd`sx² ®EĦ¦dQÂd^~ăÔH¦\\LKpĄVez¤NP ǹÓRÆąJSh­a[¦´ÂghwmBÐ¨źhI|VV|p] Â¼èNä¶ÜBÖ¼L`¼bØæKVpoúNZÞÒKxpw|ÊEMnzEQIZZNBčÚFÜçmĩWĪñtÞĵÇñZ«uD±|ƏlǗw·±PmÍada CLǑkùó¡³Ï«QaċÏOÃ¥ÕđQȥċƭy³ÁA"]
				],
				encodeOffsets: [
					[
						[123686, 41445],
						[126019, 40435],
						[124393, 40128],
						[126117, 39963],
						[125322, 40140],
						[126686, 40700],
						[126041, 40374],
						[125584, 40168],
						[125509, 40217],
						[125453, 40165],
						[125362, 40214],
						[125280, 40291],
						[125774, 39997],
						[125976, 40496],
						[125822, 39993],
						[122731, 40949]
					]
				]
			},
			properties: {
				cp: [123.429096, 41.796767],
				name: "辽宁",
				childNum: 16
			}
		}, {
			id: "220000",
			geometry: {
				type: "Polygon",
				coordinates: ["@@ñr½ÉKāGÁ¤ia ÉÈ¹`\\xs¬dĆkNnuNUwNx¶c¸|\\¢GªóĄ~RãÖÎĢùđŴÕhQxtcæëSɽŉíëǉ£ƍG£nj°KƘµDsØÑpyĆ¸®¿bXp]vbÍZuĂ{n^IüÀSÖ¦EvRÎûh@â[ƏÈô~FNr¯ôçR±­HÑlĢ^¤¢OðætxsŒ]ÞÁTĠs¶¿âÆGW¾ìA¦·TÑ¬è¥ÏÐJ¨¼ÒÖ¼ƦɄxÊ~StD@Ă¼Ŵ¡jlºWvÐzƦZÐ²CH AxiukdGgetqmcÛ£Ozy¥cE}|¾cZk¿uŐã[oxGikfeäT@SUwpiÚFM©£è^Ú`@v¶eňf heP¶täOlÃUgÞzŸU`l}ÔÆUvØ_Ō¬Öi^ĉi§²ÃB~¡ĈÚEgc|DC_Ȧm²rBx¼MÔ¦ŮdĨÃâYxƘDVÇĺĿg¿cwÅ\\¹¥Yĭl¤OvLjM_a W`zļMž·\\swqÝSAqŚĳ¯°kRē°wx^ĐkǂÒ\\]nrĂ}²ĊŲÒøãh·M{yMzysěnĒġV·°G³¼XÀ¤¹i´o¤ŃÈ`ÌǲÄUĞd\\iÖmÈBĤÜɲDEh LG¾ƀÄ¾{WaYÍÈĢĘÔRîĐj}ÇccjoUb½{h§Ǿ{KƖµÎ÷GĄØŜçưÌs«lyiē«`å§H¥Ae^§GK}iã\\c]v©ģZmÃ|[M}ģTɟĵÂÂ`ÀçmFK¥ÚíÁbX³ÌQÒHof{]ept·GŋĜYünĎųVY^ydõkÅZW«WUa~U·SbwGçǑiW^qFuNĝ·EwUtW·Ýďæ©PuqEzwAVXRãQ`­©GYYhcUGorBd}ģÉb¡·µMicF«Yƅ»é\\ɹ~ǙG³mØ©BšuT§Ĥ½¢Ã_Ã½L¡ûsT\\rke\\PnwAKy}ywdSefµ]UhĿD@mÿvaÙNSkCuncÿ`lWėVâ¦÷~^fÏ~vwHCį`xqT­­lW«ï¸skmßEGqd¯R©Ý¯¯S\\cZ¹iűƏCuƍÓXoR}M^o£R}oªU­FuuXHlEÅÏ©¤ßgXþ¤D²ÄufàÀ­XXÈ±Ac{Yw¬dvõ´KÊ£\\rµÄlidā]|î©¾DÂVH¹Þ®ÜWnCķ W§@\\¸~¤Vp¸póIO¢VOŇürXql~òÉK]¤¥Xrfkvzpm¶bwyFoúvð¼¤ N°ąO¥«³[éǣű]°Õ\\ÚÊĝôîŇÔaâBYlďQ[ Ë[ïÒ¥RI|`j]P"],
				encodeOffsets: [
					[126831, 44503]
				]
			},
			properties: {
				cp: [125.3245, 43.886841],
				name: "吉林",
				childNum: 1
			}
		}, {
			id: "230000",
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@UµNÿ¥īèçHÍøƕ¶Lǽ|g¨|a¾pVidd~ÈiíďÓQġėÇZÎXb½|ſÃH½KFgɱCģÛÇAnjÕc[VĝǱÃËÇ_ £ń³pj£º¿»WH´¯U¸đĢmtĜyzzNN|g¸÷äűÑ±ĉā~mq^[ǁÑďlw]¯xQĔ¯l°řĴrBÞTxr[tŽ¸ĻN_yX`biNKuP£kZĮ¦[ºxÆÀdhĹŀUÈƗCwáZħÄŭcÓ¥»NAw±qȥnD`{ChdÙFć}¢A±Äj¨]ĊÕjŋ«×`VuÓÅ~_kŷVÝyhVkÄãPsOµfgeŇµf@u_Ù ÙcªNªÙEojVxT@ãSefjlwH\\pŏäÀvlY½d{F~¦dyz¤PÜndsrhfHcvlwjF£G±DÏƥYyÏu¹XikĿ¦ÏqƗǀOŜ¨LI|FRĂn sª|C˜zxAè¥bfudTrFWÁ¹Am|ĔĕsķÆF´N}ćUÕ@Áĳſmuçuð^ÊýowFzØÎĕNőǏȎôªÌŒǄàĀÄ˄ĞŀƒʀĀƘŸˮȬƬĊ°Uzouxe]}AyÈW¯ÌmKQ]Īºif¸ÄX|sZt|½ÚUÎ lk^p{f¤lºlÆW A²PVÜPHÊâ]ÎĈÌÜk´\\@qàsĔÄQºpRij¼èi`¶bXrBgxfv»uUi^v~J¬mVp´£´VWrnP½ì¢BX¬hðX¹^TjVriªjtŊÄmtPGx¸bgRsT`ZozÆO]ÒFôÒOÆŊvÅpcGêsx´DR{AEOr°x|íb³Wm~DVjºéNNËÜ˛ɶ­GxŷCSt}]ûōSmtuÇÃĕNāg»íT«u}ç½BĵÞʣ¥ëÊ¡MÛ³ãȅ¡ƋaǩÈÉQG¢·lG|tvgrrf«ptęŘnÅĢrI²¯LiØsPf_vĠdxM prʹL¤¤eËÀđKïÙVY§]Ióáĥ]ķK¥j|pŇ\\kzţ¦šnņäÔVĂîĪ¬|vW®l¤èØrxm¶ă~lÄƯĄ̈́öȄEÔ¤ØQĄĄ»ƢjȦOǺ¨ìSŖÆƬyQv`cwZSÌ®ü±Ǆ]ŀç¬B¬©ńzƺŷɄeeOĨSfm ĊƀP̎ēz©ĊÄÕÊmgÇsJ¥ƔŊśæÎÑqv¿íUOµªÂnĦÁ_½ä@êí£P}Ġ[@gġ}gɊ×ûÏWXá¢užƻÌsNÍ½ƎÁ§čŐAēeL³àydl¦ĘVçŁpśǆĽĺſÊQíÜçÛġÔsĕ¬Ǹ¯YßċġHµ ¡eå`ļrĉŘóƢFìĎWøxÊkƈdƬv|I|·©NqńRŀ¤éeŊŀàŀU²ŕƀBQ£Ď}L¹Îk@©ĈuǰųǨÚ§ƈnTËÇéƟÊcfčŤ^XmHĊĕË«W·ċëx³ǔķÐċJāwİ_ĸȀ^ôWr­°oú¬ĦŨK~ȰCĐ´Ƕ£fNÎèâw¢XnŮeÂÆĶ¾¾xäLĴĘlļO¤ÒĨA¢Êɚ¨®ØCÔ ŬGƠƦYĜĘÜƬDJg_ͥœ@čŅĻA¶¯@wÎqC½Ĉ»NăëKďÍQÙƫ[«ÃígßÔÇOÝáWñuZ¯ĥŕā¡ÑķJu¤E å¯°WKÉ±_d_}}vyõu¬ï¹ÓU±½@gÏ¿rÃ½DgCdµ°MFYxw¿CG£Rƛ½Õ{]L§{qqą¿BÇƻğëܭǊË|c²}Fµ}ÙRsÓpg±QNqǫŋRwŕnéÑÉK«SeYRŋ@{¤SJ}D Ûǖ֍]gr¡µŷjqWÛham³~S«Ü[", "@@ƨĶTLÇyqpÇÛqe{~oyen}s`qiXGù]Ëp½©lÉÁp]Þñ´FĂ^fäîºkàz¼BUv¬D"]
				],
				encodeOffsets: [
					[
						[134456, 44547],
						[127123, 51780]
					]
				]
			},
			properties: {
				cp: [126.642464, 45.756967],
				name: "黑龙江",
				childNum: 2
			}
		}, {
			id: "320000",
			geometry: {
				type: "Polygon",
				coordinates: ["@@Õg^vÁbnÀ`Jnĝ¬òM¶ĘTÖŒbe¦¦{¸ZâćNp©Hp|`mjhSEb\\afv`sz^lkljÄtg¤D­¾X¿À|ĐiZȀåB·î}GL¢õcßjayBFµÏC^ĭcÙt¿sğH]j{s©HM¢QnDÀ©DaÜÞ·jgàiDbPufjDk`dPOîhw¡ĥ¥GP²ĐobºrYî¶aHŢ´ ]´rılw³r_{£DB_Ûdåuk|Ũ¯F Cºyr{XFye³Þċ¿ÂkĭB¿MvÛpm`rÚã@Ę¹hågËÖƿxnlč¶Åì½Ot¾dJlVJĂǀŞqvnO^JZż·Q}êÍÅmµÒ]ƍ¦Dq}¬R^èĂ´ŀĻĊIÔtĲyQŐĠMNtR®òLhĚs©»}OÓGZz¶A\\jĨFäOĤHYJvÞHNiÜaĎÉnFQlNM¤B´ĄNöɂtpŬdZÅglmuÇUšŞÚb¤uŃJŴu»¹ĄlȖħŴw̌ŵ²ǹǠ͛hĭłƕrçü±Yrřl¥i`ã__¢ćSÅr[Çq^ùzWmOĈaŐÝɞï²ʯʊáĘĳĒǭPħ͍ôƋÄÄÍīçÛɈǥ£­ÛmY`ó£Z«§°Ó³QafusNıǅ_k}¢m[ÝóDµ¡RLčiXyÅNïă¡¸iĔÏNÌķoıdōîåŤûHcs}~Ûwbù¹£¦ÓCtOPrE^ÒogĉIµÛÅʹK¤½phMú`mR¸¦PƚgÉLRs`£¯ãhD¨|³¤C"],
				encodeOffsets: [
					[121451, 32518]
				]
			},
			properties: {
				cp: [118.767413, 32.041544],
				name: "江苏",
				childNum: 1
			}
		}, {
			id: "330000",
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@jX^n", "@@sfdM", "@@qP\\xz[_i", "@@o\\VzRZ}mECy", "@@R¢FX}°[m]", "@@Cb\\}", "@@e|v\\laus", "@@v~s{", "@@QxÂF©}", "@@¹nvÞs©m", "@@rQgYIh", "@@bi«ZX", "@@p[}ILd", "@@À¿|", "@@¹dnb", "@@rS}[Kl", "@@g~h}", "@@FlCk", "@@ůTG°ĄLHm°UF", "@@OdRe", "@@v[u\\", "@@FjâL~wyoo~sµLZ", "@@¬e¹aH", "@@\\nÔ¡q]L³ë\\ÿ®QÌ", "@@ÊA­©]ª", "@@Kxv{­", "@@@hlIk_", "@@pWcrxp", "@@Md|_iA", "@@¢X£½z\\ðpN", "@@hlÜ[LykAvyfw^E ", "@@fp¤MusH", "@@®_ma~LÁ¬`", "@@@°¡mÛGĕ¨§Ianá[ýƤjfæÐNäGp", "@@iMt\\", "@@Zc[b", "@@X®±GrÆ°Zæĉm", "@@Z~dOSo|A¿qZv", "@@@`EN£p", "@@|s", "@@@nDi", "@@na£¾uYL¯QªmĉÅdMgÇjcº«ę¬­K­´B«Âącoċ\\xK`cįŧ«®á[~ıxu·ÅKsËÉc¢Ù\\ĭƛëbf¹­ģSĜkáƉÔ­ĈZB{aMµfzŉfÓÔŹŁƋǝÊĉ{ğč±g³ne{ç­ií´S¬\\ßðK¦w\\iqªĭiAuA­µ_W¥ƣO\\lċĢttC¨£t`PZäuXßBsĻyekOđġĵHuXBµ]×­­\\°®¬F¢¾pµ¼kŘó¬Wät¸|@L¨¸µrºù³Ù~§WIZW®±Ð¨ÒÉx`²pĜrOògtÁZ{üÙ[|ûKwsPlU[}¦Rvn`hsª^nQ´ĘRWb_ rtČFIÖkĦPJ¶ÖÀÖJĈĄTĚòC ²@PúØz©Pî¢£CÈÚĒ±hŖl¬â~nm¨f©iļ«mntqÒTÜÄjL®EÌFª²iÊxØ¨IÈhhst[Ôx}dtüGæţŔïĬaĸpMËÐjē¢·ðĄÆMzjWKĎ¢Q¶À_ê_@ıi«pZgf¤Nrq]§ĂN®«H±yƳí¾×ŊďŀĐÏŴǝĂíÀBŖÕªÁŐTFqĉ¯³ËCĕģi¨hÜ·ñt»¯Ï", "@@ºwZRkĕWK "]
				],
				encodeOffsets: [
					[
						[125785, 31436],
						[125729, 31431],
						[125513, 31380],
						[125329, 30690],
						[125223, 30438],
						[125115, 30114],
						[124815, 29155],
						[124419, 28746],
						[124095, 28635],
						[124005, 28609],
						[125e3, 30713],
						[125111, 30698],
						[125078, 30682],
						[125150, 30684],
						[124014, 28103],
						[125008, 31331],
						[125411, 31468],
						[125329, 31479],
						[125369, 31139],
						[125626, 30916],
						[125417, 30956],
						[125254, 30976],
						[125199, 30997],
						[125095, 31058],
						[125083, 30915],
						[124885, 31015],
						[125218, 30798],
						[124867, 30838],
						[124755, 30788],
						[124802, 30809],
						[125267, 30657],
						[125218, 30578],
						[125200, 30562],
						[125192, 30787],
						[124968, 30474],
						[125167, 30396],
						[125115, 30363],
						[124955, 29879],
						[124714, 29781],
						[124762, 29462],
						[124325, 28754],
						[124863, 30077],
						[125366, 31477]
					]
				]
			},
			properties: {
				cp: [120.153576, 30.287459],
				name: "浙江",
				childNum: 43
			}
		}, {
			id: "340000",
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@^iuLV\\", "@@e©Edh", "@@´CE¶zAXêeödK¡~H¸íæAȽd{ďÅÀ½W®£ChÃsikkly]_teu[bFaTign{]GqªoĈMYá|·¥f¥őaSÕėNµñĞ«Im_m¿Âa]uĜp Z_§{Cäg¤°r[_YjÆOdý[I[á·¥Q_nùgL¾mzˆDÜÆ¶ĊJhpc¹O]iŠ]¥ jtsggDÑ¡w×jÉ©±EFË­KiÛÃÕYvsm¬njĻª§emná}k«ŕgđ²ÙDÇ¤í¡ªOy×Où±@DñSęćăÕIÕ¿IµĥOlJÕÍRÍ|JìĻÒåyķrĕq§ÄĩsWÆßF¶X®¿mwRIÞfßoG³¾©uyHį{Ɓħ¯AFnuPÍÔzVdàôº^Ðæd´oG¤{S¬ćxã}ŧ×Kǥĩ«ÕOEÐ·ÖdÖsƘÑ¨[Û^Xr¢¼§xvÄÆµ`K§ tÒ´Cvlo¸fzŨð¾NY´ı~ÉĔēßúLÃÃ_ÈÏ|]ÂÏHlg`ben¾¢pUh~ƴĖ¶_r sĄ~cƈ]|r c~`¼{À{ȒiJjz`îÀT¥Û³]u}fïQl{skloNdjäËzDvčoQďHI¦rbrHĖ~BmlNRaĥTX\\{fÁKÁ®TLÂÄMtÊgĀDĄXƔvDcÎJbt[¤D@®hh~kt°ǾzÖ@¾ªdbYhüóV´ŮŒ¨Üc±r@J|àuYÇÔG·ĚąĐlŪÚpSJ¨ĸLvÞcPæķŨ®mÐálsgd×mQ¨ųÆ©Þ¤IÎs°KZpĄ|XwWdĎµmkǀwÌÕæhºgBĝâqÙĊzÖgņtÀÁĂÆáhEz|WzqD¹°Eŧl{ævÜcA`¤C`|´qxĲkq^³³GšµbíZ¹qpa±ď OH¦Ħx¢gPícOl_iCveaOjChß¸iÝbÛªCC¿mRV§¢A|tbkĜEÀtîm^g´fÄ"]
				],
				encodeOffsets: [
					[
						[121722, 32278],
						[119475, 30423],
						[121606, 33646]
					]
				]
			},
			properties: {
				cp: [117.283042, 31.86119],
				name: "安徽",
				childNum: 3
			}
		}, {
			id: "350000",
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@zht´}[", "@@aj^~ĆGå", "@@edHse", "@@@vPGsyQ", "@@sBzddW[O", "@@S¨Qy", "@@NVucW", "@@qptB@q", "@@¸[iu", "@@Q\\pD[_", "@@jSwUappI", "@@eXª~", "@@AjvFoo", "@@fT_Çí\\v|ba¦jZÆy|®", "@@IjLg", "@@wJIx«¼AoNe{M¥", "@@K±¡ÓČ~N¾", "@@k¡¹Eh~c®uDqZì¡I~Māe£bN¨gZý¡a±Öcp©PhI¢QqÇGj|¥U g[Ky¬ŏv@OptÉEF\\@ åA¬V{XģĐBycpě¼³Ăp·¤¥ohqqÚ¡ŅLs^Ã¡§qlÀhH¨MCe»åÇGD¥zPO£čÙkJA¼ßėuĕeûÒiÁŧS[¡Uûŗ½ùěcÝ§SùĩąSWó«íęACµeRåǃRCÒÇZÍ¢ź±^dlstjD¸ZpuÔâÃH¾oLUêÃÔjjēò´ĄWƛ^Ñ¥Ħ@ÇòmOw¡õyJyD}¢ďÑÈġfZda©º²z£NjD°Ötj¶¬ZSÎ~¾c°¶ÐmxO¸¢Pl´SL|¥AȪĖMņĲg®áIJČĒü` QF¬h|ĂJ@zµ |ê³È ¸UÖŬŬÀCtrĸr]ðM¤ĶĲHtÏ AĬkvsq^aÎbvdfÊòSD´Z^xPsĂrvƞŀjJd×ŘÉ ®AÎ¦ĤdxĆqAZRÀMźnĊ»İÐZ YXæJyĊ²·¶q§·K@·{sXãô«lŗ¶»o½E¡­«¢±¨Y®Ø¶^AvWĶGĒĢPlzfļtàAvWYãO_¤sD§ssČġ[kƤPX¦`¶®BBvĪjv©jx[L¥àï[F¼ÍË»ğV`«Ip}ccÅĥZEãoP´B@D¸m±z«Ƴ¿å³BRØ¶Wlâþäą`]Z£Tc ĹGµ¶Hm@_©k¾xĨôȉðX«½đCIbćqK³ÁÄš¬OAwã»aLŉËĥW[ÂGIÂNxĳ¤D¢îĎÎB§°_JGs¥E@¤ućPåcuMuw¢BI¿]zG¹guĮI"]
				],
				encodeOffsets: [
					[
						[123250, 27563],
						[122541, 27268],
						[123020, 27189],
						[122916, 27125],
						[122887, 26845],
						[122808, 26762],
						[122568, 25912],
						[122778, 26197],
						[122515, 26757],
						[122816, 26587],
						[123388, 27005],
						[122450, 26243],
						[122578, 25962],
						[121255, 25103],
						[120987, 24903],
						[122339, 25802],
						[121042, 25093],
						[122439, 26024]
					]
				]
			},
			properties: {
				cp: [119.306239, 26.075302],
				name: "福建",
				childNum: 18
			}
		}, {
			id: "360000",
			geometry: {
				type: "Polygon",
				coordinates: ["@@ÖP¬ǦĪØLŨä~Ĉw«|TH£pc³Ïå¹]ĉđxe{ÎÓvOEm°BƂĨİ|Gvz½ª´HàpeJÝQxnÀW­EµàXÅĪt¨ÃĖrÄwÀFÎ|Ă¡WÕ¸cf¥XaęST±m[r«_gmQu~¥V\\OkxtL E¢Ú^~ýØkbēqoě±_Êw§Ñ²ÏƟė¼mĉŹ¿NQYBąrwģcÍ¥B­ŗÊcØiIƝĿuqtāwO]³YCñTeÉcaubÍ]trluīBÐGsĵıN£ï^ķqsq¿DūūVÕ·´Ç{éĈýÿOER_đûIċâJh­ŅıNȩĕB¦K{Tk³¡OP·wnµÏd¯}½TÍ«YiµÕsC¯iM¤­¦¯P|ÿUHvhe¥oFTuõ\\OSsMòđƇiaºćXĊĵà·çhƃ÷Ç{ígu^đgm[ÙxiIN¶Õ»lđÕwZSÆv©_ÈëJbVkĔVÀ¤P¾ºÈMÖxlò~ªÚàGĂ¢B±ÌKyñ`w²¹·`gsÙfIěxŕeykpudjuTfb·hh¿Jd[\\LáƔĨƐAĈepÀÂMD~ņªe^\\^§ý©j×cZØ¨zdÒa¶lÒJìõ`oz÷@¤uŞ¸´ôęöY¼HČƶajlÞƩ¥éZ[|h}^U  ¥pĄžƦO lt¸Æ Q\\aÆ|CnÂOjt­ĚĤdÈF`¶@Ðë ¦ōÒ¨SêvHĢÛ@[ÆQoxHW[ŰîÀt¦Ǆ~NĠ¢lĄtZoCƞÔºCxrpČNpj¢{f_Y`_eq®Aot`@oDXfkp¨|s¬\\DÄSfè©Hn¬^DhÆyøJhØxĢĀLÊƠPżċĄwĮ¶"],
				encodeOffsets: [
					[118923, 30536]
				]
			},
			properties: {
				cp: [115.892151, 28.676493],
				name: "江西",
				childNum: 1
			}
		}, {
			id: "370000",
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@Xjd]mE", "@@itnq", "@@Dl@k", "@@TGw", "@@K¬U", "@@Wd`c", "@@PtMs", "@@LnXlc", "@@ppVu]Qn", "@@cdzAU_", "@@udRhnCE", "@@oIpP", "@@M{ĿčwbxƨîKÎMĮ]ZF½Y]â£ph¶¨râøÀÎǨ¤^ºÄGz~grĚĜlĞÆLĆǆ¢Îo¦cvKbgr°WhmZp L]LºcUÆ­nżĤÌĒbAnrOA´ȊcÀbƦUØrĆUÜøĬƞŶǬĴóò_A̈«ªdÎÉnb²ĦhņBĖįĦåXćì@L¯´ywƕCéÃµė ƿ¸lµZæyj|BíÂKNNnoƈfÈMZwnŐNàúÄsTJULîVjǎ¾ĒØDz²XPn±ŴPè¸ŔLƔÜƺ_TüÃĤBBċÈöA´faM¨{«M`¶d¡ôÖ°mȰBÔjj´PM|c^d¤u¤Û´ä«ƢfPk¶Môl]Lb}su^ke{lCMrDÇ­]NÑFsmoõľHyGă{{çrnÓEƕZGª¹Fj¢ÿ©}ÌCǷë¡ąuhÛ¡^KxC`C\\bÅxì²ĝÝ¿_NīCȽĿåB¥¢·IŖÕy\\¹kxÃ£ČáKµË¤ÁçFQ¡KtŵƋ]CgÏAùSedcÚźuYfyMmhUWpSyGwMPqŀÁ¼zK¶G­Y§Ë@´śÇµƕBm@IogZ¯uTMx}CVKï{éƵP_K«pÛÙqċtkkù]gTğwoɁsMõ³ăAN£MRkmEÊčÛbMjÝGuIZGPģãħE[iµBEuDPÔ~ª¼ęt]ûG§¡QMsğNPŏįzs£Ug{đJĿļā³]ç«Qr~¥CƎÑ^n¶ÆéÎR~Ż¸YI] PumŝrƿIā[xeÇ³L¯v¯s¬ÁY~}ťuŁgƋpÝĄ_ņī¶ÏSR´ÁP~¿Cyċßdwk´SsX|t`Ä ÈðAªìÎT°¦Dda^lĎDĶÚY°`ĪŴǒàŠv\\ebZHŖR¬ŢƱùęOÑM­³FÛaj"]
				],
				encodeOffsets: [
					[
						[123806, 39303],
						[123821, 39266],
						[123742, 39256],
						[123702, 39203],
						[123649, 39066],
						[123847, 38933],
						[123580, 38839],
						[123894, 37288],
						[123043, 36624],
						[123344, 38676],
						[123522, 38857],
						[123628, 38858],
						[118267, 36772]
					]
				]
			},
			properties: {
				cp: [117.000923, 36.675807],
				name: "山东",
				childNum: 13
			}
		}, {
			id: "410000",
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@dXD}~Hgq~ÔN~zkĘHVsǲßjŬŢ`Pûàl¢\\ÀEhİgÞē X¼`khÍLùµP³swIÓzeŠĠð´E®ÚPtºIŊÊºL«šŕQGYfa[şußǑĩų_Z¯ĵÙčC]kbc¥CS¯ëÍB©ïÇÃ_{sWTt³xlàcČzÀD}ÂOQ³ÐTĬµƑÐ¿ŸghłŦv~}ÂZ«¤lPÇ£ªÝŴÅR§ØnhctâknÏ­ľŹUÓÝdKuķI§oTũÙďkęĆH¸Ó\\Ä¿PcnS{wBIvÉĽ[GqµuŇôYgûZca©@½Õǽys¯}lgg@­C\\£asIdÍuCQñ[L±ęk·ţb¨©kK»KC²òGKmĨS`UQnk}AGēsqaJ¥ĐGRĎpCuÌy ã iMcplk|tRkðev~^´¦ÜSí¿_iyjI|ȑ|¿_»d}q^{Ƈdă}tqµ`ŷé£©V¡om½ZÙÏÁRD|JOÈpÀRsI{ùÓjuµ{t}uËRivGçJFjµåkWê´MÂHewixGw½Yŷpµú³XU½ġyłåkÚwZX·l¢Á¢KzOÎÎjc¼htoDHr|­J½}JZ_¯iPq{tę½ĕ¦Zpĵø«kQĹ¤]MÛfaQpě±ǽ¾]u­Fu÷nčÄ¯ADp}AjmcEÇaª³o³ÆÍSƇĈÙDIzçñİ^KNiÞñ[aA²zzÌ÷D|[íÄ³gfÕÞd®|`Ć~oĠƑô³ŊD×°¯CsøÂ«ìUMhTº¨¸ǝêWÔDruÂÇZ£ĆPZW~ØØv¬gèÂÒw¦X¤Ā´oŬ¬²Ês~]®tªapŎJ¨Öº_ŔfŐ\\Đ\\Ĝu~m²Ƹ¸fWĦrƔ}Î^gjdfÔ¡J}\\n C¦þWxªJRÔŠu¬ĨĨmFdM{\\d\\YÊ¢ú@@¦ª²SÜsC}fNècbpRmlØ^gd¢aÒ¢CZZxvÆ¶N¿¢T@uC¬^ĊðÄn|lIlXhun[", "@@hzUq"]
				],
				encodeOffsets: [
					[
						[116744, 37216],
						[116480, 33048]
					]
				]
			},
			properties: {
				cp: [113.665412, 34.757975],
				name: "河南",
				childNum: 2
			}
		}, {
			id: "420000",
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@ASd", "@@ls{d", "@@¾«}{ra®pîÃ\\{øCËyyB±b\\òÝjKL ]ĎĽÌJyÚCƈćÎT´Å´pb©ÈdFin~BCo°BĎÃømv®E^vǾ½Ĝ²RobÜeN^ĺ£R¬lĶ÷YoĖ¥Ě¾|sOr°jY`~I¾®I{GqpCgyl{£ÍÍyPLÂ¡¡¸kWxYlÙæŁĢz¾V´W¶ùŸo¾ZHxjwfxGNÁ³Xéæl¶EièIH ujÌQ~v|sv¶Ôi|ú¢FhQsğ¦SiŠBgÐE^ÁÐ{čnOÂÈUÎóĔÊēĲ}Z³½Mŧïeyp·uk³DsÑ¨L¶_ÅuÃ¨w»¡WqÜ]\\Ò§tƗcÕ¸ÕFÏǝĉăxŻČƟOKÉġÿ×wg÷IÅzCg]m«ªGeçÃTC«[t§{loWeC@ps_Bp­rf_``Z|ei¡oċMqow¹DƝÓDYpûsYkıǃ}s¥ç³[§cY§HK«Qy]¢wwö¸ïx¼ņ¾Xv®ÇÀµRĠÐHM±cÏdƒǍũȅȷ±DSyúĝ£ŤĀàtÖÿï[îb\\}pĭÉI±Ñy¿³x¯No|¹HÏÛmjúË~TuęjCöAwě¬Rđl¯ Ñb­ŇTĿ_[IčĄʿnM¦ğ\\É[T·k¹©oĕ@A¾wya¥Y\\¥Âaz¯ãÁ¡k¥ne£ÛwE©Êō¶˓uoj_U¡cF¹­[WvP©whuÕyBF`RqJUw\\i¡{jEPïÿ½fćQÑÀQ{°fLÔ~wXgītêÝ¾ĺHd³fJd]HJ²EoU¥HhwQsƐ»Xmg±çve]DmÍPoCc¾_hhøYrŊU¶eD°Č_N~øĹĚ·`z]Äþp¼äÌQv\\rCé¾TnkžŐÚÜa¼ÝƆĢ¶ÛodĔňÐ¢JqPb ¾|J¾fXƐîĨ_Z¯À}úƲN_ĒÄ^ĈaŐyp»CÇÄKñL³ġM²wrIÒŭxjb[n«øæà ^²­h¯ÚŐªÞ¸Y²ĒVø}Ā^İ´LÚm¥ÀJÞ{JVųÞŃx×sxxƈē ģMřÚðòIfĊŒ\\Ʈ±ŒdÊ§ĘDvČ_Àæ~Dċ´A®µ¨ØLV¦êHÒ¤"]
				],
				encodeOffsets: [
					[
						[113712, 34e3],
						[115612, 30507],
						[113649, 34054]
					]
				]
			},
			properties: {
				cp: [114.298572, 30.584355],
				name: "湖北",
				childNum: 3
			}
		}, {
			id: "430000",
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@nFZw", "@@ãÆá½ÔXrCOËRïÿĩ­TooQyÓ[ŅBE¬ÎÓXaį§Ã¸G °ITxpúxÚĳ¥ÏĢ¾edÄ©ĸGàGhM¤Â_U}Ċ}¢pczfþg¤ÇôAV", "@@ȴÚĖÁĐiOĜ«BxDõĚivSÌ}iùÜnÐºG{p°M°yÂÒzJ²Ì ÂcXëöüiáÿñőĞ¤ùTz²CȆȸǎŪƑÐc°dPÎğË¶[È½u¯½WM¡­ÉB·rínZÒ `¨GA¾\\pēXhÃRC­üWGġuTé§ŎÑ©êLM³}_EÇģc®ęisÁPDmÅ{b[RÅs·kPŽƥóRoOV~]{g\\êYƪ¦kÝbiċƵGZ»Ěõó·³vŝ£ø@pyö_ëIkÑµbcÑ§y×dYØªiþUjŅ³C}ÁN»hĻħƏâƓKA·³CQ±µ§¿AUƑ¹AtćOwD]JUÖgk¯b£ylZFËÑ±H­}EbóľA¡»Ku¦·³åş¥ùBD^{ÌC´­¦ŷJ£^[ª¿ğ|ƅN skóā¹¿ï]ă~÷O§­@Vm¡Qđ¦¢Ĥ{ºjÔª¥nf´~Õo×ÛąGû¥cÑ[Z¶ŨĪ²SÊǔƐƀAÚŌ¦QØ¼rŭ­«}NÏürÊ¬mjr@ĘrTW ­SsdHzƓ^ÇÂyUi¯DÅYlŹu{hT}mĉ¹¥ěDÿë©ıÓ[Oº£¥ótł¹MÕƪ`PDiÛU¾ÅâìUñBÈ£ýhedy¡oċ`pfmjP~kZaZsÐd°wj§@Ĵ®w~^kÀÅKvNmX\\¨aŃqvíó¿F¤¡@ũÑVw}S@j}¾«pĂrªg àÀ²NJ¶¶DôK|^ª°LX¾ŴäPĪ±£EXd^¶ĲÞÜ~u¸ǔMRhsRe`ÄofIÔ\\Ø  ićymnú¨cj ¢»GČìƊÿÐ¨XeĈĀ¾Oð Fi ¢|[jVxrIQ_EzAN¦zLU`cªxOTu RLÄªpUĪȴ^ŎµªÉFxÜf¤ºgĲèy°Áb[¦Zb¦z½xBĖ@ªpºjS´rVźOd©ʪiĎăJP`"]
				],
				encodeOffsets: [
					[
						[115640, 30489],
						[112577, 27316],
						[114113, 30649]
					]
				]
			},
			properties: {
				cp: [112.982279, 28.19409],
				name: "湖南",
				childNum: 3
			}
		}, {
			id: "440000",
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@QdAsa", "@@lxDRm", "@@sbhNLo", "@@Ă ý", "@@WltOY[", "@@Kr]S", "@@e~AS}", "@@I|Mym", "@@Û³LS²Q", "@@nvºBë¥cÕº", "@@zdÛJm", "@@°³", "@@a yAª¸ËJIxØ@ĀHÉÕZofoo", "@@sŗÃÔėAƁZÄ ~°ČPºb", "@@¶ÝÌvmĞh¹Ĺ", "@@HdSjĒ¢D}waru«ZqadY{K", "@@el\\LqqO", "@@~rMmX", "@@f^E", "@@øPªoj÷ÍÝħXČx°Q¨ıXJp", "@@gÇƳmxatfu", "@@EÆC½", "@@¸B_¶ekWvSivc}p}Ăº¾NĎyj¦Èm th_®Ä}»âUzLË²Aā¡ßH©Ùñ}wkNÕ¹ÇO½¿£ēUlaUìIÇª`uTÅxYĒÖ¼kÖµMjJÚwn\\hĒv]îh|ÈƄøèg¸Ķß ĉĈWb¹ƀdéĘNTtP[öSvrCZaGubo´ŖÒÇĐ~¡zCIözx¢PnÈñ @ĥÒ¦]ƜX³ăĔñiiÄÓVépKG½ÄÓávYoC·sitiaÀyŧÎ¡ÈYDÑům}ý|m[węõĉZÅxUO}÷N¹³ĉo_qtăqwµŁYÙǝŕ¹tïÛUÃ¯mRCºĭ|µÕÊK½Rē ó]GªęAxNqSF|ām¡diď×YïYWªŉOeÚtĐ«zđ¹TāúEáÎÁWwíHcòßÎſ¿Çdğ·ùT×Çūʄ¡XgWÀǇğ·¿ÃOj YÇ÷Sğ³kzőõmĝ[³¡VÙæÅöMÌ³¹pÁaËýý©D©ÜJŹƕģGą¤{ÙūÇO²«BƱéAÒĥ¡«BhlmtÃPµyU¯ucd·w_bŝcīímGOGBȅŹãĻFŷŽŕ@Óoo¿ē±ß}}ÓF÷tĲWÈCőâUâǙIğŉ©IĳE×Á³AĥDĈ±ÌÜÓĨ£L]ĈÙƺZǾĆĖMĸĤfÎĵlŨnÈĐtFFĤêk¶^k°f¶g}®Faf`vXŲxl¦ÔÁ²¬Ð¦pqÊÌ²iXØRDÎ}Ä@ZĠsx®AR~®ETtĄZƈfŠŠHâÒÐAµ\\S¸^wĖkRzalŜ|E¨ÈNĀňZTpBh£\\ĎƀuXĖtKL¶G|»ĺEļĞ~ÜĢÛĊrOÙîvd]n¬VÊĜ°RÖpMƀ¬HbwEÀ©\\¤]ŸI®¥D³|Ë]CúAŠ¦æ´¥¸Lv¼¢ĽBaôF~®²GÌÒEYzk¤°ahlVÕI^CxĈPsBƒºVÀB¶¨R²´D", "@@OR"]
				],
				encodeOffsets: [
					[
						[117381, 22988],
						[116552, 22934],
						[116790, 22617],
						[116973, 22545],
						[116444, 22536],
						[116931, 22515],
						[116496, 22490],
						[116453, 22449],
						[113301, 21439],
						[118726, 21604],
						[118709, 21486],
						[113210, 20816],
						[115482, 22082],
						[113171, 21585],
						[113199, 21590],
						[115232, 22102],
						[115739, 22373],
						[115134, 22184],
						[113056, 21175],
						[119573, 21271],
						[119957, 24020],
						[115859, 22356],
						[116680, 26053],
						[116561, 22649]
					]
				]
			},
			properties: {
				cp: [113.280637, 23.125178],
				name: "广东",
				childNum: 24
			}
		}, {
			id: "450000",
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@H TI¡U", "@@Ɣ_LÊFZgčP­kini«qÇczÍY®¬Ů»qR×ō©DÕ§ƙǃŵTÉĩ±ıdÑnYYĲvNĆĆØÜ Öp}e³¦m©iÓ|¹ħņ|ª¦QF¢Â¬ʖovg¿em^ucäāmÇÖåB¡Õçĝ}FĻ¼Ĺ{µHKsLSđƃrč¤[AgoSŇYMÿ§Ç{FśbkylQxĕ]T·¶[BÑÏGáşşƇeăYSs­FQ}­BwtYğÃ@~CÍQ ×WjË±rÉ¥oÏ ±«ÓÂ¥kwWűue_b­E~µh¯ecl¯Ïr¯EģJğ}w³Ƈē`ãògK_ÛsUʝćğ¶höO¤Ǜn³c`¡yię[ďĵűMę§]XÎ_íÛ]éÛUćİÕBƣ±dy¹T^dûÅÑŦ·PĻþÙ`K¦¢ÍeĥR¿³£[~äu¼dltW¸oRM¢ď\\z}Æzdvň{ÎXF¶°Â_ÒÂÏL©ÖTmu¼ãlīkiqéfA·Êµ\\őDc¥ÝFyÔćcűH_hLÜêĺĐ¨c}rn`½Ì@¸¶ªVLhŒ\\Ţĺk~Ġið°|gtTĭĸ^xvKVGréAébUuMJVÃO¡qĂXËSģãlýà_juYÛÒBG^éÖ¶§EGÅzěƯ¤EkN[kdåucé¬dnYpAyČ{`]þ±X\\ÞÈk¡ĬjàhÂƄ¢Hè ŔâªLĒ^Öm¶ħĊAǦė¸zÚGn£¾rªŀÜt¬@ÖÚSx~øOŒŶÐÂæȠ\\ÈÜObĖw^oÞLf¬°bI lTØBÌF£Ć¹gñĤaYt¿¤VSñK¸¤nM¼JE±½¸ñoÜCƆæĪ^ĚQÖ¦^f´QüÜÊz¯lzUĺš@ìp¶n]sxtx¶@~ÒĂJb©gk{°~c°`Ô¬rV\\la¼¤ôá`¯¹LCÆbxEræOv[H­[~|aB£ÖsºdAĐzNÂðsÞÆĤªbab`ho¡³F«èVZs\\\\ÔRzpp®SĪº¨ÖºNĳd`a¦¤F³¢@`¢ĨĀìhYvlĆº¦Ċ~nS|gźv^kGÆÀè·"]
				],
				encodeOffsets: [
					[
						[111707, 21520],
						[113706, 26955]
					]
				]
			},
			properties: {
				cp: [108.320004, 22.82402],
				name: "广西",
				childNum: 2
			}
		}, {
			id: "460000",
			geometry: {
				type: "Polygon",
				coordinates: ["@@¦Ŝil¢XƦƞòïè§ŞCêɕrŧůÇąĻõ·ĉ³œ̅kÇm@ċȧŧĥĽʉ­ƅſȓÒË¦ŝE}ºƑ[ÍĜȋ gÎfǐÏĤ¨êƺ\\Ɔ¸ĠĎvʄȀÐ¾jNðĀÒRZǆzÐĊ¢DÀɘZ"],
				encodeOffsets: [
					[112750, 20508]
				]
			},
			properties: {
				cp: [110.33119, 20.031971],
				name: "海南",
				childNum: 1
			}
		}, {
			id: "510000",
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@LqSn", "@@ĆOìÛÐ@ĞǔNY{¤Á§di´ezÝúØãwIþËQÇ¦ÃqÉSJ»ĂéʔõÔƁİlƞ¹§ĬqtÀƄmÀêErĒtD®ċæcQE®³^ĭ¥©l}äQtoŖÜqÆkµªÔĻĴ¡@Ċ°B²Èw^^RsºTĀ£ŚæQPJvÄz^Đ¹Æ¯fLà´GC²dt­ĀRt¼¤ĦOðğfÔðDŨŁĞƘïPÈ®âbMüÀXZ ¸£@Å»»QÉ­]dsÖ×_Í_ÌêŮPrĔĐÕGĂeZÜîĘqBhtO ¤tE[h|YÔZśÎs´xº±Uñt|OĩĠºNbgþJy^dÂY Į]Řz¦gC³R`Āz¢Aj¸CL¤RÆ»@­Ŏk\\Ç´£YW}z@Z}Ã¶oû¶]´^NÒ}èNªPÍy¹`S°´ATeVamdUĐwʄvĮÕ\\uÆŗ¨Yp¹àZÂmWh{á}WØǍÉüwga§ßAYrÅÂQĀÕ¬LŐý®Xøxª½Ű¦¦[þ`ÜUÖ´òrÙŠ°²ÄkĳnDX{U~ET{ļº¦PZcjF²Ė@pg¨B{u¨ŦyhoÚD®¯¢ WòàFÎ¤¨GDäz¦kŮPġqË¥À]eâÚ´ªKxīPÖ|æ[xÃ¤JÞĥsNÖ½I¬nĨY´®ÐƐmDŝuäđđEbee_v¡}ìęǊē}qÉåT¯µRs¡M@}ůaa­¯wvƉåZw\\Z{åû`[±oiJDÅ¦]ĕãïrG réÏ·~ąSfy×Í·ºſƽĵȁŗūmHQ¡Y¡®ÁÃ×t«­T¤JJJyJÈ`Ohß¦¡uËhIyCjmÿwZGTiSsOB²fNmsPa{M{õE^Hj}gYpaeu¯oáwHjÁ½M¡pMuåmni{fk\\oÎqCwEZ¼KĝAy{m÷LwO×SimRI¯rKõBS«sFe]fµ¢óY_ÆPRcue°Cbo×bd£ŌIHgtrnyPt¦foaXďxlBowz_{ÊéWiêEGhÜ¸ºuFĈIxf®Y½ĀǙ]¤EyF²ċw¸¿@g¢§RGv»áW`ÃĵJwi]t¥wO­½a[×]`Ãi­üL¦LabbTÀåc}ÍhÆh®BHî|îºÉk­¤Sy£ia©taį·Ɖ`ō¥UhOĝLk}©Fos´JmµlŁuønÑJWÎªYÀïAetTŅÓGË«bo{ıwodƟ½OġÜÂµxàNÖ¾P²§HKv¾]|BÆåoZ`¡Ø`ÀmºĠ~ÌÐ§nÇ¿¤]wğ@srğu~Io[é±¹ ¿ſđÓ@qg¹zƱřaí°KtÇ¤V»Ã[ĩǭƑ^ÇÓ@áťsZÏÅĭƋěpwDóÖáŻneQËq·GCœýS]x·ýq³OÕ¶Qzßti{řáÍÇWŝŭñzÇWpç¿JXĩè½cFÂLiVjx}\\NŇĖ¥GeJA¼ÄHfÈu~¸Æ«dE³ÉMA|bÒćhG¬CMõƤąAvüVéŀ_VÌ³ĐwQj´·ZeÈÁ¨X´Æ¡Qu·»ÕZ³ġqDoy`L¬gdp°şp¦ėìÅĮZ°Iähzĵf²å ĚÑKpIN|Ñz]ń·FU×é»R³MÉ»GM«kiér}Ã`¹ăÞmÈnÁîRǀ³ĜoİzŔwǶVÚ£À]ɜ»ĆlƂ²ĠþTº·àUȞÏʦ¶I«dĽĢdĬ¿»Ĕ×h\\c¬ä²GêëĤł¥ÀǿżÃÆMº}BÕĢyFVvwxBèĻĒ©Ĉt@Ğû¸£B¯¨ˋäßkķ½ªôNÔ~t¼Ŵu^s¼{TA¼ø°¢İªDè¾Ň¶ÝJ®Z´ğ~Sn|ªWÚ©òzPOȸbð¢|øĞA"]
				],
				encodeOffsets: [
					[
						[108815, 30935],
						[100197, 35028]
					]
				]
			},
			properties: {
				cp: [104.065735, 30.659462],
				name: "四川",
				childNum: 2
			}
		}, {
			id: "520000",
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@G\\lY£cj", "@@q|mc¯vÏV", "@@hÑ£IsNgßHHªķÃh_¹¡ĝÄ§ń¦uÙùgS¯JH|sÝÅtÁïyMDč»eÕtA¤{b\\}G®u\\åPFqwÅaDK°ºâ_£ùbµmÁÛĹM[q|hlaªāI}Ñµ@swtwm^oµDéĽŠyVky°ÉûÛR³e¥]RÕěħ[ƅåÛDpJiVÂF²I»mN·£LbÒYbWsÀbpkiTZĄă¶Hq`ĥ_J¯ae«KpÝx]aĕÛPÇȟ[ÁåŵÏő÷Pw}TÙ@Õs«ĿÛq©½m¤ÙH·yǥĘĉBµĨÕnđ]K©œáGçş§ÕßgǗĦTèƤƺ{¶ÉHÎd¾ŚÊ·OÐjXWrãLyzÉAL¾ę¢bĶėy_qMĔąro¼hĊw¶øV¤w²Ĉ]ÊKx|`ź¦ÂÈdrcÈbe¸`I¼čTF´¼Óýȃr¹ÍJ©k_șl³´_pĐ`oÒh¶pa^ÓĔ}D»^Xy`d[KvJPhèhCrĂĚÂ^Êƌ wZL­Ġ£ÁbrzOIlMMĪŐžËr×ÎeŦtw|¢mKjSǘňĂStÎŦEtqFT¾Eì¬¬ôxÌO¢ K³ŀºäYPVgŎ¦ŊmŞ¼VZwVlz¤£Tl®ctĽÚó{G­AÇge~Îd¿æaSba¥KKûj®_Ä^\\Ø¾bP®¦x^sxjĶI_Ä Xâ¼Hu¨Qh¡À@Ëô}±GNìĎlT¸`V~R°tbÕĊ`¸úÛtÏFDu[MfqGH·¥yAztMFe|R_GkChZeÚ°tov`xbDnÐ{E}ZèxNEÞREn[Pv@{~rĆAB§EO¿|UZ~ìUf¨J²ĂÝÆsªB`s¶fvö¦Õ~dÔq¨¸º»uù[[§´sb¤¢zþF¢ÆÀhÂW\\ıËIÝo±ĭŠ£þÊs}¡R]ěDg´VG¢j±®èºÃmpU[Áëº°rÜbNu¸}º¼`niºÔXĄ¤¼ÔdaµÁ_ÃftQQgR·Ǔv}Ý×ĵ]µWc¤F²OĩųãW½¯K©]{LóµCIµ±Mß¿h©āq¬o½~@i~TUxð´Đhw­ÀEîôuĶb[§nWuMÆJl½]vuıµb"]
				],
				encodeOffsets: [
					[
						[112158, 27383],
						[112105, 27474],
						[112095, 27476]
					]
				]
			},
			properties: {
				cp: [106.713478, 26.578343],
				name: "贵州",
				childNum: 3
			}
		}, {
			id: "530000",
			geometry: {
				type: "Polygon",
				coordinates: ["@@[ùx½}ÑRHYīĺûsÍniEoã½Ya²ė{c¬ĝgĂsAØÅwďõzFjw}«Dx¿}Uũlê@HÅ­F¨ÇoJ´Ónũuą¡Ã¢pÒÅØ TF²xa²ËXcÊlHîAßËŁkŻƑŷÉ©hW­æßUËs¡¦}teèÆ¶StÇÇ}Fd£jĈZĆÆ¤Tč\\D}O÷£U§~ŃGåŃDĝ¸Tsd¶¶Bª¤u¢ŌĎo~t¾ÍŶÒtD¦ÚiôözØX²ghįh½Û±¯ÿm·zR¦Ɵ`ªŊÃh¢rOÔ´£Ym¼èêf¯ŪĽncÚbw\\zlvWªâ ¦gmĿBĹ£¢ƹřbĥkǫßeeZkÙIKueT»sVesbaĕ  ¶®dNĄÄpªy¼³BE®lGŭCǶwêżĔÂepÍÀQƞpC¼ŲÈ­AÎô¶RäQ^Øu¬°_Èôc´¹ò¨PÎ¢hlĎ¦´ĦÆ´sâÇŲPnÊD^¯°Upv}®BPÌªjǬxSöwlfòªvqĸ|`H­viļndĜ­Ćhňem·FyÞqóSį¯³X_ĞçêtryvL¤§z¦c¦¥jnŞklD¤øz½ĜàĂŧMÅ|áƆàÊcðÂFÜáŢ¥\\\\ºİøÒÐJĴîD¦zK²ǏÎEh~CD­hMn^ÌöÄ©ČZÀaüfɭyœpį´ěFűk]Ôě¢qlÅĆÙa¶~ÄqêljN¬¼HÊNQ´ê¼VØ¸E^ŃÒyM{JLoÒęæe±Ķygã¯JYÆĭĘëo¥Šo¯hcK«z_prC´ĢÖY¼ v¸¢RÅW³Â§fÇ¸Yi³xR´ďUË`êĿUûuĆBƣöNDH«ĈgÑaB{ÊNF´¬c·Åv}eÇÃGB»If¦HňĕM~[iwjUÁKE¾dĪçWIèÀoÈXòyŞŮÈXâÎŚj|àsRyµÖPr´þ ¸^wþTDŔHr¸RÌmfżÕâCôoxĜƌÆĮÐYtâŦÔ@]ÈǮƒ\\Ī¼Ä£UsÈ¯LbîƲŚºyhr@ĒÔƀÀ²º\\êpJ}ĠvqtĠ@^xÀ£È¨mËÏğ}n¹_¿¢×Y_æpÅA^{½Lu¨GO±Õ½ßM¶wÁĢÛPƢ¼pcĲx|apÌ¬HÐŊSfsðBZ¿©XÏÒKk÷Eû¿SrEFsÕūkóVǥŉiTL¡n{uxţÏhôŝ¬ğōNNJkyPaqÂğ¤K®YxÉƋÁ]āęDqçgOgILu\\_gz]W¼~CÔē]bµogpÑ_oď`´³Țkl`IªºÎȄqÔþ»E³ĎSJ»_f·adÇqÇc¥Á_Źw{L^É±ćxU£µ÷xgĉp»ĆqNē`rĘzaĵĚ¡K½ÊBzyäKXqiWPÏÉ¸½řÍcÊG|µƕƣGË÷k°_^ý|_zċBZocmø¯hhcæ\\lMFlư£ĜÆyHF¨µêÕ]HAàÓ^it `þßäkĤÎT~Wlÿ¨ÔPzUCNVv [jâôDôď[}z¿msSh¯{jïğl}šĹ[őgK©U·µË@¾m_~q¡f¹ÅË^»f³ø}Q¡ÖË³gÍ±^Ç\\ëÃA_¿bWÏ[¶ƛé£F{īZgm@|kHǭƁć¦UĔť×ëǟeċ¼ȡȘÏíBÉ£āĘPªĳ¶ŉÿy©nď£G¹¡I±LÉĺÑdĉÜW¥}gÁ{aqÃ¥aıęÏZÁ`"],
				encodeOffsets: [
					[104636, 22969]
				]
			},
			properties: {
				cp: [102.712251, 25.040609],
				name: "云南",
				childNum: 1
			}
		}, {
			id: "540000",
			geometry: {
				type: "Polygon",
				coordinates: ["@@ÂhľxŖxÒVºÅâAĪÝȆµę¯Ňa±r_w~uSÕňqOj]ɄQ£ZUDûoY»©M[L¼qãË{VÍçWVi]ë©Ä÷àyƛhÚU°adcQ~Mx¥caÛcSyFÖk­uRýq¿ÔµQĽ³aG{¿FµëªéĜÿª@¬·K·àariĕĀ«V»ŶĴūgèLǴŇƶaftèBŚ£^âǐÝ®M¦ÁǞÿ¬LhJ¾óƾÆºcxwf]Y´¦|QLn°adĊ\\¨oǀÍŎ´ĩĀd`tÊQŞŕ|¨C^©Ĉ¦¦ÎJĊ{ëĎjª²rÐl`¼Ą[t|¦Stè¾PÜK¸dƄı]s¤î_v¹ÎVòŦj£Əsc¬_Ğ´|Ł¦Av¦w`ăaÝaa­¢e¤ı²©ªSªÈMĄwÉØŔì@T¤Ę\\õª@þo´­xA sÂtŎKzó²ÇČµ¢r^nĊ­Æ¬×üG¢³ {âĊ]G~bÀgVjzlhǶfOfdªB]pjTOtĊn¤}®¦Č¥d¢¼»ddY¼t¢eȤJ¤}Ǿ¡°§¤AÐlc@ĝsªćļđAçwxUuzEÖġ~AN¹ÄÅȀŻ¦¿ģŁéì±Hãd«g[Ø¼ēÀcīľġ¬cJµÐʥVȝ¸ßS¹ý±ğkƁ¼ą^ɛ¤Ûÿb[}¬ōõÃ]ËNm®g@Bg}ÍF±ǐyL¥íCIĳÏ÷Ñį[¹¦[âšEÛïÁÉdƅß{âNÆāŨß¾ě÷yC£k­´ÓH@Â¹TZ¥¢į·ÌAÐ§®Zcv½Z­¹|ÅWZqgW|ieZÅYVÓqdqbc²R@c¥Rã»GeeƃīQ}J[ÒK¬Ə|oėjġĠÑN¡ð¯EBčnwôɍėª²CλŹġǝʅįĭạ̃ūȹ]ΓͧgšsgȽóϧµǛęgſ¶ҍć`ĘąŌJÞä¤rÅň¥ÖÁUětęuůÞiĊÄÀ\\Æs¦ÓRb|Â^řÌkÄŷ¶½÷f±iMÝ@ĥ°G¬ÃM¥n£Øąğ¯ß§aëbéüÑOčk£{\\eµª×MÉfm«Ƒ{Å×Gŏǩãy³©WÑăû··Qòı}¯ãIéÕÂZ¨īès¶ZÈsæĔTŘvgÌsN@îá¾ó@ÙwU±ÉTå»£TđWxq¹Zobs[×¯cĩvėŧ³BM|¹kªħ¥TzNYnÝßpęrñĠĉRS~½ěVVµõ«M££µBĉ¥áºae~³AuĐh`Ü³ç@BÛïĿa©|z²Ý¼D£àč²ŸIûI āóK¥}rÝ_Á´éMaň¨~ªSĈ½½KÙóĿeƃÆB·¬ën×W|Uº}LJrƳlŒµ`bÔ`QÐÓ@s¬ñIÍ@ûws¡åQÑßÁ`ŋĴ{ĪTÚÅTSÄ³Yo|Ç[Ç¾µMW¢ĭiÕØ¿@MhpÕ]jéò¿OƇĆƇpêĉâlØwěsǩĵ¸cbU¹ř¨WavquSMzeo_^gsÏ·¥Ó@~¯¿RiīB\\qTGªÇĜçPoÿfñòą¦óQīÈáPābß{ZŗĸIæÅhnszÁCËìñÏ·ąĚÝUm®ó­L·ăUÈíoù´Êj°ŁŤ_uµ^°ìÇ@tĶĒ¡ÆM³Ģ«İĨÅ®ğRāðggheÆ¢zÊ©Ô\\°ÝĎz~ź¤PnMĪÖB£kné§żćĆKĒ°¼L¶èâz¨u¦¥LDĘz¬ýÎmĘd¾ßFzhg²Fy¦ĝ¤ċņbÎ@yĄæm°NĮZRÖíJ²öLĸÒ¨Y®ƌÐVàtt_ÚÂyĠz]ŢhzĎ{ÂĢXc|ÐqfO¢¤ögÌHNPKŖUú´xx[xvĐCûĀìÖT¬¸^}Ìsòd´_KgžLĴÀBon|H@Êx¦BpŰŌ¿fµƌA¾zǈRx¶FkĄźRzŀ~¶[´HnªVƞuĒ­È¨ƎcƽÌm¸ÁÈM¦x͊ëÀxǆBú^´W£dkɾĬpw˂ØɦļĬIŚÊnŔa¸~J°îlɌxĤÊÈðhÌ®gT´øàCÀ^ªerrƘd¢İP|Ė ŸWªĦ^¶´ÂLaT±üWƜǀRÂŶUńĖ[QhlLüAÜ\\qRĄ©"],
				encodeOffsets: [
					[90849, 37210]
				]
			},
			properties: {
				cp: [91.132212, 29.660361],
				name: "西藏",
				childNum: 1
			}
		}, {
			id: "610000",
			geometry: {
				type: "Polygon",
				coordinates: ["@@¸ÂW¢xR­Fq§uF@N¢XLRMº[ğȣſï|¥Jkc`sŉǷ£Y³WN«ùMëï³ÛIg÷±mTșÚÒķø©þ¥yÓğęmWµÎumZyOŅƟĥÓ~sÑL¤µaÅY¦ocyZ{y c]{Ta©`U_Ěē£ωÊƍKùK¶ȱÝƷ§{û»ÅÁȹÍéuĳ|¹cÑdìUYOuFÕÈYvÁCqÓTǢí§·S¹NgV¬ë÷Át°DØ¯C´ŉƒópģ}ąiEËFéGU¥×K§­¶³BČ}C¿åċ`wġB·¤őcƭ²ő[Å^axwQOñJÙïŚĤNĔwƇÄńwĪ­o[_KÓª³ÙnKÇěÿ]ďă_d©·©Ýŏ°Ù®g]±ß×¥¬÷m\\iaǑkěX{¢|ZKlçhLtŇîŵœè[É@ƉĄEtƇÏ³­ħZ«mJ×¾MtÝĦ£IwÄå\\Õ{OwĬ©LÙ³ÙTª¿^¦rÌĢŭO¥lãyC§HÍ£ßEñX¡­°ÙCgpťzb`wIvA|¥hoĕ@E±iYd¥OÿµÇvPW|mCĴŜǂÒW¶¸AĜh^Wx{@¬­F¸¡ķn£P|ªĴ@^ĠĈæbÔc¶lYi^MicĎ°Â[ävï¶gv@ÀĬ·lJ¸sn|¼u~a]ÆÈtŌºJpþ£KKf~¦UbyäIĺãnÔ¿^­ŵMThĠÜ¤ko¼Ŏìąǜh`[tRd²Ĳ_XPrɲlXiL§à¹H°Ȧqº®QCbAŌJ¸ĕÚ³ĺ§ `d¨YjiZvRĺ±öVKkjGȊÄePĞZmļKÀ[`ösìhïÎoĬdtKÞ{¬èÒÒBÔpĲÇĬJŊ¦±J«[©ārHµàåVKe§|P²ÇÓ·vUzgnN¾yI@oHĆÛķhxen¡QQ±ƝJǖRbzy¸ËÐl¼EºpĤ¼x¼½~Ğà@ÚüdK^mÌSjp²ȮµûGĦ}Ħðǚ¶òƄjɂz°{ºØkÈęâ¦jªBg\\ċ°s¬]jú EȌǆ¬stRÆdĠİwÜ¸ôW¾ƮłÒ_{Ìû¼jº¹¢GǪÒ¯ĘZ`ºŊecņą~BÂgzpâēòYƲȐĎ"],
				encodeOffsets: [
					[113634, 40474]
				]
			},
			properties: {
				cp: [108.948024, 34.263161],
				name: "陕西",
				childNum: 1
			}
		}, {
			id: "620000",
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@Vu_^", "@@ųEĠtt~nkh`Q¦ÅÄÜdwAb×ĠąJ¤DüègĺqBqj°lI¡Ĩ¶ĖIHdjÎB°aZ¢KJO[|A£Dx}NĂ¬HUnrk kp¼Y kMJn[aGáÚÏ[½rc}aQxOgsPMnUsncZsKúvAtÞġ£®ĀYKdnFw¢JE°Latf`¼h¬we|Æbj}GA·~W`¢MC¤tL©Ĳ°qdfObÞĬ¹ttu`^ZúE`[@Æsîz®¡CƳƜG²R¢RmfwĸgÜą G@pzJM½mhVy¸uÈÔO±¨{LfæU¶ßGĂq\\ª¬²I¥IŉÈīoıÓÑAçÑ|«LÝcspīðÍgtë_õ\\ĉñLYnĝgRǡÁiHLlõUĹ²uQjYi§Z_c¨´ĹĖÙ·ŋIaBD­R¹ȥr¯GºßK¨jWkɱOqWĳ\\a­Q\\sg_ĆǛōëp»£lğÛgSŶN®À]ÓämĹãJaz¥V}Le¤Lýo¹IsŋÅÇ^bz³tmEÁ´a¹cčecÇNĊãÁ\\č¯dNj]jZµkÓdaćå]ğĳ@ ©O{¤ĸm¢E·®«|@Xwg]Aģ±¯XǁÑǳªcwQÚŝñsÕ³ÛV_ý¥\\ů¥©¾÷w©WÕÊĩhÿÖÁRo¸V¬âDb¨hûxÊ×ǌ~Zâg|XÁnßYoº§ZÅŘv[ĭÖʃuďxcVbnUSfB¯³_TzºÎO©çMÑ~M³]µ^püµÄY~y@X~¤Z³[Èōl@®Å¼£QK·Di¡ByÿQ_´D¥hŗy^ĭÁZ]cIzýah¹MĪğPs{ò²Vw¹t³ŜË[Ñ}X\\gsF£sPAgěp×ëfYHāďÖqēŭOÏëdLü\\it^c®RÊº¶¢H°mrY£B¹čIoľu¶uI]vģSQ{UŻÅ}QÂ|Ì°ƅ¤ĩŪU ęĄÌZÒ\\v²PĔ»ƢNHĂyAmƂwVm`]ÈbH`Ì¢²ILvĜH®¤Dlt_¢JJÄämèÔDëþgºƫaʎÌrêYi~ Îİ¤NpÀA¾Ĕ¼bð÷®üszMzÖĖQdȨýv§Tè|ªHÃ¾a¸|Ð ƒwKĢx¦ivr^ÿ ¸l öæfƟĴ·PJv}n\\h¹¶v·À|\\ƁĚN´ĜçèÁz]ġ¤²¨QÒŨTIlªťØ}¼˗ƦvÄùØEÂ«FïËIqōTvāÜŏíÛßÛVj³âwGăÂíNOPìyV³ŉĖýZso§HÑiYw[ß\\X¦¥c]ÔƩÜ·«jÐqvÁ¦m^ċ±R¦΋ƈťĚgÀ»IïĨʗƮ°ƝĻþÍAƉſ±tÍEÕÞāNUÍ¡\\ſčåÒʻĘm ƭÌŹöʥëQ¤µ­ÇcƕªoIýIÉ_mkl³ăƓ¦j¡YzŇi}Msßõīʋ }ÁVm_[n}eı­Uĥ¼ªI{Î§DÓƻėojqYhĹT©oūĶ£]ďxĩǑMĝq`B´ƃ˺Чç~²ņj@¥@đ´ί}ĥtPńÇ¾V¬ufÓÉCtÓ̻¹£G³]ƖƾŎĪŪĘ̖¨ʈĢƂlɘ۪üºňUðǜȢƢż̌ȦǼĤŊɲĖÂ­KqĘŉ¼ĔǲņɾªǀÞĈĂD½ĄĎÌŗĞrôñnN¼â¾ʄľԆ|Ǆ֦ज़ȗǉ̘̭ɺƅêgV̍ʆĠ·ÌĊv|ýĖÕWĊǎÞ´õ¼cÒÒBĢ͢UĜð͒s¨ňƃLĉÕÝ@ɛƯ÷¿Ľ­ĹeȏĳëCȚDŲyê×Ŗyò¯ļcÂßYtÁƤyAã˾J@ǝrý@¤rz¸oP¹ɐÚyáHĀ[JwcVeȴÏ»ÈĖ}ƒŰŐèȭǢόĀƪÈŶë;Ñ̆ȤМľĮEŔĹŊũ~ËUă{ĻƹɁύȩþĽvĽƓÉ@ēĽɲßǐƫʾǗĒpäWÐxnsÀ^ƆwW©¦cÅ¡Ji§vúF¶¨c~c¼īeXǚ\\đ¾JwÀďksãAfÕ¦L}waoZD½Ml«]eÒÅaÉ²áo½FõÛ]ĻÒ¡wYR£¢rvÓ®y®LFLzĈôe]gx}|KK}xklL]c¦£fRtív¦PŨ£", "@@M T¥"]
				],
				encodeOffsets: [
					[
						[108619, 36299],
						[108594, 36341],
						[108600, 36306]
					]
				]
			},
			properties: {
				cp: [103.823557, 36.058039],
				name: "甘肃",
				childNum: 3
			}
		}, {
			id: "630000",
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@InJo", "@@CÆ½OŃĦsΰ~Ē³¦@@Ņi±è}ШƄ˹A³r_ĞǒNĪĐw¤^ŬĵªpĺSZgrpiƼĘÔ¨C|ÍJ©Ħ»®VĲ~f\\m `UnÂ~ʌĬàöNt~ňjy¢ZiƔ¥Ąk´nl`JÊJþ©pdƖ®È£¶ìRʦźõƮËnʼėæÑƀĎ[¢VÎĂMÖÝÎF²sƊƀÎBļýƞ¯ʘƭðħ¼Jh¿ŦęΌƇ¥²Q]Č¥nuÂÏri¸¬ƪÛ^Ó¦d¥[Wàx\\ZjÒ¨GtpþYŊĕ´zUOëPîMĄÁxH´áiÜUàîÜŐĂÛSuŎrJðÌ¬EFÁú×uÃÎkrĒ{V}İ«O_ÌËĬ©ÓŧSRÑ±§Ģ£^ÂyèçěM³Ƃę{[¸¿uºµ[gt£¸OƤĿéYõ·kĀq]juw¥DĩƍõÇPéÄ½G©ã¤GuȧþRcÕĕNyyût­øï»a½ē¿BMoį£Íj}éZËqbʍƬh¹ìÿÓAçãnIÃ¡I`ks£CG­ěUy×Cy@¶ʡÊBnāzGơMē¼±O÷õJËĚăVĪũƆ£¯{ËL½ÌzżVR|ĠTbuvJvµhĻĖHAëáa­OÇðñęNwœľ·LmI±íĠĩPÉ×®ÿscB³±JKßĊ«`ađ»·QAmOVţéÿ¤¹SQt]]Çx±¯A@ĉĳ¢Óļ©l¶ÅÛrŕspãRk~¦ª]Į­´FRåd­ČsCqđéFn¿ÅƃmÉx{W©ºƝºįkÕƂƑ¸wWūÐ©ÈF£\\tÈ¥ÄRÈýÌJ lGr^×äùyÞ³fjc¨£ÂZ|ǓMĝÏ@ëÜőRĝ÷¡{aïȷPu°ËXÙ{©TmĠ}Y³­ÞIňµç½©C¡į÷¯B»|St»]vųs»}MÓ ÿʪƟǭA¡fs»PY¼c¡»¦cċ­¥£~msĉPSi^o©AecPeǵkgyUi¿h}aHĉ^|á´¡HØûÅ«ĉ®]m¡qċ¶±ÈyôōLÁstB®wn±ă¥HSòė£Së@×œÊăxÇN©©T±ª£Ĳ¡fb®Þbb_Ą¥xu¥B{łĝ³«`dƐt¤ťiñÍUuºí`£^tƃĲc·ÛLO½sç¥Ts{ă\\_»kÏ±q©čiìĉ|ÍI¥ć¥]ª§D{ŝŖÉR_sÿc³ĪōƿÎ§p[ĉc¯bKmR¥{³Ze^wx¹dƽÅ½ôIg §Mĕ ƹĴ¿ǣÜÍ]Ý]snåA{eƭ`ǻŊĿ\\ĳŬűYÂÿ¬jĖqßb¸L«¸©@ěĀ©ê¶ìÀEH|´bRľÓ¶rÀQþvl®ÕETzÜdb hw¤{LRdcb¯ÙVgƜßzÃôì®^jUèXÎ|UäÌ»rK\\ªN¼pZCüVY¤ɃRi^rPŇTÖ}|br°qňbĚ°ªiƶGQ¾²x¦PmlŜ[Ĥ¡ΞsĦÔÏâ\\ªÚŒU\\f¢N²§x|¤§xĔsZPòʛ²SÐqF`ªVÞŜĶƨVZÌL`¢dŐIqr\\oäõFÎ·¤»Ŷ×h¹]ClÙ\\¦ďÌį¬řtTӺƙgQÇÓHţĒ´ÃbEÄlbʔC|CŮkƮ[ʼ¬ň´KŮÈΰÌĪ¶ƶlðļATUvdTGº̼ÔsÊDÔveMg"]
				],
				encodeOffsets: [
					[
						[105308, 37219],
						[95370, 40081]
					]
				]
			},
			properties: {
				cp: [101.778916, 36.623178],
				name: "青海",
				childNum: 2
			}
		}, {
			id: "640000",
			geometry: {
				type: "Polygon",
				coordinates: ["@@KëÀęĞ«Oęȿȕı]ŉ¡åįÕÔ«ǴõƪĚQÐZhv K°öqÀÑS[ÃÖHƖčËnL]ûcÙß@ĝ¾}w»»oģF¹»kÌÏ·{zP§B­¢íyÅt@@á]Yv_ssģ¼ißĻL¾ġsKD£¡N_X¸}B~HaiÅf{«x»ge_bsKF¯¡IxmELcÿZ¤­ĢÝsuBLùtYdmVtNmtOPhRw~bd¾qÐ\\âÙH\\bImlNZ»loqlVmGā§~QCw¤{A\\PKNY¯bFkC¥sks_Ã\\ă«¢ħkJi¯rrAhĹûç£CUĕĊ_ÔBixÅÙĄnªÑaM~ħpOu¥sîeQ¥¤^dkKwlL~{L~hw^ófćKyE­K­zuÔ¡qQ¤xZÑ¢^ļöÜ¾Ep±âbÊÑÆ^fk¬NC¾YpxbK~¥eÖäBlt¿Đx½I[ĒǙWf»Ĭ}d§dµùEuj¨IÆ¢¥dXªƅx¿]mtÏwßRĶX¢͎vÆzƂZò®ǢÌʆCrâºMÞzÆMÒÊÓŊZÄ¾r°Î®Ȉmª²ĈUªĚîøºĮ¦ÌĘk^FłĬhĚiĀĖ¾iİbjË"],
				encodeOffsets: [
					[109366, 40242]
				]
			},
			properties: {
				cp: [106.278179, 38.46637],
				name: "宁夏",
				childNum: 1
			}
		}, {
			id: "650000",
			geometry: {
				type: "Polygon",
				coordinates: ["@@QØĔ²X¨~ǘBºjʐßØvKƔX¨vĊOÃ·¢i@~cĝe_«E}QxgɪëÏÃ@sÅyXoŖ{ô«ŸuXêÎf`C¹ÂÿÐGĮÕĞXŪōŸMźÈƺQèĽôe|¿ƸJR¤ĘEjcUóº¯Ĩ_ŘÁMª÷Ð¥OéÈ¿ÖğǤǷÂFÒzÉx[]­Ĥĝœ¦EP}ûƥé¿İƷTėƫœŕƅƱB»Đ±ēO¦E}`cȺrĦáŖuÒª«ĲπdƺÏØZƴwʄ¤ĖGĐǂZĶèH¶}ÚZצʥĪï|ÇĦMŔ»İĝǈì¥Βba­¯¥ǕǚkĆŵĦɑĺƯxūД̵nơʃĽá½M»òmqóŘĝčË¾ăCćāƿÝɽ©ǱŅ»ēėŊLrÁ®ɱĕģŉǻ̋ȥơŻǛȡVï¹Ň۩ûkɗġƁ§ʇė̕ĩũƽō^ƕUv£ƁQïƵkŏ½ΉÃŭÇ³LŇʻ«ƭ\\lŭD{ʓDkaFÃÄa³ŤđÔGRÈƚhSӹŚsİ«ĐË[¥ÚDkº^Øg¼ŵ¸£EÍöůŉT¡c_ËKYƧUśĵÝU_©rETÏʜ±OñtYwē¨{£¨uM³x½şL©Ùá[ÓÐĥ Νtģ¢\\śnkOw¥±T»ƷFɯàĩÞáB¹ÆÑUwŕĽw]kE½Èå~Æ÷QyěCFmĭZīŵVÁƿQƛûXS²b½KÏ½ĉS©ŷXĕ{ĕK·¥Ɨcqq©f¿]ßDõU³h­gËÇïģÉɋwk¯í}I·œbmÉřīJɥĻˁ×xoɹīlc¤³Xù]ǅA¿w͉ì¥wÇN·ÂËnƾƍdÇ§đ®ƝvUm©³G\\}µĿQyŹlăµEwǇQ½yƋBe¶ŋÀůo¥AÉw@{Gpm¿AĳŽKLh³`ñcËtW±»ÕSëüÿďDu\\wwwù³VLŕOMËGh£õP¡erÏd{ġWÁč|yšg^ğyÁzÙs`s|ÉåªÇ}m¢Ń¨`x¥ù^}Ì¥H«YªƅAÐ¹n~ź¯f¤áÀzgÇDIÔ´AňĀÒ¶ûEYospõD[{ù°]uJqU|Soċxţ[õÔĥkŋÞŭZËºóYËüċrw ÞkrťË¿XGÉbřaDü·Ē÷AÃª[ÄäIÂ®BÕĐÞ_¢āĠpÛÄȉĖġDKwbmÄNôfƫVÉviǳHQµâFù­Âœ³¦{YGd¢ĚÜO {Ö¦ÞÍÀP^bƾl[vt×ĈÍEË¨¡Đ~´î¸ùÎhuè`¸HÕŔVºwĠââWò@{ÙNÝ´ə²ȕn{¿¥{l÷eé^eďXj©î\\ªÑòÜìc\\üqÕ[Č¡xoÂċªbØ­ø|¶ȴZdÆÂońéG\\¼C°ÌÆn´nxÊOĨŪƴĸ¢¸òTxÊǪMīĞÖŲÃɎOvʦƢ~FRěò¿ġ~åŊúN¸qĘ[Ĕ¶ÂćnÒPĒÜvúĀÊbÖ{Äî¸~Ŕünp¤ÂH¾ĄYÒ©ÊfºmÔĘcDoĬMŬS¤s²ʘÚžȂVŦ èW°ªB|ĲXŔþÈJĦÆæFĚêYĂªĂ]øªŖNÞüAfɨJ¯ÎrDDĤ`mz\\§~D¬{vJÂ«lµĂb¤pŌŰNĄ¨ĊXW|ų ¿¾ɄĦƐMTòP÷fØĶK¢ȝ˔Sô¹òEð­`Ɩ½ǒÂň×äı§ĤƝ§C~¡hlåǺŦŞkâ~}FøàĲaĞfƠ¥Ŕd®U¸źXv¢aƆúŪtŠųƠjdƺƺÅìnrh\\ĺ¯äɝĦ]èpĄ¦´LƞĬ´ƤǬ˼Ēɸ¤rºǼ²¨zÌPðŀbþ¹ļD¢¹\\ĜÑŚ¶ZƄ³âjĦoâȴLÊȮĐ­ĚăÀêZǚŐ¤qȂ\\L¢ŌİfÆs|zºeªÙæ§΢{Ā´ƐÚ¬¨Ĵà²łhʺKÞºÖTiƢ¾ªì°`öøu®Ê¾ãÖ"],
				encodeOffsets: [
					[88824, 50096]
				]
			},
			properties: {
				cp: [87.617733, 43.792818],
				name: "新疆",
				childNum: 1
			}
		}, {
			id: "110000",
			geometry: {
				type: "Polygon",
				coordinates: ["@@RºaYÕQaúÍÔiþĩȨWĢü|Ėu[qb[swP@ÅğP¿{\\¯Y²·Ñ¨j¯X\\¯MSvU¯YIŕY{[fk­VÁûtŷmiÍt_H»Ĩ±d`¹­{bwYr³S]§§o¹qGtm_SŧoaFLgQN_dV@Zom_ć\\ßW´ÕiœRcfio§ËgToÛJíĔóu|wP¤XnO¢ÉŦ¯pNÄā¤zâŖÈRpŢZÚ{GrFt¦Òx§ø¹RóäV¤XdżâºWbwŚ¨Ud®bêņ¾jnŎGŃŶnzÚScîĚZen¬"],
				encodeOffsets: [
					[119421, 42013]
				]
			},
			properties: {
				cp: [116.405285, 39.904989],
				name: "北京",
				childNum: 1
			}
		}, {
			id: "120000",
			geometry: {
				type: "Polygon",
				coordinates: ["@@ŬgX§Ü«E¶FÌ¬O_ïlÁgz±AXeµÄĵ{¶]gitgIj·¥ì_iU¨ÐƎk}ĕ{gBqGf{¿aU^fIư³õ{YıëNĿk©ïËZukāAīlĕĥs¡bġ«@dekąI[nlPqCnp{ō³°`{PNdƗqSÄĻNNâyj]äÒD ĬH°Æ]~¡HO¾X}ÐxgpgWrDGpù^LrzWxZ^¨´T\\|~@IzbĤjeĊªz£®ĔvěLmV¾Ô_ÈNW~zbĬvG²ZmDM~~"],
				encodeOffsets: [
					[120237, 41215]
				]
			},
			properties: {
				cp: [117.190182, 39.125596],
				name: "天津",
				childNum: 1
			}
		}, {
			id: "310000",
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@ɧư¬EpƸÁx]", "@@©²", "@@MA", "@@QpªKWT§¨", "@@bŝÕÕEȣÚƥêImɇǦèÜĠÚÄÓŴ·ʌÇ", "@@Sô¤r]ìƬįǜûȬɋŭ×^sYɍDŋŽąñCG²«ªč@h_p¯A{oloY¬j@Ĳ`gQÚpptǀ^MĲvtbe´Rh@oj¨", "@@ÆLH{a}Eo¦"]
				],
				encodeOffsets: [
					[
						[124702, 32062],
						[124547, 32200],
						[124808, 31991],
						[124726, 32110],
						[124903, 32376],
						[124065, 32166],
						[124870, 31965]
					]
				]
			},
			properties: {
				cp: [121.472644, 31.231706],
				name: "上海",
				childNum: 7
			}
		}, {
			id: "500000",
			geometry: {
				type: "Polygon",
				coordinates: ["@@TÂÛ`Ùƅően½SêqDu[RåÍ¹÷eXÍy¸_ĺę}÷`M¯ċfCVµqŉ÷Zgg^d½pDOÎCn^uf²ènh¼WtƏxRGg¦pVFI±G^Ic´ecGĹÞ½sëÆNäÌ¤KÓe¯|R¸§LÜkPoïƭNï¶}Gywdiù©nkĈzj@Óc£»Wă¹Óf§c[µo·Ó|MvÛaq½«è\\ÂoVnÓØÍ²«bq¿ehCĜ^Q~ Évýş¤²ĮpEĶyhsŊwH½¿gÅ¡ýE¡ya£³t\\¨\\vú¹¼©·Ñr_oÒý¥et³]Et©uÖ¥±ă©KVeë]}wVPÀFA¨ąB}qTjgRemfFmQFÝMyùnÑAmÑCawu_p¯sfÛ_gI_pNysB¦zG¸rHeN\\CvEsÐñÚkcDÖĉsaQ¯}_UzÁē}^R Äd^ÍĸZ¾·¶`wećJE¹vÛ·HgéFXjÉê`|ypxkAwWĐpb¥eOsmzwqChóUQl¥F^lafanòsrEvfQdÁUVfÎvÜ^eftET¬ôA\\¢sJnQTjPØxøK|nBzĞ»LYFDxÓvr[ehľvN¢o¾NiÂxGpâ¬zbfZo~hGi]öF||NbtOMn eA±tPTLjpYQ|SHYĀxinzDJÌg¢và¥Pg_ÇzIIII£®S¬ØsÎ¼¥¨^LnGĲļĲƤjÎƀƾ¹¸ØÎezĆT¸}êÐqHðqĖä¥^CÆIj²p\\_ æüY|[YxƊæu°xb®Űb@~¢NQt°¶Sæ Ê~rǉĔëĚ¢~uf`faĔJåĊnÔ]jƎćÊ@£¾a®£Ű{ŶĕFègLk{Y|¡ĜWƔtƬJÑxq±ĢN´òKLÈÃ¼D|s`ŋć]Ã`đMùƱ¿~Y°ħ`ƏíW½eI½{aOIrÏ¡ĕŇapµÜƃġ²"],
				encodeOffsets: [
					[111728, 31311]
				]
			},
			properties: {
				cp: [106.504962, 29.533155],
				name: "重庆",
				childNum: 1
			}
		}, {
			id: "810000",
			geometry: {
				type: "MultiPolygon",
				coordinates: [
					["@@AlFi", "@@mp", "@@EpHo", "@@rMUwAS¬]", "@@ea¢pl¸Eõ¹hj[]ÔCÎ@lj¡uBX´AI¹[yDU]W`çwZkmcMpÅv}IoJlcafŃK°ä¬XJmÐ đhI®æÔtSHnEÒrÄc"]
				],
				encodeOffsets: [
					[
						[117111, 23002],
						[117072, 22876],
						[117045, 22887],
						[116882, 22747],
						[116975, 23082]
					]
				]
			},
			properties: {
				cp: [114.173355, 22.320048],
				name: "香港",
				childNum: 5
			}
		}, {
			id: "820000",
			geometry: {
				type: "Polygon",
				coordinates: ["@@áw{Îr"],
				encodeOffsets: [
					[116285, 22746]
				]
			},
			properties: {
				cp: [113.54909, 22.198951],
				name: "澳门",
				childNum: 1
			}
		}],
		UTF8Encoding: !0
	}) : void i("ECharts Map is not loaded") : void i("ECharts is not Loaded")
}), !function(t, e) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
		if (!t.document) throw new Error("jQuery requires a window with a document");
		return e(t)
	} : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
	function i(t) {
		var e = t.length,
			i = rt.type(t);
		return "function" === i || rt.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
	}
	function n(t, e, i) {
		if (rt.isFunction(e)) return rt.grep(t, function(t, n) {
			return !!e.call(t, n, t) !== i
		});
		if (e.nodeType) return rt.grep(t, function(t) {
			return t === e !== i
		});
		if ("string" == typeof e) {
			if (dt.test(e)) return rt.filter(e, t, i);
			e = rt.filter(e, t)
		}
		return rt.grep(t, function(t) {
			return rt.inArray(t, e) >= 0 !== i
		})
	}
	function r(t, e) {
		do t = t[e];
		while (t && 1 !== t.nodeType);
		return t
	}
	function o(t) {
		var e = xt[t] = {};
		return rt.each(t.match(_t) || [], function(t, i) {
			e[i] = !0
		}), e
	}
	function a() {
		ft.addEventListener ? (ft.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1)) : (ft.detachEvent("onreadystatechange", s), t.detachEvent("onload", s))
	}
	function s() {
		(ft.addEventListener || "load" === event.type || "complete" === ft.readyState) && (a(), rt.ready())
	}
	function l(t, e, i) {
		if (void 0 === i && 1 === t.nodeType) {
			var n = "data-" + e.replace(Lt, "-$1").toLowerCase();
			if (i = t.getAttribute(n), "string" == typeof i) {
				try {
					i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : St.test(i) ? rt.parseJSON(i) : i
				} catch (r) {}
				rt.data(t, e, i)
			} else i = void 0
		}
		return i
	}
	function u(t) {
		var e;
		for (e in t) if (("data" !== e || !rt.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
		return !0
	}
	function c(t, e, i, n) {
		if (rt.acceptData(t)) {
			var r, o, a = rt.expando,
				s = t.nodeType,
				l = s ? rt.cache : t,
				u = s ? t[a] : t[a] && a;
			if (u && l[u] && (n || l[u].data) || void 0 !== i || "string" != typeof e) return u || (u = s ? t[a] = X.pop() || rt.guid++ : a), l[u] || (l[u] = s ? {} : {
				toJSON: rt.noop
			}), ("object" == typeof e || "function" == typeof e) && (n ? l[u] = rt.extend(l[u], e) : l[u].data = rt.extend(l[u].data, e)), o = l[u], n || (o.data || (o.data = {}), o = o.data), void 0 !== i && (o[rt.camelCase(e)] = i), "string" == typeof e ? (r = o[e], null == r && (r = o[rt.camelCase(e)])) : r = o, r
		}
	}
	function h(t, e, i) {
		if (rt.acceptData(t)) {
			var n, r, o = t.nodeType,
				a = o ? rt.cache : t,
				s = o ? t[rt.expando] : rt.expando;
			if (a[s]) {
				if (e && (n = i ? a[s] : a[s].data)) {
					rt.isArray(e) ? e = e.concat(rt.map(e, rt.camelCase)) : e in n ? e = [e] : (e = rt.camelCase(e), e = e in n ? [e] : e.split(" ")), r = e.length;
					for (; r--;) delete n[e[r]];
					if (i ? !u(n) : !rt.isEmptyObject(n)) return
				}(i || (delete a[s].data, u(a[s]))) && (o ? rt.cleanData([t], !0) : it.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
			}
		}
	}
	function d() {
		return !0
	}
	function p() {
		return !1
	}
	function f() {
		try {
			return ft.activeElement
		} catch (t) {}
	}
	function m(t) {
		var e = Nt.split("|"),
			i = t.createDocumentFragment();
		if (i.createElement) for (; e.length;) i.createElement(e.pop());
		return i
	}
	function g(t, e) {
		var i, n, r = 0,
			o = typeof t.getElementsByTagName !== Mt ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Mt ? t.querySelectorAll(e || "*") : void 0;
		if (!o) for (o = [], i = t.childNodes || t; null != (n = i[r]); r++)!e || rt.nodeName(n, e) ? o.push(n) : rt.merge(o, g(n, e));
		return void 0 === e || e && rt.nodeName(t, e) ? rt.merge([t], o) : o
	}
	function v(t) {
		Dt.test(t.type) && (t.defaultChecked = t.checked)
	}
	function y(t, e) {
		return rt.nodeName(t, "table") && rt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
	}
	function _(t) {
		return t.type = (null !== rt.find.attr(t, "type")) + "/" + t.type, t
	}
	function x(t) {
		var e = jt.exec(t.type);
		return e ? t.type = e[1] : t.removeAttribute("type"), t
	}
	function b(t, e) {
		for (var i, n = 0; null != (i = t[n]); n++) rt._data(i, "globalEval", !e || rt._data(e[n], "globalEval"))
	}
	function w(t, e) {
		if (1 === e.nodeType && rt.hasData(t)) {
			var i, n, r, o = rt._data(t),
				a = rt._data(e, o),
				s = o.events;
			if (s) {
				delete a.handle, a.events = {};
				for (i in s) for (n = 0, r = s[i].length; r > n; n++) rt.event.add(e, i, s[i][n])
			}
			a.data && (a.data = rt.extend({}, a.data))
		}
	}
	function M(t, e) {
		var i, n, r;
		if (1 === e.nodeType) {
			if (i = e.nodeName.toLowerCase(), !it.noCloneEvent && e[rt.expando]) {
				r = rt._data(e);
				for (n in r.events) rt.removeEvent(e, n, r.handle);
				e.removeAttribute(rt.expando)
			}
			"script" === i && e.text !== t.text ? (_(e).text = t.text, x(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), it.html5Clone && t.innerHTML && !rt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Dt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
		}
	}
	function S(e, i) {
		var n, r = rt(i.createElement(e)).appendTo(i.body),
			o = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(r[0])) ? n.display : rt.css(r[0], "display");
		return r.detach(), o
	}
	function L(t) {
		var e = ft,
			i = $t[t];
		return i || (i = S(t, e), "none" !== i && i || (Qt = (Qt || rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Qt[0].contentWindow || Qt[0].contentDocument).document, e.write(), e.close(), i = S(t, e), Qt.detach()), $t[t] = i), i
	}
	function C(t, e) {
		return {
			get: function() {
				var i = t();
				return null != i ? i ? void delete this.get : (this.get = e).apply(this, arguments) : void 0
			}
		}
	}
	function T(t, e) {
		if (e in t) return e;
		for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, r = de.length; r--;) if (e = de[r] + i, e in t) return e;
		return n
	}
	function P(t, e) {
		for (var i, n, r, o = [], a = 0, s = t.length; s > a; a++) n = t[a], n.style && (o[a] = rt._data(n, "olddisplay"), i = n.style.display, e ? (o[a] || "none" !== i || (n.style.display = ""), "" === n.style.display && Pt(n) && (o[a] = rt._data(n, "olddisplay", L(n.nodeName)))) : (r = Pt(n), (i && "none" !== i || !r) && rt._data(n, "olddisplay", r ? i : rt.css(n, "display"))));
		for (a = 0; s > a; a++) n = t[a], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[a] || "" : "none"));
		return t
	}
	function A(t, e, i) {
		var n = le.exec(e);
		return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
	}
	function D(t, e, i, n, r) {
		for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === i && (a += rt.css(t, i + Tt[o], !0, r)), n ? ("content" === i && (a -= rt.css(t, "padding" + Tt[o], !0, r)), "margin" !== i && (a -= rt.css(t, "border" + Tt[o] + "Width", !0, r))) : (a += rt.css(t, "padding" + Tt[o], !0, r), "padding" !== i && (a += rt.css(t, "border" + Tt[o] + "Width", !0, r)));
		return a
	}
	function z(t, e, i) {
		var n = !0,
			r = "width" === e ? t.offsetWidth : t.offsetHeight,
			o = te(t),
			a = it.boxSizing && "border-box" === rt.css(t, "boxSizing", !1, o);
		if (0 >= r || null == r) {
			if (r = ee(t, e, o), (0 > r || null == r) && (r = t.style[e]), ne.test(r)) return r;
			n = a && (it.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
		}
		return r + D(t, e, i || (a ? "border" : "content"), n, o) + "px"
	}
	function I(t, e, i, n, r) {
		return new I.prototype.init(t, e, i, n, r)
	}
	function k() {
		return setTimeout(function() {
			pe = void 0
		}), pe = rt.now()
	}
	function E(t, e) {
		var i, n = {
			height: t
		},
			r = 0;
		for (e = e ? 1 : 0; 4 > r; r += 2 - e) i = Tt[r], n["margin" + i] = n["padding" + i] = t;
		return e && (n.opacity = n.width = t), n
	}
	function O(t, e, i) {
		for (var n, r = (_e[e] || []).concat(_e["*"]), o = 0, a = r.length; a > o; o++) if (n = r[o].call(i, e, t)) return n
	}
	function N(t, e, i) {
		var n, r, o, a, s, l, u, c, h = this,
			d = {},
			p = t.style,
			f = t.nodeType && Pt(t),
			m = rt._data(t, "fxshow");
		i.queue || (s = rt._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
			s.unqueued || l()
		}), s.unqueued++, h.always(function() {
			h.always(function() {
				s.unqueued--, rt.queue(t, "fx").length || s.empty.fire()
			})
		})), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], u = rt.css(t, "display"), c = "none" === u ? rt._data(t, "olddisplay") || L(t.nodeName) : u, "inline" === c && "none" === rt.css(t, "float") && (it.inlineBlockNeedsLayout && "inline" !== L(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", it.shrinkWrapBlocks() || h.always(function() {
			p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
		}));
		for (n in e) if (r = e[n], me.exec(r)) {
			if (delete e[n], o = o || "toggle" === r, r === (f ? "hide" : "show")) {
				if ("show" !== r || !m || void 0 === m[n]) continue;
				f = !0
			}
			d[n] = m && m[n] || rt.style(t, n)
		} else u = void 0;
		if (rt.isEmptyObject(d))"inline" === ("none" === u ? L(t.nodeName) : u) && (p.display = u);
		else {
			m ? "hidden" in m && (f = m.hidden) : m = rt._data(t, "fxshow", {}), o && (m.hidden = !f), f ? rt(t).show() : h.done(function() {
				rt(t).hide()
			}), h.done(function() {
				var e;
				rt._removeData(t, "fxshow");
				for (e in d) rt.style(t, e, d[e])
			});
			for (n in d) a = O(f ? m[n] : 0, n, h), n in m || (m[n] = a.start, f && (a.end = a.start, a.start = "width" === n || "height" === n ? 1 : 0))
		}
	}
	function R(t, e) {
		var i, n, r, o, a;
		for (i in t) if (n = rt.camelCase(i), r = e[n], o = t[i], rt.isArray(o) && (r = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), a = rt.cssHooks[n], a && "expand" in a) {
			o = a.expand(o), delete t[n];
			for (i in o) i in t || (t[i] = o[i], e[i] = r)
		} else e[n] = r
	}
	function B(t, e, i) {
		var n, r, o = 0,
			a = ye.length,
			s = rt.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (r) return !1;
				for (var e = pe || k(), i = Math.max(0, u.startTime + u.duration - e), n = i / u.duration || 0, o = 1 - n, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(o);
				return s.notifyWith(t, [u, o, i]), 1 > o && l ? i : (s.resolveWith(t, [u]), !1)
			},
			u = s.promise({
				elem: t,
				props: rt.extend({}, e),
				opts: rt.extend(!0, {
					specialEasing: {}
				}, i),
				originalProperties: e,
				originalOptions: i,
				startTime: pe || k(),
				duration: i.duration,
				tweens: [],
				createTween: function(e, i) {
					var n = rt.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
					return u.tweens.push(n), n
				},
				stop: function(e) {
					var i = 0,
						n = e ? u.tweens.length : 0;
					if (r) return this;
					for (r = !0; n > i; i++) u.tweens[i].run(1);
					return e ? s.resolveWith(t, [u, e]) : s.rejectWith(t, [u, e]), this
				}
			}),
			c = u.props;
		for (R(c, u.opts.specialEasing); a > o; o++) if (n = ye[o].call(u, t, c, u.opts)) return n;
		return rt.map(c, O, u), rt.isFunction(u.opts.start) && u.opts.start.call(t, u), rt.fx.timer(rt.extend(l, {
			elem: t,
			anim: u,
			queue: u.opts.queue
		})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
	}
	function V(t) {
		return function(e, i) {
			"string" != typeof e && (i = e, e = "*");
			var n, r = 0,
				o = e.toLowerCase().match(_t) || [];
			if (rt.isFunction(i)) for (; n = o[r++];)"+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
		}
	}
	function q(t, e, i, n) {
		function r(s) {
			var l;
			return o[s] = !0, rt.each(t[s] || [], function(t, s) {
				var u = s(e, i, n);
				return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
			}), l
		}
		var o = {},
			a = t === He;
		return r(e.dataTypes[0]) || !o["*"] && r("*")
	}
	function Z(t, e) {
		var i, n, r = rt.ajaxSettings.flatOptions || {};
		for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
		return i && rt.extend(!0, t, i), t
	}
	function G(t, e, i) {
		for (var n, r, o, a, s = t.contents, l = t.dataTypes;
		"*" === l[0];) l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
		if (r) for (a in s) if (s[a] && s[a].test(r)) {
			l.unshift(a);
			break
		}
		if (l[0] in i) o = l[0];
		else {
			for (a in i) {
				if (!l[0] || t.converters[a + " " + l[0]]) {
					o = a;
					break
				}
				n || (n = a)
			}
			o = o || n
		}
		return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
	}
	function H(t, e, i, n) {
		var r, o, a, s, l, u = {},
			c = t.dataTypes.slice();
		if (c[1]) for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
		for (o = c.shift(); o;) if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;
		else if ("*" !== l && l !== o) {
			if (a = u[l + " " + o] || u["* " + o], !a) for (r in u) if (s = r.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
				a === !0 ? a = u[r] : u[r] !== !0 && (o = s[0], c.unshift(s[1]));
				break
			}
			if (a !== !0) if (a && t["throws"]) e = a(e);
			else try {
				e = a(e)
			} catch (h) {
				return {
					state: "parsererror",
					error: a ? h : "No conversion from " + l + " to " + o
				}
			}
		}
		return {
			state: "success",
			data: e
		}
	}
	function F(t, e, i, n) {
		var r;
		if (rt.isArray(e)) rt.each(e, function(e, r) {
			i || je.test(t) ? n(t, r) : F(t + "[" + ("object" == typeof r ? e : "") + "]", r, i, n)
		});
		else if (i || "object" !== rt.type(e)) n(t, e);
		else for (r in e) F(t + "[" + r + "]", e[r], i, n)
	}
	function W() {
		try {
			return new t.XMLHttpRequest
		} catch (e) {}
	}
	function U() {
		try {
			return new t.ActiveXObject("Microsoft.XMLHTTP")
		} catch (e) {}
	}
	function j(t) {
		return rt.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
	}
	var X = [],
		Y = X.slice,
		J = X.concat,
		K = X.push,
		Q = X.indexOf,
		$ = {},
		tt = $.toString,
		et = $.hasOwnProperty,
		it = {},
		nt = "1.11.2",
		rt = function(t, e) {
			return new rt.fn.init(t, e)
		},
		ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		at = /^-ms-/,
		st = /-([\da-z])/gi,
		lt = function(t, e) {
			return e.toUpperCase()
		};
	rt.fn = rt.prototype = {
		jquery: nt,
		constructor: rt,
		selector: "",
		length: 0,
		toArray: function() {
			return Y.call(this)
		},
		get: function(t) {
			return null != t ? 0 > t ? this[t + this.length] : this[t] : Y.call(this)
		},
		pushStack: function(t) {
			var e = rt.merge(this.constructor(), t);
			return e.prevObject = this, e.context = this.context, e
		},
		each: function(t, e) {
			return rt.each(this, t, e)
		},
		map: function(t) {
			return this.pushStack(rt.map(this, function(e, i) {
				return t.call(e, i, e)
			}))
		},
		slice: function() {
			return this.pushStack(Y.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(t) {
			var e = this.length,
				i = +t + (0 > t ? e : 0);
			return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: K,
		sort: X.sort,
		splice: X.splice
	}, rt.extend = rt.fn.extend = function() {
		var t, e, i, n, r, o, a = arguments[0] || {},
			s = 1,
			l = arguments.length,
			u = !1;
		for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || rt.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++) if (null != (r = arguments[s])) for (n in r) t = a[n], i = r[n], a !== i && (u && i && (rt.isPlainObject(i) || (e = rt.isArray(i))) ? (e ? (e = !1, o = t && rt.isArray(t) ? t : []) : o = t && rt.isPlainObject(t) ? t : {}, a[n] = rt.extend(u, o, i)) : void 0 !== i && (a[n] = i));
		return a
	}, rt.extend({
		expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(t) {
			throw new Error(t)
		},
		noop: function() {},
		isFunction: function(t) {
			return "function" === rt.type(t)
		},
		isArray: Array.isArray ||
		function(t) {
			return "array" === rt.type(t)
		},
		isWindow: function(t) {
			return null != t && t == t.window
		},
		isNumeric: function(t) {
			return !rt.isArray(t) && t - parseFloat(t) + 1 >= 0
		},
		isEmptyObject: function(t) {
			var e;
			for (e in t) return !1;
			return !0
		},
		isPlainObject: function(t) {
			var e;
			if (!t || "object" !== rt.type(t) || t.nodeType || rt.isWindow(t)) return !1;
			try {
				if (t.constructor && !et.call(t, "constructor") && !et.call(t.constructor.prototype, "isPrototypeOf")) return !1
			} catch (i) {
				return !1
			}
			if (it.ownLast) for (e in t) return et.call(t, e);
			for (e in t);
			return void 0 === e || et.call(t, e)
		},
		type: function(t) {
			return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? $[tt.call(t)] || "object" : typeof t
		},
		globalEval: function(e) {
			e && rt.trim(e) && (t.execScript ||
			function(e) {
				t.eval.call(t, e)
			})(e)
		},
		camelCase: function(t) {
			return t.replace(at, "ms-").replace(st, lt)
		},
		nodeName: function(t, e) {
			return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
		},
		each: function(t, e, n) {
			var r, o = 0,
				a = t.length,
				s = i(t);
			if (n) {
				if (s) for (; a > o && (r = e.apply(t[o], n), r !== !1); o++);
				else for (o in t) if (r = e.apply(t[o], n), r === !1) break
			} else if (s) for (; a > o && (r = e.call(t[o], o, t[o]), r !== !1); o++);
			else for (o in t) if (r = e.call(t[o], o, t[o]), r === !1) break;
			return t
		},
		trim: function(t) {
			return null == t ? "" : (t + "").replace(ot, "")
		},
		makeArray: function(t, e) {
			var n = e || [];
			return null != t && (i(Object(t)) ? rt.merge(n, "string" == typeof t ? [t] : t) : K.call(n, t)), n
		},
		inArray: function(t, e, i) {
			var n;
			if (e) {
				if (Q) return Q.call(e, t, i);
				for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++) if (i in e && e[i] === t) return i
			}
			return -1
		},
		merge: function(t, e) {
			for (var i = +e.length, n = 0, r = t.length; i > n;) t[r++] = e[n++];
			if (i !== i) for (; void 0 !== e[n];) t[r++] = e[n++];
			return t.length = r, t
		},
		grep: function(t, e, i) {
			for (var n, r = [], o = 0, a = t.length, s = !i; a > o; o++) n = !e(t[o], o), n !== s && r.push(t[o]);
			return r
		},
		map: function(t, e, n) {
			var r, o = 0,
				a = t.length,
				s = i(t),
				l = [];
			if (s) for (; a > o; o++) r = e(t[o], o, n), null != r && l.push(r);
			else for (o in t) r = e(t[o], o, n), null != r && l.push(r);
			return J.apply([], l)
		},
		guid: 1,
		proxy: function(t, e) {
			var i, n, r;
			return "string" == typeof e && (r = t[e], e = t, t = r), rt.isFunction(t) ? (i = Y.call(arguments, 2), n = function() {
				return t.apply(e || this, i.concat(Y.call(arguments)))
			}, n.guid = t.guid = t.guid || rt.guid++, n) : void 0
		},
		now: function() {
			return +new Date
		},
		support: it
	}), rt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
		$["[object " + e + "]"] = e.toLowerCase()
	});
	var ut = function(t) {
			function e(t, e, i, n) {
				var r, o, a, s, l, u, h, p, f, m;
				if ((e ? e.ownerDocument || e : q) !== I && z(e), e = e || I, i = i || [], s = e.nodeType, "string" != typeof t || !t || 1 !== s && 9 !== s && 11 !== s) return i;
				if (!n && E) {
					if (11 !== s && (r = yt.exec(t))) if (a = r[1]) {
						if (9 === s) {
							if (o = e.getElementById(a), !o || !o.parentNode) return i;
							if (o.id === a) return i.push(o), i
						} else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && B(e, o) && o.id === a) return i.push(o), i
					} else {
						if (r[2]) return Q.apply(i, e.getElementsByTagName(t)), i;
						if ((a = r[3]) && b.getElementsByClassName) return Q.apply(i, e.getElementsByClassName(a)), i
					}
					if (b.qsa && (!O || !O.test(t))) {
						if (p = h = V, f = e, m = 1 !== s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
							for (u = L(t), (h = e.getAttribute("id")) ? p = h.replace(xt, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;) u[l] = p + d(u[l]);
							f = _t.test(t) && c(e.parentNode) || e, m = u.join(",")
						}
						if (m) try {
							return Q.apply(i, f.querySelectorAll(m)), i
						} catch (g) {} finally {
							h || e.removeAttribute("id")
						}
					}
				}
				return T(t.replace(lt, "$1"), e, i, n)
			}
			function i() {
				function t(i, n) {
					return e.push(i + " ") > w.cacheLength && delete t[e.shift()], t[i + " "] = n
				}
				var e = [];
				return t
			}
			function n(t) {
				return t[V] = !0, t
			}
			function r(t) {
				var e = I.createElement("div");
				try {
					return !!t(e)
				} catch (i) {
					return !1
				} finally {
					e.parentNode && e.parentNode.removeChild(e), e = null
				}
			}
			function o(t, e) {
				for (var i = t.split("|"), n = t.length; n--;) w.attrHandle[i[n]] = e
			}
			function a(t, e) {
				var i = e && t,
					n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || j) - (~t.sourceIndex || j);
				if (n) return n;
				if (i) for (; i = i.nextSibling;) if (i === e) return -1;
				return t ? 1 : -1
			}
			function s(t) {
				return function(e) {
					var i = e.nodeName.toLowerCase();
					return "input" === i && e.type === t
				}
			}
			function l(t) {
				return function(e) {
					var i = e.nodeName.toLowerCase();
					return ("input" === i || "button" === i) && e.type === t
				}
			}
			function u(t) {
				return n(function(e) {
					return e = +e, n(function(i, n) {
						for (var r, o = t([], i.length, e), a = o.length; a--;) i[r = o[a]] && (i[r] = !(n[r] = i[r]))
					})
				})
			}
			function c(t) {
				return t && "undefined" != typeof t.getElementsByTagName && t
			}
			function h() {}
			function d(t) {
				for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
				return n
			}
			function p(t, e, i) {
				var n = e.dir,
					r = i && "parentNode" === n,
					o = G++;
				return e.first ?
				function(e, i, o) {
					for (; e = e[n];) if (1 === e.nodeType || r) return t(e, i, o)
				} : function(e, i, a) {
					var s, l, u = [Z, o];
					if (a) {
						for (; e = e[n];) if ((1 === e.nodeType || r) && t(e, i, a)) return !0
					} else for (; e = e[n];) if (1 === e.nodeType || r) {
						if (l = e[V] || (e[V] = {}), (s = l[n]) && s[0] === Z && s[1] === o) return u[2] = s[2];
						if (l[n] = u, u[2] = t(e, i, a)) return !0
					}
				}
			}
			function f(t) {
				return t.length > 1 ?
				function(e, i, n) {
					for (var r = t.length; r--;) if (!t[r](e, i, n)) return !1;
					return !0
				} : t[0]
			}
			function m(t, i, n) {
				for (var r = 0, o = i.length; o > r; r++) e(t, i[r], n);
				return n
			}
			function g(t, e, i, n, r) {
				for (var o, a = [], s = 0, l = t.length, u = null != e; l > s; s++)(o = t[s]) && (!i || i(o, n, r)) && (a.push(o), u && e.push(s));
				return a
			}
			function v(t, e, i, r, o, a) {
				return r && !r[V] && (r = v(r)), o && !o[V] && (o = v(o, a)), n(function(n, a, s, l) {
					var u, c, h, d = [],
						p = [],
						f = a.length,
						v = n || m(e || "*", s.nodeType ? [s] : s, []),
						y = !t || !n && e ? v : g(v, d, t, s, l),
						_ = i ? o || (n ? t : f || r) ? [] : a : y;
					if (i && i(y, _, s, l), r) for (u = g(_, p), r(u, [], s, l), c = u.length; c--;)(h = u[c]) && (_[p[c]] = !(y[p[c]] = h));
					if (n) {
						if (o || t) {
							if (o) {
								for (u = [], c = _.length; c--;)(h = _[c]) && u.push(y[c] = h);
								o(null, _ = [], u, l)
							}
							for (c = _.length; c--;)(h = _[c]) && (u = o ? tt(n, h) : d[c]) > -1 && (n[u] = !(a[u] = h))
						}
					} else _ = g(_ === a ? _.splice(f, _.length) : _), o ? o(null, a, _, l) : Q.apply(a, _)
				})
			}
			function y(t) {
				for (var e, i, n, r = t.length, o = w.relative[t[0].type], a = o || w.relative[" "], s = o ? 1 : 0, l = p(function(t) {
					return t === e
				}, a, !0), u = p(function(t) {
					return tt(e, t) > -1
				}, a, !0), c = [function(t, i, n) {
					var r = !o && (n || i !== P) || ((e = i).nodeType ? l(t, i, n) : u(t, i, n));
					return e = null, r
				}]; r > s; s++) if (i = w.relative[t[s].type]) c = [p(f(c), i)];
				else {
					if (i = w.filter[t[s].type].apply(null, t[s].matches), i[V]) {
						for (n = ++s; r > n && !w.relative[t[n].type]; n++);
						return v(s > 1 && f(c), s > 1 && d(t.slice(0, s - 1).concat({
							value: " " === t[s - 2].type ? "*" : ""
						})).replace(lt, "$1"), i, n > s && y(t.slice(s, n)), r > n && y(t = t.slice(n)), r > n && d(t))
					}
					c.push(i)
				}
				return f(c)
			}
			function _(t, i) {
				var r = i.length > 0,
					o = t.length > 0,
					a = function(n, a, s, l, u) {
						var c, h, d, p = 0,
							f = "0",
							m = n && [],
							v = [],
							y = P,
							_ = n || o && w.find.TAG("*", u),
							x = Z += null == y ? 1 : Math.random() || .1,
							b = _.length;
						for (u && (P = a !== I && a); f !== b && null != (c = _[f]); f++) {
							if (o && c) {
								for (h = 0; d = t[h++];) if (d(c, a, s)) {
									l.push(c);
									break
								}
								u && (Z = x)
							}
							r && ((c = !d && c) && p--, n && m.push(c))
						}
						if (p += f, r && f !== p) {
							for (h = 0; d = i[h++];) d(m, v, a, s);
							if (n) {
								if (p > 0) for (; f--;) m[f] || v[f] || (v[f] = J.call(l));
								v = g(v)
							}
							Q.apply(l, v), u && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
						}
						return u && (Z = x, P = y), m
					};
				return r ? n(a) : a
			}
			var x, b, w, M, S, L, C, T, P, A, D, z, I, k, E, O, N, R, B, V = "sizzle" + 1 * new Date,
				q = t.document,
				Z = 0,
				G = 0,
				H = i(),
				F = i(),
				W = i(),
				U = function(t, e) {
					return t === e && (D = !0), 0
				},
				j = 1 << 31,
				X = {}.hasOwnProperty,
				Y = [],
				J = Y.pop,
				K = Y.push,
				Q = Y.push,
				$ = Y.slice,
				tt = function(t, e) {
					for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i;
					return -1
				},
				et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				it = "[\\x20\\t\\r\\n\\f]",
				nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				rt = nt.replace("w", "w#"),
				ot = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + it + "*\\]",
				at = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
				st = new RegExp(it + "+", "g"),
				lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
				ut = new RegExp("^" + it + "*," + it + "*"),
				ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
				ht = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
				dt = new RegExp(at),
				pt = new RegExp("^" + rt + "$"),
				ft = {
					ID: new RegExp("^#(" + nt + ")"),
					CLASS: new RegExp("^\\.(" + nt + ")"),
					TAG: new RegExp("^(" + nt.replace("w", "w*") + ")"),
					ATTR: new RegExp("^" + ot),
					PSEUDO: new RegExp("^" + at),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + et + ")$", "i"),
					needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
				},
				mt = /^(?:input|select|textarea|button)$/i,
				gt = /^h\d$/i,
				vt = /^[^{]+\{\s*\[native \w/,
				yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				_t = /[+~]/,
				xt = /'|\\/g,
				bt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
				wt = function(t, e, i) {
					var n = "0x" + e - 65536;
					return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
				},
				Mt = function() {
					z()
				};
			try {
				Q.apply(Y = $.call(q.childNodes), q.childNodes), Y[q.childNodes.length].nodeType
			} catch (St) {
				Q = {
					apply: Y.length ?
					function(t, e) {
						K.apply(t, $.call(e))
					} : function(t, e) {
						for (var i = t.length, n = 0; t[i++] = e[n++];);
						t.length = i - 1
					}
				}
			}
			b = e.support = {}, S = e.isXML = function(t) {
				var e = t && (t.ownerDocument || t).documentElement;
				return e ? "HTML" !== e.nodeName : !1
			}, z = e.setDocument = function(t) {
				var e, i, n = t ? t.ownerDocument || t : q;
				return n !== I && 9 === n.nodeType && n.documentElement ? (I = n, k = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", Mt, !1) : i.attachEvent && i.attachEvent("onunload", Mt)), E = !S(n), b.attributes = r(function(t) {
					return t.className = "i", !t.getAttribute("className")
				}), b.getElementsByTagName = r(function(t) {
					return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
				}), b.getElementsByClassName = vt.test(n.getElementsByClassName), b.getById = r(function(t) {
					return k.appendChild(t).id = V, !n.getElementsByName || !n.getElementsByName(V).length
				}), b.getById ? (w.find.ID = function(t, e) {
					if ("undefined" != typeof e.getElementById && E) {
						var i = e.getElementById(t);
						return i && i.parentNode ? [i] : []
					}
				}, w.filter.ID = function(t) {
					var e = t.replace(bt, wt);
					return function(t) {
						return t.getAttribute("id") === e
					}
				}) : (delete w.find.ID, w.filter.ID = function(t) {
					var e = t.replace(bt, wt);
					return function(t) {
						var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
						return i && i.value === e
					}
				}), w.find.TAG = b.getElementsByTagName ?
				function(t, e) {
					return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
				} : function(t, e) {
					var i, n = [],
						r = 0,
						o = e.getElementsByTagName(t);
					if ("*" === t) {
						for (; i = o[r++];) 1 === i.nodeType && n.push(i);
						return n
					}
					return o
				}, w.find.CLASS = b.getElementsByClassName &&
				function(t, e) {
					return E ? e.getElementsByClassName(t) : void 0
				}, N = [], O = [], (b.qsa = vt.test(n.querySelectorAll)) && (r(function(t) {
					k.appendChild(t).innerHTML = "<a id='" + V + "'></a><select id='" + V + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || O.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + V + "-]").length || O.push("~="), t.querySelectorAll(":checked").length || O.push(":checked"), t.querySelectorAll("a#" + V + "+*").length || O.push(".#.+[+~]")
				}), r(function(t) {
					var e = n.createElement("input");
					e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && O.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), O.push(",.*:")
				})), (b.matchesSelector = vt.test(R = k.matches || k.webkitMatchesSelector || k.mozMatchesSelector || k.oMatchesSelector || k.msMatchesSelector)) && r(function(t) {
					b.disconnectedMatch = R.call(t, "div"), R.call(t, "[s!='']:x"), N.push("!=", at)
				}), O = O.length && new RegExp(O.join("|")), N = N.length && new RegExp(N.join("|")), e = vt.test(k.compareDocumentPosition), B = e || vt.test(k.contains) ?
				function(t, e) {
					var i = 9 === t.nodeType ? t.documentElement : t,
						n = e && e.parentNode;
					return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
				} : function(t, e) {
					if (e) for (; e = e.parentNode;) if (e === t) return !0;
					return !1
				}, U = e ?
				function(t, e) {
					if (t === e) return D = !0, 0;
					var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
					return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !b.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === q && B(q, t) ? -1 : e === n || e.ownerDocument === q && B(q, e) ? 1 : A ? tt(A, t) - tt(A, e) : 0 : 4 & i ? -1 : 1)
				} : function(t, e) {
					if (t === e) return D = !0, 0;
					var i, r = 0,
						o = t.parentNode,
						s = e.parentNode,
						l = [t],
						u = [e];
					if (!o || !s) return t === n ? -1 : e === n ? 1 : o ? -1 : s ? 1 : A ? tt(A, t) - tt(A, e) : 0;
					if (o === s) return a(t, e);
					for (i = t; i = i.parentNode;) l.unshift(i);
					for (i = e; i = i.parentNode;) u.unshift(i);
					for (; l[r] === u[r];) r++;
					return r ? a(l[r], u[r]) : l[r] === q ? -1 : u[r] === q ? 1 : 0
				}, n) : I
			}, e.matches = function(t, i) {
				return e(t, null, null, i)
			}, e.matchesSelector = function(t, i) {
				if ((t.ownerDocument || t) !== I && z(t), i = i.replace(ht, "='$1']"), !(!b.matchesSelector || !E || N && N.test(i) || O && O.test(i))) try {
					var n = R.call(t, i);
					if (n || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
				} catch (r) {}
				return e(i, I, null, [t]).length > 0
			}, e.contains = function(t, e) {
				return (t.ownerDocument || t) !== I && z(t), B(t, e)
			}, e.attr = function(t, e) {
				(t.ownerDocument || t) !== I && z(t);
				var i = w.attrHandle[e.toLowerCase()],
					n = i && X.call(w.attrHandle, e.toLowerCase()) ? i(t, e, !E) : void 0;
				return void 0 !== n ? n : b.attributes || !E ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
			}, e.error = function(t) {
				throw new Error("Syntax error, unrecognized expression: " + t)
			}, e.uniqueSort = function(t) {
				var e, i = [],
					n = 0,
					r = 0;
				if (D = !b.detectDuplicates, A = !b.sortStable && t.slice(0), t.sort(U), D) {
					for (; e = t[r++];) e === t[r] && (n = i.push(r));
					for (; n--;) t.splice(i[n], 1)
				}
				return A = null, t
			}, M = e.getText = function(t) {
				var e, i = "",
					n = 0,
					r = t.nodeType;
				if (r) {
					if (1 === r || 9 === r || 11 === r) {
						if ("string" == typeof t.textContent) return t.textContent;
						for (t = t.firstChild; t; t = t.nextSibling) i += M(t)
					} else if (3 === r || 4 === r) return t.nodeValue
				} else for (; e = t[n++];) i += M(e);
				return i
			}, w = e.selectors = {
				cacheLength: 50,
				createPseudo: n,
				match: ft,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(t) {
						return t[1] = t[1].replace(bt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
					},
					CHILD: function(t) {
						return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
					},
					PSEUDO: function(t) {
						var e, i = !t[6] && t[2];
						return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && dt.test(i) && (e = L(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
					}
				},
				filter: {
					TAG: function(t) {
						var e = t.replace(bt, wt).toLowerCase();
						return "*" === t ?
						function() {
							return !0
						} : function(t) {
							return t.nodeName && t.nodeName.toLowerCase() === e
						}
					},
					CLASS: function(t) {
						var e = H[t + " "];
						return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && H(t, function(t) {
							return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
						})
					},
					ATTR: function(t, i, n) {
						return function(r) {
							var o = e.attr(r, t);
							return null == o ? "!=" === i : i ? (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o.replace(st, " ") + " ").indexOf(n) > -1 : "|=" === i ? o === n || o.slice(0, n.length + 1) === n + "-" : !1) : !0
						}
					},
					CHILD: function(t, e, i, n, r) {
						var o = "nth" !== t.slice(0, 3),
							a = "last" !== t.slice(-4),
							s = "of-type" === e;
						return 1 === n && 0 === r ?
						function(t) {
							return !!t.parentNode
						} : function(e, i, l) {
							var u, c, h, d, p, f, m = o !== a ? "nextSibling" : "previousSibling",
								g = e.parentNode,
								v = s && e.nodeName.toLowerCase(),
								y = !l && !s;
							if (g) {
								if (o) {
									for (; m;) {
										for (h = e; h = h[m];) if (s ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
										f = m = "only" === t && !f && "nextSibling"
									}
									return !0
								}
								if (f = [a ? g.firstChild : g.lastChild], a && y) {
									for (c = g[V] || (g[V] = {}), u = c[t] || [], p = u[0] === Z && u[1], d = u[0] === Z && u[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || (d = p = 0) || f.pop();) if (1 === h.nodeType && ++d && h === e) {
										c[t] = [Z, p, d];
										break
									}
								} else if (y && (u = (e[V] || (e[V] = {}))[t]) && u[0] === Z) d = u[1];
								else for (;
								(h = ++p && h && h[m] || (d = p = 0) || f.pop()) && ((s ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++d || (y && ((h[V] || (h[V] = {}))[t] = [Z, d]), h !== e)););
								return d -= r, d === n || d % n === 0 && d / n >= 0
							}
						}
					},
					PSEUDO: function(t, i) {
						var r, o = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
						return o[V] ? o(i) : o.length > 1 ? (r = [t, t, "", i], w.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
							for (var n, r = o(t, i), a = r.length; a--;) n = tt(t, r[a]), t[n] = !(e[n] = r[a])
						}) : function(t) {
							return o(t, 0, r)
						}) : o
					}
				},
				pseudos: {
					not: n(function(t) {
						var e = [],
							i = [],
							r = C(t.replace(lt, "$1"));
						return r[V] ? n(function(t, e, i, n) {
							for (var o, a = r(t, null, n, []), s = t.length; s--;)(o = a[s]) && (t[s] = !(e[s] = o))
						}) : function(t, n, o) {
							return e[0] = t, r(e, null, o, i), e[0] = null, !i.pop()
						}
					}),
					has: n(function(t) {
						return function(i) {
							return e(t, i).length > 0
						}
					}),
					contains: n(function(t) {
						return t = t.replace(bt, wt), function(e) {
							return (e.textContent || e.innerText || M(e)).indexOf(t) > -1
						}
					}),
					lang: n(function(t) {
						return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, wt).toLowerCase(), function(e) {
							var i;
							do
							if (i = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
							while ((e = e.parentNode) && 1 === e.nodeType);
							return !1
						}
					}),
					target: function(e) {
						var i = t.location && t.location.hash;
						return i && i.slice(1) === e.id
					},
					root: function(t) {
						return t === k
					},
					focus: function(t) {
						return t === I.activeElement && (!I.hasFocus || I.hasFocus()) && !! (t.type || t.href || ~t.tabIndex)
					},
					enabled: function(t) {
						return t.disabled === !1
					},
					disabled: function(t) {
						return t.disabled === !0
					},
					checked: function(t) {
						var e = t.nodeName.toLowerCase();
						return "input" === e && !! t.checked || "option" === e && !! t.selected
					},
					selected: function(t) {
						return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
					},
					empty: function(t) {
						for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
						return !0
					},
					parent: function(t) {
						return !w.pseudos.empty(t)
					},
					header: function(t) {
						return gt.test(t.nodeName)
					},
					input: function(t) {
						return mt.test(t.nodeName)
					},
					button: function(t) {
						var e = t.nodeName.toLowerCase();
						return "input" === e && "button" === t.type || "button" === e
					},
					text: function(t) {
						var e;
						return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
					},
					first: u(function() {
						return [0]
					}),
					last: u(function(t, e) {
						return [e - 1]
					}),
					eq: u(function(t, e, i) {
						return [0 > i ? i + e : i]
					}),
					even: u(function(t, e) {
						for (var i = 0; e > i; i += 2) t.push(i);
						return t
					}),
					odd: u(function(t, e) {
						for (var i = 1; e > i; i += 2) t.push(i);
						return t
					}),
					lt: u(function(t, e, i) {
						for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
						return t
					}),
					gt: u(function(t, e, i) {
						for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
						return t
					})
				}
			}, w.pseudos.nth = w.pseudos.eq;
			for (x in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) w.pseudos[x] = s(x);
			for (x in {
				submit: !0,
				reset: !0
			}) w.pseudos[x] = l(x);
			return h.prototype = w.filters = w.pseudos, w.setFilters = new h, L = e.tokenize = function(t, i) {
				var n, r, o, a, s, l, u, c = F[t + " "];
				if (c) return i ? 0 : c.slice(0);
				for (s = t, l = [], u = w.preFilter; s;) {
					(!n || (r = ut.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), n = !1, (r = ct.exec(s)) && (n = r.shift(), o.push({
						value: n,
						type: r[0].replace(lt, " ")
					}), s = s.slice(n.length));
					for (a in w.filter)!(r = ft[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), o.push({
						value: n,
						type: a,
						matches: r
					}), s = s.slice(n.length));
					if (!n) break
				}
				return i ? s.length : s ? e.error(t) : F(t, l).slice(0)
			}, C = e.compile = function(t, e) {
				var i, n = [],
					r = [],
					o = W[t + " "];
				if (!o) {
					for (e || (e = L(t)), i = e.length; i--;) o = y(e[i]), o[V] ? n.push(o) : r.push(o);
					o = W(t, _(r, n)), o.selector = t
				}
				return o
			}, T = e.select = function(t, e, i, n) {
				var r, o, a, s, l, u = "function" == typeof t && t,
					h = !n && L(t = u.selector || t);
				if (i = i || [], 1 === h.length) {
					if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && b.getById && 9 === e.nodeType && E && w.relative[o[1].type]) {
						if (e = (w.find.ID(a.matches[0].replace(bt, wt), e) || [])[0], !e) return i;
						u && (e = e.parentNode), t = t.slice(o.shift().value.length)
					}
					for (r = ft.needsContext.test(t) ? 0 : o.length; r-- && (a = o[r], !w.relative[s = a.type]);) if ((l = w.find[s]) && (n = l(a.matches[0].replace(bt, wt), _t.test(o[0].type) && c(e.parentNode) || e))) {
						if (o.splice(r, 1), t = n.length && d(o), !t) return Q.apply(i, n), i;
						break
					}
				}
				return (u || C(t, h))(n, e, !E, i, _t.test(t) && c(e.parentNode) || e), i
			}, b.sortStable = V.split("").sort(U).join("") === V, b.detectDuplicates = !! D, z(), b.sortDetached = r(function(t) {
				return 1 & t.compareDocumentPosition(I.createElement("div"))
			}), r(function(t) {
				return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
			}) || o("type|href|height|width", function(t, e, i) {
				return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
			}), b.attributes && r(function(t) {
				return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
			}) || o("value", function(t, e, i) {
				return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
			}), r(function(t) {
				return null == t.getAttribute("disabled")
			}) || o(et, function(t, e, i) {
				var n;
				return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
			}), e
		}(t);
	rt.find = ut, rt.expr = ut.selectors, rt.expr[":"] = rt.expr.pseudos, rt.unique = ut.uniqueSort, rt.text = ut.getText, rt.isXMLDoc = ut.isXML, rt.contains = ut.contains;
	var ct = rt.expr.match.needsContext,
		ht = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		dt = /^.[^:#\[\.,]*$/;
	rt.filter = function(t, e, i) {
		var n = e[0];
		return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? rt.find.matchesSelector(n, t) ? [n] : [] : rt.find.matches(t, rt.grep(e, function(t) {
			return 1 === t.nodeType
		}))
	}, rt.fn.extend({
		find: function(t) {
			var e, i = [],
				n = this,
				r = n.length;
			if ("string" != typeof t) return this.pushStack(rt(t).filter(function() {
				for (e = 0; r > e; e++) if (rt.contains(n[e], this)) return !0
			}));
			for (e = 0; r > e; e++) rt.find(t, n[e], i);
			return i = this.pushStack(r > 1 ? rt.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
		},
		filter: function(t) {
			return this.pushStack(n(this, t || [], !1))
		},
		not: function(t) {
			return this.pushStack(n(this, t || [], !0))
		},
		is: function(t) {
			return !!n(this, "string" == typeof t && ct.test(t) ? rt(t) : t || [], !1).length
		}
	});
	var pt, ft = t.document,
		mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		gt = rt.fn.init = function(t, e) {
			var i, n;
			if (!t) return this;
			if ("string" == typeof t) {
				if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : mt.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || pt).find(t) : this.constructor(e).find(t);
				if (i[1]) {
					if (e = e instanceof rt ? e[0] : e, rt.merge(this, rt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : ft, !0)), ht.test(i[1]) && rt.isPlainObject(e)) for (i in e) rt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
					return this
				}
				if (n = ft.getElementById(i[2]), n && n.parentNode) {
					if (n.id !== i[2]) return pt.find(t);
					this.length = 1, this[0] = n
				}
				return this.context = ft, this.selector = t, this
			}
			return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : rt.isFunction(t) ? "undefined" != typeof pt.ready ? pt.ready(t) : t(rt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), rt.makeArray(t, this))
		};
	gt.prototype = rt.fn, pt = rt(ft);
	var vt = /^(?:parents|prev(?:Until|All))/,
		yt = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	rt.extend({
		dir: function(t, e, i) {
			for (var n = [], r = t[e]; r && 9 !== r.nodeType && (void 0 === i || 1 !== r.nodeType || !rt(r).is(i));) 1 === r.nodeType && n.push(r), r = r[e];
			return n
		},
		sibling: function(t, e) {
			for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
			return i
		}
	}), rt.fn.extend({
		has: function(t) {
			var e, i = rt(t, this),
				n = i.length;
			return this.filter(function() {
				for (e = 0; n > e; e++) if (rt.contains(this, i[e])) return !0
			})
		},
		closest: function(t, e) {
			for (var i, n = 0, r = this.length, o = [], a = ct.test(t) || "string" != typeof t ? rt(t, e || this.context) : 0; r > n; n++) for (i = this[n]; i && i !== e; i = i.parentNode) if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && rt.find.matchesSelector(i, t))) {
				o.push(i);
				break
			}
			return this.pushStack(o.length > 1 ? rt.unique(o) : o)
		},
		index: function(t) {
			return t ? "string" == typeof t ? rt.inArray(this[0], rt(t)) : rt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(t, e) {
			return this.pushStack(rt.unique(rt.merge(this.get(), rt(t, e))))
		},
		addBack: function(t) {
			return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
		}
	}), rt.each({
		parent: function(t) {
			var e = t.parentNode;
			return e && 11 !== e.nodeType ? e : null
		},
		parents: function(t) {
			return rt.dir(t, "parentNode")
		},
		parentsUntil: function(t, e, i) {
			return rt.dir(t, "parentNode", i)
		},
		next: function(t) {
			return r(t, "nextSibling")
		},
		prev: function(t) {
			return r(t, "previousSibling")
		},
		nextAll: function(t) {
			return rt.dir(t, "nextSibling")
		},
		prevAll: function(t) {
			return rt.dir(t, "previousSibling")
		},
		nextUntil: function(t, e, i) {
			return rt.dir(t, "nextSibling", i)
		},
		prevUntil: function(t, e, i) {
			return rt.dir(t, "previousSibling", i)
		},
		siblings: function(t) {
			return rt.sibling((t.parentNode || {}).firstChild, t)
		},
		children: function(t) {
			return rt.sibling(t.firstChild)
		},
		contents: function(t) {
			return rt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : rt.merge([], t.childNodes)
		}
	}, function(t, e) {
		rt.fn[t] = function(i, n) {
			var r = rt.map(this, e, i);
			return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = rt.filter(n, r)), this.length > 1 && (yt[t] || (r = rt.unique(r)), vt.test(t) && (r = r.reverse())), this.pushStack(r)
		}
	});
	var _t = /\S+/g,
		xt = {};
	rt.Callbacks = function(t) {
		t = "string" == typeof t ? xt[t] || o(t) : rt.extend({}, t);
		var e, i, n, r, a, s, l = [],
			u = !t.once && [],
			c = function(o) {
				for (i = t.memory && o, n = !0, a = s || 0, s = 0, r = l.length, e = !0; l && r > a; a++) if (l[a].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
					i = !1;
					break
				}
				e = !1, l && (u ? u.length && c(u.shift()) : i ? l = [] : h.disable())
			},
			h = {
				add: function() {
					if (l) {
						var n = l.length;
						!
						function o(e) {
							rt.each(e, function(e, i) {
								var n = rt.type(i);
								"function" === n ? t.unique && h.has(i) || l.push(i) : i && i.length && "string" !== n && o(i)
							})
						}(arguments), e ? r = l.length : i && (s = n, c(i))
					}
					return this
				},
				remove: function() {
					return l && rt.each(arguments, function(t, i) {
						for (var n;
						(n = rt.inArray(i, l, n)) > -1;) l.splice(n, 1), e && (r >= n && r--, a >= n && a--)
					}), this
				},
				has: function(t) {
					return t ? rt.inArray(t, l) > -1 : !(!l || !l.length)
				},
				empty: function() {
					return l = [], r = 0, this
				},
				disable: function() {
					return l = u = i = void 0, this
				},
				disabled: function() {
					return !l
				},
				lock: function() {
					return u = void 0, i || h.disable(), this
				},
				locked: function() {
					return !u
				},
				fireWith: function(t, i) {
					return !l || n && !u || (i = i || [], i = [t, i.slice ? i.slice() : i], e ? u.push(i) : c(i)), this
				},
				fire: function() {
					return h.fireWith(this, arguments), this
				},
				fired: function() {
					return !!n
				}
			};
		return h
	}, rt.extend({
		Deferred: function(t) {
			var e = [
				["resolve", "done", rt.Callbacks("once memory"), "resolved"],
				["reject", "fail", rt.Callbacks("once memory"), "rejected"],
				["notify", "progress", rt.Callbacks("memory")]
			],
				i = "pending",
				n = {
					state: function() {
						return i
					},
					always: function() {
						return r.done(arguments).fail(arguments), this
					},
					then: function() {
						var t = arguments;
						return rt.Deferred(function(i) {
							rt.each(e, function(e, o) {
								var a = rt.isFunction(t[e]) && t[e];
								r[o[1]](function() {
									var t = a && a.apply(this, arguments);
									t && rt.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === n ? i.promise() : this, a ? [t] : arguments)
								})
							}), t = null
						}).promise()
					},
					promise: function(t) {
						return null != t ? rt.extend(t, n) : n
					}
				},
				r = {};
			return n.pipe = n.then, rt.each(e, function(t, o) {
				var a = o[2],
					s = o[3];
				n[o[1]] = a.add, s && a.add(function() {
					i = s
				}, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
					return r[o[0] + "With"](this === r ? n : this, arguments), this
				}, r[o[0] + "With"] = a.fireWith
			}), n.promise(r), t && t.call(r, r), r
		},
		when: function(t) {
			var e, i, n, r = 0,
				o = Y.call(arguments),
				a = o.length,
				s = 1 !== a || t && rt.isFunction(t.promise) ? a : 0,
				l = 1 === s ? t : rt.Deferred(),
				u = function(t, i, n) {
					return function(r) {
						i[t] = this, n[t] = arguments.length > 1 ? Y.call(arguments) : r, n === e ? l.notifyWith(i, n) : --s || l.resolveWith(i, n)
					}
				};
			if (a > 1) for (e = new Array(a), i = new Array(a), n = new Array(a); a > r; r++) o[r] && rt.isFunction(o[r].promise) ? o[r].promise().done(u(r, n, o)).fail(l.reject).progress(u(r, i, e)) : --s;
			return s || l.resolveWith(n, o), l.promise()
		}
	});
	var bt;
	rt.fn.ready = function(t) {
		return rt.ready.promise().done(t), this
	}, rt.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(t) {
			t ? rt.readyWait++ : rt.ready(!0)
		},
		ready: function(t) {
			if (t === !0 ? !--rt.readyWait : !rt.isReady) {
				if (!ft.body) return setTimeout(rt.ready);
				rt.isReady = !0, t !== !0 && --rt.readyWait > 0 || (bt.resolveWith(ft, [rt]), rt.fn.triggerHandler && (rt(ft).triggerHandler("ready"), rt(ft).off("ready")))
			}
		}
	}), rt.ready.promise = function(e) {
		if (!bt) if (bt = rt.Deferred(), "complete" === ft.readyState) setTimeout(rt.ready);
		else if (ft.addEventListener) ft.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1);
		else {
			ft.attachEvent("onreadystatechange", s), t.attachEvent("onload", s);
			var i = !1;
			try {
				i = null == t.frameElement && ft.documentElement
			} catch (n) {}
			i && i.doScroll && !
			function r() {
				if (!rt.isReady) {
					try {
						i.doScroll("left")
					} catch (t) {
						return setTimeout(r, 50)
					}
					a(), rt.ready()
				}
			}()
		}
		return bt.promise(e)
	};
	var wt, Mt = "undefined";
	for (wt in rt(it)) break;
	it.ownLast = "0" !== wt, it.inlineBlockNeedsLayout = !1, rt(function() {
		var t, e, i, n;
		i = ft.getElementsByTagName("body")[0], i && i.style && (e = ft.createElement("div"), n = ft.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== Mt && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", it.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n))
	}), function() {
		var t = ft.createElement("div");
		if (null == it.deleteExpando) {
			it.deleteExpando = !0;
			try {
				delete t.test
			} catch (e) {
				it.deleteExpando = !1
			}
		}
		t = null
	}(), rt.acceptData = function(t) {
		var e = rt.noData[(t.nodeName + " ").toLowerCase()],
			i = +t.nodeType || 1;
		return 1 !== i && 9 !== i ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
	};
	var St = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		Lt = /([A-Z])/g;
	rt.extend({
		cache: {},
		noData: {
			"applet ": !0,
			"embed ": !0,
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function(t) {
			return t = t.nodeType ? rt.cache[t[rt.expando]] : t[rt.expando], !! t && !u(t)
		},
		data: function(t, e, i) {
			return c(t, e, i)
		},
		removeData: function(t, e) {
			return h(t, e)
		},
		_data: function(t, e, i) {
			return c(t, e, i, !0)
		},
		_removeData: function(t, e) {
			return h(t, e, !0)
		}
	}), rt.fn.extend({
		data: function(t, e) {
			var i, n, r, o = this[0],
				a = o && o.attributes;
			if (void 0 === t) {
				if (this.length && (r = rt.data(o), 1 === o.nodeType && !rt._data(o, "parsedAttrs"))) {
					for (i = a.length; i--;) a[i] && (n = a[i].name, 0 === n.indexOf("data-") && (n = rt.camelCase(n.slice(5)), l(o, n, r[n])));
					rt._data(o, "parsedAttrs", !0)
				}
				return r
			}
			return "object" == typeof t ? this.each(function() {
				rt.data(this, t)
			}) : arguments.length > 1 ? this.each(function() {
				rt.data(this, t, e)
			}) : o ? l(o, t, rt.data(o, t)) : void 0
		},
		removeData: function(t) {
			return this.each(function() {
				rt.removeData(this, t)
			})
		}
	}), rt.extend({
		queue: function(t, e, i) {
			var n;
			return t ? (e = (e || "fx") + "queue", n = rt._data(t, e), i && (!n || rt.isArray(i) ? n = rt._data(t, e, rt.makeArray(i)) : n.push(i)), n || []) : void 0
		},
		dequeue: function(t, e) {
			e = e || "fx";
			var i = rt.queue(t, e),
				n = i.length,
				r = i.shift(),
				o = rt._queueHooks(t, e),
				a = function() {
					rt.dequeue(t, e)
				};
			"inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete o.stop, r.call(t, a, o)), !n && o && o.empty.fire()
		},
		_queueHooks: function(t, e) {
			var i = e + "queueHooks";
			return rt._data(t, i) || rt._data(t, i, {
				empty: rt.Callbacks("once memory").add(function() {
					rt._removeData(t, e + "queue"), rt._removeData(t, i)
				})
			})
		}
	}), rt.fn.extend({
		queue: function(t, e) {
			var i = 2;
			return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? rt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
				var i = rt.queue(this, t, e);
				rt._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && rt.dequeue(this, t)
			})
		},
		dequeue: function(t) {
			return this.each(function() {
				rt.dequeue(this, t)
			})
		},
		clearQueue: function(t) {
			return this.queue(t || "fx", [])
		},
		promise: function(t, e) {
			var i, n = 1,
				r = rt.Deferred(),
				o = this,
				a = this.length,
				s = function() {
					--n || r.resolveWith(o, [o])
				};
			for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) i = rt._data(o[a], t + "queueHooks"), i && i.empty && (n++, i.empty.add(s));
			return s(), r.promise(e)
		}
	});
	var Ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		Tt = ["Top", "Right", "Bottom", "Left"],
		Pt = function(t, e) {
			return t = e || t, "none" === rt.css(t, "display") || !rt.contains(t.ownerDocument, t)
		},
		At = rt.access = function(t, e, i, n, r, o, a) {
			var s = 0,
				l = t.length,
				u = null == i;
			if ("object" === rt.type(i)) {
				r = !0;
				for (s in i) rt.access(t, e, s, i[s], !0, o, a)
			} else if (void 0 !== n && (r = !0, rt.isFunction(n) || (a = !0), u && (a ? (e.call(t, n), e = null) : (u = e, e = function(t, e, i) {
				return u.call(rt(t), i)
			})), e)) for (; l > s; s++) e(t[s], i, a ? n : n.call(t[s], s, e(t[s], i)));
			return r ? t : u ? e.call(t) : l ? e(t[0], i) : o
		},
		Dt = /^(?:checkbox|radio)$/i;
	!
	function() {
		var t = ft.createElement("input"),
			e = ft.createElement("div"),
			i = ft.createDocumentFragment();
		if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", it.leadingWhitespace = 3 === e.firstChild.nodeType, it.tbody = !e.getElementsByTagName("tbody").length, it.htmlSerialize = !! e.getElementsByTagName("link").length, it.html5Clone = "<:nav></:nav>" !== ft.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), it.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", it.noCloneChecked = !! e.cloneNode(!0).lastChild.defaultValue, i.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", it.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, it.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
			it.noCloneEvent = !1
		}), e.cloneNode(!0).click()), null == it.deleteExpando) {
			it.deleteExpando = !0;
			try {
				delete e.test
			} catch (n) {
				it.deleteExpando = !1
			}
		}
	}(), function() {
		var e, i, n = ft.createElement("div");
		for (e in {
			submit: !0,
			change: !0,
			focusin: !0
		}) i = "on" + e, (it[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"), it[e + "Bubbles"] = n.attributes[i].expando === !1);
		n = null
	}();
	var zt = /^(?:input|select|textarea)$/i,
		It = /^key/,
		kt = /^(?:mouse|pointer|contextmenu)|click/,
		Et = /^(?:focusinfocus|focusoutblur)$/,
		Ot = /^([^.]*)(?:\.(.+)|)$/;
	rt.event = {
		global: {},
		add: function(t, e, i, n, r) {
			var o, a, s, l, u, c, h, d, p, f, m, g = rt._data(t);
			if (g) {
				for (i.handler && (l = i, i = l.handler, r = l.selector), i.guid || (i.guid = rt.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function(t) {
					return typeof rt === Mt || t && rt.event.triggered === t.type ? void 0 : rt.event.dispatch.apply(c.elem, arguments)
				}, c.elem = t), e = (e || "").match(_t) || [""], s = e.length; s--;) o = Ot.exec(e[s]) || [], p = m = o[1], f = (o[2] || "").split(".").sort(), p && (u = rt.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, u = rt.event.special[p] || {}, h = rt.extend({
					type: p,
					origType: m,
					data: n,
					handler: i,
					guid: i.guid,
					selector: r,
					needsContext: r && rt.expr.match.needsContext.test(r),
					namespace: f.join(".")
				}, l), (d = a[p]) || (d = a[p] = [], d.delegateCount = 0, u.setup && u.setup.call(t, n, f, c) !== !1 || (t.addEventListener ? t.addEventListener(p, c, !1) : t.attachEvent && t.attachEvent("on" + p, c))), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), r ? d.splice(d.delegateCount++, 0, h) : d.push(h), rt.event.global[p] = !0);
				t = null
			}
		},
		remove: function(t, e, i, n, r) {
			var o, a, s, l, u, c, h, d, p, f, m, g = rt.hasData(t) && rt._data(t);
			if (g && (c = g.events)) {
				for (e = (e || "").match(_t) || [""], u = e.length; u--;) if (s = Ot.exec(e[u]) || [], p = m = s[1], f = (s[2] || "").split(".").sort(), p) {
					for (h = rt.event.special[p] || {}, p = (n ? h.delegateType : h.bindType) || p, d = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) a = d[o], !r && m !== a.origType || i && i.guid !== a.guid || s && !s.test(a.namespace) || n && n !== a.selector && ("**" !== n || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, h.remove && h.remove.call(t, a));
					l && !d.length && (h.teardown && h.teardown.call(t, f, g.handle) !== !1 || rt.removeEvent(t, p, g.handle), delete c[p])
				} else for (p in c) rt.event.remove(t, p + e[u], i, n, !0);
				rt.isEmptyObject(c) && (delete g.handle, rt._removeData(t, "events"))
			}
		},
		trigger: function(e, i, n, r) {
			var o, a, s, l, u, c, h, d = [n || ft],
				p = et.call(e, "type") ? e.type : e,
				f = et.call(e, "namespace") ? e.namespace.split(".") : [];
			if (s = c = n = n || ft, 3 !== n.nodeType && 8 !== n.nodeType && !Et.test(p + rt.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), a = p.indexOf(":") < 0 && "on" + p, e = e[rt.expando] ? e : new rt.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : rt.makeArray(i, [e]), u = rt.event.special[p] || {}, r || !u.trigger || u.trigger.apply(n, i) !== !1)) {
				if (!r && !u.noBubble && !rt.isWindow(n)) {
					for (l = u.delegateType || p, Et.test(l + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s), c = s;
					c === (n.ownerDocument || ft) && d.push(c.defaultView || c.parentWindow || t)
				}
				for (h = 0;
				(s = d[h++]) && !e.isPropagationStopped();) e.type = h > 1 ? l : u.bindType || p, o = (rt._data(s, "events") || {})[e.type] && rt._data(s, "handle"), o && o.apply(s, i), o = a && s[a], o && o.apply && rt.acceptData(s) && (e.result = o.apply(s, i), e.result === !1 && e.preventDefault());
				if (e.type = p, !r && !e.isDefaultPrevented() && (!u._default || u._default.apply(d.pop(), i) === !1) && rt.acceptData(n) && a && n[p] && !rt.isWindow(n)) {
					c = n[a], c && (n[a] = null), rt.event.triggered = p;
					try {
						n[p]()
					} catch (m) {}
					rt.event.triggered = void 0, c && (n[a] = c)
				}
				return e.result
			}
		},
		dispatch: function(t) {
			t = rt.event.fix(t);
			var e, i, n, r, o, a = [],
				s = Y.call(arguments),
				l = (rt._data(this, "events") || {})[t.type] || [],
				u = rt.event.special[t.type] || {};
			if (s[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
				for (a = rt.event.handlers.call(this, t, l), e = 0;
				(r = a[e++]) && !t.isPropagationStopped();) for (t.currentTarget = r.elem, o = 0;
				(n = r.handlers[o++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, i = ((rt.event.special[n.origType] || {}).handle || n.handler).apply(r.elem, s), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
				return u.postDispatch && u.postDispatch.call(this, t), t.result
			}
		},
		handlers: function(t, e) {
			var i, n, r, o, a = [],
				s = e.delegateCount,
				l = t.target;
			if (s && l.nodeType && (!t.button || "click" !== t.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
				for (r = [], o = 0; s > o; o++) n = e[o], i = n.selector + " ", void 0 === r[i] && (r[i] = n.needsContext ? rt(i, this).index(l) >= 0 : rt.find(i, this, null, [l]).length), r[i] && r.push(n);
				r.length && a.push({
					elem: l,
					handlers: r
				})
			}
			return s < e.length && a.push({
				elem: this,
				handlers: e.slice(s)
			}), a
		},
		fix: function(t) {
			if (t[rt.expando]) return t;
			var e, i, n, r = t.type,
				o = t,
				a = this.fixHooks[r];
			for (a || (this.fixHooks[r] = a = kt.test(r) ? this.mouseHooks : It.test(r) ? this.keyHooks : {}), n = a.props ? this.props.concat(a.props) : this.props, t = new rt.Event(o), e = n.length; e--;) i = n[e], t[i] = o[i];
			return t.target || (t.target = o.srcElement || ft), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !! t.metaKey, a.filter ? a.filter(t, o) : t
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(t, e) {
				return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(t, e) {
				var i, n, r, o = e.button,
					a = e.fromElement;
				return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || ft, r = n.documentElement, i = n.body, t.pageX = e.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== f() && this.focus) try {
						return this.focus(), !1
					} catch (t) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === f() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return rt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
				},
				_default: function(t) {
					return rt.nodeName(t.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(t) {
					void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
				}
			}
		},
		simulate: function(t, e, i, n) {
			var r = rt.extend(new rt.Event, i, {
				type: t,
				isSimulated: !0,
				originalEvent: {}
			});
			n ? rt.event.trigger(r, null, e) : rt.event.dispatch.call(e, r), r.isDefaultPrevented() && i.preventDefault()
		}
	}, rt.removeEvent = ft.removeEventListener ?
	function(t, e, i) {
		t.removeEventListener && t.removeEventListener(e, i, !1)
	} : function(t, e, i) {
		var n = "on" + e;
		t.detachEvent && (typeof t[n] === Mt && (t[n] = null), t.detachEvent(n, i))
	}, rt.Event = function(t, e) {
		return this instanceof rt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? d : p) : this.type = t, e && rt.extend(this, e), this.timeStamp = t && t.timeStamp || rt.now(), void(this[rt.expando] = !0)) : new rt.Event(t, e)
	}, rt.Event.prototype = {
		isDefaultPrevented: p,
		isPropagationStopped: p,
		isImmediatePropagationStopped: p,
		preventDefault: function() {
			var t = this.originalEvent;
			this.isDefaultPrevented = d, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
		},
		stopPropagation: function() {
			var t = this.originalEvent;
			this.isPropagationStopped = d, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			var t = this.originalEvent;
			this.isImmediatePropagationStopped = d, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
		}
	}, rt.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(t, e) {
		rt.event.special[t] = {
			delegateType: e,
			bindType: e,
			handle: function(t) {
				var i, n = this,
					r = t.relatedTarget,
					o = t.handleObj;
				return (!r || r !== n && !rt.contains(n, r)) && (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
			}
		}
	}), it.submitBubbles || (rt.event.special.submit = {
		setup: function() {
			return rt.nodeName(this, "form") ? !1 : void rt.event.add(this, "click._submit keypress._submit", function(t) {
				var e = t.target,
					i = rt.nodeName(e, "input") || rt.nodeName(e, "button") ? e.form : void 0;
				i && !rt._data(i, "submitBubbles") && (rt.event.add(i, "submit._submit", function(t) {
					t._submit_bubble = !0
				}), rt._data(i, "submitBubbles", !0))
			})
		},
		postDispatch: function(t) {
			t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && rt.event.simulate("submit", this.parentNode, t, !0))
		},
		teardown: function() {
			return rt.nodeName(this, "form") ? !1 : void rt.event.remove(this, "._submit")
		}
	}), it.changeBubbles || (rt.event.special.change = {
		setup: function() {
			return zt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (rt.event.add(this, "propertychange._change", function(t) {
				"checked" === t.originalEvent.propertyName && (this._just_changed = !0)
			}), rt.event.add(this, "click._change", function(t) {
				this._just_changed && !t.isTrigger && (this._just_changed = !1), rt.event.simulate("change", this, t, !0)
			})), !1) : void rt.event.add(this, "beforeactivate._change", function(t) {
				var e = t.target;
				zt.test(e.nodeName) && !rt._data(e, "changeBubbles") && (rt.event.add(e, "change._change", function(t) {
					!this.parentNode || t.isSimulated || t.isTrigger || rt.event.simulate("change", this.parentNode, t, !0)
				}), rt._data(e, "changeBubbles", !0))
			})
		},
		handle: function(t) {
			var e = t.target;
			return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
		},
		teardown: function() {
			return rt.event.remove(this, "._change"), !zt.test(this.nodeName)
		}
	}), it.focusinBubbles || rt.each({
		focus: "focusin",
		blur: "focusout"
	}, function(t, e) {
		var i = function(t) {
				rt.event.simulate(e, t.target, rt.event.fix(t), !0)
			};
		rt.event.special[e] = {
			setup: function() {
				var n = this.ownerDocument || this,
					r = rt._data(n, e);
				r || n.addEventListener(t, i, !0), rt._data(n, e, (r || 0) + 1)
			},
			teardown: function() {
				var n = this.ownerDocument || this,
					r = rt._data(n, e) - 1;
				r ? rt._data(n, e, r) : (n.removeEventListener(t, i, !0), rt._removeData(n, e))
			}
		}
	}), rt.fn.extend({
		on: function(t, e, i, n, r) {
			var o, a;
			if ("object" == typeof t) {
				"string" != typeof e && (i = i || e, e = void 0);
				for (o in t) this.on(o, e, i, t[o], r);
				return this
			}
			if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = p;
			else if (!n) return this;
			return 1 === r && (a = n, n = function(t) {
				return rt().off(t), a.apply(this, arguments)
			}, n.guid = a.guid || (a.guid = rt.guid++)), this.each(function() {
				rt.event.add(this, t, n, i, e)
			})
		},
		one: function(t, e, i, n) {
			return this.on(t, e, i, n, 1)
		},
		off: function(t, e, i) {
			var n, r;
			if (t && t.preventDefault && t.handleObj) return n = t.handleObj, rt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
			if ("object" == typeof t) {
				for (r in t) this.off(r, e, t[r]);
				return this
			}
			return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = p), this.each(function() {
				rt.event.remove(this, t, i, e)
			})
		},
		trigger: function(t, e) {
			return this.each(function() {
				rt.event.trigger(t, e, this)
			})
		},
		triggerHandler: function(t, e) {
			var i = this[0];
			return i ? rt.event.trigger(t, e, i, !0) : void 0
		}
	});
	var Nt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		Rt = / jQuery\d+="(?:null|\d+)"/g,
		Bt = new RegExp("<(?:" + Nt + ")[\\s/>]", "i"),
		Vt = /^\s+/,
		qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		Zt = /<([\w:]+)/,
		Gt = /<tbody/i,
		Ht = /<|&#?\w+;/,
		Ft = /<(?:script|style|link)/i,
		Wt = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Ut = /^$|\/(?:java|ecma)script/i,
		jt = /^true\/(.*)/,
		Xt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		Yt = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: it.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		Jt = m(ft),
		Kt = Jt.appendChild(ft.createElement("div"));
	Yt.optgroup = Yt.option, Yt.tbody = Yt.tfoot = Yt.colgroup = Yt.caption = Yt.thead, Yt.th = Yt.td, rt.extend({
		clone: function(t, e, i) {
			var n, r, o, a, s, l = rt.contains(t.ownerDocument, t);
			if (it.html5Clone || rt.isXMLDoc(t) || !Bt.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Kt.innerHTML = t.outerHTML, Kt.removeChild(o = Kt.firstChild)), !(it.noCloneEvent && it.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || rt.isXMLDoc(t))) for (n = g(o), s = g(t), a = 0; null != (r = s[a]); ++a) n[a] && M(r, n[a]);
			if (e) if (i) for (s = s || g(t), n = n || g(o), a = 0; null != (r = s[a]); a++) w(r, n[a]);
			else w(t, o);
			return n = g(o, "script"), n.length > 0 && b(n, !l && g(t, "script")), n = s = r = null, o
		},
		buildFragment: function(t, e, i, n) {
			for (var r, o, a, s, l, u, c, h = t.length, d = m(e), p = [], f = 0; h > f; f++) if (o = t[f], o || 0 === o) if ("object" === rt.type(o)) rt.merge(p, o.nodeType ? [o] : o);
			else if (Ht.test(o)) {
				for (s = s || d.appendChild(e.createElement("div")), l = (Zt.exec(o) || ["", ""])[1].toLowerCase(), c = Yt[l] || Yt._default, s.innerHTML = c[1] + o.replace(qt, "<$1></$2>") + c[2], r = c[0]; r--;) s = s.lastChild;
				if (!it.leadingWhitespace && Vt.test(o) && p.push(e.createTextNode(Vt.exec(o)[0])), !it.tbody) for (o = "table" !== l || Gt.test(o) ? "<table>" !== c[1] || Gt.test(o) ? 0 : s : s.firstChild, r = o && o.childNodes.length; r--;) rt.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
				for (rt.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
				s = d.lastChild
			} else p.push(e.createTextNode(o));
			for (s && d.removeChild(s), it.appendChecked || rt.grep(g(p, "input"), v), f = 0; o = p[f++];) if ((!n || -1 === rt.inArray(o, n)) && (a = rt.contains(o.ownerDocument, o), s = g(d.appendChild(o), "script"), a && b(s), i)) for (r = 0; o = s[r++];) Ut.test(o.type || "") && i.push(o);
			return s = null, d
		},
		cleanData: function(t, e) {
			for (var i, n, r, o, a = 0, s = rt.expando, l = rt.cache, u = it.deleteExpando, c = rt.event.special; null != (i = t[a]); a++) if ((e || rt.acceptData(i)) && (r = i[s], o = r && l[r])) {
				if (o.events) for (n in o.events) c[n] ? rt.event.remove(i, n) : rt.removeEvent(i, n, o.handle);
				l[r] && (delete l[r], u ? delete i[s] : typeof i.removeAttribute !== Mt ? i.removeAttribute(s) : i[s] = null, X.push(r))
			}
		}
	}), rt.fn.extend({
		text: function(t) {
			return At(this, function(t) {
				return void 0 === t ? rt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ft).createTextNode(t))
			}, null, t, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(t) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var e = y(this, t);
					e.appendChild(t)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(t) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var e = y(this, t);
					e.insertBefore(t, e.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(t) {
				this.parentNode && this.parentNode.insertBefore(t, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(t) {
				this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
			})
		},
		remove: function(t, e) {
			for (var i, n = t ? rt.filter(t, this) : this, r = 0; null != (i = n[r]); r++) e || 1 !== i.nodeType || rt.cleanData(g(i)), i.parentNode && (e && rt.contains(i.ownerDocument, i) && b(g(i, "script")), i.parentNode.removeChild(i));
			return this
		},
		empty: function() {
			for (var t, e = 0; null != (t = this[e]); e++) {
				for (1 === t.nodeType && rt.cleanData(g(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
				t.options && rt.nodeName(t, "select") && (t.options.length = 0)
			}
			return this
		},
		clone: function(t, e) {
			return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
				return rt.clone(this, t, e)
			})
		},
		html: function(t) {
			return At(this, function(t) {
				var e = this[0] || {},
					i = 0,
					n = this.length;
				if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Rt, "") : void 0;
				if (!("string" != typeof t || Ft.test(t) || !it.htmlSerialize && Bt.test(t) || !it.leadingWhitespace && Vt.test(t) || Yt[(Zt.exec(t) || ["", ""])[1].toLowerCase()])) {
					t = t.replace(qt, "<$1></$2>");
					try {
						for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (rt.cleanData(g(e, !1)), e.innerHTML = t);
						e = 0
					} catch (r) {}
				}
				e && this.empty().append(t)
			}, null, t, arguments.length)
		},
		replaceWith: function() {
			var t = arguments[0];
			return this.domManip(arguments, function(e) {
				t = this.parentNode, rt.cleanData(g(this)), t && t.replaceChild(e, this)
			}), t && (t.length || t.nodeType) ? this : this.remove()
		},
		detach: function(t) {
			return this.remove(t, !0)
		},
		domManip: function(t, e) {
			t = J.apply([], t);
			var i, n, r, o, a, s, l = 0,
				u = this.length,
				c = this,
				h = u - 1,
				d = t[0],
				p = rt.isFunction(d);
			if (p || u > 1 && "string" == typeof d && !it.checkClone && Wt.test(d)) return this.each(function(i) {
				var n = c.eq(i);
				p && (t[0] = d.call(this, i, n.html())), n.domManip(t, e)
			});
			if (u && (s = rt.buildFragment(t, this[0].ownerDocument, !1, this), i = s.firstChild, 1 === s.childNodes.length && (s = i), i)) {
				for (o = rt.map(g(s, "script"), _), r = o.length; u > l; l++) n = s, l !== h && (n = rt.clone(n, !0, !0), r && rt.merge(o, g(n, "script"))), e.call(this[l], n, l);
				if (r) for (a = o[o.length - 1].ownerDocument, rt.map(o, x), l = 0; r > l; l++) n = o[l], Ut.test(n.type || "") && !rt._data(n, "globalEval") && rt.contains(a, n) && (n.src ? rt._evalUrl && rt._evalUrl(n.src) : rt.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Xt, "")));
				s = i = null
			}
			return this
		}
	}), rt.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(t, e) {
		rt.fn[t] = function(t) {
			for (var i, n = 0, r = [], o = rt(t), a = o.length - 1; a >= n; n++) i = n === a ? this : this.clone(!0), rt(o[n])[e](i), K.apply(r, i.get());
			return this.pushStack(r)
		}
	});
	var Qt, $t = {};
	!
	function() {
		var t;
		it.shrinkWrapBlocks = function() {
			if (null != t) return t;
			t = !1;
			var e, i, n;
			return i = ft.getElementsByTagName("body")[0], i && i.style ? (e = ft.createElement("div"), n = ft.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== Mt && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(ft.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), i.removeChild(n), t) : void 0
		}
	}();
	var te, ee, ie = /^margin/,
		ne = new RegExp("^(" + Ct + ")(?!px)[a-z%]+$", "i"),
		re = /^(top|right|bottom|left)$/;
	t.getComputedStyle ? (te = function(e) {
		return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
	}, ee = function(t, e, i) {
		var n, r, o, a, s = t.style;
		return i = i || te(t), a = i ? i.getPropertyValue(e) || i[e] : void 0, i && ("" !== a || rt.contains(t.ownerDocument, t) || (a = rt.style(t, e)), ne.test(a) && ie.test(e) && (n = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = i.width, s.width = n, s.minWidth = r, s.maxWidth = o)), void 0 === a ? a : a + ""
	}) : ft.documentElement.currentStyle && (te = function(t) {
		return t.currentStyle
	}, ee = function(t, e, i) {
		var n, r, o, a, s = t.style;
		return i = i || te(t), a = i ? i[e] : void 0, null == a && s && s[e] && (a = s[e]), ne.test(a) && !re.test(e) && (n = s.left, r = t.runtimeStyle, o = r && r.left, o && (r.left = t.currentStyle.left), s.left = "fontSize" === e ? "1em" : a, a = s.pixelLeft + "px", s.left = n, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
	}), !
	function() {
		function e() {
			var e, i, n, r;
			i = ft.getElementsByTagName("body")[0], i && i.style && (e = ft.createElement("div"), n = ft.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, l = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(e, null) || {}).top, a = "4px" === (t.getComputedStyle(e, null) || {
				width: "4px"
			}).width, r = e.appendChild(ft.createElement("div")), r.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(r, null) || {}).marginRight), e.removeChild(r)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = e.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === r[0].offsetHeight, s && (r[0].style.display = "", r[1].style.display = "none", s = 0 === r[0].offsetHeight), i.removeChild(n))
		}
		var i, n, r, o, a, s, l;
		i = ft.createElement("div"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = i.getElementsByTagName("a")[0], (n = r && r.style) && (n.cssText = "float:left;opacity:.5", it.opacity = "0.5" === n.opacity, it.cssFloat = !! n.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", it.clearCloneStyle = "content-box" === i.style.backgroundClip, it.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, rt.extend(it, {
			reliableHiddenOffsets: function() {
				return null == s && e(), s
			},
			boxSizingReliable: function() {
				return null == a && e(), a
			},
			pixelPosition: function() {
				return null == o && e(), o
			},
			reliableMarginRight: function() {
				return null == l && e(), l
			}
		}))
	}(), rt.swap = function(t, e, i, n) {
		var r, o, a = {};
		for (o in e) a[o] = t.style[o], t.style[o] = e[o];
		r = i.apply(t, n || []);
		for (o in e) t.style[o] = a[o];
		return r
	};
	var oe = /alpha\([^)]*\)/i,
		ae = /opacity\s*=\s*([^)]*)/,
		se = /^(none|table(?!-c[ea]).+)/,
		le = new RegExp("^(" + Ct + ")(.*)$", "i"),
		ue = new RegExp("^([+-])=(" + Ct + ")", "i"),
		ce = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		he = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		de = ["Webkit", "O", "Moz", "ms"];
	rt.extend({
		cssHooks: {
			opacity: {
				get: function(t, e) {
					if (e) {
						var i = ee(t, "opacity");
						return "" === i ? "1" : i
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": it.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(t, e, i, n) {
			if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
				var r, o, a, s = rt.camelCase(e),
					l = t.style;
				if (e = rt.cssProps[s] || (rt.cssProps[s] = T(l, s)), a = rt.cssHooks[e] || rt.cssHooks[s], void 0 === i) return a && "get" in a && void 0 !== (r = a.get(t, !1, n)) ? r : l[e];
				if (o = typeof i, "string" === o && (r = ue.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(rt.css(t, e)), o = "number"), null != i && i === i && ("number" !== o || rt.cssNumber[s] || (i += "px"), it.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(a && "set" in a && void 0 === (i = a.set(t, i, n))))) try {
					l[e] = i
				} catch (u) {}
			}
		},
		css: function(t, e, i, n) {
			var r, o, a, s = rt.camelCase(e);
			return e = rt.cssProps[s] || (rt.cssProps[s] = T(t.style, s)), a = rt.cssHooks[e] || rt.cssHooks[s], a && "get" in a && (o = a.get(t, !0, i)), void 0 === o && (o = ee(t, e, n)), "normal" === o && e in he && (o = he[e]), "" === i || i ? (r = parseFloat(o), i === !0 || rt.isNumeric(r) ? r || 0 : o) : o
		}
	}), rt.each(["height", "width"], function(t, e) {
		rt.cssHooks[e] = {
			get: function(t, i, n) {
				return i ? se.test(rt.css(t, "display")) && 0 === t.offsetWidth ? rt.swap(t, ce, function() {
					return z(t, e, n)
				}) : z(t, e, n) : void 0
			},
			set: function(t, i, n) {
				var r = n && te(t);
				return A(t, i, n ? D(t, e, n, it.boxSizing && "border-box" === rt.css(t, "boxSizing", !1, r), r) : 0)
			}
		}
	}), it.opacity || (rt.cssHooks.opacity = {
		get: function(t, e) {
			return ae.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
		},
		set: function(t, e) {
			var i = t.style,
				n = t.currentStyle,
				r = rt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
				o = n && n.filter || i.filter || "";
			i.zoom = 1, (e >= 1 || "" === e) && "" === rt.trim(o.replace(oe, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = oe.test(o) ? o.replace(oe, r) : o + " " + r)
		}
	}), rt.cssHooks.marginRight = C(it.reliableMarginRight, function(t, e) {
		return e ? rt.swap(t, {
			display: "inline-block"
		}, ee, [t, "marginRight"]) : void 0
	}), rt.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(t, e) {
		rt.cssHooks[t + e] = {
			expand: function(i) {
				for (var n = 0, r = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[t + Tt[n] + e] = o[n] || o[n - 2] || o[0];
				return r
			}
		}, ie.test(t) || (rt.cssHooks[t + e].set = A)
	}), rt.fn.extend({
		css: function(t, e) {
			return At(this, function(t, e, i) {
				var n, r, o = {},
					a = 0;
				if (rt.isArray(e)) {
					for (n = te(t), r = e.length; r > a; a++) o[e[a]] = rt.css(t, e[a], !1, n);
					return o
				}
				return void 0 !== i ? rt.style(t, e, i) : rt.css(t, e)
			}, t, e, arguments.length > 1)
		},
		show: function() {
			return P(this, !0)
		},
		hide: function() {
			return P(this)
		},
		toggle: function(t) {
			return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
				Pt(this) ? rt(this).show() : rt(this).hide()
			})
		}
	}), rt.Tween = I, I.prototype = {
		constructor: I,
		init: function(t, e, i, n, r, o) {
			this.elem = t, this.prop = i, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (rt.cssNumber[i] ? "" : "px")
		},
		cur: function() {
			var t = I.propHooks[this.prop];
			return t && t.get ? t.get(this) : I.propHooks._default.get(this)
		},
		run: function(t) {
			var e, i = I.propHooks[this.prop];
			return this.pos = e = this.options.duration ? rt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : I.propHooks._default.set(this), this
		}
	}, I.prototype.init.prototype = I.prototype, I.propHooks = {
		_default: {
			get: function(t) {
				var e;
				return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = rt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
			},
			set: function(t) {
				rt.fx.step[t.prop] ? rt.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[rt.cssProps[t.prop]] || rt.cssHooks[t.prop]) ? rt.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
			}
		}
	}, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
		set: function(t) {
			t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
		}
	}, rt.easing = {
		linear: function(t) {
			return t
		},
		swing: function(t) {
			return .5 - Math.cos(t * Math.PI) / 2
		}
	}, rt.fx = I.prototype.init, rt.fx.step = {};
	var pe, fe, me = /^(?:toggle|show|hide)$/,
		ge = new RegExp("^(?:([+-])=|)(" + Ct + ")([a-z%]*)$", "i"),
		ve = /queueHooks$/,
		ye = [N],
		_e = {
			"*": [function(t, e) {
				var i = this.createTween(t, e),
					n = i.cur(),
					r = ge.exec(e),
					o = r && r[3] || (rt.cssNumber[t] ? "" : "px"),
					a = (rt.cssNumber[t] || "px" !== o && +n) && ge.exec(rt.css(i.elem, t)),
					s = 1,
					l = 20;
				if (a && a[3] !== o) {
					o = o || a[3], r = r || [], a = +n || 1;
					do s = s || ".5", a /= s, rt.style(i.elem, t, a + o);
					while (s !== (s = i.cur() / n) && 1 !== s && --l)
				}
				return r && (a = i.start = +a || +n || 0, i.unit = o, i.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), i
			}]
		};
	rt.Animation = rt.extend(B, {
		tweener: function(t, e) {
			rt.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
			for (var i, n = 0, r = t.length; r > n; n++) i = t[n], _e[i] = _e[i] || [], _e[i].unshift(e)
		},
		prefilter: function(t, e) {
			e ? ye.unshift(t) : ye.push(t)
		}
	}), rt.speed = function(t, e, i) {
		var n = t && "object" == typeof t ? rt.extend({}, t) : {
			complete: i || !i && e || rt.isFunction(t) && t,
			duration: t,
			easing: i && e || e && !rt.isFunction(e) && e
		};
		return n.duration = rt.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in rt.fx.speeds ? rt.fx.speeds[n.duration] : rt.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
			rt.isFunction(n.old) && n.old.call(this), n.queue && rt.dequeue(this, n.queue)
		}, n
	}, rt.fn.extend({
		fadeTo: function(t, e, i, n) {
			return this.filter(Pt).css("opacity", 0).show().end().animate({
				opacity: e
			}, t, i, n)
		},
		animate: function(t, e, i, n) {
			var r = rt.isEmptyObject(t),
				o = rt.speed(e, i, n),
				a = function() {
					var e = B(this, rt.extend({}, t), o);
					(r || rt._data(this, "finish")) && e.stop(!0)
				};
			return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
		},
		stop: function(t, e, i) {
			var n = function(t) {
					var e = t.stop;
					delete t.stop, e(i)
				};
			return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
				var e = !0,
					r = null != t && t + "queueHooks",
					o = rt.timers,
					a = rt._data(this);
				if (r) a[r] && a[r].stop && n(a[r]);
				else for (r in a) a[r] && a[r].stop && ve.test(r) && n(a[r]);
				for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(i), e = !1, o.splice(r, 1));
				(e || !i) && rt.dequeue(this, t)
			})
		},
		finish: function(t) {
			return t !== !1 && (t = t || "fx"), this.each(function() {
				var e, i = rt._data(this),
					n = i[t + "queue"],
					r = i[t + "queueHooks"],
					o = rt.timers,
					a = n ? n.length : 0;
				for (i.finish = !0, rt.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
				for (e = 0; a > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
				delete i.finish
			})
		}
	}), rt.each(["toggle", "show", "hide"], function(t, e) {
		var i = rt.fn[e];
		rt.fn[e] = function(t, n, r) {
			return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(E(e, !0), t, n, r)
		}
	}), rt.each({
		slideDown: E("show"),
		slideUp: E("hide"),
		slideToggle: E("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(t, e) {
		rt.fn[t] = function(t, i, n) {
			return this.animate(e, t, i, n)
		}
	}), rt.timers = [], rt.fx.tick = function() {
		var t, e = rt.timers,
			i = 0;
		for (pe = rt.now(); i < e.length; i++) t = e[i], t() || e[i] !== t || e.splice(i--, 1);
		e.length || rt.fx.stop(), pe = void 0
	}, rt.fx.timer = function(t) {
		rt.timers.push(t), t() ? rt.fx.start() : rt.timers.pop()
	}, rt.fx.interval = 13, rt.fx.start = function() {
		fe || (fe = setInterval(rt.fx.tick, rt.fx.interval))
	}, rt.fx.stop = function() {
		clearInterval(fe), fe = null
	}, rt.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, rt.fn.delay = function(t, e) {
		return t = rt.fx ? rt.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
			var n = setTimeout(e, t);
			i.stop = function() {
				clearTimeout(n)
			}
		})
	}, function() {
		var t, e, i, n, r;
		e = ft.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = e.getElementsByTagName("a")[0], i = ft.createElement("select"), r = i.appendChild(ft.createElement("option")), t = e.getElementsByTagName("input")[0], n.style.cssText = "top:1px", it.getSetAttribute = "t" !== e.className, it.style = /top/.test(n.getAttribute("style")), it.hrefNormalized = "/a" === n.getAttribute("href"), it.checkOn = !! t.value, it.optSelected = r.selected, it.enctype = !! ft.createElement("form").enctype, i.disabled = !0, it.optDisabled = !r.disabled, t = ft.createElement("input"), t.setAttribute("value", ""), it.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), it.radioValue = "t" === t.value
	}();
	var xe = /\r/g;
	rt.fn.extend({
		val: function(t) {
			var e, i, n, r = this[0];
			return arguments.length ? (n = rt.isFunction(t), this.each(function(i) {
				var r;
				1 === this.nodeType && (r = n ? t.call(this, i, rt(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : rt.isArray(r) && (r = rt.map(r, function(t) {
					return null == t ? "" : t + ""
				})), e = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
			})) : r ? (e = rt.valHooks[r.type] || rt.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : (i = r.value, "string" == typeof i ? i.replace(xe, "") : null == i ? "" : i)) : void 0
		}
	}), rt.extend({
		valHooks: {
			option: {
				get: function(t) {
					var e = rt.find.attr(t, "value");
					return null != e ? e : rt.trim(rt.text(t))
				}
			},
			select: {
				get: function(t) {
					for (var e, i, n = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, a = o ? null : [], s = o ? r + 1 : n.length, l = 0 > r ? s : o ? r : 0; s > l; l++) if (i = n[l], !(!i.selected && l !== r || (it.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && rt.nodeName(i.parentNode, "optgroup"))) {
						if (e = rt(i).val(), o) return e;
						a.push(e)
					}
					return a
				},
				set: function(t, e) {
					for (var i, n, r = t.options, o = rt.makeArray(e), a = r.length; a--;) if (n = r[a], rt.inArray(rt.valHooks.option.get(n), o) >= 0) try {
						n.selected = i = !0
					} catch (s) {
						n.scrollHeight
					} else n.selected = !1;
					return i || (t.selectedIndex = -1), r
				}
			}
		}
	}), rt.each(["radio", "checkbox"], function() {
		rt.valHooks[this] = {
			set: function(t, e) {
				return rt.isArray(e) ? t.checked = rt.inArray(rt(t).val(), e) >= 0 : void 0
			}
		}, it.checkOn || (rt.valHooks[this].get = function(t) {
			return null === t.getAttribute("value") ? "on" : t.value
		})
	});
	var be, we, Me = rt.expr.attrHandle,
		Se = /^(?:checked|selected)$/i,
		Le = it.getSetAttribute,
		Ce = it.input;
	rt.fn.extend({
		attr: function(t, e) {
			return At(this, rt.attr, t, e, arguments.length > 1)
		},
		removeAttr: function(t) {
			return this.each(function() {
				rt.removeAttr(this, t)
			})
		}
	}), rt.extend({
		attr: function(t, e, i) {
			var n, r, o = t.nodeType;
			return t && 3 !== o && 8 !== o && 2 !== o ? typeof t.getAttribute === Mt ? rt.prop(t, e, i) : (1 === o && rt.isXMLDoc(t) || (e = e.toLowerCase(), n = rt.attrHooks[e] || (rt.expr.match.bool.test(e) ? we : be)), void 0 === i ? n && "get" in n && null !== (r = n.get(t, e)) ? r : (r = rt.find.attr(t, e), null == r ? void 0 : r) : null !== i ? n && "set" in n && void 0 !== (r = n.set(t, i, e)) ? r : (t.setAttribute(e, i + ""), i) : void rt.removeAttr(t, e)) : void 0
		},
		removeAttr: function(t, e) {
			var i, n, r = 0,
				o = e && e.match(_t);
			if (o && 1 === t.nodeType) for (; i = o[r++];) n = rt.propFix[i] || i, rt.expr.match.bool.test(i) ? Ce && Le || !Se.test(i) ? t[n] = !1 : t[rt.camelCase("default-" + i)] = t[n] = !1 : rt.attr(t, i, ""), t.removeAttribute(Le ? i : n)
		},
		attrHooks: {
			type: {
				set: function(t, e) {
					if (!it.radioValue && "radio" === e && rt.nodeName(t, "input")) {
						var i = t.value;
						return t.setAttribute("type", e), i && (t.value = i), e
					}
				}
			}
		}
	}), we = {
		set: function(t, e, i) {
			return e === !1 ? rt.removeAttr(t, i) : Ce && Le || !Se.test(i) ? t.setAttribute(!Le && rt.propFix[i] || i, i) : t[rt.camelCase("default-" + i)] = t[i] = !0, i
		}
	}, rt.each(rt.expr.match.bool.source.match(/\w+/g), function(t, e) {
		var i = Me[e] || rt.find.attr;
		Me[e] = Ce && Le || !Se.test(e) ?
		function(t, e, n) {
			var r, o;
			return n || (o = Me[e], Me[e] = r, r = null != i(t, e, n) ? e.toLowerCase() : null, Me[e] = o), r
		} : function(t, e, i) {
			return i ? void 0 : t[rt.camelCase("default-" + e)] ? e.toLowerCase() : null
		}
	}), Ce && Le || (rt.attrHooks.value = {
		set: function(t, e, i) {
			return rt.nodeName(t, "input") ? void(t.defaultValue = e) : be && be.set(t, e, i)
		}
	}), Le || (be = {
		set: function(t, e, i) {
			var n = t.getAttributeNode(i);
			return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", "value" === i || e === t.getAttribute(i) ? e : void 0
		}
	}, Me.id = Me.name = Me.coords = function(t, e, i) {
		var n;
		return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
	}, rt.valHooks.button = {
		get: function(t, e) {
			var i = t.getAttributeNode(e);
			return i && i.specified ? i.value : void 0
		},
		set: be.set
	}, rt.attrHooks.contenteditable = {
		set: function(t, e, i) {
			be.set(t, "" === e ? !1 : e, i)
		}
	}, rt.each(["width", "height"], function(t, e) {
		rt.attrHooks[e] = {
			set: function(t, i) {
				return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
			}
		}
	})), it.style || (rt.attrHooks.style = {
		get: function(t) {
			return t.style.cssText || void 0
		},
		set: function(t, e) {
			return t.style.cssText = e + ""
		}
	});
	var Te = /^(?:input|select|textarea|button|object)$/i,
		Pe = /^(?:a|area)$/i;
	rt.fn.extend({
		prop: function(t, e) {
			return At(this, rt.prop, t, e, arguments.length > 1)
		},
		removeProp: function(t) {
			return t = rt.propFix[t] || t, this.each(function() {
				try {
					this[t] = void 0, delete this[t]
				} catch (e) {}
			})
		}
	}), rt.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(t, e, i) {
			var n, r, o, a = t.nodeType;
			return t && 3 !== a && 8 !== a && 2 !== a ? (o = 1 !== a || !rt.isXMLDoc(t), o && (e = rt.propFix[e] || e, r = rt.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]) : void 0
		},
		propHooks: {
			tabIndex: {
				get: function(t) {
					var e = rt.find.attr(t, "tabindex");
					return e ? parseInt(e, 10) : Te.test(t.nodeName) || Pe.test(t.nodeName) && t.href ? 0 : -1
				}
			}
		}
	}), it.hrefNormalized || rt.each(["href", "src"], function(t, e) {
		rt.propHooks[e] = {
			get: function(t) {
				return t.getAttribute(e, 4)
			}
		}
	}), it.optSelected || (rt.propHooks.selected = {
		get: function(t) {
			var e = t.parentNode;
			return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
		}
	}), rt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		rt.propFix[this.toLowerCase()] = this
	}), it.enctype || (rt.propFix.enctype = "encoding");
	var Ae = /[\t\r\n\f]/g;
	rt.fn.extend({
		addClass: function(t) {
			var e, i, n, r, o, a, s = 0,
				l = this.length,
				u = "string" == typeof t && t;
			if (rt.isFunction(t)) return this.each(function(e) {
				rt(this).addClass(t.call(this, e, this.className))
			});
			if (u) for (e = (t || "").match(_t) || []; l > s; s++) if (i = this[s], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ae, " ") : " ")) {
				for (o = 0; r = e[o++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
				a = rt.trim(n), i.className !== a && (i.className = a)
			}
			return this
		},
		removeClass: function(t) {
			var e, i, n, r, o, a, s = 0,
				l = this.length,
				u = 0 === arguments.length || "string" == typeof t && t;
			if (rt.isFunction(t)) return this.each(function(e) {
				rt(this).removeClass(t.call(this, e, this.className))
			});
			if (u) for (e = (t || "").match(_t) || []; l > s; s++) if (i = this[s], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ae, " ") : "")) {
				for (o = 0; r = e[o++];) for (; n.indexOf(" " + r + " ") >= 0;) n = n.replace(" " + r + " ", " ");
				a = t ? rt.trim(n) : "", i.className !== a && (i.className = a)
			}
			return this
		},
		toggleClass: function(t, e) {
			var i = typeof t;
			return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(rt.isFunction(t) ?
			function(i) {
				rt(this).toggleClass(t.call(this, i, this.className, e), e)
			} : function() {
				if ("string" === i) for (var e, n = 0, r = rt(this), o = t.match(_t) || []; e = o[n++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
				else(i === Mt || "boolean" === i) && (this.className && rt._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : rt._data(this, "__className__") || "")
			})
		},
		hasClass: function(t) {
			for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++) if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Ae, " ").indexOf(e) >= 0) return !0;
			return !1
		}
	}), rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
		rt.fn[e] = function(t, i) {
			return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
		}
	}), rt.fn.extend({
		hover: function(t, e) {
			return this.mouseenter(t).mouseleave(e || t)
		},
		bind: function(t, e, i) {
			return this.on(t, null, e, i)
		},
		unbind: function(t, e) {
			return this.off(t, null, e)
		},
		delegate: function(t, e, i, n) {
			return this.on(e, t, i, n)
		},
		undelegate: function(t, e, i) {
			return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
		}
	});
	var De = rt.now(),
		ze = /\?/,
		Ie = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	rt.parseJSON = function(e) {
		if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
		var i, n = null,
			r = rt.trim(e + "");
		return r && !rt.trim(r.replace(Ie, function(t, e, r, o) {
			return i && e && (n = 0), 0 === n ? t : (i = r || e, n += !o - !r, "")
		})) ? Function("return " + r)() : rt.error("Invalid JSON: " + e)
	}, rt.parseXML = function(e) {
		var i, n;
		if (!e || "string" != typeof e) return null;
		try {
			t.DOMParser ? (n = new DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e))
		} catch (r) {
			i = void 0
		}
		return i && i.documentElement && !i.getElementsByTagName("parsererror").length || rt.error("Invalid XML: " + e), i
	};
	var ke, Ee, Oe = /#.*$/,
		Ne = /([?&])_=[^&]*/,
		Re = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Be = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Ve = /^(?:GET|HEAD)$/,
		qe = /^\/\//,
		Ze = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		Ge = {},
		He = {},
		Fe = "*/".concat("*");
	try {
		Ee = location.href
	} catch (We) {
		Ee = ft.createElement("a"), Ee.href = "", Ee = Ee.href
	}
	ke = Ze.exec(Ee.toLowerCase()) || [], rt.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Ee,
			type: "GET",
			isLocal: Be.test(ke[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Fe,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": rt.parseJSON,
				"text xml": rt.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(t, e) {
			return e ? Z(Z(t, rt.ajaxSettings), e) : Z(rt.ajaxSettings, t)
		},
		ajaxPrefilter: V(Ge),
		ajaxTransport: V(He),
		ajax: function(t, e) {
			function i(t, e, i, n) {
				var r, c, v, y, x, w = e;
				2 !== _ && (_ = 2, s && clearTimeout(s), u = void 0, a = n || "", b.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, i && (y = G(h, b, i)), y = H(h, y, b, r), r ? (h.ifModified && (x = b.getResponseHeader("Last-Modified"), x && (rt.lastModified[o] = x), x = b.getResponseHeader("etag"), x && (rt.etag[o] = x)), 204 === t || "HEAD" === h.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = y.state, c = y.data, v = y.error, r = !v)) : (v = w, (t || !w) && (w = "error", 0 > t && (t = 0))), b.status = t, b.statusText = (e || w) + "", r ? f.resolveWith(d, [c, w, b]) : f.rejectWith(d, [b, w, v]), b.statusCode(g), g = void 0, l && p.trigger(r ? "ajaxSuccess" : "ajaxError", [b, h, r ? c : v]), m.fireWith(d, [b, w]), l && (p.trigger("ajaxComplete", [b, h]), --rt.active || rt.event.trigger("ajaxStop")))
			}
			"object" == typeof t && (e = t, t = void 0), e = e || {};
			var n, r, o, a, s, l, u, c, h = rt.ajaxSetup({}, e),
				d = h.context || h,
				p = h.context && (d.nodeType || d.jquery) ? rt(d) : rt.event,
				f = rt.Deferred(),
				m = rt.Callbacks("once memory"),
				g = h.statusCode || {},
				v = {},
				y = {},
				_ = 0,
				x = "canceled",
				b = {
					readyState: 0,
					getResponseHeader: function(t) {
						var e;
						if (2 === _) {
							if (!c) for (c = {}; e = Re.exec(a);) c[e[1].toLowerCase()] = e[2];
							e = c[t.toLowerCase()]
						}
						return null == e ? null : e
					},
					getAllResponseHeaders: function() {
						return 2 === _ ? a : null
					},
					setRequestHeader: function(t, e) {
						var i = t.toLowerCase();
						return _ || (t = y[i] = y[i] || t, v[t] = e), this
					},
					overrideMimeType: function(t) {
						return _ || (h.mimeType = t), this
					},
					statusCode: function(t) {
						var e;
						if (t) if (2 > _) for (e in t) g[e] = [g[e], t[e]];
						else b.always(t[b.status]);
						return this
					},
					abort: function(t) {
						var e = t || x;
						return u && u.abort(e), i(0, e), this
					}
				};
			if (f.promise(b).complete = m.add, b.success = b.done, b.error = b.fail, h.url = ((t || h.url || Ee) + "").replace(Oe, "").replace(qe, ke[1] + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = rt.trim(h.dataType || "*").toLowerCase().match(_t) || [""], null == h.crossDomain && (n = Ze.exec(h.url.toLowerCase()), h.crossDomain = !(!n || n[1] === ke[1] && n[2] === ke[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (ke[3] || ("http:" === ke[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = rt.param(h.data, h.traditional)), q(Ge, h, e, b), 2 === _) return b;
			l = rt.event && h.global, l && 0 === rt.active++ && rt.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ve.test(h.type), o = h.url, h.hasContent || (h.data && (o = h.url += (ze.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = Ne.test(o) ? o.replace(Ne, "$1_=" + De++) : o + (ze.test(o) ? "&" : "?") + "_=" + De++)), h.ifModified && (rt.lastModified[o] && b.setRequestHeader("If-Modified-Since", rt.lastModified[o]), rt.etag[o] && b.setRequestHeader("If-None-Match", rt.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || e.contentType) && b.setRequestHeader("Content-Type", h.contentType), b.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Fe + "; q=0.01" : "") : h.accepts["*"]);
			for (r in h.headers) b.setRequestHeader(r, h.headers[r]);
			if (h.beforeSend && (h.beforeSend.call(d, b, h) === !1 || 2 === _)) return b.abort();
			x = "abort";
			for (r in {
				success: 1,
				error: 1,
				complete: 1
			}) b[r](h[r]);
			if (u = q(He, h, e, b)) {
				b.readyState = 1, l && p.trigger("ajaxSend", [b, h]), h.async && h.timeout > 0 && (s = setTimeout(function() {
					b.abort("timeout")
				}, h.timeout));
				try {
					_ = 1, u.send(v, i)
				} catch (w) {
					if (!(2 > _)) throw w;
					i(-1, w)
				}
			} else i(-1, "No Transport");
			return b
		},
		getJSON: function(t, e, i) {
			return rt.get(t, e, i, "json")
		},
		getScript: function(t, e) {
			return rt.get(t, void 0, e, "script")
		}
	}), rt.each(["get", "post"], function(t, e) {
		rt[e] = function(t, i, n, r) {
			return rt.isFunction(i) && (r = r || n, n = i, i = void 0), rt.ajax({
				url: t,
				type: e,
				dataType: r,
				data: i,
				success: n
			})
		}
	}), rt._evalUrl = function(t) {
		return rt.ajax({
			url: t,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, rt.fn.extend({
		wrapAll: function(t) {
			if (rt.isFunction(t)) return this.each(function(e) {
				rt(this).wrapAll(t.call(this, e))
			});
			if (this[0]) {
				var e = rt(t, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
					for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
					return t
				}).append(this)
			}
			return this
		},
		wrapInner: function(t) {
			return this.each(rt.isFunction(t) ?
			function(e) {
				rt(this).wrapInner(t.call(this, e))
			} : function() {
				var e = rt(this),
					i = e.contents();
				i.length ? i.wrapAll(t) : e.append(t)
			})
		},
		wrap: function(t) {
			var e = rt.isFunction(t);
			return this.each(function(i) {
				rt(this).wrapAll(e ? t.call(this, i) : t)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes)
			}).end()
		}
	}), rt.expr.filters.hidden = function(t) {
		return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !it.reliableHiddenOffsets() && "none" === (t.style && t.style.display || rt.css(t, "display"))
	}, rt.expr.filters.visible = function(t) {
		return !rt.expr.filters.hidden(t)
	};
	var Ue = /%20/g,
		je = /\[\]$/,
		Xe = /\r?\n/g,
		Ye = /^(?:submit|button|image|reset|file)$/i,
		Je = /^(?:input|select|textarea|keygen)/i;
	rt.param = function(t, e) {
		var i, n = [],
			r = function(t, e) {
				e = rt.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
			};
		if (void 0 === e && (e = rt.ajaxSettings && rt.ajaxSettings.traditional), rt.isArray(t) || t.jquery && !rt.isPlainObject(t)) rt.each(t, function() {
			r(this.name, this.value)
		});
		else for (i in t) F(i, t[i], e, r);
		return n.join("&").replace(Ue, "+")
	}, rt.fn.extend({
		serialize: function() {
			return rt.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var t = rt.prop(this, "elements");
				return t ? rt.makeArray(t) : this
			}).filter(function() {
				var t = this.type;
				return this.name && !rt(this).is(":disabled") && Je.test(this.nodeName) && !Ye.test(t) && (this.checked || !Dt.test(t))
			}).map(function(t, e) {
				var i = rt(this).val();
				return null == i ? null : rt.isArray(i) ? rt.map(i, function(t) {
					return {
						name: e.name,
						value: t.replace(Xe, "\r\n")
					}
				}) : {
					name: e.name,
					value: i.replace(Xe, "\r\n")
				}
			}).get()
		}
	}), rt.ajaxSettings.xhr = void 0 !== t.ActiveXObject ?
	function() {
		return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && W() || U()
	} : W;
	var Ke = 0,
		Qe = {},
		$e = rt.ajaxSettings.xhr();
	t.attachEvent && t.attachEvent("onunload", function() {
		for (var t in Qe) Qe[t](void 0, !0)
	}), it.cors = !! $e && "withCredentials" in $e, $e = it.ajax = !! $e, $e && rt.ajaxTransport(function(t) {
		if (!t.crossDomain || it.cors) {
			var e;
			return {
				send: function(i, n) {
					var r, o = t.xhr(),
						a = ++Ke;
					if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (r in t.xhrFields) o[r] = t.xhrFields[r];
					t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
					for (r in i) void 0 !== i[r] && o.setRequestHeader(r, i[r] + "");
					o.send(t.hasContent && t.data || null), e = function(i, r) {
						var s, l, u;
						if (e && (r || 4 === o.readyState)) if (delete Qe[a], e = void 0, o.onreadystatechange = rt.noop, r) 4 !== o.readyState && o.abort();
						else {
							u = {}, s = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
							try {
								l = o.statusText
							} catch (c) {
								l = ""
							}
							s || !t.isLocal || t.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
						}
						u && n(s, l, u, o.getAllResponseHeaders())
					}, t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = Qe[a] = e : e()
				},
				abort: function() {
					e && e(void 0, !0)
				}
			}
		}
	}), rt.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(t) {
				return rt.globalEval(t), t
			}
		}
	}), rt.ajaxPrefilter("script", function(t) {
		void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
	}), rt.ajaxTransport("script", function(t) {
		if (t.crossDomain) {
			var e, i = ft.head || rt("head")[0] || ft.documentElement;
			return {
				send: function(n, r) {
					e = ft.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, i) {
						(i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || r(200, "success"))
					}, i.insertBefore(e, i.firstChild)
				},
				abort: function() {
					e && e.onload(void 0, !0)
				}
			}
		}
	});
	var ti = [],
		ei = /(=)\?(?=&|$)|\?\?/;
	rt.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var t = ti.pop() || rt.expando + "_" + De++;
			return this[t] = !0, t
		}
	}), rt.ajaxPrefilter("json jsonp", function(e, i, n) {
		var r, o, a, s = e.jsonp !== !1 && (ei.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ei.test(e.data) && "data");
		return s || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = rt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(ei, "$1" + r) : e.jsonp !== !1 && (e.url += (ze.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
			return a || rt.error(r + " was not called"), a[0]
		}, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
			a = arguments
		}, n.always(function() {
			t[r] = o, e[r] && (e.jsonpCallback = i.jsonpCallback, ti.push(r)), a && rt.isFunction(o) && o(a[0]), a = o = void 0
		}), "script") : void 0
	}), rt.parseHTML = function(t, e, i) {
		if (!t || "string" != typeof t) return null;
		"boolean" == typeof e && (i = e, e = !1), e = e || ft;
		var n = ht.exec(t),
			r = !i && [];
		return n ? [e.createElement(n[1])] : (n = rt.buildFragment([t], e, r), r && r.length && rt(r).remove(), rt.merge([], n.childNodes))
	};
	var ii = rt.fn.load;
	rt.fn.load = function(t, e, i) {
		if ("string" != typeof t && ii) return ii.apply(this, arguments);
		var n, r, o, a = this,
			s = t.indexOf(" ");
		return s >= 0 && (n = rt.trim(t.slice(s, t.length)), t = t.slice(0, s)), rt.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), a.length > 0 && rt.ajax({
			url: t,
			type: o,
			dataType: "html",
			data: e
		}).done(function(t) {
			r = arguments, a.html(n ? rt("<div>").append(rt.parseHTML(t)).find(n) : t)
		}).complete(i &&
		function(t, e) {
			a.each(i, r || [t.responseText, e, t])
		}), this
	}, rt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
		rt.fn[e] = function(t) {
			return this.on(e, t)
		}
	}), rt.expr.filters.animated = function(t) {
		return rt.grep(rt.timers, function(e) {
			return t === e.elem
		}).length
	};
	var ni = t.document.documentElement;
	rt.offset = {
		setOffset: function(t, e, i) {
			var n, r, o, a, s, l, u, c = rt.css(t, "position"),
				h = rt(t),
				d = {};
			"static" === c && (t.style.position = "relative"), s = h.offset(), o = rt.css(t, "top"), l = rt.css(t, "left"), u = ("absolute" === c || "fixed" === c) && rt.inArray("auto", [o, l]) > -1, u ? (n = h.position(), a = n.top, r = n.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), rt.isFunction(e) && (e = e.call(t, i, s)), null != e.top && (d.top = e.top - s.top + a), null != e.left && (d.left = e.left - s.left + r), "using" in e ? e.using.call(t, d) : h.css(d)
		}
	}, rt.fn.extend({
		offset: function(t) {
			if (arguments.length) return void 0 === t ? this : this.each(function(e) {
				rt.offset.setOffset(this, t, e)
			});
			var e, i, n = {
				top: 0,
				left: 0
			},
				r = this[0],
				o = r && r.ownerDocument;
			return o ? (e = o.documentElement, rt.contains(e, r) ? (typeof r.getBoundingClientRect !== Mt && (n = r.getBoundingClientRect()), i = j(o), {
				top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
				left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
			}) : n) : void 0
		},
		position: function() {
			if (this[0]) {
				var t, e, i = {
					top: 0,
					left: 0
				},
					n = this[0];
				return "fixed" === rt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), rt.nodeName(t[0], "html") || (i = t.offset()), i.top += rt.css(t[0], "borderTopWidth", !0), i.left += rt.css(t[0], "borderLeftWidth", !0)), {
					top: e.top - i.top - rt.css(n, "marginTop", !0),
					left: e.left - i.left - rt.css(n, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var t = this.offsetParent || ni; t && !rt.nodeName(t, "html") && "static" === rt.css(t, "position");) t = t.offsetParent;
				return t || ni
			})
		}
	}), rt.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(t, e) {
		var i = /Y/.test(e);
		rt.fn[t] = function(n) {
			return At(this, function(t, n, r) {
				var o = j(t);
				return void 0 === r ? o ? e in o ? o[e] : o.document.documentElement[n] : t[n] : void(o ? o.scrollTo(i ? rt(o).scrollLeft() : r, i ? r : rt(o).scrollTop()) : t[n] = r)
			}, t, n, arguments.length, null)
		}
	}), rt.each(["top", "left"], function(t, e) {
		rt.cssHooks[e] = C(it.pixelPosition, function(t, i) {
			return i ? (i = ee(t, e), ne.test(i) ? rt(t).position()[e] + "px" : i) : void 0
		})
	}), rt.each({
		Height: "height",
		Width: "width"
	}, function(t, e) {
		rt.each({
			padding: "inner" + t,
			content: e,
			"": "outer" + t
		}, function(i, n) {
			rt.fn[n] = function(n, r) {
				var o = arguments.length && (i || "boolean" != typeof n),
					a = i || (n === !0 || r === !0 ? "margin" : "border");
				return At(this, function(e, i, n) {
					var r;
					return rt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === n ? rt.css(e, i, a) : rt.style(e, i, n, a)
				}, e, o ? n : void 0, o, null)
			}
		})
	}), rt.fn.size = function() {
		return this.length
	}, rt.fn.andSelf = rt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return rt
	});
	var ri = t.jQuery,
		oi = t.$;
	return rt.noConflict = function(e) {
		return t.$ === rt && (t.$ = oi), e && t.jQuery === rt && (t.jQuery = ri), rt
	}, typeof e === Mt && (t.jQuery = t.$ = rt), rt
}), !function(t, e, i) {
	var n = t.L,
		r = {};
	r.version = "0.7.7", "object" == typeof module && "object" == typeof module.exports ? module.exports = r : "function" == typeof define && define.amd && define(r), r.noConflict = function() {
		return t.L = n, this
	}, t.L = r, r.Util = {
		extend: function(t) {
			var e, i, n, r, o = Array.prototype.slice.call(arguments, 1);
			for (i = 0, n = o.length; n > i; i++) {
				r = o[i] || {};
				for (e in r) r.hasOwnProperty(e) && (t[e] = r[e])
			}
			return t
		},
		bind: function(t, e) {
			var i = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null;
			return function() {
				return t.apply(e, i || arguments)
			}
		},
		stamp: function() {
			var t = 0,
				e = "_leaflet_id";
			return function(i) {
				return i[e] = i[e] || ++t, i[e]
			}
		}(),
		invokeEach: function(t, e, i) {
			var n, r;
			if ("object" == typeof t) {
				r = Array.prototype.slice.call(arguments, 3);
				for (n in t) e.apply(i, [n, t[n]].concat(r));
				return !0
			}
			return !1
		},
		limitExecByInterval: function(t, e, i) {
			var n, r;
			return function o() {
				var a = arguments;
				return n ? void(r = !0) : (n = !0, setTimeout(function() {
					n = !1, r && (o.apply(i, a), r = !1)
				}, e), void t.apply(i, a))
			}
		},
		falseFn: function() {
			return !1
		},
		formatNum: function(t, e) {
			var i = Math.pow(10, e || 5);
			return Math.round(t * i) / i
		},
		trim: function(t) {
			return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
		},
		splitWords: function(t) {
			return r.Util.trim(t).split(/\s+/)
		},
		setOptions: function(t, e) {
			return t.options = r.extend({}, t.options, e), t.options
		},
		getParamString: function(t, e, i) {
			var n = [];
			for (var r in t) n.push(encodeURIComponent(i ? r.toUpperCase() : r) + "=" + encodeURIComponent(t[r]));
			return (e && -1 !== e.indexOf("?") ? "&" : "?") + n.join("&")
		},
		template: function(t, e) {
			return t.replace(/\{ *([\w_]+) *\}/g, function(t, n) {
				var r = e[n];
				if (r === i) throw new Error("No value provided for variable " + t);
				return "function" == typeof r && (r = r(e)), r
			})
		},
		isArray: Array.isArray ||
		function(t) {
			return "[object Array]" === Object.prototype.toString.call(t)
		},
		emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
	}, function() {
		function e(e) {
			var i, n, r = ["webkit", "moz", "o", "ms"];
			for (i = 0; i < r.length && !n; i++) n = t[r[i] + e];
			return n
		}
		function i(e) {
			var i = +new Date,
				r = Math.max(0, 16 - (i - n));
			return n = i + r, t.setTimeout(e, r)
		}
		var n = 0,
			o = t.requestAnimationFrame || e("RequestAnimationFrame") || i,
			a = t.cancelAnimationFrame || e("CancelAnimationFrame") || e("CancelRequestAnimationFrame") ||
		function(e) {
			t.clearTimeout(e)
		};
		r.Util.requestAnimFrame = function(e, n, a, s) {
			return e = r.bind(e, n), a && o === i ? void e() : o.call(t, e, s)
		}, r.Util.cancelAnimFrame = function(e) {
			e && a.call(t, e)
		}
	}(), r.extend = r.Util.extend, r.bind = r.Util.bind, r.stamp = r.Util.stamp, r.setOptions = r.Util.setOptions, r.Class = function() {}, r.Class.extend = function(t) {
		var e = function() {
				this.initialize && this.initialize.apply(this, arguments), this._initHooks && this.callInitHooks()
			},
			i = function() {};
		i.prototype = this.prototype;
		var n = new i;
		n.constructor = e, e.prototype = n;
		for (var o in this) this.hasOwnProperty(o) && "prototype" !== o && (e[o] = this[o]);
		t.statics && (r.extend(e, t.statics), delete t.statics), t.includes && (r.Util.extend.apply(null, [n].concat(t.includes)), delete t.includes), t.options && n.options && (t.options = r.extend({}, n.options, t.options)), r.extend(n, t), n._initHooks = [];
		var a = this;
		return e.__super__ = a.prototype, n.callInitHooks = function() {
			if (!this._initHooksCalled) {
				a.prototype.callInitHooks && a.prototype.callInitHooks.call(this), this._initHooksCalled = !0;
				for (var t = 0, e = n._initHooks.length; e > t; t++) n._initHooks[t].call(this)
			}
		}, e
	}, r.Class.include = function(t) {
		r.extend(this.prototype, t)
	}, r.Class.mergeOptions = function(t) {
		r.extend(this.prototype.options, t)
	}, r.Class.addInitHook = function(t) {
		var e = Array.prototype.slice.call(arguments, 1),
			i = "function" == typeof t ? t : function() {
				this[t].apply(this, e)
			};
		this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i)
	};
	var o = "_leaflet_events";
	r.Mixin = {}, r.Mixin.Events = {
		addEventListener: function(t, e, i) {
			if (r.Util.invokeEach(t, this.addEventListener, this, e, i)) return this;
			var n, a, s, l, u, c, h, d = this[o] = this[o] || {},
				p = i && i !== this && r.stamp(i);
			for (t = r.Util.splitWords(t), n = 0, a = t.length; a > n; n++) s = {
				action: e,
				context: i || this
			}, l = t[n], p ? (u = l + "_idx", c = u + "_len", h = d[u] = d[u] || {}, h[p] || (h[p] = [], d[c] = (d[c] || 0) + 1), h[p].push(s)) : (d[l] = d[l] || [], d[l].push(s));
			return this
		},
		hasEventListeners: function(t) {
			var e = this[o];
			return !!e && (t in e && e[t].length > 0 || t + "_idx" in e && e[t + "_idx_len"] > 0)
		},
		removeEventListener: function(t, e, i) {
			if (!this[o]) return this;
			if (!t) return this.clearAllEventListeners();
			if (r.Util.invokeEach(t, this.removeEventListener, this, e, i)) return this;
			var n, a, s, l, u, c, h, d, p, f = this[o],
				m = i && i !== this && r.stamp(i);
			for (t = r.Util.splitWords(t), n = 0, a = t.length; a > n; n++) if (s = t[n], c = s + "_idx", h = c + "_len", d = f[c], e) {
				if (l = m && d ? d[m] : f[s]) {
					for (u = l.length - 1; u >= 0; u--) l[u].action !== e || i && l[u].context !== i || (p = l.splice(u, 1), p[0].action = r.Util.falseFn);
					i && d && 0 === l.length && (delete d[m], f[h]--)
				}
			} else delete f[s], delete f[c], delete f[h];
			return this
		},
		clearAllEventListeners: function() {
			return delete this[o], this
		},
		fireEvent: function(t, e) {
			if (!this.hasEventListeners(t)) return this;
			var i, n, a, s, l, u = r.Util.extend({}, e, {
				type: t,
				target: this
			}),
				c = this[o];
			if (c[t]) for (i = c[t].slice(), n = 0, a = i.length; a > n; n++) i[n].action.call(i[n].context, u);
			s = c[t + "_idx"];
			for (l in s) if (i = s[l].slice()) for (n = 0, a = i.length; a > n; n++) i[n].action.call(i[n].context, u);
			return this
		},
		addOneTimeEventListener: function(t, e, i) {
			if (r.Util.invokeEach(t, this.addOneTimeEventListener, this, e, i)) return this;
			var n = r.bind(function() {
				this.removeEventListener(t, e, i).removeEventListener(t, n, i)
			}, this);
			return this.addEventListener(t, e, i).addEventListener(t, n, i)
		}
	}, r.Mixin.Events.on = r.Mixin.Events.addEventListener, r.Mixin.Events.off = r.Mixin.Events.removeEventListener, r.Mixin.Events.once = r.Mixin.Events.addOneTimeEventListener, r.Mixin.Events.fire = r.Mixin.Events.fireEvent, function() {
		var n = "ActiveXObject" in t,
			o = n && !e.addEventListener,
			a = navigator.userAgent.toLowerCase(),
			s = -1 !== a.indexOf("webkit"),
			l = -1 !== a.indexOf("chrome"),
			u = -1 !== a.indexOf("phantom"),
			c = -1 !== a.indexOf("android"),
			h = -1 !== a.search("android [23]"),
			d = -1 !== a.indexOf("gecko"),
			p = typeof orientation != i + "",
			f = !t.PointerEvent && t.MSPointerEvent,
			m = t.PointerEvent && t.navigator.pointerEnabled || f,
			g = "devicePixelRatio" in t && t.devicePixelRatio > 1 || "matchMedia" in t && t.matchMedia("(min-resolution:144dpi)") && t.matchMedia("(min-resolution:144dpi)").matches,
			v = e.documentElement,
			y = n && "transition" in v.style,
			_ = "WebKitCSSMatrix" in t && "m11" in new t.WebKitCSSMatrix && !h,
			x = "MozPerspective" in v.style,
			b = "OTransition" in v.style,
			w = !t.L_DISABLE_3D && (y || _ || x || b) && !u,
			M = !t.L_NO_TOUCH && !u && (m || "ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch);
		r.Browser = {
			ie: n,
			ielt9: o,
			webkit: s,
			gecko: d && !s && !t.opera && !n,
			android: c,
			android23: h,
			chrome: l,
			ie3d: y,
			webkit3d: _,
			gecko3d: x,
			opera3d: b,
			any3d: w,
			mobile: p,
			mobileWebkit: p && s,
			mobileWebkit3d: p && _,
			mobileOpera: p && t.opera,
			touch: M,
			msPointer: f,
			pointer: m,
			retina: g
		}
	}(), r.Point = function(t, e, i) {
		this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e
	}, r.Point.prototype = {
		clone: function() {
			return new r.Point(this.x, this.y)
		},
		add: function(t) {
			return this.clone()._add(r.point(t))
		},
		_add: function(t) {
			return this.x += t.x, this.y += t.y, this
		},
		subtract: function(t) {
			return this.clone()._subtract(r.point(t))
		},
		_subtract: function(t) {
			return this.x -= t.x, this.y -= t.y, this
		},
		divideBy: function(t) {
			return this.clone()._divideBy(t)
		},
		_divideBy: function(t) {
			return this.x /= t, this.y /= t, this
		},
		multiplyBy: function(t) {
			return this.clone()._multiplyBy(t)
		},
		_multiplyBy: function(t) {
			return this.x *= t, this.y *= t, this
		},
		round: function() {
			return this.clone()._round()
		},
		_round: function() {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this
		},
		floor: function() {
			return this.clone()._floor()
		},
		_floor: function() {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
		},
		distanceTo: function(t) {
			t = r.point(t);
			var e = t.x - this.x,
				i = t.y - this.y;
			return Math.sqrt(e * e + i * i)
		},
		equals: function(t) {
			return t = r.point(t), t.x === this.x && t.y === this.y
		},
		contains: function(t) {
			return t = r.point(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
		},
		toString: function() {
			return "Point(" + r.Util.formatNum(this.x) + ", " + r.Util.formatNum(this.y) + ")"
		}
	}, r.point = function(t, e, n) {
		return t instanceof r.Point ? t : r.Util.isArray(t) ? new r.Point(t[0], t[1]) : t === i || null === t ? t : new r.Point(t, e, n)
	}, r.Bounds = function(t, e) {
		if (t) for (var i = e ? [t, e] : t, n = 0, r = i.length; r > n; n++) this.extend(i[n])
	}, r.Bounds.prototype = {
		extend: function(t) {
			return t = r.point(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
		},
		getCenter: function(t) {
			return new r.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
		},
		getBottomLeft: function() {
			return new r.Point(this.min.x, this.max.y)
		},
		getTopRight: function() {
			return new r.Point(this.max.x, this.min.y)
		},
		getSize: function() {
			return this.max.subtract(this.min)
		},
		contains: function(t) {
			var e, i;
			return t = "number" == typeof t[0] || t instanceof r.Point ? r.point(t) : r.bounds(t), t instanceof r.Bounds ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
		},
		intersects: function(t) {
			t = r.bounds(t);
			var e = this.min,
				i = this.max,
				n = t.min,
				o = t.max,
				a = o.x >= e.x && n.x <= i.x,
				s = o.y >= e.y && n.y <= i.y;
			return a && s
		},
		isValid: function() {
			return !(!this.min || !this.max)
		}
	}, r.bounds = function(t, e) {
		return !t || t instanceof r.Bounds ? t : new r.Bounds(t, e)
	}, r.Transformation = function(t, e, i, n) {
		this._a = t, this._b = e, this._c = i, this._d = n
	}, r.Transformation.prototype = {
		transform: function(t, e) {
			return this._transform(t.clone(), e)
		},
		_transform: function(t, e) {
			return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t
		},
		untransform: function(t, e) {
			return e = e || 1, new r.Point((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
		}
	}, r.DomUtil = {
		get: function(t) {
			return "string" == typeof t ? e.getElementById(t) : t
		},
		getStyle: function(t, i) {
			var n = t.style[i];
			if (!n && t.currentStyle && (n = t.currentStyle[i]), (!n || "auto" === n) && e.defaultView) {
				var r = e.defaultView.getComputedStyle(t, null);
				n = r ? r[i] : null
			}
			return "auto" === n ? null : n
		},
		getViewportOffset: function(t) {
			var i, n = 0,
				o = 0,
				a = t,
				s = e.body,
				l = e.documentElement;
			do {
				if (n += a.offsetTop || 0, o += a.offsetLeft || 0, n += parseInt(r.DomUtil.getStyle(a, "borderTopWidth"), 10) || 0, o += parseInt(r.DomUtil.getStyle(a, "borderLeftWidth"), 10) || 0, i = r.DomUtil.getStyle(a, "position"), a.offsetParent === s && "absolute" === i) break;
				if ("fixed" === i) {
					n += s.scrollTop || l.scrollTop || 0, o += s.scrollLeft || l.scrollLeft || 0;
					break
				}
				if ("relative" === i && !a.offsetLeft) {
					var u = r.DomUtil.getStyle(a, "width"),
						c = r.DomUtil.getStyle(a, "max-width"),
						h = a.getBoundingClientRect();
					("none" !== u || "none" !== c) && (o += h.left + a.clientLeft), n += h.top + (s.scrollTop || l.scrollTop || 0);
					break
				}
				a = a.offsetParent
			} while (a);
			a = t;
			do {
				if (a === s) break;
				n -= a.scrollTop || 0, o -= a.scrollLeft || 0, a = a.parentNode
			} while (a);
			return new r.Point(o, n)
		},
		documentIsLtr: function() {
			return r.DomUtil._docIsLtrCached || (r.DomUtil._docIsLtrCached = !0, r.DomUtil._docIsLtr = "ltr" === r.DomUtil.getStyle(e.body, "direction")), r.DomUtil._docIsLtr
		},
		create: function(t, i, n) {
			var r = e.createElement(t);
			return r.className = i, n && n.appendChild(r), r
		},
		hasClass: function(t, e) {
			if (t.classList !== i) return t.classList.contains(e);
			var n = r.DomUtil._getClass(t);
			return n.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(n)
		},
		addClass: function(t, e) {
			if (t.classList !== i) for (var n = r.Util.splitWords(e), o = 0, a = n.length; a > o; o++) t.classList.add(n[o]);
			else if (!r.DomUtil.hasClass(t, e)) {
				var s = r.DomUtil._getClass(t);
				r.DomUtil._setClass(t, (s ? s + " " : "") + e)
			}
		},
		removeClass: function(t, e) {
			t.classList !== i ? t.classList.remove(e) : r.DomUtil._setClass(t, r.Util.trim((" " + r.DomUtil._getClass(t) + " ").replace(" " + e + " ", " ")))
		},
		_setClass: function(t, e) {
			t.className.baseVal === i ? t.className = e : t.className.baseVal = e
		},
		_getClass: function(t) {
			return t.className.baseVal === i ? t.className : t.className.baseVal
		},
		setOpacity: function(t, e) {
			if ("opacity" in t.style) t.style.opacity = e;
			else if ("filter" in t.style) {
				var i = !1,
					n = "DXImageTransform.Microsoft.Alpha";
				try {
					i = t.filters.item(n)
				} catch (r) {
					if (1 === e) return
				}
				e = Math.round(100 * e), i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")"
			}
		},
		testProp: function(t) {
			for (var i = e.documentElement.style, n = 0; n < t.length; n++) if (t[n] in i) return t[n];
			return !1
		},
		getTranslateString: function(t) {
			var e = r.Browser.webkit3d,
				i = "translate" + (e ? "3d" : "") + "(",
				n = (e ? ",0" : "") + ")";
			return i + t.x + "px," + t.y + "px" + n
		},
		getScaleString: function(t, e) {
			var i = r.DomUtil.getTranslateString(e.add(e.multiplyBy(-1 * t))),
				n = " scale(" + t + ") ";
			return i + n
		},
		setPosition: function(t, e, i) {
			t._leaflet_pos = e, !i && r.Browser.any3d ? t.style[r.DomUtil.TRANSFORM] = r.DomUtil.getTranslateString(e) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
		},
		getPosition: function(t) {
			return t._leaflet_pos
		}
	}, r.DomUtil.TRANSFORM = r.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]), r.DomUtil.TRANSITION = r.DomUtil.testProp(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), r.DomUtil.TRANSITION_END = "webkitTransition" === r.DomUtil.TRANSITION || "OTransition" === r.DomUtil.TRANSITION ? r.DomUtil.TRANSITION + "End" : "transitionend", function() {
		if ("onselectstart" in e) r.extend(r.DomUtil, {
			disableTextSelection: function() {
				r.DomEvent.on(t, "selectstart", r.DomEvent.preventDefault)
			},
			enableTextSelection: function() {
				r.DomEvent.off(t, "selectstart", r.DomEvent.preventDefault)
			}
		});
		else {
			var i = r.DomUtil.testProp(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
			r.extend(r.DomUtil, {
				disableTextSelection: function() {
					if (i) {
						var t = e.documentElement.style;
						this._userSelect = t[i], t[i] = "none"
					}
				},
				enableTextSelection: function() {
					i && (e.documentElement.style[i] = this._userSelect, delete this._userSelect)
				}
			})
		}
		r.extend(r.DomUtil, {
			disableImageDrag: function() {
				r.DomEvent.on(t, "dragstart", r.DomEvent.preventDefault)
			},
			enableImageDrag: function() {
				r.DomEvent.off(t, "dragstart", r.DomEvent.preventDefault)
			}
		})
	}(), r.LatLng = function(t, e, n) {
		if (t = parseFloat(t), e = parseFloat(e), isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
		this.lat = t, this.lng = e, n !== i && (this.alt = parseFloat(n))
	}, r.extend(r.LatLng, {
		DEG_TO_RAD: Math.PI / 180,
		RAD_TO_DEG: 180 / Math.PI,
		MAX_MARGIN: 1e-9
	}), r.LatLng.prototype = {
		equals: function(t) {
			if (!t) return !1;
			t = r.latLng(t);
			var e = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
			return e <= r.LatLng.MAX_MARGIN
		},
		toString: function(t) {
			return "LatLng(" + r.Util.formatNum(this.lat, t) + ", " + r.Util.formatNum(this.lng, t) + ")"
		},
		distanceTo: function(t) {
			t = r.latLng(t);
			var e = 6378137,
				i = r.LatLng.DEG_TO_RAD,
				n = (t.lat - this.lat) * i,
				o = (t.lng - this.lng) * i,
				a = this.lat * i,
				s = t.lat * i,
				l = Math.sin(n / 2),
				u = Math.sin(o / 2),
				c = l * l + u * u * Math.cos(a) * Math.cos(s);
			return 2 * e * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c))
		},
		wrap: function(t, e) {
			var i = this.lng;
			return t = t || -180, e = e || 180, i = (i + e) % (e - t) + (t > i || i === e ? e : t), new r.LatLng(this.lat, i)
		}
	}, r.latLng = function(t, e) {
		return t instanceof r.LatLng ? t : r.Util.isArray(t) ? "number" == typeof t[0] || "string" == typeof t[0] ? new r.LatLng(t[0], t[1], t[2]) : null : t === i || null === t ? t : "object" == typeof t && "lat" in t ? new r.LatLng(t.lat, "lng" in t ? t.lng : t.lon) : e === i ? null : new r.LatLng(t, e)
	}, r.LatLngBounds = function(t, e) {
		if (t) for (var i = e ? [t, e] : t, n = 0, r = i.length; r > n; n++) this.extend(i[n])
	}, r.LatLngBounds.prototype = {
		extend: function(t) {
			if (!t) return this;
			var e = r.latLng(t);
			return t = null !== e ? e : r.latLngBounds(t), t instanceof r.LatLng ? this._southWest || this._northEast ? (this._southWest.lat = Math.min(t.lat, this._southWest.lat), this._southWest.lng = Math.min(t.lng, this._southWest.lng), this._northEast.lat = Math.max(t.lat, this._northEast.lat), this._northEast.lng = Math.max(t.lng, this._northEast.lng)) : (this._southWest = new r.LatLng(t.lat, t.lng), this._northEast = new r.LatLng(t.lat, t.lng)) : t instanceof r.LatLngBounds && (this.extend(t._southWest), this.extend(t._northEast)), this
		},
		pad: function(t) {
			var e = this._southWest,
				i = this._northEast,
				n = Math.abs(e.lat - i.lat) * t,
				o = Math.abs(e.lng - i.lng) * t;
			return new r.LatLngBounds(new r.LatLng(e.lat - n, e.lng - o), new r.LatLng(i.lat + n, i.lng + o))
		},
		getCenter: function() {
			return new r.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
		},
		getSouthWest: function() {
			return this._southWest
		},
		getNorthEast: function() {
			return this._northEast
		},
		getNorthWest: function() {
			return new r.LatLng(this.getNorth(), this.getWest())
		},
		getSouthEast: function() {
			return new r.LatLng(this.getSouth(), this.getEast())
		},
		getWest: function() {
			return this._southWest.lng
		},
		getSouth: function() {
			return this._southWest.lat
		},
		getEast: function() {
			return this._northEast.lng
		},
		getNorth: function() {
			return this._northEast.lat
		},
		contains: function(t) {
			t = "number" == typeof t[0] || t instanceof r.LatLng ? r.latLng(t) : r.latLngBounds(t);
			var e, i, n = this._southWest,
				o = this._northEast;
			return t instanceof r.LatLngBounds ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng
		},
		intersects: function(t) {
			t = r.latLngBounds(t);
			var e = this._southWest,
				i = this._northEast,
				n = t.getSouthWest(),
				o = t.getNorthEast(),
				a = o.lat >= e.lat && n.lat <= i.lat,
				s = o.lng >= e.lng && n.lng <= i.lng;
			return a && s
		},
		toBBoxString: function() {
			return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
		},
		equals: function(t) {
			return t ? (t = r.latLngBounds(t), this._southWest.equals(t.getSouthWest()) && this._northEast.equals(t.getNorthEast())) : !1
		},
		isValid: function() {
			return !(!this._southWest || !this._northEast)
		}
	}, r.latLngBounds = function(t, e) {
		return !t || t instanceof r.LatLngBounds ? t : new r.LatLngBounds(t, e)
	}, r.Projection = {}, r.Projection.SphericalMercator = {
		MAX_LATITUDE: 85.0511287798,
		project: function(t) {
			var e = r.LatLng.DEG_TO_RAD,
				i = this.MAX_LATITUDE,
				n = Math.max(Math.min(i, t.lat), -i),
				o = t.lng * e,
				a = n * e;
			return a = Math.log(Math.tan(Math.PI / 4 + a / 2)), new r.Point(o, a)
		},
		unproject: function(t) {
			var e = r.LatLng.RAD_TO_DEG,
				i = t.x * e,
				n = (2 * Math.atan(Math.exp(t.y)) - Math.PI / 2) * e;
			return new r.LatLng(n, i)
		}
	}, r.Projection.LonLat = {
		project: function(t) {
			return new r.Point(t.lng, t.lat)
		},
		unproject: function(t) {
			return new r.LatLng(t.y, t.x)
		}
	}, r.CRS = {
		latLngToPoint: function(t, e) {
			var i = this.projection.project(t),
				n = this.scale(e);
			return this.transformation._transform(i, n)
		},
		pointToLatLng: function(t, e) {
			var i = this.scale(e),
				n = this.transformation.untransform(t, i);
			return this.projection.unproject(n)
		},
		project: function(t) {
			return this.projection.project(t)
		},
		scale: function(t) {
			return 256 * Math.pow(2, t)
		},
		getSize: function(t) {
			var e = this.scale(t);
			return r.point(e, e)
		}
	}, r.CRS.Simple = r.extend({}, r.CRS, {
		projection: r.Projection.LonLat,
		transformation: new r.Transformation(1, 0, -1, 0),
		scale: function(t) {
			return Math.pow(2, t)
		}
	}), r.CRS.EPSG3857 = r.extend({}, r.CRS, {
		code: "EPSG:3857",
		projection: r.Projection.SphericalMercator,
		transformation: new r.Transformation(.5 / Math.PI, .5, -.5 / Math.PI, .5),
		project: function(t) {
			var e = this.projection.project(t),
				i = 6378137;
			return e.multiplyBy(i)
		}
	}), r.CRS.EPSG900913 = r.extend({}, r.CRS.EPSG3857, {
		code: "EPSG:900913"
	}), r.CRS.EPSG4326 = r.extend({}, r.CRS, {
		code: "EPSG:4326",
		projection: r.Projection.LonLat,
		transformation: new r.Transformation(1 / 360, .5, -1 / 360, .5)
	}), r.Map = r.Class.extend({
		includes: r.Mixin.Events,
		options: {
			crs: r.CRS.EPSG3857,
			fadeAnimation: r.DomUtil.TRANSITION && !r.Browser.android23,
			trackResize: !0,
			markerZoomAnimation: r.DomUtil.TRANSITION && r.Browser.any3d
		},
		initialize: function(t, e) {
			e = r.setOptions(this, e), this._initContainer(t), this._initLayout(), this._onResize = r.bind(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.center && e.zoom !== i && this.setView(r.latLng(e.center), e.zoom, {
				reset: !0
			}), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._tileLayersNum = 0, this.callInitHooks(), this._addLayers(e.layers)
		},
		setView: function(t, e) {
			return e = e === i ? this.getZoom() : e, this._resetView(r.latLng(t), this._limitZoom(e)), this
		},
		setZoom: function(t, e) {
			return this._loaded ? this.setView(this.getCenter(), t, {
				zoom: e
			}) : (this._zoom = this._limitZoom(t), this)
		},
		zoomIn: function(t, e) {
			return this.setZoom(this._zoom + (t || 1), e)
		},
		zoomOut: function(t, e) {
			return this.setZoom(this._zoom - (t || 1), e)
		},
		setZoomAround: function(t, e, i) {
			var n = this.getZoomScale(e),
				o = this.getSize().divideBy(2),
				a = t instanceof r.Point ? t : this.latLngToContainerPoint(t),
				s = a.subtract(o).multiplyBy(1 - 1 / n),
				l = this.containerPointToLatLng(o.add(s));
			return this.setView(l, e, {
				zoom: i
			})
		},
		fitBounds: function(t, e) {
			e = e || {}, t = t.getBounds ? t.getBounds() : r.latLngBounds(t);
			var i = r.point(e.paddingTopLeft || e.padding || [0, 0]),
				n = r.point(e.paddingBottomRight || e.padding || [0, 0]),
				o = this.getBoundsZoom(t, !1, i.add(n));
			o = e.maxZoom ? Math.min(e.maxZoom, o) : o;
			var a = n.subtract(i).divideBy(2),
				s = this.project(t.getSouthWest(), o),
				l = this.project(t.getNorthEast(), o),
				u = this.unproject(s.add(l).divideBy(2).add(a), o);
			return this.setView(u, o, e)
		},
		fitWorld: function(t) {
			return this.fitBounds([
				[-90, -180],
				[90, 180]
			], t)
		},
		panTo: function(t, e) {
			return this.setView(t, this._zoom, {
				pan: e
			})
		},
		panBy: function(t) {
			return this.fire("movestart"), this._rawPanBy(r.point(t)), this.fire("move"), this.fire("moveend")
		},
		setMaxBounds: function(t) {
			return t = r.latLngBounds(t), this.options.maxBounds = t, t ? (this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds, this)) : this.off("moveend", this._panInsideMaxBounds, this)
		},
		panInsideBounds: function(t, e) {
			var i = this.getCenter(),
				n = this._limitCenter(i, this._zoom, t);
			return i.equals(n) ? this : this.panTo(n, e)
		},
		addLayer: function(t) {
			var e = r.stamp(t);
			return this._layers[e] ? this : (this._layers[e] = t, !t.options || isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[e] = t, this._updateZoomLevels()), this.options.zoomAnimation && r.TileLayer && t instanceof r.TileLayer && (this._tileLayersNum++, this._tileLayersToLoad++, t.on("load", this._onTileLayerLoad, this)), this._loaded && this._layerAdd(t), this)
		},
		removeLayer: function(t) {
			var e = r.stamp(t);
			return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && this.fire("layerremove", {
				layer: t
			}), this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels()), this.options.zoomAnimation && r.TileLayer && t instanceof r.TileLayer && (this._tileLayersNum--, this._tileLayersToLoad--, t.off("load", this._onTileLayerLoad, this)), this) : this
		},
		hasLayer: function(t) {
			return t ? r.stamp(t) in this._layers : !1
		},
		eachLayer: function(t, e) {
			for (var i in this._layers) t.call(e, this._layers[i]);
			return this
		},
		invalidateSize: function(t) {
			if (!this._loaded) return this;
			t = r.extend({
				animate: !1,
				pan: !0
			}, t === !0 ? {
				animate: !0
			} : t);
			var e = this.getSize();
			this._sizeChanged = !0, this._initialCenter = null;
			var i = this.getSize(),
				n = e.divideBy(2).round(),
				o = i.divideBy(2).round(),
				a = n.subtract(o);
			return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(r.bind(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
				oldSize: e,
				newSize: i
			})) : this
		},
		addHandler: function(t, e) {
			if (!e) return this;
			var i = this[t] = new e(this);
			return this._handlers.push(i), this.options[t] && i.enable(), this
		},
		remove: function() {
			this._loaded && this.fire("unload"), this._initEvents("off");
			try {
				delete this._container._leaflet
			} catch (t) {
				this._container._leaflet = i
			}
			return this._clearPanes(), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this
		},
		getCenter: function() {
			return this._checkIfLoaded(), this._initialCenter && !this._moved() ? this._initialCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
		},
		getZoom: function() {
			return this._zoom
		},
		getBounds: function() {
			var t = this.getPixelBounds(),
				e = this.unproject(t.getBottomLeft()),
				i = this.unproject(t.getTopRight());
			return new r.LatLngBounds(e, i)
		},
		getMinZoom: function() {
			return this.options.minZoom === i ? this._layersMinZoom === i ? 0 : this._layersMinZoom : this.options.minZoom
		},
		getMaxZoom: function() {
			return this.options.maxZoom === i ? this._layersMaxZoom === i ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
		},
		getBoundsZoom: function(t, e, i) {
			t = r.latLngBounds(t);
			var n, o = this.getMinZoom() - (e ? 1 : 0),
				a = this.getMaxZoom(),
				s = this.getSize(),
				l = t.getNorthWest(),
				u = t.getSouthEast(),
				c = !0;
			i = r.point(i || [0, 0]);
			do o++, n = this.project(u, o).subtract(this.project(l, o)).add(i), c = e ? n.x < s.x || n.y < s.y : s.contains(n);
			while (c && a >= o);
			return c && e ? null : e ? o : o - 1
		},
		getSize: function() {
			return (!this._size || this._sizeChanged) && (this._size = new r.Point(this._container.clientWidth, this._container.clientHeight), this._sizeChanged = !1), this._size.clone()
		},
		getPixelBounds: function() {
			var t = this._getTopLeftPoint();
			return new r.Bounds(t, t.add(this.getSize()))
		},
		getPixelOrigin: function() {
			return this._checkIfLoaded(), this._initialTopLeftPoint
		},
		getPanes: function() {
			return this._panes
		},
		getContainer: function() {
			return this._container
		},
		getZoomScale: function(t) {
			var e = this.options.crs;
			return e.scale(t) / e.scale(this._zoom)
		},
		getScaleZoom: function(t) {
			return this._zoom + Math.log(t) / Math.LN2
		},
		project: function(t, e) {
			return e = e === i ? this._zoom : e, this.options.crs.latLngToPoint(r.latLng(t), e)
		},
		unproject: function(t, e) {
			return e = e === i ? this._zoom : e, this.options.crs.pointToLatLng(r.point(t), e)
		},
		layerPointToLatLng: function(t) {
			var e = r.point(t).add(this.getPixelOrigin());
			return this.unproject(e)
		},
		latLngToLayerPoint: function(t) {
			var e = this.project(r.latLng(t))._round();
			return e._subtract(this.getPixelOrigin())
		},
		containerPointToLayerPoint: function(t) {
			return r.point(t).subtract(this._getMapPanePos())
		},
		layerPointToContainerPoint: function(t) {
			return r.point(t).add(this._getMapPanePos())
		},
		containerPointToLatLng: function(t) {
			var e = this.containerPointToLayerPoint(r.point(t));
			return this.layerPointToLatLng(e)
		},
		latLngToContainerPoint: function(t) {
			return this.layerPointToContainerPoint(this.latLngToLayerPoint(r.latLng(t)))
		},
		mouseEventToContainerPoint: function(t) {
			return r.DomEvent.getMousePosition(t, this._container)
		},
		mouseEventToLayerPoint: function(t) {
			return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
		},
		mouseEventToLatLng: function(t) {
			return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
		},
		_initContainer: function(t) {
			var e = this._container = r.DomUtil.get(t);
			if (!e) throw new Error("Map container not found.");
			if (e._leaflet) throw new Error("Map container is already initialized.");
			e._leaflet = !0
		},
		_initLayout: function() {
			var t = this._container;
			r.DomUtil.addClass(t, "leaflet-container" + (r.Browser.touch ? " leaflet-touch" : "") + (r.Browser.retina ? " leaflet-retina" : "") + (r.Browser.ielt9 ? " leaflet-oldie" : "") + (this.options.fadeAnimation ? " leaflet-fade-anim" : ""));
			var e = r.DomUtil.getStyle(t, "position");
			"absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
		},
		_initPanes: function() {
			var t = this._panes = {};
			this._mapPane = t.mapPane = this._createPane("leaflet-map-pane", this._container), this._tilePane = t.tilePane = this._createPane("leaflet-tile-pane", this._mapPane), t.objectsPane = this._createPane("leaflet-objects-pane", this._mapPane), t.shadowPane = this._createPane("leaflet-shadow-pane"), t.overlayPane = this._createPane("leaflet-overlay-pane"), t.markerPane = this._createPane("leaflet-marker-pane"), t.popupPane = this._createPane("leaflet-popup-pane");
			var e = " leaflet-zoom-hide";
			this.options.markerZoomAnimation || (r.DomUtil.addClass(t.markerPane, e), r.DomUtil.addClass(t.shadowPane, e), r.DomUtil.addClass(t.popupPane, e))
		},
		_createPane: function(t, e) {
			return r.DomUtil.create("div", t, e || this._panes.objectsPane)
		},
		_clearPanes: function() {
			this._container.removeChild(this._mapPane)
		},
		_addLayers: function(t) {
			t = t ? r.Util.isArray(t) ? t : [t] : [];
			for (var e = 0, i = t.length; i > e; e++) this.addLayer(t[e])
		},
		_resetView: function(t, e, i, n) {
			var o = this._zoom !== e;
			n || (this.fire("movestart"), o && this.fire("zoomstart")), this._zoom = e, this._initialCenter = t, this._initialTopLeftPoint = this._getNewTopLeftPoint(t), i ? this._initialTopLeftPoint._add(this._getMapPanePos()) : r.DomUtil.setPosition(this._mapPane, new r.Point(0, 0)), this._tileLayersToLoad = this._tileLayersNum;
			var a = !this._loaded;
			this._loaded = !0, this.fire("viewreset", {
				hard: !i
			}), a && (this.fire("load"), this.eachLayer(this._layerAdd, this)), this.fire("move"), (o || n) && this.fire("zoomend"), this.fire("moveend", {
				hard: !i
			})
		},
		_rawPanBy: function(t) {
			r.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(t))
		},
		_getZoomSpan: function() {
			return this.getMaxZoom() - this.getMinZoom()
		},
		_updateZoomLevels: function() {
			var t, e = 1 / 0,
				n = -(1 / 0),
				r = this._getZoomSpan();
			for (t in this._zoomBoundLayers) {
				var o = this._zoomBoundLayers[t];
				isNaN(o.options.minZoom) || (e = Math.min(e, o.options.minZoom)), isNaN(o.options.maxZoom) || (n = Math.max(n, o.options.maxZoom))
			}
			t === i ? this._layersMaxZoom = this._layersMinZoom = i : (this._layersMaxZoom = n, this._layersMinZoom = e), r !== this._getZoomSpan() && this.fire("zoomlevelschange")
		},
		_panInsideMaxBounds: function() {
			this.panInsideBounds(this.options.maxBounds)
		},
		_checkIfLoaded: function() {
			if (!this._loaded) throw new Error("Set map center and zoom first.")
		},
		_initEvents: function(e) {
			if (r.DomEvent) {
				e = e || "on", r.DomEvent[e](this._container, "click", this._onMouseClick, this);
				var i, n, o = ["dblclick", "mousedown", "mouseup", "mouseenter", "mouseleave", "mousemove", "contextmenu"];
				for (i = 0, n = o.length; n > i; i++) r.DomEvent[e](this._container, o[i], this._fireMouseEvent, this);
				this.options.trackResize && r.DomEvent[e](t, "resize", this._onResize, this)
			}
		},
		_onResize: function() {
			r.Util.cancelAnimFrame(this._resizeRequest), this._resizeRequest = r.Util.requestAnimFrame(function() {
				this.invalidateSize({
					debounceMoveend: !0
				})
			}, this, !1, this._container)
		},
		_onMouseClick: function(t) {
			!this._loaded || !t._simulated && (this.dragging && this.dragging.moved() || this.boxZoom && this.boxZoom.moved()) || r.DomEvent._skipped(t) || (this.fire("preclick"), this._fireMouseEvent(t))
		},
		_fireMouseEvent: function(t) {
			if (this._loaded && !r.DomEvent._skipped(t)) {
				var e = t.type;
				if (e = "mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, this.hasEventListeners(e)) {
					"contextmenu" === e && r.DomEvent.preventDefault(t);
					var i = this.mouseEventToContainerPoint(t),
						n = this.containerPointToLayerPoint(i),
						o = this.layerPointToLatLng(n);
					this.fire(e, {
						latlng: o,
						layerPoint: n,
						containerPoint: i,
						originalEvent: t
					})
				}
			}
		},
		_onTileLayerLoad: function() {
			this._tileLayersToLoad--, this._tileLayersNum && !this._tileLayersToLoad && this.fire("tilelayersload")
		},
		_clearHandlers: function() {
			for (var t = 0, e = this._handlers.length; e > t; t++) this._handlers[t].disable()
		},
		whenReady: function(t, e) {
			return this._loaded ? t.call(e || this, this) : this.on("load", t, e), this
		},
		_layerAdd: function(t) {
			t.onAdd(this), this.fire("layeradd", {
				layer: t
			})
		},
		_getMapPanePos: function() {
			return r.DomUtil.getPosition(this._mapPane)
		},
		_moved: function() {
			var t = this._getMapPanePos();
			return t && !t.equals([0, 0])
		},
		_getTopLeftPoint: function() {
			return this.getPixelOrigin().subtract(this._getMapPanePos())
		},
		_getNewTopLeftPoint: function(t, e) {
			var i = this.getSize()._divideBy(2);
			return this.project(t, e)._subtract(i)._round()
		},
		_latLngToNewLayerPoint: function(t, e, i) {
			var n = this._getNewTopLeftPoint(i, e).add(this._getMapPanePos());
			return this.project(t, e)._subtract(n)
		},
		_getCenterLayerPoint: function() {
			return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
		},
		_getCenterOffset: function(t) {
			return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
		},
		_limitCenter: function(t, e, i) {
			if (!i) return t;
			var n = this.project(t, e),
				o = this.getSize().divideBy(2),
				a = new r.Bounds(n.subtract(o), n.add(o)),
				s = this._getBoundsOffset(a, i, e);
			return this.unproject(n.add(s), e)
		},
		_limitOffset: function(t, e) {
			if (!e) return t;
			var i = this.getPixelBounds(),
				n = new r.Bounds(i.min.add(t), i.max.add(t));
			return t.add(this._getBoundsOffset(n, e))
		},
		_getBoundsOffset: function(t, e, i) {
			var n = this.project(e.getNorthWest(), i).subtract(t.min),
				o = this.project(e.getSouthEast(), i).subtract(t.max),
				a = this._rebound(n.x, -o.x),
				s = this._rebound(n.y, -o.y);
			return new r.Point(a, s)
		},
		_rebound: function(t, e) {
			return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
		},
		_limitZoom: function(t) {
			var e = this.getMinZoom(),
				i = this.getMaxZoom();
			return Math.max(e, Math.min(i, t))
		}
	}), r.map = function(t, e) {
		return new r.Map(t, e)
	}, r.Projection.Mercator = {
		MAX_LATITUDE: 85.0840591556,
		R_MINOR: 6356752.314245179,
		R_MAJOR: 6378137,
		project: function(t) {
			var e = r.LatLng.DEG_TO_RAD,
				i = this.MAX_LATITUDE,
				n = Math.max(Math.min(i, t.lat), -i),
				o = this.R_MAJOR,
				a = this.R_MINOR,
				s = t.lng * e * o,
				l = n * e,
				u = a / o,
				c = Math.sqrt(1 - u * u),
				h = c * Math.sin(l);
			h = Math.pow((1 - h) / (1 + h), .5 * c);
			var d = Math.tan(.5 * (.5 * Math.PI - l)) / h;
			return l = -o * Math.log(d), new r.Point(s, l)
		},
		unproject: function(t) {
			for (var e, i = r.LatLng.RAD_TO_DEG, n = this.R_MAJOR, o = this.R_MINOR, a = t.x * i / n, s = o / n, l = Math.sqrt(1 - s * s), u = Math.exp(-t.y / n), c = Math.PI / 2 - 2 * Math.atan(u), h = 15, d = 1e-7, p = h, f = .1; Math.abs(f) > d && --p > 0;) e = l * Math.sin(c), f = Math.PI / 2 - 2 * Math.atan(u * Math.pow((1 - e) / (1 + e), .5 * l)) - c, c += f;
			return new r.LatLng(c * i, a)
		}
	}, r.CRS.EPSG3395 = r.extend({}, r.CRS, {
		code: "EPSG:3395",
		projection: r.Projection.Mercator,
		transformation: function() {
			var t = r.Projection.Mercator,
				e = t.R_MAJOR,
				i = .5 / (Math.PI * e);
			return new r.Transformation(i, .5, -i, .5)
		}()
	}), r.TileLayer = r.Class.extend({
		includes: r.Mixin.Events,
		options: {
			minZoom: 0,
			maxZoom: 18,
			tileSize: 256,
			subdomains: "abc",
			errorTileUrl: "",
			attribution: "",
			zoomOffset: 0,
			opacity: 1,
			unloadInvisibleTiles: r.Browser.mobile,
			updateWhenIdle: r.Browser.mobile
		},
		initialize: function(t, e) {
			e = r.setOptions(this, e), e.detectRetina && r.Browser.retina && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomOffset++, e.minZoom > 0 && e.minZoom--, this.options.maxZoom--), e.bounds && (e.bounds = r.latLngBounds(e.bounds)), this._url = t;
			var i = this.options.subdomains;
			"string" == typeof i && (this.options.subdomains = i.split(""))
		},
		onAdd: function(t) {
			this._map = t, this._animated = t._zoomAnimated, this._initContainer(), t.on({
				viewreset: this._reset,
				moveend: this._update
			}, this), this._animated && t.on({
				zoomanim: this._animateZoom,
				zoomend: this._endZoomAnim
			}, this), this.options.updateWhenIdle || (this._limitedUpdate = r.Util.limitExecByInterval(this._update, 150, this), t.on("move", this._limitedUpdate, this)), this._reset(), this._update()
		},
		addTo: function(t) {
			return t.addLayer(this), this
		},
		onRemove: function(t) {
			this._container.parentNode.removeChild(this._container), t.off({
				viewreset: this._reset,
				moveend: this._update
			}, this), this._animated && t.off({
				zoomanim: this._animateZoom,
				zoomend: this._endZoomAnim
			}, this), this.options.updateWhenIdle || t.off("move", this._limitedUpdate, this), this._container = null, this._map = null
		},
		bringToFront: function() {
			var t = this._map._panes.tilePane;
			return this._container && (t.appendChild(this._container), this._setAutoZIndex(t, Math.max)), this
		},
		bringToBack: function() {
			var t = this._map._panes.tilePane;
			return this._container && (t.insertBefore(this._container, t.firstChild), this._setAutoZIndex(t, Math.min)), this
		},
		getAttribution: function() {
			return this.options.attribution
		},
		getContainer: function() {
			return this._container
		},
		setOpacity: function(t) {
			return this.options.opacity = t, this._map && this._updateOpacity(), this
		},
		setZIndex: function(t) {
			return this.options.zIndex = t, this._updateZIndex(), this
		},
		setUrl: function(t, e) {
			return this._url = t, e || this.redraw(), this
		},
		redraw: function() {
			return this._map && (this._reset({
				hard: !0
			}), this._update()), this
		},
		_updateZIndex: function() {
			this._container && this.options.zIndex !== i && (this._container.style.zIndex = this.options.zIndex)
		},
		_setAutoZIndex: function(t, e) {
			var i, n, r, o = t.children,
				a = -e(1 / 0, -(1 / 0));
			for (n = 0, r = o.length; r > n; n++) o[n] !== this._container && (i = parseInt(o[n].style.zIndex, 10), isNaN(i) || (a = e(a, i)));
			this.options.zIndex = this._container.style.zIndex = (isFinite(a) ? a : 0) + e(1, -1)
		},
		_updateOpacity: function() {
			var t, e = this._tiles;
			if (r.Browser.ielt9) for (t in e) r.DomUtil.setOpacity(e[t], this.options.opacity);
			else r.DomUtil.setOpacity(this._container, this.options.opacity)
		},
		_initContainer: function() {
			var t = this._map._panes.tilePane;
			if (!this._container) {
				if (this._container = r.DomUtil.create("div", "leaflet-layer"), this._updateZIndex(), this._animated) {
					var e = "leaflet-tile-container";
					this._bgBuffer = r.DomUtil.create("div", e, this._container), this._tileContainer = r.DomUtil.create("div", e, this._container)
				} else this._tileContainer = this._container;
				t.appendChild(this._container), this.options.opacity < 1 && this._updateOpacity()
			}
		},
		_reset: function(t) {
			for (var e in this._tiles) this.fire("tileunload", {
				tile: this._tiles[e]
			});
			this._tiles = {}, this._tilesToLoad = 0, this.options.reuseTiles && (this._unusedTiles = []), this._tileContainer.innerHTML = "", this._animated && t && t.hard && this._clearBgBuffer(), this._initContainer()
		},
		_getTileSize: function() {
			var t = this._map,
				e = t.getZoom() + this.options.zoomOffset,
				i = this.options.maxNativeZoom,
				n = this.options.tileSize;
			return i && e > i && (n = Math.round(t.getZoomScale(e) / t.getZoomScale(i) * n)), n
		},
		_update: function() {
			if (this._map) {
				var t = this._map,
					e = t.getPixelBounds(),
					i = t.getZoom(),
					n = this._getTileSize();
				if (!(i > this.options.maxZoom || i < this.options.minZoom)) {
					var o = r.bounds(e.min.divideBy(n)._floor(), e.max.divideBy(n)._floor());
					this._addTilesFromCenterOut(o), (this.options.unloadInvisibleTiles || this.options.reuseTiles) && this._removeOtherTiles(o)
				}
			}
		},
		_addTilesFromCenterOut: function(t) {
			var i, n, o, a = [],
				s = t.getCenter();
			for (i = t.min.y; i <= t.max.y; i++) for (n = t.min.x; n <= t.max.x; n++) o = new r.Point(n, i), this._tileShouldBeLoaded(o) && a.push(o);
			var l = a.length;
			if (0 !== l) {
				a.sort(function(t, e) {
					return t.distanceTo(s) - e.distanceTo(s)
				});
				var u = e.createDocumentFragment();
				for (this._tilesToLoad || this.fire("loading"), this._tilesToLoad += l, n = 0; l > n; n++) this._addTile(a[n], u);
				this._tileContainer.appendChild(u)
			}
		},
		_tileShouldBeLoaded: function(t) {
			if (t.x + ":" + t.y in this._tiles) return !1;
			var e = this.options;
			if (!e.continuousWorld) {
				var i = this._getWrapTileNum();
				if (e.noWrap && (t.x < 0 || t.x >= i.x) || t.y < 0 || t.y >= i.y) return !1
			}
			if (e.bounds) {
				var n = this._getTileSize(),
					r = t.multiplyBy(n),
					o = r.add([n, n]),
					a = this._map.unproject(r),
					s = this._map.unproject(o);
				if (e.continuousWorld || e.noWrap || (a = a.wrap(), s = s.wrap()), !e.bounds.intersects([a, s])) return !1
			}
			return !0
		},
		_removeOtherTiles: function(t) {
			var e, i, n, r;
			for (r in this._tiles) e = r.split(":"), i = parseInt(e[0], 10), n = parseInt(e[1], 10), (i < t.min.x || i > t.max.x || n < t.min.y || n > t.max.y) && this._removeTile(r)
		},
		_removeTile: function(t) {
			var e = this._tiles[t];
			this.fire("tileunload", {
				tile: e,
				url: e.src
			}), this.options.reuseTiles ? (r.DomUtil.removeClass(e, "leaflet-tile-loaded"), this._unusedTiles.push(e)) : e.parentNode === this._tileContainer && this._tileContainer.removeChild(e), r.Browser.android || (e.onload = null, e.src = r.Util.emptyImageUrl), delete this._tiles[t]
		},
		_addTile: function(t, e) {
			var i = this._getTilePos(t),
				n = this._getTile();
			r.DomUtil.setPosition(n, i, r.Browser.chrome), this._tiles[t.x + ":" + t.y] = n, this._loadTile(n, t), n.parentNode !== this._tileContainer && e.appendChild(n)
		},
		_getZoomForUrl: function() {
			var t = this.options,
				e = this._map.getZoom();
			return t.zoomReverse && (e = t.maxZoom - e), e += t.zoomOffset, t.maxNativeZoom ? Math.min(e, t.maxNativeZoom) : e
		},
		_getTilePos: function(t) {
			var e = this._map.getPixelOrigin(),
				i = this._getTileSize();
			return t.multiplyBy(i).subtract(e)
		},
		getTileUrl: function(t) {
			return r.Util.template(this._url, r.extend({
				s: this._getSubdomain(t),
				z: t.z,
				x: t.x,
				y: t.y
			}, this.options))
		},
		_getWrapTileNum: function() {
			var t = this._map.options.crs,
				e = t.getSize(this._map.getZoom());
			return e.divideBy(this._getTileSize())._floor()
		},
		_adjustTilePoint: function(t) {
			var e = this._getWrapTileNum();
			this.options.continuousWorld || this.options.noWrap || (t.x = (t.x % e.x + e.x) % e.x), this.options.tms && (t.y = e.y - t.y - 1), t.z = this._getZoomForUrl()
		},
		_getSubdomain: function(t) {
			var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
			return this.options.subdomains[e]
		},
		_getTile: function() {
			if (this.options.reuseTiles && this._unusedTiles.length > 0) {
				var t = this._unusedTiles.pop();
				return this._resetTile(t), t
			}
			return this._createTile()
		},
		_resetTile: function() {},
		_createTile: function() {
			var t = r.DomUtil.create("img", "leaflet-tile");
			return t.style.width = t.style.height = this._getTileSize() + "px", t.galleryimg = "no", t.onselectstart = t.onmousemove = r.Util.falseFn, r.Browser.ielt9 && this.options.opacity !== i && r.DomUtil.setOpacity(t, this.options.opacity), r.Browser.mobileWebkit3d && (t.style.WebkitBackfaceVisibility = "hidden"), t
		},
		_loadTile: function(t, e) {
			t._layer = this, t.onload = this._tileOnLoad, t.onerror = this._tileOnError, this._adjustTilePoint(e), t.src = this.getTileUrl(e), this.fire("tileloadstart", {
				tile: t,
				url: t.src
			})
		},
		_tileLoaded: function() {
			this._tilesToLoad--, this._animated && r.DomUtil.addClass(this._tileContainer, "leaflet-zoom-animated"), this._tilesToLoad || (this.fire("load"), this._animated && (clearTimeout(this._clearBgBufferTimer), this._clearBgBufferTimer = setTimeout(r.bind(this._clearBgBuffer, this), 500)))
		},
		_tileOnLoad: function() {
			var t = this._layer;
			this.src !== r.Util.emptyImageUrl && (r.DomUtil.addClass(this, "leaflet-tile-loaded"), t.fire("tileload", {
				tile: this,
				url: this.src
			})), t._tileLoaded()
		},
		_tileOnError: function() {
			var t = this._layer;
			t.fire("tileerror", {
				tile: this,
				url: this.src
			});
			var e = t.options.errorTileUrl;
			e && (this.src = e), t._tileLoaded()
		}
	}), r.tileLayer = function(t, e) {
		return new r.TileLayer(t, e)
	}, r.TileLayer.WMS = r.TileLayer.extend({
		defaultWmsParams: {
			service: "WMS",
			request: "GetMap",
			version: "1.1.1",
			layers: "",
			styles: "",
			format: "image/jpeg",
			transparent: !1
		},
		initialize: function(t, e) {
			this._url = t;
			var i = r.extend({}, this.defaultWmsParams),
				n = e.tileSize || this.options.tileSize;
			e.detectRetina && r.Browser.retina ? i.width = i.height = 2 * n : i.width = i.height = n;
			for (var o in e) this.options.hasOwnProperty(o) || "crs" === o || (i[o] = e[o]);
			this.wmsParams = i, r.setOptions(this, e)
		},
		onAdd: function(t) {
			this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
			var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
			this.wmsParams[e] = this._crs.code, r.TileLayer.prototype.onAdd.call(this, t)
		},
		getTileUrl: function(t) {
			var e = this._map,
				i = this.options.tileSize,
				n = t.multiplyBy(i),
				o = n.add([i, i]),
				a = this._crs.project(e.unproject(n, t.z)),
				s = this._crs.project(e.unproject(o, t.z)),
				l = this._wmsVersion >= 1.3 && this._crs === r.CRS.EPSG4326 ? [s.y, a.x, a.y, s.x].join(",") : [a.x, s.y, s.x, a.y].join(","),
				u = r.Util.template(this._url, {
					s: this._getSubdomain(t)
				});
			return u + r.Util.getParamString(this.wmsParams, u, !0) + "&BBOX=" + l
		},
		setParams: function(t, e) {
			return r.extend(this.wmsParams, t), e || this.redraw(), this
		}
	}), r.tileLayer.wms = function(t, e) {
		return new r.TileLayer.WMS(t, e)
	}, r.TileLayer.Canvas = r.TileLayer.extend({
		options: {
			async: !1
		},
		initialize: function(t) {
			r.setOptions(this, t)
		},
		redraw: function() {
			this._map && (this._reset({
				hard: !0
			}), this._update());
			for (var t in this._tiles) this._redrawTile(this._tiles[t]);
			return this
		},
		_redrawTile: function(t) {
			this.drawTile(t, t._tilePoint, this._map._zoom)
		},
		_createTile: function() {
			var t = r.DomUtil.create("canvas", "leaflet-tile");
			return t.width = t.height = this.options.tileSize, t.onselectstart = t.onmousemove = r.Util.falseFn, t
		},
		_loadTile: function(t, e) {
			t._layer = this, t._tilePoint = e, this._redrawTile(t), this.options.async || this.tileDrawn(t)
		},
		drawTile: function() {},
		tileDrawn: function(t) {
			this._tileOnLoad.call(t)
		}
	}), r.tileLayer.canvas = function(t) {
		return new r.TileLayer.Canvas(t)
	}, r.ImageOverlay = r.Class.extend({
		includes: r.Mixin.Events,
		options: {
			opacity: 1
		},
		initialize: function(t, e, i) {
			this._url = t, this._bounds = r.latLngBounds(e), r.setOptions(this, i)
		},
		onAdd: function(t) {
			this._map = t, this._image || this._initImage(), t._panes.overlayPane.appendChild(this._image), t.on("viewreset", this._reset, this), t.options.zoomAnimation && r.Browser.any3d && t.on("zoomanim", this._animateZoom, this), this._reset()
		},
		onRemove: function(t) {
			t.getPanes().overlayPane.removeChild(this._image), t.off("viewreset", this._reset, this), t.options.zoomAnimation && t.off("zoomanim", this._animateZoom, this)
		},
		addTo: function(t) {
			return t.addLayer(this), this
		},
		setOpacity: function(t) {
			return this.options.opacity = t, this._updateOpacity(), this
		},
		bringToFront: function() {
			return this._image && this._map._panes.overlayPane.appendChild(this._image), this
		},
		bringToBack: function() {
			var t = this._map._panes.overlayPane;
			return this._image && t.insertBefore(this._image, t.firstChild), this
		},
		setUrl: function(t) {
			this._url = t, this._image.src = this._url
		},
		getAttribution: function() {
			return this.options.attribution
		},
		_initImage: function() {
			this._image = r.DomUtil.create("img", "leaflet-image-layer"), this._map.options.zoomAnimation && r.Browser.any3d ? r.DomUtil.addClass(this._image, "leaflet-zoom-animated") : r.DomUtil.addClass(this._image, "leaflet-zoom-hide"), this._updateOpacity(), r.extend(this._image, {
				galleryimg: "no",
				onselectstart: r.Util.falseFn,
				onmousemove: r.Util.falseFn,
				onload: r.bind(this._onImageLoad, this),
				src: this._url
			})
		},
		_animateZoom: function(t) {
			var e = this._map,
				i = this._image,
				n = e.getZoomScale(t.zoom),
				o = this._bounds.getNorthWest(),
				a = this._bounds.getSouthEast(),
				s = e._latLngToNewLayerPoint(o, t.zoom, t.center),
				l = e._latLngToNewLayerPoint(a, t.zoom, t.center)._subtract(s),
				u = s._add(l._multiplyBy(.5 * (1 - 1 / n)));
			i.style[r.DomUtil.TRANSFORM] = r.DomUtil.getTranslateString(u) + " scale(" + n + ") "
		},
		_reset: function() {
			var t = this._image,
				e = this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
				i = this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(e);
			r.DomUtil.setPosition(t, e), t.style.width = i.x + "px", t.style.height = i.y + "px"
		},
		_onImageLoad: function() {
			this.fire("load")
		},
		_updateOpacity: function() {
			r.DomUtil.setOpacity(this._image, this.options.opacity)
		}
	}), r.imageOverlay = function(t, e, i) {
		return new r.ImageOverlay(t, e, i)
	}, r.Icon = r.Class.extend({
		options: {
			className: ""
		},
		initialize: function(t) {
			r.setOptions(this, t)
		},
		createIcon: function(t) {
			return this._createIcon("icon", t)
		},
		createShadow: function(t) {
			return this._createIcon("shadow", t)
		},
		_createIcon: function(t, e) {
			var i = this._getIconUrl(t);
			if (!i) {
				if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
				return null
			}
			var n;
			return n = e && "IMG" === e.tagName ? this._createImg(i, e) : this._createImg(i), this._setIconStyles(n, t), n
		},
		_setIconStyles: function(t, e) {
			var i, n = this.options,
				o = r.point(n[e + "Size"]);
			i = "shadow" === e ? r.point(n.shadowAnchor || n.iconAnchor) : r.point(n.iconAnchor), !i && o && (i = o.divideBy(2, !0)), t.className = "leaflet-marker-" + e + " " + n.className, i && (t.style.marginLeft = -i.x + "px", t.style.marginTop = -i.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px")
		},
		_createImg: function(t, i) {
			return i = i || e.createElement("img"), i.src = t, i
		},
		_getIconUrl: function(t) {
			return r.Browser.retina && this.options[t + "RetinaUrl"] ? this.options[t + "RetinaUrl"] : this.options[t + "Url"]
		}
	}), r.icon = function(t) {
		return new r.Icon(t)
	}, r.Icon.Default = r.Icon.extend({
		options: {
			iconSize: [25, 41],
			iconAnchor: [12, 41],
			popupAnchor: [1, -34],
			shadowSize: [41, 41]
		},
		_getIconUrl: function(t) {
			var e = t + "Url";
			if (this.options[e]) return this.options[e];
			r.Browser.retina && "icon" === t && (t += "-2x");
			var i = r.Icon.Default.imagePath;
			if (!i) throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");
			return i + "/marker-" + t + ".png"
		}
	}), r.Icon.Default.imagePath = function() {
		var t, i, n, r, o, a = e.getElementsByTagName("script"),
			s = /[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;
		for (t = 0, i = a.length; i > t; t++) if (n = a[t].src, r = n.match(s)) return o = n.split(s)[0], (o ? o + "/" : "") + "images"
	}(), r.Marker = r.Class.extend({
		includes: r.Mixin.Events,
		options: {
			icon: new r.Icon.Default,
			title: "",
			alt: "",
			clickable: !0,
			draggable: !1,
			keyboard: !0,
			zIndexOffset: 0,
			opacity: 1,
			riseOnHover: !1,
			riseOffset: 250
		},
		initialize: function(t, e) {
			r.setOptions(this, e), this._latlng = r.latLng(t)
		},
		onAdd: function(t) {
			this._map = t, t.on("viewreset", this.update, this), this._initIcon(), this.update(), this.fire("add"), t.options.zoomAnimation && t.options.markerZoomAnimation && t.on("zoomanim", this._animateZoom, this)
		},
		addTo: function(t) {
			return t.addLayer(this), this
		},
		onRemove: function(t) {
			this.dragging && this.dragging.disable(), this._removeIcon(), this._removeShadow(), this.fire("remove"), t.off({
				viewreset: this.update,
				zoomanim: this._animateZoom
			}, this), this._map = null
		},
		getLatLng: function() {
			return this._latlng
		},
		setLatLng: function(t) {
			return this._latlng = r.latLng(t), this.update(), this.fire("move", {
				latlng: this._latlng
			})
		},
		setZIndexOffset: function(t) {
			return this.options.zIndexOffset = t, this.update(), this
		},
		setIcon: function(t) {
			return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup), this
		},
		update: function() {
			return this._icon && this._setPos(this._map.latLngToLayerPoint(this._latlng).round()), this
		},
		_initIcon: function() {
			var t = this.options,
				e = this._map,
				i = e.options.zoomAnimation && e.options.markerZoomAnimation,
				n = i ? "leaflet-zoom-animated" : "leaflet-zoom-hide",
				o = t.icon.createIcon(this._icon),
				a = !1;
			o !== this._icon && (this._icon && this._removeIcon(), a = !0, t.title && (o.title = t.title), t.alt && (o.alt = t.alt)), r.DomUtil.addClass(o, n), t.keyboard && (o.tabIndex = "0"), this._icon = o, this._initInteraction(), t.riseOnHover && r.DomEvent.on(o, "mouseover", this._bringToFront, this).on(o, "mouseout", this._resetZIndex, this);
			var s = t.icon.createShadow(this._shadow),
				l = !1;
			s !== this._shadow && (this._removeShadow(), l = !0), s && r.DomUtil.addClass(s, n), this._shadow = s, t.opacity < 1 && this._updateOpacity();
			var u = this._map._panes;
			a && u.markerPane.appendChild(this._icon), s && l && u.shadowPane.appendChild(this._shadow)
		},
		_removeIcon: function() {
			this.options.riseOnHover && r.DomEvent.off(this._icon, "mouseover", this._bringToFront).off(this._icon, "mouseout", this._resetZIndex), this._map._panes.markerPane.removeChild(this._icon), this._icon = null
		},
		_removeShadow: function() {
			this._shadow && this._map._panes.shadowPane.removeChild(this._shadow), this._shadow = null
		},
		_setPos: function(t) {
			r.DomUtil.setPosition(this._icon, t), this._shadow && r.DomUtil.setPosition(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
		},
		_updateZIndex: function(t) {
			this._icon.style.zIndex = this._zIndex + t
		},
		_animateZoom: function(t) {
			var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
			this._setPos(e)
		},
		_initInteraction: function() {
			if (this.options.clickable) {
				var t = this._icon,
					e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
				r.DomUtil.addClass(t, "leaflet-clickable"), r.DomEvent.on(t, "click", this._onMouseClick, this), r.DomEvent.on(t, "keypress", this._onKeyPress, this);
				for (var i = 0; i < e.length; i++) r.DomEvent.on(t, e[i], this._fireMouseEvent, this);
				r.Handler.MarkerDrag && (this.dragging = new r.Handler.MarkerDrag(this), this.options.draggable && this.dragging.enable())
			}
		},
		_onMouseClick: function(t) {
			var e = this.dragging && this.dragging.moved();
			(this.hasEventListeners(t.type) || e) && r.DomEvent.stopPropagation(t), e || (this.dragging && this.dragging._enabled || !this._map.dragging || !this._map.dragging.moved()) && this.fire(t.type, {
				originalEvent: t,
				latlng: this._latlng
			})
		},
		_onKeyPress: function(t) {
			13 === t.keyCode && this.fire("click", {
				originalEvent: t,
				latlng: this._latlng
			})
		},
		_fireMouseEvent: function(t) {
			this.fire(t.type, {
				originalEvent: t,
				latlng: this._latlng
			}), "contextmenu" === t.type && this.hasEventListeners(t.type) && r.DomEvent.preventDefault(t), "mousedown" !== t.type ? r.DomEvent.stopPropagation(t) : r.DomEvent.preventDefault(t)
		},
		setOpacity: function(t) {
			return this.options.opacity = t, this._map && this._updateOpacity(), this
		},
		_updateOpacity: function() {
			r.DomUtil.setOpacity(this._icon, this.options.opacity), this._shadow && r.DomUtil.setOpacity(this._shadow, this.options.opacity)
		},
		_bringToFront: function() {
			this._updateZIndex(this.options.riseOffset)
		},
		_resetZIndex: function() {
			this._updateZIndex(0)
		}
	}), r.marker = function(t, e) {
		return new r.Marker(t, e)
	}, r.DivIcon = r.Icon.extend({
		options: {
			iconSize: [12, 12],
			className: "leaflet-div-icon",
			html: !1
		},
		createIcon: function(t) {
			var i = t && "DIV" === t.tagName ? t : e.createElement("div"),
				n = this.options;
			return n.html !== !1 ? i.innerHTML = n.html : i.innerHTML = "", n.bgPos && (i.style.backgroundPosition = -n.bgPos.x + "px " + -n.bgPos.y + "px"), this._setIconStyles(i, "icon"), i
		},
		createShadow: function() {
			return null
		}
	}), r.divIcon = function(t) {
		return new r.DivIcon(t)
	}, r.Map.mergeOptions({
		closePopupOnClick: !0
	}), r.Popup = r.Class.extend({
		includes: r.Mixin.Events,
		options: {
			minWidth: 50,
			maxWidth: 300,
			autoPan: !0,
			closeButton: !0,
			offset: [0, 7],
			autoPanPadding: [5, 5],
			keepInView: !1,
			className: "",
			zoomAnimation: !0
		},
		initialize: function(t, e) {
			r.setOptions(this, t), this._source = e, this._animated = r.Browser.any3d && this.options.zoomAnimation, this._isOpen = !1
		},
		onAdd: function(t) {
			this._map = t, this._container || this._initLayout();
			var e = t.options.fadeAnimation;
			e && r.DomUtil.setOpacity(this._container, 0), t._panes.popupPane.appendChild(this._container), t.on(this._getEvents(), this), this.update(), e && r.DomUtil.setOpacity(this._container, 1), this.fire("open"), t.fire("popupopen", {
				popup: this
			}), this._source && this._source.fire("popupopen", {
				popup: this
			})
		},
		addTo: function(t) {
			return t.addLayer(this), this
		},
		openOn: function(t) {
			return t.openPopup(this), this
		},
		onRemove: function(t) {
			t._panes.popupPane.removeChild(this._container), r.Util.falseFn(this._container.offsetWidth), t.off(this._getEvents(), this), t.options.fadeAnimation && r.DomUtil.setOpacity(this._container, 0), this._map = null, this.fire("close"), t.fire("popupclose", {
				popup: this
			}), this._source && this._source.fire("popupclose", {
				popup: this
			})
		},
		getLatLng: function() {
			return this._latlng
		},
		setLatLng: function(t) {
			return this._latlng = r.latLng(t), this._map && (this._updatePosition(), this._adjustPan()), this
		},
		getContent: function() {
			return this._content
		},
		setContent: function(t) {
			return this._content = t, this.update(), this
		},
		update: function() {
			this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
		},
		_getEvents: function() {
			var t = {
				viewreset: this._updatePosition
			};
			return this._animated && (t.zoomanim = this._zoomAnimation), ("closeOnClick" in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
		},
		_close: function() {
			this._map && this._map.closePopup(this)
		},
		_initLayout: function() {
			var t, e = "leaflet-popup",
				i = e + " " + this.options.className + " leaflet-zoom-" + (this._animated ? "animated" : "hide"),
				n = this._container = r.DomUtil.create("div", i);
			this.options.closeButton && (t = this._closeButton = r.DomUtil.create("a", e + "-close-button", n), t.href = "#close", t.innerHTML = "&#215;", r.DomEvent.disableClickPropagation(t), r.DomEvent.on(t, "click", this._onCloseButtonClick, this));
			var o = this._wrapper = r.DomUtil.create("div", e + "-content-wrapper", n);
			r.DomEvent.disableClickPropagation(o), this._contentNode = r.DomUtil.create("div", e + "-content", o), r.DomEvent.disableScrollPropagation(this._contentNode), r.DomEvent.on(o, "contextmenu", r.DomEvent.stopPropagation), this._tipContainer = r.DomUtil.create("div", e + "-tip-container", n), this._tip = r.DomUtil.create("div", e + "-tip", this._tipContainer)
		},
		_updateContent: function() {
			if (this._content) {
				if ("string" == typeof this._content) this._contentNode.innerHTML = this._content;
				else {
					for (; this._contentNode.hasChildNodes();) this._contentNode.removeChild(this._contentNode.firstChild);
					this._contentNode.appendChild(this._content)
				}
				this.fire("contentupdate")
			}
		},
		_updateLayout: function() {
			var t = this._contentNode,
				e = t.style;
			e.width = "", e.whiteSpace = "nowrap";
			var i = t.offsetWidth;
			i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
			var n = t.offsetHeight,
				o = this.options.maxHeight,
				a = "leaflet-popup-scrolled";
			o && n > o ? (e.height = o + "px", r.DomUtil.addClass(t, a)) : r.DomUtil.removeClass(t, a), this._containerWidth = this._container.offsetWidth
		},
		_updatePosition: function() {
			if (this._map) {
				var t = this._map.latLngToLayerPoint(this._latlng),
					e = this._animated,
					i = r.point(this.options.offset);
				e && r.DomUtil.setPosition(this._container, t), this._containerBottom = -i.y - (e ? 0 : t.y), this._containerLeft = -Math.round(this._containerWidth / 2) + i.x + (e ? 0 : t.x), this._container.style.bottom = this._containerBottom + "px", this._container.style.left = this._containerLeft + "px"
			}
		},
		_zoomAnimation: function(t) {
			var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
			r.DomUtil.setPosition(this._container, e)
		},
		_adjustPan: function() {
			if (this.options.autoPan) {
				var t = this._map,
					e = this._container.offsetHeight,
					i = this._containerWidth,
					n = new r.Point(this._containerLeft, -e - this._containerBottom);
				this._animated && n._add(r.DomUtil.getPosition(this._container));
				var o = t.layerPointToContainerPoint(n),
					a = r.point(this.options.autoPanPadding),
					s = r.point(this.options.autoPanPaddingTopLeft || a),
					l = r.point(this.options.autoPanPaddingBottomRight || a),
					u = t.getSize(),
					c = 0,
					h = 0;
				o.x + i + l.x > u.x && (c = o.x + i - u.x + l.x), o.x - c - s.x < 0 && (c = o.x - s.x), o.y + e + l.y > u.y && (h = o.y + e - u.y + l.y), o.y - h - s.y < 0 && (h = o.y - s.y), (c || h) && t.fire("autopanstart").panBy([c, h])
			}
		},
		_onCloseButtonClick: function(t) {
			this._close(), r.DomEvent.stop(t)
		}
	}), r.popup = function(t, e) {
		return new r.Popup(t, e)
	}, r.Map.include({
		openPopup: function(t, e, i) {
			if (this.closePopup(), !(t instanceof r.Popup)) {
				var n = t;
				t = new r.Popup(i).setLatLng(e).setContent(n)
			}
			return t._isOpen = !0, this._popup = t, this.addLayer(t)
		},
		closePopup: function(t) {
			return t && t !== this._popup || (t = this._popup, this._popup = null), t && (this.removeLayer(t), t._isOpen = !1), this
		}
	}), r.Marker.include({
		openPopup: function() {
			return this._popup && this._map && !this._map.hasLayer(this._popup) && (this._popup.setLatLng(this._latlng), this._map.openPopup(this._popup)), this
		},
		closePopup: function() {
			return this._popup && this._popup._close(), this
		},
		togglePopup: function() {
			return this._popup && (this._popup._isOpen ? this.closePopup() : this.openPopup()), this
		},
		bindPopup: function(t, e) {
			var i = r.point(this.options.icon.options.popupAnchor || [0, 0]);
			return i = i.add(r.Popup.prototype.options.offset), e && e.offset && (i = i.add(e.offset)), e = r.extend({
				offset: i
			}, e), this._popupHandlersAdded || (this.on("click", this.togglePopup, this).on("remove", this.closePopup, this).on("move", this._movePopup, this), this._popupHandlersAdded = !0), t instanceof r.Popup ? (r.setOptions(t, e), this._popup = t, t._source = this) : this._popup = new r.Popup(e, this).setContent(t), this
		},
		setPopupContent: function(t) {
			return this._popup && this._popup.setContent(t), this
		},
		unbindPopup: function() {
			return this._popup && (this._popup = null, this.off("click", this.togglePopup, this).off("remove", this.closePopup, this).off("move", this._movePopup, this), this._popupHandlersAdded = !1), this
		},
		getPopup: function() {
			return this._popup
		},
		_movePopup: function(t) {
			this._popup.setLatLng(t.latlng)
		}
	}), r.LayerGroup = r.Class.extend({
		initialize: function(t) {
			this._layers = {};
			var e, i;
			if (t) for (e = 0, i = t.length; i > e; e++) this.addLayer(t[e])
		},
		addLayer: function(t) {
			var e = this.getLayerId(t);
			return this._layers[e] = t, this._map && this._map.addLayer(t), this
		},
		removeLayer: function(t) {
			var e = t in this._layers ? t : this.getLayerId(t);
			return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this
		},
		hasLayer: function(t) {
			return t ? t in this._layers || this.getLayerId(t) in this._layers : !1
		},
		clearLayers: function() {
			return this.eachLayer(this.removeLayer, this), this
		},
		invoke: function(t) {
			var e, i, n = Array.prototype.slice.call(arguments, 1);
			for (e in this._layers) i = this._layers[e], i[t] && i[t].apply(i, n);
			return this
		},
		onAdd: function(t) {
			this._map = t, this.eachLayer(t.addLayer, t)
		},
		onRemove: function(t) {
			this.eachLayer(t.removeLayer, t), this._map = null
		},
		addTo: function(t) {
			return t.addLayer(this), this
		},
		eachLayer: function(t, e) {
			for (var i in this._layers) t.call(e, this._layers[i]);
			return this
		},
		getLayer: function(t) {
			return this._layers[t]
		},
		getLayers: function() {
			var t = [];
			for (var e in this._layers) t.push(this._layers[e]);
			return t
		},
		setZIndex: function(t) {
			return this.invoke("setZIndex", t)
		},
		getLayerId: function(t) {
			return r.stamp(t)
		}
	}), r.layerGroup = function(t) {
		return new r.LayerGroup(t)
	}, r.FeatureGroup = r.LayerGroup.extend({
		includes: r.Mixin.Events,
		statics: {
			EVENTS: "click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"
		},
		addLayer: function(t) {
			return this.hasLayer(t) ? this : ("on" in t && t.on(r.FeatureGroup.EVENTS, this._propagateEvent, this), r.LayerGroup.prototype.addLayer.call(this, t), this._popupContent && t.bindPopup && t.bindPopup(this._popupContent, this._popupOptions), this.fire("layeradd", {
				layer: t
			}))
		},
		removeLayer: function(t) {
			return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), "off" in t && t.off(r.FeatureGroup.EVENTS, this._propagateEvent, this), r.LayerGroup.prototype.removeLayer.call(this, t), this._popupContent && this.invoke("unbindPopup"), this.fire("layerremove", {
				layer: t
			})) : this
		},
		bindPopup: function(t, e) {
			return this._popupContent = t, this._popupOptions = e, this.invoke("bindPopup", t, e)
		},
		openPopup: function(t) {
			for (var e in this._layers) {
				this._layers[e].openPopup(t);
				break
			}
			return this
		},
		setStyle: function(t) {
			return this.invoke("setStyle", t)
		},
		bringToFront: function() {
			return this.invoke("bringToFront")
		},
		bringToBack: function() {
			return this.invoke("bringToBack")
		},
		getBounds: function() {
			var t = new r.LatLngBounds;
			return this.eachLayer(function(e) {
				t.extend(e instanceof r.Marker ? e.getLatLng() : e.getBounds())
			}), t
		},
		_propagateEvent: function(t) {
			t = r.extend({
				layer: t.target,
				target: this
			}, t), this.fire(t.type, t)
		}
	}), r.featureGroup = function(t) {
		return new r.FeatureGroup(t)
	}, r.Path = r.Class.extend({
		includes: [r.Mixin.Events],
		statics: {
			CLIP_PADDING: function() {
				var e = r.Browser.mobile ? 1280 : 2e3,
					i = (e / Math.max(t.outerWidth, t.outerHeight) - 1) / 2;
				return Math.max(0, Math.min(.5, i))
			}()
		},
		options: {
			stroke: !0,
			color: "#0033ff",
			dashArray: null,
			lineCap: null,
			lineJoin: null,
			weight: 5,
			opacity: .5,
			fill: !1,
			fillColor: null,
			fillOpacity: .2,
			clickable: !0
		},
		initialize: function(t) {
			r.setOptions(this, t)
		},
		onAdd: function(t) {
			this._map = t, this._container || (this._initElements(), this._initEvents()), this.projectLatlngs(), this._updatePath(), this._container && this._map._pathRoot.appendChild(this._container), this.fire("add"), t.on({
				viewreset: this.projectLatlngs,
				moveend: this._updatePath
			}, this)
		},
		addTo: function(t) {
			return t.addLayer(this), this
		},
		onRemove: function(t) {
			t._pathRoot.removeChild(this._container), this.fire("remove"), this._map = null, r.Browser.vml && (this._container = null, this._stroke = null, this._fill = null), t.off({
				viewreset: this.projectLatlngs,
				moveend: this._updatePath
			}, this)
		},
		projectLatlngs: function() {},
		setStyle: function(t) {
			return r.setOptions(this, t), this._container && this._updateStyle(), this
		},
		redraw: function() {
			return this._map && (this.projectLatlngs(), this._updatePath()), this
		}
	}), r.Map.include({
		_updatePathViewport: function() {
			var t = r.Path.CLIP_PADDING,
				e = this.getSize(),
				i = r.DomUtil.getPosition(this._mapPane),
				n = i.multiplyBy(-1)._subtract(e.multiplyBy(t)._round()),
				o = n.add(e.multiplyBy(1 + 2 * t)._round());
			this._pathViewport = new r.Bounds(n, o)
		}
	}), r.Path.SVG_NS = "http://www.w3.org/2000/svg", r.Browser.svg = !(!e.createElementNS || !e.createElementNS(r.Path.SVG_NS, "svg").createSVGRect), r.Path = r.Path.extend({
		statics: {
			SVG: r.Browser.svg
		},
		bringToFront: function() {
			var t = this._map._pathRoot,
				e = this._container;
			return e && t.lastChild !== e && t.appendChild(e), this
		},
		bringToBack: function() {
			var t = this._map._pathRoot,
				e = this._container,
				i = t.firstChild;
			return e && i !== e && t.insertBefore(e, i), this
		},
		getPathString: function() {},
		_createElement: function(t) {
			return e.createElementNS(r.Path.SVG_NS, t)
		},
		_initElements: function() {
			this._map._initPathRoot(), this._initPath(), this._initStyle()
		},
		_initPath: function() {
			this._container = this._createElement("g"), this._path = this._createElement("path"), this.options.className && r.DomUtil.addClass(this._path, this.options.className), this._container.appendChild(this._path)
		},
		_initStyle: function() {
			this.options.stroke && (this._path.setAttribute("stroke-linejoin", "round"), this._path.setAttribute("stroke-linecap", "round")), this.options.fill && this._path.setAttribute("fill-rule", "evenodd"), this.options.pointerEvents && this._path.setAttribute("pointer-events", this.options.pointerEvents), this.options.clickable || this.options.pointerEvents || this._path.setAttribute("pointer-events", "none"), this._updateStyle()
		},
		_updateStyle: function() {
			this.options.stroke ? (this._path.setAttribute("stroke", this.options.color), this._path.setAttribute("stroke-opacity", this.options.opacity), this._path.setAttribute("stroke-width", this.options.weight), this.options.dashArray ? this._path.setAttribute("stroke-dasharray", this.options.dashArray) : this._path.removeAttribute("stroke-dasharray"), this.options.lineCap && this._path.setAttribute("stroke-linecap", this.options.lineCap), this.options.lineJoin && this._path.setAttribute("stroke-linejoin", this.options.lineJoin)) : this._path.setAttribute("stroke", "none"), this.options.fill ? (this._path.setAttribute("fill", this.options.fillColor || this.options.color), this._path.setAttribute("fill-opacity", this.options.fillOpacity)) : this._path.setAttribute("fill", "none")
		},
		_updatePath: function() {
			var t = this.getPathString();
			t || (t = "M0 0"), this._path.setAttribute("d", t)
		},
		_initEvents: function() {
			if (this.options.clickable) {
				(r.Browser.svg || !r.Browser.vml) && r.DomUtil.addClass(this._path, "leaflet-clickable"), r.DomEvent.on(this._container, "click", this._onMouseClick, this);
				for (var t = ["dblclick", "mousedown", "mouseover", "mouseout", "mousemove", "contextmenu"], e = 0; e < t.length; e++) r.DomEvent.on(this._container, t[e], this._fireMouseEvent, this)
			}
		},
		_onMouseClick: function(t) {
			this._map.dragging && this._map.dragging.moved() || this._fireMouseEvent(t)
		},
		_fireMouseEvent: function(t) {
			if (this._map && this.hasEventListeners(t.type)) {
				var e = this._map,
					i = e.mouseEventToContainerPoint(t),
					n = e.containerPointToLayerPoint(i),
					o = e.layerPointToLatLng(n);
				this.fire(t.type, {
					latlng: o,
					layerPoint: n,
					containerPoint: i,
					originalEvent: t
				}), "contextmenu" === t.type && r.DomEvent.preventDefault(t), "mousemove" !== t.type && r.DomEvent.stopPropagation(t)
			}
		}
	}), r.Map.include({
		_initPathRoot: function() {
			this._pathRoot || (this._pathRoot = r.Path.prototype._createElement("svg"), this._panes.overlayPane.appendChild(this._pathRoot), this.options.zoomAnimation && r.Browser.any3d ? (r.DomUtil.addClass(this._pathRoot, "leaflet-zoom-animated"), this.on({
				zoomanim: this._animatePathZoom,
				zoomend: this._endPathZoom
			})) : r.DomUtil.addClass(this._pathRoot, "leaflet-zoom-hide"), this.on("moveend", this._updateSvgViewport), this._updateSvgViewport())
		},
		_animatePathZoom: function(t) {
			var e = this.getZoomScale(t.zoom),
				i = this._getCenterOffset(t.center)._multiplyBy(-e)._add(this._pathViewport.min);
			this._pathRoot.style[r.DomUtil.TRANSFORM] = r.DomUtil.getTranslateString(i) + " scale(" + e + ") ", this._pathZooming = !0
		},
		_endPathZoom: function() {
			this._pathZooming = !1
		},
		_updateSvgViewport: function() {
			if (!this._pathZooming) {
				this._updatePathViewport();
				var t = this._pathViewport,
					e = t.min,
					i = t.max,
					n = i.x - e.x,
					o = i.y - e.y,
					a = this._pathRoot,
					s = this._panes.overlayPane;
				r.Browser.mobileWebkit && s.removeChild(a), r.DomUtil.setPosition(a, e), a.setAttribute("width", n), a.setAttribute("height", o), a.setAttribute("viewBox", [e.x, e.y, n, o].join(" ")), r.Browser.mobileWebkit && s.appendChild(a)
			}
		}
	}), r.Path.include({
		bindPopup: function(t, e) {
			return t instanceof r.Popup ? this._popup = t : ((!this._popup || e) && (this._popup = new r.Popup(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on("click", this._openPopup, this).on("remove", this.closePopup, this), this._popupHandlersAdded = !0), this
		},
		unbindPopup: function() {
			return this._popup && (this._popup = null, this.off("click", this._openPopup).off("remove", this.closePopup), this._popupHandlersAdded = !1), this
		},
		openPopup: function(t) {
			return this._popup && (t = t || this._latlng || this._latlngs[Math.floor(this._latlngs.length / 2)], this._openPopup({
				latlng: t
			})), this
		},
		closePopup: function() {
			return this._popup && this._popup._close(), this
		},
		_openPopup: function(t) {
			this._popup.setLatLng(t.latlng), this._map.openPopup(this._popup)
		}
	}), r.Browser.vml = !r.Browser.svg &&
	function() {
		try {
			var t = e.createElement("div");
			t.innerHTML = '<v:shape adj="1"/>';
			var i = t.firstChild;
			return i.style.behavior = "url(#default#VML)", i && "object" == typeof i.adj
		} catch (n) {
			return !1
		}
	}(), r.Path = r.Browser.svg || !r.Browser.vml ? r.Path : r.Path.extend({
		statics: {
			VML: !0,
			CLIP_PADDING: .02
		},
		_createElement: function() {
			try {
				return e.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(t) {
					return e.createElement("<lvml:" + t + ' class="lvml">')
				}
			} catch (t) {
				return function(t) {
					return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
				}
			}
		}(),
		_initPath: function() {
			var t = this._container = this._createElement("shape");
			r.DomUtil.addClass(t, "leaflet-vml-shape" + (this.options.className ? " " + this.options.className : "")), this.options.clickable && r.DomUtil.addClass(t, "leaflet-clickable"), t.coordsize = "1 1", this._path = this._createElement("path"), t.appendChild(this._path), this._map._pathRoot.appendChild(t)
		},
		_initStyle: function() {
			this._updateStyle()
		},
		_updateStyle: function() {
			var t = this._stroke,
				e = this._fill,
				i = this.options,
				n = this._container;
			n.stroked = i.stroke, n.filled = i.fill, i.stroke ? (t || (t = this._stroke = this._createElement("stroke"), t.endcap = "round", n.appendChild(t)), t.weight = i.weight + "px", t.color = i.color, t.opacity = i.opacity, i.dashArray ? t.dashStyle = r.Util.isArray(i.dashArray) ? i.dashArray.join(" ") : i.dashArray.replace(/( *, *)/g, " ") : t.dashStyle = "", i.lineCap && (t.endcap = i.lineCap.replace("butt", "flat")), i.lineJoin && (t.joinstyle = i.lineJoin)) : t && (n.removeChild(t), this._stroke = null), i.fill ? (e || (e = this._fill = this._createElement("fill"), n.appendChild(e)), e.color = i.fillColor || i.color, e.opacity = i.fillOpacity) : e && (n.removeChild(e), this._fill = null)
		},
		_updatePath: function() {
			var t = this._container.style;
			t.display = "none", this._path.v = this.getPathString() + " ", t.display = ""
		}
	}), r.Map.include(r.Browser.svg || !r.Browser.vml ? {} : {
		_initPathRoot: function() {
			if (!this._pathRoot) {
				var t = this._pathRoot = e.createElement("div");
				t.className = "leaflet-vml-container", this._panes.overlayPane.appendChild(t), this.on("moveend", this._updatePathViewport), this._updatePathViewport()
			}
		}
	}), r.Browser.canvas = function() {
		return !!e.createElement("canvas").getContext
	}(), r.Path = r.Path.SVG && !t.L_PREFER_CANVAS || !r.Browser.canvas ? r.Path : r.Path.extend({
		statics: {
			CANVAS: !0,
			SVG: !1
		},
		redraw: function() {
			return this._map && (this.projectLatlngs(), this._requestUpdate()), this
		},
		setStyle: function(t) {
			return r.setOptions(this, t), this._map && (this._updateStyle(), this._requestUpdate()), this
		},
		onRemove: function(t) {
			t.off("viewreset", this.projectLatlngs, this).off("moveend", this._updatePath, this), this.options.clickable && (this._map.off("click", this._onClick, this), this._map.off("mousemove", this._onMouseMove, this)), this._requestUpdate(), this.fire("remove"), this._map = null
		},
		_requestUpdate: function() {
			this._map && !r.Path._updateRequest && (r.Path._updateRequest = r.Util.requestAnimFrame(this._fireMapMoveEnd, this._map))
		},
		_fireMapMoveEnd: function() {
			r.Path._updateRequest = null, this.fire("moveend")
		},
		_initElements: function() {
			this._map._initPathRoot(), this._ctx = this._map._canvasCtx
		},
		_updateStyle: function() {
			var t = this.options;
			t.stroke && (this._ctx.lineWidth = t.weight, this._ctx.strokeStyle = t.color), t.fill && (this._ctx.fillStyle = t.fillColor || t.color), t.lineCap && (this._ctx.lineCap = t.lineCap), t.lineJoin && (this._ctx.lineJoin = t.lineJoin)
		},
		_drawPath: function() {
			var t, e, i, n, o, a;
			for (this._ctx.beginPath(), t = 0, i = this._parts.length; i > t; t++) {
				for (e = 0, n = this._parts[t].length; n > e; e++) o = this._parts[t][e], a = (0 === e ? "move" : "line") + "To", this._ctx[a](o.x, o.y);
				this instanceof r.Polygon && this._ctx.closePath()
			}
		},
		_checkIfEmpty: function() {
			return !this._parts.length
		},
		_updatePath: function() {
			if (!this._checkIfEmpty()) {
				var t = this._ctx,
					e = this.options;
				this._drawPath(), t.save(), this._updateStyle(), e.fill && (t.globalAlpha = e.fillOpacity, t.fill(e.fillRule || "evenodd")), e.stroke && (t.globalAlpha = e.opacity, t.stroke()), t.restore()
			}
		},
		_initEvents: function() {
			this.options.clickable && (this._map.on("mousemove", this._onMouseMove, this), this._map.on("click dblclick contextmenu", this._fireMouseEvent, this))
		},
		_fireMouseEvent: function(t) {
			this._containsPoint(t.layerPoint) && this.fire(t.type, t)
		},
		_onMouseMove: function(t) {
			this._map && !this._map._animatingZoom && (this._containsPoint(t.layerPoint) ? (this._ctx.canvas.style.cursor = "pointer", this._mouseInside = !0, this.fire("mouseover", t)) : this._mouseInside && (this._ctx.canvas.style.cursor = "", this._mouseInside = !1, this.fire("mouseout", t)))
		}
	}), r.Map.include(r.Path.SVG && !t.L_PREFER_CANVAS || !r.Browser.canvas ? {} : {
		_initPathRoot: function() {
			var t, i = this._pathRoot;
			i || (i = this._pathRoot = e.createElement("canvas"), i.style.position = "absolute", t = this._canvasCtx = i.getContext("2d"), t.lineCap = "round", t.lineJoin = "round", this._panes.overlayPane.appendChild(i), this.options.zoomAnimation && (this._pathRoot.className = "leaflet-zoom-animated", this.on("zoomanim", this._animatePathZoom), this.on("zoomend", this._endPathZoom)), this.on("moveend", this._updateCanvasViewport), this._updateCanvasViewport())
		},
		_updateCanvasViewport: function() {
			if (!this._pathZooming) {
				this._updatePathViewport();
				var t = this._pathViewport,
					e = t.min,
					i = t.max.subtract(e),
					n = this._pathRoot;
				r.DomUtil.setPosition(n, e), n.width = i.x, n.height = i.y, n.getContext("2d").translate(-e.x, -e.y)
			}
		}
	}), r.LineUtil = {
		simplify: function(t, e) {
			if (!e || !t.length) return t.slice();
			var i = e * e;
			return t = this._reducePoints(t, i), t = this._simplifyDP(t, i)
		},
		pointToSegmentDistance: function(t, e, i) {
			return Math.sqrt(this._sqClosestPointOnSegment(t, e, i, !0))
		},
		closestPointOnSegment: function(t, e, i) {
			return this._sqClosestPointOnSegment(t, e, i)
		},
		_simplifyDP: function(t, e) {
			var n = t.length,
				r = typeof Uint8Array != i + "" ? Uint8Array : Array,
				o = new r(n);
			o[0] = o[n - 1] = 1, this._simplifyDPStep(t, o, e, 0, n - 1);
			var a, s = [];
			for (a = 0; n > a; a++) o[a] && s.push(t[a]);
			return s
		},
		_simplifyDPStep: function(t, e, i, n, r) {
			var o, a, s, l = 0;
			for (a = n + 1; r - 1 >= a; a++) s = this._sqClosestPointOnSegment(t[a], t[n], t[r], !0), s > l && (o = a, l = s);
			l > i && (e[o] = 1, this._simplifyDPStep(t, e, i, n, o), this._simplifyDPStep(t, e, i, o, r))
		},
		_reducePoints: function(t, e) {
			for (var i = [t[0]], n = 1, r = 0, o = t.length; o > n; n++) this._sqDist(t[n], t[r]) > e && (i.push(t[n]), r = n);
			return o - 1 > r && i.push(t[o - 1]), i
		},
		clipSegment: function(t, e, i, n) {
			var r, o, a, s = n ? this._lastCode : this._getBitCode(t, i),
				l = this._getBitCode(e, i);
			for (this._lastCode = l;;) {
				if (!(s | l)) return [t, e];
				if (s & l) return !1;
				r = s || l, o = this._getEdgeIntersection(t, e, r, i), a = this._getBitCode(o, i), r === s ? (t = o, s = a) : (e = o, l = a)
			}
		},
		_getEdgeIntersection: function(t, e, i, n) {
			var o = e.x - t.x,
				a = e.y - t.y,
				s = n.min,
				l = n.max;
			return 8 & i ? new r.Point(t.x + o * (l.y - t.y) / a, l.y) : 4 & i ? new r.Point(t.x + o * (s.y - t.y) / a, s.y) : 2 & i ? new r.Point(l.x, t.y + a * (l.x - t.x) / o) : 1 & i ? new r.Point(s.x, t.y + a * (s.x - t.x) / o) : void 0
		},
		_getBitCode: function(t, e) {
			var i = 0;
			return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i
		},
		_sqDist: function(t, e) {
			var i = e.x - t.x,
				n = e.y - t.y;
			return i * i + n * n
		},
		_sqClosestPointOnSegment: function(t, e, i, n) {
			var o, a = e.x,
				s = e.y,
				l = i.x - a,
				u = i.y - s,
				c = l * l + u * u;
			return c > 0 && (o = ((t.x - a) * l + (t.y - s) * u) / c, o > 1 ? (a = i.x, s = i.y) : o > 0 && (a += l * o, s += u * o)), l = t.x - a, u = t.y - s, n ? l * l + u * u : new r.Point(a, s)
		}
	}, r.Polyline = r.Path.extend({
		initialize: function(t, e) {
			r.Path.prototype.initialize.call(this, e), this._latlngs = this._convertLatLngs(t)
		},
		options: {
			smoothFactor: 1,
			noClip: !1
		},
		projectLatlngs: function() {
			this._originalPoints = [];
			for (var t = 0, e = this._latlngs.length; e > t; t++) this._originalPoints[t] = this._map.latLngToLayerPoint(this._latlngs[t])
		},
		getPathString: function() {
			for (var t = 0, e = this._parts.length, i = ""; e > t; t++) i += this._getPathPartStr(this._parts[t]);
			return i
		},
		getLatLngs: function() {
			return this._latlngs
		},
		setLatLngs: function(t) {
			return this._latlngs = this._convertLatLngs(t), this.redraw()
		},
		addLatLng: function(t) {
			return this._latlngs.push(r.latLng(t)), this.redraw()
		},
		spliceLatLngs: function() {
			var t = [].splice.apply(this._latlngs, arguments);
			return this._convertLatLngs(this._latlngs, !0), this.redraw(), t
		},
		closestLayerPoint: function(t) {
			for (var e, i, n = 1 / 0, o = this._parts, a = null, s = 0, l = o.length; l > s; s++) for (var u = o[s], c = 1, h = u.length; h > c; c++) {
				e = u[c - 1], i = u[c];
				var d = r.LineUtil._sqClosestPointOnSegment(t, e, i, !0);
				n > d && (n = d, a = r.LineUtil._sqClosestPointOnSegment(t, e, i))
			}
			return a && (a.distance = Math.sqrt(n)), a
		},
		getBounds: function() {
			return new r.LatLngBounds(this.getLatLngs())
		},
		_convertLatLngs: function(t, e) {
			var i, n, o = e ? t : [];
			for (i = 0, n = t.length; n > i; i++) {
				if (r.Util.isArray(t[i]) && "number" != typeof t[i][0]) return;
				o[i] = r.latLng(t[i])
			}
			return o
		},
		_initEvents: function() {
			r.Path.prototype._initEvents.call(this)
		},
		_getPathPartStr: function(t) {
			for (var e, i = r.Path.VML, n = 0, o = t.length, a = ""; o > n; n++) e = t[n], i && e._round(), a += (n ? "L" : "M") + e.x + " " + e.y;
			return a
		},
		_clipPoints: function() {
			var t, e, i, n = this._originalPoints,
				o = n.length;
			if (this.options.noClip) return void(this._parts = [n]);
			this._parts = [];
			var a = this._parts,
				s = this._map._pathViewport,
				l = r.LineUtil;
			for (t = 0, e = 0; o - 1 > t; t++) i = l.clipSegment(n[t], n[t + 1], s, t), i && (a[e] = a[e] || [], a[e].push(i[0]), (i[1] !== n[t + 1] || t === o - 2) && (a[e].push(i[1]), e++))
		},
		_simplifyPoints: function() {
			for (var t = this._parts, e = r.LineUtil, i = 0, n = t.length; n > i; i++) t[i] = e.simplify(t[i], this.options.smoothFactor)
		},
		_updatePath: function() {
			this._map && (this._clipPoints(), this._simplifyPoints(), r.Path.prototype._updatePath.call(this))
		}
	}), r.polyline = function(t, e) {
		return new r.Polyline(t, e)
	}, r.PolyUtil = {}, r.PolyUtil.clipPolygon = function(t, e) {
		var i, n, o, a, s, l, u, c, h, d = [1, 4, 2, 8],
			p = r.LineUtil;
		for (n = 0, u = t.length; u > n; n++) t[n]._code = p._getBitCode(t[n], e);
		for (a = 0; 4 > a; a++) {
			for (c = d[a], i = [], n = 0, u = t.length, o = u - 1; u > n; o = n++) s = t[n], l = t[o], s._code & c ? l._code & c || (h = p._getEdgeIntersection(l, s, c, e), h._code = p._getBitCode(h, e), i.push(h)) : (l._code & c && (h = p._getEdgeIntersection(l, s, c, e), h._code = p._getBitCode(h, e), i.push(h)), i.push(s));
			t = i
		}
		return t
	}, r.Polygon = r.Polyline.extend({
		options: {
			fill: !0
		},
		initialize: function(t, e) {
			r.Polyline.prototype.initialize.call(this, t, e), this._initWithHoles(t)
		},
		_initWithHoles: function(t) {
			var e, i, n;
			if (t && r.Util.isArray(t[0]) && "number" != typeof t[0][0]) for (this._latlngs = this._convertLatLngs(t[0]), this._holes = t.slice(1), e = 0, i = this._holes.length; i > e; e++) n = this._holes[e] = this._convertLatLngs(this._holes[e]), n[0].equals(n[n.length - 1]) && n.pop();
			t = this._latlngs, t.length >= 2 && t[0].equals(t[t.length - 1]) && t.pop()
		},
		projectLatlngs: function() {
			if (r.Polyline.prototype.projectLatlngs.call(this), this._holePoints = [], this._holes) {
				var t, e, i, n;
				for (t = 0, i = this._holes.length; i > t; t++) for (this._holePoints[t] = [], e = 0, n = this._holes[t].length; n > e; e++) this._holePoints[t][e] = this._map.latLngToLayerPoint(this._holes[t][e])
			}
		},
		setLatLngs: function(t) {
			return t && r.Util.isArray(t[0]) && "number" != typeof t[0][0] ? (this._initWithHoles(t), this.redraw()) : r.Polyline.prototype.setLatLngs.call(this, t)
		},
		_clipPoints: function() {
			var t = this._originalPoints,
				e = [];
			if (this._parts = [t].concat(this._holePoints), !this.options.noClip) {
				for (var i = 0, n = this._parts.length; n > i; i++) {
					var o = r.PolyUtil.clipPolygon(this._parts[i], this._map._pathViewport);
					o.length && e.push(o)
				}
				this._parts = e
			}
		},
		_getPathPartStr: function(t) {
			var e = r.Polyline.prototype._getPathPartStr.call(this, t);
			return e + (r.Browser.svg ? "z" : "x")
		}
	}), r.polygon = function(t, e) {
		return new r.Polygon(t, e)
	}, function() {
		function t(t) {
			return r.FeatureGroup.extend({
				initialize: function(t, e) {
					this._layers = {}, this._options = e, this.setLatLngs(t)
				},
				setLatLngs: function(e) {
					var i = 0,
						n = e.length;
					for (this.eachLayer(function(t) {
						n > i ? t.setLatLngs(e[i++]) : this.removeLayer(t)
					}, this); n > i;) this.addLayer(new t(e[i++], this._options));
					return this
				},
				getLatLngs: function() {
					var t = [];
					return this.eachLayer(function(e) {
						t.push(e.getLatLngs())
					}), t
				}
			})
		}
		r.MultiPolyline = t(r.Polyline), r.MultiPolygon = t(r.Polygon), r.multiPolyline = function(t, e) {
			return new r.MultiPolyline(t, e)
		}, r.multiPolygon = function(t, e) {
			return new r.MultiPolygon(t, e)
		}
	}(), r.Rectangle = r.Polygon.extend({
		initialize: function(t, e) {
			r.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
		},
		setBounds: function(t) {
			this.setLatLngs(this._boundsToLatLngs(t))
		},
		_boundsToLatLngs: function(t) {
			return t = r.latLngBounds(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
		}
	}), r.rectangle = function(t, e) {
		return new r.Rectangle(t, e)
	}, r.Circle = r.Path.extend({
		initialize: function(t, e, i) {
			r.Path.prototype.initialize.call(this, i), this._latlng = r.latLng(t), this._mRadius = e
		},
		options: {
			fill: !0
		},
		setLatLng: function(t) {
			return this._latlng = r.latLng(t), this.redraw()
		},
		setRadius: function(t) {
			return this._mRadius = t, this.redraw()
		},
		projectLatlngs: function() {
			var t = this._getLngRadius(),
				e = this._latlng,
				i = this._map.latLngToLayerPoint([e.lat, e.lng - t]);
			this._point = this._map.latLngToLayerPoint(e), this._radius = Math.max(this._point.x - i.x, 1)
		},
		getBounds: function() {
			var t = this._getLngRadius(),
				e = this._mRadius / 40075017 * 360,
				i = this._latlng;
			return new r.LatLngBounds([i.lat - e, i.lng - t], [i.lat + e, i.lng + t])
		},
		getLatLng: function() {
			return this._latlng
		},
		getPathString: function() {
			var t = this._point,
				e = this._radius;
			return this._checkIfEmpty() ? "" : r.Browser.svg ? "M" + t.x + "," + (t.y - e) + "A" + e + "," + e + ",0,1,1," + (t.x - .1) + "," + (t.y - e) + " z" : (t._round(), e = Math.round(e), "AL " + t.x + "," + t.y + " " + e + "," + e + " 0,23592600")
		},
		getRadius: function() {
			return this._mRadius
		},
		_getLatRadius: function() {
			return this._mRadius / 40075017 * 360
		},
		_getLngRadius: function() {
			return this._getLatRadius() / Math.cos(r.LatLng.DEG_TO_RAD * this._latlng.lat)
		},
		_checkIfEmpty: function() {
			if (!this._map) return !1;
			var t = this._map._pathViewport,
				e = this._radius,
				i = this._point;
			return i.x - e > t.max.x || i.y - e > t.max.y || i.x + e < t.min.x || i.y + e < t.min.y
		}
	}), r.circle = function(t, e, i) {
		return new r.Circle(t, e, i)
	}, r.CircleMarker = r.Circle.extend({
		options: {
			radius: 10,
			weight: 2
		},
		initialize: function(t, e) {
			r.Circle.prototype.initialize.call(this, t, null, e), this._radius = this.options.radius
		},
		projectLatlngs: function() {
			this._point = this._map.latLngToLayerPoint(this._latlng)
		},
		_updateStyle: function() {
			r.Circle.prototype._updateStyle.call(this), this.setRadius(this.options.radius)
		},
		setLatLng: function(t) {
			return r.Circle.prototype.setLatLng.call(this, t), this._popup && this._popup._isOpen && this._popup.setLatLng(t), this
		},
		setRadius: function(t) {
			return this.options.radius = this._radius = t, this.redraw()
		},
		getRadius: function() {
			return this._radius
		}
	}), r.circleMarker = function(t, e) {
		return new r.CircleMarker(t, e)
	}, r.Polyline.include(r.Path.CANVAS ? {
		_containsPoint: function(t, e) {
			var i, n, o, a, s, l, u, c = this.options.weight / 2;
			for (r.Browser.touch && (c += 10), i = 0, a = this._parts.length; a > i; i++) for (u = this._parts[i], n = 0, s = u.length, o = s - 1; s > n; o = n++) if ((e || 0 !== n) && (l = r.LineUtil.pointToSegmentDistance(t, u[o], u[n]), c >= l)) return !0;
			return !1
		}
	} : {}), r.Polygon.include(r.Path.CANVAS ? {
		_containsPoint: function(t) {
			var e, i, n, o, a, s, l, u, c = !1;
			if (r.Polyline.prototype._containsPoint.call(this, t, !0)) return !0;
			for (o = 0, l = this._parts.length; l > o; o++) for (e = this._parts[o], a = 0, u = e.length, s = u - 1; u > a; s = a++) i = e[a], n = e[s], i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (c = !c);
			return c
		}
	} : {}), r.Circle.include(r.Path.CANVAS ? {
		_drawPath: function() {
			var t = this._point;
			this._ctx.beginPath(), this._ctx.arc(t.x, t.y, this._radius, 0, 2 * Math.PI, !1)
		},
		_containsPoint: function(t) {
			var e = this._point,
				i = this.options.stroke ? this.options.weight / 2 : 0;
			return t.distanceTo(e) <= this._radius + i
		}
	} : {}), r.CircleMarker.include(r.Path.CANVAS ? {
		_updateStyle: function() {
			r.Path.prototype._updateStyle.call(this)
		}
	} : {}), r.GeoJSON = r.FeatureGroup.extend({
		initialize: function(t, e) {
			r.setOptions(this, e), this._layers = {}, t && this.addData(t)
		},
		addData: function(t) {
			var e, i, n, o = r.Util.isArray(t) ? t : t.features;
			if (o) {
				for (e = 0, i = o.length; i > e; e++) n = o[e], (n.geometries || n.geometry || n.features || n.coordinates) && this.addData(o[e]);
				return this
			}
			var a = this.options;
			if (!a.filter || a.filter(t)) {
				var s = r.GeoJSON.geometryToLayer(t, a.pointToLayer, a.coordsToLatLng, a);
				return s.feature = r.GeoJSON.asFeature(t), s.defaultOptions = s.options, this.resetStyle(s), a.onEachFeature && a.onEachFeature(t, s), this.addLayer(s)
			}
		},
		resetStyle: function(t) {
			var e = this.options.style;
			e && (r.Util.extend(t.options, t.defaultOptions), this._setLayerStyle(t, e))
		},
		setStyle: function(t) {
			this.eachLayer(function(e) {
				this._setLayerStyle(e, t)
			}, this)
		},
		_setLayerStyle: function(t, e) {
			"function" == typeof e && (e = e(t.feature)), t.setStyle && t.setStyle(e)
		}
	}), r.extend(r.GeoJSON, {
		geometryToLayer: function(t, e, i, n) {
			var o, a, s, l, u = "Feature" === t.type ? t.geometry : t,
				c = u.coordinates,
				h = [];
			switch (i = i || this.coordsToLatLng, u.type) {
			case "Point":
				return o = i(c), e ? e(t, o) : new r.Marker(o);
			case "MultiPoint":
				for (s = 0, l = c.length; l > s; s++) o = i(c[s]), h.push(e ? e(t, o) : new r.Marker(o));
				return new r.FeatureGroup(h);
			case "LineString":
				return a = this.coordsToLatLngs(c, 0, i), new r.Polyline(a, n);
			case "Polygon":
				if (2 === c.length && !c[1].length) throw new Error("Invalid GeoJSON object.");
				return a = this.coordsToLatLngs(c, 1, i), new r.Polygon(a, n);
			case "MultiLineString":
				return a = this.coordsToLatLngs(c, 1, i), new r.MultiPolyline(a, n);
			case "MultiPolygon":
				return a = this.coordsToLatLngs(c, 2, i), new r.MultiPolygon(a, n);
			case "GeometryCollection":
				for (s = 0, l = u.geometries.length; l > s; s++) h.push(this.geometryToLayer({
					geometry: u.geometries[s],
					type: "Feature",
					properties: t.properties
				}, e, i, n));
				return new r.FeatureGroup(h);
			default:
				throw new Error("Invalid GeoJSON object.")
			}
		},
		coordsToLatLng: function(t) {
			return new r.LatLng(t[1], t[0], t[2])
		},
		coordsToLatLngs: function(t, e, i) {
			var n, r, o, a = [];
			for (r = 0, o = t.length; o > r; r++) n = e ? this.coordsToLatLngs(t[r], e - 1, i) : (i || this.coordsToLatLng)(t[r]), a.push(n);
			return a
		},
		latLngToCoords: function(t) {
			var e = [t.lng, t.lat];
			return t.alt !== i && e.push(t.alt), e
		},
		latLngsToCoords: function(t) {
			for (var e = [], i = 0, n = t.length; n > i; i++) e.push(r.GeoJSON.latLngToCoords(t[i]));
			return e
		},
		getFeature: function(t, e) {
			return t.feature ? r.extend({}, t.feature, {
				geometry: e
			}) : r.GeoJSON.asFeature(e)
		},
		asFeature: function(t) {
			return "Feature" === t.type ? t : {
				type: "Feature",
				properties: {},
				geometry: t
			}
		}
	});
	var a = {
		toGeoJSON: function() {
			return r.GeoJSON.getFeature(this, {
				type: "Point",
				coordinates: r.GeoJSON.latLngToCoords(this.getLatLng())
			})
		}
	};
	r.Marker.include(a), r.Circle.include(a), r.CircleMarker.include(a), r.Polyline.include({
		toGeoJSON: function() {
			return r.GeoJSON.getFeature(this, {
				type: "LineString",
				coordinates: r.GeoJSON.latLngsToCoords(this.getLatLngs())
			})
		}
	}), r.Polygon.include({
		toGeoJSON: function() {
			var t, e, i, n = [r.GeoJSON.latLngsToCoords(this.getLatLngs())];
			if (n[0].push(n[0][0]), this._holes) for (t = 0, e = this._holes.length; e > t; t++) i = r.GeoJSON.latLngsToCoords(this._holes[t]), i.push(i[0]), n.push(i);
			return r.GeoJSON.getFeature(this, {
				type: "Polygon",
				coordinates: n
			})
		}
	}), function() {
		function t(t) {
			return function() {
				var e = [];
				return this.eachLayer(function(t) {
					e.push(t.toGeoJSON().geometry.coordinates)
				}), r.GeoJSON.getFeature(this, {
					type: t,
					coordinates: e
				})
			}
		}
		r.MultiPolyline.include({
			toGeoJSON: t("MultiLineString")
		}), r.MultiPolygon.include({
			toGeoJSON: t("MultiPolygon")
		}), r.LayerGroup.include({
			toGeoJSON: function() {
				var e, i = this.feature && this.feature.geometry,
					n = [];
				if (i && "MultiPoint" === i.type) return t("MultiPoint").call(this);
				var o = i && "GeometryCollection" === i.type;
				return this.eachLayer(function(t) {
					t.toGeoJSON && (e = t.toGeoJSON(), n.push(o ? e.geometry : r.GeoJSON.asFeature(e)))
				}), o ? r.GeoJSON.getFeature(this, {
					geometries: n,
					type: "GeometryCollection"
				}) : {
					type: "FeatureCollection",
					features: n
				}
			}
		})
	}(), r.geoJson = function(t, e) {
		return new r.GeoJSON(t, e)
	}, r.DomEvent = {
		addListener: function(t, e, i, n) {
			var o, a, s, l = r.stamp(i),
				u = "_leaflet_" + e + l;
			return t[u] ? this : (o = function(e) {
				return i.call(n || t, e || r.DomEvent._getEvent())
			}, r.Browser.pointer && 0 === e.indexOf("touch") ? this.addPointerListener(t, e, o, l) : (r.Browser.touch && "dblclick" === e && this.addDoubleTapListener && this.addDoubleTapListener(t, o, l), "addEventListener" in t ? "mousewheel" === e ? (t.addEventListener("DOMMouseScroll", o, !1), t.addEventListener(e, o, !1)) : "mouseenter" === e || "mouseleave" === e ? (a = o, s = "mouseenter" === e ? "mouseover" : "mouseout", o = function(e) {
				return r.DomEvent._checkMouse(t, e) ? a(e) : void 0
			}, t.addEventListener(s, o, !1)) : "click" === e && r.Browser.android ? (a = o, o = function(t) {
				return r.DomEvent._filterClick(t, a)
			}, t.addEventListener(e, o, !1)) : t.addEventListener(e, o, !1) : "attachEvent" in t && t.attachEvent("on" + e, o), t[u] = o, this))
		},
		removeListener: function(t, e, i) {
			var n = r.stamp(i),
				o = "_leaflet_" + e + n,
				a = t[o];
			return a ? (r.Browser.pointer && 0 === e.indexOf("touch") ? this.removePointerListener(t, e, n) : r.Browser.touch && "dblclick" === e && this.removeDoubleTapListener ? this.removeDoubleTapListener(t, n) : "removeEventListener" in t ? "mousewheel" === e ? (t.removeEventListener("DOMMouseScroll", a, !1), t.removeEventListener(e, a, !1)) : "mouseenter" === e || "mouseleave" === e ? t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseout", a, !1) : t.removeEventListener(e, a, !1) : "detachEvent" in t && t.detachEvent("on" + e, a), t[o] = null, this) : this
		},
		stopPropagation: function(t) {
			return t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, r.DomEvent._skipped(t), this
		},
		disableScrollPropagation: function(t) {
			var e = r.DomEvent.stopPropagation;
			return r.DomEvent.on(t, "mousewheel", e).on(t, "MozMousePixelScroll", e)
		},
		disableClickPropagation: function(t) {
			for (var e = r.DomEvent.stopPropagation, i = r.Draggable.START.length - 1; i >= 0; i--) r.DomEvent.on(t, r.Draggable.START[i], e);
			return r.DomEvent.on(t, "click", r.DomEvent._fakeStop).on(t, "dblclick", e)
		},
		preventDefault: function(t) {
			return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
		},
		stop: function(t) {
			return r.DomEvent.preventDefault(t).stopPropagation(t)
		},
		getMousePosition: function(t, e) {
			if (!e) return new r.Point(t.clientX, t.clientY);
			var i = e.getBoundingClientRect();
			return new r.Point(t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop)
		},
		getWheelDelta: function(t) {
			var e = 0;
			return t.wheelDelta && (e = t.wheelDelta / 120), t.detail && (e = -t.detail / 3), e
		},
		_skipEvents: {},
		_fakeStop: function(t) {
			r.DomEvent._skipEvents[t.type] = !0
		},
		_skipped: function(t) {
			var e = this._skipEvents[t.type];
			return this._skipEvents[t.type] = !1, e
		},
		_checkMouse: function(t, e) {
			var i = e.relatedTarget;
			if (!i) return !0;
			try {
				for (; i && i !== t;) i = i.parentNode
			} catch (n) {
				return !1
			}
			return i !== t
		},
		_getEvent: function() {
			var e = t.event;
			if (!e) for (var i = arguments.callee.caller; i && (e = i.arguments[0], !e || t.Event !== e.constructor);) i = i.caller;
			return e
		},
		_filterClick: function(t, e) {
			var i = t.timeStamp || t.originalEvent.timeStamp,
				n = r.DomEvent._lastClick && i - r.DomEvent._lastClick;
			return n && n > 100 && 500 > n || t.target._simulatedClick && !t._simulated ? void r.DomEvent.stop(t) : (r.DomEvent._lastClick = i, e(t))
		}
	}, r.DomEvent.on = r.DomEvent.addListener, r.DomEvent.off = r.DomEvent.removeListener, r.Draggable = r.Class.extend({
		includes: r.Mixin.Events,
		statics: {
			START: r.Browser.touch ? ["touchstart", "mousedown"] : ["mousedown"],
			END: {
				mousedown: "mouseup",
				touchstart: "touchend",
				pointerdown: "touchend",
				MSPointerDown: "touchend"
			},
			MOVE: {
				mousedown: "mousemove",
				touchstart: "touchmove",
				pointerdown: "touchmove",
				MSPointerDown: "touchmove"
			}
		},
		initialize: function(t, e) {
			this._element = t, this._dragStartTarget = e || t
		},
		enable: function() {
			if (!this._enabled) {
				for (var t = r.Draggable.START.length - 1; t >= 0; t--) r.DomEvent.on(this._dragStartTarget, r.Draggable.START[t], this._onDown, this);
				this._enabled = !0
			}
		},
		disable: function() {
			if (this._enabled) {
				for (var t = r.Draggable.START.length - 1; t >= 0; t--) r.DomEvent.off(this._dragStartTarget, r.Draggable.START[t], this._onDown, this);
				this._enabled = !1, this._moved = !1
			}
		},
		_onDown: function(t) {
			if (this._moved = !1, !t.shiftKey && (1 === t.which || 1 === t.button || t.touches) && (r.DomEvent.stopPropagation(t), !r.Draggable._disabled && (r.DomUtil.disableImageDrag(), r.DomUtil.disableTextSelection(), !this._moving))) {
				var i = t.touches ? t.touches[0] : t;
				this._startPoint = new r.Point(i.clientX, i.clientY), this._startPos = this._newPos = r.DomUtil.getPosition(this._element), r.DomEvent.on(e, r.Draggable.MOVE[t.type], this._onMove, this).on(e, r.Draggable.END[t.type], this._onUp, this)
			}
		},
		_onMove: function(t) {
			if (t.touches && t.touches.length > 1) return void(this._moved = !0);
			var i = t.touches && 1 === t.touches.length ? t.touches[0] : t,
				n = new r.Point(i.clientX, i.clientY),
				o = n.subtract(this._startPoint);
			(o.x || o.y) && (r.Browser.touch && Math.abs(o.x) + Math.abs(o.y) < 3 || (r.DomEvent.preventDefault(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = r.DomUtil.getPosition(this._element).subtract(o), r.DomUtil.addClass(e.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, r.DomUtil.addClass(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(o), this._moving = !0, r.Util.cancelAnimFrame(this._animRequest), this._animRequest = r.Util.requestAnimFrame(this._updatePosition, this, !0, this._dragStartTarget)))
		},
		_updatePosition: function() {
			this.fire("predrag"), r.DomUtil.setPosition(this._element, this._newPos), this.fire("drag")
		},
		_onUp: function() {
			r.DomUtil.removeClass(e.body, "leaflet-dragging"), this._lastTarget && (r.DomUtil.removeClass(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null);
			for (var t in r.Draggable.MOVE) r.DomEvent.off(e, r.Draggable.MOVE[t], this._onMove).off(e, r.Draggable.END[t], this._onUp);
			r.DomUtil.enableImageDrag(), r.DomUtil.enableTextSelection(), this._moved && this._moving && (r.Util.cancelAnimFrame(this._animRequest), this.fire("dragend", {
				distance: this._newPos.distanceTo(this._startPos)
			})), this._moving = !1
		}
	}), r.Handler = r.Class.extend({
		initialize: function(t) {
			this._map = t
		},
		enable: function() {
			this._enabled || (this._enabled = !0, this.addHooks())
		},
		disable: function() {
			this._enabled && (this._enabled = !1, this.removeHooks())
		},
		enabled: function() {
			return !!this._enabled
		}
	}), r.Map.mergeOptions({
		dragging: !0,
		inertia: !r.Browser.android23,
		inertiaDeceleration: 3400,
		inertiaMaxSpeed: 1 / 0,
		inertiaThreshold: r.Browser.touch ? 32 : 18,
		easeLinearity: .25,
		worldCopyJump: !1
	}), r.Map.Drag = r.Handler.extend({
		addHooks: function() {
			if (!this._draggable) {
				var t = this._map;
				this._draggable = new r.Draggable(t._mapPane, t._container), this._draggable.on({
					dragstart: this._onDragStart,
					drag: this._onDrag,
					dragend: this._onDragEnd
				}, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDrag, this), t.on("viewreset", this._onViewReset, this), t.whenReady(this._onViewReset, this))
			}
			this._draggable.enable()
		},
		removeHooks: function() {
			this._draggable.disable()
		},
		moved: function() {
			return this._draggable && this._draggable._moved
		},
		_onDragStart: function() {
			var t = this._map;
			t._panAnim && t._panAnim.stop(), t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
		},
		_onDrag: function() {
			if (this._map.options.inertia) {
				var t = this._lastTime = +new Date,
					e = this._lastPos = this._draggable._newPos;
				this._positions.push(e), this._times.push(t), t - this._times[0] > 200 && (this._positions.shift(), this._times.shift())
			}
			this._map.fire("move").fire("drag")
		},
		_onViewReset: function() {
			var t = this._map.getSize()._divideBy(2),
				e = this._map.latLngToLayerPoint([0, 0]);
			this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.project([0, 180]).x
		},
		_onPreDrag: function() {
			var t = this._worldWidth,
				e = Math.round(t / 2),
				i = this._initialWorldOffset,
				n = this._draggable._newPos.x,
				r = (n - e + i) % t + e - i,
				o = (n + e + i) % t - e - i,
				a = Math.abs(r + i) < Math.abs(o + i) ? r : o;
			this._draggable._newPos.x = a
		},
		_onDragEnd: function(t) {
			var e = this._map,
				i = e.options,
				n = +new Date - this._lastTime,
				o = !i.inertia || n > i.inertiaThreshold || !this._positions[0];
			if (e.fire("dragend", t), o) e.fire("moveend");
			else {
				var a = this._lastPos.subtract(this._positions[0]),
					s = (this._lastTime + n - this._times[0]) / 1e3,
					l = i.easeLinearity,
					u = a.multiplyBy(l / s),
					c = u.distanceTo([0, 0]),
					h = Math.min(i.inertiaMaxSpeed, c),
					d = u.multiplyBy(h / c),
					p = h / (i.inertiaDeceleration * l),
					f = d.multiplyBy(-p / 2).round();
				f.x && f.y ? (f = e._limitOffset(f, e.options.maxBounds), r.Util.requestAnimFrame(function() {
					e.panBy(f, {
						duration: p,
						easeLinearity: l,
						noMoveStart: !0
					})
				})) : e.fire("moveend")
			}
		}
	}), r.Map.addInitHook("addHandler", "dragging", r.Map.Drag), r.Map.mergeOptions({
		doubleClickZoom: !0
	}), r.Map.DoubleClickZoom = r.Handler.extend({
		addHooks: function() {
			this._map.on("dblclick", this._onDoubleClick, this)
		},
		removeHooks: function() {
			this._map.off("dblclick", this._onDoubleClick, this)
		},
		_onDoubleClick: function(t) {
			var e = this._map,
				i = e.getZoom() + (t.originalEvent.shiftKey ? -1 : 1);
			"center" === e.options.doubleClickZoom ? e.setZoom(i) : e.setZoomAround(t.containerPoint, i)
		}
	}), r.Map.addInitHook("addHandler", "doubleClickZoom", r.Map.DoubleClickZoom), r.Map.mergeOptions({
		scrollWheelZoom: !0
	}), r.Map.ScrollWheelZoom = r.Handler.extend({
		addHooks: function() {
			r.DomEvent.on(this._map._container, "mousewheel", this._onWheelScroll, this), r.DomEvent.on(this._map._container, "MozMousePixelScroll", r.DomEvent.preventDefault), this._delta = 0
		},
		removeHooks: function() {
			r.DomEvent.off(this._map._container, "mousewheel", this._onWheelScroll), r.DomEvent.off(this._map._container, "MozMousePixelScroll", r.DomEvent.preventDefault)
		},
		_onWheelScroll: function(t) {
			var e = r.DomEvent.getWheelDelta(t);
			this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
			var i = Math.max(40 - (+new Date - this._startTime), 0);
			clearTimeout(this._timer), this._timer = setTimeout(r.bind(this._performZoom, this), i), r.DomEvent.preventDefault(t), r.DomEvent.stopPropagation(t)
		},
		_performZoom: function() {
			var t = this._map,
				e = this._delta,
				i = t.getZoom();
			e = e > 0 ? Math.ceil(e) : Math.floor(e), e = Math.max(Math.min(e, 4), -4), e = t._limitZoom(i + e) - i, this._delta = 0, this._startTime = null, e && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + e) : t.setZoomAround(this._lastMousePos, i + e))
		}
	}), r.Map.addInitHook("addHandler", "scrollWheelZoom", r.Map.ScrollWheelZoom), r.extend(r.DomEvent, {
		_touchstart: r.Browser.msPointer ? "MSPointerDown" : r.Browser.pointer ? "pointerdown" : "touchstart",
		_touchend: r.Browser.msPointer ? "MSPointerUp" : r.Browser.pointer ? "pointerup" : "touchend",
		addDoubleTapListener: function(t, i, n) {
			function o(t) {
				var e;
				if (r.Browser.pointer ? (f.push(t.pointerId), e = f.length) : e = t.touches.length, !(e > 1)) {
					var i = Date.now(),
						n = i - (s || i);
					l = t.touches ? t.touches[0] : t, u = n > 0 && c >= n, s = i
				}
			}
			function a(t) {
				if (r.Browser.pointer) {
					var e = f.indexOf(t.pointerId);
					if (-1 === e) return;
					f.splice(e, 1)
				}
				if (u) {
					if (r.Browser.pointer) {
						var n, o = {};
						for (var a in l) n = l[a], "function" == typeof n ? o[a] = n.bind(l) : o[a] = n;
						l = o
					}
					l.type = "dblclick", i(l), s = null
				}
			}
			var s, l, u = !1,
				c = 250,
				h = "_leaflet_",
				d = this._touchstart,
				p = this._touchend,
				f = [];
			t[h + d + n] = o, t[h + p + n] = a;
			var m = r.Browser.pointer ? e.documentElement : t;
			return t.addEventListener(d, o, !1), m.addEventListener(p, a, !1), r.Browser.pointer && m.addEventListener(r.DomEvent.POINTER_CANCEL, a, !1), this
		},
		removeDoubleTapListener: function(t, i) {
			var n = "_leaflet_";
			return t.removeEventListener(this._touchstart, t[n + this._touchstart + i], !1), (r.Browser.pointer ? e.documentElement : t).removeEventListener(this._touchend, t[n + this._touchend + i], !1), r.Browser.pointer && e.documentElement.removeEventListener(r.DomEvent.POINTER_CANCEL, t[n + this._touchend + i], !1), this
		}
	}), r.extend(r.DomEvent, {
		POINTER_DOWN: r.Browser.msPointer ? "MSPointerDown" : "pointerdown",
		POINTER_MOVE: r.Browser.msPointer ? "MSPointerMove" : "pointermove",
		POINTER_UP: r.Browser.msPointer ? "MSPointerUp" : "pointerup",
		POINTER_CANCEL: r.Browser.msPointer ? "MSPointerCancel" : "pointercancel",
		_pointers: [],
		_pointerDocumentListener: !1,
		addPointerListener: function(t, e, i, n) {
			switch (e) {
			case "touchstart":
				return this.addPointerListenerStart(t, e, i, n);
			case "touchend":
				return this.addPointerListenerEnd(t, e, i, n);
			case "touchmove":
				return this.addPointerListenerMove(t, e, i, n);
			default:
				throw "Unknown touch event type"
			}
		},
		addPointerListenerStart: function(t, i, n, o) {
			var a = "_leaflet_",
				s = this._pointers,
				l = function(t) {
					"mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE && r.DomEvent.preventDefault(t);
					for (var e = !1, i = 0; i < s.length; i++) if (s[i].pointerId === t.pointerId) {
						e = !0;
						break
					}
					e || s.push(t), t.touches = s.slice(), t.changedTouches = [t], n(t)
				};
			if (t[a + "touchstart" + o] = l, t.addEventListener(this.POINTER_DOWN, l, !1), !this._pointerDocumentListener) {
				var u = function(t) {
						for (var e = 0; e < s.length; e++) if (s[e].pointerId === t.pointerId) {
							s.splice(e, 1);
							break
						}
					};
				e.documentElement.addEventListener(this.POINTER_UP, u, !1), e.documentElement.addEventListener(this.POINTER_CANCEL, u, !1), this._pointerDocumentListener = !0
			}
			return this
		},
		addPointerListenerMove: function(t, e, i, n) {
			function r(t) {
				if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) {
					for (var e = 0; e < a.length; e++) if (a[e].pointerId === t.pointerId) {
						a[e] = t;
						break
					}
					t.touches = a.slice(), t.changedTouches = [t], i(t)
				}
			}
			var o = "_leaflet_",
				a = this._pointers;
			return t[o + "touchmove" + n] = r, t.addEventListener(this.POINTER_MOVE, r, !1), this
		},
		addPointerListenerEnd: function(t, e, i, n) {
			var r = "_leaflet_",
				o = this._pointers,
				a = function(t) {
					for (var e = 0; e < o.length; e++) if (o[e].pointerId === t.pointerId) {
						o.splice(e, 1);
						break
					}
					t.touches = o.slice(), t.changedTouches = [t], i(t)
				};
			return t[r + "touchend" + n] = a, t.addEventListener(this.POINTER_UP, a, !1), t.addEventListener(this.POINTER_CANCEL, a, !1), this
		},
		removePointerListener: function(t, e, i) {
			var n = "_leaflet_",
				r = t[n + e + i];
			switch (e) {
			case "touchstart":
				t.removeEventListener(this.POINTER_DOWN, r, !1);
				break;
			case "touchmove":
				t.removeEventListener(this.POINTER_MOVE, r, !1);
				break;
			case "touchend":
				t.removeEventListener(this.POINTER_UP, r, !1), t.removeEventListener(this.POINTER_CANCEL, r, !1)
			}
			return this
		}
	}), r.Map.mergeOptions({
		touchZoom: r.Browser.touch && !r.Browser.android23,
		bounceAtZoomLimits: !0
	}), r.Map.TouchZoom = r.Handler.extend({
		addHooks: function() {
			r.DomEvent.on(this._map._container, "touchstart", this._onTouchStart, this)
		},
		removeHooks: function() {
			r.DomEvent.off(this._map._container, "touchstart", this._onTouchStart, this)
		},
		_onTouchStart: function(t) {
			var i = this._map;
			if (t.touches && 2 === t.touches.length && !i._animatingZoom && !this._zooming) {
				var n = i.mouseEventToLayerPoint(t.touches[0]),
					o = i.mouseEventToLayerPoint(t.touches[1]),
					a = i._getCenterLayerPoint();
				this._startCenter = n.add(o)._divideBy(2), this._startDist = n.distanceTo(o), this._moved = !1, this._zooming = !0, this._centerOffset = a.subtract(this._startCenter), i._panAnim && i._panAnim.stop(), r.DomEvent.on(e, "touchmove", this._onTouchMove, this).on(e, "touchend", this._onTouchEnd, this), r.DomEvent.preventDefault(t)
			}
		},
		_onTouchMove: function(t) {
			var e = this._map;
			if (t.touches && 2 === t.touches.length && this._zooming) {
				var i = e.mouseEventToLayerPoint(t.touches[0]),
					n = e.mouseEventToLayerPoint(t.touches[1]);
				this._scale = i.distanceTo(n) / this._startDist, this._delta = i._add(n)._divideBy(2)._subtract(this._startCenter), 1 !== this._scale && (e.options.bounceAtZoomLimits || !(e.getZoom() === e.getMinZoom() && this._scale < 1 || e.getZoom() === e.getMaxZoom() && this._scale > 1)) && (this._moved || (r.DomUtil.addClass(e._mapPane, "leaflet-touching"), e.fire("movestart").fire("zoomstart"), this._moved = !0), r.Util.cancelAnimFrame(this._animRequest), this._animRequest = r.Util.requestAnimFrame(this._updateOnMove, this, !0, this._map._container), r.DomEvent.preventDefault(t))
			}
		},
		_updateOnMove: function() {
			var t = this._map,
				e = this._getScaleOrigin(),
				i = t.layerPointToLatLng(e),
				n = t.getScaleZoom(this._scale);
			t._animateZoom(i, n, this._startCenter, this._scale, this._delta, !1, !0)
		},
		_onTouchEnd: function() {
			if (!this._moved || !this._zooming) return void(this._zooming = !1);
			var t = this._map;
			this._zooming = !1, r.DomUtil.removeClass(t._mapPane, "leaflet-touching"), r.Util.cancelAnimFrame(this._animRequest), r.DomEvent.off(e, "touchmove", this._onTouchMove).off(e, "touchend", this._onTouchEnd);
			var i = this._getScaleOrigin(),
				n = t.layerPointToLatLng(i),
				o = t.getZoom(),
				a = t.getScaleZoom(this._scale) - o,
				s = a > 0 ? Math.ceil(a) : Math.floor(a),
				l = t._limitZoom(o + s),
				u = t.getZoomScale(l) / this._scale;
			t._animateZoom(n, l, i, u)
		},
		_getScaleOrigin: function() {
			var t = this._centerOffset.subtract(this._delta).divideBy(this._scale);
			return this._startCenter.add(t)
		}
	}), r.Map.addInitHook("addHandler", "touchZoom", r.Map.TouchZoom), r.Map.mergeOptions({
		tap: !0,
		tapTolerance: 15
	}), r.Map.Tap = r.Handler.extend({
		addHooks: function() {
			r.DomEvent.on(this._map._container, "touchstart", this._onDown, this)
		},
		removeHooks: function() {
			r.DomEvent.off(this._map._container, "touchstart", this._onDown, this)
		},
		_onDown: function(t) {
			if (t.touches) {
				if (r.DomEvent.preventDefault(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
				var i = t.touches[0],
					n = i.target;
				this._startPos = this._newPos = new r.Point(i.clientX, i.clientY), n.tagName && "a" === n.tagName.toLowerCase() && r.DomUtil.addClass(n, "leaflet-active"), this._holdTimeout = setTimeout(r.bind(function() {
					this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", i))
				}, this), 1e3), r.DomEvent.on(e, "touchmove", this._onMove, this).on(e, "touchend", this._onUp, this)
			}
		},
		_onUp: function(t) {
			if (clearTimeout(this._holdTimeout), r.DomEvent.off(e, "touchmove", this._onMove, this).off(e, "touchend", this._onUp, this), this._fireClick && t && t.changedTouches) {
				var i = t.changedTouches[0],
					n = i.target;
				n && n.tagName && "a" === n.tagName.toLowerCase() && r.DomUtil.removeClass(n, "leaflet-active"), this._isTapValid() && this._simulateEvent("click", i)
			}
		},
		_isTapValid: function() {
			return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
		},
		_onMove: function(t) {
			var e = t.touches[0];
			this._newPos = new r.Point(e.clientX, e.clientY)
		},
		_simulateEvent: function(i, n) {
			var r = e.createEvent("MouseEvents");
			r._simulated = !0, n.target._simulatedClick = !0, r.initMouseEvent(i, !0, !0, t, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), n.target.dispatchEvent(r)
		}
	}), r.Browser.touch && !r.Browser.pointer && r.Map.addInitHook("addHandler", "tap", r.Map.Tap), r.Map.mergeOptions({
		boxZoom: !0
	}), r.Map.BoxZoom = r.Handler.extend({
		initialize: function(t) {
			this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._moved = !1
		},
		addHooks: function() {
			r.DomEvent.on(this._container, "mousedown", this._onMouseDown, this)
		},
		removeHooks: function() {
			r.DomEvent.off(this._container, "mousedown", this._onMouseDown), this._moved = !1
		},
		moved: function() {
			return this._moved
		},
		_onMouseDown: function(t) {
			return this._moved = !1, !t.shiftKey || 1 !== t.which && 1 !== t.button ? !1 : (r.DomUtil.disableTextSelection(), r.DomUtil.disableImageDrag(), this._startLayerPoint = this._map.mouseEventToLayerPoint(t), void r.DomEvent.on(e, "mousemove", this._onMouseMove, this).on(e, "mouseup", this._onMouseUp, this).on(e, "keydown", this._onKeyDown, this))
		},
		_onMouseMove: function(t) {
			this._moved || (this._box = r.DomUtil.create("div", "leaflet-zoom-box", this._pane), r.DomUtil.setPosition(this._box, this._startLayerPoint), this._container.style.cursor = "crosshair", this._map.fire("boxzoomstart"));
			var e = this._startLayerPoint,
				i = this._box,
				n = this._map.mouseEventToLayerPoint(t),
				o = n.subtract(e),
				a = new r.Point(Math.min(n.x, e.x), Math.min(n.y, e.y));
			r.DomUtil.setPosition(i, a), this._moved = !0, i.style.width = Math.max(0, Math.abs(o.x) - 4) + "px", i.style.height = Math.max(0, Math.abs(o.y) - 4) + "px"
		},
		_finish: function() {
			this._moved && (this._pane.removeChild(this._box), this._container.style.cursor = ""), r.DomUtil.enableTextSelection(), r.DomUtil.enableImageDrag(), r.DomEvent.off(e, "mousemove", this._onMouseMove).off(e, "mouseup", this._onMouseUp).off(e, "keydown", this._onKeyDown)
		},
		_onMouseUp: function(t) {
			this._finish();
			var e = this._map,
				i = e.mouseEventToLayerPoint(t);
			if (!this._startLayerPoint.equals(i)) {
				var n = new r.LatLngBounds(e.layerPointToLatLng(this._startLayerPoint), e.layerPointToLatLng(i));
				e.fitBounds(n), e.fire("boxzoomend", {
					boxZoomBounds: n
				})
			}
		},
		_onKeyDown: function(t) {
			27 === t.keyCode && this._finish()
		}
	}), r.Map.addInitHook("addHandler", "boxZoom", r.Map.BoxZoom), r.Map.mergeOptions({
		keyboard: !0,
		keyboardPanOffset: 80,
		keyboardZoomOffset: 1
	}), r.Map.Keyboard = r.Handler.extend({
		keyCodes: {
			left: [37],
			right: [39],
			down: [40],
			up: [38],
			zoomIn: [187, 107, 61, 171],
			zoomOut: [189, 109, 173]
		},
		initialize: function(t) {
			this._map = t, this._setPanOffset(t.options.keyboardPanOffset), this._setZoomOffset(t.options.keyboardZoomOffset)
		},
		addHooks: function() {
			var t = this._map._container; - 1 === t.tabIndex && (t.tabIndex = "0"), r.DomEvent.on(t, "focus", this._onFocus, this).on(t, "blur", this._onBlur, this).on(t, "mousedown", this._onMouseDown, this), this._map.on("focus", this._addHooks, this).on("blur", this._removeHooks, this)
		},
		removeHooks: function() {
			this._removeHooks();
			var t = this._map._container;
			r.DomEvent.off(t, "focus", this._onFocus, this).off(t, "blur", this._onBlur, this).off(t, "mousedown", this._onMouseDown, this), this._map.off("focus", this._addHooks, this).off("blur", this._removeHooks, this)
		},
		_onMouseDown: function() {
			if (!this._focused) {
				var i = e.body,
					n = e.documentElement,
					r = i.scrollTop || n.scrollTop,
					o = i.scrollLeft || n.scrollLeft;
				this._map._container.focus(), t.scrollTo(o, r)
			}
		},
		_onFocus: function() {
			this._focused = !0, this._map.fire("focus")
		},
		_onBlur: function() {
			this._focused = !1, this._map.fire("blur")
		},
		_setPanOffset: function(t) {
			var e, i, n = this._panKeys = {},
				r = this.keyCodes;
			for (e = 0, i = r.left.length; i > e; e++) n[r.left[e]] = [-1 * t, 0];
			for (e = 0, i = r.right.length; i > e; e++) n[r.right[e]] = [t, 0];
			for (e = 0, i = r.down.length; i > e; e++) n[r.down[e]] = [0, t];
			for (e = 0, i = r.up.length; i > e; e++) n[r.up[e]] = [0, -1 * t]
		},
		_setZoomOffset: function(t) {
			var e, i, n = this._zoomKeys = {},
				r = this.keyCodes;
			for (e = 0, i = r.zoomIn.length; i > e; e++) n[r.zoomIn[e]] = t;
			for (e = 0, i = r.zoomOut.length; i > e; e++) n[r.zoomOut[e]] = -t
		},
		_addHooks: function() {
			r.DomEvent.on(e, "keydown", this._onKeyDown, this)
		},
		_removeHooks: function() {
			r.DomEvent.off(e, "keydown", this._onKeyDown, this)
		},
		_onKeyDown: function(t) {
			var e = t.keyCode,
				i = this._map;
			if (e in this._panKeys) {
				if (i._panAnim && i._panAnim._inProgress) return;
				i.panBy(this._panKeys[e]), i.options.maxBounds && i.panInsideBounds(i.options.maxBounds)
			} else {
				if (!(e in this._zoomKeys)) return;
				i.setZoom(i.getZoom() + this._zoomKeys[e])
			}
			r.DomEvent.stop(t)
		}
	}), r.Map.addInitHook("addHandler", "keyboard", r.Map.Keyboard), r.Handler.MarkerDrag = r.Handler.extend({
		initialize: function(t) {
			this._marker = t
		},
		addHooks: function() {
			var t = this._marker._icon;
			this._draggable || (this._draggable = new r.Draggable(t, t)), this._draggable.on("dragstart", this._onDragStart, this).on("drag", this._onDrag, this).on("dragend", this._onDragEnd, this), this._draggable.enable(), r.DomUtil.addClass(this._marker._icon, "leaflet-marker-draggable")
		},
		removeHooks: function() {
			this._draggable.off("dragstart", this._onDragStart, this).off("drag", this._onDrag, this).off("dragend", this._onDragEnd, this), this._draggable.disable(), r.DomUtil.removeClass(this._marker._icon, "leaflet-marker-draggable")
		},
		moved: function() {
			return this._draggable && this._draggable._moved
		},
		_onDragStart: function() {
			this._marker.closePopup().fire("movestart").fire("dragstart")
		},
		_onDrag: function() {
			var t = this._marker,
				e = t._shadow,
				i = r.DomUtil.getPosition(t._icon),
				n = t._map.layerPointToLatLng(i);
			e && r.DomUtil.setPosition(e, i), t._latlng = n, t.fire("move", {
				latlng: n
			}).fire("drag")
		},
		_onDragEnd: function(t) {
			this._marker.fire("moveend").fire("dragend", t)
		}
	}), r.Control = r.Class.extend({
		options: {
			position: "topright"
		},
		initialize: function(t) {
			r.setOptions(this, t)
		},
		getPosition: function() {
			return this.options.position
		},
		setPosition: function(t) {
			var e = this._map;
			return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this
		},
		getContainer: function() {
			return this._container
		},
		addTo: function(t) {
			this._map = t;
			var e = this._container = this.onAdd(t),
				i = this.getPosition(),
				n = t._controlCorners[i];
			return r.DomUtil.addClass(e, "leaflet-control"), -1 !== i.indexOf("bottom") ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this
		},
		removeFrom: function(t) {
			var e = this.getPosition(),
				i = t._controlCorners[e];
			return i.removeChild(this._container), this._map = null, this.onRemove && this.onRemove(t), this
		},
		_refocusOnMap: function() {
			this._map && this._map.getContainer().focus()
		}
	}), r.control = function(t) {
		return new r.Control(t)
	}, r.Map.include({
		addControl: function(t) {
			return t.addTo(this), this
		},
		removeControl: function(t) {
			return t.removeFrom(this), this
		},
		_initControlPos: function() {
			function t(t, o) {
				var a = i + t + " " + i + o;
				e[t + o] = r.DomUtil.create("div", a, n)
			}
			var e = this._controlCorners = {},
				i = "leaflet-",
				n = this._controlContainer = r.DomUtil.create("div", i + "control-container", this._container);
			t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right")
		},
		_clearControlPos: function() {
			this._container.removeChild(this._controlContainer)
		}
	}), r.Control.Zoom = r.Control.extend({
		options: {
			position: "topleft",
			zoomInText: "+",
			zoomInTitle: "Zoom in",
			zoomOutText: "-",
			zoomOutTitle: "Zoom out"
		},
		onAdd: function(t) {
			var e = "leaflet-control-zoom",
				i = r.DomUtil.create("div", e + " leaflet-bar");
			return this._map = t, this._zoomInButton = this._createButton(this.options.zoomInText, this.options.zoomInTitle, e + "-in", i, this._zoomIn, this), this._zoomOutButton = this._createButton(this.options.zoomOutText, this.options.zoomOutTitle, e + "-out", i, this._zoomOut, this), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i
		},
		onRemove: function(t) {
			t.off("zoomend zoomlevelschange", this._updateDisabled, this)
		},
		_zoomIn: function(t) {
			this._map.zoomIn(t.shiftKey ? 3 : 1)
		},
		_zoomOut: function(t) {
			this._map.zoomOut(t.shiftKey ? 3 : 1)
		},
		_createButton: function(t, e, i, n, o, a) {
			var s = r.DomUtil.create("a", i, n);
			s.innerHTML = t, s.href = "#", s.title = e;
			var l = r.DomEvent.stopPropagation;
			return r.DomEvent.on(s, "click", l).on(s, "mousedown", l).on(s, "dblclick", l).on(s, "click", r.DomEvent.preventDefault).on(s, "click", o, a).on(s, "click", this._refocusOnMap, a), s
		},
		_updateDisabled: function() {
			var t = this._map,
				e = "leaflet-disabled";
			r.DomUtil.removeClass(this._zoomInButton, e), r.DomUtil.removeClass(this._zoomOutButton, e), t._zoom === t.getMinZoom() && r.DomUtil.addClass(this._zoomOutButton, e), t._zoom === t.getMaxZoom() && r.DomUtil.addClass(this._zoomInButton, e)
		}
	}), r.Map.mergeOptions({
		zoomControl: !0
	}), r.Map.addInitHook(function() {
		this.options.zoomControl && (this.zoomControl = new r.Control.Zoom, this.addControl(this.zoomControl))
	}), r.control.zoom = function(t) {
		return new r.Control.Zoom(t)
	}, r.Control.Attribution = r.Control.extend({
		options: {
			position: "bottomright",
			prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
		},
		initialize: function(t) {
			r.setOptions(this, t), this._attributions = {}
		},
		onAdd: function(t) {
			this._container = r.DomUtil.create("div", "leaflet-control-attribution"), r.DomEvent.disableClickPropagation(this._container);
			for (var e in t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
			return t.on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this), this._update(), this._container
		},
		onRemove: function(t) {
			t.off("layeradd", this._onLayerAdd).off("layerremove", this._onLayerRemove)
		},
		setPrefix: function(t) {
			return this.options.prefix = t, this._update(), this
		},
		addAttribution: function(t) {
			return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : void 0
		},
		removeAttribution: function(t) {
			return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : void 0
		},
		_update: function() {
			if (this._map) {
				var t = [];
				for (var e in this._attributions) this._attributions[e] && t.push(e);
				var i = [];
				this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(" | ")
			}
		},
		_onLayerAdd: function(t) {
			t.layer.getAttribution && this.addAttribution(t.layer.getAttribution())
		},
		_onLayerRemove: function(t) {
			t.layer.getAttribution && this.removeAttribution(t.layer.getAttribution())
		}
	}), r.Map.mergeOptions({
		attributionControl: !0
	}), r.Map.addInitHook(function() {
		this.options.attributionControl && (this.attributionControl = (new r.Control.Attribution).addTo(this))
	}), r.control.attribution = function(t) {
		return new r.Control.Attribution(t)
	}, r.Control.Scale = r.Control.extend({
		options: {
			position: "bottomleft",
			maxWidth: 100,
			metric: !0,
			imperial: !0,
			updateWhenIdle: !1
		},
		onAdd: function(t) {
			this._map = t;
			var e = "leaflet-control-scale",
				i = r.DomUtil.create("div", e),
				n = this.options;
			return this._addScales(n, e, i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i
		},
		onRemove: function(t) {
			t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
		},
		_addScales: function(t, e, i) {
			t.metric && (this._mScale = r.DomUtil.create("div", e + "-line", i)), t.imperial && (this._iScale = r.DomUtil.create("div", e + "-line", i))
		},
		_update: function() {
			var t = this._map.getBounds(),
				e = t.getCenter().lat,
				i = 6378137 * Math.PI * Math.cos(e * Math.PI / 180),
				n = i * (t.getNorthEast().lng - t.getSouthWest().lng) / 180,
				r = this._map.getSize(),
				o = this.options,
				a = 0;
			r.x > 0 && (a = n * (o.maxWidth / r.x)), this._updateScales(o, a)
		},
		_updateScales: function(t, e) {
			t.metric && e && this._updateMetric(e), t.imperial && e && this._updateImperial(e)
		},
		_updateMetric: function(t) {
			var e = this._getRoundNum(t);
			this._mScale.style.width = this._getScaleWidth(e / t) + "px", this._mScale.innerHTML = 1e3 > e ? e + " m" : e / 1e3 + " km"
		},
		_updateImperial: function(t) {
			var e, i, n, r = 3.2808399 * t,
				o = this._iScale;
			r > 5280 ? (e = r / 5280, i = this._getRoundNum(e), o.style.width = this._getScaleWidth(i / e) + "px", o.innerHTML = i + " mi") : (n = this._getRoundNum(r), o.style.width = this._getScaleWidth(n / r) + "px", o.innerHTML = n + " ft")
		},
		_getScaleWidth: function(t) {
			return Math.round(this.options.maxWidth * t) - 10
		},
		_getRoundNum: function(t) {
			var e = Math.pow(10, (Math.floor(t) + "").length - 1),
				i = t / e;
			return i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1, e * i
		}
	}), r.control.scale = function(t) {
		return new r.Control.Scale(t)
	}, r.Control.Layers = r.Control.extend({
		options: {
			collapsed: !0,
			position: "topright",
			autoZIndex: !0
		},
		initialize: function(t, e, i) {
			r.setOptions(this, i), this._layers = {}, this._lastZIndex = 0, this._handlingClick = !1;
			for (var n in t) this._addLayer(t[n], n);
			for (n in e) this._addLayer(e[n], n, !0)
		},
		onAdd: function(t) {
			return this._initLayout(), this._update(), t.on("layeradd", this._onLayerChange, this).on("layerremove", this._onLayerChange, this), this._container
		},
		onRemove: function(t) {
			t.off("layeradd", this._onLayerChange, this).off("layerremove", this._onLayerChange, this)
		},
		addBaseLayer: function(t, e) {
			return this._addLayer(t, e), this._update(), this
		},
		addOverlay: function(t, e) {
			return this._addLayer(t, e, !0), this._update(), this
		},
		removeLayer: function(t) {
			var e = r.stamp(t);
			return delete this._layers[e], this._update(), this
		},
		_initLayout: function() {
			var t = "leaflet-control-layers",
				e = this._container = r.DomUtil.create("div", t);
			e.setAttribute("aria-haspopup", !0), r.Browser.touch ? r.DomEvent.on(e, "click", r.DomEvent.stopPropagation) : r.DomEvent.disableClickPropagation(e).disableScrollPropagation(e);
			var i = this._form = r.DomUtil.create("form", t + "-list");
			if (this.options.collapsed) {
				r.Browser.android || r.DomEvent.on(e, "mouseover", this._expand, this).on(e, "mouseout", this._collapse, this);
				var n = this._layersLink = r.DomUtil.create("a", t + "-toggle", e);
				n.href = "#", n.title = "Layers", r.Browser.touch ? r.DomEvent.on(n, "click", r.DomEvent.stop).on(n, "click", this._expand, this) : r.DomEvent.on(n, "focus", this._expand, this), r.DomEvent.on(i, "click", function() {
					setTimeout(r.bind(this._onInputClick, this), 0)
				}, this), this._map.on("click", this._collapse, this)
			} else this._expand();
			this._baseLayersList = r.DomUtil.create("div", t + "-base", i), this._separator = r.DomUtil.create("div", t + "-separator", i), this._overlaysList = r.DomUtil.create("div", t + "-overlays", i), e.appendChild(i)
		},
		_addLayer: function(t, e, i) {
			var n = r.stamp(t);
			this._layers[n] = {
				layer: t,
				name: e,
				overlay: i
			}, this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex))
		},
		_update: function() {
			if (this._container) {
				this._baseLayersList.innerHTML = "", this._overlaysList.innerHTML = "";
				var t, e, i = !1,
					n = !1;
				for (t in this._layers) e = this._layers[t], this._addItem(e), n = n || e.overlay, i = i || !e.overlay;
				this._separator.style.display = n && i ? "" : "none"
			}
		},
		_onLayerChange: function(t) {
			var e = this._layers[r.stamp(t.layer)];
			if (e) {
				this._handlingClick || this._update();
				var i = e.overlay ? "layeradd" === t.type ? "overlayadd" : "overlayremove" : "layeradd" === t.type ? "baselayerchange" : null;
				i && this._map.fire(i, e)
			}
		},
		_createRadioElement: function(t, i) {
			var n = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"';
			i && (n += ' checked="checked"'), n += "/>";
			var r = e.createElement("div");
			return r.innerHTML = n, r.firstChild
		},
		_addItem: function(t) {
			var i, n = e.createElement("label"),
				o = this._map.hasLayer(t.layer);
			t.overlay ? (i = e.createElement("input"), i.type = "checkbox", i.className = "leaflet-control-layers-selector", i.defaultChecked = o) : i = this._createRadioElement("leaflet-base-layers", o), i.layerId = r.stamp(t.layer), r.DomEvent.on(i, "click", this._onInputClick, this);
			var a = e.createElement("span");
			a.innerHTML = " " + t.name, n.appendChild(i), n.appendChild(a);
			var s = t.overlay ? this._overlaysList : this._baseLayersList;
			return s.appendChild(n), n
		},
		_onInputClick: function() {
			var t, e, i, n = this._form.getElementsByTagName("input"),
				r = n.length;
			for (this._handlingClick = !0, t = 0; r > t; t++) e = n[t], i = this._layers[e.layerId], e.checked && !this._map.hasLayer(i.layer) ? this._map.addLayer(i.layer) : !e.checked && this._map.hasLayer(i.layer) && this._map.removeLayer(i.layer);
			this._handlingClick = !1, this._refocusOnMap()
		},
		_expand: function() {
			r.DomUtil.addClass(this._container, "leaflet-control-layers-expanded")
		},
		_collapse: function() {
			this._container.className = this._container.className.replace(" leaflet-control-layers-expanded", "")
		}
	}), r.control.layers = function(t, e, i) {
		return new r.Control.Layers(t, e, i)
	}, r.PosAnimation = r.Class.extend({
		includes: r.Mixin.Events,
		run: function(t, e, i, n) {
			this.stop(), this._el = t, this._inProgress = !0, this._newPos = e, this.fire("start"), t.style[r.DomUtil.TRANSITION] = "all " + (i || .25) + "s cubic-bezier(0,0," + (n || .5) + ",1)", r.DomEvent.on(t, r.DomUtil.TRANSITION_END, this._onTransitionEnd, this), r.DomUtil.setPosition(t, e), r.Util.falseFn(t.offsetWidth), this._stepTimer = setInterval(r.bind(this._onStep, this), 50)
		},
		stop: function() {
			this._inProgress && (r.DomUtil.setPosition(this._el, this._getPos()), this._onTransitionEnd(), r.Util.falseFn(this._el.offsetWidth))
		},
		_onStep: function() {
			var t = this._getPos();
			return t ? (this._el._leaflet_pos = t, void this.fire("step")) : void this._onTransitionEnd()
		},
		_transformRe: /([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,
		_getPos: function() {
			var e, i, n, o = this._el,
				a = t.getComputedStyle(o);
			if (r.Browser.any3d) {
				if (n = a[r.DomUtil.TRANSFORM].match(this._transformRe), !n) return;
				e = parseFloat(n[1]), i = parseFloat(n[2])
			} else e = parseFloat(a.left), i = parseFloat(a.top);
			return new r.Point(e, i, !0)
		},
		_onTransitionEnd: function() {
			r.DomEvent.off(this._el, r.DomUtil.TRANSITION_END, this._onTransitionEnd, this), this._inProgress && (this._inProgress = !1, this._el.style[r.DomUtil.TRANSITION] = "", this._el._leaflet_pos = this._newPos, clearInterval(this._stepTimer), this.fire("step").fire("end"))
		}
	}), r.Map.include({
		setView: function(t, e, n) {
			if (e = e === i ? this._zoom : this._limitZoom(e), t = this._limitCenter(r.latLng(t), e, this.options.maxBounds), n = n || {}, this._panAnim && this._panAnim.stop(), this._loaded && !n.reset && n !== !0) {
				n.animate !== i && (n.zoom = r.extend({
					animate: n.animate
				}, n.zoom), n.pan = r.extend({
					animate: n.animate
				}, n.pan));
				var o = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(t, n.pan);
				if (o) return clearTimeout(this._sizeTimer), this
			}
			return this._resetView(t, e), this
		},
		panBy: function(t, e) {
			if (t = r.point(t).round(), e = e || {}, !t.x && !t.y) return this;
			if (this._panAnim || (this._panAnim = new r.PosAnimation, this._panAnim.on({
				step: this._onPanTransitionStep,
				end: this._onPanTransitionEnd
			}, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
				r.DomUtil.addClass(this._mapPane, "leaflet-pan-anim");
				var i = this._getMapPanePos().subtract(t);
				this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)
			} else this._rawPanBy(t), this.fire("move").fire("moveend");
			return this
		},
		_onPanTransitionStep: function() {
			this.fire("move")
		},
		_onPanTransitionEnd: function() {
			r.DomUtil.removeClass(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
		},
		_tryAnimatedPan: function(t, e) {
			var i = this._getCenterOffset(t)._floor();
			return (e && e.animate) === !0 || this.getSize().contains(i) ? (this.panBy(i, e), !0) : !1
		}
	}), r.PosAnimation = r.DomUtil.TRANSITION ? r.PosAnimation : r.PosAnimation.extend({
		run: function(t, e, i, n) {
			this.stop(), this._el = t, this._inProgress = !0, this._duration = i || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = r.DomUtil.getPosition(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
		},
		stop: function() {
			this._inProgress && (this._step(), this._complete())
		},
		_animate: function() {
			this._animId = r.Util.requestAnimFrame(this._animate, this), this._step()
		},
		_step: function() {
			var t = +new Date - this._startTime,
				e = 1e3 * this._duration;
			e > t ? this._runFrame(this._easeOut(t / e)) : (this._runFrame(1), this._complete())
		},
		_runFrame: function(t) {
			var e = this._startPos.add(this._offset.multiplyBy(t));
			r.DomUtil.setPosition(this._el, e), this.fire("step")
		},
		_complete: function() {
			r.Util.cancelAnimFrame(this._animId), this._inProgress = !1, this.fire("end")
		},
		_easeOut: function(t) {
			return 1 - Math.pow(1 - t, this._easeOutPower)
		}
	}), r.Map.mergeOptions({
		zoomAnimation: !0,
		zoomAnimationThreshold: 4
	}), r.DomUtil.TRANSITION && r.Map.addInitHook(function() {
		this._zoomAnimated = this.options.zoomAnimation && r.DomUtil.TRANSITION && r.Browser.any3d && !r.Browser.android23 && !r.Browser.mobileOpera, this._zoomAnimated && r.DomEvent.on(this._mapPane, r.DomUtil.TRANSITION_END, this._catchTransitionEnd, this)
	}), r.Map.include(r.DomUtil.TRANSITION ? {
		_catchTransitionEnd: function(t) {
			this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
		},
		_nothingToAnimate: function() {
			return !this._container.getElementsByClassName("leaflet-zoom-animated").length
		},
		_tryAnimatedZoom: function(t, e, i) {
			if (this._animatingZoom) return !0;
			if (i = i || {}, !this._zoomAnimated || i.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;
			var n = this.getZoomScale(e),
				r = this._getCenterOffset(t)._divideBy(1 - 1 / n),
				o = this._getCenterLayerPoint()._add(r);
			return i.animate === !0 || this.getSize().contains(r) ? (this.fire("movestart").fire("zoomstart"), this._animateZoom(t, e, o, n, null, !0), !0) : !1
		},
		_animateZoom: function(t, e, i, n, o, a, s) {
			s || (this._animatingZoom = !0), r.DomUtil.addClass(this._mapPane, "leaflet-zoom-anim"), this._animateToCenter = t, this._animateToZoom = e, r.Draggable && (r.Draggable._disabled = !0), r.Util.requestAnimFrame(function() {
				this.fire("zoomanim", {
					center: t,
					zoom: e,
					origin: i,
					scale: n,
					delta: o,
					backwards: a
				}), setTimeout(r.bind(this._onZoomTransitionEnd, this), 250)
			}, this)
		},
		_onZoomTransitionEnd: function() {
			this._animatingZoom && (this._animatingZoom = !1, r.DomUtil.removeClass(this._mapPane, "leaflet-zoom-anim"), r.Util.requestAnimFrame(function() {
				this._resetView(this._animateToCenter, this._animateToZoom, !0, !0), r.Draggable && (r.Draggable._disabled = !1)
			}, this))
		}
	} : {}), r.TileLayer.include({
		_animateZoom: function(t) {
			this._animating || (this._animating = !0, this._prepareBgBuffer());
			var e = this._bgBuffer,
				i = r.DomUtil.TRANSFORM,
				n = t.delta ? r.DomUtil.getTranslateString(t.delta) : e.style[i],
				o = r.DomUtil.getScaleString(t.scale, t.origin);
			e.style[i] = t.backwards ? o + " " + n : n + " " + o
		},
		_endZoomAnim: function() {
			var t = this._tileContainer,
				e = this._bgBuffer;
			t.style.visibility = "", t.parentNode.appendChild(t), r.Util.falseFn(e.offsetWidth);
			var i = this._map.getZoom();
			(i > this.options.maxZoom || i < this.options.minZoom) && this._clearBgBuffer(), this._animating = !1
		},
		_clearBgBuffer: function() {
			var t = this._map;
			!t || t._animatingZoom || t.touchZoom._zooming || (this._bgBuffer.innerHTML = "", this._bgBuffer.style[r.DomUtil.TRANSFORM] = "")
		},
		_prepareBgBuffer: function() {
			var t = this._tileContainer,
				e = this._bgBuffer,
				i = this._getLoadedTilesPercentage(e),
				n = this._getLoadedTilesPercentage(t);
			return e && i > .5 && .5 > n ? (t.style.visibility = "hidden", void this._stopLoadingImages(t)) : (e.style.visibility = "hidden", e.style[r.DomUtil.TRANSFORM] = "", this._tileContainer = e, e = this._bgBuffer = t, this._stopLoadingImages(e), void clearTimeout(this._clearBgBufferTimer))
		},
		_getLoadedTilesPercentage: function(t) {
			var e, i, n = t.getElementsByTagName("img"),
				r = 0;
			for (e = 0, i = n.length; i > e; e++) n[e].complete && r++;
			return r / i
		},
		_stopLoadingImages: function(t) {
			var e, i, n, o = Array.prototype.slice.call(t.getElementsByTagName("img"));
			for (e = 0, i = o.length; i > e; e++) n = o[e], n.complete || (n.onload = r.Util.falseFn, n.onerror = r.Util.falseFn, n.src = r.Util.emptyImageUrl, n.parentNode.removeChild(n))
		}
	}), r.Map.include({
		_defaultLocateOptions: {
			watch: !1,
			setView: !1,
			maxZoom: 1 / 0,
			timeout: 1e4,
			maximumAge: 0,
			enableHighAccuracy: !1
		},
		locate: function(t) {
			if (t = this._locateOptions = r.extend(this._defaultLocateOptions, t), !navigator.geolocation) return this._handleGeolocationError({
				code: 0,
				message: "Geolocation not supported."
			}), this;
			var e = r.bind(this._handleGeolocationResponse, this),
				i = r.bind(this._handleGeolocationError, this);
			return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this
		},
		stopLocate: function() {
			return navigator.geolocation && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
		},
		_handleGeolocationError: function(t) {
			var e = t.code,
				i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
			this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
				code: e,
				message: "Geolocation error: " + i + "."
			})
		},
		_handleGeolocationResponse: function(t) {
			var e = t.coords.latitude,
				i = t.coords.longitude,
				n = new r.LatLng(e, i),
				o = 180 * t.coords.accuracy / 40075017,
				a = o / Math.cos(r.LatLng.DEG_TO_RAD * e),
				s = r.latLngBounds([e - o, i - a], [e + o, i + a]),
				l = this._locateOptions;
			if (l.setView) {
				var u = Math.min(this.getBoundsZoom(s), l.maxZoom);
				this.setView(n, u)
			}
			var c = {
				latlng: n,
				bounds: s,
				timestamp: t.timestamp
			};
			for (var h in t.coords)"number" == typeof t.coords[h] && (c[h] = t.coords[h]);
			this.fire("locationfound", c)
		}
	})
}(window, document), function(t, e) {
	"function" == typeof define && define.amd ? define(["leaflet"], e) : "object" == typeof module && module.exports ? module.exports = e(require("leaflet")) : "undefined" != typeof t && t.L && (t.L.echartsLayer3 = e(L))
}(this, function(t) {
	return t.EchartsLayer3 = t.Class.extend({
		includes: [t.Mixin.Events],
		_echartsContainer: null,
		_option: null,
		_map: null,
		_ec: null,
		initialize: function(t, e) {
			this._map = t;
			var i = t.getSize(),
				n = this._echartsContainer = document.createElement("div");
			n.style.position = "absolute", n.style.height = i.y + "px", n.style.width = i.x + "px", n.style.top = 0, n.style.left = 0, t.getPanes().overlayPane.appendChild(n), this._init(t, e)
		},
		_init: function(e, i) {
			var n = this;
			n._map = e, n._ec = i, n.getEchartsContainer = function() {
				return n._echartsContainer
			}, n.getMap = function() {
				return n._map
			}, n.initECharts = function() {
				return n._ec = i.init.apply(n, arguments), n._ec.Geo.prototype.dataToPoint = function(e) {
					var i = new t.latLng(e[1], e[0]),
						r = n._map.latLngToContainerPoint(i);
					return [r.x, r.y]
				}, n._bindEvent(), n._ec
			}, n._bindEvent = function() {
				n._map.on("moveend", function(t) {
					var e = n._map._getMapPanePos();
					n._mapOffset = [-parseInt(e.x) || 0, -parseInt(e.y) || 0], n._echartsContainer.style.left = n._mapOffset[0] + "px", n._echartsContainer.style.top = n._mapOffset[1] + "px", n._ec.resize(), n._echartsContainer.style.visibility = "visible"
				}), n._map.on("movestart", function() {
					n._echartsContainer.style.visibility = "hidden"
				}), n._map.on("zoomstart", function() {
					n._echartsContainer.style.visibility = "hidden"
				}), n._map.on("viewreset", function() {
					n._ec.resize(), n._echartsContainer.style.visibility = "visible"
				}), n._map.on("resize", function() {
					var t = n._map._getMapPanePos();
					n._mapOffset = [-parseInt(t.x) || 0, -parseInt(t.y) || 0], n._echartsContainer.style.left = n._mapOffset[0] + "px", n._echartsContainer.style.top = n._mapOffset[1] + "px", n._ec.resize(), n._echartsContainer.style.visibility = "visible"
				}), n._ec.getZr().on("mousewheel", function(e) {
					n._lastMousePos = n._map.mouseEventToContainerPoint(e.event);
					var i = t.DomEvent.getWheelDelta(e.event),
						r = n._map,
						o = r.getZoom();
					i = i > 0 ? Math.ceil(i) : Math.floor(i), i = Math.max(Math.min(i, 4), -4), i = r._limitZoom(o + i) - o, n._delta = 0, n._startTime = null, i && ("center" === r.options.scrollWheelZoom ? r.setZoom(o + i) : r.setZoomAround(n._lastMousePos, o + i))
				})
			}, n.getECharts = function() {
				return n._ec
			}, n.getMapOffset = function() {
				return n._mapOffset
			}, n.setOption = function(t, e) {
				n._option = t, n._ec.setOption(t, e)
			}
		}
	}), t.echartsLayer3 = function(e, i) {
		return new t.EchartsLayer3(e, i)
	}, t.echartsLayer3
});