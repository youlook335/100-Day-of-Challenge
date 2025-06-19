// https://chatgpt.com/c/68510dee-e070-8011-a2a3-da53120ebbb5

// ****************** Tree in TypeScript ******************
// This code defines a simple tree structure in TypeScript with methods to add and remove nodes.

console.log("Tree in TypeScript");



class Generic {
    value : number;
    children: Generic[];

    constructor(value:number) {
        this.value = value;
        this.children = [];
    }

    addchild(child: Generic): void{
        this.children.push(child);
    }
}

const root = new Generic(1);
const child1 = new Generic(2);
const child2 = new Generic(3);
const child3 = new Generic(4);
const child4 = new Generic(5);
const child5 = new Generic(6);
const child6 = new Generic(7);

root.addchild(child1);
root.addchild(child2);
root.addchild(child3);
child1.addchild(child4);
child1.addchild(child5);
child1.addchild(child6);

function printr(node : Generic, level = 0):void {
    console.log(" ".repeat(level * 2) + node.value);
    for (const child of node.children) {
        printr(child, level + 1);
    }
}

// printr(root);


// ****************** Binary Tree ******************


// 📦 Binary Tree Node
class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 🌲 Binary Tree Class
class BinaryTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  // Node insert karna (manual way)
  buildSampleTree() {
    // Ak Node hai or 2 children hain or wo childeren leaf hai
    this.root = new TreeNode(1);
    this.root.left = new TreeNode(2);
    this.root.right = new TreeNode(3);
    // this.root.left.left = new TreeNode(4);
    // this.root.left.right = new TreeNode(5);
  }

  // Pre-order traversal (Root → Left → Right)
  print(node: TreeNode | null = this.root): void {
    if (!node) {
        return;
    }
    console.log(node.value);
    this.print(node.left);
    this.print(node.right);
  }
}

// 📌 Test the tree
const tree = new BinaryTree();
tree.buildSampleTree();
tree.print();
