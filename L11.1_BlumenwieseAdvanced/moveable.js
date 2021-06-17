"use strict";
var flower11;
(function (flower11) {
    class Moveable {
        position;
        velocity;
        color;
        size;
        constructor(_position) {
            let x = 1000 * Math.random() * 2;
            let y = 50;
            this.position = new flower11.Vector(x, y);
            //Geschwindigkeit und Richtung
            // let a: number = - Math.random() * 2; //-damit sie nach links "laufen"
            this.velocity = new flower11.Vector(2, 0);
        }
        move(_timeslice) {
            this.position.add(this.velocity);
            if (this.position.x < 0)
                this.position.x += flower11.crc2.canvas.width;
        }
        draw() {
            // console.log("Moveable move");
        }
    }
    flower11.Moveable = Moveable;
})(flower11 || (flower11 = {}));
//# sourceMappingURL=moveable.js.map