"use strict";
var flowerCanvas;
(function (flowerCanvas) {
    window.addEventListener("load", handleLoad);
    let crc2; //crc2 = CanvasRenderingContext2D
    let golden = 0.62;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let horizon = crc2.canvas.height * golden;
        let posMountains = { x: 0, y: horizon };
        let posRiver = { x: 0, y: 600 * golden };
        drawBackground();
        drawSun({ x: 250, y: 100 });
        drawMountains(posMountains, 75, 200, "#686a77", "#b7c2d4");
        drawMountains(posMountains, 50, 150, "#686a77", "#c3b1bd");
        drawCloud({ x: 550, y: 220 }, { x: 300, y: 100 });
        drawTree({ x: 300, y: 600 * golden });
        drawRiver(posRiver, -20, -50, "#334648", "#6a767a");
        drawFlowers({ x: 300, y: 380 });
        drawBee({ x: 200, y: 200 });
    }
    function drawRiver(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("River", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawFlowers(_position) {
        //kreis und kreise dran
        //tulpe: kreis + linien
        //Gänseblume
        //Sonnenblume
        //rose großer kreis und darauf kleinere
        for (let i = 0; i < 10; i++) {
            let randomX = 300 * Math.random();
            let randomY = 100 * Math.random();
            //Sunflower
            //Stem
            crc2.beginPath();
            crc2.rect(_position.x + randomX, _position.y, 2, 50);
            crc2.fillStyle = "green";
            crc2.fill();
            //Leaf
            crc2.beginPath();
            crc2.arc(_position.x + randomX, _position.y + 30, 10, 0, 0.5 * Math.PI);
            crc2.fillStyle = "green";
            crc2.fill();
            crc2.closePath();
            //Petals
            crc2.beginPath();
            crc2.arc(_position.x + 10 + randomX, _position.y, 10, 0, 2 * Math.PI);
            crc2.arc(_position.x + randomX, _position.y + 10, 10, 0, 2 * Math.PI);
            crc2.arc(_position.x - 10 + randomX, _position.y, 10, 0, 2 * Math.PI);
            crc2.arc(_position.x + randomX, _position.y - 10, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "yellow";
            crc2.fill();
            crc2.closePath();
            //Seeds
            crc2.beginPath();
            crc2.arc(_position.x + randomX, _position.y, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "brown";
            crc2.fill();
            crc2.closePath();
            //Daisys
            //Stem
            crc2.beginPath();
            crc2.rect(_position.x + randomX * 2, _position.y + 8 + randomY, 2, 30);
            crc2.fillStyle = "green";
            crc2.fill();
            //Leaf
            crc2.beginPath();
            crc2.arc(_position.x + 2 + randomX * 2, _position.y + 13 + randomY, 5, 0, 0.5 * Math.PI);
            crc2.fillStyle = "green";
            crc2.fill();
            crc2.closePath();
            //Petals
            crc2.beginPath();
            crc2.arc(_position.x + 5 + randomX * 2, _position.y + randomY, 5, 0, 2 * Math.PI);
            crc2.arc(_position.x + randomX * 2, _position.y + 5 + randomY, 5, 0, 2 * Math.PI);
            crc2.arc(_position.x - 5 + randomX * 2, _position.y + randomY, 5, 0, 2 * Math.PI);
            crc2.arc(_position.x + randomX * 2, _position.y - 5 + randomY, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();
            //Blossoms
            crc2.beginPath();
            crc2.arc(_position.x + randomX * 2, _position.y + randomY, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "yellow";
            crc2.fill();
            crc2.closePath();
            //Roses
            //Stem
            crc2.beginPath();
            crc2.rect(_position.x + randomX * 3, _position.y + 10 + randomY, 2, 20);
            crc2.fillStyle = "green";
            crc2.fill();
            //Leaf
            crc2.beginPath();
            crc2.arc(_position.x + 2 + randomX * 3, _position.y + 10 + randomY, 8, 0, 0.5 * Math.PI);
            crc2.fillStyle = "green";
            crc2.fill();
            crc2.closePath();
            //Petal
            crc2.beginPath();
            crc2.arc(_position.x + 1 + randomX * 3, _position.y + 5 + randomY, 7, 0, 1 * Math.PI);
            crc2.fillStyle = "red";
            crc2.fill();
            crc2.closePath();
        }
    }
    function drawTree(_position) {
        //first Tree
        //Trunk
        crc2.save();
        crc2.beginPath();
        crc2.rect(_position.x, _position.y, 20, -70);
        crc2.fillStyle = "#54372a";
        crc2.fill();
        //Treetop
        crc2.beginPath();
        crc2.moveTo(250, 305);
        crc2.lineTo(370, 305);
        crc2.lineTo(310, 200);
        crc2.moveTo(260, 250);
        crc2.lineTo(360, 250);
        crc2.lineTo(310, 155);
        crc2.fillStyle = "#293730";
        crc2.fill();
        crc2.closePath();
        crc2.restore();
        //second Tree
        //trunk
        crc2.save();
        crc2.beginPath();
        crc2.rect(_position.x + 210, _position.y, 30, -70);
        crc2.fillStyle = "#54372a";
        crc2.fill();
        crc2.closePath();
        //Treetop
        crc2.fillStyle = "#485f34";
        crc2.beginPath();
        crc2.arc(_position.x + 210, _position.y - 100, 45, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_position.x + 210, _position.y - 150, 40, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_position.x + 250, _position.y - 160, 40, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_position.x + 220, _position.y - 200, 50, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_position.x + 270, _position.y - 105, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_position.x + 200, _position.y - 160, 50, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#fabb7c");
        gradient.addColorStop(golden, "#ac6d7e");
        gradient.addColorStop(1, "#5a6343");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 50;
        let r2 = 200;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 20;
        let radiusParticle = 100;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawBee(_position) {
        for (let i = 0; i < 1; i++) {
            let randomX = 300 * Math.random();
            //Seeds
            crc2.beginPath();
            crc2.ellipse(_position.x + randomX, _position.y, 10, 8, 10, 10, 1 * Math.PI);
            crc2.fillStyle = "#FFA81E";
            crc2.fill();
            crc2.closePath();
            //Wing
            crc2.beginPath();
            crc2.arc(_position.x + 3 + randomX, _position.y - 7, 10, 0, 0.7 * Math.PI);
            crc2.fillStyle = "lightblue";
            crc2.fill();
            crc2.closePath();
            //eye
            crc2.beginPath();
            crc2.arc(_position.x - 4 + randomX, _position.y - 5, 1, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();
        }
    }
})(flowerCanvas || (flowerCanvas = {}));
//# sourceMappingURL=canvas2.js.map