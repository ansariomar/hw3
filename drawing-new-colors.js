function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'M') {
    fill(255,0,255);
  } else if (key == 'T') {
    fill(0,128,128);
  } else if (key == 'Y') {
    fill(255,255,0); 
  } else if (key == 'N') {
    fill(0,0,128); 
  } else if (key == 'B') {
    fill(245,245,220); 
  } else if (key == 'P') {
    fill(255,105,180);
  } else if (key == 'O') {
    fill(255,165,0);

}
}
