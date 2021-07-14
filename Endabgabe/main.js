"use strict";
// Zusammen mit Julia Käppeler & Karen Josten erarbeitet
var Soccer;
(function (Soccer) {
    let ActionPl;
    (function (ActionPl) {
        ActionPl[ActionPl["GOTO_BALL"] = 0] = "GOTO_BALL";
        ActionPl[ActionPl["KICK_BALL"] = 1] = "KICK_BALL";
        ActionPl[ActionPl["CHANGE_PLAYER"] = 2] = "CHANGE_PLAYER";
        ActionPl[ActionPl["FLYING_BALL"] = 3] = "FLYING_BALL";
    })(ActionPl = Soccer.ActionPl || (Soccer.ActionPl = {}));
    window.addEventListener("load", handleLoad);
    let moveables = [];
    let player = [];
    let form;
    let startButton;
    let ball;
    let timeOut = false; //andere benennung
    Soccer.playerAction = ActionPl.GOTO_BALL;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        Soccer.crc2 = canvas.getContext("2d");
        drawSoccerField();
        let soccerField = Soccer.crc2.getImageData(0, 0, 1000, 600);
        createReferee(1);
        createLinesman(1);
        ball = new Soccer.Ball();
        moveables.push(ball);
        form = document.querySelector("form");
        form.addEventListener("change", handleChange);
        startButton = document.querySelector("#startButton");
        startButton.addEventListener("click", createPlayer);
        canvas.addEventListener("click", getClickPosition);
        window.setInterval(update, 20, soccerField);
    }
    function handleChange(_event) {
        _event.preventDefault();
        let formData = new FormData(document.forms[0]);
        player = [];
        // console.log(FormData);
        for (let entry of formData) {
            player.push(String(entry[1]));
            // console.log(FormData yerseycolor.value);
        }
    }
    function getClickPosition(_event) {
        let position = new Soccer.Vector(_event.clientX - Soccer.crc2.canvas.offsetLeft, _event.clientY - Soccer.crc2.canvas.offsetTop);
        ball.target = position;
        Soccer.playerAction = ActionPl.FLYING_BALL;
    }
    // function createPlayer(nPlayer: number): void {
    //     for (let i: number = 0; i < nPlayer; i++) {
    //         let player: Player = new Player(); 
    //         moveables.push(player); 
    //     }
    // }
    function createPlayer() {
        let element = document.getElementById("startButton");
        element.disabled = true;
        for (let i = 0; i < 22; i++) {
            //first Player Team one
            if (i == 0) {
                let player1Team1 = new Soccer.Player();
                player1Team1.colorTeamOne = player[0];
                player1Team1.position.x = 90;
                player1Team1.position.y = 90;
                player1Team1.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
                player1Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player1Team1);
            }
            if (i == 1) {
                let player2Team2 = new Soccer.Player();
                player2Team2.colorTeamOne = player[0];
                player2Team2.position.x = 150;
                player2Team2.position.y = 150;
                player2Team2.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
                player2Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player2Team2);
            }
            if (i == 2) {
                let player3Team1 = new Soccer.Player();
                player3Team1.colorTeamOne = player[0];
                player3Team1.position.x = 210;
                player3Team1.position.y = 210;
                player3Team1.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
                player3Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player3Team1);
            }
            if (i == 3) {
                let player4Team1 = new Soccer.Player();
                player4Team1.colorTeamOne = player[0];
                player4Team1.position.x = 270;
                player4Team1.position.y = 270;
                player4Team1.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
                player4Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player4Team1);
            }
            if (i == 4) {
                let player5Team1 = new Soccer.Player();
                player5Team1.colorTeamOne = player[0];
                player5Team1.position.x = 330;
                player5Team1.position.y = 330;
                player5Team1.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
                player5Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player5Team1);
            }
            if (i == 5) {
                let player6Team1 = new Soccer.Player();
                player6Team1.colorTeamOne = player[0];
                player6Team1.position.x = 330;
                player6Team1.position.y = 390;
                player6Team1.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
                player6Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player6Team1);
            }
            if (i == 6) {
                let player7Team1 = new Soccer.Player();
                player7Team1.colorTeamOne = player[0];
                player7Team1.position.x = 270;
                player7Team1.position.y = 450;
                player7Team1.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
                player7Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player7Team1);
            }
            if (i == 7) {
                let player8Team1 = new Soccer.Player();
                player8Team1.colorTeamOne = player[0];
                player8Team1.position.x = 210;
                player8Team1.position.y = 510;
                player8Team1.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
                player8Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player8Team1);
            }
            if (i == 8) {
                let player9Team1 = new Soccer.Player();
                player9Team1.colorTeamOne = player[0];
                player9Team1.position.x = 150;
                player9Team1.position.y = 570;
                player9Team1.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
                player9Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player9Team1);
            }
            if (i == 9) {
                let player10Team1 = new Soccer.Player();
                player10Team1.colorTeamOne = player[0];
                player10Team1.position.x = 200;
                player10Team1.position.y = 200;
                player10Team1.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
                player10Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player10Team1);
            }
            if (i == 10) {
                let player11Team1 = new Soccer.Player();
                player11Team1.colorTeamOne = player[0];
                player11Team1.position.x = 320;
                player11Team1.position.y = 320;
                player11Team1.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
                player11Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player11Team1);
            }
            if (i == 11) {
                let player1Team2 = new Soccer.Player();
                player1Team2.colorTeamTwo = player[1];
                player1Team2.position.x = 980;
                player1Team2.position.y = 90;
                player1Team2.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
                player1Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player1Team2);
            }
            if (i == 12) {
                let player2Team2 = new Soccer.Player();
                player2Team2.colorTeamTwo = player[1];
                player2Team2.position.x = 930;
                player2Team2.position.y = 150;
                player2Team2.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
                player2Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player2Team2);
            }
            if (i == 13) {
                let player3Team2 = new Soccer.Player();
                player3Team2.colorTeamTwo = player[1];
                player3Team2.position.x = 850;
                player3Team2.position.y = 230;
                player3Team2.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
                player3Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player3Team2);
            }
            if (i == 14) {
                let player4Team2 = new Soccer.Player();
                player4Team2.colorTeamTwo = player[1];
                player4Team2.position.x = 810;
                player4Team2.position.y = 290;
                player4Team2.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
                player4Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player4Team2);
            }
            if (i == 15) {
                let player5Team2 = new Soccer.Player();
                player5Team2.colorTeamTwo = player[1];
                player5Team2.position.x = 770;
                player5Team2.position.y = 350;
                player5Team2.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
                player5Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player5Team2);
            }
            if (i == 16) {
                let player6Team2 = new Soccer.Player();
                player6Team2.colorTeamTwo = player[1];
                player6Team2.position.x = 710;
                player6Team2.position.y = 410;
                player6Team2.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
                player6Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player6Team2);
            }
            if (i == 17) {
                let player7Team2 = new Soccer.Player();
                player7Team2.colorTeamTwo = player[1];
                player7Team2.position.x = 660;
                player7Team2.position.y = 400;
                player7Team2.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
                player7Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player7Team2);
            }
            if (i == 18) {
                let player8Team2 = new Soccer.Player();
                player8Team2.colorTeamTwo = player[1];
                player8Team2.position.x = 660;
                player8Team2.position.y = 300;
                player8Team2.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
                player8Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player8Team2);
            }
            if (i == 19) {
                let player9Team2 = new Soccer.Player();
                player9Team2.colorTeamTwo = player[1];
                player9Team2.position.x = 660;
                player9Team2.position.y = 90;
                player9Team2.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
                player9Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player9Team2);
            }
            if (i == 20) {
                let player10Team2 = new Soccer.Player();
                player10Team2.colorTeamTwo = player[1];
                player10Team2.position.x = 550;
                player10Team2.position.y = 100;
                player10Team2.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
                player10Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player10Team2);
            }
            if (i == 21) {
                let player11Team2 = new Soccer.Player();
                player11Team2.colorTeamOne = player[1];
                player11Team2.position.x = 500;
                player11Team2.position.y = 230;
                player11Team2.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
                player11Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player11Team2);
            }
        }
    }
    function getRandomVelocity(_min, _max) {
        let velocity = _max - _min;
        let random = Math.random();
        let multiplied = random * velocity;
        let floored = Math.floor(multiplied);
        let answer = floored + _min;
        return answer;
    }
    function getRandomPrecision(_min, _max) {
        let precision = _max - _min;
        let random = Math.random();
        let multiplied = random * precision;
        let floored = Math.floor(multiplied);
        let answer = floored + _min;
        return answer;
    }
    function createLinesman(_nLinesman) {
        for (let i = 0; i < _nLinesman; i++) {
            let firstLinesman = new Soccer.Linesman();
            firstLinesman.position.x = 900 * Math.random(); // setzt position.x von Linesman
            firstLinesman.position.y = 7;
            firstLinesman.velocity.x = Math.random();
            firstLinesman.velocity.y = 0;
            moveables.push(firstLinesman); //Werte des ersten Linienrichters in das Array pushen
            let secondLinesman = new Soccer.Linesman();
            moveables.push(secondLinesman);
        }
    }
    function createReferee(nReferee) {
        for (let i = 0; i < nReferee; i++) {
            let referee = new Soccer.Referee();
            moveables.push(referee);
        }
    }
    function drawSoccerField() {
        //Grasfield
        Soccer.crc2.beginPath();
        Soccer.crc2.fillStyle = "lightgreen";
        Soccer.crc2.fillRect(0, 0, Soccer.crc2.canvas.width, Soccer.crc2.canvas.height);
        Soccer.crc2.closePath();
        //Middleline
        Soccer.crc2.beginPath();
        Soccer.crc2.moveTo(Soccer.crc2.canvas.width / 2, 0);
        Soccer.crc2.lineTo(Soccer.crc2.canvas.width / 2, 600);
        Soccer.crc2.strokeStyle = "white";
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
        //Middlecircle
        Soccer.crc2.beginPath();
        Soccer.crc2.arc(Soccer.crc2.canvas.width / 2, Soccer.crc2.canvas.height / 2, 100, 0, 2 * Math.PI);
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
        //Dot
        Soccer.crc2.beginPath();
        Soccer.crc2.arc(Soccer.crc2.canvas.width / 2, Soccer.crc2.canvas.height / 2, 5, 0, 2 * Math.PI);
        Soccer.crc2.fillStyle = "white";
        Soccer.crc2.fill();
        Soccer.crc2.closePath();
        //litte Gate right
        Soccer.crc2.beginPath();
        Soccer.crc2.moveTo(Soccer.crc2.canvas.width, Soccer.crc2.canvas.height / 2 - 50);
        Soccer.crc2.lineTo(Soccer.crc2.canvas.width - 50, Soccer.crc2.canvas.height / 2 - 50);
        Soccer.crc2.lineTo(Soccer.crc2.canvas.width - 50, Soccer.crc2.canvas.height / 2 + 50);
        Soccer.crc2.lineTo(Soccer.crc2.canvas.width, Soccer.crc2.canvas.height / 2 + 50);
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
        //big Gate right
        Soccer.crc2.beginPath();
        Soccer.crc2.moveTo(Soccer.crc2.canvas.width, Soccer.crc2.canvas.height / 2 - 150);
        Soccer.crc2.lineTo(Soccer.crc2.canvas.width - 150, Soccer.crc2.canvas.height / 2 - 150);
        Soccer.crc2.lineTo(Soccer.crc2.canvas.width - 150, Soccer.crc2.canvas.height / 2 + 150);
        Soccer.crc2.lineTo(Soccer.crc2.canvas.width, Soccer.crc2.canvas.height / 2 + 150);
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
        //half circle right
        Soccer.crc2.beginPath();
        Soccer.crc2.arc(870, Soccer.crc2.canvas.height / 2, 60, 1.9, 1.39 * Math.PI);
        Soccer.crc2.strokeStyle = "white";
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
        //litte Gate left
        Soccer.crc2.beginPath();
        Soccer.crc2.moveTo(0, Soccer.crc2.canvas.height / 2 + 50);
        Soccer.crc2.lineTo(50, Soccer.crc2.canvas.height / 2 + 50);
        Soccer.crc2.lineTo(50, Soccer.crc2.canvas.height / 2 - 50);
        Soccer.crc2.lineTo(0, Soccer.crc2.canvas.height / 2 - 50);
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
        //big Gate left
        Soccer.crc2.beginPath();
        Soccer.crc2.moveTo(0, Soccer.crc2.canvas.height / 2 + 150);
        Soccer.crc2.lineTo(150, Soccer.crc2.canvas.height / 2 + 150);
        Soccer.crc2.lineTo(150, Soccer.crc2.canvas.height / 2 - 150);
        Soccer.crc2.lineTo(0, Soccer.crc2.canvas.height / 2 - 150);
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
        //half circle left
        Soccer.crc2.beginPath();
        Soccer.crc2.arc(130, Soccer.crc2.canvas.height / 2, 60, 5.05, 2.39 * Math.PI);
        Soccer.crc2.strokeStyle = "white";
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
    }
    function update(_soccerField) {
        Soccer.crc2.putImageData(_soccerField, 0, 0);
        let posBall = ball.position;
        for (let moveable of moveables) {
            moveable.draw();
        }
        switch (Soccer.playerAction) {
            case ActionPl.GOTO_BALL:
                for (let moveable of moveables) {
                    moveable.draw();
                    moveable.move(1);
                    moveable.moveToBall(posBall);
                }
                break;
            case ActionPl.KICK_BALL:
                break; //damit sich der Ball nicht mehr bewegt
            case ActionPl.CHANGE_PLAYER:
            case ActionPl.FLYING_BALL:
                if (timeOut == false) {
                    setTimeout(handleTimeOut, 1000 / 2);
                    timeOut = true;
                }
                ball.move(1);
        }
    }
    function handleTimeOut() {
        Soccer.playerAction = ActionPl.GOTO_BALL;
        timeOut = false;
    }
})(Soccer || (Soccer = {}));
//# sourceMappingURL=main.js.map