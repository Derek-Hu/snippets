!(function() {
	var docEl = document.documentElement;

	function setRem() {
		docEl.style.fontSize = docEl.clientWidth / 3.75 + 'px';
	}

	window.addEventListener('resize', setRem);
	window.addEventListener('pageshow', e => {
		if (e.persisted) {
			setRem();
		}
	});

	setRem();
})();
