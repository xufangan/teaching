function setup() {
    createCanvas(720, 780);
  }
  
  function draw() {
    background('#EAE6DE');
    noFill();
    stroke('#8A4DB0');
    bezier(85, 100, 50, 10, 342, 130, 15, 80);
    bezier(749, 800, 50, 10, 732, 224, 15, 80);
    bezier(129, 800, 50, 10, 450, 224, 15, 80);
    bezier(429, 800, 230, 70, 263, 224, 15, 80);
    bezier(529, 800, 50, 10, 620, 224, 15, 80);
    bezier(867, 800, 230, 70, 163, 224, 15, 80);
    bezier(185, 100, 50, 10, 342, 130, 15, 80);
    bezier(349, 800, 50, 10, 732, 224, 15, 80);
    bezier(219, 800, 50, 10, 450, 224, 15, 80);
    bezier(649, 800, 230, 70, 263, 224, 15, 80);
    bezier(432, 800, 50, 10, 620, 224, 15, 80);
    bezier(327, 800, 230, 70, 163, 224, 15, 80);
    bezier(113, 800, 230, 70, 163, 224, 15, 80);
    bezier(287, 100, 50, 10, 342, 130, 15, 80);
    bezier(378, 800, 50, 10, 732, 224, 15, 80);
    bezier(456, 800, 50, 10, 450, 224, 15, 80);
    bezier(754, 800, 230, 70, 263, 224, 15, 80);
    bezier(442, 800, 50, 10, 620, 224, 15, 80);
    bezier(387, 800, 230, 70, 163, 224, 15, 80);

   

    fill('#0000FF');
    textSize(72);
    textFont('Helvetica');
    text('Practice', 450, 200);


    for (let y = 0; y < 900; y++) {
      let x = randomGaussian(500, 905);
      line(500, y, x, y);
    }
    
    fill('#0000FF');
    textSize(150);
    textFont('Helvetica');
    text('SP22', 350, 120);
  


   
  }

  