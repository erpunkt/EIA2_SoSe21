namespace flower10 {

export class Bee extends Moveable {

position: Vector;
velocity: Vector;
colorbody: string;
colorwing: string;
coloreye: string;
size: number = 10;


constructor(_size?: number, _position?: Vector) {
    super(_position);
    let x: number = 500;
    let y: number = 400;
    
    
    //Speed & Direction
    
    let a: number = -Math.random() * 2; 
    let b: number = -Math.random() * 2;



    if (_position)
    this.position = _position;
       else
    this.position = new Vector(x, y);
       
    this.velocity = new Vector(a, b);
    }





draw(): void {
    
    this.colorbody = "yellow";
    this.colorwing = "lightblue";
    this.coloreye = "black";
    this.size = 10;

    //Body
    crc2.beginPath();
    crc2.ellipse(this.position.x , this.position.y, 10, 8, 10, 10, 1 * Math.PI);
    crc2.fillStyle = this.colorbody;
    crc2.fill();
    crc2.closePath();

    //Wing
    crc2.beginPath();
    crc2.arc(this.position.x + 3 , this.position.y - 7, this.size, 0, 0.7 * Math.PI);
    crc2.fillStyle = this.colorwing; 
    crc2.fill();
    crc2.closePath();
    
    //eye
    crc2.beginPath();
    crc2.arc(this.position.x - 4, this.position.y - 5, 1, 0, 2 * Math.PI);
    crc2.fillStyle = this.coloreye; 
    crc2.fill();
    crc2.closePath();



}



move(_timeslice: number): void {
        this.position.add(this.velocity);
        

        //Kollision
        if (this.position.x + this.size > 1000 || this.position.x - this.size < 0) {
        this.velocity.x =  -this.velocity.x;
        }
        if (this.position.y > 600 || this.position.y - this.size < 0) {
        this.velocity.y = - this.velocity.y;
        
        } 




}


}
}