var possible_part1
var possible_part2
var possible_part3
var possible_part4
var possible_part5
var possible_part6



function preload(){
  
    //create an array of top image file names
	possible_part1 = [
    loadImage("data/img1.png")],

      

      
    possible_part2 = [
        loadImage("data/img1.png"),
        loadImage("data/img6.png")
    ],
     

    possible_part3 = [
        loadImage("data/img1.png"),
        loadImage("data/img7.png"),
        loadImage("data/img11.png"),
  
      ],
       

    possible_part4 = [

        loadImage("data/img3.png"),
        loadImage("data/img4.png"),
        loadImage("data/img10.png"),
      ],

    possible_part5 = [
        loadImage("data/img14.png"),
        loadImage("data/img5.png"),
        loadImage("data/img13.png"),
      ],
      
        
    possible_part6 = [
          loadImage("data/img8.png"),
          loadImage("data/img9.png"),
          loadImage("data/img12.png"),
      ],
     



        body1 = floor(random(possible_part1.length));
        body2 = floor(random(possible_part2.length));
        body3 = floor(random(possible_part3.length));
        body4 = floor(random(possible_part4.length));
        body5 = floor(random(possible_part5.length));
        body6 = floor(random(possible_part6.length));



    }


function setup() {
    createCanvas(windowWidth, windowHeight);



}

function mousePressed(){
    body1 = floor(random(possible_part1.length));
    body2 = floor(random(possible_part2.length));
    body3 = floor(random(possible_part3.length));
    body4 = floor(random(possible_part4.length));
    body5 = floor(random(possible_part5.length));
    body6 = floor(random(possible_part6.length));

    redraw();
   }


function mouseDragged() {

    }


function mouseReleased() {
       notPressed();
      }

function draw(){
    background(255,229 , 204);
    tint(255,229 , 204)
    image(possible_part1[body1], 0,0);
    image(possible_part2[body2], frameCount*.8, 0);
    image(possible_part3[body3], 0, windowHeight*.1);
    image(possible_part4[body4], mouseX-500, mouseY-150);
    image(possible_part5[body5], windowWidth*.3, frameCount*.8);
    image(possible_part6[body6], mouseX, mouseY);
    //image(possible_part7[body7], 300,0);
    //image(possible_part8[body8], mouseX-400, mouseY-100);
  }
  

  

  
    

//for (var i = 0; i<4; i++) {
   // stroke(255);
    //fill(51);
    //ellipse(i *100 + 100, 200, nums[i], nums[i]);



function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
   }
