function setup() {
    createCanvas(400, 400);
    background(0, 200, 0)
    stroke(255, 0, 0)
    strokeWeight(1)
    noFill()
}

function draw() {
    //vertex's
    let size = 5;
    for (let y = 20; y < height; y += 20) {
        for (let x = 20; x < width; x += 20) {
            triangle(x, y, size, size)
            size++;
            //ellipses
            for(let i=50; i<width; i+=50){
            ellipse(width/1, height/1, x, x)
            }
            for(let i=50; i<width; i+=50){
                ellipse(width/-20, height/-20, x, x)
                }
            //grid
            // line(x, 0, x, height)
            // x++
            // console.log("x=", x)
        }
    }
}