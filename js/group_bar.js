var groupDom = document.getElementById("groupData");
var groupBarChart = echarts.init(groupDom);
var maxDamage = 5000;


function groupBarDraw(compName, dataIndex) {
	$.get("data/comp/" + compName + ".json", function(d) {
		option = {
			color:['#e5323e', '#4cabce'],
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
				show: false
			}, {
				type: 'value',
				boundaryGap: [0, 0.01],
				show: false,
				max: maxDamage,
				inverse: true
			}],
			yAxis: [{
				type: 'category',
				data: d.player[0],
				inverse: true
			}, {
				type: 'category',
				data: d.player[1],
				inverse: true
			}],
			series: [{
					name: '输出伤害',
					yAxisIndex: 0,
					xAxisIndex: 0,
					type: 'bar',
					data: d.data[dataIndex][0]
				},
				{
					name: '承受伤害',
					yAxisIndex: 0,
					xAxisIndex: 0,
					type: 'bar',
					data: d.data[dataIndex][1]
				}, {
					name: '输出伤害',
					yAxisIndex: 1,
					xAxisIndex: 1,
					type: 'bar',
					data: d.data[dataIndex][2]
				}, {
					name: '承受伤害',
					yAxisIndex: 1,
					xAxisIndex: 1,
					type: 'bar',
					data: d.data[dataIndex][3]
				},
			]
		};
		groupBarChart.clear();
		groupBarChart.setOption(option);
	});

}
