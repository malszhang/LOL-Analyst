var playerHeat = document.getElementById("playerHeat")
var heatChar = echarts.init(playerHeat);

$.get("data/player/playerHeat.json", function(data) {
	drawPlayerHeat(data);
});

function dealHeatData(data) {
	let dealData = {};
	let xData = data.data.map(function(d) {
		return parseFloat(d.axis_x);
	});
	xData.sort(function(a, b) {
		return a - b;
	});
	let yData = data.data.map(function(d) {
		return parseFloat(d.axis_y);
	});
	yData.sort(function(a, b) {
		return a - b;
	});
	let heatNum = data.data.map(function(d) {
		return parseFloat(d.hot_value);
	});
	// let hotMax = Math.max.apply(Math,heatNum);

	let showData = data.data.map(function(d) {
		return [parseFloat(d.axis_x), parseFloat(d.axis_y), parseFloat(d.hot_value)]
	});
	dealData.xData = xData;
	dealData.yData = yData;
	dealData.showData = showData;
	dealData.heatNum = heatNum;
	return dealData;
}

function drawPlayerHeat(data) {
	let dealData = dealHeatData(data);
	let minNum = Math.min.apply(Math, dealData.heatNum);
	let maxNum = Math.max.apply(Math, dealData.heatNum);
	let option = {
		tooltip: {},
		grid: {
			x: 0,
			y: 0,
			x2: 0,
			y2: 0,
		},
		xAxis: {
			type: 'value',
			data: dealData.xData,
			show : false
		},
		yAxis: {
			type: 'value',
			data: dealData.yData,
			show: false,
			inverse: true
		},
		visualMap: {
			type: 'continuous',
			min: minNum,
			max: maxNum,
			calculable: true,
			realtime: false,
			dimension: 2,
			inRange: {
				color: 'red',
				colorAlpha: [0.4, 1],
			},
			show: false
		},
		series: [{
			name: 'Gaussian',
			type: 'heatmap',
			data: dealData.showData,
			emphasis: {
				shadowColor: 'yellow'
			}
		}]
	};

	heatChar.setOption(option);
}
