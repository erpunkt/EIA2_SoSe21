"use strict";
var flower11;
(function (flower11) {
    class Cloud extends flower11.Moveable {
        position;
        velocity;
        size;
        color;
        constructor(_size, _position) {
            super(_position);
            let x = 1000 * Math.random();
            let y = 50;
            this.position = new flower11.Vector(x, y);
            this.size = 50;
            this.color = "#e0c9d8";
            //Speed & Direction
            let a = -Math.random() * 2; //-damit sie nach links "laufen"
            this.velocity = new flower11.Vector(a, 0);
        }
        draw() {
            flower11.crc2.beginPath();
            flower11.crc2.arc(this.position.x + this.size, this.position.y, this.size, 0, 2 * Math.PI);
            flower11.crc2.fillStyle = this.color;
            flower11.crc2.fill();
            flower11.crc2.closePath();
            flower11.crc2.beginPath();
            flower11.crc2.arc(this.position.x, this.position.y + 50, this.size, 0, 2 * Math.PI);
            flower11.crc2.fill();
            flower11.crc2.closePath();
            flower11.crc2.beginPath();
            flower11.crc2.arc(this.position.x + 125, this.position.y, this.size, 0, 2 * Math.PI);
            flower11.crc2.fill();
            flower11.crc2.closePath();
            flower11.crc2.beginPath();
            flower11.crc2.arc(this.position.x + 200, this.position.y + 50, this.size, 0, 2 * Math.PI);
            flower11.crc2.fill();
            flower11.crc2.closePath();
            flower11.crc2.beginPath();
            flower11.crc2.arc(this.position.x + 150, this.position.y + 80, this.size, 0, 2 * Math.PI);
            flower11.crc2.fill();
            flower11.crc2.closePath();
            flower11.crc2.beginPath();
            flower11.crc2.arc(this.position.x + 80, this.position.y + 80, this.size, 0, 2 * Math.PI);
            flower11.crc2.fill();
            flower11.crc2.closePath();
        }
    }
    flower11.Cloud = Cloud;
})(flower11 || (flower11 = {}));
//# sourceMappingURL=Cloud.js.map