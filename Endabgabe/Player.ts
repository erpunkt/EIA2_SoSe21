
namespace Soccer {
    export class Player extends Moveable { 
    
    
    public precision: number;
    public colorTeamOne: string;
    public colorTeamTwo: string;
    public radius: number;
    public position: Vector;
    public velocity: Vector;
    public velocity2: number;
    protected distance: number;
    protected angle: number;
    protected jerseynumber: number;
    protected team: number;
    protected changeJerseyNumber: boolean;
    
    constructor(_position?: Vector, _velocity?: Vector, _colorTeamOne?: string, _colorTeamTwo?: string, _precision?: number, _radius?: number, _jerseynumber?: number, _team?: number, _changeJerseyNumber?: boolean ) {
    super(_position);
    let x: number = 1000 * Math.random();
    let y: number = 600 * Math.random();
    let a: number = - Math.random();
    let b: number = 2 * Math.random();
    this.position = new Vector(x, y);


    if (_position) 
    this.position = _position;
    else
    this.position = new Vector(x, y);
    this.velocity = new Vector(a, b);
}

//Größe der Spieler
public draw(): void { 
    crc2.beginPath();
    crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
    crc2.fillStyle = this.colorTeamOne;
    crc2.fill();
    crc2.closePath(); 

    crc2.beginPath();
    crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
    crc2.fillStyle = this.colorTeamTwo;
    crc2.fill();
    crc2.closePath();
    
    // crc2.beginPath();
    // crc2.arc(this.position.x, this.position.y, 100, 0, 2 * Math.PI);
    // crc2.stroke();
    // crc2.closePath();
} 


public moveToBall(_positionBall: Vector): void {
    let positionBall: Vector = _positionBall;
    let posX: number = positionBall.x - this.position.x;
    let posY: number = positionBall.y - this.position.y;
    let radi: number = Math.hypot(posY, posX);
    
    
    if ( radi <= 200) { //60 Pixel ist der Wahrnehmungsradius übers Spielfeld
    
    let position: Vector = new Vector (posX, posY);
    position.scale(this.velocity2 / radi);
    this.position.add(position);

    if (radi <= 30)
    playerAction = ActionPl.KICK_BALL;

//     if (radi >= 200)
//    this.position
   
    }
    }

    public move(_timeslice: number): void {
        // this.position.add(this.velocity);
        
        //mit Kollision
        if (this.position.x + 10 > 1000 || this.position.x - 5 < 0) {
        this.velocity.x = -this.velocity.x;
        }
        if (this.position.y + 10 > 600 || this.position.y - 5 < 0) {
        this.velocity.y = -this.velocity.y;
        }
        }


}
}