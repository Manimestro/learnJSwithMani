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