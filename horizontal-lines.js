function setup() { 
  createCanvas(400, 400);
} 

function draw(){
var counter = 10;
while (counter <=width-10){
  line (10,counter,330,counter)//starts first line at x=10, then checks counter position, draws line 330px, counts 5 px, redraws
  counter = counter+5

}
}
