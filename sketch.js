const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world,ready;
var backgroundimg,coing,ci;
var score=0;

function preload(){
ready=loadImage( "getready.png");
backgroundimg=loadImage( "background.png");
ci=loadImage( "goldcoin.png")
}

function setup() {
 var canvas= createCanvas(1200,600);
 rectMode(CENTER);
  engine = Engine.create();
  world = engine.world;

   background=createSprite( width/2,height/2);
   background.x=background.width/2;
   background.addImage( backgroundimg,"background.png");
   
   Block = new block(600,height,200,20);
   player=new girl(600,height-200,50,100);

   initialstate=createSprite( 600,300);
   initialstate.addImage( ready,"getready.png")
   if(player.velocityX>0){
     initialstate.visible=false;
   }
   else{
     initialstate.visible=true;
   }
  coing=new Group ();
  Engine.run(engine);
}

function draw() {
   fill( "Black");
   textSize( 20);
   text("Score:" +score,150,50);
   background.velocity=-4;
  if( background.x<0){
  background.x=background.width/2;}
 Block.x=player.x;
 if (keyDown("space")) {
    player.velocityY = -12; }
    player.velocityY = player.velocityY + 0.8;
    player.collide(Block);
   if (player.isTouching(coing)) {
    score = score + 2;
    coing.destroyEach();
    }
    Engine.update(engine);

 Block.display();
 player.display();
 initialstate.display();
  drawSprites();
}
function Coin() {
  if (World.frameCount % 80 === 0) {
  coin= createSprite(200, 100);
  coin.addImage("goldcoin.png",ci);
  coin.scale = 0.1;
  coin.y = Math.round(random(120, 180));
  coin.velocityX = -2;
  coin.lifetime = 110;
  coing.add(coin);
  }
  }