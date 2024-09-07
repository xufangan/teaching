let img;
let img2;
let cnv;


function preload(){
img = loadImage('assets/4.jpg')
img2 = loadImage('assets/2.jpg')

}

function setup(){
cnv = createCanvas(img.width, img.height );
//print(img.width, img.height)
let newCanvasX = (windowWidth - img.width)/40;
let newCanvasY = (windowHeight - img.height)/50;
cnv.position(newCanvasX, newCanvasY);



//access pixel info. of the img
for(let col=0; col<img.width; col+=10){
    for(let row=0; row<img.height; row+=10){
    let c = img.get(col,row);
    stroke(color(c));
    strokeWeight(200);
    point (col, row);
      
}
}
}

