let img;
let img2;
let cnv;


function preload(){
img = loadImage('assets/5.jpg')
img2 = loadImage('assets/2.jpg')

}

function setup(){
cnv = createCanvas(img.width, img.height );
//print(img.width, img.height)
let newCanvasX = (windowWidth - img.width)/10;
let newCanvasY = (windowHeight - img.height)/10;
cnv.position(newCanvasX, newCanvasY);



//access pixel info. of the img
for(let col=0; col<img.width; col+=20){
    for(let row=0; row<img.height; row+=20){
    let xPos = col;
    let yPos = row;
      
    let c = img.get(xPos,yPos);
    push ();
    translate (xPos,yPos);
    noFill ();
    strokeWeight(5);
    stroke(color(c))
    curve (xPos, yPos, cos(xPos), sin(yPos)*cos(xPos)*40, random(10), random(80), cos(yPos)*sin(xPos)*random(24), cos(yPos)*50)
    pop ();
    
    }
}
}


