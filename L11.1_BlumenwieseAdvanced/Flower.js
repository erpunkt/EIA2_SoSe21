"use strict";
var flower11;
(function (flower11) {
    class Flower {
        x;
        y;
        position;
        nectarLiter;
        size;
        constructor(_position) {
            let x = 300 * Math.random();
            let y = 100 * flower11.golden * Math.random() + 600 * flower11.golden;
            this.position = new flower11.Vector(x, y);
            this.nectarLiter = 0;
        }
        fillNectar() {
            if (this.nectarLiter < 25) {
                this.nectarLiter += 0.2;
            }
        }
        draw() {
            // console.log("draw Flowers");
        }
    }
    flower11.Flower = Flower;
})(flower11 || (flower11 = {}));
//# sourceMappingURL=Flower.js.map