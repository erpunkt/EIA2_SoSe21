namespace flower10 {

    export class Moveable {
        position: Vector;
        velocity: Vector;
        color: string;
        size: number;

        constructor(_position?: Vector) {
            let x: number = 1000 * Math.random() * 2;
            let y: number = 50;
            this.position = new Vector(x, y);

            //Geschwindigkeit und Richtung
            // let a: number = - Math.random() * 2; //-damit sie nach links "laufen"
            this.velocity = new Vector(1, 0);     
        }

        move(_timeslice: number): void {
            this.position.add(this.velocity);
    
            if (this.position.x < 0)
            this.position.x += crc2.canvas.width;
            }

        draw(): void {
            // console.log("Moveable move");
        }
    }
}