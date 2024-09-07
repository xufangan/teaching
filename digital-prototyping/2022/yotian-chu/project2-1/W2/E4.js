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
  b = random (10,190);

     a1 = random(0,50);
     b1 = random(0,200);
     c1 = random(0,100);
     d1 = random(4,100);
     e1 = random(3,100);
     f1 = random(2,50);
     g1 = random(100,200);
     h1 = random(30,100);

     if(methodA == true){
     noFill();
     strokeWeight(5);
     stroke(r,g,b);
     circle(a1*vp,b1*hp,c1);

     hp = hp+1;
     if (hp > 20) {
        vp = vp +2;
        hp = 1;
     }     

  } else {
    fill(r*2,g*1.5,b*1.5);
     circle(b1*vp,a1*vp,c1*hp);
     hp = hp+1;
     if (hp > 20) {
        vp = vp +2;
        hp = 3;
     }     
     
  }

 


}
function mouseClicked(){
  methodA = !methodA 
}