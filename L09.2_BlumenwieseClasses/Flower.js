"use strict";
var flowerClasses;
(function (flowerClasses) {
    class Flower {
        type;
        color;
        position;
        size;
        velocity;
        constructor() {
            console.log("constructed");
            let x = 300 * Math.random();
            let y = 100 * flowerClasses.golden * Math.random() + 600 * flowerClasses.golden;
            this.position = new flowerClasses.Vector(x, y);
            //Speed & Direction
            let a = -Math.random(); //-damit sie nach links "laufen"
            let b = Math.random();
            this.velocity = new flowerClasses.Vector(a, b);
        }
        move(_timeslice) {
            this.position.add(this.velocity);
            if (this.position.x < 0)
                this.position.x += flowerClasses.crc2.canvas.width;
            if (this.position.y > 600)
                this.position.y -= 200;
        }
        draw() {
            //Sunflower
            //Stem
            flowerClasses.crc2.beginPath();
            flowerClasses.crc2.rect(this.position.x, this.position.y, 2, 50);
            flowerClasses.crc2.fillStyle = "green";
            flowerClasses.crc2.fill();
            //Leaf
            flowerClasses.crc2.beginPath();
            flowerClasses.crc2.arc(this.position.x, this.position.y + 30, 10, 0, 0.5 * Math.PI);
            flowerClasses.crc2.fillStyle = "green";
            flowerClasses.crc2.fill();
            flowerClasses.crc2.closePath();
            //Petals
            flowerClasses.crc2.beginPath();
            flowerClasses.crc2.arc(this.position.x + 10, this.position.y, 10, 0, 2 * Math.PI);
            flowerClasses.crc2.arc(this.position.x, this.position.y + 10, 10, 0, 2 * Math.PI);
            flowerClasses.crc2.arc(this.position.x - 10, this.position.y, 10, 0, 2 * Math.PI);
            flowerClasses.crc2.arc(this.position.x, this.position.y - 10, 10, 0, 2 * Math.PI);
            flowerClasses.crc2.fillStyle = "yellow";
            flowerClasses.crc2.fill();
            flowerClasses.crc2.closePath();
            //Seeds
            flowerClasses.crc2.beginPath();
            flowerClasses.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            flowerClasses.crc2.fillStyle = "brown";
            flowerClasses.crc2.fill();
            flowerClasses.crc2.closePath();
            //Daisys
            //Stem
            flowerClasses.crc2.beginPath();
            flowerClasses.crc2.rect(this.position.x * 2, this.position.y + 8, 2, 30);
            flowerClasses.crc2.fillStyle = "green";
            flowerClasses.crc2.fill();
            flowerClasses.crc2.closePath();
            //Leaf
            flowerClasses.crc2.beginPath();
            flowerClasses.crc2.arc(this.position.x * 2 + 2, this.position.y + 13, 5, 0, 0.5 * Math.PI);
            flowerClasses.crc2.fillStyle = "green";
            flowerClasses.crc2.fill();
            flowerClasses.crc2.closePath();
            //Petals
            flowerClasses.crc2.beginPath();
            flowerClasses.crc2.arc(this.position.x * 2 + 5, this.position.y, 5, 0, 2 * Math.PI);
            flowerClasses.crc2.arc(this.position.x * 2, this.position.y + 5, 5, 0, 2 * Math.PI);
            flowerClasses.crc2.arc(this.position.x * 2 - 5, this.position.y, 5, 0, 2 * Math.PI);
            flowerClasses.crc2.arc(this.position.x * 2, this.position.y - 5, 5, 0, 2 * Math.PI);
            flowerClasses.crc2.fillStyle = "white";
            flowerClasses.crc2.fill();
            flowerClasses.crc2.closePath();
            //Blossoms
            flowerClasses.crc2.beginPath();
            flowerClasses.crc2.arc(this.position.x * 2, this.position.y, 5, 0, 2 * Math.PI);
            flowerClasses.crc2.fillStyle = "yellow";
            flowerClasses.crc2.fill();
            flowerClasses.crc2.closePath();
            //Roses
            //Stem
            flowerClasses.crc2.beginPath();
            flowerClasses.crc2.rect(this.position.x * 3, this.position.y + 10, 2, 20);
            flowerClasses.crc2.fillStyle = "green";
            flowerClasses.crc2.fill();
            //Leaf
            flowerClasses.crc2.beginPath();
            flowerClasses.crc2.arc(this.position.x * 3 + 2, this.position.y + 10, 8, 0, 0.5 * Math.PI);
            flowerClasses.crc2.fillStyle = "green";
            flowerClasses.crc2.fill();
            flowerClasses.crc2.closePath();
            //Petal
            flowerClasses.crc2.beginPath();
            flowerClasses.crc2.arc(this.position.x * 3 + 1, this.position.y + 5, 7, 0, 1 * Math.PI);
            flowerClasses.crc2.fillStyle = "red";
            flowerClasses.crc2.fill();
            flowerClasses.crc2.closePath();
        }
    }
    flowerClasses.Flower = Flower;
})(flowerClasses || (flowerClasses = {}));
//# sourceMappingURL=Flower.js.map