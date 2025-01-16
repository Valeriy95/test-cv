const burgerMenuIcon = document.querySelector('.burger-menu__icon');
const burgerMenu = document.querySelector('.burger-menu');

burgerMenuIcon.addEventListener('click', function () {
    burgerMenu.classList.toggle('active')
    burgerMenuIcon.classList.toggle('icon__active')
})