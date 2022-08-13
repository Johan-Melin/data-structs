class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;    
        }
        this.length--;
        return poppedNode;
    }
    shift(){
        if(!this.head) return undefined;
        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;  
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head.prev = null;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index <= this.length/2){
            var counter = 0;
            var current = this.head;
            
            while(counter !== index){
                current = current.next;
                counter++;
            }
        }else{
            var counter = this.count -1;
            var current = this.tail;
            
            while(counter !== index){
                current = current.prev;
                counter--;
            }
        }
        return current;
    }
    set(index, val){
        var node = this.get(index);
        if(!node) return false;
        node.val = val;
        return true;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        //index is in middle of list
        var newNode = new Node(val);
        var prevNode = this.get(index - 1);
        var nextNode = prevNode.next;
        prevNode.next = newNode, newNode.prev = prevNode;
        newNode.next = nextNode, nextNode.prev = newNode;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();
        //index is in middle of list
        var removed = this.get(index);
        removed.prev.next = removed.next;
        removed.next.prev = removed.prev;
        removed.next = null;
        removed.prev = null;
        this.length--;
        return removed;
    }
}

var list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.insert(1, 4);
list.shift();
console.log(list);
