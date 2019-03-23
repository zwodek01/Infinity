"use strict"

function closeCookieBar() {
    const cookieElement = document.querySelector('.cookie-bar');
    cookieElement.classList.add('cookie-bar--hide');
    localStorage.setItem('cookie', 'true');
}

function checkCookie() {
    const cookieLocalStorage = localStorage.getItem('cookie');
    if (cookieLocalStorage) {
        closeCookieBar();
    }
}
document.addEventListener("DOMContentLoaded", function () {
    checkCookie();
    const closeButton = document.querySelector('.cookie-bar__button');
    closeButton.addEventListener('click', closeCookieBar);
});