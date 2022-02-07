const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var tower,towerImage;

var cannon, cball;

var backImage;

function preload() {
  backImage = loadImage("background.gif");
  towerImage = loadImage("tower.png");
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  angle = -PI/4;

  tower = new Tower(120,350,180,310);
  cannon = new Cannon(160,120,150,75,angle);
  cball = new CBall(cannon.x+25,cannon.y-50,80);

  rectMode(CENTER);
}


function draw() {
  background("black");
  image(backImage,0,0,width,height);
  Engine.update(engine);



  tower.display();
  cannon.display();
  cball.display();

}

function keyReleased(){
  if(keyCode==ENTER){
    cball.shoot();
  }
}


