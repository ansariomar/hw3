function setup() {
  createCanvas(400, 400);
}

function draw()
{
  
  background(255);
  
  
  for (var q=0; q<=200; q = q + 10) {
    line(q,200+q,400-q,200+q);
    line(q,200-q,400-q,200-q);
    
  }
}
