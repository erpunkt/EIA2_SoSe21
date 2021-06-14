"use strict";
var flowerClasses;
(function (flowerClasses) {
    class Bee {
        color;
        position;
        velocity;
        constructor() {
            let x = 1000 * Math.random();
            let y = 600 * Math.random();
            this.position = new flowerClasses.Vector(x, y);
            //Speed & Direction
            let a = -Math.random(); //-damit sie nach links "laufen"
            let b = Math.random();
            this.velocity = new flowerClasses.Vector(a, b);
        }
        draw() {
            //Seeds
            flowerClasses.crc2.beginPath();
            flowerClasses.crc2.ellipse(this.position.x, this.position.y, 10, 8, 10, 10, 1 * Math.PI);
            flowerClasses.crc2.fillStyle = "#FFA81E";
            flowerClasses.crc2.fill();
            flowerClasses.crc2.closePath();
            //Wing
            flowerClasses.crc2.beginPath();
            flowerClasses.crc2.arc(this.position.x + 3, this.position.y - 7, 10, 0, 0.7 * Math.PI);
            flowerClasses.crc2.fillStyle = "lightblue";
            flowerClasses.crc2.fill();
            flowerClasses.crc2.closePath();
            //eye
            flowerClasses.crc2.beginPath();
            flowerClasses.crc2.arc(this.position.x - 4, this.position.y - 5, 1, 0, 2 * Math.PI);
            flowerClasses.crc2.fillStyle = "black";
            flowerClasses.crc2.fill();
            flowerClasses.crc2.closePath();
        }
        move(_timeslice) {
            this.position.add(this.velocity);
            if (this.position.x < 0)
                this.position.x += flowerClasses.crc2.canvas.width;
            if (this.position.y > 600)
                this.position.y -= 500;
        }
    }
    flowerClasses.Bee = Bee;
})(flowerClasses || (flowerClasses = {}));
//# sourceMappingURL=Bee.js.map