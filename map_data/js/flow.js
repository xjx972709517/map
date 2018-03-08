$(function(){
    var myChart = echarts.init(document.getElementById('flow'));

    // 异步加载数据
    // $.get('data.json').done(function (data) {
    //     // 填入数据
    //     myChart.setOption({
    //         xAxis: {
    //             data: data.categories
    //         },
    //         series: [{
    //             // 根据名字对应到相应的系列
    //             name: '销量',
    //             data: data.data
    //         }]
    //     });
    // });
    option = {
        title: {
            text: '丽水供排水日供水流量',
            subtext: '2017年5月10日'
        },
        tooltip: {
            trigger: 'axis'
        },
        color: ["#00BFFF", "#FF0000", "#FF00FF"],
        legend: {
            data: ['低限值', '天宁水厂', '高限值']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
        },
        yAxis: [{
            type: 'value',
            axisLabel: {
                formatter: '{value} 吨/小时'
            },
            min: 1500,
            max: 5500
        }],
        dataZoom: [{
            show: true,
            type: 'slider',
            start: 0,
            end: 100
        }],
        series: [{
            name: '低限值',
            type: 'line',
            lineStyle: {
                normal: {
                    width: 2,
                }
            },
            data: [2880, 2650, 2380, 2010, 1964, 2000, 2490, 3250, 4000, 4230, 4280, 4150, 3980, 3700, 3450, 3100, 3250, 3670, 3880, 3750, 3400, 3380, 3370, 3020]
        }, {
            name: '天宁水厂',
            type: 'line',
            lineStyle: {
                normal: {
                    width: 2,
                }
            },
            markPoint: {
                data: [{
                    type: 'max',
                    name: '最大值'
                }, {
                    type: 'min',
                    name: '最小值'
                }]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            },
            data: [3450, 3040, 2800, 2500, 2464, 2500, 2980, 3720, 4500, 4710, 4736, 4680, 4495, 4280, 3820, 3540, 3670, 4150, 4400, 4360, 3800, 3770, 3765, 3510]
        }, {
            name: '高限值',
            type: 'line',
            lineStyle: {
                normal: {
                    width: 2,
                }
            },
            data: [3840, 3510, 3430, 3000, 2964, 3000, 3480, 4240, 4995, 5250, 5260, 5130, 4990, 4700, 4350, 4040, 4100, 4600, 4800, 4680, 4440, 4430, 4430, 4010]
        }]
    };

    myChart.clear();
    myChart.setOption(option);
});