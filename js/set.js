$.get("data/competition.json", function(d) {
	var comName = [];
	for (var i = 0; i < d.length; i++){
		comName.push(d[i].name);
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
		console.log(html)
	}
	$(".copm").click(function(d){
		startX(d.currentTarget.id)
	})
}

