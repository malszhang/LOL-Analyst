setWindow();
setChoose(["1", "2", "3"]);
//选择比赛
$(".copm").click(function(d){
	console.log(d.currentTarget.id)
})
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
	let copData = data;
	for (let d in copData){
		let html = "<li class="+"copm"+" id=copm-"+d+"><a>"+d+"</a></li>";
		$("#copMenu").append(html);
	}
}

