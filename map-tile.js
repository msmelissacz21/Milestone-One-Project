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


let x = 0
let y = 0

for (let char of mapData) {
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

