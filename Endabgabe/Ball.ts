
namespace Soccer {
    export class Ball extends Moveable {
        public goalLeft: HTMLElement;
        public goalRight: HTMLElement;
        public goal1: number = 0;
        public goal2: number = 0;
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
        public move(_timeslice?: number): void {

            this.position.add(this.velocity);
            let differenceVector: Vector = Vector.getDifference(this.target, this.position); //weil static
            this.velocity = new Vector(differenceVector.x / 10, differenceVector.y / 10); //der Vector zwischen Ziel und Punkt des balles ist der difference Vector. Die Geschiwndigkeit ist die x Richtung dadurch wird die strecke geteilt. Geschwidnigkeit wird dann in Richtung der Click Position gesetzt. Hier 1/10
            this.position.add(this.velocity);

            //gate first Team, left
            let diffX1: number = 0 - this.position.x; //Differenz berechnen von Ball posx und player posx
            let diffY1: number = 300 - this.position.y; //Differenz berechnen von Ball posy und player posy
            let radiL: number = Math.hypot(diffY1, diffX1); //radius links

            //gate secondTeam, right
            let diffX2: number = 1000 - this.position.x; //Differenz berechnen von Ball posx und player posx
            let diffY2: number = 300 - this.position.y; //Differenz berechnen von Ball posy und player posy
            let radiR: number = Math.hypot(diffY2, diffX2); //radius rechts

            
            if (differenceVector.length <= 10) { //wenn der Ball nah genug an der Click Position ist soll er sich nicht mehr bewegen
                this.velocity.x = 0;
                this.velocity.y = 0;
            }


            if (radiL <= 45) { //wenn Radius vom linken Tor kleiner gleich 45, wird das spiel Angehalten und der Ball geht zur??ck zur Startposition.
                this.goalLeft = <HTMLElement>document.querySelector("#goalTeam1");
                this.goal1++;
                this.goalLeft.innerHTML = this.goal1 + "";
                playerAction = ActionPl.STOP_GAME;
                this.position.set(this.startPosition.x, this.startPosition.y);
                this.target.set(this.startPosition.x, this.startPosition.y);
            }

            if (radiR <= 45) { //wenn Radius vom rechten Tor kleiner gleich 45, wird das spiel Angehalten und der Ball geht zur??ck zur Startposition.
                this.goalRight = <HTMLElement>document.querySelector("#goalTeam2");
                this.goal2++;
                this.goalRight.innerHTML = this.goal2 + "";
                playerAction = ActionPl.STOP_GAME;
                this.position.set(this.startPosition.x, this.startPosition.y);
                this.target.set(this.startPosition.x, this.startPosition.y);
            }

            //Kollision, sorgt daf??r das der Ball im Spielfeld bleibt
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
        }

        
    }
}