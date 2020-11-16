var fixedRect,movingRect,gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(600, 200, 50, 50);
  fixedRect.shapeColor = 'blue';
  movingRect = createSprite(490, 200, 50, 50);
  movingRect.shapeColor = 'blue';
  gameObject1 = createSprite(100,200,50,50);
  gameObject1.shapeColor = 'blue';
  gameObject2 = createSprite(200,200,50,50);
  gameObject2.shapeColor = 'blue';
  gameObject3 = createSprite(300,200,50,50);
  gameObject3.shapeColor = 'blue';
  gameObject4 = createSprite(400,200,50,50);
  gameObject4.shapeColor = 'blue';
}

function draw() {
  background(255,255,255);  
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
  if(isTouching(movingRect,gameObject2)){
    gameObject2.shapeColor = 'red';
    movingRect.shapeColor = 'red';
  } else {
    gameObject2.shapeColor = 'blue';
    movingRect.shapeColor = 'blue';
  }
  drawSprites();
}

