namespace flower11 {

    export class Rose extends Flower {
 
        protected position: Vector;
        protected velocity: Vector;
       
        
        constructor(_position?: Vector) {
            super(_position);
            let x: number = 300 * Math.random();
            let y: number = 100 * golden * Math.random() + 600 * golden;
           
    
            if (_position)
            this.position = _position;
            else
            this.position = new Vector (x, y); 
        }


        public draw(): void {

       //Roses
        //Stem
        crc2.beginPath();
        crc2.rect(this.position.x * 3, this.position.y + 10, 2, 20);
        crc2.fillStyle = "green";
        crc2.fill();
    
    //Leaf
        crc2.beginPath();
        crc2.arc(this.position.x * 3 + 2 , this.position.y + 10, 8, 0, 0.5 * Math.PI);
        crc2.fillStyle = "green"; 
        crc2.fill();
        crc2.closePath();
    
    //Petal
        crc2.beginPath();
        crc2.arc(this.position.x * 3 + 1 , this.position.y + 5, 7, 0, 1 * Math.PI);
        crc2.fillStyle = "red";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.fillStyle = "lightblue";
        crc2.fillRect(this.position.x *  3 + 6  , this.position.y , 8 , 0 - this.nectarLiter);
        crc2.closePath();

        }


    }
}