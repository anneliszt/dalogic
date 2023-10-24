export class Node2D {
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }

  addChildren(children){
    for (let child of children){
      this.addChild(child);
    }
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  update(){

  }

  updateAll() {
    this.update();
    this.children.forEach(child => {
        child.update();
    });
    // Implement custom update logic for the node (e.g., movement, physics).
  }

  render(context) {
    // Implement rendering logic for the node.
  }

  renderAll(context) {
    this.render(context);
    for (const child of this.children) {
      child.renderAll(context);
    }
  }
}

