let r=1;
let g=1;
let b =1;

let vp=1;
let hp =1;

let a1 = 1;
let b1 = 1;
let c1 = 1;
let d1 = 1;
let e1 = 1;
let f1 = 1;
let g1 = 1;
let h1 = 1;




function setup(){
createCanvas(windowWidth,windowHeight)
background(220)
frameRate(30);
noStroke();
rectMode (CENTER)
}

function draw() {
     
     r = random (0,150);
     g = random (0 ,250);
     b = random (0,100);
     fill (r,g,b)
     arc(50*vp, 55*hp, 100, 100, 0, HALF_PI);

     r = random (0,250);
     g = random (0,230);
     b = random (0 ,100); 
     fill (r,g,b)
     arc(50*vp, 55*hp, 50, 50, 0, HALF_PI);

  

     hp = hp+1;
     if (hp > 20) {
        vp = vp +1;
        hp = 1;
     }
     

}