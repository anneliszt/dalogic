import { Node2D } from "./Node2D.js";

export class Rectangle2D extends Node2D {
    constructor(x, y, width, height) {
      super(x, y);
      this.width = width || 20;
      this.height = height || 20;
    }
  
    setSize(width, height) {
      this.width = width;
      this.height = height;
    }
  
    render(context) {
      const path = new Path2D()

      path.rect(this.x, this.y, this.width, this.height);
      context.fillStyle = 'blue'; // Rectangle color
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  