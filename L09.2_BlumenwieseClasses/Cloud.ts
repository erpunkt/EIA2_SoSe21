namespace flowerClasses {

    export class Cloud {
    type: string;
    color: string;
    position: Vector;
    velocity: Vector;
    size: number;
    
    constructor() {
    let x: number = 1000 * Math.random();
    let y: number =  50;
    this.position = new Vector (x, y);
    this.size = 50;

    
    //Speed & Direction
    
    let a: number = - Math.random() * 2; //-damit sie nach links "laufen"
    this.velocity = new Vector (a, 0);
    }


    move(_timeslice: number): void {
        this.position.add(this.velocity);
        
        if (this.position.x < 0)
        this.position.x += crc2.canvas.width;
    
        
        } 

draw(): void {
    
    crc2.beginPath();
    crc2.arc(this.position.x + this.size, this.position.y, this.size, 0, 2 * Math.PI);
    crc2.fillStyle = "white";
    crc2.fill();
    crc2.closePath();

    crc2.beginPath();
    crc2.arc(this.position.x, this.position.y + 50, this.size, 0, 2 * Math.PI);
    crc2.fill();
    crc2.closePath();

    crc2.beginPath();
    crc2.arc(this.position.x + 130, this.position.y, this.size, 0, 2 * Math.PI);
    crc2.fill();
    crc2.closePath();

    crc2.beginPath();
    crc2.arc(this.position.x + 210, this.position.y + 50, this.size, 0, 2 * Math.PI);
    crc2.fill();
    crc2.closePath();

    crc2.beginPath();
    crc2.arc(this.position.x + 150, this.position.y + 80, this.size, 0, 2 * Math.PI);
    crc2.fill();
    crc2.closePath();

    crc2.beginPath();
    crc2.arc(this.position.x + 80, this.position.y + 80, this.size, 0, 2 * Math.PI);
    crc2.fill();
    crc2.closePath();

}

}
}