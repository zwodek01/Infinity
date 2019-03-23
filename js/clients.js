"use strict"

function nextSlide() {
    const slidesNumber = document.querySelectorAll('.slider__slide').length;
    const activeSlide = document.querySelector('.slider__slide--active');
    let activeSlideId = parseInt(activeSlide.dataset.slideid);

    if (activeSlideId > slidesNumber - 1) {
        activeSlideId = 0;
    }
    changeSlide(activeSlideId + 1);
}

function prevSlide() {
    const slidesNumber = document.querySelectorAll('.slider__slide').length;
    const activeSlide = document.querySelector('.slider__slide--active');
    let activeSlideId = parseInt(activeSlide.dataset.slideid);

    if (activeSlideId == 1) {
        activeSlideId = slidesNumber + 1;
    }
    changeSlide(activeSlideId - 1);
}

function changeSlide(newSlideId) {
    const activeSlide = document.querySelector('.slider__slide--active');
    activeSlide.classList.remove('slider__slide--active');

    const newSlide = document.querySelector('[data-slideid = "' + newSlideId + '"]');
    newSlide.classList.add('slider__slide--active');

    const activePin = document.querySelector('.pins__pin--active');
    activePin.classList.remove('pins__pin--active');

    const newPin = document.querySelector('[data-pinid = "' + newSlideId + '"]');
    newPin.classList.add('pins__pin--active');
}

function pinClick() {
    const pinsNumber = document.querySelectorAll('.pins__pin').length;

    for (let i = 1; i <= pinsNumber; i++) {
        let pin = document.querySelector('[data-pinid = "' + i + '"]');
        pin.addEventListener('click', function () {
            changeSlide(i);
            clearInterval(interval);
            interval = setInterval(nextSlide, 3000);
        });
    }
}

function addEventsForMobile() {
    const slidesList = document.querySelectorAll('.slider__slide');
    let touchDirection;

    for (let i = 0; i < slidesList.length; i++) {

        slidesList[i].addEventListener('touchstart', function (event) {
            const startTouch = event.changedTouches[0].pageX;
            touchDirection = startTouch;
        });

        slidesList[i].addEventListener('touchend', function (event) {
            const endTouch = event.changedTouches[0].pageX;
            touchDirection -= endTouch;

            if (touchDirection > 0) {
                nextSlide();
                clearInterval(interval);
                interval = setInterval(nextSlide, 3000);
            } else if (touchDirection < 0) {
                prevSlide();
                clearInterval(interval);
                interval = setInterval(nextSlide, 3000);
            }
        });
    }
}

let interval = setInterval(nextSlide, 3000);

document.addEventListener('DOMContentLoaded', function () {
    pinClick();
    addEventsForMobile();
});