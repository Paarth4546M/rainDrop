class Drop{
    constructor(x,y){
    var options={
        isstatic:false,
        friction:0.1,
        density:1.2
    }
    this.radius = 5
    this.body = Bodies.circle(x,y,5,options);
    World.add(world, this.body);
}
    display(){
        fill("blue")
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
    }
    spawnRain(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x:random(0,700),y:random(0,400)})
    
          }
    }
    }
    