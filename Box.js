class Box {
  constructor(x, y, width, height,b = false,m) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':0.04
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.b = b;
    if(b){
      this.m=m
    }
    World.add(world, this.body);
  }
  display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle)
    rectMode(CENTER);
    if(this.b){
    strokeWeight(5);
    stroke("black")
    fill("#9e8100")
    image(this.m,0, 0, this.width, this.height);}
    pop();
  }
};
