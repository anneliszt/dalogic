import { Node2D } from "./Node2D.js";
import {Vector2D} from "./Vector2D.js";
export class Circle2D extends Node2D{
    radius;
    color;
    filled = true;

    constructor( color, radius, filled = true){
        super(new Vector2D());
        this.color = color || "red";
        this.radius = radius || 10;
        this.filled = filled ;
    }

    // Check if a point is inside the circle
    containsPoint(point) {
        return this.getGlobalPosition().squaredDistance(point) <= (this.radius * this.radius);
    }

    render(context) {
        this.path = new Path2D()
        // Create a path for the circle
        this.path.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    
        // Customize the rendering style
        context.fillStyle = this.color; // Circle color
        if (this.filled) {
            context.fill(this.path);
        } else{
            context.strokeStyle = this.color; // Outline color
            context.lineWidth = 2; // Outline width
            context.stroke(this.path); // Stroke the path
        }
    
        // You can also set other properties for the context, like stroke and lineWidth, if needed.
      }



}