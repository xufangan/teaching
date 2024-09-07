let spaceX =20, spaceY = 20, diam = 5

function setup(){
    createCanvas(400, 400);
    noStroke();
    frameRate(30)
}

function draw(){
    background(0);
        for (let x=10; x<width; x+= spaceX){
            for (let y= 10; y<height; y+= spaceY){
                let d = dist(mouseX, mouseY, x,y);
                if (d<50){
                fill(255,0,0);
            }else {
                fill(255);
            }
                ellipse(x, y, diam);
            }
        }
}