"use strict";
var flower10;
(function (flower10) {
    class Flowers {
        type;
        color;
        position;
        size;
        velocity;
        constructor() {
            console.log("constructed");
            let x = 300 * Math.random();
            let y = 100 * flower10.golden * Math.random() + 600 * flower10.golden;
            this.position = new flower10.Vector(x, y);
            //Speed & Direction
            let a = -Math.random(); //-damit sie nach links "laufen"
            let b = Math.random();
            this.velocity = new flower10.Vector(a, b);
        }
        move(_timeslice) {
            this.position.add(this.velocity);
            if (this.position.x < 0)
                this.position.x += flower10.crc2.canvas.width;
            if (this.position.y > 600)
                this.position.y -= 200;
        }
        draw() {
            //Sunflower
            //Stem
            flower10.crc2.beginPath();
            flower10.crc2.rect(this.position.x, this.position.y, 2, 50);
            flower10.crc2.fillStyle = "green";
            flower10.crc2.fill();
            //Leaf
            flower10.crc2.beginPath();
            flower10.crc2.arc(this.position.x, this.position.y + 30, 10, 0, 0.5 * Math.PI);
            flower10.crc2.fillStyle = "green";
            flower10.crc2.fill();
            flower10.crc2.closePath();
            //Petals
            flower10.crc2.beginPath();
            flower10.crc2.arc(this.position.x + 10, this.position.y, 10, 0, 2 * Math.PI);
            flower10.crc2.arc(this.position.x, this.position.y + 10, 10, 0, 2 * Math.PI);
            flower10.crc2.arc(this.position.x - 10, this.position.y, 10, 0, 2 * Math.PI);
            flower10.crc2.arc(this.position.x, this.position.y - 10, 10, 0, 2 * Math.PI);
            flower10.crc2.fillStyle = "yellow";
            flower10.crc2.fill();
            flower10.crc2.closePath();
            //Seeds
            flower10.crc2.beginPath();
            flower10.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            flower10.crc2.fillStyle = "brown";
            flower10.crc2.fill();
            flower10.crc2.closePath();
            //Daisys
            //Stem
            flower10.crc2.beginPath();
            flower10.crc2.rect(this.position.x * 2, this.position.y + 8, 2, 30);
            flower10.crc2.fillStyle = "green";
            flower10.crc2.fill();
            flower10.crc2.closePath();
            //Leaf
            flower10.crc2.beginPath();
            flower10.crc2.arc(this.position.x * 2 + 2, this.position.y + 13, 5, 0, 0.5 * Math.PI);
            flower10.crc2.fillStyle = "green";
            flower10.crc2.fill();
            flower10.crc2.closePath();
            //Petals
            flower10.crc2.beginPath();
            flower10.crc2.arc(this.position.x * 2 + 5, this.position.y, 5, 0, 2 * Math.PI);
            flower10.crc2.arc(this.position.x * 2, this.position.y + 5, 5, 0, 2 * Math.PI);
            flower10.crc2.arc(this.position.x * 2 - 5, this.position.y, 5, 0, 2 * Math.PI);
            flower10.crc2.arc(this.position.x * 2, this.position.y - 5, 5, 0, 2 * Math.PI);
            flower10.crc2.fillStyle = "white";
            flower10.crc2.fill();
            flower10.crc2.closePath();
            //Blossoms
            flower10.crc2.beginPath();
            flower10.crc2.arc(this.position.x * 2, this.position.y, 5, 0, 2 * Math.PI);
            flower10.crc2.fillStyle = "yellow";
            flower10.crc2.fill();
            flower10.crc2.closePath();
            //Roses
            //Stem
            flower10.crc2.beginPath();
            flower10.crc2.rect(this.position.x * 3, this.position.y + 10, 2, 20);
            flower10.crc2.fillStyle = "green";
            flower10.crc2.fill();
            //Leaf
            flower10.crc2.beginPath();
            flower10.crc2.arc(this.position.x * 3 + 2, this.position.y + 10, 8, 0, 0.5 * Math.PI);
            flower10.crc2.fillStyle = "green";
            flower10.crc2.fill();
            flower10.crc2.closePath();
            //Petal
            flower10.crc2.beginPath();
            flower10.crc2.arc(this.position.x * 3 + 1, this.position.y + 5, 7, 0, 1 * Math.PI);
            flower10.crc2.fillStyle = "red";
            flower10.crc2.fill();
            flower10.crc2.closePath();
        }
    }
    flower10.Flowers = Flowers;
})(flower10 || (flower10 = {}));
//# sourceMappingURL=Flowers.js.map