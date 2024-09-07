let img;
let cnv;

let vp=1;
let hp =1;
let methodA = false;
let imgsc = 1;
let noiseScale;

function preload(){
img = loadImage('assets/2.jpg')
img2 = loadImage('assets/5.jpg')
}

function setup(){
 createCanvas(windowWidth,windowHeight);
  background("#FFFDFC")
  frameRate(10);
  noStroke();
  
  textFont('Courier');
  textSize(10);
  

}

function draw(){
  
  
  
  if(methodA == true){
    for(let col=0; col<img.width; col+=10){
      for(let row=0; row<img.height; row+=10){
        let c = img.get(col,row);
      fill(color(c))
      ellipse(col*vp, random(row), 10, 10);
     
      }
  }
      hp = hp+1;
      if (hp > 50) {
          vp = 1;
          hp = 1;
      } 

 } else {
    
  for(let col=0; col<img.width; col+=10){
    for(let row=0; row<img.height; row+=10){
      let c = img2.get(col,row);
    fill(color(c))
    ellipse(random(col), random(row)*cos(row), random(10), random(10));
   
    }
}
    hp = hp+1;
    if (hp > 500) {
        vp = 1;
        hp = 1;
    } 

    
 }




}

function mouseClicked(){
  methodA = !methodA 
}


