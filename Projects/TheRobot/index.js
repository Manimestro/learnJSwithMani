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
/* 
 When thinking in Opp's dont create everything you see as class Objects and relate it with others
 Reflexively writing classes for every concept in your application tends to leave you with a collection of interconnected 
 objects that each have their own internal, changing state. Such programs are often hard to understand and thus easy to break.
*/

//VillageState holds the info of the currect place the robot in and parcels it holds 
class VillageState{
    constructor(place, parcels){
        this.place = place
        this.parcels = parcels
    }
    move(destination){
        if(!roadGraph[this.place].includes(destination)){
            return this
        }
        else{
            let parcels = this.parcels.map(p=>{
                if(p.place != this.place) return p 
                return {place:destination,address:p.address}
            }).filter(p=>p.place != p.address)
            return new VillageState(destination,parcels)
        }
    }
}

let first = new VillageState(
    "Post Office",
    [{place:"Post Office",address:"Alice's House"}]
)
let next = first.move("Alice's House")

console.log(next.place)

console.log(next.parcels)

console.log(first.place)

// Persistent Data (data structures that wont change over time)

let object = Object.freeze({value: 5});
 object.value = 10;
 console.log(object.value);
 // → 5
 
 