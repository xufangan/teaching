function setup() {
    createCanvas(500, 500);
  }
  function draw() {
    background(200, 200, 250);

stroke(0,0,255);


for (let y = 0; y < height; y += 25) {
    for (let x = 2; x < width; x += 25) {
        line(x+10, y+10, x+10, y+10)

    }
}
for (var i=85; i<=90; i++){
    let x=random(width);     
    let y=random(height);
fill(150,50,200);
ellipse(x,y,40,40)
ellipse(x-15,y+5,40,40)
ellipse(x-25,y-5,40,40)
ellipse(x-17,y-20,40,40)
ellipse(x,y-15,40,40)

  }
  
}