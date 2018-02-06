function setup() {
  createCanvas(400, 400);
}

function draw()
{
  var y = 1;
  
  for(x=10; x<width-10;x+=5)
  {
    y = y + 10
    line(x,0,x,y);
  }
}
