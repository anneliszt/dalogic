import {Circle2D} from "./Circe2D.js";
import {Vector2D} from "./Vector2D.js";
import {Node2D} from "./Node2D.js";

class CollisionObject extends Node2D{
    constructor(position = new Vector2D(0,0)){
        super(position);
    }

    render(context) {
      super.render(context);

    }
}