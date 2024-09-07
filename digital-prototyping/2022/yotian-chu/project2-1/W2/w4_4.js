let img;
let cnv;

let vp=1;
let hp =1;


function preload(){
img = loadImage('assets/2-04.jpg')
}

function setup(){
  frameRate(30);
  noStroke();
  createCanvas(1080,1080);
}

function draw(){
  
 
  for(let col=0; col<img.width; col+=50){
    for(let row=0; row<img.height; row+=10){
      let c = img.get(col,row);
    stroke(color(c))
    strokeWeight(random(20));
    rect(col, row, 20, 20);
   
    }
}
    hp = hp+1;
    if (hp > 50) {
        vp = vp+5;
        hp = 1;
    } 


}

