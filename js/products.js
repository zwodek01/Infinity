"use strict"

function showPopup(imageUrl, itemText) {
    const popupElement = document.querySelector('.popup__content');
    popupElement.classList.add('popup__content--active');

    const popupImage = document.querySelector('.popup__img');
    popupImage.setAttribute('src', imageUrl);

    const popupText = document.querySelector('.popup__text');
    popupText.innerHTML = itemText;
}

function hidePopup() {
    const popupElement = document.querySelector('.popup__content');
    popupElement.classList.remove('popup__content--active');
}

document.addEventListener('DOMContentLoaded', function () {
    const popup = document.querySelector('.products__popup');
    popup.addEventListener('click', hidePopup);


    const itemList = document.querySelectorAll('.items__item');
    for (let i = 0; i < itemList.length; i++) {
        itemList[i].addEventListener('click', function () {
            const imageUrl = this.querySelector('.items__img').getAttribute('src');
            const itemText = this.querySelector('.items__description').innerHTML;

            showPopup(imageUrl, itemText);
        });
    }
});




