//JavaScript does not have a stack data type
//Stack = LIFO /(last in, first out)
//Stacks are used to handle function invocations (the call stack), operations like undo/redo, and routing (web pages back/forward)
//array push and pop = stack
//linked list shift and unshift = stack
//doubly linked list both = stack

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }pop(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.val;
    }
}

var stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack);