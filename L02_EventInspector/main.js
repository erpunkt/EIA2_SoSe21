"use strict";
var EventInsp;
(function (EventInsp) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let htmlBody = document.querySelector("body"); //only one body
        htmlBody.addEventListener("click", logInfo);
        htmlBody.addEventListener("keyup", logInfo);
        let htmlDiv = document.querySelectorAll("div"); //querySelectorAll -> Array -> for-Schleife
        for (let i = 0; i < htmlDiv.length; i++) {
            htmlDiv[i].addEventListener("click", logInfo);
            htmlDiv[i].addEventListener("keyup", logInfo);
        }
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        let htmlSpan = document.querySelector("span");
        let target = _event.target;
        let left = _event.clientX + 15;
        let top = _event.clientY + 15;
        htmlSpan.style.top = top + "px";
        htmlSpan.style.left = left + "px";
        htmlSpan.innerHTML = ""; //Span will be cleared
        htmlSpan.innerHTML = " x " + top + " y " + left + " target " + target;
    }
    function logInfo(_event) {
        console.log("Type: " + _event.type);
        console.log("Target: " + _event.target);
        console.log("Current Target: " + _event.currentTarget);
        console.log(_event);
    }
    //_event.bubbles
})(EventInsp || (EventInsp = {}));
//# sourceMappingURL=main.js.map