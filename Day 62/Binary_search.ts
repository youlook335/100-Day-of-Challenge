// Binary Search Tree in TypeScript
// Note: This code is a simple implementation of a binary search tree in TypeScript.
// https://chatgpt.com/c/68510dee-e070-8011-a2a3-da53120ebbb5

console.log("Binary Search in TypeScript");


class Tree_Str {
    value: number;
    left: Tree_Str | null;
    right: Tree_Str | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    root:Tree_Str | null;

    constructor(){
        this.root = null;
    }

    insert(value: number): void {
        const newNode = new Tree_Str(value);

        if(this.root === null) {
            this.root = newNode;
            return;
        }

        let current = this.root;

        while(true) {
            if(value < current.value) {
                if(current.left === null) {
                    current.left = newNode;
                    break;
                }
                current = current.left;
            } else {
                if(current.right === null) {
                    current.right = newNode;
                    break;
                }
                current = current.right;
            }
        }
    }

    order_trvsl(node:Tree_Str | null):void {
        if(node === null){
            return;
        }
        this.order_trvsl(node.left);
        console.log(node.value);
        this.order_trvsl(node.right);
    }
}

const example_bst = new BST();
example_bst.insert(10);
example_bst.insert(5);
example_bst.insert(15);
example_bst.insert(3);
example_bst.insert(7);
example_bst.insert(12);
example_bst.insert(18);
example_bst.insert(1);
example_bst.insert(4);
example_bst.insert(6);
example_bst.insert(8);
example_bst.insert(11);
example_bst.insert(13);
example_bst.insert(16);
example_bst.insert(20);

example_bst.order_trvsl(example_bst.root);