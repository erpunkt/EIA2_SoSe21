// Zusammen mit Julia Käppeler & Karen Josten erarbeitet

namespace Soccer {


export enum ActionPl {
    GOTO_BALL,
    KICK_BALL,
    CHANGE_PLAYER
}


window.addEventListener("load", handleLoad);
export let crc2: CanvasRenderingContext2D; //crc2 = CanvasRenderingContext2D
   
let moveables: Moveable[] = [];
let player: string [] = [];

let form: HTMLElement;
let startButton: HTMLElement;

let ball: Ball;

export let playerAction: ActionPl = ActionPl.GOTO_BALL;
    
   
       
function handleLoad(_event: Event): void {
           
           let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
           
           crc2 = canvas.getContext("2d")!;

           drawSoccerField();

           let  soccerField: ImageData = crc2.getImageData(0, 0, 1000, 600 );

           
           createReferee(1);
           createLinesman(1);

           ball = new Ball();
           moveables.push(ball);

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
        
        //first Player Team one
if ( i == 0) {
    let player1Team1: Player = new Player();
    player1Team1.colorTeamOne = player[0];
    player1Team1.position.x = 90;
    player1Team1.position.y = 90;
    
    player1Team1.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
    player1Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
    moveables.push(player1Team1);
}

if ( i == 1) {
    let player2Team2: Player = new Player();
    player2Team2.colorTeamOne = player[0];
    player2Team2.position.x = 150;
    player2Team2.position.y = 150;

    player2Team2.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
    player2Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));   
    moveables.push(player2Team2); 
}

if ( i == 2) {
    let player3Team1: Player = new Player();
    player3Team1.colorTeamOne = player[0];
    player3Team1.position.x = 210;
    player3Team1.position.y = 210;

    player3Team1.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
    player3Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5])); 
    moveables.push(player3Team1);  
}

if ( i == 3) {
    let player4Team1: Player = new Player();
    player4Team1.colorTeamOne = player[0];
    player4Team1.position.x = 270;
    player4Team1.position.y = 270;
    
    player4Team1.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
    player4Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));  
    moveables.push(player4Team1); 
}

if ( i == 4) {
    let player5Team1: Player = new Player();
    player5Team1.colorTeamOne = player[0];
    player5Team1.position.x = 330;
    player5Team1.position.y = 330;
   
    player5Team1.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
    player5Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));  

    moveables.push(player5Team1); 
}

if ( i == 5) {
    let player6Team1: Player = new Player();
    player6Team1.colorTeamOne = player[0];
    player6Team1.position.x = 330;
    player6Team1.position.y = 390;
    
    player6Team1.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
    player6Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));  

    moveables.push(player6Team1); 
}

if ( i == 6) {
    let player7Team1: Player = new Player();
    player7Team1.colorTeamOne = player[0];
    player7Team1.position.x = 270;
    player7Team1.position.y = 450;

    player7Team1.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
    player7Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));  

    moveables.push(player7Team1); 
}

if ( i == 7) {
    let player8Team1: Player = new Player();
    player8Team1.colorTeamOne = player[0];
    player8Team1.position.x = 210;
    player8Team1.position.y = 510;
    
    player8Team1.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
    player8Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));  

    moveables.push(player8Team1); 
}

if ( i == 8) {
    let player9Team1: Player = new Player();
    player9Team1.colorTeamOne = player[0];
    player9Team1.position.x = 150;
    player9Team1.position.y = 570;
    
    player9Team1.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
    player9Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));  

    moveables.push(player9Team1); 
}

if ( i == 9) {
    let player10Team1: Player = new Player();
    player10Team1.colorTeamOne = player[0];
    player10Team1.position.x = 200;
    player10Team1.position.y = 200;
 
    player10Team1.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
    player10Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));  

    moveables.push(player10Team1); 
}

if ( i == 10) {
    let player11Team1: Player = new Player();
    player11Team1.colorTeamOne = player[0];
    player11Team1.position.x = 320;
    player11Team1.position.y = 320;
   
    player11Team1.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
    player11Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));  

    moveables.push(player11Team1); 
}



if ( i == 11) {
    let player1Team2: Player = new Player();
    player1Team2.colorTeamTwo = player[1];
    player1Team2.position.x = 980;
    player1Team2.position.y = 90;
   
    player1Team2.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
    player1Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));  

    moveables.push(player1Team2); 
}

if ( i == 12) {
    let player2Team2: Player = new Player();
    player2Team2.colorTeamTwo = player[1];
    player2Team2.position.x = 930;
    player2Team2.position.y = 150;
    
    player2Team2.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
    player2Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));  

    moveables.push(player2Team2); 
}

if ( i == 13) {
    let player3Team2: Player = new Player();
    player3Team2.colorTeamTwo = player[1];
    player3Team2.position.x = 850;
    player3Team2.position.y = 230;
 
    player3Team2.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
    player3Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5])); 

    moveables.push(player3Team2); 
}

if ( i == 14) {
    let player4Team2: Player = new Player();
    player4Team2.colorTeamTwo = player[1];
    player4Team2.position.x = 810;
    player4Team2.position.y = 290;
 
    player4Team2.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
    player4Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5])); 

    moveables.push(player4Team2); 
}

if ( i == 15) {
    let player5Team2: Player = new Player();
    player5Team2.colorTeamTwo = player[1];
    player5Team2.position.x = 770;
    player5Team2.position.y = 350;
    
    player5Team2.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
    player5Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5])); 

    moveables.push(player5Team2); 
}

if ( i == 16) {
    let player6Team2: Player = new Player();
    player6Team2.colorTeamTwo = player[1];
    player6Team2.position.x = 710;
    player6Team2.position.y = 410;
  
    player6Team2.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
    player6Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5])); 

    moveables.push(player6Team2); 
}

if ( i == 17) {
    let player7Team2: Player = new Player();
    player7Team2.colorTeamTwo = player[1];
    player7Team2.position.x = 660;
    player7Team2.position.y = 400;
 
    player7Team2.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
    player7Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));

    moveables.push(player7Team2);  
}

if ( i == 18) {
    let player8Team2: Player = new Player();
    player8Team2.colorTeamTwo = player[1];
    player8Team2.position.x = 660;
    player8Team2.position.y = 300;
    
    player8Team2.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
    player8Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5])); 

    moveables.push(player8Team2); 
}

if ( i == 19) {
    let player9Team2: Player = new Player();
    player9Team2.colorTeamTwo = player[1];
    player9Team2.position.x = 660;
    player9Team2.position.y = 90;
    
    player9Team2.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
    player9Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5])); 

    moveables.push(player9Team2); 
}

if ( i == 20) {
    let player10Team2: Player = new Player();
    player10Team2.colorTeamTwo = player[1];
    player10Team2.position.x = 550;
    player10Team2.position.y = 100;
    
    player10Team2.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
    player10Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5])); 

    moveables.push(player10Team2); 
}

if ( i == 21) {
    let player11Team2: Player = new Player();
    player11Team2.colorTeamOne = player[1];
    player11Team2.position.x = 500;
    player11Team2.position.y = 230;
    
    player11Team2.velocity2 = getRandomVelocity(Number(player[2]), Number(player[3]));
    player11Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5])); 

    moveables.push(player11Team2);
}

        }
    }

function getRandomVelocity(_min: number, _max: number): number {
        let velocity: number = _max - _min;
        
        let random: number = Math.random();
        let multiplied: number = random * velocity;
        let floored: number = Math.floor(multiplied);
        
        let answer: number = floored + _min;
        return answer;
        }

function getRandomPrecision(_min: number, _max: number): number {
            let precision: number = _max - _min;
            
            let random: number = Math.random();
            let multiplied: number = random * precision;
            let floored: number = Math.floor(multiplied);
            
            let answer: number = floored + _min;
            return answer;
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
               let posBall: Vector = ball.position;

               for (let moveable of moveables){
                moveable.draw();
                }

               switch (playerAction) {
                   case ActionPl.GOTO_BALL:
                       for (let moveable of moveables) {

                        moveable.draw();
                        moveable.move(1);
                        moveable.moveToBall(posBall);
                       }
                       break;
    
    case ActionPl.KICK_BALL:
    case ActionPl.CHANGE_PLAYER:
}


    }
}
