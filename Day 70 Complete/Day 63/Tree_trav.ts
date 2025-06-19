// https://chatgpt.com/c/68510dee-e070-8011-a2a3-da53120ebbb5
// This code demonstrates tree traversal in TypeScript using a binary tree structure.


// Inorder → 2 5 7 10 12 15 18
// Preorder → 10 5 2 7 15 12 18
// Postorder → 2 7 5 12 18 15 10
// Level Order /  Breadth First Search (BFS) → 10 5 15 2 7 12 18

console.log("Tree Traversal in TypeScript");

// (Inorder Traversal)

class node {
    value: number;
    left: node | null;
    right: node | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


function inorder(root: node | null): void {
    if (root === null) {
        return;
    }

    inorder(root.left);
    console.log(root.value);
    inorder(root.right);
}

const root = new node(10);
root.left = new node(5);
root.right = new node(15);
root.left.left = new node(3);
root.left.right = new node(7);
root.right.left = new node(12);
root.right.right = new node(18);

// inorder(root);


// Preorder Traversal

class node_1 {
    value: number;
    left: node_1 | null;
    right: node_1 | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function preorder(root: node_1 | null): void {
    if (root === null) {
        return;
    }

    console.log(root.value);
    preorder(root.left);
    preorder(root.right);
}

const root_1 = new node_1(132);
root_1.left = new node_1(2);
root_1.right = new node_1(3);
root_1.left.left = new node_1(4);
root_1.left.right = new node_1(5);
root_1.right.left = new node_1(6);
root_1.right.right = new node_1(7);

// preorder(root_1);


// Postorder Traversal

class node_2 {
    value: number;
    left: node_2 | null;
    right: node_2 | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function postorder(root: node_2 | null): void {
    if (root === null) {
        return;
    }

    postorder(root.left);
    postorder(root.right);
    console.log(root.value);
}

const root_2 = new node_2(10);
root_2.left = new node_2(5);
root_2.right = new node_2(15);
root_2.left.left = new node_2(2);
root_2.left.right = new node_2(7);
root_2.right.left = new node_2(12);
root_2.right.right = new node_2(18);

// postorder(root_2);


// level order traversal /  Breadth First Search (BFS)
class node_3 {
    value: number;
    left: node_3 | null;
    right: node_3 | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function levelordWithLevels(root: node_3 | null): void {
    if (!root) return;

    const queue: [node_3, number][] = [[root, 0]];
    let currentLevel = 0;
    let levelOutput: number[] = [];

    while (queue.length > 0) {
        const [node, level] = queue.shift()!;

        if (level !== currentLevel) {
            console.log(`Level ${currentLevel}: ${levelOutput.join(' ')}`);
            levelOutput = [];
            currentLevel = level;
        }

        levelOutput.push(node.value);

        if (node.left) queue.push([node.left, level + 1]);
        if (node.right) queue.push([node.right, level + 1]);
    }

    // Print the last level
    console.log(`Level ${currentLevel}: ${levelOutput.join(' ')}`);
}

// Tree Construction
const root_3 = new node_3(10);
root_3.left = new node_3(5);
root_3.right = new node_3(15);
root_3.left.left = new node_3(2);
root_3.left.right = new node_3(7);
root_3.right.left = new node_3(12);
root_3.right.right = new node_3(18);

// Call the function
levelordWithLevels(root_3);
