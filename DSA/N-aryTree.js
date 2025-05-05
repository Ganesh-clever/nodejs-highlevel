class Node {
  constructor(value) {
    this.value = value;
    this.child = [];
  }
}

class NAryTree {
  constructor(value) {
    this.root = new Node(value);
  }

  dfs(node = this.root) {
    if (!node) return;
    console.log(node.value);
    for (let child of node.child) {
      this.dfs(child);
    }
  }

  bfs() {
    if (!this.root) return;
    let queue = [this.root];
    while (queue.length > 0) {
      let current = queue.shift();
      console.log(current.value);
      for (let child of current.child) {
        queue.push(child);
      }
    }
  }
}

const A = new Node("A");
const B = new Node("B");
const C = new Node("C");
const D = new Node("D");
const E = new Node("E");
const F = new Node("F");
const G = new Node("G");

// Build tree structure
A.child.push(B, C, D); // A -> B, C, D
B.child.push(E, F); // B -> E, F
C.child.push(G); // C -> G

// Create main tree
const tree = new NAryTree("A");
tree.root = A; // Assign the manually built tree

console.log("DFS Traversal:");
tree.dfs(); // A B E F C G D

console.log("\nBFS Traversal:");
tree.bfs(); // A B C D E F G
