namespace flower11 {

    export class Cloud extends Moveable {
    protected position: Vector;
    protected velocity: Vector;
    protected size: number;
    protected color: string;
    
    constructor(_size?: number, _position?: Vector) {
        super(_position);

        let x: number = 1000 * Math.random();
        let y: number =  50;
        this.position = new Vector (x, y);
        this.size = 50;
        this.color = "#e0c9d8";

    
    //Speed & Direction
    
        let a: number = - Math.random() * 2; //-damit sie nach links "laufen"
        this.velocity = new Vector (a, 0);
    }



public draw(): void {
    
    crc2.beginPath();
    crc2.arc(this.position.x + this.size, this.position.y, this.size, 0, 2 * Math.PI);
    crc2.fillStyle = this.color;
    crc2.fill();
    crc2.closePath();

    crc2.beginPath();
    crc2.arc(this.position.x, this.position.y + 50, this.size, 0, 2 * Math.PI);
    crc2.fill();
    crc2.closePath();

    crc2.beginPath();
    crc2.arc(this.position.x + 125, this.position.y, this.size, 0, 2 * Math.PI);
    crc2.fill();
    crc2.closePath();

    crc2.beginPath();
    crc2.arc(this.position.x + 200, this.position.y + 50, this.size, 0, 2 * Math.PI);
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