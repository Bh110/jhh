class girl{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Riya.png");
        World.add(world, this.body);
      }
      display(){
        var pos=this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y, this.width, this.height);
        pop();
      }
}