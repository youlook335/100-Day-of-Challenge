// https://chatgpt.com/c/68527086-71f4-8011-965c-7d3bb0a7059b

console.log("DFS (Depth-First Search) in Typescript");

// DFS Example

// 📁 Root
// ├── 📁 Folder1
// │   └── 📁 Sub1
// │       └── 📁 SubSub1
// ├── 📁 Folder2
// │   └── 📁 Sub2
// ├── 📁 Folder3
// │   └── 📁 Sub3
// ...


const graph: Record<string, string[]> = {
    A: ["B", "C"],
    B: ["D"],
    C: ["E"],
    D: [],
    E: []
};

const visited: Set<string> = new Set();

function dfs(node: string) {
    if (visited.has(node)) {
        return;
    }
    console.log("Visiting", node);
    visited.add(node);

    for (const negh of graph[node]) {
        dfs(negh)
    }
    console.log("Backtracking from:", node);
}
// in sab ma sa kisi ak ko check krna hai ka ya kha sa aya or kha gya
// dfs("A");
dfs("B");
// dfs("C");
// dfs("D");
// dfs("E");