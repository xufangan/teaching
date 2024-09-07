


function setup() {
  createCanvas(720, 780);


}


function draw() {
background('#E5E39E');

fill('#000000');
textSize(72);
textFont('Helvetica');
text('Practice', 50, 70);
fill('#000000');
textSize(72);
textFont('Helvetica');
text('Practice', 50, 90);
fill('#000000');
textSize(72);
textFont('Helvetica');
text('Practice', 50, 110);



textSize(20);
textWrap(WORD);
text('Have a wonderful day', 50, 680, 100);


let distribution = new Array(360);

 for (let i = 0; i < distribution.length; i++) {
   distribution[i] = floor(randomGaussian(0, 150));
 }


translate(width / 2, width / 2);
for (let i = 0; i < distribution.length; i++) {
   rotate(TWO_PI / distribution.length);
   stroke(0);
   let dist = abs(distribution[i]);
   line(0, 50, dist, 60);
 }

 translate(width / 2, width / 2);
for (let i = 0; i < distribution.length; i++) {
   rotate(TWO_PI / distribution.length);
   stroke(0);
   let dist = abs(distribution[i]);
   line(0, 5, dist, 60);
 }
  
 

}








