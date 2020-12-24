var player, back, asteroidsGroup;

function preload(){
  playerImg = loadImage("player.png");
  asteroidImg = loadImage("asteroid.png");
  backImg = loadImage("background.png");
}
function setup() {
  createCanvas(500,500);
  background("black");  

  back = createSprite(250,250,495,495);
  back.addImage(backImg);
  backImg.scale = 1;

  player = createSprite(250,250, 40,40);
  player.addImage(playerImg); 

  
  
}

function draw() {
  
  background("white");
 if (keyDown(UP_ARROW))
 {
   player.velocityX = 0;
   player.velocityY = -2;
 }
 
  if (keyDown(DOWN_ARROW)) {
    player.velocityY = 2;
    player.velocityX = 0;
  }
 
 if (keyDown(LEFT_ARROW))
 {
  player.velocityX = -2;
  player.velocityY = 0;
 }
 
 if (keyDown(RIGHT_ARROW))
 { 
  player.velocityX = 2;
  player.velocityY = 0;
 }

 spawnAsteroids();
 

  drawSprites();
}

function spawnAsteroids(){
  if(frameCount % 80 === 0){
    y = random(2, 498);
    asteroid = createSprite(500,y,20,20);
    asteroid.addImage(asteroidImg);
    
    asteroid.scale = 0.5;
    asteroid.lifetime = 300;
    //add each obstacle to the group
    asteroidsGroup.add(asteroid);
  }
}