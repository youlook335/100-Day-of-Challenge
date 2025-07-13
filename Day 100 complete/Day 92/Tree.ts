// // https://chatgpt.com/g/g-06LIAkZuk-hi-ai/c/686e68b7-fb34-8010-8f89-489ad1d928cc

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(value: number) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

function inorderTraversal(node: TreeNode | null): void {
    if (!node) return;
    inorderTraversal(node.left);
    console.log(node.val);
    inorderTraversal(node.right);
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(6);


// inorderTraversal(root);

//  Binary Tree

class TreeNode_1 {
    val: number;
    left: TreeNode_1 | null;
    right: TreeNode_1 | null;

    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function inorder(node: TreeNode_1 | null, indent: string = "", side: string = "root"): void {
    if (!node) return;
    inorder(node.left, indent + "   ", "L");
    console.log(`inorder , ${indent}[${side}] ${node.val}`);
    inorder(node.right, indent + "   ", "R");
}

function preorder(node: TreeNode | null, indent: string = "", side: string = "root"): void {
    if (!node) return;
    console.log(`preorder , ${indent}[${side}] ${node.val}`);
    preorder(node.left, indent + "   ", "L");
    preorder(node.right, indent + "   ", "R");
}

function postorder(node: TreeNode_1 | null, indent: string = "", side: string = "root"): void {
    if (!node) return;
    postorder(node.left, indent + "   ", "L");
    postorder(node.right, indent + "   ", "R");
    console.log(`postorder , ${indent}[${side}] ${node.val}`);
}

const root_1 = new TreeNode_1(10);
root_1.left = new TreeNode_1(5);
root_1.right = new TreeNode_1(15);
root_1.left.left = new TreeNode_1(2);
root_1.left.right = new TreeNode_1(7);
root_1.right.right = new TreeNode_1(20);

postorder(root_1);
preorder(root_1);
inorder(root_1)
