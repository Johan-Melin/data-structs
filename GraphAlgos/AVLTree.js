class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 0;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }
    getHeight(node){
        return node == null ? -1 : node.height;
    }
    getBalance(node){
        return this.getHeight(node.left) - this.getHeight(node.right);
    }
    leftRotate(x){
        const y = x.right;
        const yLeftChild = y.left;
        y.left = x;
        x.right = yLeftChild;
        x.height = Math.max(height(x.left, height(x.right) +1));
        y.height = Math.max(height(y.left, height(xy.right) +1));
        return y;
    }
}