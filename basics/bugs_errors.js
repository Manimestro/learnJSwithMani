//! Bugs and Errors 

//* Language 

// javascript complains if we miss the grammer of langague 
// and so things like calling a non function will raise errors on code exicution 
// somethings dont even raise errors it will pass and make output wrong 
// The process of finding mistakes in programs is called debugging.

//* UseStrict

function canYouSpotTheProblem() {
    // 'use strict'
     a = 10
    }
canYouSpotTheProblem()
/*
    The use strict will strictly check for more errors and complain on exicution
    The classes and modules are enabled by default
 */

function Person(name){
    // "use strict"
    this.name = name
}
let man = Person("Mani")
console.log(name)
// using strict mode in functions the this context will become undefined if the function not called correctly

//* Types 
// The types in javascript are only checked on exicution time
// sometimes the types are converted to another types on excuting a expersion 

// (a:number, b:number )=> number
function sum(a,b){
    return a+b
}
// commenting types is usefull 

//* Testing
// Testing means test the programe before we find the bugs on prod 
// testing programe wiht another programe is automation testing 
// writing unit test functions for all the functions is difficult at first but we can reuse it everytime 

//* Debugging
// looking into to the code when we find our programe is not working as it should 
// use debugger tools and console logs 

//* Error propagation
// Error may occur by any means, some errors like user inputs and network failures , we need to handle it in the code 
// we cant do anything expect that 
// for that cases if can return some special value like error happend
//  (Error) ? {error true }:{value}
// for this caller needs to check and handle again 
