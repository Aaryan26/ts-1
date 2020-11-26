const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1, stand2;
var block1, block2, block3, block4, block5;
var block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var ball, slingshot;
var score=0;
function preload(){

}

function setup() {
  var canvas = createCanvas(1400,800);
    engine = Engine.create();
    world = engine.world;

  stand1= new Ground(390,300,250,10);

  block1= new Box(300,275,30,40);
  block2= new Box(330,275,30,40);
  block3= new Box(360,275,30,40);
  block4= new Box(390,275,30,40);
  block5= new Box(420,275,30,40);
  block6= new Box(450,275,30,40);
  block7= new Box(480,275,30,40);

  block8= new Box(330,235,30,40);
  block9= new Box(360,235,30,40);
  block10= new Box(390,235,30,40);
  block11= new Box(420,235,30,40);
  block12= new Box(450,235,30,40);

  block13= new Box(360,195,30,40);
  block14= new Box(390,195,30,40);
  block15= new Box(420,195,30,40);
  block16= new Box(390,155,30,40);

  ball= Bodies.circle(50,200,20);
  World.add(world,ball);

  slingshot=new SlingShot(this.ball,{x:100, y:200});

}

function draw() {
  background(255,255,255); 
  Engine.update(engine);

  textSize(20);
  text('SCORE: '+ score,750,40);
  stand1.display(); 

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  slingshot.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 40, 40);
  drawSprites();
  
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX, y:mouseY})
}

function mouseReleased(){
  slingshot.fly();
}





