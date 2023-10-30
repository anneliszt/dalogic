// Vector2D class
export class Vector2D {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  set(x, y) {
    this.x = x;
    this.y = y;
  }

  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }

  subtract(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
  }

  multiply(scalar) {
    this.x *= scalar;
    this.y *= scalar;
  }

  divide(scalar) {
    if (scalar !== 0) {
      this.x /= scalar;
      this.y /= scalar;
    }
  }

  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  normalize() {
    const mag = this.magnitude();
    if (mag !== 0) {
      this.divide(mag);
    }
  }

  squaredDistance(vector) {
    const dx = this.x - vector.x;
    const dy = this.y - vector.y;
    return dx * dx + dy * dy;
  }
}
