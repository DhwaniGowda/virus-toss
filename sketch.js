const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var virus1,virus1Image;
var box,box1,box2;

function preload()
{
  
}

function setup() 
{
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,390,800,20);

  virus1 = new Virus(100,70);
  box = new Bucket(550,330,100,PI/2);
  box1 = new Bucket(700,330,100,PI/2);
  box2 = new Bucket2(625,375,100,PI/2);

   
  slingshot = new slingShot(virus1.body,{x:200,y:100});



}

function draw()
 {
  background("black"); 
  
  Engine.update(engine);

  ground.display();
  box.display();
  box1.display();
  box2.display();
  virus1.display();
  slingshot.display();

 
  

  drawSprites();
}

function mouseDragged()
{
    Matter.Body.setPosition(virus1.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
    slingshot.fly();
}