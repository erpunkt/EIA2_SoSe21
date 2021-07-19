"use strict";
var Soccer;
(function (Soccer) {
    class Ball extends Soccer.Moveable {
        goalLeft;
        goalRight;
        goal1 = 0;
        goal2 = 0;
        target;
        color;
        velocity;
        constructor(_position) {
            super(_position);
            let x = 300;
            let y = 250;
            let a = -Math.random();
            let b = Math.random();
            this.position = new Soccer.Vector(x, y);
            this.color = "white";
            this.target = new Soccer.Vector(this.position.x, this.position.y);
            if (_position)
                this.position = _position;
            else
                this.position = new Soccer.Vector(x, y);
            this.velocity = new Soccer.Vector(a, b);
        }
        //ball radius
        move(_timeslice) {
            this.position.add(this.velocity);
            let differenceVector = Soccer.Vector.getDifference(this.target, this.position); //weil static
            this.velocity = new Soccer.Vector(differenceVector.x / 10, differenceVector.y / 10); //der Vector zwischen Ziel und Punkt des balles ist der difference Vector. Die Geschiwndigkeit ist die x Richtung dadurch wird die strecke geteilt. Geschwidnigkeit wird dann in Richtung der Click Position gesetzt. Hier 1/10
            this.position.add(this.velocity);
            //gate first Team, left
            let diffX1 = 0 - this.position.x; //Differenz berechnen von Ball posx und player posx
            let diffY1 = 300 - this.position.y; //Differenz berechnen von Ball posy und player posy
            let radiL = Math.hypot(diffY1, diffX1); //radius links
            //gate secondTeam, right
            let diffX2 = 1000 - this.position.x; //Differenz berechnen von Ball posx und player posx
            let diffY2 = 300 - this.position.y; //Differenz berechnen von Ball posy und player posy
            let radiR = Math.hypot(diffY2, diffX2); //radius rechts
            if (differenceVector.length <= 10) { //wenn der Ball nah genug an der Click Position ist soll er sich nicht mehr bewegen
                this.velocity.x = 0;
                this.velocity.y = 0;
            }
            if (radiL <= 45) { //wenn Radius vom linken Tor kleiner gleich 45, wird das spiel Angehalten und der Ball geht zurück zur Startposition.
                this.goalLeft = document.querySelector("#goalTeam1");
                this.goal1++;
                this.goalLeft.innerHTML = this.goal1 + "";
                Soccer.playerAction = Soccer.ActionPl.STOP_GAME;
                this.position.set(this.startPosition.x, this.startPosition.y);
                this.target.set(this.startPosition.x, this.startPosition.y);
            }
            if (radiR <= 45) { //wenn Radius vom rechten Tor kleiner gleich 45, wird das spiel Angehalten und der Ball geht zurück zur Startposition.
                this.goalRight = document.querySelector("#goalTeam2");
                this.goal2++;
                this.goalRight.innerHTML = this.goal2 + "";
                Soccer.playerAction = Soccer.ActionPl.STOP_GAME;
                this.position.set(this.startPosition.x, this.startPosition.y);
                this.target.set(this.startPosition.x, this.startPosition.y);
            }
            //Kollision, sorgt dafür das der Ball im Spielfeld bleibt
            if (this.position.x + 10 > 1000 || this.position.x - 5 < 0) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.y + 10 > 600 || this.position.y - 5 < 0) {
                this.velocity.y = -this.velocity.y;
            }
        }
        draw() {
            //Ball
            Soccer.crc2.beginPath();
            Soccer.crc2.arc(this.position.x, this.position.y, 7, 0, 2 * Math.PI);
            Soccer.crc2.fillStyle = this.color;
            Soccer.crc2.fill();
            Soccer.crc2.closePath();
        }
    }
    Soccer.Ball = Ball;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=Ball.js.map