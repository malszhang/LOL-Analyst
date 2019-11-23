var dom = document.getElementById("categoryBar");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = 'LPL春季赛胜率预测 - 条形图';

option = {

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['预测胜率','实际胜率'],
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
		top:'8%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ["TOP","BLG","FPX","RNG","iG","EDG","SDG","V5","SN","JDG","VG","WE","SS","RW","LGD","OMG"],
    },
    series: [
        {
            name: '实际胜率',
            type: 'bar',
            data: ["0.833","0.636","0.833","0.727","0.75","0.545","0.455","0.364","0.385","0.75","0.167","0.545","0.308","0.308","0.25","0.182"],
			x:'75%',
        },
        {
            name: '预测胜率',
            type: 'bar',
            data: ["0.9","0.56","0.75","0.61","0.86","0.51","0.47","0.45","0.4","0.53","0.28","0.45","0.36","0.38","0.38","0.23"],
			x:'75%',
        },
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}