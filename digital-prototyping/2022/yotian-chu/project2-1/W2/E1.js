let r=1;
let g=1;
let b =1;

let vp=1;
let hp =1;

function setup(){
createCanvas(windowWidth,windowHeight)
background(220)
frameRate(30);
noStroke();
rectMode (CENTER)
}

function draw() {
     
     r = random (0,200);
     g = random (0 ,100);
     b = random (150,255);
     fill (r,g,b)
     rect (50 * hp,50 *vp,25,25)

     r = random (0,150);
     g = random (0,140);
     b = random (150 ,255); 
     fill (r,g,b)
     circle (10 * hp,10 * vp,8)

     hp = hp+2;
     if (hp > 20) {
        vp = vp +2;
        hp = 1;
     }
     

}