let x = 0;
let y = 0;
let spacing = 50;

function setup() {
  createCanvas(400, 400);
  background('#B92E27');
  frameRate(30)
}

function draw() {
  stroke('#E6D2B9');
  fill('#E6D2B9');
  if (random(1) < 0.5) {
      rect(x, y, spacing, spacing);
    // line(x, y, x + spacing, y + spacing);
  } else {
    // line(x, y + spacing, x + spacing, y);
  }
  x = x + spacing;
  if (x > width) {
    x = 0;
    y = y + spacing;
         stroke(0);
         fill(0);
         if (random(1) < 0.9) {
         rect(x, y, spacing, spacing);
      // line(x, y, x + spacing, y + spacing);
             } else {
      // line(x, y + spacing, x + spacing, y);
    }
             x = x + spacing;
             if (x > width) {
             x = 0;
             y = y + spacing;
                 stroke(0);
                 fill(0);
                 if (random(1) < 0.4) {
                 rect(x, y, spacing, spacing);
          // line(x, y, x + spacing, y + spacing);
                  } else {
          // line(x, y + spacing, x + spacing, y);
        }
                  x = x + spacing;
                    if (x > width) {
                     x = 0;
                     y = y + spacing;
                    }
                
                
            
        
      
    }
  }
}