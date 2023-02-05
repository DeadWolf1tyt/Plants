const cityBlock = document.querySelector('.cityBlock');
const selectBlockCityList = document.querySelector('.selectBlockCity__list');
const selectBlockCityItem = document.querySelectorAll('.selectBlockCity__item');
const cityPopup = document.querySelectorAll('.cityPopup');

function openCloseListCity() {
    selectBlockCityList.classList.toggle('_active');
    cityPopup[0].classList.remove('_active');
    cityPopup[1].classList.remove('_active');
    cityPopup[2].classList.remove('_active');
    cityPopup[3].classList.remove('_active');
}

function selectCity0() {
    selectBlockCityList.classList.toggle('_active');
    cityPopup[0].classList.add('_active');
}
function selectCity1() {
    selectBlockCityList.classList.toggle('_active');
    cityPopup[1].classList.add('_active');
}
function selectCity2() {
    selectBlockCityList.classList.toggle('_active');
    cityPopup[2].classList.add('_active');
}
function selectCity3() {
    selectBlockCityList.classList.toggle('_active');
    cityPopup[3].classList.add('_active');
}

selectBlockCityItem[0].addEventListener('click', selectCity0);
selectBlockCityItem[1].addEventListener('click', selectCity1);
selectBlockCityItem[2].addEventListener('click', selectCity2);
selectBlockCityItem[3].addEventListener('click', selectCity3);

cityBlock.addEventListener('click', openCloseListCity);

