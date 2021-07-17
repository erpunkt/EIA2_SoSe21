"use strict";
var Soccer;
(function (Soccer) {
    class Referee extends Soccer.Moveable {
        position;
        color;
        velocity;
        constructor(_position) {
            super(_position); //Übernimmt aus der Superklasse
            let x = 1000 * Math.random();
            let y = 600 * Math.random();
            let a = -Math.random();
            let b = 2 * Math.random();
            this.position = new Soccer.Vector(x, y);
            this.color = "black";
            if (_position)
                this.position = _position;
            else
                this.position = new Soccer.Vector(x, y);
            this.velocity = new Soccer.Vector(a, b);
        }
        draw() {
            Soccer.crc2.beginPath();
            Soccer.crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            Soccer.crc2.fillStyle = this.color;
            Soccer.crc2.fill();
            Soccer.crc2.closePath();
        }
    }
    Soccer.Referee = Referee;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=Referee.js.map