// declare class

// export class using module.exports

module.exports = class Shape {
    constructor(){
        this.color = "red";
        this.drawShape  = ()=>{
        console.log("draw the shape"); 
        }
        this.calculateArea=()=>{
           console.log("area is area"); 
           return 1;
        }
    }
}
