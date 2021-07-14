"use strict";
var Soccer;
(function (Soccer) {
    class Ball extends Soccer.Moveable {
        static position;
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
        move(_timeslice) {
            this.position.add(this.velocity);
            let differenceVector = Soccer.Vector.getDifference(this.target, this.position); //weil static
            this.velocity = new Soccer.Vector(differenceVector.x / 10, differenceVector.y / 10); //der Vector zwischen ziel und punkt des balles ist der difference Vector. Die Geschiwndigkeit ist die x Richtung dadurch wird die strecke geteilt. Geschwidnigkeit wird dann in Richtung der Click Position gesetzt. Hier 1/10
            this.position.add(this.velocity);
            if (differenceVector.length <= 10) { //wenn der Ball nah genug an der Click Position ist soll er sich nicht mehr bewegen
                this.velocity.x = 0;
                this.velocity.y = 0;
            }
            //Kollision
            if (this.position.x + 10 > 1000 || this.position.x - 5 < 0) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.y + 10 > 600 || this.position.y - 5 < 0) {
                this.velocity.y = -this.velocity.y;
            }
        }
        draw() {
            Soccer.crc2.beginPath();
            Soccer.crc2.arc(this.position.x, this.position.y, 6, 0, 2 * Math.PI);
            Soccer.crc2.fillStyle = this.color;
            Soccer.crc2.fill();
            Soccer.crc2.closePath();
        }
    }
    Soccer.Ball = Ball;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=Ball.js.map