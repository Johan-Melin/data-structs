class PriorityQueue{
    constructor(){
        this.values = [];
    }
    engqueue(val, priority){
        this.values.push({val, priority});
        this.sort();
    };
    dequeue(){
        return this.values.shift();
    }
    sort(){
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }
    dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [] //to return at end
        let smallest;
    
        //build up initial state
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.engqueue(vertex, 0);
            }else{
                distances[vertex] = Infinity;
                nodes.engqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest !== Infinity]){
                for(let neighbour in this.adjacencyList[smallest]){
                    let nextNode = this.adjacencyList[smallest][neighbour];
                    //calculate new distance to neighbouring node
                    let candidate = distances[smallest] + nextNode.weight;
                    if(candidate < distances[nextNode.node]){
                        //updating new smallest distance to neighbour
                        distances[nextNode.node] = candidate;
                        //updating how we got to neighbour
                        previous[nextNode.node] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.engqueue(nextNode.node, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("D", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.dijkstra("A", "F"));