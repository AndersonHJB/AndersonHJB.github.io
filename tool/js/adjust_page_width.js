(function () {
	let body = document.getElementsByTagName("body");
	for (let i = 0; i < body.length; ++i) {
		if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
			body[i].setAttribute("class", "page-for-phone"); //移动端
		} else {
			body[i].setAttribute("class", "page-for-pc"); //PC端
		}
	}
})();