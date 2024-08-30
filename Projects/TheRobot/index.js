const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Post Office",
  "Marketplace-Town Hall",
  "Marketplace-Farm", 
  "Marketplace-Shop", 
  "Shop-Town Hall"
];

// creating routes from roads 
function buildGraph(edges) {
    let graph = Object.create(null)
    function addEdge(from, to) {
      if (from in graph) {
        graph[from].push(to);
      } else {
        graph[from] = [to];
 } }
 for (let [from, to] of edges.map(r => r.split("-"))) { 
    addEdge(from, to);
    addEdge(to, from);
 }
    return graph;
  }

const roadGraph = buildGraph(roads);
console.log(roadGraph)

