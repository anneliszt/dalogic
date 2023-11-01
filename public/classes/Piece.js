import {Vector2D} from "./Vector2D.js";
import {Node2D} from "./Node2D.js";
import {Circle2D} from "./Circe2D.js";
import {eventManager} from "./Events.js";

export class Piece extends Node2D {
  constructor(row, col, tileSize , value = 0) {
    super();
    this.decimalValue = value;
    this.tileSize = tileSize
    this.circle = new Circle2D("red", tileSize/2, true);
    this.setPiecePosition(row, col)
    this.selected = false;
    this.possibleMoves = []

    //ready

    // components
    this.addChild(this.circle)

    // Add a click event listener for the piece
    eventManager.addEventListener("click", (eventData) => {
      if (this.containsPoint(new Vector2D(eventData.x, eventData.y))) {
        // Handle the click event for this piece
        this.handleClick();

      }
    });

  }

  get binaryRep() {
    return this.decimalValue.toString(2);
  }


  // Set the position of the piece based on the row, column, and tileSize
  setPiecePosition(row, col) {
    // Calculate the piece's position within the tile
    const x = col * this.tileSize + this.tileSize / 2;
    const y = row * this.tileSize+ this.tileSize/ 2;
    this.setLocalPosition(x, y);
  }

  containsPoint(vector) {
    return this.circle.containsPoint(vector);
  }

  handleClick(){
    this.selected = !this.selected;

    this.circle.color = this.selected ? "green" : "orange"
  }

  render(context) {
    super.render(context);
  }

  update(delta) {
    super.update(delta);

  }


}


