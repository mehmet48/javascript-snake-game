import {update as updateSnake,draw as drawSnake,snake_speed} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'

let lastrentime=0
let gameOver=false
const gameBord=document.getElementById/('game-board')

function main(currenttime){

    if(gameOver){

    }



    window.requestAnimationFrame(main)
    const secondsSincelASTrENDER=(currenttime-lastrentime)/1000
    if(secondsSincelASTrENDER<1/snake_speed) return
    
    
    console.log(secondsSincelASTrENDER)
    lastrentime=currenttime

    update()
    draw()
}
window.requestAnimationFrame(main)
function update(){

    updateSnake()
    updateFood()
    checkDeath()
}
function draw(){
    gameBord.innerHTML
    drawSnake(gameBord)
    drawFood(gameBord)


}
fuction checkDeath()
{
    gameOver=outsideGrid(getSnakeHead())||snakeIntersction()
}