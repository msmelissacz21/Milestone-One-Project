const character = newImage('./images/Cat-character/static.gif')

let lastDirection

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

move(character).withArrowKeys(100, 250, handleDirectionChange)
