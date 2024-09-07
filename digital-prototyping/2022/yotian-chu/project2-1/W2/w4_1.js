let img;
let cnv;

let vp=1;
let hp =1;


function preload(){
img = loadImage('assets/2-02.jpg')


}

function setup(){
  frameRate(300);
  noStroke();
  cnv = createCanvas(windowWidth,windowHeight);
}

function draw(){
  
 
  for(let col=0; col<img.width; col+=10){
    for(let row=0; row<img.height; row+=30){
      let c = img.get(col,row);
    stroke(color(c))
    strokeWeight(random(30))
    point (col, row);
   
    }
}

  hp = hp+5;
  if (hp > 30) {
     vp = vp +1;
     hp = 1;
  }



hp = hp+2;
if (hp > 30) {
   vp = vp +1;
   hp = 1;
}
}


