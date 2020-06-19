// Trees are hierachial data structures
class TreeNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new TreeNode(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
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

  remove(key) {
    this.root = this.removeNode(this.root, key);
  }

  removeNode(node, key) {
    if (node === null) {
      return null;
    } else if (key < node.key) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = this.removeKey(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      let aux = this.findMinNode(node.right);
      node.key = aux.key;
      node.right = this.removeNode(node.right, aux.key);
      return node;
    }
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }
  getRootNode() {
    return this.root;
  }
  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.key);
      this.inOrder(node.right);
    }
  }
  preOrder(node) {
    if (node !== null) {
      console.log(node.key);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.key);
    }
  }
  search(node, key) {
    if (node === null) {
      return null;
    }
    if (key < node.key) {
      return this.search(node.left, key);
    }
    if (key > node.key) {
      return this.search(node.right, key);
    }

    return node;
  }

  height(root) {
    if (root === null) {
      return 0;
    }
    const leftHeight = this.height(root.left);
    const rightHeight = this.height(root.right);

    return (leftHeight > rightHeight ? leftHeight : rightHeight) + 1;
  }

  breadthFirstTraversal(node) {
    if (node === null) {
      return;
    }

    let queue = [node];

    while (queue.length > 0) {
      let leaf = queue.shift();
      console.log(leaf.key);

      if (leaf.left === null && leaf.right === null) {
        continue;
      }
      if (leaf.left !== null) {
        queue.push(leaf.left);
      }
      if (leaf.right !== null) {
        queue.push(leaf.right);
      }
    }
  }

  depthFirstTraversal(node) {
    if (node === null) {
      return;
    }
  }
}

const createTree = () => {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);

  return root;
};

const printInOrder = (leaf) => {
  if (leaf === null) {
    return;
  }

  printInOrder(leaf.left);
  console.log(`${leaf.key} `);
  printInOrder(leaf.right);
};

const insert = (leaf, key) => {
  const queue = [].push(leaf);

  while (queue.length) {
    let tmp = queue.shift();
    if (tmp.left === null) {
      tmp.left = new TreeNode(key);
      break;
    } else {
      queue.push(temp.left);
    }
    if (tmp.right === null) {
      tmp.right = new TreeNode(key);
      break;
    } else {
      queue.push(tmp.right);
    }
  }
  return tmp;
};

export { TreeNode, createTree, insert, printInOrder, BinarySearchTree };
