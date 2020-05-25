class Virus{
  constructor(x, y)
   {
    var options = 
    {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.image = loadImage("virus1.png");
    this.body = Bodies.rectangle(x, y, 100, 100, options);
    this.width = 100;
    this.height = 100;
   
    World.add(world, this.body);
  }
  display()
  {
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    strokeWeight(5);
    stroke("green");
    fill("black");
    image(this.image,0, 0, this.width, this.height);
    
    virus1.debug = true;


    pop();
  }
}
