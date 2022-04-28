let map = document.getElementById('map');

let intID1
let intID2
let intID3
let intID4


function pixelMath(pixels, moveNum) {
    pixels = pixels.replace('px', '');
    let addedPixels = Number(pixels) + moveNum;
    return addedPixels+'px'

}

document.addEventListener('keydown', (event) => {
    if (event.repeat) {
        return
    }
    switch (event.key) {
        case 'ArrowUp':
            intID1 = setInterval(() => { 
                map.style.top = pixelMath(map.style.top, 1);
            },100/window.moveSpeed)
            break;
        case 'ArrowDown':
            intID2 = setInterval(() => {
                map.style.top = pixelMath(map.style.top, -1);
            },100/window.moveSpeed)
            break;
        case 'ArrowRight':
            intID3 = setInterval(() => {
                map.style.left = pixelMath(map.style.left, -1);
            },100/window.moveSpeed)
            break;
        case 'ArrowLeft':
            intID4 = setInterval(() => {
                map.style.left = pixelMath(map.style.left, 1);
            },100/window.moveSpeed)
            break;
    }

});

document.addEventListener('keyup', () => {
    clearInterval(intID1);
    clearInterval(intID2);
    clearInterval(intID3);
    clearInterval(intID4);
});

