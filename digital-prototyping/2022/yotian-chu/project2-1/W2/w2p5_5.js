

// when mouse move to the left - rotate counterclockwise
//  when mouse move to the right -  clockwise

let gap = 20;
let cNum= 20;
let cSize = 20;
let angle = 0;
let pNum = 100;
let reSize = 600;
 
function setup(){
 createCanvas(windowWidth, windowHeight);
 angleMode(degrees);
}

// loop
function draw(){

    background('black');
    noCursor();
    noStroke(); 
    fill ('white')
    circle(mouseX, mouseY,5);

    //main graph
    push ();
    translate (width/2,height/2);
    rotate (angle);
    angle = angle + map(mouseX,0,width,-0.3,0.3);
    noFill()
    stroke('white')
    strokeWeight(1);
    //       start; end; increase
    for (let i = 0; i < cNum; i++) {
        arc(0,0,cSize + gap * i,cSize + gap * i,angle*i,360-i);

    }
    pop();

    //noise
    
    push ();
    translate(width/2,height-700);
    textFont('Arial');
    textSize(20);
    textAlign(CENTER, CENTER);
    text('EXPERIMENT',0,0)
    pop ();

    
    push();
    //boarder
    translate(width/2, height/2);
    noFill();
    stroke('white');
    strokeWeight(2);
    rectMode(CENTER);
    rect(0,0,reSize, reSize);

    //noise
    stroke('white');
    strokeWeight(2);
    for(let i = 0; i<pNum; i++){
        point (random(-reSize/2, reSize/2),random(-reSize/2,reSize/2));
    }
    pop();



}

