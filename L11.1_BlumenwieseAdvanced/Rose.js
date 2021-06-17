"use strict";
var flower11;
(function (flower11) {
    class Rose extends flower11.Flower {
        position;
        velocity;
        constructor(_position) {
            super(_position);
            let x = 300 * Math.random();
            let y = 100 * flower11.golden * Math.random() + 600 * flower11.golden;
            if (_position)
                this.position = _position;
            else
                this.position = new flower11.Vector(x, y);
        }
        draw() {
            //Roses
            //Stem
            flower11.crc2.beginPath();
            flower11.crc2.rect(this.position.x * 3, this.position.y + 10, 2, 20);
            flower11.crc2.fillStyle = "green";
            flower11.crc2.fill();
            //Leaf
            flower11.crc2.beginPath();
            flower11.crc2.arc(this.position.x * 3 + 2, this.position.y + 10, 8, 0, 0.5 * Math.PI);
            flower11.crc2.fillStyle = "green";
            flower11.crc2.fill();
            flower11.crc2.closePath();
            //Petal
            flower11.crc2.beginPath();
            flower11.crc2.arc(this.position.x * 3 + 1, this.position.y + 5, 7, 0, 1 * Math.PI);
            flower11.crc2.fillStyle = "red";
            flower11.crc2.fill();
            flower11.crc2.closePath();
            flower11.crc2.beginPath();
            flower11.crc2.fillStyle = "lightblue";
            flower11.crc2.fillRect(this.position.x * 3 + 6, this.position.y, 8, 0 - this.nectarLiter);
            flower11.crc2.closePath();
        }
    }
    flower11.Rose = Rose;
})(flower11 || (flower11 = {}));
//# sourceMappingURL=Rose.js.map