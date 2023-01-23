
const navWrapper = document.querySelector('.nav__wrapper');
const navigationIcon = document.querySelector('.navigation__icon');
const span1 = document.querySelector('.span1');
const span2 = document.querySelector('.span2');
const span3 = document.querySelector('.span3');
const span4 = document.querySelector('.span4');
const link1 = document.querySelector('._item-link1');
const link2 = document.querySelector('._item-link2');
const link3 = document.querySelector('._item-link3');
const link4 = document.querySelector('._item-link4');
const link5 = document.querySelector('._item-link5');

function menuBarOn () {
    
    document.body.classList.toggle('_lock');
    navWrapper.classList.toggle('_active');
    navigationIcon.classList.toggle('_active');
    span1.classList.toggle('_active');
    span2.classList.toggle('_active');
    span3.classList.toggle('_active');
    span4.classList.toggle('_active');
    link1.classList.toggle('_active');
    link2.classList.toggle('_active');
    link3.classList.toggle('_active');
    link4.classList.toggle('_active');
    link5.classList.toggle('_active');
}

function menuBarOff () {
    if (link3.classList.contains('_active')) {
        // document.body.classList.remove('_lock');
        // navWrapper.classList.remove('_active');
        // navigationIcon.classList.remove('_active');
        // span1.classList.remove('_active');
        // span2.classList.remove('_active');
        // span3.classList.remove('_active');
        // span4.classList.remove('_active');
        // link1.classList.remove('_active');
        // link2.classList.remove('_active');
        // link3.classList.remove('_active');
        // link4.classList.remove('_active');
        // link5.classList.remove('_active');
        menuBarOn();
    }
}