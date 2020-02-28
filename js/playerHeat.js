var playerHeat = document.getElementById("playerHeat")
var heatChar = echarts.init(playerHeat);
$.get("data/player/playerHeat.json", function(data) {
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
	console.log(showData);
	let option = {
	    tooltip: {
			 formatter:function(parm){
				 console.log(parm);
			 }
		},
	    xAxis: {
	        type: 'category',
	        data: xData,
			// show : false
	    },
	    yAxis: {
	        type: 'category',
	        data: yData,
			// show: false
	    },
	    visualMap: {
			type: 'continuous',
	        min: 0,
	        max: 1,
	        calculable: true,
	        realtime: false,
			// orient: 'horizontal',
			// left: 'center',
			// bottom: '15%',
			show: false
	    },
	    series: [{
	        name: 'Gaussian',
	        type: 'heatmap',
	        data: showData,
			pointSize: 100,
	        emphasis: {
	            itemStyle: {
					color : "red"
	            }
	        }
	    }]
	};
	
	heatChar.setOption(option);
});
