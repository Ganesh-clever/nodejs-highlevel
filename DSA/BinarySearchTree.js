class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (root.value > newNode.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(value) {
    let current = this.root;
    while (current) {
      if (current.value === value) return true;
      current = current.value > value ? current.left : current.right;
    }
    return false;
  }

  inorder(node = this.root) {
    if (!node) return;
    this.inorder(node.left);
    console.log(node.value);
    this.inorder(node.right);
  }

  preorder(node = this.root) {
    if (!node) return;
    console.log(node.value);
    this.inorder(node.left);
    this.inorder(node.right);
  }

  postorder(node = this.root) {
    if (!node) return;
    this.inorder(node.left);
    this.inorder(node.right);
    console.log(node.value);
  }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(17);

console.log("Inorder:");
bst.inorder();
bst.preorder();
bst.postorder();

console.log("Search 7:", bst.search(7)); 
console.log("Search 20:", bst.search(20)); 
