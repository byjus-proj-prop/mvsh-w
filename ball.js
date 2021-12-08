class Ball {
    constructor(x, y, width, height) {
        var options = {
            "frictionAir": 0.005,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.i = loadImage("./heroi.png")
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle)
        rectMode(CENTER);
        image(this.i,0, 0,this.width*2,this.height*2);
        pop();
      }
}