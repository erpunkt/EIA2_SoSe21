namespace EventInsp {
    window.addEventListener("load", handleLoad);
    

    function handleLoad(): void {
        let htmlBody: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body"); //only one body
        htmlBody.addEventListener("click", logInfo);
        htmlBody.addEventListener("keyup", logInfo);

        let htmlDiv: NodeListOf<HTMLDivElement> = document.querySelectorAll("div"); //querySelectorAll -> Array -> for-Schleife
        for (let i: number = 0; i < htmlDiv.length; i++) {
           htmlDiv[i].addEventListener("click", logInfo);
           htmlDiv[i].addEventListener("keyup", logInfo);
       }

        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);

    }

    function setInfoBox(_event: MouseEvent): void {
        let htmlSpan: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span");
        let target: HTMLElement = <HTMLElement>_event.target;

        let left: number = _event.clientX + 15;
        let top: number = _event.clientY + 15;

        htmlSpan.style.top = top + "px";
        htmlSpan.style.left = left + "px";

        htmlSpan.innerHTML = ""; //Span will be cleared
        htmlSpan.innerHTML = " x " + top + " y " + left + " target " + target;
    }

    function logInfo(_event: Event): void {
    console.log("Type: " + _event.type);
    console.log("Target: " + _event.target);
    console.log ("Current Target: " + _event.currentTarget);
    console.log(_event);
}

//_event.bubbles
    
}