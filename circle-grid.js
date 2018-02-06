function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(0);


var x = 20;
var y = 20;

for (var x = 20; x<=380; x=x+20)
{
  for (y = 20; y<=380; y+= 20)
{
noStroke();
fill(255);
ellipse (x,y,15,15);

}
}
}
