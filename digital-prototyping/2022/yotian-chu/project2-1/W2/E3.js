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

let methodA = false;



function setup(){
createCanvas(windowWidth,windowHeight)
background(220)
frameRate(15);
noStroke();
rectMode (CENTER)
}

function draw() {
     
  r = random (50,255);
  g = random (20 ,255);
  b = random (100,190);

     a1 = random(0,50);
     b1 = random(0,200);
     c1 = random(0,100);
     d1 = random(4,100);
     e1 = random(3,100);
     f1 = random(2,50);
     g1 = random(100,200);
     h1 = random(30,100);

     if(methodA == true){
   fill(r,g,b);
     quad(a1*vp,b1*hp,c1*vp,d1*hp,e1*hp/2,f1*hp/3,g1*vp,h1*vp);

     hp = hp+1;
     if (hp > 20) {
        vp = vp +1;
        hp = 1;
     }     

  } else {
    fill(r*2,g*2,b*2);
     quad(500,500,c1*vp,d1*hp,e1*hp/2,f1*hp/3,g1*vp,h1*vp);

     hp = hp+1;
     if (hp > 20) {
        vp = vp +5;
        hp = 3;
     }     
     
  }

 


}
function mouseClicked(){
  methodA = !methodA 
}