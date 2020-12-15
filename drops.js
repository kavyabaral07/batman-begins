class Drops{
 constructor(x,y){
    this.rain = Bodies.circle(x,y,r);
    var options={
        friction : 0.1,
    }
 }
 update(){
    if (this.rain.position.y > height){
      Matter.body.setPosition(this.rain,{x:Random(0,400),y:random(0,400)});  
    }
 }
 display(){
     ellipseMode(CENTER);
     ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
 }
}