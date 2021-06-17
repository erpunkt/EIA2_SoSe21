namespace flower11 {

    export abstract class Moveable {
        protected position: Vector;
        protected velocity: Vector;
        protected color: string;
        protected size: number;

        constructor(_position?: Vector) {
            let x: number = 1000 * Math.random() * 2;
            let y: number = 50;
            this.position = new Vector(x, y);

            //Geschwindigkeit und Richtung
            // let a: number = - Math.random() * 2; //-damit sie nach links "laufen"
            this.velocity = new Vector(2, 0);     
        }

        public move(_timeslice: number): void {
            this.position.add(this.velocity);
    
            if (this.position.x < 0)
            this.position.x += crc2.canvas.width;
            }

        public draw(): void {
            // console.log("Moveable move");
        }
    }
}