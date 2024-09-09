function setup() {
	createCanvas(500, 500);
	background(240, 50, 100);
    noStroke();
    fill(0);
    
}
//click and change color
function draw() {

    background(240, 100, 200);
    if (mouseIsPressed == true) {
      if (mouseButton == LEFT) {
        fill(0,50,100);   // dark blue
      }
      else if (mouseButton == RIGHT) {
        fill(255); // White
      }
    }
    else {
      fill(30,200,200);   
    }
    rect(0, 0, 600, 600);

    fill(0,50,100);
    ellipse(130,500,500,500);
    ellipse(470,100,500,500);

//background gradient circles
    stroke(0,200,200);
    fill(0, 0, 180, 80)
  ellipse(-30,100,500,500);
  fill(0, 0, 250, 60)
  ellipse(-30,500,500,500);

  ellipse(-100,100,500,500);
  fill(0, 0, 250, 50)
  ellipse(-100,500,500,500);
  
      fill(0, 0, 250, 40)
  ellipse(50,100,500,500);
  fill(0, 0, 250, 40)
  ellipse(50,500,500,500);

  fill(0, 0, 250, 30)
  ellipse(130,100,500,500);
  fill(0, 0, 250, 30)
  ellipse(130,500,500,500);

  fill(0, 0, 250, 20)
  ellipse(200,100,500,500);
  fill(0, 0, 250, 20)
  ellipse(200,500,500,500);

  fill(0, 0, 250, 10)
  ellipse(270,100,500,500);
  fill(0, 0, 250, 10)
  ellipse(270,500,500,500);

  fill(0, 0, 250, 8)
  ellipse(340,100,500,500);
  fill(0, 0, 250, 8)
  ellipse(340,500,500,500);
  
  fill(0, 0, 250, 4)
  ellipse(400,100,500,500);
  fill(0, 0, 250, 8)
  ellipse(400,500,500,500);
  
  fill(0, 0, 250, 4)
  ellipse(470,100,500,500);
  fill(0, 0, 250, 8)
  ellipse(470,500,500,500);

  

}