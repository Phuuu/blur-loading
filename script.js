const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
    load++; //Increments load value

    if (load > 99) {
        clearInterval(int)
    } //Ensures load value doesnt excede value

    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0); //Maps the opacity in the time scale from 0-100 and then 1 opacity to 0

    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`; //Adds the blur function to go from 30px to 0 alongside the speed
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
} //Creates a function to map a range of numbers to another