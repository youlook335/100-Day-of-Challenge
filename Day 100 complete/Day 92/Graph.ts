// Used a combine Graph BFS/DFS
const graph: { [key: string]: string[] } = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: ["F"],
    F: []
};


// BFS (Breadth-First Search)
function bfs(graph: { [key: string]: string[] }, start: string) {
    const visited = new Set<string>();
    const queue: string[] = [start];

    while (queue.length > 0) {
        const node = queue.shift()!;
        if (!visited.has(node)) {
            console.log("Visited:", node);
            visited.add(node);

            for (const neighbor of graph[node]) {
                queue.push(neighbor);
            }
        }
    }
}


console.log("****** BFS ******");
bfs(graph, "A");


// DFS ( Depth-First Search) 

function dfs(graph: { [key: string]: string[] }, node: string, visited = new Set<string>()) {
    if (visited.has(node)) return;

    console.log("Visited:", node);
    visited.add(node);

    for (const neighbor of graph[node]) {
        dfs(graph, neighbor, visited);
    }
}
console.log("****** DFS ******");
dfs(graph, "A");
