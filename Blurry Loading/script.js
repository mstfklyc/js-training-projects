const bg = document.querySelector(".bg");
const loadingtext = document.querySelector(".loading-text");

let load = 0;

let int = setInterval(blurring, 25);
const scale = (number, inMin, inMax, outMin, outMax) => {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(int);
    }
    loadingtext.innerText = `${load}`;
    loadingtext.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 15, 0)}px)`
}
