import BinarySearchTree from "./common/binary-search-tree.js";
import { NodeWithMultipleChildren } from "./common/node.js";
import Tree from "./common/tree.js";

let bst = new BinarySearchTree();
bst.insert(8);
bst.insert(3);
bst.insert(2);
bst.insert(6);
bst.insert(10);
bst.insert(9);
bst.insert(14);

//console.log(tree);
const root = bst.getRootNode();
const arrayResults = [];
//bst.inOrder(root, (node) => arrayResults.push(node.data));
//bst.preOrder(root, (node) => arrayResults.push(node.data));
bst.postOrder(root, (node) => arrayResults.push(node.data));

//console.log(arrayResults);

console.log(bst.searchNode(root, 45));

let tree = new Tree();
tree.root = new NodeWithMultipleChildren(5);
tree.root.children.push(new NodeWithMultipleChildren(5));

console.log(tree);
