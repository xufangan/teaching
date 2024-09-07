let x = 0;
let y = 0;
let spacing = 30;
let white = 255;

function setup() {
  createCanvas(600, 1000);
  background(0);
  frameRate(60)
}

function draw() {

  fill(white);
  if (random(1) < 0.5) {
      rect(x, y, spacing, spacing);
    // line(x, y, x + spacing, y + spacing);
  } else {
    // line(x, y + spacing, x + spacing, y);
  }
  x = x + spacing;
  if (x > width) {
    x = 0;
    y = y + spacing;         
    }
  }

function keyTyped(){
  if (key === 'a'){
    white = (255,0,0)
  } else if (key === 'b'){
    white = (0,255,0)
  }
  // unintentional pattern stopper
}