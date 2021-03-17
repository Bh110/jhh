class block{
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage( "log.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image,pos.x,pos.y, this.width, this.height);
      pop();
    }
  }
