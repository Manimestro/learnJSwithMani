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

// ! Prototype 

// prototype is a special property. it is used to abstraect the properties and reuse in differnt objects
// when property is missing in a object its checks for its proptype and ther if misses checks for prototype protypes properties ans so on 
let emptyObject = Object()
// or 
emptyObject = {
    
}

emptyObject.toString() // this method came from its prototype object
// object Proptype is by default setted to Object.prototype so it has toString method and uses it 
Object // it is a Object class 
String // it is string Object's class
Boolean // it is boolean Objects's class
Number //  it is number Object's class
console.log(Object.getPrototypeOf(emptyObject)) // --> this methods returns protype of any object
console.log(Object.getPrototypeOf(emptyObject)==Object.prototype) // true
console.log(Object.getPrototypeOf("String")==String.prototype) // true
console.log(Object.getPrototypeOf(true)==Boolean.prototype) // true
console.log(Object.getPrototypeOf(1)==Number.prototype) // true

// all the prototypes chains end up with Object.prototype
console.log(Object.getPrototypeOf(Object.getPrototypeOf("String"))==Object.prototype)

var book1 = {
    author:"Mani",
    name:"Js",
    bioData:()=>{
        console.log(
            `bio of ${this.author}`
        )
    }
}

var book2 = {
    author:"Mani",
    name:"Git"
}

// to abstract bio and author into a another object and reuse

let Book = {
    author:"Mani",
    bioData:function(){
        console.log(
            `bio of ${this.author}`
        )
    }
}

var book1 = Object.create(Book)
Object.assign(book1,{ name:"Js",})
var book2 = Object.create(Book)
Object.assign(book1,{ name:"Git",})

console.log(book1.author)
book1.bioData()