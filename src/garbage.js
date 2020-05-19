this.garb1 = new Image();
this.garb1.src = "../img/garb1.png";

this.garb2 = new Image();
this.garb1.src = "../img/garb2.png";

const garb1Width = garb1.width;

let garb1PositionX = 50;
let garb1PositionY = 0;
var downY = 2;

function loadGarb1() {
      //  garb1PositionX = canvasWidth + garb1Width;
        console.log ("position x of garb1",garb1PositionX);
        ctx.drawImage(garb1, garb1PositionX, garb1PositionY);  

}
function ImagesTouching(x1, y1, img1, x2, y2, img2) {
    //
    // This function detects whether two images are touching - very useful function
    // 
    if (x1 >= x2+img2.width || x1+img1.width <= x2) return false;   // too far to the side
    if (y1 >= y2+img2.height || y1+img1.height <= y2) return false; // too far above/below
    return true;                                                    // otherwise, overlap   
    }

function moveGarb1(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    loadGarb1() 
    ctx.drawImage(bg, 0, 0);
   ctx.drawImage(fishnet, fishnetPositionX, fishnetPositionY);
    ctx.drawImage(garb1, garb1PositionX, garb1PositionY);;
    garb1PositionY += downY;
    
    if (ImagesTouching(fishnetPositionX, fishnetPositionY,fishnet,garb1PositionX, garb1PositionY,garb1)){
        console.log("Jackpot");
        score += 1;
    }

    if (garb1PositionY > canvasHeight ){
        garb1PositionY = 0;
        garb1PositionX = Math.random() * (canvasWidth - garb1Width);
    }

}

 setInterval(moveGarb1,10);


