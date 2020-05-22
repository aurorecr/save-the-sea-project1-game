let canvas = document.getElementById('myCanvas');
this.canvasContainer = document.querySelector(".canvasContainer");
let ctx = canvas.getContext('2d');
canvas.style.border = '2px solid black';


this.bg = new Image();
this.bg.src = "./img/landscape.png";

this.garb1 = new Image();
this.garb1.src = "./img/garb1.png";

let fishnet = new Image();
fishnet.src = "./img/fishnet.png";

this.dolphPic = new Image();
this.dolphPic.src = "./img/dolphin.png";

this.dolphin = new Audio("./sounds/dolphinSound.mp3")

this.splash = new Audio("./sounds/splash.mp3")

const garb1Width = garb1.width;

let garb1PositionX = 30;
let garb1PositionY = 0;
var movIntervalY = 2;

let score = 0;
const countTo = 10;
let intervalId = null;

let lives = 2;

const canvasHeight = canvas.height;
const canvasWidth = canvas.width;

const imgHeight = fishnet.height;
const imgWidth = fishnet.width;

let fishnetPositionY = canvasHeight - 160;
let fishnetPositionX = (canvasWidth - imgWidth) / 2;


const movePositionX = 30;

function handleKeydownEvent(event) {
    if (event.key == 'ArrowLeft' || event.keyCode == 37) {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(bg, 0, 0);

        if (fishnetPositionX > 0) {
            fishnetPositionX = fishnetPositionX - movePositionX;
        }
        ctx.drawImage(fishnet, fishnetPositionX, fishnetPositionY);
    }

    if (event.key == 'ArrowRight' || event.keyCode == 39) {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(bg, 0, 0);
        if (fishnetPositionX + imgWidth < canvasWidth) {
            fishnetPositionX = fishnetPositionX + movePositionX;
        }
        ctx.drawImage(fishnet, fishnetPositionX, fishnetPositionY);
    }

}

//everytime I press a keyboard execute function handleKeydownEvent
document.addEventListener('keydown', handleKeydownEvent)

function soundSplash() {
    
     this.splash.volume = 0.1;
     this.splash.play();
    
}


function ImagesTouching(x1, y1, img1, x2, y2, img2) {
    // This function detects whether two images are touching
    if (x1 >= x2 + img2.width || x1 + img1.width <= x2) return false; // too far to the side
    if (y1 >= y2 + img2.height || y1 + img1.height <= y2)  return false; // too far above/below
    return true; // otherwise, overlap   
}

function ImagesTouchingX(x1, img1, x2, img2) {
    if (x1 >= x2 + img2.width || x1 + img1.width <= x2) return false; // too far to the side
    return true; // otherwise, overlap   
}

function soundDolphin() {
    this.dolphin.volume = 0.1;
    this.dolphin.play();
   
}

function moveGarb1() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(fishnet, fishnetPositionX, fishnetPositionY);

    if (garb1PositionY < canvasHeight) {
        ctx.drawImage(garb1, garb1PositionX, garb1PositionY);
        garb1PositionY += movIntervalY;
    }

    // ---- COLISION  --- Appliying function "ImagesTouching" (x1, y1, img1, x2, y2, img2) ...
    if (ImagesTouching(fishnetPositionX, fishnetPositionY, fishnet, garb1PositionX, garb1PositionY, garb1)) {

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(bg, 0, 0);
        ctx.drawImage(dolphPic, fishnetPositionX, (fishnetPositionY - imgHeight) - 20);
    }
   

    // Garbage folling randomly 
    if (garb1PositionY > canvasHeight) {
        if (ImagesTouchingX(fishnetPositionX, fishnet, garb1PositionX, garb1)) {
            score++;
            soundDolphin();
            if (score == 4){
              clearInterval(intervalId);
              location.href = "winScreen.html";
            }
        } 
        else if (lives > 0){
            lives--;
            soundSplash();
        }
        else {
            //if Loose remove canvas - Players lost the game
           
            document.getElementById("myCanvas").remove();
            clearInterval(intervalId);
        
            location.href = "gameOver.html";
           
        }
        garb1PositionY = 0;
        garb1PositionX = Math.random() * (canvasWidth - garb1Width);
    }

    ctx.fillStyle = "white";
    ctx.font = "30px Arial";
    ctx.fillText("Catched : " + score, 230, 100);
    ctx.fillText("/4 ", 410, 100);

}

function start() {
    intervalId = setInterval(moveGarb1, 10);
}
start()
