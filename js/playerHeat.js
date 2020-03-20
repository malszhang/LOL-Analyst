var playerHeat = document.getElementById("playerHeat")
var heatChar = echarts.init(playerHeat);
var heatHeight = $("#playerHeat").height();
var heatWidth = $("#playerHeat").width();
var squareLen = heatHeight > heatWidth? heatWidth: heatHeight;
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
			bottom: 0,
			top: 0,
			right: 0,
			left: heatWidth-squareLen
		},
		xAxis: {
			type: 'value',
			data: dealData.xData,
			show: false
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
				color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43',
					'#d73027', '#a50026'
				]
			},
			show: false
		},
		graphic: {
			type: 'image',
			id: 'logo',
			bottom: 0,
			right: 0,
			z: -10,
			// bounding: 'raw',
			// origin: [75, 75],
			style: {
				image: 'img/map.png',
				width: squareLen,
				height: squareLen,
				opacity: 0.9
			}
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
