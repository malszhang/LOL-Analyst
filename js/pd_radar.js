var pdDom = document.getElementById("playerData");
var radarChart = echarts.init(pdDom);
var radarItem = [{
		"name": "参团率",
		"max": 100
	},
	{
		"name": "平均击杀",
		"max": 8
	},
	{
		"name": "平均辅助",
		"max": 12
	},
	{
		"name": "平均死亡",
		"max": 7
	},
	{
		"name": "分均补刀",
		"max": 12
	},
	{
		"name": "视野",
		"max": 2
	}
]
function drawPdRadar(compName){
	$.get("data/player/"+compName+".json", function(d) {
		var playerName = d.name;
		var radarData = d.data;
		var option = {
			title: {
				text: '选手主要指标雷达图'
			},
			tooltip: {},
			legend: [{
				data: playerName[0],
				orient: 'vertical',
				left: "left",
				top: "center"
			}, {
				data: playerName[1],
				orient: 'vertical',
				right: "right",
				top: "center"
			}],
			radar: {
				// shape: 'circle',
				name: {
					textStyle: {
						color: '#fff',
						backgroundColor: '#999',
						borderRadius: 3,
						padding: [3, 5]
					}
				},
				splitNumber: 3,
				center: ["50%", "50%"],
				radius: 70,
				indicator: radarItem
			},
			series: [{
				name: compName,
				type: 'radar',
				emphasis: {
					areaStyle: {
						color: 'rgba(0,250,0,0.3)'
					}
				},
				// areaStyle: {normal: {}},
				data: radarData
			}]
		};
		radarChart.setOption(option)
	});
	
}
