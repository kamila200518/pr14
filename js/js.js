"use strict";

let tabBtns = document.querySelectorAll('.tab__btn');
let tabTexts = document.querySelectorAll('.tab__text');

tabBtns.forEach((item, index) => {
    item.addEventListener('click', function() {
        document.querySelector('.tab__btn.active-btn').classList.remove('active-btn');
        item.classList.add('active-btn');

        document.querySelector('.tab__text.active').classList.remove('active');
        tabTexts[index].classList.add('active');
    });
});