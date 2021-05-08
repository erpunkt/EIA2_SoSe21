"use strict";
var randomCanvas;
(function (randomCanvas) {
    window.addEventListener("load", handleLoad);
    let crc2; //crc2 = CanvasRenderingContext2D
    let colors = ["#003f5c", "#444e86", "#955196", "#dd5182", "#ff6e54", "#ffa600"]; //Däschner, Christina
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        crc2.strokeRect(0, 0, canvas.width, canvas.height);
        crc2.strokeStyle = "black";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        crc2.fillStyle = "black";
        draw({ x: 50, y: 200 * Math.random() });
        //drawTriangle({ x: 200, y: 300});
    }
    function draw(_position) {
        for (let i = 0; i < 40; i++) {
            let pickColor = Math.floor(Math.random() * Math.floor(6));
            //Circles
            crc2.beginPath();
            crc2.arc(_position.x + 700 * Math.random(), _position.y + 10 + 200 * Math.random(), 10 + 100 * Math.random(), 0, 5 * Math.PI); //halber Kreis mit 1* PI
            crc2.fillStyle = colors[pickColor];
            crc2.fill();
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.closePath();
            //Half Circles
            crc2.beginPath();
            crc2.arc(_position.x + 5 + 500 * Math.random(), _position.y + 10 + 200 * Math.random(), 10 + 100 * Math.random(), 0.5, 1 * Math.PI); //halber Kreis mit 1* PI
            crc2.fillStyle = colors[pickColor];
            crc2.fill();
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.closePath();
            //Rects vertical
            crc2.beginPath();
            crc2.rect(_position.x + 500 * Math.random(), _position.y + 5 + 150 * Math.random(), 10 + 10 * Math.random(), 100 + 10 * Math.random());
            crc2.fillStyle = colors[pickColor];
            crc2.fill();
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.closePath();
            //rects horizontal
            crc2.beginPath();
            crc2.rect(_position.x + 500 * Math.random(), _position.y + 5 + 150 * Math.random(), 100 + 10 * Math.random(), 10 + 10 * Math.random());
            crc2.fillStyle = colors[pickColor];
            crc2.fill();
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.closePath();
            //lines
            crc2.moveTo(800, 600);
            crc2.lineTo(400 + 60 * Math.random(), 50 * Math.random());
            crc2.strokeStyle = colors[pickColor];
            crc2.stroke();
            crc2.moveTo(0, 300);
            crc2.lineTo(400 + 60 * Math.random(), 50 * Math.random());
            crc2.strokeStyle = colors[pickColor];
            crc2.stroke();
        }
    }
    //     function drawTriangle(_position: Vector): void {
    //         crc2.beginPath();
    //         crc2.moveTo(10, 10 );
    //         crc2.lineTo(10, 300 );
    //         crc2.lineTo(310, 300 );
    //         crc2.closePath();
    // }
    //     function drawText(_position: Vector): void {
    //     crc2.beginPath();
    //     crc2.font = "30px Aral";
    //     crc2.fillText("ARTSY", _position.x, _position.y);
    //     crc2.closePath();
    // }
})(randomCanvas || (randomCanvas = {}));
//# sourceMappingURL=canvas.js.map