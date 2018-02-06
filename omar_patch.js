function setup() {
	createCanvas(400, 400);
}

function draw() {
background(255);

yourPatch(0, 0);
yourPatch(width-100, height-100);
}



function yourPatch(x, y) {
  noFill();
  stroke(random(0,255),random(0,255),random(0,255));
  rect(x, y, 100, 100);
  
function drawLine(){
  line(random(x,x+100), random(y,y+100), (x+50), (y+50));
}

drawLine()
  drawLine()
var steps = 0
while (steps < 100) {
drawLine()
steps = steps + 1
}
}
//works in P5
