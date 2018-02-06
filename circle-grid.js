function setup() { 
  createCanvas(400, 400); 
  }
function draw() { 
  background(0); 
  var x = 20;
  var y = 20; 
  
  while (x<=380) 
  {y=20; 
  while (y<=380) 
  {
  noStroke(); 
  fill(255); 
  ellipse (x,y, 15,15); 
  y+= 20} 
  x+=20} 
  
}
