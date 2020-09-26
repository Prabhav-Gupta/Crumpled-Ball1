
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Box(600,690,1200,20);
box1 = new Box (800,680,200,20);
box2 = new Box (700,600,20,150);
box3 = new Box (900,600,20,150);
ball = new Ball (200,200);

}


function draw() {

  background(0);
  Engine.update(engine);

  drawSprites();

ground.display();
box1.display();
box2.display();
box3.display();
ball.display();

}

function keyPressed (){
	if (keyCode=== UP_ARROW){
		Matter.Body.applyForce( ball.body, ball.body.position, {x:85, y:-85});
	  }
}
