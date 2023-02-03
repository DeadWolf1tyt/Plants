const pricesAccordion = document.querySelectorAll('.prices__accordion');
const pricesButton = document.querySelectorAll('.prices__button');
const buttonUnactive = document.querySelectorAll('.prices__button__unactive');
const buttonActive = document.querySelectorAll('.prices__button__active');
const pricesText = document.querySelectorAll('.prices__text');

let button1 = 0;
let button2 = 0;
let button3 = 0;

function buttonPrices1 () {
    if (button1 === 0 && button2 === 0 && button3 === 0) {
        button1Open();
    } else if (button1 === 1 && (button2 === 0 && button3 === 0)) {
        button1Close();
    } else if (button1 === 0 && button2 === 1) {
        button1Open();
        button2Close();
    } else if (button1 === 0 && button3 === 1) {
        button1Open();
        button3Close();
    }
}

function buttonPrices2 () {
    if (button2 === 0 && (button1 === 0 && button3 === 0)) {
        button2Open();
    } else if (button2 === 1 && (button1 === 0 && button3 === 0)) {
        button2Close();
    } else if (button2 === 0 && button1 === 1) {
        button2Open();
        button1Close();
    } else if (button2 === 0 && button3 === 1) {
        button2Open();
        button3Close();
    }
}

function buttonPrices3 () {
    if (button3 === 0 && (button2 === 0 && button1 === 0)) {
        button3Open();
    } else if (button3 === 1 && (button2 === 0 && button1 === 0)) {
        button3Close();
    } else if (button3 === 0 && button2 === 1) {
        button3Open();
        button2Close();
    } else if (button3 === 0 && button1 === 1) {
        button3Open();
        button1Close();
    }
}

function button1Open () {
    button1 += 1;
    pricesAccordion[0].classList.toggle('_active');
    pricesButton[0].classList.toggle('_active');
    buttonUnactive[0].classList.toggle('_active');
    buttonActive[0].classList.toggle('_active');
    pricesText[0].classList.toggle('_active');
}
function button1Close () {
    button1 = 0;
    pricesAccordion[0].classList.toggle('_active');
    pricesButton[0].classList.toggle('_active');
    buttonUnactive[0].classList.toggle('_active');
    buttonActive[0].classList.toggle('_active');
    pricesText[0].classList.toggle('_active');
}
function button2Open () {
    button2 += 1;
    pricesAccordion[1].classList.toggle('_active');
    pricesButton[1].classList.toggle('_active');
    buttonUnactive[1].classList.toggle('_active');
    buttonActive[1].classList.toggle('_active');
    pricesText[1].classList.toggle('_active');
}
function button2Close () {
    button2 = 0;
    pricesAccordion[1].classList.toggle('_active');
    pricesButton[1].classList.toggle('_active');
    buttonUnactive[1].classList.toggle('_active');
    buttonActive[1].classList.toggle('_active');
    pricesText[1].classList.toggle('_active');
}
function button3Open () {
    button3 += 1;
    pricesAccordion[2].classList.toggle('_active');
    pricesButton[2].classList.toggle('_active');
    buttonUnactive[2].classList.toggle('_active');
    buttonActive[2].classList.toggle('_active');
    pricesText[2].classList.toggle('_active');
}
function button3Close () {
    button3 = 0;
    pricesAccordion[2].classList.toggle('_active');
    pricesButton[2].classList.toggle('_active');
    buttonUnactive[2].classList.toggle('_active');
    buttonActive[2].classList.toggle('_active');
    pricesText[2].classList.toggle('_active');
}