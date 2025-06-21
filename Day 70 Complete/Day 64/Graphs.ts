// https://chatgpt.com/c/68527086-71f4-8011-965c-7d3bb0a7059b

console.log("Graphs in Typescript");
// Adjacency List


// Manually Adjaceny List
type Graph = Record<string, string[]>;

// Graph representation
const graph: Graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "D"],
  D: ["B", "C"]
};

// Accessing neighbors of A
// console.log("Neighbors of A:", graph["A"]); // Output: [ 'B', 'C' ]


// Automatically Adjacency List

type Graph_1 = Record<string, string[]>;

const edges: [string, string][] = [
  ["A", "B"],
  ["A", "C"],
  ["B", "D"],
  ["C", "D"]
];

const graph_1: Graph_1 = {};

// Build adjacency list
for (const [u, v] of edges) {
  if (!graph_1[u]) {

    graph_1[u] = [];
  }
  if (!graph_1[v]) {

    graph_1[v] = [];
  }
  graph_1[u].push(v);
  graph_1[v].push(u); // For undirected graph_1
}

// console.log(graph_1);


// Adjacency Matrix Manually
// ****************************** Manually *********************************

const nodes = ["A", "B", "C", "D", "E"];

const matrix: number[][] = [
  // A  B  C  D  E
  [0, 1, 1, 1, 0], // A → B, C, D
  [0, 0, 0, 0, 1], // B → E
  [0, 0, 0, 1, 0], // C → D
  [0, 0, 0, 0, 0], // D → ∅
  [0, 0, 0, 1, 0]  // E → D
];

// console.log("Node Index map:");
nodes.forEach((node, index) => {
  // console.log(`${index} : ${node}`);  
});

// console.log("Adjacency Matrix:");
// console.table(matrix);


// Adjacency Matrix Automatic

const node_1: string[] = ["A", "B", "C", "D", "E"];

const edges_2: [string, string][] = [
  ["A", "B"],
  ["A", "C"],
  ["A", "D"],
  ["B", "E"],
  ["C", "D"],
  ["E", "D"]
];

const nodeindex: Record<string, number> = {};
node_1.forEach((node, index) => {
  nodeindex[node] = index;
});

const size = node_1.length;
const matrix_1 = Array(size).fill(0).map(() => Array(size).fill(0)); // ✅ FIXED

for (const [from, to] of edges_2) {
  const i = nodeindex[from];
  const j = nodeindex[to];
  matrix_1[i][j] = 1;
}

console.log("Node Index Map:");
node_1.forEach((node, index) => {
  console.log(`${index} : ${node}`);
});

console.log("Adjacency Matrix Auto:");
console.table(matrix_1);