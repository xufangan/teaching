let creature;

//declare creature status
let creatureBehavior='display';
let creatureBehavior2='nonmove';
let creatureBehavior3='nonround';

let mySound;

let myFont;

let img;
let img2;
let img3;
let img4;
let img5;
let img6;

//declare three button variables;
let petButton;
let playButton;
let hugButton
let resetButton;



function preload() {

  soundFormats('mp3', 'ogg');
  mySound = loadSound('data/Still_sky.mp3');

  myFont = loadFont('data/AdobePiStd.otf');


  img = loadImage('data/cloud.jpg');
  img2 = loadImage('data/img12.png');
  img3 = loadImage('data/img8.png');
  img4 = loadImage('data/img10.png');
  img5 = loadImage('data/img14.png');
  img6 = loadImage('data/img5.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    creature = new Creature(120,120);




    petButton = createButton('We are friends');
    petButton.position(width * 0.05, height * 0.05, 0);
    petButton.style('color:grey');
    petButton.style('background-color:white');
    petButton.style('font-size:1vw');
    // petButton.style('font:myFont');
    petButton.size(width * 0.1, width * 0.04);
    petButton.mousePressed(changeSize);

    playButton = createButton('Play around here');
    playButton.position(windowWidth * 0.05, windowHeight * 0.15, 0);
    playButton.style('color:grey');
    playButton.style('background-color:white');
    playButton.style('font-size:1vw');
    playButton.size(width * 0.1, width * 0.04);
    playButton.mousePressed(changePosition);
    // console.log('setup', creatureBehavior);

    hugButton = createButton('Tell you a secret');
    hugButton.position(width * 0.05, height * 0.25, 0);
    hugButton.style('color:grey');
    hugButton.style('background-color:white');
    hugButton.style('font-size:1vw');
    hugButton.size(width * 0.1, width * 0.04);
    hugButton.mousePressed(changeShapes);
    // console.log('setup', creatureBehavior);

    resetButton = createButton('Reset');
    resetButton.position(width * 0.05, height * 0.85, 0);
    resetButton.style('color:grey');
    resetButton.style('font-size:1vw');
    resetButton.style('background-color:white');
    resetButton.size(width * 0.1, width * 0.04);
    resetButton.mousePressed(resetStatus);
       
}

//function change the creatureBahavior
function changeSize() {
  creatureBehavior="grow";
  console.log(creatureBehavior);
}

function changePosition(){
  creatureBehavior="move";
  // creatureBehavior2="move";
  console.log(creatureBehavior);
}

function changeShapes() {
  creatureBehavior="round";
  console.log(creatureBehavior);

}

function resetStatus(){
  creature.sideLength=120;
  creatureBehavior="display";
  console.log(creatureBehavior);
}







function draw() {
    // background(255, 227, 197);
    texture(img);
    rotateX(frameCount * 0.0001);
    rotateY(frameCount * 0.0001);
    noStroke();
    sphere (4000);

    

//Switch statement, similar to if, please refer to W3School: https://www.w3schools.com/js/js_switch.asp
//When creatureBehavior is "display", call creature.display()
//When creatureBehavior is "grow", call creature.grow()
//same logic for other behavior
    switch (creatureBehavior){
      case 'display':
        creature.display();
        break;
      case 'grow':
        creature.grow();
        break;
      case 'move':
        creature.move();
        break;
      case 'round':
          creature.round();
          break;
    }

}



function mousePressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  mySound.loop();
  mySound.setVolume(0.1);
  getAudioContext().resume();
}

class Creature {
    constructor(sideLength,position) {
      this.sideLength=sideLength;
      this.position=position;

    }

    display() {
        push();
        translate(120, 0, 0);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        texture(img2);
        noStroke();
        box(this.sideLength);
        pop();
    }

    //define grow bahavior as a grow method
    grow(){
      push();
      translate(120, 0, 0);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      texture(img2);
      noStroke();
      box(this.sideLength++);
      pop();
    }

    move(){
      push();
      translate(120, 0, 0);
      translate(p5.Vector.fromAngle(millis() / 1000, 300));
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      texture(img2);
      noStroke();
      box(120);
      pop();


    }

    round(){
      push();
      translate(120, 0, 220);
      rotateX(frameCount * 0.005);
      rotateY(frameCount * 0.005);
      texture(img2);
      noStroke();
      
      box(2000);
      translate(120, 0, 0);
      sphere(120);
      pop();
    }
}

