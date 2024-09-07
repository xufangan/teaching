const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = 'destination-over';
hue = Math.random() * 360;

let number = 0;
let scale = 10;

function drawFlower(){
    let angle = number * 111.5;
    let radius = scale * Math.sqrt(number);
    let positionX = radius * Math.sin(angle) + canvas.width/2;
    let positionY = radius * Math.cos(angle) + canvas.height/2;

// ctx.clearRect(0,0, canvas.width, canvas.height);

// size += 0.15;
// positionX += 5 * Math.sin(angle);
// positionY += 5 * Math.sin(angle);
// angle += 0.1;
// drawFlower();
// requestAnimationFrame(animate);
ctx.fillStyle = 'hsl('+ hue + ', 100%, 50%)';
ctx.strokeStyle = 'black';
ctx.lineWidth = 0;
ctx.beginPath();
ctx.arc(positionX, positionY, 15, 0, Math.PI * 2);
ctx.closePath();
ctx.fill();
ctx.stroke();

number++;

}

function animate(){

drawFlower();
if (number > 950) return;
requestAnimationFrame(animate);
}
animate();