"use strict";
var flower10;
(function (flower10) {
    class Moveable {
        position;
        velocity;
        color;
        size;
        constructor(_position) {
            let x = 1000 * Math.random() * 2;
            let y = 50;
            this.position = new flower10.Vector(x, y);
            //Geschwindigkeit und Richtung
            // let a: number = - Math.random() * 2; //-damit sie nach links "laufen"
            this.velocity = new flower10.Vector(1, 0);
        }
        move(_timeslice) {
            this.position.add(this.velocity);
            if (this.position.x < 0)
                this.position.x += flower10.crc2.canvas.width;
        }
        draw() {
            // console.log("Moveable move");
        }
    }
    flower10.Moveable = Moveable;
})(flower10 || (flower10 = {}));
//# sourceMappingURL=moveable.js.map