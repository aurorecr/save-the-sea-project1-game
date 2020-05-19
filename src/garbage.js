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

function moveGarb1(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    loadGarb1() 
    ctx.drawImage(bg, 0, 0);
   ctx.drawImage(fishnet, fishnetPositionX, fishnetPositionY);
    ctx.drawImage(garb1, garb1PositionX, garb1PositionY);;
    garb1PositionY += downY;
   
}

 setInterval(moveGarb1,10);
