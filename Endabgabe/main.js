"use strict";
// Zusammen mit Julia Käppeler & Karen Josten erarbeitet
var Soccer;
(function (Soccer) {
    window.addEventListener("load", handleLoad);
    let moveables = [];
    let player = [];
    let form;
    let startButton;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        Soccer.crc2 = canvas.getContext("2d");
        drawSoccerField();
        let soccerField = Soccer.crc2.getImageData(0, 0, 1000, 600);
        createBall(1);
        createReferee(1);
        createLinesman(1);
        form = document.querySelector("form");
        form.addEventListener("change", handleChange);
        startButton = document.querySelector("#startButton");
        startButton.addEventListener("click", createPlayer);
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
            if (i <= 10) {
                let firstTeam = new Soccer.Player();
                //firstTeam.colorTeamOne = "blue";
                firstTeam.colorTeamOne = player[0];
                // firstTeam.precisionMax = player[4] + "px";
                // firstTeam.precisionMin = player[5] + "px";
                moveables.push(firstTeam);
            }
            else {
                let secondTeam = new Soccer.Player();
                //secondTeam.colorTeamTwo = "red";
                secondTeam.colorTeamTwo = player[1];
                // secondTeam.precisionMax = player[4] + "px";
                // secondTeam.precisionMin = player[5] + "px";
                // secondTeam.position.x = 500; 
                // secondTeam.position.y = 100;
                // secondTeam.velocity.x = Math.random();
                moveables.push(secondTeam);
            }
        }
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
    function createBall(nBall) {
        for (let i = 0; i < nBall; i++) {
            let ball = new Soccer.Ball();
            moveables.push(ball);
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
        for (let moveable of moveables) {
            moveable.draw();
            moveable.move(1);
        }
    }
})(Soccer || (Soccer = {}));
//# sourceMappingURL=main.js.map