const character = newImage('./images/Cat-character/static.gif')

function handleDirectionChange(direction){
    if(direction === null){
        character.src = `./images/Cat-character/static.gif`
    }
    if(direction === 'west'){
        character.src = `./images/Cat-character/west.gif`
    }
    if(direction === 'north'){
        character.src = `./images/Cat-character/north.gif`
    }
    if(direction === 'east'){
        character.src = `./images/Cat-character/east.gif`
    }
    if(direction === 'south'){
        character.src = `./images/Cat-character/south.gif`
    }
}

move(character).withArrowKeys(100, 250, handleDirectionChange)
