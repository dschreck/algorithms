import {
  createTree,
  insert,
  printInOrder,
  BinarySearchTree,
} from "../03_binary_tree";

test("Can create a tree", () => {
  const result = createTree();
  expect(result).toBeDefined();
});

test("insert", () => {
  const BST = new BinarySearchTree();
  BST.insert(15);
  BST.insert(25);
  BST.insert(10);
  BST.insert(7);
  BST.insert(22);
  BST.insert(17);
  BST.insert(13);
  BST.insert(5);
  BST.insert(9);
  BST.insert(27);

  let root = BST.getRootNode();

  // prints 5 7 9 10 13 15 17 22 25 27
  BST.inOrder(root);

  console.log('===============');
  // Removing node with no children
  BST.remove(5);

  root = BST.getRootNode();
  BST.breadthFirstTraversal(root);
  console.log('===============');
  console.log(BST.height(root));

  // prints 7 9 10 13 15 17 22 25 27
  // BST.inOrder(root);
});
