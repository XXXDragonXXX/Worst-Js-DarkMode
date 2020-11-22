document.querySelector('input').addEventListener('click', function() {
	if (this.checked) {
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark');
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light');
	}
});

var theme = localStorage.getItem('theme');

if (theme === 'dark') {
	document.querySelector('input').checked = true;
	documentElement.setAttribute('data-theme', 'dark');
} else {
	documentElement.setAttribute('data-theme', 'dark');
}
