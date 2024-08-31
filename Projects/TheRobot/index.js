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
 
 //! For automation picking an random place to go and check if we can deliver 
 
 // a function that takes vilage state and calls the robot function to five a direction to move 
 function runRobot(state,robot,memory=[]){
    let c = 0
    for (let turn=0;;turn++){
        if(state.parcels.length<=0){
            console.log(`Done in ${turn} turns`)
            break
        }
        let action = robot(state,memory);
        state = state.move(action.direction)
        memory = action.memory;
        c++
        console.log(`Moved to ${action.direction} ${state.parcels.length} ${c}`)
        
    }
 }
 
 // Random pick from an array
 function randomPick(array){
    let choice = Math.floor(Math.random()*array.length)
    return array[choice]
 }
 
 // Robot picking a random reachable destination of given place 
 function randomRobot(state){
    return {direction:randomPick(roadGraph[state.place])}
 }
 
 // a static method to generate a random place and parcels to deliver
 VillageState.random = function(parcelCount = 5){
    let parcels = [];
    for (let i=0; i<parcelCount;i++){
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do{
            place = randomPick(Object.keys(roadGraph))
        }while(place==address);
        parcels.push({place,address})
    }
    return new VillageState("Post Office", parcels)
 }
 
let someRandomState = VillageState.random()
// let robot = runRobot(someRandomState, randomRobot)
// it will take so long to deliver 

// if we goes to all posible places in a quick way  we can deliver parcels by just going twice in that way 

// this route covers all the places in quick 
const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House", "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm", "Marketplace", "Post Office"
    ];
    
function routeRobot(state , memory=[]){
    if(memory.length<=0){
        memory = mailRoute
    }
    console.log(memory[0],memory.slice(1))
    return {
        direction:memory[0],
        memory:memory.slice(1)        
    }
}
console.log(someRandomState,"someRandomState")
runRobot(someRandomState,routeRobot)