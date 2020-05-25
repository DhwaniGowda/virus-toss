class Bucket2
{
    constructor(x, y, height,angle) 
    {
      var options = 
      {
          isStatic:true
      }
     // this.image = loadImage("sanitizer.png");
      
      this.body = Bodies.rectangle(x, y, 10, 80,options);
      this.width = 150;
      this.height =10;
      Matter.Body.setAngle(this.body,angle);
      
      World.add(world, this.body);
    }
    display()
    {
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("yellow");
      fill("black");
      rect(0, 0, this.width, this.height);
   
      pop();
    }
  }
  