function Circle(x, y) {
    this.x = x;
    this.y = y;
    this.r = 1;
    this.growing = true;
  
    this.grow = function() {
      if (this.growing) {
        this.r += 1;
      }
    };
  
    this.show = function() {
      stroke(255);
      noFill();
  
      strokeWeight(2);
      ellipse(this.x, this.y, this.r * 2, this.r * 2);
    };
  
    this.edges = function() {
      return (
        this.x + this.r >= width ||
        this.x - this.r <= 0 ||
        this.y + this.r >= height ||
        this.y - this.r <= 0
      );
    };
  }

var circles;

function setup() {
  createCanvas(400, 400);
  circles = [];
}

function draw() {
  background(0);
  frameRate(30);

  var total = 5;
  var count = 0;
  var attempts = 0;

  while (count < total) {
    var newC = newCircle();
    if (newC !== null) {
      circles.push(newC);
      count++;
    }
    attempts++;
    if (attempts > 100) {
      noLoop();
      console.log('finished');
      break;
    }
  }

  for (var i = 0; i < circles.length; i++) {
    var circle = circles[i];

    if (circle.growing) {
      if (circle.edges()) {
        circle.growing = false;
      } else {
        for (var j = 0; j < circles.length; j++) {
          var other = circles[j];
          if (circle !== other) {
            var d = dist(circle.x, circle.y, other.x, other.y);
            var distance = circle.r + other.r;

            if (d - 2 < distance) {
              circle.growing = false;
              break;
            }
          }
        }
      }
    }

    circle.show();
    circle.grow();
  }
}

function newCircle() {
  var x = random(width);
  var y = random(height);
  var valid = true;
  for (var i = 0; i < circles.length; i++) {
    var circle = circles[i];
    var d = dist(x, y, circle.x, circle.y);
    if (d < circle.r) {
      valid = false;
      break;
    }
  }
  if (valid) {
    return new Circle(x, y);
  } else {
    return null;
  }
}