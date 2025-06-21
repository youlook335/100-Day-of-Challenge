console.log("BFS (Breadth-First Search) in Typescript");


const graph: Record<string, string[]> = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: [],
    F: []
}

function bfs(start: string, graph: Record<string, string[]>) {
    const visited = new Set<string>();
    const queue: string[] = [start];

    while (queue.length > 0) {
        const node = queue.shift()!;

        if (visited.has(node)) {
            continue;
        }

        console.log("Visiting :", node);
        visited.add(node);

        for (const negh of graph[node]) {
            if (!visited.has(negh)) {
                queue.push(negh);
            }
        }
    }
}

bfs("A", graph)