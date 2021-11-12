const forTitle = document.querySelectorAll('.faq-item__title');

forTitle.forEach(e => {
	e.addEventListener('click', item => {
		e.parentNode.classList.toggle('active')
	})
});