import {Node2D} from "./Node2D.js";

export class Sprite extends Node2D{

  constructor(image,  frameCount, frameDuration,  frameWidth, frameHeight) {
    super();
    this.image = image; // Image containing the animation frames
    this.frameWidth = frameWidth ? frameWidth : this.image.width; // Width of a single frame
    this.frameHeight = frameHeight ? frameHeight : this.image.height; // Height of a single frame
    this.frameCount = frameCount ? frameCount : 1; // Total number of frames in the animation
    this.frameDuration = frameDuration ? frameDuration : 0; // Time (in milliseconds) per frame

    this.currentFrame = 0; // Current frame index
    this.frameTimer = 0.0; // Timer to track frame changes
  }

  update(delta) {
    // only animate if frameDuration is set
    if (this.frameDuration > 0){
      this.frameTimer += (delta*1000);
      console.log(this.frameTimer)
      if (this.frameTimer >= this.frameDuration) {
        this.frameTimer = 0;
        this.currentFrame = (this.currentFrame + 1) % this.frameCount;
      }
    }

  }

  render(context) {
    context.drawImage(
      this.image,
      this.currentFrame * this.frameWidth,
      0, // Assuming the sprite sheet has a single row of frames
      this.frameWidth,
      this.frameHeight,
      this.x,
      this.y,
      this.frameWidth,
      this.frameHeight
    );
  }


}