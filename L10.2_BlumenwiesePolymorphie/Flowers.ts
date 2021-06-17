namespace flower10 {

    export class Flowers {
    type: string;
    color: string;
    position: Vector;
    size: number;
    velocity: Vector;
  
    
    constructor() {
    // console.log("constructed");
    let x: number = 300 * Math.random();
    let y: number = 100 * golden * Math.random() + 600 * golden;
    this.position = new Vector (x, y);
    

    }
    
    

    
    
    draw(): void {
        
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
   
    
    
    }
    

    
    }
    
    }