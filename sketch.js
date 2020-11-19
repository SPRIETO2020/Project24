const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var world;
var engine, world;
var ground, paper, dustbin;

function preload()
{
	
}

function setup() {
  createCanvas(800, 700);
  
  engine = Engine.create();
  world = engine.world;

  paper = new Paper(200,640,70,70);
  dustbin = new DustBin(630,640,200,20);
  ground = new Ground(400, 650, 800, 50);

  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  ground.display();
  dustbin.display();
  paper.display();
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:85, y:-85})
   }
 }



 
/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}*/
