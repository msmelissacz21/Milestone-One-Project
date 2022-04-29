// Note: this generates a tile map base on the for loop below

let mapData = '\
511111111111111111111116\n\
20000000000000000000a338\n\
200000000000000000004\n\
20000000000000000000c116\n\
20000000000ab00000000004\n\
20000000000cd00000000004\n\
200000000000000000000004\n\
200000000000000000000004\n\
200000000000000000000004\n\
733333333333333333333338\n\
'
// Note: need to define fishArray for fish to be appended/pushed to
let fishArray = []

// Note: places a fish randomly from left and top styling.  It also randomly places the fish inside of the tiles that randomly spawn a fish.  ZIndex is 200 so
// that the fish image will be on top of the tile map.  The fish that are appended to the map and also stored in an array with push.  This is to help with
// scoring and collision.
function placeFish(left, top) {
    if(Math.random() > .2) {
        left = left + (Math.random() * 128)
        top = top + (Math.random() * 128)
        let fish = document.createElement('img')
        fish.src = './images/Goldfish/not-a-goldfish.png'
        fish.style.left = left + 'px'
        fish.style.top = top + 'px'
        fish.style.position = 'absolute'
        fish.style.zIndex = '200'
        map.appendChild(fish)
        fishArray.push(fish)
    }
}

// Note: setting the timing of the game and displaying that information
time = 25;
let gametime = setInterval(()=> {
    hud.innerHTML = hud.innerHTML.substring(0, hud.innerHTML.indexOf('|')) + '| Time:' + time--
    if(time <= 0) {
        map.style.visibility = 'hidden'
        hud.style.visibility = 'hidden'
        document.body.style.backgroundColor = '#a83232'
        document.getElementById('lose').style.visibility = 'visible'
    }
}, 1000)

let points = 0
let hud = document.getElementById('hud')
hud.innerHTML = '<h1>Points: ' + points++ + '</h1> |'
// Note: half cat width is 64
// programming for the collision of the intersection of the cat and the fish
function intersection(fishElement, catLeft, catTop) {
    if(!fishElement) {
        return
    }
    // converting string to a number and adding 10 
    let fishCenterLeft = Number(fishElement.style.left.replace('px', ''))+10
    let fishCenterTop = Number(fishElement.style.top.replace('px', ''))+10

// 64 px is have the size of the cat image
    if(fishCenterLeft >= catLeft - 64 && fishCenterLeft <= catLeft + 64) {
        if(fishCenterTop >= catTop - 64 && fishCenterTop <= catTop + 64) {
            map.removeChild(fishElement)
            hud.innerHTML = '<h1>Points: ' + points++ + '</h1> ' + hud.innerHTML.substring(hud.innerHTML.indexOf('|'), hud.innerHTML.length)

             // hiding the hud after game time runs down and the player wins displaying WIN and a green background
            if(points >= 45) {
                map.style.visibility = 'hidden'
                hud.style.visibility = 'hidden'
                document.body.style.backgroundColor = '#46a832'
                clearInterval(gametime)
                document.getElementById('win').style.visibility = 'visible'
            }
            return true
        }
    }
    return false
}

// Note: setting the specific fish to undefined the next time it gets called so it is no longer displayed
setInterval(() => {
    for(let i=0; i<fishArray.length; i++) {

        if(intersection(fishArray[i], charLeft, charTop)) {
            fishArray[i] = undefined
        }
    }
},100)


let x = 0
let y = 0

// This can be compressed, future update option as of end of April 2022
// Tile size is 128 px

for (let char of mapData) {
    if(char != '\n') {
        placeFish(x, y);
    }
    if(char== '0') {
        let dTile = document.createElement('img')
        dTile.style.position = 'absolute'
        dTile.style.left = x+'px'
        dTile.style.top = y+'px'
        dTile.src = './images/Map/dirt_tile.png'
        map.append(dTile)
    } else if (char== '1') {
        let dTile = document.createElement('img')
        dTile.style.position = 'absolute'
        dTile.style.left = x+'px'
        dTile.style.top = y+'px'
        dTile.src = './images/Map/grass_side_tile.png'
        map.append(dTile)
    }  else if (char== '2') {
        let dTile = document.createElement('img')
        dTile.style.position = 'absolute'
        dTile.style.left = x+'px'
        dTile.style.top = y+'px'
        dTile.style.transform = 'rotate(270deg)'
        dTile.src = './images/Map/grass_side_tile.png'
        map.append(dTile)
    }  else if (char== '3') {
        let dTile = document.createElement('img')
        dTile.style.position = 'absolute'
        dTile.style.left = x+'px'
        dTile.style.top = y+'px'
        dTile.style.transform = 'rotate(180deg)'
        dTile.src = './images/Map/grass_side_tile.png'
        map.append(dTile)
    }  else if (char== '4') {
        let dTile = document.createElement('img')
        dTile.style.position = 'absolute'
        dTile.style.left = x+'px'
        dTile.style.top = y+'px'
        dTile.style.transform = 'rotate(90deg)'
        dTile.src = './images/Map/grass_side_tile.png'
        map.append(dTile)
    } else if (char== '5') {
        let dTile = document.createElement('img')
        dTile.style.position = 'absolute'
        dTile.style.left = x+'px'
        dTile.style.top = y+'px'
        dTile.src = './images/Map/corner_tile.png'
        map.append(dTile)
    } else if (char== '6') {
        let dTile = document.createElement('img')
        dTile.style.position = 'absolute'
        dTile.style.left = x+'px'
        dTile.style.top = y+'px'
        dTile.style.transform = 'rotate(90deg)'
        dTile.src = './images/Map/corner_tile.png'
        map.append(dTile)
    }  else if (char== '7') {
        let dTile = document.createElement('img')
        dTile.style.position = 'absolute'
        dTile.style.left = x+'px'
        dTile.style.top = y+'px'
        dTile.style.transform = 'rotate(270deg)'
        dTile.src = './images/Map/corner_tile.png'
        map.append(dTile)
    }  else if (char== '8') {
        let dTile = document.createElement('img')
        dTile.style.position = 'absolute'
        dTile.style.left = x+'px'
        dTile.style.top = y+'px'
        dTile.style.transform = 'rotate(180deg)'
        dTile.src = './images/Map/corner_tile.png'
        map.append(dTile)
    } else if (char== 'a') {
        let dTile = document.createElement('img')
        dTile.style.position = 'absolute'
        dTile.style.left = x+'px'
        dTile.style.top = y+'px'
        dTile.style.transform = 'rotate(270deg)'
        dTile.src = './images/Map/inner_corner_tile.png'
        map.append(dTile)
    } else if (char== 'b') {
        let dTile = document.createElement('img')
        dTile.style.position = 'absolute'
        dTile.style.left = x+'px'
        dTile.style.top = y+'px'
        dTile.src = './images/Map/inner_corner_tile.png'
        map.append(dTile)
    }  else if (char== 'c') {
        let dTile = document.createElement('img')
        dTile.style.position = 'absolute'
        dTile.style.left = x+'px'
        dTile.style.top = y+'px'
        dTile.style.transform = 'rotate(180deg)'
        dTile.src = './images/Map/inner_corner_tile.png'
        map.append(dTile)
    }  else if (char== 'd') {
        let dTile = document.createElement('img')
        dTile.style.position = 'absolute'
        dTile.style.left = x+'px'
        dTile.style.top = y+'px'
        dTile.style.transform = 'rotate(90deg)'
        dTile.src = './images/Map/inner_corner_tile.png'
        map.append(dTile)
    }else if (char== '\n') {
        x = -128
        y += 128
    }
    x += 128
}

