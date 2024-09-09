function setup() {
    createCanvas(500, 500);
  }
//translucent circles  
  function draw() {
    background(170, 255, 70);
    fill(200, 200, 240, 100)
    noStroke();

        fill(0, 220, 220,130)
      ellipse(-30,100,500,500);
      fill(0, 220, 220, 60)
      ellipse(-30,500,500,500);

      ellipse(-100,100,500,500);
      fill(0, 220, 220, 50)
      ellipse(-100,500,500,500);
      
        fill(0, 220, 250, 100)
      ellipse(50,100,500,500);
      fill(0, 220, 250, 100)
      ellipse(50,500,500,500);

      fill(0, 220, 250, 80)
      ellipse(130,100,500,500);
      fill(0, 220, 250, 80)
      ellipse(130,500,500,500);

      fill(0, 220, 250, 60)
      ellipse(200,100,500,500);
      fill(0, 220, 250, 60)
      ellipse(200,500,500,500);

      fill(0, 220, 250, 40)
      ellipse(270,100,500,500);
      fill(0, 220, 250, 40)
      ellipse(270,500,500,500);

      fill(0, 220, 250, 20)
      ellipse(340,100,500,500);
      fill(0, 220, 250, 20)
      ellipse(340,500,500,500);

      fill(0, 220, 250, 15)
      ellipse(400,100,500,500);
      fill(0, 220, 250, 15)
      ellipse(400,500,500,500);

      // draw leaf
        stroke(255);
        fill(15, 220, 0);
      ellipse(200, 200, 100, 300);
	    line(200, 50, 200, 600);
      ellipse(300, 300, 100, 300);
	    line(300, 150, 300, 600);
      ellipse(400, 400, 100, 300);
	    line(400, 250, 400, 600);

  }