const popupLink = document.querySelector('.questions__write');
const popupArea = document.querySelector('.popup__area');
const body = document.querySelector('body');
const popup = document.querySelector('.popup');

popupLink.addEventListener('click', () => {
	popup.classList.add('active');
	body.classList.add('lock');
});
popupArea.addEventListener('click', () => {
	popup.classList.remove('active');
	body.classList.remove('lock');
});