let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
canvas.style.border = '2px solid black';

this.bg = new Image();
this.bg.src = "../img/landscape.png";
this.fishnet = new Image();
this.fishnet.src = "../img/fishnet.png";

const canvasHeight = canvas.height;
const canvasWidth = canvas.width;

const imgHeight = fishnet.height;
const imgWidth = fishnet.width;
console.log(imgHeight);

let fishnetPositionY = 0;
let fishnetPositionX = 0; //default position
const movePositionXright = - 30;
const movePositionXleft = 30;


console.log("initial fishnetPositionX", fishnetPositionX);

function loadBgAndFishnet() {
    bg.addEventListener("load", function () {
        ctx.drawImage(bg, 0, 0);
        fishnet.addEventListener("load", function () {
            fishnetPositionY = canvasHeight - imgHeight;
            fishnetPositionX = (canvasWidth - imgWidth) / 2;
            console.log(" loadBgAndFishnet fishnetPositionX", fishnetPositionX);

            ctx.drawImage(fishnet, fishnetPositionX, fishnetPositionY);
        })
    })

}
loadBgAndFishnet();

function handleKeydownEvent(event) {
    if (event.key == 'ArrowLeft' || event.keyCode == 37) {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(bg, 0, 0);

        console.log("handleKeydownEvent fishnetPositionX", fishnetPositionX);
        console.log("fishnet.width", fishnet.width / 2);
        if (fishnetPositionX > 0) {
            fishnetPositionX = fishnetPositionX - movePositionXleft;
        }
        ctx.drawImage(fishnet, fishnetPositionX, fishnetPositionY);
    }

    if (event.key == 'ArrowRight' || event.keyCode == 39) {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(bg, 0, 0);
        if (fishnetPositionX > 0) {
            fishnetPositionX = fishnetPositionX - movePositionXright;
        }
        ctx.drawImage(fishnet, fishnetPositionX, fishnetPositionY);
    }

}

//everytime I press a keyboard execute function handleKeydownEvent
document.addEventListener('keydown', handleKeydownEvent)