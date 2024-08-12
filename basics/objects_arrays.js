/*
! Data Structures

! Arrays
[1,2,3] --> holds data sets a set of values 
*/
// !properties --> objects have properties, that we can define
var a = "string";
var arr = [1,2,3];
a.length // calling length property via .
a["length"] // calling length property via []
arr.length
arr["length"]
// to get the values from the array we need to call the index number as property name 
// arr.2 --> we cant call non binding names with . 
arr[2] //--> so we call with square braces

// !Methods
// if the property of is a function then it is called method 
const names="Jhon"
names.toLocaleLowerCase() // it is a method of string 

// !Objects
const obj = {
    name:"joe",
    age:22
}
const obj2 = {
    name:"mani",
    age:22
}
console.log(obj.dob) //undefined 
obj.dob = "20-03-2002" // assigning properties
delete obj.dob //deleting properties 

Object.keys(obj) // all keys
Object.assign(obj,obj2) // merge two objs

let arr2 = [1,2,3]
typeof arr2
console.log(Object.keys(arr2))
console.log(Object.values(arr2))
console.log(arr2["1"])
// arrays are also objects with keys as indexes

// !Mutability
//  data types like str, int, bool are immutable we cant change their content 
let mydtype = "String"
// we created a binding with name and value as string we can change the value to another but we cant tamper the value that is assigned 
 
// Objects are mutable we can change the content inside an object
const data1  = {
    a:true,
    b:false
}
const data2  = {
    a:true,
    b:false
}
const data3 = data1
console.log(data1==data2) //false it wont check content it will check reference 
console.log(data1==data3) //true both holds same refernce 
data3.a = false
console.log(data1.a)
// Looping on Array 
for (let i=0;i<arr.length;i++){
    console.log(arr[i])
}
//shorthand
for (let ele of arr){
    console.log(ele)
}
// Common array methods
var array1 = [1,2,3,4,2]
var array2 = [1,2,3,4]
array1["greet"] = "hello"
console.log(array1)
array1.push(5)
array1.pop()
array1.shift()
array1.unshift(1)
array1.indexOf(2)
array1.lastIndexOf(2)
console.log(array1.slice(0))
array1.concat(array1,array2)

// !Strings and their properties
// we have methods and properties for strings
// we cant addd properties to them because they are not objects
const myname = "BOB"
myname.greet = "hello"
console.log(myname.greet) //undefined
// strings have built in methods and properties common onces are
myname.length
myname.trim()
myname.indexOf("B")
const splitted = myname.split(" ")
splitted.join("*")
myname.repeat(10)
const paddedNumber = String(7).padStart(8,"0")
console.log("🚀 ~ paddedNumber:", paddedNumber)

// !Rest parameters
// accepting many args
function printAll(...args){
    console.log(args)
}
printAll(1,2,3,4)
let parms = [1,2,3,4]
printAll(...parms)

let spreadArr = [...array1,...array2]
let spreadObj = {...obj,...obj2}

// !The Math object
// this object holds all the methods related math, to not to polute global namespace
Math.min(1,2)
Math.max(1,2)
Math.sqrt(10)
Math.floor(10.2)
Math.ceil(10.2)
Math.random()
console.log(Math.PI)
Math.round(10.4)