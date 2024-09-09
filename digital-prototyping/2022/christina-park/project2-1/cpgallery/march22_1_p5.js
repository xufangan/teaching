function setup() {
  createCanvas(500, 500);
  noStroke();
}
function draw() {
  background(200, 20, 100);
  fill(0,10,250)
  ellipse(mouseX+100, 40, 50, 50); // smallest circle
  ellipse(mouseX, 100, 80, 80);    // circle 1
  ellipse(mouseX+100, 200, 140, 140); // circle 2
  ellipse(mouseX-100, 300, 240, 240); // circle 3
  ellipse(mouseX-300, 550, 300, 300); // circle 4
  ellipse(mouseX+100, 580, 350, 350); // circle 5
  

  //background circle gradient
  fill(0, 120, 220,130)
  ellipse(-30,100,500,500);
  fill(0, 120, 200, 60)
  ellipse(-30,500,500,500);

  ellipse(-100,100,500,500);
  fill(0, 120, 200, 50)
  ellipse(-100,500,500,500);
  
    fill(0, 120, 250, 100)
  ellipse(50,100,500,500);
  fill(0, 120, 250, 100)
  ellipse(50,500,500,500);

  fill(0, 120, 250, 80)
  ellipse(130,100,500,500);
  fill(0, 120, 250, 80)
  ellipse(130,500,500,500);

  fill(0, 120, 250, 60)
  ellipse(200,100,500,500);
  fill(0, 120, 250, 60)
  ellipse(200,500,500,500);

  fill(0, 120, 250, 40)
  ellipse(270,100,500,500);
  fill(0, 120, 250, 40)
  ellipse(270,500,500,500);

  fill(0, 120, 250, 20)
  ellipse(340,100,500,500);
  fill(0, 120, 250, 20)
  ellipse(340,500,500,500);

  fill(0, 120, 250, 15)
  ellipse(400,100,500,500);
  fill(0, 120, 250, 15)
  ellipse(400,500,500,500);
}