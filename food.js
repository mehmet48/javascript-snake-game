import {onSnake,expandSnake} from './snake.js'
import {randomGridPosition} from './grid.js'

let food ={x:10,y:1}
const EXPANSION_RATE=1
export function update(){
    if (onSnake(food)){
        expandSnake(EXPANSION_RATE)
        food={x:20,y:10}
    }
}
export function draw(gameBord){
    
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart=food.y
        foodElement.style.gridColumnStart=food.x
        foodElement.classList.add('food')
        gameBord.appendChild(foodElement)
    }
    

function getrandomfoodpostion(){
    let newfoodposition
    while(newfoodposition==null || onSnake(newfoodposition)){
        newfoodposition=randomGridPosition()
    }
    return newfoodposition
}