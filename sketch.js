var unicorn ;
var trains = [];
var uImg ; 
var bImg ; 
var tImg ; 


function preload(){

  uImg = loadImage("unicorn.png");
  bImg = loadImage("bg.jpeg");
  tImg = loadImage("train.png");
}


function setup() {
  createCanvas(500, 500 );
  unicorn = new Unicorn(); 
}






function createTrain(){
    if (frameCount % 100 == 0){
      var train = createSprite(480 , 450 , 30 , random(100,500)) ; 
      train.velocityX = -10; 
train.shapeColor = "lightBlue";

    }
}





function drawSprites()
{}

function createSprite()
{}

function keyPressed(){

  if(key == ' '){
  
  unicorn.jump();
  
  }

}

function draw() {
  background(bImg);
  unicorn.show();
  unicorn.move();
  drawSprites();   
  createTrain();

}