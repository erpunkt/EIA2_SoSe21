"use strict";
var flower11;
(function (flower11) {
    class Daisy extends flower11.Flower {
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
            //Daisys
            //Stem
            flower11.crc2.beginPath();
            flower11.crc2.rect(this.position.x * 2, this.position.y + 8, 2, 30);
            flower11.crc2.fillStyle = "green";
            flower11.crc2.fill();
            flower11.crc2.closePath();
            //Leaf
            flower11.crc2.beginPath();
            flower11.crc2.arc(this.position.x * 2 + 2, this.position.y + 13, 5, 0, 0.5 * Math.PI);
            flower11.crc2.fillStyle = "green";
            flower11.crc2.fill();
            flower11.crc2.closePath();
            //Petals
            flower11.crc2.beginPath();
            flower11.crc2.arc(this.position.x * 2 + 5, this.position.y, 5, 0, 2 * Math.PI);
            flower11.crc2.arc(this.position.x * 2, this.position.y + 5, 5, 0, 2 * Math.PI);
            flower11.crc2.arc(this.position.x * 2 - 5, this.position.y, 5, 0, 2 * Math.PI);
            flower11.crc2.arc(this.position.x * 2, this.position.y - 5, 5, 0, 2 * Math.PI);
            flower11.crc2.fillStyle = "white";
            flower11.crc2.fill();
            flower11.crc2.closePath();
            //Blossoms
            flower11.crc2.beginPath();
            flower11.crc2.arc(this.position.x * 2, this.position.y, 5, 0, 2 * Math.PI);
            flower11.crc2.fillStyle = "yellow";
            flower11.crc2.fill();
            flower11.crc2.closePath();
            //Nectar
            flower11.crc2.beginPath();
            flower11.crc2.fillStyle = "lightblue";
            flower11.crc2.fillRect(this.position.x * 2, this.position.y - 12, 8, 0 - this.nectarLiter);
            flower11.crc2.closePath();
        }
    }
    flower11.Daisy = Daisy;
})(flower11 || (flower11 = {}));
//# sourceMappingURL=Daisy.js.map