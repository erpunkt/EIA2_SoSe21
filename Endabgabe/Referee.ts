
namespace Soccer {
    export class Referee extends Moveable {
        public position: Vector;
        protected color: string;
        protected velocity: Vector;

        constructor(_position?: Vector) {
            super(_position); //Get position from Superclass
            let x: number = 1000 * Math.random();
            let y: number = 600 * Math.random();
            let a: number = - Math.random();
            let b: number = 2 * Math.random();
            this.position = new Vector(x, y);
            this.color = "black";

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(x, y);
            this.velocity = new Vector(a, b);
        }

        public draw(): void {
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.closePath();
        }


        public move (): void {
       //
          }
}
}