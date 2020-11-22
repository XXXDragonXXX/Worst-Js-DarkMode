document.querySelector('input').addEventListener('click', function() {
	if (this.checked) {
		document.documentElement.setAttribute('data-theme', 'dark');
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
	}
});
