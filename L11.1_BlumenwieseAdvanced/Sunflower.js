"use strict";
var flower11;
(function (flower11) {
    class Sunflower extends flower11.Flower {
        position;
        velocity;
        constructor(_position) {
            super(_position);
            // console.log("constructed");
            let x = 300 * Math.random();
            let y = 100 * flower11.golden * Math.random() + 600 * flower11.golden;
            if (_position)
                this.position = _position;
            else
                this.position = new flower11.Vector(x, y);
        }
        draw() {
            //Sunflower
            //Stem
            flower11.crc2.beginPath();
            flower11.crc2.rect(this.position.x, this.position.y, 2, 50);
            flower11.crc2.fillStyle = "green";
            flower11.crc2.fill();
            //Leaf
            flower11.crc2.beginPath();
            flower11.crc2.arc(this.position.x, this.position.y + 30, 10, 0, 0.5 * Math.PI);
            flower11.crc2.fillStyle = "green";
            flower11.crc2.fill();
            flower11.crc2.closePath();
            //Petals
            flower11.crc2.beginPath();
            flower11.crc2.arc(this.position.x + 10, this.position.y, 10, 0, 2 * Math.PI);
            flower11.crc2.arc(this.position.x, this.position.y + 10, 10, 0, 2 * Math.PI);
            flower11.crc2.arc(this.position.x - 10, this.position.y, 10, 0, 2 * Math.PI);
            flower11.crc2.arc(this.position.x, this.position.y - 10, 10, 0, 2 * Math.PI);
            flower11.crc2.fillStyle = "yellow";
            flower11.crc2.fill();
            flower11.crc2.closePath();
            //Seeds
            flower11.crc2.beginPath();
            flower11.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            flower11.crc2.fillStyle = "brown";
            flower11.crc2.fill();
            flower11.crc2.closePath();
            //Nectar
            flower11.crc2.beginPath();
            flower11.crc2.fillStyle = "lightblue";
            flower11.crc2.fillRect(this.position.x - 10, this.position.y - 5, 8, 0 - this.nectarLiter);
            flower11.crc2.closePath();
        }
    }
    flower11.Sunflower = Sunflower;
})(flower11 || (flower11 = {}));
//# sourceMappingURL=Sunflower.js.map