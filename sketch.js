var m,f;

function setup() {
  createCanvas(800,400);
  m = createSprite(400, 200, 50, 50);
  f = createSprite(600,200,40,70);
  ob1 = createSprite(200, 200, 50, 50);
  ob2 = createSprite(500,200,40,70);

  m.shapeColor = "green";
  f.shapeColor = "green";
  ob1.shapeColor = "yellow";
  ob2.shapeColor = "yellow";

  m.debug = true;
  f.debug = true;

  ob1.velocityX = 2;
  m.velocityX = -2;

  f.velocityX = -2;
  ob2.velocityX = -2;
}

function draw() {
  background(255,255,255);  
  m.x = World.mouseX;
  m.y = World.mouseY;

  if(isTouching(m,ob2)){
    m.shapeColor = "red";
    ob2.shapeColor = "red";
  }else{
    m.shapeColor = "green";
    ob2.shapeColor = "green";
  }

 bounceOff(ob1,ob2);
  drawSprites();
}
