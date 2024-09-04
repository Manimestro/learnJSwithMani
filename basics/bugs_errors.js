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