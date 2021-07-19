"use strict";
var Soccer;
(function (Soccer) {
    class Linesman extends Soccer.Moveable {
        color;
        velocity;
        position;
        constructor(_position) {
            super(_position);
            let x = 1000 * Math.random();
            let y = 593;
            let a = -Math.random();
            let b = 0;
            this.position = new Soccer.Vector(x, y);
            this.color = "yellow";
            if (_position)
                this.position = _position;
            else
                this.position = new Soccer.Vector(x, y);
            this.velocity = new Soccer.Vector(a, b);
        }
        move(_timeslice) {
            this.position.add(this.velocity); //Add Velocity to Position
            //Kollusion, that the Linesman dont move out of the canvas
            if (this.position.x + 10 > 1000 || this.position.x - 5 < 0) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.y + 10 > 600 || this.position.y - 5 < 0) {
                this.velocity.y = -this.velocity.y;
            }
        }
        draw() {
            Soccer.crc2.beginPath();
            Soccer.crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            Soccer.crc2.fillStyle = this.color;
            Soccer.crc2.fill();
            Soccer.crc2.closePath();
        }
    }
    Soccer.Linesman = Linesman;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=Linesman.js.map