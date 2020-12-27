class boy{
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        //this.body = Bodies.rectangle(x,y,width,height,options);
        this.body = Bodies.rectangle(0,0,0,0,options);
        this.width = width;
        this.height = height;
        this.x=x
        this.y=y
        World.add(world, this.body);
        this.image = loadImage("boy.png");
      }
      display(){
        var pos =this.body.position;
        //rectMode(CENTER);
        //fill("black");
        //rect(pos.x, pos.y, this.width, this.height);
        image(this.image, this.x, this.y,this.width,this.height)
      }
    
}
