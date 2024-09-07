let img;
let cnv;

let vp=1;
let hp =1;


function preload(){
img = loadImage('assets/2-01.jpg')


}

function setup(){
  frameRate(3);
  noStroke();
  cnv = createCanvas(windowWidth,windowHeight);
}

function draw(){
  
 
  for(let col=0; col<img.width; col+=10){
    for(let row=0; row<img.height; row+=20){
      let c = img.get(col,row);
    stroke(color(c))
    strokeWeight(20);
    point (col*hp, row*vp);
   
    }
}

}

