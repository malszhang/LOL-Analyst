$.get("data/competition.json", function(d) {
	var comName = [];
	for (var i = 0; i < d.length; i++) {
		for (var j = 0; j < d[i].num; j++) {
			comName.push(d[i].name + "-" + (j + 1));
		}
	}
	setChoose(comName);
});
setWindow();
//选择比赛

/**
 * 设置窗口大小
 */
function setWindow() {
	let height = window.innerHeight || document.body.clientHeight;
	let width = window.innerWidth || document.documentElement.clientWidth;
	document.getElementById("mainShow").style.height = height + 'px';
	document.getElementById("mainShow").style.width = width * 0.98 + 'px';
}
/**
 * 设置选择框数据
 * @param {Object} data 可选择的数据
 */
function setChoose(data) {
	for (var i = 0; i < data.length; i++) {
		let html = "<li class=\"copm\" id=\"" + data[i] + "\"><a>" + data[i] + "</a></li>";
		$("#copMenu").append(html);
	}
	$(".copm").click(function(d) {
		var compName = d.currentTarget.id;
		startX(compName);
		drawPdRadar(compName);
		setGroup(compName);
		traceDraw(compName);
	})
}
/**
 * 设置团战选择框 包括团战数据和选手热点
 * @param {Object} compName 比赛名称
 */
function setGroup(compName) {
	$.get("data/comp/" + compName + ".json", function(d) {
		var compNames = compName.split("-");
		var comName = [];
		var teamNum = 2;
		$("#compGroup").empty();
		for (var i = 0; i < d.name.length; i++) {
			let html = "<option value=\"" + compName + "_" + i + "\">" + d.name[i] + "</option>";
			$("#compGroup").append(html);
		}
		for (var i = 1; i <= teamNum; i++) {
			var teamPlayer = "#team" + i + "_players";
			var teamName = "#team" + i + "_name";
			$(teamPlayer).empty();
			$(teamName)[0].innerHTML = "<b>"+compNames[i * 2 - 2]+"</b>";
			for (var k = 0; k < d.player[i - 1].length; k++) {
				var heatName = compName+"-"+d.player[i - 1][k];
				let html = "<li class=\"playerHeat\" id=\"" + heatName + "\"><a>" + d.player[i - 1][k] + "</a></li>";
				$(teamPlayer).append(html);
			}
		}
		$(".playerHeat").click(function(d) {
			var heatName = d.currentTarget.id;
			drawPlayerHeat(heatName);
			var html = "<h4><b>"+heatName.split("-")[4]+"</b></h4>";
			$("#currentPlayer").empty();
			$("#currentPlayer").append(html);
		})
		groupBarDraw(compName, 0);
	});
	
	$("#compGroup").change(function() {
		var groupName = $("#compGroup").val().split("_");
		groupBarDraw(groupName[0], parseInt(groupName[1]));
	});
	
}
