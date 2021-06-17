"use strict";
var flower11;
(function (flower11) {
    class Bee extends flower11.Moveable {
        position;
        velocity;
        size;
        constructor(_size, _position) {
            super(_position);
            let x = 500;
            let y = 400;
            this.size = 10;
            //Speed & Direction
            let a = -Math.random() * 2;
            let b = -Math.random() * 2;
            if (_position)
                this.position = _position;
            else
                this.position = new flower11.Vector(x, y);
            this.velocity = new flower11.Vector(a, b);
        }
        draw() {
            this.size = 10;
            //Body
            flower11.crc2.beginPath();
            flower11.crc2.ellipse(this.position.x, this.position.y, 10, 8, 10, 10, 1 * Math.PI);
            flower11.crc2.fillStyle = "yellow";
            flower11.crc2.fill();
            flower11.crc2.closePath();
            //Wing
            flower11.crc2.beginPath();
            flower11.crc2.arc(this.position.x + 3, this.position.y - 7, this.size, 0, 0.7 * Math.PI);
            flower11.crc2.fillStyle = "lightblue";
            flower11.crc2.fill();
            flower11.crc2.closePath();
            //eye
            flower11.crc2.beginPath();
            flower11.crc2.arc(this.position.x - 4, this.position.y - 5, 1, 0, 2 * Math.PI);
            flower11.crc2.fillStyle = "black";
            flower11.crc2.fill();
            flower11.crc2.closePath();
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
    flower11.Bee = Bee;
})(flower11 || (flower11 = {}));
//# sourceMappingURL=Bee.js.map