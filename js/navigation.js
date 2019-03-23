function showMenu() {
    const navElement = document.querySelector('.nav');
    navElement.classList.add('nav--overlay');
}

function hideMenu() {
    const navElement = document.querySelector('.nav');
    navElement.classList.remove('nav--overlay');
}

document.addEventListener('DOMContentLoaded', function () {
    const closeElement = document.querySelector('.nav__close-button');
    closeElement.addEventListener('click', hideMenu);

    const menuElement = document.querySelector('.nav__menu');
    menuElement.addEventListener('click', showMenu);

    const menuItems = document.querySelectorAll('.nav__item');
    menuItems.forEach(element => {
        element.addEventListener('click', hideMenu);
    });
})