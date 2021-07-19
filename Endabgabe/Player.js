"use strict";
var Soccer;
(function (Soccer) {
    class Player extends Soccer.Moveable {
        precision;
        colorTeamOne;
        colorTeamTwo;
        radius;
        position;
        changeJerseyNumber;
        jerseynumber;
        playerOnBall;
        velocity; //Geschwindigkeit Ball
        velocity2; //Geschwindigkeit Spieler
        distance;
        angle;
        team;
        constructor(_position, _startPosition) {
            super(_position, _startPosition);
            let x = 1000 * Math.random();
            let y = 600 * Math.random();
            let a = -Math.random();
            let b = 2 * Math.random();
            this.position = new Soccer.Vector(x, y);
            this.startPosition = new Soccer.Vector(x, y);
            if (_position)
                this.position = _position;
            else
                this.position = new Soccer.Vector(x, y);
            this.velocity = new Soccer.Vector(a, b);
        }
        //Größe der Spieler
        draw() {
            //Team One
            Soccer.crc2.beginPath();
            Soccer.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            Soccer.crc2.fillStyle = this.colorTeamOne;
            Soccer.crc2.fill();
            Soccer.crc2.strokeText(this.jerseynumber, this.position.x, this.position.y + 3, 8);
            Soccer.crc2.textAlign = "center";
            Soccer.crc2.strokeStyle = "white";
            Soccer.crc2.closePath();
            //Team Two
            Soccer.crc2.beginPath();
            Soccer.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            Soccer.crc2.fillStyle = this.colorTeamTwo;
            Soccer.crc2.fill();
            Soccer.crc2.strokeText(this.jerseynumber, this.position.x, this.position.y + 3, 8);
            Soccer.crc2.textAlign = "center";
            Soccer.crc2.strokeStyle = "white";
            Soccer.crc2.closePath();
        }
        move(_timeslice, _positionBall) {
            let positionBall = _positionBall;
            let posX = positionBall.x - this.position.x;
            let posY = positionBall.y - this.position.y;
            let radi = Math.hypot(posY, posX);
            let xdefaultPos = this.startPosition.x;
            let ydefaultPos = this.startPosition.y;
            if (radi <= 200) { //200 Pixel ist der Wahrnehmungsradius übers Spielfeld, Dann bewegt sich der Spieler zum Ball
                let position = new Soccer.Vector(posX, posY);
                position.scale(this.velocity2 / radi);
                this.position.add(position);
                if (radi <= 7) {
                    this.playerOnBall = document.querySelector("#onBall");
                    this.playerOnBall.innerHTML = this.jerseynumber;
                    Soccer.playerAction = Soccer.ActionPl.STOP_GAME;
                }
            }
            if (radi > 200) {
                this.position.set(xdefaultPos, ydefaultPos);
            }
        }
    }
    Soccer.Player = Player;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=Player.js.map