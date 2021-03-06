
namespace Soccer {
    export class Player extends Moveable {

        declare public startPosition: Vector;
        public precision: number;
        public colorTeamOne: string;
        public colorTeamTwo: string;
        public radius: number;
        public position: Vector;
        public changeJerseyNumber: boolean;
        public jerseynumber: string;
        public playerOnBall: HTMLElement;
        public velocity: Vector; //Geschwindigkeit Ball
        public velocity2: number; //Geschwindigkeit Spieler
        protected distance: number;
        protected angle: number;

        protected team: number;


        constructor(_position?: Vector, _startPosition?: Vector) {
            super(_position, _startPosition);
            let x: number = 1000 * Math.random();
            let y: number = 600 * Math.random();
            let a: number = - Math.random();
            let b: number = 2 * Math.random();
            this.position = new Vector(x, y);
            this.startPosition = new Vector(x, y);

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(x, y);
            this.velocity = new Vector(a, b);
        }

        //Größe der Spieler
        public draw(): void {

//Team One
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            crc2.fillStyle = this.colorTeamOne;
            crc2.fill();
            crc2.strokeText(this.jerseynumber, this.position.x, this.position.y + 3, 8);
            crc2.textAlign = "center";
            crc2.strokeStyle = "white";
            crc2.closePath();


//Team Two
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            crc2.fillStyle = this.colorTeamTwo;
            crc2.fill();
            crc2.strokeText(this.jerseynumber, this.position.x, this.position.y + 3, 8);
            crc2.textAlign = "center";
            crc2.strokeStyle = "white";
            crc2.closePath();



        }

        public move (_timeslice: number , _positionBall: Vector): void {
            let positionBall: Vector = _positionBall;
            let posX: number = positionBall.x - this.position.x;
            let posY: number = positionBall.y - this.position.y;
            let radi: number = Math.hypot(posY, posX);
            let xdefaultPos: number = this.startPosition.x;
            let ydefaultPos: number = this.startPosition.y;

            if (radi <= 200) { //200 Pixel ist der Wahrnehmungsradius übers Spielfeld, Dann bewegt sich der Spieler zum Ball

        let position: Vector = new Vector(posX, posY);

        position.scale(this.velocity2 / radi);
        this.position.add(position);

        if (radi <= 7) {
            this.playerOnBall = <HTMLElement>document.querySelector("#onBall");
            this.playerOnBall.innerHTML = this.jerseynumber;
            playerAction = ActionPl.STOP_GAME;
        }
    }

            if (radi > 200) {

        this.position.set(xdefaultPos, ydefaultPos);
    }

}

    }
}