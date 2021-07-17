
namespace Soccer {
    export class Ball extends Moveable {
        public target: Vector;
        protected color: string;
        protected velocity: Vector;

        constructor(_position?: Vector) {
            super(_position);
            let x: number = 300;
            let y: number = 250;
            let a: number = - Math.random();
            let b: number = Math.random();
            this.position = new Vector(x, y);
            this.color = "white";

            this.target = new Vector(this.position.x, this.position.y);

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(x, y);
            this.velocity = new Vector(a, b);
        }

        //ball radius
        public move(_timeslice: number): void {
            this.position.add(this.velocity);
            let differenceVector: Vector = Vector.getDifference(this.target, this.position); //weil static
            this.velocity = new Vector(differenceVector.x / 10, differenceVector.y / 10); //der Vector zwischen ziel und punkt des balles ist der difference Vector. Die Geschiwndigkeit ist die x Richtung dadurch wird die strecke geteilt. Geschwidnigkeit wird dann in Richtung der Click Position gesetzt. Hier 1/10
            this.position.add(this.velocity);

            if (differenceVector.length <= 10) { //wenn der Ball nah genug an der Click Position ist soll er sich nicht mehr bewegen
                this.velocity.x = 0;
                this.velocity.y = 0;
            }


            //Kollision, sorgt dafür das der Ball im Spielfeld bleibt
            if (this.position.x + 10 > 1000 || this.position.x - 5 < 0) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.y + 10 > 600 || this.position.y - 5 < 0) {
                this.velocity.y = -this.velocity.y;
            }
        }

        public draw(): void {
            //Ball
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 7, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.closePath();

            // //Linien auf dem Ball
            // crc2.beginPath();
            // crc2.lineTo(this.position.x , this.position.y );
            // crc2.moveTo(this.position.x + 7, this.position.y + 7 );
            // crc2.moveTo
            // crc2.fillStyle = "black";
            // crc2.closePath();
        }
    }
}