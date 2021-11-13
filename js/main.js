const popupLink = document.querySelector('.questions__write');
const popupArea = document.querySelector('.popup__area');
const menu = document.querySelector('.menu');
const headerNavbar = document.querySelector('.header__navbar');
const menuIcon = document.querySelector('.menu__icon');
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
menuIcon.addEventListener('click', () => {
	menu.classList.toggle('active');
	headerNavbar.classList.toggle('active');
	body.classList.toggle('lock_burger');
});