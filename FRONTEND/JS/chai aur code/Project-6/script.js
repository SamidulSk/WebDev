//generate random color
const randomcolor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) { // loop on color
        color += hex[(Math.floor(Math.random() * 16))] //0 to 16 index
    }
    return color;
}
let intervalID;
const startChangingColor = function () {
    if (!intervalID) {
        intervalID = setInterval(changeBGcolor, 100)
    }
    function changeBGcolor() {
        document.body.style.backgroundColor = randomcolor();
    }
}
const stopChangingColor = function () {
    clearInterval(intervalID);
    intervalID = null;
}
document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)
