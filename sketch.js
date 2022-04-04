
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball 
var ground
var leftside
var rightside
 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options={
	isStatic:false,
	restitution:0.1,
	friction:0,
	density:0.3
	
		}

	var ground_options={
	isStatic:true,	
	}

	var leftside_options={
	isStatic:true,	
	}

	var rightside_options={
	isStatic:true,	
	}
		
	ball = Bodies.circle(100,550,20,ball_options);
	World.add(world,ball)
	

	ground = Bodies.rectangle(400,650,1000,20,ground_options);
	World.add(world,ground)

	leftside = Bodies.rectangle(800,550,10,200,leftside_options)
	World.add(world,leftside)
	 
	
	rightside = Bodies.rectangle(600,550,10,200,rightside_options)
	World.add(world,rightside)

	Engine.run(engine);

	}


	function keyPressed() {

		if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:8,y:9},{x:9,y:-14})
		
	}
	}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  fill(200)
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,1000,20);
  rect(leftside.position.x,leftside.position.y,10,200)
  rect(rightside.position.x,rightside.position.y,10,200)
}



