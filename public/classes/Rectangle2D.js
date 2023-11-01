import { Node2D } from "./Node2D.js";
import {Vector2D} from "./Vector2D.js";

export class Rectangle2D extends Node2D {
    constructor(position = new Vector2D(), width=20, height=20) {
      super(position);
      this.size = new Vector2D(width, height)
    }

    get width(){
      return this.size.x;
    }

    set width(value){
      this.size.x = value
    }

    get height(){
      return this.size.y;
    }

    set height(value){
      this.size.y = value
    }

    setSize(width, height) {
      this.size.set(width, height);
    }

    update(delta) {
      super.update(delta);
    }

  render(context) {
      this.path = new Path2D()
      this.path.rect(this.x, this.y, this.width, this.height);
      context.fillStyle = this.fillColor; // Rectangle color
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  