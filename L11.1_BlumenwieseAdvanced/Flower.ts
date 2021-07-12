namespace flower11 {

export abstract class Flower {
    protected x: number;
    protected y: number;
    protected position: Vector;
    protected nectarLiter: number;
    protected size: number;
    

    constructor(_position?: Vector ) {

        let x: number = 300 * Math.random();
        let y: number = 100 * golden * Math.random() + 600 * golden;
        this.position = new Vector (x, y);

        this.nectarLiter = 0;

} 

public fillNectar(): void {
    if (this.nectarLiter < 25) {
        this.nectarLiter += 0.2;
        }
    }

public draw(): void {
    // console.log("draw Flowers");
}
}
}