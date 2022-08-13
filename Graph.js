//graph: node + connections
//adjacency matrix: quick lookup specific edge, more space and slower
//adjacency list: slow lookup, less space and faster
//traversal usage: web crawlers, finding "closest" ex friends, shortest path

class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2){
        //todo: validate vertix exists, handle edge already exists
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2){
        //todo: validate vertix exists, handle edge already exists
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1);
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
    DFSRecursive(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    return dfs(neighbour);
                }
            });
        })(start);
    }
    DFSIterative(start){
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        
        visited[start] = true;
        while(stack.length){
            console.log(stack);
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    stack.push(neighbour);
                }
            });
        }
        return result;
    }
    BFS(start){
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        while(queue.length){
            console.log(queue);
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            });
        }
        return result;
    }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
graph.DFSRecursive("A");
//graph.DFSIterative("A");
graph.BFS("A");

//            A
//           / \
//          B   C
//          |   |
//          D---E
//           \ /
//            F