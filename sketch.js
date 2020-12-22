var ground1











function setup() {
  createCanvas(550,700);
  
  ground1=new Ground(400,500,100,20)
  //createSprite(400, 200, 50, 50);
}

function draw() {
  
  background('black');  
  drawSprites();

 
}

function display(){
  ground1.display()

}







