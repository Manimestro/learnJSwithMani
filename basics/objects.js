/*
! Object Oriented programming (oops)
object- oriented programming has shaped the design of many programming languages, including JavaScript

it is a set of techniques for  designing a program using objects

Abstract data types
strings, numbers, arrays these all are object classes where it exposes some properties to use

! Methods & This keyword
*/
let dog = {
    type:"animal",
    speak:function (a){
        console.log(`${this.type} ${a} bark`)
    }
}
console.log(dog)
// when we call a method the THIS binding holds the object as its value
dog.speak('hi')
dog.speak?.call(dog,'hi')


let finder = {
    find(array) {
      return array.some(v => v == this.value);
    },
 value: 5 };
 console.log(finder.find([4, 5]));

 function NormalFunction(){
     console.log(this)
    }
 NormalFunction()
 let arrowFunc = ()=>{
    console.log(this)
 }
 arrowFunc()
// this keyword holds different values in the function depending way they called 
// arrow function doesnt have its own this object so its takes its parent scope
// regular functions have its own this object 
// functions called as methods holds the object value in this 
