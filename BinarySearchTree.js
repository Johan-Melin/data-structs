//handle duplicates: frequency count
//DPS PreOrder Traversal - traverse root left right
//DPS PostOrder Traversal - traverse left right root
//DPS InOrder Traversal - traverse left root right

//BFS cons: space on wide tree
//DFS PreOrder pros: export tree structure (know first is root)
//Usage: html dom, network routing, folder structure, json

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
    insert(value) {
        var newNode = new Node(value);
        if(this.root == null){
            this.root = newNode
            return this;
        }else{
            var current = this.root;
            while(true){
                if(value === current.value) return undefined;
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                }else{
                    if(current.right == null){
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }
    find(val){
        if(this.root == null) return false;
        var current = this.root;
        var found = false;
        while(current && !found){
            if(val < current.value){
                current = current.left;
            }else if(val > current.value){
                current = current.right;
            }else{
                found = true;
            }
        }
        if(!found) return false;
        return current;
    }
    BFS(){
        var data = [],
            queue = [],
            node = this.root;
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder(){
        var data = [];
        function traverse(node){
            data.push(node);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    DFSPostOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node);
        }
        traverse(this.root);
        return data;
    }
    DFSInOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    /*DFS(order){
        var data = [];
        function traverse(node){
            if(order === "preOrder")data.push(node);
            node.left && traverse(node.left);
            if(order === "inOrder")data.push(node);
            node.right && traverse(node.right);
            if(order === "postOrder")data.push(node);
        }
        traverse(this.root);
        return data;
    }*/
}

var tree = new BinarySearchTree();
tree.insert(5);
tree.insert(0);
tree.insert(3);
tree.insert(11);
tree.insert(7);
tree.insert(-4);
tree.insert(1);
//console.log(tree);
//console.log(tree.find(2));
//console.log(tree.find(1));
console.log(tree.BFS());

/*let test = tree.DFSInOrder();
test = test.map(item => item.value);
console.log(test);*/
