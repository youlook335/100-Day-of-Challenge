// https://chatgpt.com/c/68527086-71f4-8011-965c-7d3bb0a7059b

console.log("Graphs in Typescript");
// Adjacency List


// Manually Adjaceny List
// Type definition
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


