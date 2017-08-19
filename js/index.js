function fn(){
	(function() {
		function changeSize() {
			document.documentElement.style.fontSize = 25 * document.documentElement.clientWidth / 375 + "px";
		}
		changeSize();
		window.addEventListener("resize", changeSize, false);
	})();				
}
