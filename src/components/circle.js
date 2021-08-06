// import using require

// declare class


// export class using module.exports
import {Shape} from ./src/components/shape.js

const Shape = require("Shape");

class Circle extends Shape {
    constructor(){
        super();
        this.calculateArea=()=>{
            
        }
    }
}
export {Circle};
