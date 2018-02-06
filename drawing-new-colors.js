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
  } else if (key == 'T') {//teal
    fill(0,128,128);
  } else if (key == 'Y') {//yellow
    fill(255,255,0); 
  } else if (key == 'N') {//navy
    fill(0,0,128); 
  } else if (key == 'B') {//beige
    fill(245,245,220); 
  } else if (key == 'P') {//pink
    fill(255,105,180);
  } else if (key == 'O') {//orange
    fill(255,165,0);
  } 
  
  else if (key == '1') {
    diameter (10)

}
}

