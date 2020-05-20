this.garb1 = new Image();
this.garb1.src = "../img/garb1.png";

this.saved = new Image();
this.saved.src = "../img/saved.png";

this.splash = new Audio ("../sounds/splash.mp3")

const garb1Width = garb1.width;

let garb1PositionX = 50;
let garb1PositionY = 0;
var downY = 2;

let fishnetPositionY = canvasHeight - imgHeight - 100;
let fishnetPositionX = (canvasWidth - imgWidth)/ 2; //default position

let score = 0;

function loadGarb1() {
      //  garb1PositionX = canvasWidth + garb1Width;
        console.log ("position x of garb1",garb1PositionX);
        ctx.drawImage(garb1, garb1PositionX, garb1PositionY);  
}


function ImagesTouching(x1, y1, img1, x2, y2, img2) {
    //
    // This function detects whether two images are touching
    // 
    if (x1 >= x2+img2.width || x1+img1.width <= x2) return false;   // too far to the side
    if (y1 >= y2+img2.height || y1+img1.height <= y2) return false; // too far above/below
    return true;                                                    // otherwise, overlap   
    }

function sound(){
    this.splash.volume = 0.1;
    // this.splash.currentTime = 0;
    this.splash.play();
}    

function moveGarb1(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    loadGarb1() 
    ctx.drawImage(bg, 0, 0);
    console.log('fish x', fishnetPositionX);
    console.log('fish y', fishnetPositionY);
    ctx.drawImage(fishnet, fishnetPositionX, fishnetPositionY);
    ctx.drawImage(garb1, garb1PositionX, garb1PositionY);;
    garb1PositionY += downY;

     // SCORE text    
     ctx.fillStyle= "white";
     ctx.font = "40px Arial";
     ctx.fillText("Score: " + score, 270 , 100); 
     console.log('text', score) 
     score++;
    
    // ---- COLISION  --- Appliying function "ImagesTouching" (x1, y1, img1, x2, y2, img2) ...
     if (ImagesTouching(fishnetPositionX, fishnetPositionY,fishnet,garb1PositionX, garb1PositionY,garb1)){
        // 
        ctx.drawImage(saved,fishnetPositionX, (fishnetPositionY - imgHeight) - 100);
        sound();
        
    }
    // Garbage folling randomly 
    if (garb1PositionY > canvasHeight ){
        garb1PositionY = 0;
        garb1PositionX = Math.random() * (canvasWidth - garb1Width);
    }

}

 setInterval(moveGarb1,10);


