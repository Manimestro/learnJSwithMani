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

function local(){
    let bindF = 3 // local scoped (local to function)
}
// bindings defined with var has no block scope barrier 