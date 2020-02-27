var groupDom = document.getElementById("groupData");
var groupBarChart = echarts.init(groupDom);
var maxDamage = 1681807;
groupBarDraw();

function groupBarDraw(){
	option = {
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
	    legend: {
	        data: ['输出伤害', '承受伤害'],
			top: '0%'
	    },
	    grid: {
			top: '5%',
	        left: '3%',
	        right: '3%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: [{
	        type: 'value',
	        boundaryGap: [0, 0.01],
			max: maxDamage,
			show:false
	    },{
	        type: 'value',
	        boundaryGap: [0, 0.01],
			show:false,
			max: maxDamage,
			inverse: true
	    }],
	    yAxis: [{
			name: "start",
	        type: 'category',
	        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口']
	    },{
			name: "end",
	        type: 'category',
	        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口']
	    }],
	    series: [
	        {
	            name: '输出伤害',
				yAxisIndex: 0,
				xAxisIndex: 0,
	            type: 'bar',
	            data: [18203, 23489, 29034, 104970, 131744, 630230]
	        },
	        {
	            name: '承受伤害',
				yAxisIndex: 0,
				xAxisIndex: 0,
	            type: 'bar',
	            data: [19325, 23438, 31000, 121594, 134141, 681807]
	        },{
	            name: '输出伤害',
				yAxisIndex: 1,
				xAxisIndex: 1,
	            type: 'bar',
	            data: [18203, 23489, 29034, 104970, 131744, 630230]
	        },{
	            name: '承受伤害',
				yAxisIndex: 1,
				xAxisIndex: 1,
	            type: 'bar',
	            data: [19325, 23438, 31000, 121594, 134141, 681807]
	        },
		]
	};
	groupBarChart.setOption(option)
}

	
