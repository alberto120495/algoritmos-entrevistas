import BinarySearchTree from "./common/binary-search-tree.js";

let tree = new BinarySearchTree();
tree.insert(8);
tree.insert(3);
tree.insert(2);
tree.insert(6);
tree.insert(10);
tree.insert(9);
tree.insert(14);

//console.log(tree);
const root = tree.getRootNode();
const arrayResults = [];
//tree.inOrder(root, (node) => arrayResults.push(node.data));
//tree.preOrder(root, (node) => arrayResults.push(node.data));
tree.postOrder(root, (node) => arrayResults.push(node.data));

//console.log(arrayResults);

console.log(tree.searchNode(root, 45));
