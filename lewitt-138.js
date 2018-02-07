function setup() {
  createCanvas(400, 400);
}

function draw() {

  var counter = 10;
  while (counter < 320) {
    noFill();
    ellipse(170, 170, counter, counter) //starts first line at x=10, then checks counter position, draws line 330px, counts 5 px, redraws
    counter = counter + 5
  }//concentric circles

  var counter = 10;
  while (counter < 335) {
    line(10, counter, 330, counter) //starts first line at x=10, then checks counter position, draws line 330px, counts 5 px, redraw
    counter = counter + 5
  }//horizontal lines
  
  var counter = 10;
  while (counter < 335) {
    line(counter, 10, counter, 330)
    counter = counter + 5

  }//vertical lines
}

//http://massmoca.org/event/walldrawing138/
