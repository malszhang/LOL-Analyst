function setWindow() {
	let height = window.innerHeight || document.body.clientHeight;
	let width = window.innerWidth || document.documentElement.clientWidth;
	document.getElementById("mainShow").style.height = height+'px';
	document.getElementById("mainShow").style.width = width+'px';
}
setWindow();
