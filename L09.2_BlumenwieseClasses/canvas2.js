"use strict";
var flowerClasses;
(function (flowerClasses) {
    window.addEventListener("load", handleLoad);
    flowerClasses.golden = 0.62;
    let clouds = [];
    let flowers = [];
    let bees = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        flowerClasses.crc2 = canvas.getContext("2d");
        let horizon = flowerClasses.crc2.canvas.height * flowerClasses.golden;
        let posMountains = { x: 0, y: horizon };
        let posRiver = { x: 0, y: 600 * flowerClasses.golden };
        drawBackground();
        drawSun({ x: 250, y: 100 });
        drawMountains(posMountains, 75, 200, "#686a77", "#b7c2d4");
        drawMountains(posMountains, 50, 150, "#686a77", "#c3b1bd");
        drawCloud(2);
        drawTree({ x: 300, y: 600 * flowerClasses.golden });
        drawRiver(posRiver, -20, -50, "#334648", "#6a767a");
        drawFlowers(10);
        drawBee(6);
        let background = flowerClasses.crc2.getImageData(0, 0, 1000, 600);
        drawFlowers(20);
        window.setInterval(update, 20, background);
    }
    function drawRiver(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("River", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        flowerClasses.crc2.save();
        flowerClasses.crc2.translate(_position.x, _position.y);
        flowerClasses.crc2.beginPath();
        flowerClasses.crc2.moveTo(0, 0);
        flowerClasses.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            flowerClasses.crc2.lineTo(x, y);
        } while (x < flowerClasses.crc2.canvas.width);
        flowerClasses.crc2.lineTo(x, 0);
        flowerClasses.crc2.closePath();
        let gradient = flowerClasses.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        flowerClasses.crc2.fillStyle = gradient;
        flowerClasses.crc2.fill();
        flowerClasses.crc2.restore();
    }
    function drawFlowers(_nFlower) {
        for (let i = 0; i < _nFlower; i++) {
            let flower = new flowerClasses.Flower();
            flowers.push(flower);
        }
    }
    function drawTree(_position) {
        //first Tree
        //Trunk
        flowerClasses.crc2.save();
        flowerClasses.crc2.beginPath();
        flowerClasses.crc2.rect(_position.x, _position.y, 20, -70);
        flowerClasses.crc2.fillStyle = "#54372a";
        flowerClasses.crc2.fill();
        //Treetop
        flowerClasses.crc2.beginPath();
        flowerClasses.crc2.moveTo(250, 305);
        flowerClasses.crc2.lineTo(370, 305);
        flowerClasses.crc2.lineTo(310, 200);
        flowerClasses.crc2.moveTo(260, 250);
        flowerClasses.crc2.lineTo(360, 250);
        flowerClasses.crc2.lineTo(310, 155);
        flowerClasses.crc2.fillStyle = "#293730";
        flowerClasses.crc2.fill();
        flowerClasses.crc2.closePath();
        flowerClasses.crc2.restore();
        //second Tree
        //trunk
        flowerClasses.crc2.save();
        flowerClasses.crc2.beginPath();
        flowerClasses.crc2.rect(_position.x + 210, _position.y, 30, -70);
        flowerClasses.crc2.fillStyle = "#54372a";
        flowerClasses.crc2.fill();
        flowerClasses.crc2.closePath();
        //Treetop
        flowerClasses.crc2.fillStyle = "#485f34";
        flowerClasses.crc2.beginPath();
        flowerClasses.crc2.arc(_position.x + 210, _position.y - 100, 45, 0, 2 * Math.PI);
        flowerClasses.crc2.fill();
        flowerClasses.crc2.closePath();
        flowerClasses.crc2.beginPath();
        flowerClasses.crc2.arc(_position.x + 210, _position.y - 150, 40, 0, 2 * Math.PI);
        flowerClasses.crc2.fill();
        flowerClasses.crc2.closePath();
        flowerClasses.crc2.beginPath();
        flowerClasses.crc2.arc(_position.x + 250, _position.y - 160, 40, 0, 2 * Math.PI);
        flowerClasses.crc2.fill();
        flowerClasses.crc2.closePath();
        flowerClasses.crc2.beginPath();
        flowerClasses.crc2.arc(_position.x + 220, _position.y - 200, 50, 0, 2 * Math.PI);
        flowerClasses.crc2.fill();
        flowerClasses.crc2.closePath();
        flowerClasses.crc2.beginPath();
        flowerClasses.crc2.arc(_position.x + 270, _position.y - 105, 30, 0, 2 * Math.PI);
        flowerClasses.crc2.fill();
        flowerClasses.crc2.closePath();
        flowerClasses.crc2.beginPath();
        flowerClasses.crc2.arc(_position.x + 200, _position.y - 160, 50, 0, 2 * Math.PI);
        flowerClasses.crc2.fill();
        flowerClasses.crc2.closePath();
    }
    function drawBackground() {
        console.log("Background");
        let gradient = flowerClasses.crc2.createLinearGradient(0, 0, 0, flowerClasses.crc2.canvas.height);
        gradient.addColorStop(0, "#fabb7c");
        gradient.addColorStop(flowerClasses.golden, "#ac6d7e");
        gradient.addColorStop(1, "#5a6343");
        flowerClasses.crc2.fillStyle = gradient;
        flowerClasses.crc2.fillRect(0, 0, flowerClasses.crc2.canvas.width, flowerClasses.crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 50;
        let r2 = 200;
        let gradient = flowerClasses.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        flowerClasses.crc2.save();
        flowerClasses.crc2.translate(_position.x, _position.y);
        flowerClasses.crc2.fillStyle = gradient;
        flowerClasses.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        flowerClasses.crc2.fill();
        flowerClasses.crc2.restore();
    }
    function drawCloud(_nCloud) {
        for (let i = 0; i < _nCloud; i++) {
            let cloud = new flowerClasses.Cloud();
            clouds.push(cloud);
        }
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        flowerClasses.crc2.save();
        flowerClasses.crc2.translate(_position.x, _position.y);
        flowerClasses.crc2.beginPath();
        flowerClasses.crc2.moveTo(0, 0);
        flowerClasses.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            flowerClasses.crc2.lineTo(x, y);
        } while (x < flowerClasses.crc2.canvas.width);
        flowerClasses.crc2.lineTo(x, 0);
        flowerClasses.crc2.closePath();
        let gradient = flowerClasses.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        flowerClasses.crc2.fillStyle = gradient;
        flowerClasses.crc2.fill();
        flowerClasses.crc2.restore();
    }
    function drawBee(_nBee) {
        for (let i = 0; i < _nBee; i++) {
            let bee = new flowerClasses.Bee();
            bees.push(bee);
        }
    }
    function update(_background) {
        // console.log("updated");
        flowerClasses.crc2.putImageData(_background, 0, 0);
        for (let cloud of clouds) {
            cloud.move(1);
            cloud.draw();
        }
        for (let flower of flowers) {
            flower.move(1);
            flower.draw();
        }
        for (let bee of bees) {
            bee.move(1);
            bee.draw();
        }
    }
})(flowerClasses || (flowerClasses = {}));
//# sourceMappingURL=canvas2.js.map