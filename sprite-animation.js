
let character = document.createElement('img')
character.src = './images/Cat-character/static.gif'
document.body.append(character)
// Note: appending the character image to the body of the html doc

character.classList.add("catToken")


// Note: the primary purpose of the lastDirection variable is to ensure the static cat image is facing the correct direction
// based on the direction it was walking previously
let lastDirection


// Note: handleDirectionChange function is defined here and takes in the parameter direction
// Note: static.gif is the left facing gif while static-right.gif is the right facing static position, could be updated for clarity
function handleDirectionChange(direction){
    if(direction === null){
        if (lastDirection === 'west') {
            character.src = `./images/Cat-character/static.gif`    
        }  else  {
            character.src = `./images/Cat-character/static-right.gif`
        }
    }
    if(direction === 'west'){
        character.src = `./images/Cat-character/west.gif`
        lastDirection = 'west'
    }
    if(direction === 'north'){
        character.src = `./images/Cat-character/north.gif`
    }
    if(direction === 'east'){
        character.src = `./images/Cat-character/east.gif`
        lastDirection = 'east'
    }
    if(direction === 'south'){
        character.src = `./images/Cat-character/south.gif`
    }
}

// Note: keydown listens for when any key is pressed on the keyboard
// Note: "ArrowUp" and the rest are set specifically to the arrow keys on the keyboard
// Note: the anonymous function takes in the parameter "event"
document.addEventListener('keydown', (event) => {
    if (event.repeat) {
        return
    }
    switch (event.key) {
        case 'ArrowUp':
            handleDirectionChange('north')
            break;
        case 'ArrowDown':
            handleDirectionChange('south')
            break;
        case 'ArrowRight':
            handleDirectionChange('east')
            break;
        case 'ArrowLeft':
            handleDirectionChange('west')
            break;
    }

});

// Note: keyup listens for when any key is let go on the keyboard
document.addEventListener('keyup', () => {
    handleDirectionChange(null)
})