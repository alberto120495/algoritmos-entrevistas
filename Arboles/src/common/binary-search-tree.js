import { Node } from "./node.js";

class BinarySearchTree {
  constructor(data) {
    this.root = null;
  }

  getRootNode() {
    return this.root;
  }

  insert(data) {
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inOrder(node, fn) {
    if (node !== null) {
      this.inOrder(node.left, fn);
      //console.log(node.data);
      fn.call(null, node);
      this.inOrder(node.right, fn);
    }
  }

  preOrder(node, fn) {
    if (node !== null) {
      fn.call(null, node);
      this.preOrder(node.left, fn);
      this.preOrder(node.right, fn);
    }
  }

  postOrder(node, fn) {
    if (node !== null) {
      this.postOrder(node.left, fn);
      this.postOrder(node.right, fn);
      fn.call(null, node);
    }
  }

  searchNode(node, dataToBeFound) {
    if (node === null) {
      return null;
    } else if (dataToBeFound < node.data) {
      return this.searchNode(node.left, dataToBeFound);
    } else if (dataToBeFound > node.data) {
      return this.searchNode(node.right, dataToBeFound);
    } else {
      return node;
    }
  }
}

export default BinarySearchTree;
