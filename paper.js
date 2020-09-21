class Paper {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Matter.Bodies.circle(x, y, 20, options);
      this.width = width;
      this.height = height;
      this.diameter = 20
      
      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      
      var angle = this.body.angle;
      
     // translate(paperpos.x, paperpos.y);
      ellipseMode(RADIUS);
      
      fill(255);
      ellipse(pos.x,pos.y, 20,20);
     
    }
  };
  
