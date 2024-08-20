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

let BookProto = {
    author:"Mani",
    bioData:function(){
        console.log(
            `bio of ${this.author}`
        )
    }
}

var book1 = Object.create(BookProto)
Object.assign(book1,{ name:"Js",})
var book2 = Object.create(BookProto)
Object.assign(book1,{ name:"Git",})

console.log(book1.author)
book1.bioData()

// !Class
/*
classes or abstract data types --> it defines shape of type of an object (props and methods)
the instance of that class is called object 
prototype --> it defines props that shares across all the objects (instances of class)

To create an instance of class
- make an object that derives from proper prototype
- it should have the props that defined in the class
*/


let bookPrototype = {
    author:"Mani",
    bioData:function(){
        console.log(
            `bio of ${this.author}`
        )
    }
}


function createBookInstance(name) {
    let book = Object.create(bookPrototype);
    book.name = name;
    return book;
  }

let book3 = createBookInstance("GIt")
console.log("🚀 ~ book3:", book3.author)
console.log("🚀 ~ book3:", book3.name)
console.log("🚀 ~ book3:", book3.bioData())

// this function creates an object with a prototype and also adds neccessery props like name 
// this is a contructor function role in the class to make sure these things 

// there is another way to create a constructor function 
function CreateBookInstancewithProto(name) {
    this.__proto__ = Object.create(bookPrototype);
    this.name = name;
    return this;
  }
const book4 = new CreateBookInstancewithProto("JS")
console.log("🚀 ~ book4:", book4.name)
console.log("🚀 ~ book4:", book4.author)
console.log("🚀 ~ book4:", book4.bioData())

// there is another way to create a constructor function 
// there is another way to create a constructor function 
function CreateBookInstancewithProtoypeProp(name) {
    this.name = name;
  }
CreateBookInstancewithProtoypeProp.prototype = bookPrototype
const book5 = new CreateBookInstancewithProto("JS")
console.log("🚀 ~ book5:", book5.name)
console.log("🚀 ~ book5:", book5.author)
console.log("🚀 ~ book5:", book5.bioData())

class Book {
    author = "Mani"
    constructor(name) {
      this.name = name;
    }
    getBioData() {
        console.log(
            `bio of ${this.author}`
        )
    }
  }

// bindings created with class keyword are also functions but special 
// they will do some set of opertaions 
const book6 =new Book("Mybook")
// if we call a class with new keyword
//0. an instance of an object is created {}
//1. then whole class and functions inside it will have this context binded to the instance
//2. this = {name:"Mybook"}
//3. Book.prototype = {getBioData}
//4. returns an instace(object) which is this 
//4. sets instance.__proto__ = Book.prototype 

console.log(book6.__proto__ == Book.prototype )
console.log(Book.__proto__ == Function.prototype)

/*
every function defined with function keyword has its own this context which is empty initially
every class defined with class keyword , the functions inside in it are the methods not the normal functions

*/