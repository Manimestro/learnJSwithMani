/* 
!Higher Order Functions 

higher order functions are functions the takes functions as args or returns functions 
it is just functions operates on functions

*/
let arr = [1,2,3,4,5]
arr.forEach(()=>{})
arr.filter(()=>{})
arr.map(()=>{})
const reduce = arr.reduce((prev,curr)=>{
  return  prev+curr
},0)
console.log("🚀 ~ reduce ~ reduce:", reduce)