function setup() {
    createCanvas(500, 500);
  }
  function draw() {
    background(20, 240, 220);

stroke(255);
fill(15, 200, 60);
ellipse(mouseX-100, mouseY-100, 100, 300);;
line(mouseX-100, mouseY-100, 100, 600);
ellipse(mouseX, mouseY, 100, 300);;
line(mouseX, mouseY, 200, 600);
ellipse(mouseX+100, mouseY+100, 100, 300);
line(mouseX+100, mouseY+100, 300, 600);
ellipse(mouseX+200, mouseY+200, 100, 300);
line(mouseX+200, mouseY+200, 400, 600);
ellipse(mouseX+300, mouseY+300, 100, 300);
line(mouseX+300, mouseY+300, 500, 600);

for (let y = 0; y < height; y += 20) {
    for (let x = 0; x < width; x += 20) {
        line(x, y, x+10, y+10)
    }
}
  }