"use strict";
var Soccer;
(function (Soccer) {
    class Player extends Soccer.Moveable {
        precision;
        colorTeamOne;
        colorTeamTwo;
        radius;
        position;
        velocity;
        velocity2;
        distance;
        angle;
        jerseynumber;
        team;
        changeJerseyNumber;
        constructor(_position, _velocity, _colorTeamOne, _colorTeamTwo, _precision, _radius, _jerseynumber, _team, _changeJerseyNumber) {
            super(_position);
            let x = 1000 * Math.random();
            let y = 600 * Math.random();
            let a = -Math.random();
            let b = 2 * Math.random();
            this.position = new Soccer.Vector(x, y);
            if (_position)
                this.position = _position;
            else
                this.position = new Soccer.Vector(x, y);
            this.velocity = new Soccer.Vector(a, b);
        }
        draw() {
            Soccer.crc2.beginPath();
            Soccer.crc2.arc(this.position.x, this.position.y, 6, 0, 2 * Math.PI);
            Soccer.crc2.fillStyle = this.colorTeamOne;
            Soccer.crc2.fill();
            Soccer.crc2.closePath();
            Soccer.crc2.beginPath();
            Soccer.crc2.arc(this.position.x, this.position.y, 6, 0, 2 * Math.PI);
            Soccer.crc2.fillStyle = this.colorTeamTwo;
            Soccer.crc2.fill();
            Soccer.crc2.closePath();
        }
        moveToBall(_positionBall) {
            let positionBall = _positionBall;
            let posX = positionBall.x - this.position.x;
            let posY = positionBall.y - this.position.y;
            let radi = Math.hypot(posY, posX);
            if (radi <= 60) { //60 Pixel ist der Wahrnehmungsradius übers Spielfeld
                let position = new Soccer.Vector(posX, posY);
                position.scale(this.velocity2 / radi);
                this.position.add(position);
                if (radi <= 5)
                    Soccer.playerAction = Soccer.ActionPl.KICK_BALL;
            }
        }
        move(_timeslice) {
            // this.position.add(this.velocity);
            //mit Kollision
            if (this.position.x + 10 > 1000 || this.position.x - 5 < 0) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.y + 10 > 600 || this.position.y - 5 < 0) {
                this.velocity.y = -this.velocity.y;
            }
        }
    }
    Soccer.Player = Player;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=Player.js.map