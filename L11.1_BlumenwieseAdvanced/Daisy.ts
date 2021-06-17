namespace flower11 {


    export class Daisy extends Flower {
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

        draw(): void {
            //Daisys
            //Stem
            crc2.beginPath();
            crc2.rect(this.position.x  * 2 , this.position.y + 8, 2, 30);
            crc2.fillStyle = "green";
            crc2.fill();
            crc2.closePath();
        
            //Leaf
            crc2.beginPath();
            crc2.arc(this.position.x * 2 + 2 , this.position.y + 13, 5, 0, 0.5 * Math.PI);
            crc2.fillStyle = "green"; 
            crc2.fill();
            crc2.closePath();
        
            //Petals
            crc2.beginPath();
            crc2.arc(this.position.x * 2 + 5 , this.position.y, 5, 0, 2 * Math.PI);
            crc2.arc(this.position.x * 2, this.position.y  + 5, 5, 0, 2 * Math.PI);
            crc2.arc(this.position.x * 2 - 5 , this.position.y, 5, 0, 2 * Math.PI);
            crc2.arc(this.position.x * 2, this.position.y - 5 , 5, 0, 2 * Math.PI);
            crc2.fillStyle = "white"; 
            crc2.fill();
            crc2.closePath();
        
            //Blossoms
            crc2.beginPath();
            crc2.arc(this.position.x * 2, this.position.y, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "yellow";
            crc2.fill();
            crc2.closePath();

            //Nectar
            crc2.beginPath();
            crc2.fillStyle = "lightblue"; 
            crc2.fillRect(this.position.x *  2   , this.position.y - 12 , 8 , 0 - this.nectarLiter);
            crc2.closePath();
}

    }
}