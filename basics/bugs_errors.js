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

/* Exception and handling  
Exceptions are way to stop current programe with an expection reason 
we can raise an expection using throw keyword and there is way to handle it called expection handling 
when an error occured in function  it will like return the function till the bottom of the callstack where it get called intially 
it will zoom in the call stack we can call it as like super return this process is called unwinding the stack
using try catch we can stop that super return to zoom further down we can do it at any point 
*/

function raiseError(){
    throw new Error("error occured")
    //super return 
}

function dowork(){
    try{
        raiseError()
    }catch(err){
        console.log(err.message)
        console.log(err.stack)
        // stack holds the stack trace (the functions that involved)
    }
    // super return 
}

// we can raise error with anything , we can use error constructor
// dowork()

//* Cleaning up after exceptions
/*
 the expections can be handled to not to break the programe 
 but the programe may go uncontrol by missing the control flow 
 it casuses the side effects by doing some mutations  and after expection we need to revert those side effects or mutations
 like removing money from a person bank account and exception raised while adding to to other account after handling that 
 we have to add the money back to prev (this we can do in finally block )
 finally block will excute after try but it wont stop the stack unwinding(only catch block can )
 but it will run to do clean ups 
*/
function askTowork(){
    try{
        console.log("error")
        raiseError()
  
    }catch(err){
        console.log("catch")
    }
    finally{
        console.log("finally")
    }
}

askTowork()