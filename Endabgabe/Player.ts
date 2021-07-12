
namespace Soccer {
    export class Player extends Moveable { 
    

    
    public colorTeamOne: string;
    public colorTeamTwo: string;
    public precisionMin: number;
    public precisionMax: number;
    public radius: number;
    protected position: Vector;
    protected velocity: Vector;
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

public move(_timeslice: number): void {
    this.position.add(this.velocity);
    
    //mit Kollision
    if (this.position.x + 10 > 1000 || this.position.x - 5 < 0) {
    this.velocity.x = -this.velocity.x;
    }
    if (this.position.y + 10 > 600 || this.position.y - 5 < 0) {
    this.velocity.y = -this.velocity.y;
    }
    }


public draw(): void { 
    crc2.beginPath();
    crc2.arc(this.position.x, this.position.y, 6, 0, 2 * Math.PI);
    crc2.fillStyle = this.colorTeamOne;
    crc2.fill();
    crc2.closePath(); 

    crc2.beginPath();
    crc2.arc(this.position.x, this.position.y, 6, 0, 2 * Math.PI);
    crc2.fillStyle = this.colorTeamTwo;
    crc2.fill();
    crc2.closePath(); 
} 
}
}