"use strict";
var flower10;
(function (flower10) {
    class Bee extends flower10.Moveable {
        position;
        velocity;
        colorbody;
        colorwing;
        coloreye;
        size = 10;
        constructor(_size, _position) {
            super(_position);
            let x = 500;
            let y = 400;
            //Speed & Direction
            let a = -Math.random() * 2;
            let b = -Math.random() * 2;
            if (_position)
                this.position = _position;
            else
                this.position = new flower10.Vector(x, y);
            this.velocity = new flower10.Vector(a, b);
        }
        draw() {
            this.colorbody = "yellow";
            this.colorwing = "lightblue";
            this.coloreye = "black";
            this.size = 10;
            //Body
            flower10.crc2.beginPath();
            flower10.crc2.ellipse(this.position.x, this.position.y, 10, 8, 10, 10, 1 * Math.PI);
            flower10.crc2.fillStyle = this.colorbody;
            flower10.crc2.fill();
            flower10.crc2.closePath();
            //Wing
            flower10.crc2.beginPath();
            flower10.crc2.arc(this.position.x + 3, this.position.y - 7, this.size, 0, 0.7 * Math.PI);
            flower10.crc2.fillStyle = this.colorwing;
            flower10.crc2.fill();
            flower10.crc2.closePath();
            //eye
            flower10.crc2.beginPath();
            flower10.crc2.arc(this.position.x - 4, this.position.y - 5, 1, 0, 2 * Math.PI);
            flower10.crc2.fillStyle = this.coloreye;
            flower10.crc2.fill();
            flower10.crc2.closePath();
        }
        move(_timeslice) {
            this.position.add(this.velocity);
            //Kollision
            if (this.position.x + this.size > 1000 || this.position.x - this.size < 0) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.y > 600 || this.position.y - this.size < 0) {
                this.velocity.y = -this.velocity.y;
            }
        }
    }
    flower10.Bee = Bee;
})(flower10 || (flower10 = {}));
//# sourceMappingURL=Bee.js.map