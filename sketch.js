const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint =  Matter.Constraint;

var box = [];
var engine, world;
var box1,m;

function preload() {
    m = loadImage("./monstro.png");
}

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
    //box ate 6 x 900
    //box ate 6 x 800
    //box ate 8 x 700
    //box y 100
    //box w:70 h:70
    for(let i = 0; i < 20; i++){
        if(i < 6) box[i] = new Box(900,100,70,70,true,m);
        else if(i < 12) box[i] = new Box(800,100,70,70,true,m); 
        else box[i] = new Box(700,100,70,70,true,m);
    }
    
    ground = new Ground(600,600,1200,20);
    ball = new Ball(200,200,80,80);
    chain = new Chain(ball.body,{x:500,y:50})

}

function draw(){
    background("white");
    Engine.update(engine);
    ground.display();
    chain.display()
    ball.display()
    
    for(let i = 0; i < 20; i++) {
        box[i].display();
    }
    image(m,box[14].body.x,box[14].body.y)
}

function mouseDragged() {
   Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
