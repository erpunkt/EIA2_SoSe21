namespace flower11 {

    export class Sunflower extends Flower {
        protected position: Vector;
        protected velocity: Vector;
       
        
        constructor(_position?: Vector) {
            super(_position);
        // console.log("constructed");
            let x: number = 300 * Math.random();
            let y: number = 100 * golden * Math.random() + 600 * golden;
            
    
            if (_position)
            this.position = _position;
            else
            this.position = new Vector (x, y);
    
        }



        public draw(): void {

            //Sunflower
            //Stem
            crc2.beginPath();
            crc2.rect(this.position.x, this.position.y, 2, 50);
            crc2.fillStyle = "green";
            crc2.fill();
        
            //Leaf
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y + 30, 10, 0, 0.5 * Math.PI);
            crc2.fillStyle = "green"; 
            crc2.fill();
            crc2.closePath();
        
            //Petals
            crc2.beginPath();
            crc2.arc(this.position.x + 10 , this.position.y, 10, 0, 2 * Math.PI);
            crc2.arc(this.position.x, this.position.y  + 10, 10, 0, 2 * Math.PI);
            crc2.arc(this.position.x - 10 , this.position.y, 10, 0, 2 * Math.PI);
            crc2.arc(this.position.x, this.position.y - 10 , 10, 0, 2 * Math.PI);
            crc2.fillStyle = "yellow"; 
            crc2.fill();
            crc2.closePath();
        
            //Seeds
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "brown";
            crc2.fill();
            crc2.closePath();


                       //Nectar
            crc2.beginPath();
            crc2.fillStyle = "lightblue"; 
            crc2.fillRect(this.position.x - 10 , this.position.y - 5 , 8 , 0 - this.nectarLiter);
            crc2.closePath();

            

        }



    }
}
