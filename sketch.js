var myEngine,myWorld;

var groundBody;
var ballbody
function setup() {
  createCanvas(400, 400);
  //create the physics engine
  myEngine=Matter.Engine.create();
  
  //create the world
  myWorld=myEngine.world;
  //create ballbody
  ballbody=Matter.Bodies.circle(200,160,20,{restitution:1.5})
  Matter.World.add(myWorld,ballbody);
  //create bodies ground
  groundBody=Matter.Bodies.rectangle(200,390,400,20,{isStatic:true});
  
  //add the body to world
  Matter.World.add(myWorld,groundBody);
  
  console.log(groundBody);
}

function draw() {
  background(220);
  //update the engine
  Matter.Engine.update(myEngine);
  console.log(groundBody.position.y)
  //give physical shape to all the bodies
  //ground
  rectMode(CENTER);
  rect(groundBody.position.x,groundBody.position.y,400,20)
  ellipseMode(RADIUS);
  ellipse(ballbody.position.x,ballbody.position.y,20,20)

}