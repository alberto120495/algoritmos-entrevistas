import { NodeWithMultipleChildren } from "./node.js";

class Tree {
  constructor() {
    this.root = null;
  }

  getRootNode() {
    return this.root;
  }

  insertNode(node, data) {
    const newNode = new NodeWithMultipleChildren(data);
    if (this.root === null) {
      this.root = newNode;
    }
    node.children.push(newNode);
  }
}

export default Tree;
