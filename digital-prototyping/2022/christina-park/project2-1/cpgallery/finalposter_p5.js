function setup() {
    createCanvas(1500, 800);
    background(50, 220, 200);

}


function draw() {
    if(mouseIsPressed){
        noStroke();
        fill(80, 250, 250);
        textSize(170);
        textFont('Poppins');
        text('G R O W T H ', 4, 135)
        text('G R O W T H ', 510, 780)
    }
    for (let y = 0; y < height; y += 35) {
        for (let x = 2; x < width; x += 35) {
            line(x+15, y+15, x+10, y+10)
    
        }
    }
    for (var i=80; i<=90; i++){
        let x=random(width);     
        let y=random(height);
    fill(255,200,200);
    ellipse(x,y,20,20)
    ellipse(x-15,y+5,20,20)
    ellipse(x-25,y-5,20,20)
    ellipse(x-17,y-20,20,20)
    ellipse(x,y-15,20,20)
    
      }
  
    noStroke();

    //circles - big, small, big, small
    
          stroke(30, 180, 205)
        fill(100, 200, 250, 50)
      ellipse(200,390,950,950);

      fill(100, 230, 250, 50)
      ellipse(200,390,550,550);

      fill(100, 200, 250, 25)
      ellipse(400,390,950,950);

      fill(150, 240, 250, 50)
      ellipse(400,390,550,550);

      fill(150, 200, 250, 20)
      ellipse(600,390,950,950);

      fill(150, 250, 250, 50)
      ellipse(600,390,550,550);

      fill(190, 150, 250, 20)
      ellipse(800,390,950,950);

      fill(190, 250, 250, 40)
      ellipse(800,390,550,550);

      fill(220, 150, 250, 10)
      ellipse(1000,390,950,950);

      fill(220, 250, 250, 30)
      ellipse(1000,390,550,550);

      fill(290, 150, 250, 5)
      ellipse(1300,390,950,950);

      fill(290, 240, 250, 20)
      ellipse(1300,390,550,550);


      //leaves 
      stroke(255);
      fill(30, 230, 40, 150);

    ellipse(mouseX-420, mouseY, 120, 300);
      line(mouseX-420, mouseY, 280, 800);
  
    ellipse(mouseX-280, mouseY, 120, 300);
      line(mouseX-280, mouseY, 420, 800);

    ellipse(mouseX-140, mouseY, 120, 300);
      line(mouseX-140, mouseY, 560, 800);

      ellipse(mouseX, mouseY, 120, 300);
      line(mouseX, mouseY, 700, 800);

      ellipse(mouseX+140, mouseY, 120, 300);
      line(mouseX+150, mouseY, 840, 800);

      ellipse(mouseX+280, mouseY, 120, 300);
      line(mouseX+280, mouseY, 980, 800);

      ellipse(mouseX+420, mouseY, 120, 300);
      line(mouseX+420, mouseY, 1120, 800);

}



