class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    //this.counter = 0;
  }
}

class NodeWithMultipleChildren {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

export { Node, NodeWithMultipleChildren };
