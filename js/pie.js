var dom = document.getElementById("pie");
var myChart = echarts.init(dom);


option = {
	backgroundColor: '#fff',
    tooltip : {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        // orient: 'vertical',
        top: '2%',
        // bottom: '2%',
        left: 'center',
        data: ["打架指数", "后期指数", "运营指数", "奇迹指数"]
    },
    series : [
        {
            type: 'pie',
            radius : '50%',
            center: ['50%', '60%'],
            selectedMode: 'single',
            data:[
                {value:8.999,name: '打架指数'},
                {value:3.797, name: '后期指数'},
                {value:2.228, name: '运营指数'},
                {value:1.352, name: '奇迹指数'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                }
            }
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}