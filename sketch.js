//re-naming or namespacing or referencing
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

  var engine, world, ground,ball;

  function setup() {
    createCanvas(400,400);

    engine= Engine.create();
    world= engine.world;

    //JSON= Javascript Object Notation
    var options={
      isStatic:true,
      friction: 1.0,
      density:1.5
    }

    ground= Bodies.rectangle(200,380,400,20,options);
    World.add(world,ground);

    console.log(ground);
    var ballOptions={
      restitution:0.9
  
      
    }
ball=Bodies.circle(200,100,20,ballOptions);
World.add(world,ball);
  }

  function draw() {
    background(255); 
    Engine.update(engine);

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20); 
   
ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20);
  }