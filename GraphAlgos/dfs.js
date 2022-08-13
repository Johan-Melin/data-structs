/*const dfp = (graph, source) => {
    const stack = [source];

    while(stack.length){
        const current = stack.pop();
        console.log(current);
        for(let neighbour of graph[current]){
            stack.push(neighbour);
        }
    }
}*/

const dfp = (graph, source, visited = {}) => {
    visited[source] = true;
    console.log(source);
    for(let neighbour of graph[source]){
        if(!visited[neighbour])
            dfp(graph, neighbour);
    }
    //visited = {};
}

const bfp = (graph, source) => {
    const queue = [source];
    while(queue.length > 0){
        const current = queue.shift(); 
        console.log(current);
        for(let neighbour of graph[current]){
            queue.push(neighbour)
        }
    }
}

const graph = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['E'],
    'D': ['F'],
    'E': [],
    'F': [],
    'G': []
};

//dfp(graph, 'A'); 
//bfp(graph, 'A'); 

/*const hasPath = (graph, src, dst) => {
    if(src === dst){
        return true;
    }
    for(let neighbour of graph[src]){
        if(hasPath(graph, neighbour, dst)) return true;
    }
    return false;
}*/

const hasPath = (graph, src, dst, visited) => {
    if(visited.has(src)) return false;
    const queue = [src];

    while(queue.length > 0){
        const current = queue.shift();
        if(current === dst) return true;
        for(let neighbour of graph[current]){
            queue.push(neighbour);
        }
    }
    return false;
}

//console.log(hasPath(graph, 'A', 'F'));

const buildGraph = (edges) => {
    let graph = {}
    edges.map(item => {
        const [a, b] = item;
        //graph[a] = graph[a] || [];
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
        graph[a].push(b)
        graph[b].push(a)
    })
    return graph;
}

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
]

//console.log(buildGraph(edges));

const connectedComponentsCount = graph => {
    const visited = new Set();
    let count = 0;
    for(let node in graph){
        if(explore(graph, node, visited))
            count++;
    }
    return count;
}

const explore = (graph, current, visited) => {
    if(visited.has(current)) return false;

    visited.add(current);

    for(let neighbour of graph[current]){
        explore(graph, neighbour, visited);
    }

    return true;
}

//console.log(connectedComponentsCount(graph))

const islandCount = (grid) => {
    const visited = new Set();
    let count = 0;
    for(let r = 0; r < grid.length; r++){
        for(let c = 0; c < grid[0].length; c++){
            if(exploreIsland(graph, r, c, visited)) count++;
        }    
    }
    return count;
}

const exploreIsland = (grid, r, c, visited) => {
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid.length;
    if(!rowInbounds || !colInbounds) return false;
    console.log("exploreIsland")

    if(grid[r][c] === 'w') return false;

    const pos = r + ',' + c;
    if(visited.has(pos)) return false;
    visited.add(pos);

    exploreIsland(grid, r-1, c, visited);
    exploreIsland(grid, r+1, c, visited);
    exploreIsland(grid, r, c-1, visited);
    exploreIsland(grid, r, c+1, visited);

    return true;
}

let islandMap = [
    ['l', 'w', 'l'],
    ['w', 'l', 'l'],
]

console.log(islandCount(islandMap))

for (var i = 0; i <= 5; i++){
    function closure(i){
        setTimeout(() => console.log(i), i*1000);
    }
    closure(i);
}
i = "a"
