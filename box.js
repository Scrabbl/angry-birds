class Box{
    constructor(x,y,width,height){
        var options={
            restitution:0.5
    
        }
    this.boxbody=Bodies.rectangle(x,y,width,height,options)
    this.width=width;
    this.height=height;
    
    World.add(world,this.boxbody)
    }
    display(){
    var distance=this.boxbody.position
    push()
    translate(distance.x,distance.y)
    rotate(this.boxbody.angle)
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop()
    }
    
    }