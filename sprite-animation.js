
let character = document.createElement('img')
character.src = './images/Cat-character/static.gif'
document.body.append(character)

character.classList.add("catToken")

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

document.addEventListener('keyup', () => {
    handleDirectionChange(null)
})