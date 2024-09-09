function setup() {
    createCanvas(400, 400);
    img = createImage(250, 250);
    img.loadPixels();
    for (let x = 5; x < img.width; x++) {
      for (let y = 0; y < img.height; y++) {
        let a = map(y, 0, img.height, 300, 0);
        img.set(x, y, [0, 200, 250, a]);
      }
    }
    img.updatePixels();
  }
  
  function draw() {
    background(200, 100, 100);
    image(img, 80, 80);
    image(img, 260, 50);
    image(img, -100, 110);
  }
