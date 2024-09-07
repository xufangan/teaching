let img;
let img2;
let cnv;


function preload(){
img = loadImage('assets/1.jpg')
img2 = loadImage('assets/2.jpg')

}

function setup(){
cnv = createCanvas(img.width, img.height);
//print(img.width, img.height)
let newCanvasX = (windowWidth - img.width)/2;
let newCanvasY = (windowHeight - img.height)/2;
cnv.position(newCanvasX, newCanvasY);



//access pixel info. of the img
for(let col=0; col<img.width; col+=10){
    for(let row=0; row<img.height; row+=10){
    let c = img.get(col,row);
    stroke(color(c));
    strokeWeight(10);
    point (col,row);
    
    }
}
}

//for(let col2=0; col2<img2.width; col2+=10){
  //  for(let row2=0; row2<img2.height; row2+=10){
   // let d = img2.get(col2,row2);
  //  fill (color(d))
   // rect (col,row,10,5)
   // }
//}


