var traceDom = document.getElementById("traceFlow");
var traceChart = echarts.init(traceDom);
traceDraw();
function traceDraw(){
	option = {
	    animation: false,
	    grid: {
	        top: 40,
	        left: 50,
	        right: 40,
	        bottom: 50
	    },
	    xAxis: {
	        name: 'x',
	        minorTick: {
	            show: true
	        },
	        splitLine: {
	            lineStyle: {
	                color: '#999'
	            }
	        },
	        minorSplitLine: {
	            show: true,
	            lineStyle: {
	                color: '#ddd'
	            }
	        }
	    },
	    yAxis: {
	        name: 'y',
	        min: -100,
	        max: 100,
	        minorTick: {
	            show: true
	        },
	        splitLine: {
	            lineStyle: {
	                color: '#999'
	            }
	        },
	        minorSplitLine: {
	            show: true,
	            lineStyle: {
	                color: '#ddd'
	            }
	        }
	    },
	    series: [
	        {
	            type: 'line',
	            showSymbol: false,
	            clip: true,
	            data: [[1,2], [2,3], [4,5], [6,7]]
	        }
	    ]
	};
	traceChart.setOption(option)
}

	
