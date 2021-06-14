"use strict";
var flower10;
(function (flower10) {
    class Cloud extends flower10.Moveable {
        position;
        velocity;
        size;
        constructor(_size, _position) {
            super(_position);
            let x = 1000 * Math.random();
            let y = 50;
            this.position = new flower10.Vector(x, y);
            this.size = 50;
            //Speed & Direction
            let a = -Math.random() * 2; //-damit sie nach links "laufen"
            this.velocity = new flower10.Vector(a, 0);
        }
        draw() {
            flower10.crc2.beginPath();
            flower10.crc2.arc(this.position.x + this.size, this.position.y, this.size, 0, 2 * Math.PI);
            flower10.crc2.fillStyle = "white";
            flower10.crc2.fill();
            flower10.crc2.closePath();
            flower10.crc2.beginPath();
            flower10.crc2.arc(this.position.x, this.position.y + 50, this.size, 0, 2 * Math.PI);
            flower10.crc2.fill();
            flower10.crc2.closePath();
            flower10.crc2.beginPath();
            flower10.crc2.arc(this.position.x + 130, this.position.y, this.size, 0, 2 * Math.PI);
            flower10.crc2.fill();
            flower10.crc2.closePath();
            flower10.crc2.beginPath();
            flower10.crc2.arc(this.position.x + 210, this.position.y + 50, this.size, 0, 2 * Math.PI);
            flower10.crc2.fill();
            flower10.crc2.closePath();
            flower10.crc2.beginPath();
            flower10.crc2.arc(this.position.x + 150, this.position.y + 80, this.size, 0, 2 * Math.PI);
            flower10.crc2.fill();
            flower10.crc2.closePath();
            flower10.crc2.beginPath();
            flower10.crc2.arc(this.position.x + 80, this.position.y + 80, this.size, 0, 2 * Math.PI);
            flower10.crc2.fill();
            flower10.crc2.closePath();
        }
    }
    flower10.Cloud = Cloud;
})(flower10 || (flower10 = {}));
//# sourceMappingURL=Cloud.js.map