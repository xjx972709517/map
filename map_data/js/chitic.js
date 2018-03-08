$(function(){

	window.onresize = function temp() {
		mapHeight();

		// var width = $('.working-con').width();
		// $('#pie').width(width);
		// $('#water').width(width);
		// $('#sewage').width(width);
		chart.resize();
		chartPie.resize();
		chartWater.resize();
		chartSewage.resize();
 	}
 	function mapHeight(){
 		var browH = document.documentElement.clientHeight;
	 	var tableH = browH - $('.content').offset().top;
		if (tableH < 200) {
			tableH = 200;
		}
		$('.content').height(tableH);
		$('#canvas').height(browH);
		$('#warn-ring').height(browH-$('#warn-ring').offset().top);
		$('.working-bottom').height(browH-$('.working-bottom').offset().top);
 	}
	mapHeight();
	// window.onresize();

	// 地图
	var chart = echarts.init(document.getElementById('map'));
	var data = [
	  {name: '实验中学', value: 25},
	  {name: '东方明珠', value: 28},
	  {name: '青林村', value: 54},
	  {name: '考试中心', value: 66},
	  {name: '丽水学院', value: 31},
	  {name: '烟草公司', value: 19},
	  {name: '九龙', value: 33},
	  {name: '恒泰机械', value: 32},
	  {name: '白桥', value: 40},
	];
	var geoCoordMap = {
	  '实验中学':[119.92,28.45],
	  '东方明珠':[120.28,28.15],
	  '青林村':[120.07,28.65],
	  '考试中心':[119.27,28.6],
	  '丽水学院':[119.48,28.45],
	  '烟草公司':[119.57,28.12],
	  '九龙':[119.05,27.62],
	  '恒泰机械':[119.63,27.98],
	  '白桥':[119.13,28.08],
	};
	var convertData = function (data) {
	    var res = [];
	    for (var i = 0; i < data.length; i++) {
	        var geoCoord = geoCoordMap[data[i].name];
	        if (geoCoord) {
	            res.push({
	                name: data[i].name,
	                value: geoCoord.concat(data[i].value)
	            });
	        }
	    }
	    return res;
	};
	var option = {
		title: {
        text: '丽水供排水系统预警监听',
        subtext: 'data from PMa',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
	  tooltip : {
	      trigger: 'item'
	  },
	  legend: {
        orient: 'vertical',
        y: 'bottom',
        x:'right',
        data:['PMa'],
        textStyle: {
            color: '#fff'
        }
    },
	  geo: {
        map: 'lishui',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        scaleLimit:{min:0.5,max:10},
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
	  series: [
	    {
	        name: 'PMa',
	        type: 'scatter',
	        coordinateSystem: 'geo',
	        data: convertData(data),
	        symbolSize: function (val) {
	            // return val[2] / 10;
	            return val[2] / 2;
	        },
	        label: {
	            normal: {
	                formatter: '{b}',
	                position: 'right',
	                show: false
	            },
	            emphasis: {
	                show: true
	            }
	        },
	        itemStyle: {
	            normal: {
	                color: '#ddb926'
	            }
	        }
	    },
	    {
	        name: 'Top 5',
	        type: 'effectScatter',
	        coordinateSystem: 'geo',
	        data: convertData(data.sort(function (a, b) {
	            return b.value - a.value;
	        }).slice(0, 6)),
	        symbolSize: function (val) {
	            // return val[2] / 10;
	            return val[2] / 2;
	        },
	        showEffectOn: 'render',
	        rippleEffect: {
	            brushType: 'stroke'
	        },
	        hoverAnimation: true,
	        label: {
	            normal: {
	                formatter: '{b}',
	                position: 'right',
	                show: true
	            }
	        },
	        itemStyle: {
	            normal: {
	                color: '#f4e925',
	                shadowBlur: 10,
	                shadowColor: '#333'
	            }
	        },
	        zlevel: 1
	    }
	  ]
	}
	chart.setOption(option);

	// 饼图
	var chartPie = echarts.init(document.getElementById('pie'));
	var pie = {
	    series : [
	        {
            name: '报修信息',
            type: 'pie',
            radius: ['30%', '55%'],
            color: ['#eba954', '#21b6b9', '#d74e67', '#0092ff'],
            label: {
              normal: {
                  formatter: '{b}\n{c}'
              },
            },
            data:[
              {value:25, name:'修复中'},
              {value:15, name:'已修复'},
              {value:2, name:'未修复'},
              {value:30, name:'待派遣'}
            ]
	        }
	    ]
	};
	chartPie.setOption(pie);

	// 柱状图
	var chartWater = echarts.init(document.getElementById('water'));
	var water = histogram('天宁水厂','水阁水厂',[
		120, 50, 60, 50, 15, 50, 30, 50, 20, 30, 40, 80
	],[
		66, 35, 58, 34, 54, 12, 5, 47, 23, 27, 16, 34
	]);
	chartWater.setOption(water);
	
	var chartSewage = echarts.init(document.getElementById('sewage'));
	var sewage = histogram('天宁水厂','水阁水厂',[
		120, 50, 60, 50, 15, 50, 30, 50, 20, 30, 40, 80
	],[
		66, 35, 58, 34, 54, 12, 5, 47, 23, 27, 16, 34
	]);
	chartSewage.setOption(sewage);

	function histogram(name1,name2,data1,data2){
		return {
		    color: ["#f9882c", "#24c5fb"],
		    textStyle: {
		        color: "#fff",
		    },
		    legend: {
		        right: 10,
		        width: 500,
		        itemWidth: 40,
		        textStyle: {
		            color: "#d7d7d7"
		        },
		        data: [name1, name2]
		    },
		    xAxis: [{
		        type: 'category',
		        axisTick: {
		            show: false
		        },
		        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
		    }],
		    yAxis: [{
		        type: 'value',
		        name: "单位：万吨",
		        axisTick: {
		            show: false
		        },
		        axisLine: {
		            // show: false
		        },
		        splitLine: {
		            lineStyle: {
		                // color: "#333333"
		            }
		        },
		    }],
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: { // 坐标轴指示器，坐标轴触发有效
		            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    series: [{
		        name: name1,
		        type: 'bar',
		        barWidth: 5,
		        itemStyle: {
		            normal: {
		                barBorderRadius: 5
		            }
		        },
		        data: data1
		    }, {
		        name: name2,
		        type: 'bar',
		        barWidth: 5,
		        itemStyle: {
		            normal: {
		                barBorderRadius: 5
		            }
		        },
		        data: data2
		    }, ]
		};
	}
});

var app = new Vue({
	el: '#app',
	data: {
		leftCon: [
			{ title: '天宁水厂', info: '4382', unit: '吨/小时' },
			{ title: '水阁水厂', info: '758', unit: '吨/小时' },
			{ title: '城北加压泵站', info: '846', unit: '吨/小时' },
			{ title: '联城加压泵站', info: '0', unit: '' },
			{ title: '洋店加压泵站', info: '', unit: '' }
		]
	}
});
