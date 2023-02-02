const gardens = document.querySelectorAll('._gardens');
const planting = document.querySelectorAll('._planting')
const lawn = document.querySelector('._lawn');
const button = document.querySelectorAll('.button');

let counterGardens = 0;
let counterPlanting = 0;
let counterLawn = 0;
    
function blurAddGardens () {
    if (counterGardens === 0) {
        gardens[0].classList.remove('_blurAdd');
        gardens[1].classList.remove('_blurAdd');
        planting[0].classList.add('_blurAdd');
        planting[1].classList.add('_blurAdd');
        planting[2].classList.add('_blurAdd');
        lawn.classList.add('_blurAdd');
        button[0].classList.add('_active');
        counterGardens += 1;
    }  else if (counterGardens === 1 && (counterPlanting === 2 || counterLawn === 2)) {
        button[0].classList.remove('_active');
        counterGardens = 0;
        gardens[0].classList.add('_blurAdd');
        gardens[1].classList.add('_blurAdd');
    } else if (counterGardens === 1 && (counterPlanting === 0 || counterLawn === 0)) {
        button[0].classList.remove('_active');
        counterGardens = 0;
        planting[0].classList.remove('_blurAdd');
        planting[1].classList.remove('_blurAdd');
        planting[2].classList.remove('_blurAdd');
        lawn.classList.remove('_blurAdd');
    } else if (counterGardens === 2 && (counterPlanting === 1 || counterLawn === 1)) {
        counterGardens = 0;
        gardens[0].classList.add('_blurAdd');
        gardens[1].classList.add('_blurAdd');
        button[0].classList.remove('_active');
    } else if (counterGardens === 2) {
        planting[0].classList.remove('_blurAdd');
        planting[1].classList.remove('_blurAdd');
        planting[2].classList.remove('_blurAdd');
        lawn.classList.remove('_blurAdd');
        button[0].classList.remove('_active');
        counterGardens = 0;
    }
    
    if (counterPlanting === 1) {
        counterPlanting += 1;
        planting[0].classList.remove('_blurAdd');
        planting[1].classList.remove('_blurAdd');
        planting[2].classList.remove('_blurAdd');
    } else if (counterPlanting === 2 && counterLawn === 1) {
        counterPlanting = 0;
        planting[0].classList.add('_blurAdd');
        planting[1].classList.add('_blurAdd');
        planting[2].classList.add('_blurAdd');
        button[2].classList.remove('_active');
    } 

    if (counterLawn === 1) {
        counterLawn += 1;
        lawn.classList.remove('_blurAdd');
    } else if (counterLawn === 2 && counterPlanting === 2) {
        counterLawn = 0;
        lawn.classList.add('_blurAdd');
        button[1].classList.remove('_active');
    }
    
    
}

function blurAddPlanting () {
    if (counterPlanting === 0) {
        planting[0].classList.remove('_blurAdd');
        planting[1].classList.remove('_blurAdd');
        planting[2].classList.remove('_blurAdd');
        gardens[0].classList.add('_blurAdd');
        gardens[1].classList.add('_blurAdd');
        lawn.classList.add('_blurAdd');
        button[2].classList.add('_active');
        counterPlanting += 1;
    } else if (counterPlanting === 1 && counterGardens === 0 && counterLawn === 0) {
        button[2].classList.remove('_active');
        counterPlanting = 0;
        gardens[0].classList.remove('_blurAdd');
        gardens[1].classList.remove('_blurAdd');
        lawn.classList.remove('_blurAdd');
    } else if (counterPlanting === 1 && (counterGardens === 2 || counterLawn === 2)) {
        planting[0].classList.add('_blurAdd');
        planting[1].classList.add('_blurAdd');
        planting[2].classList.add('_blurAdd');
        button[2].classList.remove('_active');
        counterPlanting = 0;
    }else if (counterPlanting === 2 && (counterGardens === 1 || counterLawn === 1)) {
        counterPlanting = 0;
        planting[0].classList.add('_blurAdd');
        planting[1].classList.add('_blurAdd');
        planting[2].classList.add('_blurAdd');
        button[2].classList.remove('_active');
    } else if (counterPlanting === 2) {
        gardens[0].classList.remove('_blurAdd');
        gardens[1].classList.remove('_blurAdd');
        lawn.classList.remove('_blurAdd');
        button[2].classList.remove('_active');
        counterPlanting = 0;
    }
    
    if (counterGardens === 1) {
        counterGardens += 1;
        gardens[0].classList.remove('_blurAdd');
        gardens[1].classList.remove('_blurAdd');
    } else if (counterGardens === 2 && counterLawn === 1) {
        counterGardens = 0;
        gardens[0].classList.add('_blurAdd');
        gardens[1].classList.add('_blurAdd');
        button[0].classList.remove('_active');
    } 

    if (counterLawn === 1) {
        counterLawn += 1;
        lawn.classList.remove('_blurAdd');
    } else if (counterLawn === 2 && counterGardens === 2) {
        counterLawn = 0;
        lawn.classList.add('_blurAdd');
        button[1].classList.remove('_active');
    }


    
}

function blurAddLawn () {
    if (counterLawn === 0) {
        lawn.classList.remove('_blurAdd');
        gardens[0].classList.add('_blurAdd');
        gardens[1].classList.add('_blurAdd');
        planting[0].classList.add('_blurAdd');
        planting[1].classList.add('_blurAdd');
        planting[2].classList.add('_blurAdd');
        button[1].classList.add('_active');
        counterLawn += 1;
    } else if (counterLawn === 1 && counterGardens === 0 && counterPlanting === 0) {
        button[1].classList.remove('_active');
        counterLawn = 0;
        gardens[0].classList.remove('_blurAdd');
        gardens[1].classList.remove('_blurAdd');
        planting[0].classList.remove('_blurAdd');
        planting[1].classList.remove('_blurAdd');
        planting[2].classList.remove('_blurAdd');
    } else if (counterLawn === 1 && (counterGardens === 2 || counterPlanting === 2)) {
        button[1].classList.remove('_active');
        counterLawn = 0;
        lawn.classList.add('_blurAdd');
    } else if (counterLawn === 2 && (counterGardens === 1 || counterPlanting === 1)) {
        counterLawn = 0;
        lawn.classList.add('_blurAdd');
        button[1].classList.remove('_active');
    } else if (counterLawn === 2) {
        gardens[0].classList.remove('_blurAdd');
        gardens[1].classList.remove('_blurAdd');
        planting[0].classList.remove('_blurAdd');
        planting[1].classList.remove('_blurAdd');
        planting[2].classList.remove('_blurAdd');
        button[1].classList.remove('_active');
        counterLawn = 0;
    }
    
    if (counterGardens === 1) {
        counterGardens += 1;
        gardens[0].classList.remove('_blurAdd');
        gardens[1].classList.remove('_blurAdd');
    } else if (counterGardens === 2 && counterPlanting === 1) {
        counterGardens = 0;
        gardens[0].classList.add('_blurAdd');
        gardens[1].classList.add('_blurAdd');
        button[0].classList.remove('_active');
    }

    if (counterPlanting === 1) {
        counterPlanting += 1;
        planting[0].classList.remove('_blurAdd');
        planting[1].classList.remove('_blurAdd');
        planting[2].classList.remove('_blurAdd');
    } else if (counterPlanting === 2 && counterGardens === 2) {
        counterPlanting = 0;
        planting[0].classList.add('_blurAdd');
        planting[1].classList.add('_blurAdd');
        planting[2].classList.add('_blurAdd');
        button[2].classList.remove('_active');
    }

    
}


