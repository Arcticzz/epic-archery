class ComputerArcher {
  constructor(x, y, width, height, angle) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.image = loadImage("./assets/playerArcher.png");

    World.add(world, this.body);
 }
 display() {

  if(keyIsDown(RIGHT_ARROW)&&this.angle<+0.3){
    this.angle+=0.2
  }
  if(keyIsDown(LEFT_ARROW)&&this.angle>-1.4){
    this.angle-=0.2
  }

  var pos = this.body.position;
  var angle = this.body.angle;

  push();
    translate(this.x, this.y);
    rotate(this.angle);
    rect(this.image, -10, -20, this.width, this.height);
    pop()
 }
} 