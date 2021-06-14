namespace flowerClasses {

    export class Bee {
    color: string;
    position: Vector;
    velocity: Vector;
    
    
    constructor() {
        let x: number = 1000 * Math.random();
        let y: number = 600 * Math.random();
        this.position = new Vector (x, y);
        
        
        //Speed & Direction
        
        let a: number = - Math.random(); //-damit sie nach links "laufen"
        let b: number = Math.random();
        this.velocity = new Vector (a, b);
        }
    
    
    
    
    
    draw(): void {
    
        //Seeds
        crc2.beginPath();
        crc2.ellipse(this.position.x , this.position.y, 10, 8, 10, 10, 1 * Math.PI);
        crc2.fillStyle = "#FFA81E";
        crc2.fill();
        crc2.closePath();
    
        //Wing
        crc2.beginPath();
        crc2.arc(this.position.x + 3 , this.position.y - 7, 10, 0, 0.7 * Math.PI);
        crc2.fillStyle = "lightblue"; 
        crc2.fill();
        crc2.closePath();
        
        //eye
    
        crc2.beginPath();
        crc2.arc(this.position.x - 4, this.position.y - 5, 1, 0, 2 * Math.PI);
        crc2.fillStyle = "black"; 
        crc2.fill();
        crc2.closePath();
    
    
    
    }
    
    
    
        move(_timeslice: number): void {
            this.position.add(this.velocity);
            
            if (this.position.x < 0)
            this.position.x += crc2.canvas.width;
            
            if (this.position.y > 600)
            this.position.y -= 500;
            
            } 
    
    
    
    
    }
    
    
    }