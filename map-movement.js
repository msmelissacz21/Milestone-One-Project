let map = document.getElementById('map');

// Note: seperate intervalID's were needed to fix a bug that would occur when two of the keys were pressed at once
// not allowing the clearInterval function to happen as the ID was written over.
let intID1
let intID2
let intID3
let intID4

// Note: Numbers() converts the string value pixels to a number so that it can be added to moveNum which is a type number
// It then adds the px back to the new addedPixels value
function pixelMath(pixels, moveNum) {
    pixels = pixels.replace('px', '');
    let addedPixels = Number(pixels) + moveNum;
    return addedPixels+'px'

}

let charLeft = (window.innerWidth / 2) + 64
let charTop = (window.innerHeight / 2) + 64
// Note: listens for a key being pressed down
document.addEventListener('keydown', (event) => {
    if (event.repeat) {
        return
    }
    switch (event.key) {
        case 'ArrowUp':
            intID1 = setInterval(() => { 
                map.style.top = pixelMath(map.style.top, 1);
                charTop--;
            },100/window.moveSpeed)
            break;
        case 'ArrowDown':
            intID2 = setInterval(() => {
                map.style.top = pixelMath(map.style.top, -1);
                charTop++;
            },100/window.moveSpeed)
            break;
        case 'ArrowRight':
            intID3 = setInterval(() => {
                map.style.left = pixelMath(map.style.left, -1);
                charLeft++;
            },100/window.moveSpeed)
            break;
        case 'ArrowLeft':
            intID4 = setInterval(() => {
                map.style.left = pixelMath(map.style.left, 1);
                charLeft--;
            },100/window.moveSpeed)
            break;
    }

});


// Note: clearInterval takes in the intervalID from setInterval to cancel the action
document.addEventListener('keyup', () => {
    clearInterval(intID1);
    clearInterval(intID2);
    clearInterval(intID3);
    clearInterval(intID4);
});

