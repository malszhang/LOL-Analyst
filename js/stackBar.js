var dom = document.getElementById("stackBar");
var myChart = echarts.init(dom);
var stackBar = {
	data: [
		["0.459915657", "0.293749741", "0.333336924", "0.205863799", "0.262627189", "0.130833808", "-0.074242125",
			"-0.150411316", "-0.036922598", "0.046316912", "-0.24345962", "-0.032049222", "-0.230110833", "-0.216803877",
			"-0.208560094", "-0.540084343"
		],
		["0.368091314", "-0.584659606", "0.200786464", "0.16267124", "-0.488738941", "-0.333981226", "0.196234435",
			"0.041640653", "-0.153722753", "-0.146266143", "0.036359903", "-0.135018509", "0.344662779", "0.356270908",
			"-0.279670913", "0.415340394"
		],
		["-0.215691023", "0.362584743", "-0.024425247", "0.137554232", "-0.637415257", "0.231290268", "-0.002357488",
			"-0.12976224", "0.246443201", "0.021384747", "0.212586296", "0.088772955", "0.028310724", "-0.016191159",
			"-0.082268359", "-0.220816395"
		],
		["-0.285235852", "0.172788823", "-0.088467773", "0.154623859", "0.710820104", "-0.215442058", "-0.289179896",
			"-0.112420252", "0.050522605", "-0.047894607", "-0.012854574", "-0.188989098", "-0.022718751", "0.109940596",
			"-0.124211801", "0.188718675"
		],
	],
	name: ["打架指数", "后期指数", "运营指数", "奇迹指数"],
	team: ["TOP","BLG","FPX","RNG","iG","EDG","SDG","V5","SN","JDG","VG","WE","SS","RW","LGD","OMG"],
	color3: ['#86E3CE', '#D0E6A5', '#FFDD94', '#FA897B'],
	color2: ['#3399CC', '#CCFFCC', '#99CCCC', '#99CCFF'],

	color4: ['#BF4226', '#E1C0D8', '#F1CFE5', '#A9A5A2']
}
var STACK_COUNT = 4;
var stackBarOption = {
	grid: [{
		left: '10%',
		bottom: '10%',
		top: '20%',
		right: '10%',
		containLabel: true,
	}],
	tooltip: {
		trigger: 'axis',
		axisPointer: { // 坐标轴指示器，坐标轴触发有效
			type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		}
	},
	brush: {
		toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
		xAxisIndex: 0
	},
	toolbox: {
		feature: {
			magicType: {
				type: ['stack', 'tiled']
			},
			dataView: {}
		}
	},
	legend: {
		data: stackBar.name,
		// color: stackBar.color,
		align: 'left',
		left: 75
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true
	},
	xAxis: {
		type: 'category',
		data: stackBar.team,
	},
	yAxis: {
		type: 'value',
	},
	series: []
}
for (var i = 0; i < STACK_COUNT; i++) {
	stackBarOption.series[i] = ({
		name: stackBar.name[i],
		type: 'bar',
		stack: '总量',
		label: {
			normal: {
				// show: true,
				position: 'insideRight',
			}
		},
		data: stackBar.data[i],

		// 		itemStyle: {
		// 			normal: {
		// 				color: stackBar.color[i],
		// 			}
		// 		},

	})
}
myChart.setOption(stackBarOption, true);
