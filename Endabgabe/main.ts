// Zusammen mit Julia Käppeler & Karen Josten erarbeitet
namespace Soccer {

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D; //crc2 = CanvasRenderingContext2D
   
    let moveables: Moveable[] = [];
    let player: string [] = [];

    let form: HTMLElement;
    let startButton: HTMLElement;
    
   
       
    function handleLoad(_event: Event): void {
           
           let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
           
           crc2 = canvas.getContext("2d")!;

           drawSoccerField();

           let  soccerField: ImageData = crc2.getImageData(0, 0, 1000, 600 );

           createBall(1);
           createReferee(1);
           createLinesman(1);

           form = <HTMLElement>document.querySelector("form");
           form.addEventListener("change", handleChange);

           startButton = <HTMLElement>document.querySelector("#startButton");
           startButton.addEventListener("click", createPlayer);
           

           window.setInterval(update, 20, soccerField);

    }

    function handleChange(_event: Event): void {
        _event.preventDefault();
        let formData: FormData = new FormData(document.forms[0]);
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

    function createPlayer(): void {
    let element: HTMLInputElement = <HTMLInputElement> document.getElementById("startButton");
    element.disabled = true;
    for (let i: number = 0; i < 22; i++) {
        
        if (i <= 10) {
        let firstTeam: Player = new Player();
        //firstTeam.colorTeamOne = "blue";
        firstTeam.colorTeamOne = player[0];
        // firstTeam.precisionMax = player[4] + "px";
        // firstTeam.precisionMin = player[5] + "px";
        moveables.push(firstTeam);
        }
        
        else {
        let secondTeam: Player = new Player();
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



    function createLinesman(_nLinesman: number): void {
        for (let i: number = 0; i < _nLinesman; i++) {
            let firstLinesman: Linesman = new Linesman();
            firstLinesman.position.x = 900 * Math.random(); // setzt position.x von Linesman
            firstLinesman.position.y = 7;
            firstLinesman.velocity.x = Math.random();
            firstLinesman.velocity.y = 0;
            moveables.push(firstLinesman); //Werte des ersten Linienrichters in das Array pushen

            let secondLinesman: Linesman = new Linesman();
            moveables.push(secondLinesman);
        }
    }

    function createReferee(nReferee: number): void {
        for (let i: number = 0; i < nReferee; i++) {
            let referee: Referee = new Referee(); 
            moveables.push(referee); 
        }
    }


    function createBall(nBall: number): void {
        for (let i: number = 0; i < nBall; i++) {
            let ball: Ball = new Ball(); 
            moveables.push(ball); 
        }
    }


   

    function drawSoccerField(): void {

            //Grasfield
            crc2.beginPath();
            crc2.fillStyle = "lightgreen";
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            crc2.closePath();

            //Middleline
            crc2.beginPath();
            crc2.moveTo(crc2.canvas.width / 2, 0);
            crc2.lineTo(crc2.canvas.width / 2, 600);
            crc2.strokeStyle = "white";
            crc2.stroke();
            crc2.closePath();

            //Middlecircle
            crc2.beginPath();
            crc2.arc(crc2.canvas.width / 2, crc2.canvas.height / 2, 100, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.closePath();

            //Dot
            crc2.beginPath();
            crc2.arc(crc2.canvas.width / 2, crc2.canvas.height / 2, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();

            //litte Gate right
            crc2.beginPath();
            crc2.moveTo(crc2.canvas.width, crc2.canvas.height / 2 - 50);
            crc2.lineTo(crc2.canvas.width - 50, crc2.canvas.height / 2 - 50);
            crc2.lineTo(crc2.canvas.width - 50, crc2.canvas.height / 2 + 50);
            crc2.lineTo(crc2.canvas.width, crc2.canvas.height / 2 + 50);
            crc2.stroke();
            crc2.closePath();

            //big Gate right
            crc2.beginPath();
            crc2.moveTo(crc2.canvas.width, crc2.canvas.height / 2 - 150);
            crc2.lineTo(crc2.canvas.width - 150, crc2.canvas.height / 2 - 150);
            crc2.lineTo(crc2.canvas.width - 150, crc2.canvas.height / 2 + 150);
            crc2.lineTo(crc2.canvas.width, crc2.canvas.height / 2 + 150);
            crc2.stroke();
            crc2.closePath();

            //half circle right
            crc2.beginPath();
            crc2.arc(870, crc2.canvas.height / 2, 60, 1.9, 1.39 * Math.PI);
            crc2.strokeStyle = "white";
            crc2.stroke();
            crc2.closePath();




            //litte Gate left
            crc2.beginPath();
            crc2.moveTo(0, crc2.canvas.height / 2 + 50);
            crc2.lineTo(50, crc2.canvas.height / 2 + 50);
            crc2.lineTo(50, crc2.canvas.height / 2 - 50);
            crc2.lineTo(0, crc2.canvas.height / 2 - 50);
            crc2.stroke();
            crc2.closePath();
            

            //big Gate left
            crc2.beginPath();
            crc2.moveTo(0, crc2.canvas.height / 2 + 150);
            crc2.lineTo(150, crc2.canvas.height / 2 + 150);
            crc2.lineTo(150, crc2.canvas.height / 2 - 150);
            crc2.lineTo(0, crc2.canvas.height / 2 - 150);
            crc2.stroke();
            crc2.closePath();
            

            //half circle left
            crc2.beginPath();
            crc2.arc(130 , crc2.canvas.height / 2 , 60, 5.05, 2.39 * Math.PI);
            crc2.strokeStyle = "white";
            crc2.stroke();
            crc2.closePath();
           }


    function update (_soccerField: ImageData): void {
               crc2.putImageData(_soccerField, 0, 0);

               for (let moveable of moveables) {
                    moveable.draw();
                    moveable.move(1);
                    }

    }
}
