var spot = {
    x: 100,
    y: 50
  };
  
  var col = {
    r: 150,
    g: 70,
    b: 0
  };
  function setup() {
    createCanvas(400, 400);
    background(0);
  }
  
  function draw() {
    col.r = random(100, 255);
    col.g = 0;
    col.b = random(100, 190);
  
    spot.x = random(0, width);
    spot.y = random(0, height);
    noStroke();
    fill(col.r, col.g, col.b, 100);
    ellipse(spot.x, spot.y, 24, 24);
  }