namespace Boxes {
    window.onload = function (): void {
        let n: number = 5;
        let color: string;
        let x: number = 0;
        let y: number = 0;
        for (let i: number = 0; i < n; i++) {
            y += (i == 2) ? 20 : 50; //if i =2 --> y+20  if not y+ 50
            x = (x + 170) % 400; //how often do 170 fit in 400? 3 Times = 340 R 60
            switch (i) { //wich number does i actually have?
                case 0:
                    color = "#ff0000";
                    break;
                case 1:
                case 4:
                    color = "#00ff00";
                    break;
                case 3:
                    continue;
                default:
                    color = "#0000ff";
            }
            
            for (let size of ["big", "medium", "small"]) {
                createBox(color, x, y, size);
                if (i == 4)
                    break;
            }
        }
    

        function createBox(_color: string, _x: number, _y: number, _size: string): void {
            let div: HTMLDivElement = document.createElement("div");
            document.body.appendChild(div); //css classes in css dokument, appends the right _size
            div.classList.add(_size);
            div.style.backgroundColor = _color;
            div.style.left = _x + "px";
            div.style.top = _y + "px";
        }
    };

}