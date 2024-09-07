var colorInc = 0.3;
let particles = [];
const num= 1500;

const noiseScale = 0.01;


function setup(){
   createCanvas(800,500);

   for(let i = 0; i < num; i++){
      particles.push(createVector(random(width),random(height))); 

   }
   stroke(255); 
}

function draw(){
   background(0,2);

   for(let i=0; i< num ; i++){
      let p = particles[i];
      point (p.x, p.y);
      let n = noise(p.x*noiseScale, p.y*noiseScale);
      let a = TAU *n;
      p.x += cos (a);
      p.y += sin (a);
      if (!onScreen(p)){
         p.x= random (width);
         p.y= random (height);
      }
   }
}

function mouseReleased(){
   noiseSeed(millis());
}

function onScreen(v){
   return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}