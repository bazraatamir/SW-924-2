canvas = document.querySelector('#canvas');
ctx = canvas.getContext('2d');

canvas.width = innerWidth>innerHeight?innerHeight:innerWidth;
canvas.height = innerWidth>innerHeight?innerHeight:innerWidth;
addEventListener('resize',()=>{
    canvas.width = innerWidth>innerHeight?innerHeight:innerWidth;
    canvas.height = innerWidth>innerHeight?innerHeight:innerWidth;
})


addEventListener('keydown',move);
function move(e){
        switch(e.key){
            case "w":
             vy = -1,
             vx=0;
            break;
            case "s": 
            vy=1,
            vx = 0;
            break;
            case "a": 
            vy=0, 
            vx = -1;
            break;
            case "d": 
            vy =0,
            vx=1
        }
}
 
const TAIL_COUNT = 17;
const tali_size = canvas.width/TAIL_COUNT;


var snakeX=Math.floor(TAIL_COUNT/2);
var snakeY = Math.floor(TAIL_COUNT/2);
var vx = 0;
var vy = 0;
let snakeTail=[];
let snakelenght=0;
let fruitX = Math.floor(Math.random()*TAIL_COUNT+1);
let fruitY = Math.floor(Math.random()*TAIL_COUNT+1);
let gameOver =false
Animated()
function Animated(){
    gameOver = snakeTail.some((tali)=>{
        return (tali.x===snakeX && tali.y==snakeY)
    });
    console.log(gameOver)
    if(gameOver){
        alert("gameOver")
    }
    if(!(vx===0 && vy==0)){
    snakeTail.unshift({x:snakeX,y:snakeY});
    }
    if(snakeTail.length>snakelenght){
        snakeTail.pop()
    }
    
    if(snakeX==fruitX && snakeY==fruitY){
         fruitX = Math.floor(Math.random()*TAIL_COUNT+1);
         fruitY = Math.floor(Math.random()*TAIL_COUNT+1);
         snakelenght++
    }
    
    
    console.log(snakeTail)
    drawField()
    if(snakeX>TAIL_COUNT)snakeX=1;
    if(snakeY>TAIL_COUNT)snakeY=1;
    if(snakeX<1)snakeX=TAIL_COUNT;
    if(snakeY<1)snakeY=TAIL_COUNT;
    snakeX+=vx;
    snakeY+=vy
    drawSnake();
    drawfruit();
    setTimeout(Animated,1000/5)
}

function drawField(){
    for(var i =0; i<TAIL_COUNT; i++){
        for(var j = 0; j<TAIL_COUNT; j++){
            if((i+j)%2==0){
                 ctx.fillStyle="#A2D149"
            }else{
                ctx.fillStyle="#AAD751"

            }
            ctx.beginPath()
            ctx.fillRect(i*tali_size,j*tali_size,tali_size,tali_size);
            ctx.closePath()
        }
    }
}


function drawSnake(){
    ctx.beginPath();
    ctx.fillStyle="red"
    ctx.arc(snakeX*tali_size-tali_size/2,snakeY*tali_size-tali_size/2,tali_size/2,0,Math.PI*2);
    ctx.fill()
    ctx.closePath();

    snakeTail.forEach((tali)=>{
        ctx.beginPath();
    ctx.fillStyle="#4471E6"
    ctx.arc(tali.x*tali_size-tali_size/2,tali.y*tali_size-tali_size/2,tali_size/2,0,Math.PI*2);
    ctx.fill()
    ctx.closePath();
    })
}

function drawfruit(){
    ctx.beginPath();
    ctx.fillStyle="red"
    ctx.arc(fruitX*tali_size-tali_size/2,fruitY*tali_size-tali_size/2,tali_size/2,0,Math.PI*2);
    ctx.fill()
    ctx.closePath();
}


