import { Rectangle2D } from "./Rectangle2D.js";
import { Vector2D } from "./Vector2D.js";

// Tile class, extends Rectangle2D
export class Tile extends Rectangle2D {
  constructor(position = new Vector2D(), width, height, isBlack) {
    super(position, width, height);
    this.isBlack = isBlack; // Indicates whether the tile is black or white/grey
    this.setColor();
    this.occupied = false; // if it has a piece on it
    this.coordinates = new Vector2D(position.x/width, position.y/height);

  }

  // Set the color of the tile (black or white/grey)
  setColor() {
    this.fillColor = this.isBlack ? "black" : "white";
  }

  drawText(context){
    context.save()
    context.translate(this.position.x , this.position.y)
    context.font = "24px serif";
    const text = this.coordinates.x.toString() + "," + this.coordinates.y.toString()
    context.fillStyle="orange"
    context.fillText(text, this.width*0.2, this.height*0.75    );
    context.restore()
  }

  render(context) {
    super.render(context);
    this.drawText(context)
  }
}

// GameBoard class, extends Rectangle2D
export class GameBoard extends Rectangle2D {
  constructor(position = new Vector2D(), size, tileSize) {
    super(position, size, size);
    this.fillColor = "grey";
    this.tileSize = tileSize;
    this.rows = Math.floor(size / tileSize);
    this.columns = Math.floor(size / tileSize);
    this.tiles = [];

    // Create a 2D array to represent the tiles
    this.createTileArray();
    console.log(this.tiles)

  }



  // Create a 2D array to represent the tiles
  createTileArray() {
    this.tiles = new Array(this.rows);
    for (let row = 0; row < this.rows-1; row++) {
      this.tiles[row] = new Array(this.columns);
      for (let col = 0; col < this.columns-1; col++) {
        const tileX = this.x + col * this.tileSize;
        const tileY = this.y + row * this.tileSize;
        this.tiles[row][col] = new Tile(new Vector2D(tileX, tileY), this.tileSize, this.tileSize, (row + col) % 2 === 1);
      }
    }
  }

  // Render the game board and tiles
  render(context) {
    super.render(context);

    // Render the tiles
    this.tiles.forEach((row) => {
      row.forEach((tile) => {
        tile.render(context);
      });
    });
  }

  // Check if a move from (startX, startY) to (endX, endY) is a valid diagonal move
  isValidDiagonalMove(startX, startY, endX, endY) {
    // Calculate the absolute differences in x and y coordinates
    const deltaX = Math.abs(endX - startX);
    const deltaY = Math.abs(endY - startY);

    // Check if the move is diagonal and that it stays within the bounds of the board
    return deltaX === deltaY && endX >= 0 && endX < this.columns && endY >= 0 && endY < this.rows;
  }
}
