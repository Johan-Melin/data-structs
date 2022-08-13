//index child: left 2n+1, right 2n+2
//index parent: (n-1)/2 floored

class Node{
    constructor(val, priority){
        this.value = val;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const el = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if(el.priority <= parent.priority) break;
            this.values[parentIdx] = el;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.bubbleDown();
        }
        return max;
    }
    bubbleDown(){
        let idx = 0;
        const length = this.values.length;
        const el = this.values[0];
        while(true){
            let leftChildIdx = idx * 2 + 1;
            let rightChildIdx = idx * 2 + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority > el.priority){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority > el.priority) || 
                    (swap !== null && rightChild.priority > leftChild.priority)
                ){
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            idx = swap;
        }
    }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 1);
ER.enqueue("gunshot wound", 5);
ER.enqueue("high fever", 2);
ER.dequeue();
console.log(ER);