"use strict";
var Soccer;
(function (Soccer) {
    class Moveable {
        position;
        startPosition;
        color;
        velocity;
        constructor(_position, _startPosition) {
            let x = 1000 * Math.random();
            let y = 600 * Math.random();
            this.position = new Soccer.Vector(x, y);
            this.startPosition = new Soccer.Vector(x, y);
        }
        move(_timeslice, _positionBall) {
            this.position.add(this.velocity);
            //mit Kollision
            if (this.position.x + 10 > 1000 || this.position.x - 5 < 0) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.y + 10 > 600 || this.position.y - 5 < 0) {
                this.velocity.y = -this.velocity.y;
            }
        }
        // public moveToBall(_positionBall: Vector): void {
        //   //
        // }
        draw() {
            //Test
        }
    }
    Soccer.Moveable = Moveable;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=Moveable.js.map