import {Vector2D} from "./Vector2D.js";
// Node2D class using Vector2D
export class Node2D {
  constructor(position = new Vector2D(0, 0)) {
    this.position = position;
    this.children = [];
    this.parent = null;
    this.path = new Path2D();

  }

  get x(){
    return this.position.x;
  }

  set x(value){
    this.position.x = value;
  }

  get y(){
    return this.position.y;
  }

  set y(value){
    this.position.y = value;
  }


  addChild(child) {
    if( this.eventManager !== null){
      child.eventManager = this.eventManager;
    }
    child.parent = this;
    this.children.push(child);
  }

  addChildren(children) {
    for (let child of children) {
      this.addChild(child);
    }
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    if (index !== -1) {
      this.children.splice(index, 1);
      child.parent = null;
    }
  }

  getGlobalPosition() {
    if (this.parent) {
      const parentGlobalPosition = this.parent.getGlobalPosition();
      const globalPosition = new Vector2D(this.position.x, this.position.y);
      globalPosition.add(parentGlobalPosition);
      return globalPosition;
    }
    return new Vector2D(this.position.x, this.position.y);
  }

  setLocalPosition(x, y) {
    this.position.set(x, y);
  }

  setGlobalPosition(x, y) {
    if (this.parent) {
      const parentGlobalPosition = this.parent.getGlobalPosition();
      const localPosition = new Vector2D(x, y);
      localPosition.subtract(parentGlobalPosition);
      this.position = localPosition;
    } else {
      this.position.set(x, y);
    }
  }

  update(delta) {}

  updateAll(delta) {
    this.update(delta);
    this.children.forEach((child) => {
      child.updateAll(delta);
    });
  }

  render(context) {}

  renderAll(context) {
    context.save();
    context.translate(this.position.x, this.position.y);
    this.render(context);
    this.children.forEach((child) => {
      child.renderAll(context);
    });
    context.restore();
  }
}
