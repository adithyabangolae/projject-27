
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var Box1;
var bob1,bob2,bob3,bob5,bob4;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;


	Box1 = new Box(390,400,300,30)
	bob1 = new Bob(280,600,50)
	bob2 = new Bob(330,600,50)
	bob3 = new Bob(380,600,50)
	bob4 = new Bob(430,600,50)
	bob5 = new Bob(480,600,50)
	rope1 = new Chain(bob1.body,Box1.body,-bobDiameter*2,0);

	

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");


Box1.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();



  
  drawSprites();
 
}



