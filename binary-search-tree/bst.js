const { Queue } = require("../queue/queue");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.counter = 1;
  }

  increment() {
    this.counter += 1;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const tmpNode = new Node(value);
    if (!this.root) {
      this.root = tmpNode;
      return;
    }
    let currentParentNode = this.root;

    while (true) {
      // If we put the same value increment node counter
      if (currentParentNode.value === value) {
        currentParentNode.increment();
        return;
      }

      // Put the left side
      if (value < currentParentNode.value) {
        //If no node, create it
        if (!currentParentNode.left) {
          currentParentNode.left = tmpNode;

          return;
        } else {
          // Repeat loop again
          currentParentNode = currentParentNode.left;
        }
      } else {
        // If no right node, create it
        if (!currentParentNode.right) {
          currentParentNode.right = tmpNode;
          return;
        } else {
          // Repeat loop again
          currentParentNode = currentParentNode.right;
        }
      }
    }
  }

  find(value) {
    // If empty return false
    if (!this.root) {
      return false;
    }

    let currentParentNode = this.root;

    while (true) {
      // If current parent value is equal we find the node
      if (currentParentNode.value === value) {
        return true;
      }

      // Go to left first
      if (value < currentParentNode.value) {
        // If there more left node repeat
        if (currentParentNode.left) {
          currentParentNode = currentParentNode.left;
        } else {
          // If there is no node is is end of the tree, return false
          return false;
        }
      } else {
        if (currentParentNode.right) {
          currentParentNode = currentParentNode.right;
        } else {
          return false;
        }
      }
    }
  }

  breadthFirstSearch() {
    const queue = new Queue();
    const visited = [];
    let currentNode = this.root;

    queue.enqueue(currentNode);

    while (queue.size) {
      currentNode = queue.dequeue();

      if (currentNode.left) {
        queue.enqueue(currentNode.left);
      }

      if (currentNode.right) {
        queue.enqueue(currentNode.right);
      }

      visited.push(currentNode);
    }

    return visited;
  }

  depthFirstPreOrder() {
    const visited = [];
    function traverse(node) {
      visited.push(node);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return visited;
  }

  depthPostOrder() {
    const visited = [];
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      visited.push(node);
    }
    traverse(this.root);
    return visited;
  }

  depthInOrder() {
    const visited = [];
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      visited.push(node);
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return visited;
  }
}

const bst = new BinarySearchTree();

///      22
///    10    41
//   8  11  23
//
//

bst.insert(22);
bst.insert(10);
bst.insert(41);
bst.insert(23);
bst.insert(23);
bst.find(1);
bst.insert(11);
bst.insert(8);
console.log(bst.find(22));
console.log(bst.find(5));
console.log(
  JSON.stringify(
    bst.depthInOrder().map(({ value }) => value),
    null,
    2
  )
);
