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

