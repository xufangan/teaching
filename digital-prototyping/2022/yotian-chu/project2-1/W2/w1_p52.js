function setup() {
    createCanvas(720, 780);
  }
  

 

  let angleRotate = 0;



function draw() {
  background(0);




  blendMode(LIGHTEST);
  strokeWeight(30);
  stroke('#8ABFFF');
  line(25, 25, 75, 75);
  stroke('#5BF4B6');
  line(75, 25, 25, 75);

  blendMode(DIFFERENCE);
  strokeWeight(30);
  stroke('#5BF4B6');
  line(200, 200, 90, 90);
  stroke('#8ABFFF');
  line(500, 500, 200, 200);
  stroke('#5BF4B6');
  line(200, 200, 90, 90);
  stroke('#5BF4B6');
  line(200, 200, 90, 90);

  stroke('#5BF43S');
  line(900, 900, 500, 500);

  stroke('#5BF43S');
  line(75, 75, 50, 50);

  stroke('#5BF43S');
  line(100, 500, 900, 50);

  fill('#0000FF');
  textSize(100);
  textFont('Helvetica');
  text('Practice', 250, 200);
  fill('#0000FF');
  textSize(100);
  textFont('Helvetica');
  text('Practice', 250, 300);
  fill('#0000FF');
  textSize(100);
  textFont('Helvetica');
  text('Practice', 250, 400);
  textSize(100);
  textFont('Helvetica');
  text('Practice', 250, 500);

  rotate(PI / 7.0);
  textSize(100);
  textFont('Helvetica');
  text('Practice', 250, 600);
  textFont('Helvetica');
  text('Practice', 250, 400);
  textFont('Helvetica');
  text('Practice', 250, 500);

}





 

