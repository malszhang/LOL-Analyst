var playerHeat = document.getElementById("playerHeat")
var heatChar = echarts.init(playerHeat);

$.get("data/player/playerHeat.json", function(data) {
	drawPlayerHeat(data);
});
function dealData(data){
	var dealData = {};
	let xData = data.data.map(function(d) {
		return parseFloat(d.axis_x);
	});
	xData.sort(function(a,b){
		return a-b;
	});
	let yData = data.data.map(function(d) {
		return parseFloat(d.axis_y);
	});
	yData.sort(function(a,b){
		return a-b;
	});
	let heatNum = data.data.map(function(d) {
		return parseFloat(d.hot_value);
	});
	let hotMax = Math.max.apply(Math,heatNum);
	
	let showData = data.data.map(function(d) {
		return [parseFloat(d.axis_x), parseFloat(d.axis_y),parseFloat(d.hot_value)]
	});
	dealData.xData = xData;
	dealData.yData = yData;
	dealData.showData = showData;
	return dealData; 
}

function drawPlayerHeat(data){
	let dealdata = dealData(data);
	let option = {
	    tooltip: {},
	    xAxis: {
	        type: 'value',
	        data: dealdata.xData,
			show : false
	    },
	    yAxis: {
	        type: 'value',
	        data: dealdata.yData,
			show: false
	    },
	    visualMap: {
			type: 'continuous',
	        min: 0,
	        max: 1,
	        calculable: true,
	        realtime: false,
			dimension: 2,
			inRange: {
			            color: 'red',
						colorAlpha: [0.4, 1]
			        } ,
			show: false
	    },
	    series: [{
	        name: 'Gaussian',
	        type: 'heatmap',
	        data: dealdata.showData,
	    }]
	};
	
	heatChar.setOption(option);
}

