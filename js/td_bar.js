var tdDom = document.getElementById("teamComp");
var barChart = echarts.init(tdDom);
var teamItem = [];
for (var i = 0; i < 5; i++){
	teamItem.push("Item"+i);
}
var emphasisStyle = {
    itemStyle: {
        barBorderWidth: 1,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0,0,0,0.5)'
    }
};
function transMinus(data){
	var minusData = [];
	for (var i = 0; i < data.length; i++){
		minusData.push(data[i]*-1);
	}
	return minusData;
}
$.get("data/team/teamdata.json", function(d) {

	var teamName = ["EDG", "BLG"];
	var option = {
		color:['#4cabce', '#e5323e'],
		title: {
			text: '队伍数据柱状及指标比例图',
			top:"top",
			left:"center"
		},
	    legend: {
	        data: teamName,
			top: "10%",
			left:"15%"
	    },
	    tooltip: {},
		grid:{
			left: "10%",
			right: "50%",
			bottom:"10%"
		},
	    yAxis: {
	        data: teamItem,
	        axisLine: {onZero: true},
	        splitLine: {show: false},
	        splitArea: {show: false}
	    },
	    xAxis: {
			show:false,
			inverse: true,
	        splitArea: {show: false}
	    },
	    series: [
	        {
	            name: teamName[0],
	            type: 'bar',
				stack:'one',
	            emphasis: emphasisStyle,
	            data: d[0].data
	        },
	        {
	            name: teamName[1],
	            type: 'bar',
				stack:'one',
	            emphasis: emphasisStyle,
	            data: transMinus(d[1].data)
	        },{
				type: 'pie',
				radius: [0, '35%'],
				center: ['75%', '50%'],
				data:[
					{name:"223",value:52},
					{name:"224",value:48}],
			}
		]
	}
	barChart.setOption(option)
});
