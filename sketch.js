const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var man,man_img,man_running;
var thunder1, thunder2,thunder3,thunder4;
var dp = []
function preload(){
   
    man_img = loadImage("images/Walking Frame/walking_1.png")
    thunder1 = loadImage("images/thunderbolt/1.png")
    thunder2 = loadImage("images/thunderbolt/2.png")
    thunder3 = loadImage("images/thunderbolt/3.png")
    thunder4 = loadImage("images/thunderbolt/4.png")

    man_running = loadAnimation("images/Walking Frame/walking_8.png",
                                 "images/Walking Frame/walking_7.png",
                                 "images/Walking Frame/walking_6.png",
                                 "images/Walking Frame/walking_5.png",
                                 "images/Walking Frame/walking_4.png",
                                 "images/Walking Frame/walking_3.png",
                                 "images/Walking Frame/walking_2.png",
                                 "images/Walking Frame/walking_1.png");
                                 
}

function setup(){
    var canvas = createCanvas(700,700);
   engine = Engine.create();
    world = engine.world;

    man = Bodies.circle(350,530,100,{isStatic:true})
   World.add(world,this.man)
    


  var maxDrops = 100
 
  for(var i=0; i<maxDrops; i++){
      dp.push(new Drop(random(0,700),random(0,400)))
      
  
}

 
 Engine.run(engine);   

}

function draw(){
    background(0)
    Engine.update(engine)


    imageMode(CENTER)
   image(this.man_img,this.man.position.x,this.man.position.y,300,300)
    var maxDrops = 100
    
    for (var k = 0; k < maxDrops; k++) {
     
       dp[k].display();
      dp[k].spawnRain()
      }
      Thunder();
      drawSprites()
      
}   
function Thunder(){
    rand = Math.round(random(1,4));
    if(frameCount%80 === 0){
        thunder = createSprite(random(10,370),random(10,30),10,10)
        switch(rand){
            case 1:thunder.addImage(thunder1)
            break;
            case 2:thunder.addImage(thunder2)
            break;
            case 3:thunder.addImage(thunder3)
            break;
            case 4:thunder.addImage(thunder4)
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
        thunder.lifetime = 15
    }
}
