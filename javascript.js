(function activateTheme() {
	var checkbox = document.querySelector('input');

	checkbox.addEventListener('click', function() {
		if (this.checked) {
			document.documentElement.setAttribute('data-theme', 'dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
			localStorage.setItem('theme', 'light');
		}
	});

	var currentTheme = localStorage.getItem('theme');
	if (currentTheme) {
		document.documentElement.setAttribute('data-theme', currentTheme);
	}
})();
