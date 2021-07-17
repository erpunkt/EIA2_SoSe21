
namespace Soccer {
    export class Linesman extends Moveable { 
    public color: string;
    public velocity: Vector;
    public position: Vector;
    
    constructor(_position?: Vector) {
    super(_position);
    let x: number = 1000 * Math.random();
    let y: number = 593;
    let a: number = - Math.random();
    let b: number = 0;
    this.position = new Vector(x, y);
    this.color = "yellow";

    if (_position) 
this.position = _position;
else
this.position = new Vector(x, y);
    this.velocity = new Vector(a, b);
}


public move(_timeslice: number): void {
this.position.add(this.velocity);

//mit Kollision
if (this.position.x + 10 > 1000 || this.position.x - 5 < 0) {
this.velocity.x = -this.velocity.x;
}
if (this.position.y + 10 > 600 || this.position.y - 5 < 0) {
this.velocity.y = -this.velocity.y;
}
}


public draw(): void { 
crc2.beginPath();
crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
crc2.fillStyle = this.color;
crc2.fill();
crc2.closePath();
} 
}
}