class paper{
    constructor(x,y,width,height){
        var options={
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2  
        }
        this.Body=Bodies.circle(this.x,this.y,(this.r-20)/2,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("sprites/base.png");
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        this.image(this.image,0,0,this.width,this.height);
        Pop();
    }
}