import {Rectangle2D} from "./Rectangle2D.js";
// Import necessary classes


// Tile class, extends Rectangle2D
export class Tile extends Rectangle2D {
  constructor(x = 0, y=0, width, height, isBlack) {
    super(x, y, width, height);
    this.isBlack = isBlack; // Indicates whether the tile is black or white/grey
    this.setColor();
  }

  // Set the color of the tile (black or white/grey)
  setColor() {
    this.fillColor = this.isBlack ? "black" : "white";
  }


}

// GameBoard class, extends Rectangle2D
export class GameBoard extends Rectangle2D {
  constructor(x = 0, y = 0, size, tileSize) {
    super(x, y, size, size);
    this.fillColor = "grey";
    this.tileSize = tileSize;
    this.rows = Math.floor(size / tileSize);
    this.columns = Math.floor(size / tileSize);
    this.tiles = [];

    // Create the checkerboard pattern
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.columns; col++) {
        const isBlack = (row + col) % 2 === 1;
        const tileX = this.x + col * this.tileSize;
        const tileY = this.y + row * this.tileSize;
        const tile = new Tile(tileX, tileY, this.tileSize, this.tileSize, isBlack);
        this.tiles.push(tile);
      }
    }
  }

  // Render the game board and tiles
  render(context) {
    super.render(context);

    // Render the tiles
    this.tiles.forEach((tile) => {
      tile.render(context);
    });
  }
}
