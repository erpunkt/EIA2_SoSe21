"use strict";
var memory;
(function (memory) {
    window.addEventListener("load", handleLoad);
    let amountPairs;
    let cardArray = [];
    let cardDetails = [];
    let startButton;
    let divForm;
    let cardField;
    let cards = [
        {
            value: 1,
            open: false
        },
        {
            value: 2,
            open: false
        },
        {
            value: 3,
            open: false
        },
        {
            value: 4,
            open: false
        },
        {
            value: 5,
            open: false
        },
        {
            value: 6,
            open: false
        },
        {
            value: 7,
            open: false
        },
        {
            value: 8,
            open: false
        },
        {
            value: 9,
            open: false
        },
        {
            value: 10,
            open: false
        },
        {
            value: 11,
            open: false
        },
        {
            value: 12,
            open: false
        },
        {
            value: 13,
            open: false
        },
        {
            value: 14,
            open: false
        },
        {
            value: 15,
            open: false
        },
        {
            value: 16,
            open: false
        },
        {
            value: 17,
            open: false
        },
        {
            value: 18,
            open: false
        },
        {
            value: 19,
            open: false
        },
        {
            value: 20,
            open: false
        },
        {
            value: 21,
            open: false
        },
        {
            value: 22,
            open: false
        },
        {
            value: 23,
            open: false
        },
        {
            value: 24,
            open: false
        },
        {
            value: 25,
            open: false
        },
        {
            value: 2,
            open: false
        }
    ];
    //Start Game
    function handleLoad() {
        startButton = document.querySelector("#button");
        startButton.addEventListener("click", displayCards);
        divForm = document.querySelector("#form");
        divForm.addEventListener("change", handleChange);
        cardField = document.querySelector("#memoryField");
    }
    function handleChange(_event) {
        _event.preventDefault();
        let formData = new FormData(document.forms[0]);
        cardDetails = [];
        for (let entry of formData) {
            cardDetails
                .push(String(entry[1]));
            console.log(cardDetails);
        }
    }
    function displayCards() {
        divForm.classList.add("hidden");
        startButton.classList.add("hidden");
        amountPairs = Number(cardDetails[0]);
        for (let i = 0; i < 2; i++) {
            for (let b = 0; b < amountPairs; b++) {
                cardArray.push(cards[b]);
            }
        }
        cardArray.sort(() => 0.5 - Math.random());
        cardField.innerHTML = "";
        document.body.style.background = cardDetails[2];
        document.body.style.fontFamily = cardDetails[5];
        for (let index = 0; index < cardArray.length; index++) {
            let card = document.createElement("div");
            card.style.width = cardDetails[1] + "px";
            card.style.height = cardDetails[1] + "px";
            card.style.background = cardDetails[4];
            card.style.color = cardDetails[3];
            card.innerHTML = "<span>" + cardArray[index] + "</span>";
            cardField.appendChild(card);
            /*         card.addEventListener("click", flipCard); */
            let allSpans = document.querySelectorAll("span");
            allSpans[index].classList.add("visibility");
        }
        /* add(); */
    }
})(memory || (memory = {}));
//# sourceMappingURL=memory.js.map