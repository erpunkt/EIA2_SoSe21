namespace Soccer {

  export abstract class Moveable {
    public position: Vector;
    public startPosition: Vector;
    protected color: string;

    protected velocity: Vector;

    constructor(_position?: Vector, _startPosition?: Vector) {

      let x: number = 1000 * Math.random();
      let y: number = 600 * Math.random();

      this.position = new Vector(x, y);
      this.startPosition = new Vector(x, y);
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

    public moveToBall(_positionBall: Vector): void {
      //
    }

    public draw(): void {
      //Test
    }
  }
}