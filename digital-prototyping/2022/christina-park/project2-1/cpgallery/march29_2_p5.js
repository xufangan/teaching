function setup() {
    // Create the canvas
    createCanvas(500, 500);
    bgcolor = color(225, 100, 90);
    
  }
  
  function mousePressed () {
    bgcolor = color(random(0, 200), random(0, 200), random(0, 200));
  }
  
  

 //flower

 function draw(){
    background(bgcolor);
    fill(225, 100, 90)
    translate(245, 245);
    noStroke();
    for (let i = 0; i < 10; i ++) {
      ellipse(0, 90, 70, 220);
      rotate(PI/5);
   
 }
    }
   



  