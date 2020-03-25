$.get("data/competition.json", function(d) {
	var comName = [];
	for (var i = 0; i < d.length; i++){
		for (var j = 0; j < d[i].num; j++){
			comName.push(d[i].name+"-"+(j+1));
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
	document.getElementById("mainShow").style.height = height+'px';
	document.getElementById("mainShow").style.width = width*0.98+'px';
}
/**设置选择框数据
 * @param {Object} data
 */
function setChoose(data) {
	for (var i = 0; i < data.length; i++){
		let html = "<li class=\"copm\" id=\""+data[i]+"\"><a>"+data[i]+"</a></li>";
		$("#copMenu").append(html);
	}
	$(".copm").click(function(d){
		var compName = d.currentTarget.id;
		startX(compName);
		drawPdRadar(compName);
		setGroup(compName);
		traceDraw(compName);
	})
}
function setGroup(compName){
	$.get("data/comp/"+compName+".json", function(d) {
		var comName = [];
		$("#compGroup").empty();
		for (var i = 0; i < d.name.length; i++){
			let html = "<option value=\""+compName+"_"+i+"\">"+d.name[i]+"</option>";
			$("#compGroup").append(html);
		}
		groupBarDraw(compName, 0);
	});
	$("#compGroup").change(function(){
		showGroupDraw();
	});
}
function showGroupDraw(){
	var groupName = $("#compGroup").val().split("_");
	groupBarDraw(groupName[0], parseInt(groupName[1]));
}

