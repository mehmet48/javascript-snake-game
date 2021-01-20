import{getinputdirection} from "./input.js"

export const snake_speed=5
const snakeBody = [ {x:11,y:11}]

let newSegments=0
export function update(){
    addSegments()

    const inputdirection= getinputdirection()
    for(let i = snakeBody.length=2;i>=0;i--){
        snakeBody[i+1]={ ...snakeBody[i]}
    }
    snakeBody[0].x+=0
    snakeBody[0].y+=1
}
export function draw(gameBord){
    snakeBody.forEach(segment=> {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart=segment.y
        snakeElement.style.gridColumnStart=segment.x
        snakeElement.classList.add('snake')
        gameBord.appendChild(snakeElement)
    })
    
}

export function expandSnake(amount){
    newSegments +=amount
}
export function onSnake(position){
    return snakeBody.some(segment=>{
        
        return equalPositions(segment,position)
    })
}
export function getSnakeHead(){
    return snakeBody[0]
}
export function snakeIntersction(){
    return onSnake(snakeBody[0],{ignorHEAD:true})
}


function equalPositions(pos1,pos2){
    return pos1.x===pos2.x && pos1.y===pos2.y
}

function addSegments(){
    for(let i=0;i<newSegments;i++){
        snakeBody.push({...snakeBody[snakeBody.length-1]})
    }

    newSegments=0
}