class Garbage{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.8,
            
        }
        this.body=Bodies.circle(x,y,20,options);
        World.add(world,this.body); 
    }
    display(){
        var angle=this.body.angle;
        var pos=this.body.position;
        push();
        ellipseMode(RADIUS);
        fill("white");
        rotate(angle);
        ellipse(pos.x,pos.y,20,20);
        pop();
            
    }
    
}
