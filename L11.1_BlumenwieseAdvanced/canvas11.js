"use strict";
var flower11;
(function (flower11) {
    window.addEventListener("load", handleLoad);
    flower11.golden = 0.62;
    let flowers = [];
    let moveables = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        flower11.crc2 = canvas.getContext("2d");
        let horizon = flower11.crc2.canvas.height * flower11.golden;
        let posMountains = { x: 0, y: horizon };
        let posRiver = { x: 0, y: 600 * flower11.golden };
        drawBackground();
        drawSun({ x: 250, y: 100 });
        drawMountains(posMountains, 75, 200, "#686a77", "#b7c2d4");
        drawMountains(posMountains, 50, 150, "#686a77", "#c3b1bd");
        drawTree({ x: 300, y: 600 * flower11.golden });
        drawRiver(posRiver, -20, -50, "#334648", "#6a767a");
        let background = flower11.crc2.getImageData(0, 0, 1000, 600);
        createSunFlower(12);
        createDaisy(10);
        createRose(6);
        createBee(15);
        createCloud(2);
        window.setInterval(update, 20, background);
    }
    function drawRiver(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("River", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        flower11.crc2.save();
        flower11.crc2.translate(_position.x, _position.y);
        flower11.crc2.beginPath();
        flower11.crc2.moveTo(0, 0);
        flower11.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            flower11.crc2.lineTo(x, y);
        } while (x < flower11.crc2.canvas.width);
        flower11.crc2.lineTo(x, 0);
        flower11.crc2.closePath();
        let gradient = flower11.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        flower11.crc2.fillStyle = gradient;
        flower11.crc2.fill();
        flower11.crc2.restore();
    }
    function createSunFlower(_nSunFlower) {
        for (let i = 0; i < _nSunFlower; i++) {
            let sunflower = new flower11.Sunflower();
            flowers.push(sunflower);
        }
    }
    function createDaisy(_nDaisy) {
        for (let i = 0; i < _nDaisy; i++) {
            let daisy = new flower11.Daisy();
            flowers.push(daisy);
        }
    }
    function createRose(_nRose) {
        for (let i = 0; i < _nRose; i++) {
            let rose = new flower11.Rose();
            flowers.push(rose);
        }
    }
    function drawTree(_position) {
        //first Tree
        //Trunk
        flower11.crc2.save();
        flower11.crc2.beginPath();
        flower11.crc2.rect(_position.x, _position.y, 20, -70);
        flower11.crc2.fillStyle = "#54372a";
        flower11.crc2.fill();
        //Treetop
        flower11.crc2.beginPath();
        flower11.crc2.moveTo(250, 305);
        flower11.crc2.lineTo(370, 305);
        flower11.crc2.lineTo(310, 200);
        flower11.crc2.moveTo(260, 250);
        flower11.crc2.lineTo(360, 250);
        flower11.crc2.lineTo(310, 155);
        flower11.crc2.fillStyle = "#293730";
        flower11.crc2.fill();
        flower11.crc2.closePath();
        flower11.crc2.restore();
        //second Tree
        //trunk
        flower11.crc2.save();
        flower11.crc2.beginPath();
        flower11.crc2.rect(_position.x + 210, _position.y, 30, -70);
        flower11.crc2.fillStyle = "#54372a";
        flower11.crc2.fill();
        flower11.crc2.closePath();
        //Treetop
        flower11.crc2.fillStyle = "#485f34";
        flower11.crc2.beginPath();
        flower11.crc2.arc(_position.x + 210, _position.y - 100, 45, 0, 2 * Math.PI);
        flower11.crc2.fill();
        flower11.crc2.closePath();
        flower11.crc2.beginPath();
        flower11.crc2.arc(_position.x + 210, _position.y - 150, 40, 0, 2 * Math.PI);
        flower11.crc2.fill();
        flower11.crc2.closePath();
        flower11.crc2.beginPath();
        flower11.crc2.arc(_position.x + 250, _position.y - 160, 40, 0, 2 * Math.PI);
        flower11.crc2.fill();
        flower11.crc2.closePath();
        flower11.crc2.beginPath();
        flower11.crc2.arc(_position.x + 220, _position.y - 200, 50, 0, 2 * Math.PI);
        flower11.crc2.fill();
        flower11.crc2.closePath();
        flower11.crc2.beginPath();
        flower11.crc2.arc(_position.x + 270, _position.y - 105, 30, 0, 2 * Math.PI);
        flower11.crc2.fill();
        flower11.crc2.closePath();
        flower11.crc2.beginPath();
        flower11.crc2.arc(_position.x + 200, _position.y - 160, 50, 0, 2 * Math.PI);
        flower11.crc2.fill();
        flower11.crc2.closePath();
    }
    function drawBackground() {
        //console.log("Background");
        let gradient = flower11.crc2.createLinearGradient(0, 0, 0, flower11.crc2.canvas.height);
        gradient.addColorStop(0, "#fabb7c");
        gradient.addColorStop(flower11.golden, "#ac6d7e");
        gradient.addColorStop(0.63, "lightgreen");
        gradient.addColorStop(1, "green");
        flower11.crc2.fillStyle = gradient;
        flower11.crc2.fillRect(0, 0, flower11.crc2.canvas.width, flower11.crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 50;
        let r2 = 200;
        let gradient = flower11.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        flower11.crc2.save();
        flower11.crc2.translate(_position.x, _position.y);
        flower11.crc2.fillStyle = gradient;
        flower11.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        flower11.crc2.fill();
        flower11.crc2.restore();
    }
    function createCloud(_nCloud) {
        for (let i = 0; i < _nCloud; i++) {
            let cloud = new flower11.Cloud();
            moveables.push(cloud);
        }
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        flower11.crc2.save();
        flower11.crc2.translate(_position.x, _position.y);
        flower11.crc2.beginPath();
        flower11.crc2.moveTo(0, 0);
        flower11.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            flower11.crc2.lineTo(x, y);
        } while (x < flower11.crc2.canvas.width);
        flower11.crc2.lineTo(x, 0);
        flower11.crc2.closePath();
        let gradient = flower11.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        flower11.crc2.fillStyle = gradient;
        flower11.crc2.fill();
        flower11.crc2.restore();
    }
    function createBee(_nBee) {
        for (let i = 0; i < _nBee; i++) {
            let bee = new flower11.Bee();
            moveables.push(bee);
        }
    }
    function update(_background) {
        // console.log("updated");
        flower11.crc2.putImageData(_background, 0, 0);
        for (let flower of flowers) {
            flower.fillNectar();
            flower.draw();
        }
        for (let moveable of moveables) {
            moveable.draw();
            moveable.move(1 / 50);
        }
    }
})(flower11 || (flower11 = {}));
//# sourceMappingURL=canvas11.js.map