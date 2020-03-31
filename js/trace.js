
var colors = ["#AEADCD", "#A5C0D0", "#ADCAC8", "#B5D4C2", "#71B3B8",
				"#E9B9A7", "#E99E9A", "#A9272C", "#DCB1B8", "#E3A3C0"];
var traceDom = document.getElementById("traceFlow");
var traceChart = echarts.init(traceDom);
var timeRanges = [];
function timeTrans(compName){
	$.get("data/comp/" + compName + ".json", function(d) {
		var tNames = [];
		for (var i = 0; i < d.name.length; i++) {
			tNames.push(d.name[i])
		}
		timeRanges = [];
		for (var i = 0; i < tNames.length; i++){
			var be = tNames[i].split(" ~ ");
			var timeRange = [];
			for (var j = 0; j < be.length; j++){
				var min = be[j].split(":");
				var se = parseInt(min[0])*60+parseInt(min[1]);
				timeRange.push(parseInt(se/5));
			}
			timeRanges.push(timeRange);
		}
	});
}
function traceDraw(compName) {
	//var minAbs = Math.abs(Math.min.apply(Math, data[2]));
	//var maxAbs = Math.abs(Math.max.apply(Math, data[2]));
	//var limitNum = minAbs > maxAbs? minAbs: maxAbs;
	//var limitNum = 10000;
	timeTrans(compName)
	$.get("data/path/" + compName + ".json", function(data) {
		var t = timeRanges;
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
			var len = t.length;
			var begin, end;
			if (len <= i){
				begin = 0;
				end = 0;
			}else{
				begin = t[i][0];
				end = t[i][1];
			}
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
							xAxis: begin
						}, {
							xAxis: end
						}]
					]
				},
			});
		}
		traceChart.clear();
		traceChart.setOption(option);
	});
}
