class rock {
    constructor(x, y) {
        var options = {
            isStatic:false,
            restitution:0.1,
            friction:3,
            density:1.5
        }
        this.image = loadImage("stone.png");
    this.body = Bodies.circle(x, y, 20, options);
      this.width = 70;  
      this.height = 70; 
                        
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //ellipseMode(RADIUS)
      fill("white");
      //ellipse(0, 0,20,20);
      image(this.image, (this.width/2)*-1, (this.height/2)*-1, this.width, this.height);
      pop();
      
    }
}