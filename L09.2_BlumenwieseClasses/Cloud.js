"use strict";
var flowerClasses;
(function (flowerClasses) {
    class Cloud {
        type;
        color;
        position;
        velocity;
        size;
        constructor() {
            let x = 1000 * Math.random();
            let y = 50;
            this.position = new flowerClasses.Vector(x, y);
            this.size = 50;
            //Speed & Direction
            let a = -Math.random() * 2; //-damit sie nach links "laufen"
            this.velocity = new flowerClasses.Vector(a, 0);
        }
        move(_timeslice) {
            this.position.add(this.velocity);
            if (this.position.x < 0)
                this.position.x += flowerClasses.crc2.canvas.width;
        }
        draw() {
            flowerClasses.crc2.beginPath();
            flowerClasses.crc2.arc(this.position.x + this.size, this.position.y, this.size, 0, 2 * Math.PI);
            flowerClasses.crc2.fillStyle = "white";
            flowerClasses.crc2.fill();
            flowerClasses.crc2.closePath();
            flowerClasses.crc2.beginPath();
            flowerClasses.crc2.arc(this.position.x, this.position.y + 50, this.size, 0, 2 * Math.PI);
            flowerClasses.crc2.fill();
            flowerClasses.crc2.closePath();
            flowerClasses.crc2.beginPath();
            flowerClasses.crc2.arc(this.position.x + 130, this.position.y, this.size, 0, 2 * Math.PI);
            flowerClasses.crc2.fill();
            flowerClasses.crc2.closePath();
            flowerClasses.crc2.beginPath();
            flowerClasses.crc2.arc(this.position.x + 210, this.position.y + 50, this.size, 0, 2 * Math.PI);
            flowerClasses.crc2.fill();
            flowerClasses.crc2.closePath();
            flowerClasses.crc2.beginPath();
            flowerClasses.crc2.arc(this.position.x + 150, this.position.y + 80, this.size, 0, 2 * Math.PI);
            flowerClasses.crc2.fill();
            flowerClasses.crc2.closePath();
            flowerClasses.crc2.beginPath();
            flowerClasses.crc2.arc(this.position.x + 80, this.position.y + 80, this.size, 0, 2 * Math.PI);
            flowerClasses.crc2.fill();
            flowerClasses.crc2.closePath();
        }
    }
    flowerClasses.Cloud = Cloud;
})(flowerClasses || (flowerClasses = {}));
//# sourceMappingURL=Cloud.js.map