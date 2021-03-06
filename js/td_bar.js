var tdDom = document.getElementById("teamComp");
var barChart = echarts.init(tdDom);
var teamItem = ['进攻能力', '运营能力', '操作能力'];
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
function startX(data){
	var teamNames = [];
	var dataSplits = data.split("-");
	teamNames.push(dataSplits[0]);
	teamNames.push(dataSplits[2]);
	drawTdBar(teamNames)
}
function drawTdBar(teamNames){
	$.get("data/team/teamdata.json", function(d) {
		var team1 = d[0].indexOf(teamNames[0]);
		var team2 = d[0].indexOf(teamNames[1]);
		var option = {
			color:['#4cabce', '#e5323e'],
			title: [{
				text: '队伍胜率对比图',
				top:"top",
				left:"center"
			},{
				text: '队伍主要指标对比图',
				top:"48%",
				left:"center"
			}],
		    legend: {
		        data: teamNames,
				top: "57%",
				left:"center"
		    },
		    tooltip: {},
			grid:{
				left: "5%",
				right: "5%",
				top: "65%",
				bottom:"10%"
			},
		    xAxis: {
		        data: teamItem,
		        axisLine: {onZero: true},
		        splitLine: {show: false},
		        splitArea: {show: false}
		    },
		    yAxis: {
				show:false,
				//inverse: true,
		        splitArea: {show: false}
		    },
		    series: [
		        {
		            name: teamNames[0],
		            type: 'bar',
					//stack:'one',
		            emphasis: emphasisStyle,
		            data: d[2][team1]
		        },
		        {
		            name: teamNames[1],
		            type: 'bar',
					//stack:'one',
		            emphasis: emphasisStyle,
		            data: d[2][team2]
		        },{
					type: 'pie',
					radius: [0, '35%'],
					center: ['50%', '27%'],
					data:[
						{name:teamNames[0],value:d[1][team1]},
						{name:teamNames[1],value:d[1][team2]}],
				}
			]
		}
		barChart.clear();
		barChart.setOption(option);
	});
}