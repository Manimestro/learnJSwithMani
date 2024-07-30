/*
! Statement vs Expression

Expression --> A piece of code that evaluates to a value.
ex: 2+3
Statement --> A complete instruction in JavaScript, typically consisting of expressions
ex: console.log(2+3)

! Bindings (variables)

these are refernces that stores and manupulates data over a time in a programe
let,var,const --> with these we can defined binding 
let --> can be re-assigned after declaration 
var --> can be re declare (used in 2015 ecmascript)
const --> cant re-assinged after declaration

dont use keywords,reserved words for binding names 

! Envinorments 
This is a group of bindings that are avaible to a programe in that context 
there are some initial bindings present in the environment (Node or browser)
like keywords, window for browser , system defaults etc

! Functions (args)
lot of  default bindings values are functions 
function is a code treated as a value 
ex: console, promt
console()--->Invoking, calling, or applying a function 
arguments --> values we pass insdie that function 
Function can make side effects(doing something out of scope of that function)
or it simply returns a value without 

! Control Flow 
stright flow like line after line exicuted 
or excuting conditionally if if else statements 

Loops (while, dowhile, For)
*/ 
var i = 0
while (i<5){
    console.log(i)
    i+=1
}
// 0,1,2,3,4
var i = 0 
do {
    console.log(i)
    i+=1
}while(i<5);
//0,1,2,3,4

// For loops offer a compact and readable way to manage loop initialization, condition-checking, and updating, all within one line

for (var i=0;i<5;i=i+1){
    console.log(i)
}
//0,1,2,4

// breaking loops 

/*
break: Exits the loop immediately, stopping further iterations.
Infinite Loops: Can occur if there is no termination condition or if the condition is always true.
continue: Skips the rest of the loop body and proceeds to the next iteration.

*/

for (var i=0;i<5;i=i+1){
    if(i===3){
        break
    }
    console.log(i)
}
// 0,1,2
for (var i=0;i<5;i=i+1){
    if(i===3){
        continue
    }
    console.log(i)
}
//0,1,2,4