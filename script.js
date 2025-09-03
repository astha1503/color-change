console.log("JS is working!");

const simple_color = ['red', 'green', 'pink', 'black', 'white', 'brown'];
const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');
const colorText = document.querySelector('.color');
const simple = document.querySelector('.simple');
const hex = document.querySelector('.hex');
const body = document.querySelector('.body'); 

let isHexActive = false;

hex.addEventListener('click', function () {
    isHexActive = true;
    hex.classList.toggle('colored');
});

btn.addEventListener('click', function () {
    let color;

    if (isHexActive) {
        color = getcolor(hexArray);
        // isHexActive = false;
    } else {
        color = simple_color[randomNumber()];
    }

    colorText.innerHTML = color;
    body.style.backgroundColor = color;
});

function randomNumber() {
    return Math.floor(Math.random() * simple_color.length);
}

function getcolor(hexArray) {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hexArray[Math.floor(Math.random() * hexArray.length)];
    }
    return color;
}
