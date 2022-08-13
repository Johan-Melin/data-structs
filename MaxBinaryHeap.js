//index child: left 2n+1, right 2n+2
//index parent: (n-1)/2 floored

class MaxBinaryHeap{
    constructor(){
        this.values = [41,39,33,18,27,12];
    }
    insert(el){
        this.values.push(el);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const el = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if(el <= parent) break;
            this.values[parentIdx] = el;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            console.log(this);
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
                if(leftChild > el){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild > el) || 
                    (swap !== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeap();
heap.insert(55);
console.log(heap.extractMax());
