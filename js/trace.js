
var colors = ["#E9B9A7", "#E99E9A", "#A9272C", "#DCB1B8", "#E3A3C0",
	"#AEADCD", "#A5C0D0", "#ADCAC8", "#B5D4C2", "#71B3B8"
];
var traceDom = document.getElementById("traceFlow");
var traceChart = echarts.init(traceDom);
function traceDraw(compName) {
	//var minAbs = Math.abs(Math.min.apply(Math, data[2]));
	//var maxAbs = Math.abs(Math.max.apply(Math, data[2]));
	//var limitNum = minAbs > maxAbs? minAbs: maxAbs;
	//var limitNum = 10000;
	$.get("data/path/" + compName + ".json", function(data) {
		option = {
			animation: false,
			grid: {
				top: 40,
				left: 5,
				right: 5,
				bottom: 50
			},
			legend: {
				data: data[1],
				left: 10
			},
			dataZoom: [{
					show: true,
					realtime: true,
					start: 65,
					end: 85,
					xAxisIndex: [0, 1]
				},
				{
					type: 'inside',
					realtime: true,
					start: 65,
					end: 85,
					xAxisIndex: [0, 1]
				}
			],
			grid: [{
				left: '3%',
				right: '5%',
				height: '40%'
			}, {
				left: '3%',
				right: '5%',
				top: '64%',
				height: '20%',
			}],
			visualMap: {
				show: false,
				top: 10,
				right: 10,
				seriesIndex: 0,
				pieces: [{
					gt: 0,
					lte: 30000,
					color: '#e5323e'

				}, {
					gt: -30000,
					lte: 0,
					color: '#4cabce'
				}]
			},
			xAxis: [{
				type: 'category',
			}, {
				gridIndex: 1,
				type: 'category',
				position: 'top',
				show: false
			}],
			yAxis: [{
				show: false,
			}, {
				// min: -1*limitNum,
				// max: limitNum,
				position: 'right',
				gridIndex: 1,
				show: true
			}],
			series: [{
				xAxisIndex: 1,
				yAxisIndex: 1,
				type: 'line',
				smooth: true,
				symbol: 'none',
				areaStyle: {
				},
				data: data[2]
			}]
		};
		for (var i = 0; i < 10; i++) {
			option.series.push({
				name: data[1][i],
				yAxisIndex: 0,
				type: 'line',
				showSymbol: false,
				color: colors[i],
				lineStyle: {
					width: 1,
				},
				clip: true,
				smooth: true,
				data: data[0][i],
				markArea: {
					silent: true,
					itemStyle:{
						color: '#eeeff6',
					},
					data: [
						[{
							xAxis: '30'
						}, {
							xAxis: '70'
						}]
					]
				},
			});
		}
		traceChart.clear();
		traceChart.setOption(option);
	});
	
}
