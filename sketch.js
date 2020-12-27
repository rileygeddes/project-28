
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var ground1
var tree1
var boy1
var rock1
var sling1
var mango1,mango2,mango3,mango4,mango5
var p1,p2,p3,p4,p5
var paperthrown=0
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ground1 = new Ground(600,680,1200,20)
tree1 = new tree(800,100,400,600)
boy1 = new boy (200,450,300,300)
rock1 = new rock( 250,520,50,50)
sling1 = new sling(rock1.body,{x:250,y:520})
mango1 = new mango(1000,400,50,50)	
p1 = new platform(1000,410,10,5)
mango2 = new mango(900,420,50,50)	
p2 = new platform(900,430,10,5)
mango3 = new mango(1100,300,50,50)	
p3 = new platform(1100,310,10,5)
mango4 = new mango(1170,200,50,50)	
p4 = new platform(1170,210,10,5)
mango5 = new mango(950,200,50,50)
p5 = new platform(950,210,10,5)

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  textSize(30);
text("press space and then c to reshoot", 200,200)
keyPressed()
  drawSprites();
  ground1.display()
 tree1.display()
 boy1.display()
 rock1.display()
 mango1.display()
 mango2.display()
 mango3.display()
 mango4.display()
 mango5.display()
// sling1.display()
}

function mouseDragged(){
	Matter.Body.setPosition(rock1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
	sling1.fly();
}
function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(rock1.body, {x:250, y:520})
		sling1.attach(rock1.body)
	}
  
  }
