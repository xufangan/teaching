let x1, x2, y2, x3, y3, x4;

function setup() {
  let maxSize = min(windowWidth, windowHeight) 
  createCanvas(maxSize, maxSize);
  background(0);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);
  let rMax = width/2
  translate(rMax, rMax);
  let pedals = random(8, 40);
  let layers = random(4, 40);
  let ang = 360 / pedals;

  // create each layer with different variables
  for (let j = layers; j > 0; j--) {
    let ly = j / layers;
    x1 = random(185 * ly, 205 * ly);
    x4 = random(230 * ly, 245 * ly);
    x2 = random(190 * ly, 215 * ly);
    let maxX2 = x2 * tan(ang) * 0.9;
    y2 = random(15 * ly, maxX2 * ly);
    x3 = random(210 * ly, 230 * ly);
    y3 = random(15 * ly, maxX2);
    let hue = random(256);
    let sat = random(70, 100);
    let brt = random(70, 100);
    let alph = random(40, 100);
    fill(hue, sat, brt, alph);

    // draw the pedals for one layer
    for (let i = 0; i < pedals; i++) {
      noStroke();
      //stroke(0,0,0);
      beginShape();
      curveVertex(x1, 0);
      curveVertex(x1, 0);
      curveVertex(x2, y2);
      curveVertex(x3, y3);
      curveVertex(x4, 0);
      curveVertex(x4, 0);
      endShape();
      beginShape();
      curveVertex(x1, 0);
      curveVertex(x1, 0);
      curveVertex(x2, -y2);
      curveVertex(x3, -y3);
      curveVertex(x4, 0);
      curveVertex(x4, 0);
      endShape();
      //stroke(hue,sat,brt,alph);
      strokeWeight(5);
      //line(x1,0,x4,0);
      rotate(ang);
    }
  }
}