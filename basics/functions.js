// !Functions
/*
These are just a normal bindings value is a peice pragrame 

the bindings used inside function are provided while invoking the function

! Global & local binding scope
*/ 
let bindG = 1 // scope is global  (while programe)

if(true){
    const bindB = 2 // block scoped (local to block)
    var globalBinding = 4
}

let local=function(){
    let bindF = 3 // local scoped (local to function)
}
// bindings defined with var has no block scope barrier 
/*
! nested scope

so local scopes can see the outer scopes which the local scope is used and also the global scope 
but global scope cannot see the local scope 

! Functions as values 

function binding is just a name and value is a programe we can re-assign the binding 
and we can pass it to another function binding as variable 

*/

// !Declaration notation

FunctionBinding()

function FunctionBinding(){
    // this binding is moved top of the current scope 
    // so that it can be called anywhere in the scope 
    // its not part of top top-bottom flow control
    console.log("hi")
}

// !arrow functions 
// to write less code in robust way it was introduced 
var arrowFunc = (a,b)=>{
    return a+b
}
var arrowFunc = a=>{
    return a
}
var arrowFunc = a => a

//! The call stack
// we saw line by line control flow of a programe 
// when the function invocked the line excution starts on functions programe line 1 inside function 
// as it is done it will continuew next line 
// to remember this current context (which line to continue) it stores that context in a stack called callStack
// so that stack is removed and context used to continue running the programe 
// “out of stack space” or “too much recursion.” if call stack memory limit reached 

//! Optional Arguments
let OptionalArgumentsFunc = function(a,b,c,d=1){
    console.log(a,b,c)
};

OptionalArgumentsFunc(1) //we  can call less args 
OptionalArgumentsFunc(1,2,3,4) //we  can call more args 

/* 
!closure

function local bidings are re-created as they are called again and again 
when we create a function in another function it holds its context bindings even the parent function is finshed 
This is called Closure 
when the function will remember bindings in that context it is created not when its called
*/

function mutlipler(x){
    return (num)=>num*x
}
const a = mutlipler(10)
console.log(a(2))

// !Recursion 
// Function calling itself
// for some cases loops are cheaper and efficient and some complex problems 
// when will be branchs and find solution for that recursion is better
// recursion uses callstack as  
//example
function findSolution(target) {
    function find(current, history) {
        console.log(history)
        console.log(current)
      if (current == target) {
        return history;
      } else if (current > target) {
        return null;
      } else {
        return find(current + 5, `(${history} + 5)`) ??
               find(current * 3, `(${history} * 3)`);
      }
    }
    return find(1, "1");
  }
  
console.log(findSolution(24)); // → (((1 * 3) + 5) * 3)

  // !Growing Functions
  // keep functions as simplier and reusable, dont make it complex just to make it reusable
  // keep a balance between usability and maintainability 
  // You won’t get any real work done—you’ll be too busy writing code that you never use.
  
  