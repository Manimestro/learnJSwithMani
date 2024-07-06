/*
!Comparison Operators
Comparison operators in JavaScript are used to compare values and produce Boolean values (true or false)

!String Comparison
When comparing strings, JavaScript uses Unicode values and compares them character by character from left to right
console.log("Aardvark" < "Zoroaster"); // → true
Uppercase letters are always "less" than lowercase letters

console.log(NaN == NaN); // → false

!Logical Operators (&& || !)
Ternery operators
console.log(true ? 1 : 2);  // → 1
console.log(false ? 1 : 2); // → 2

!Automatic Type Conversion in JavaScript
console.log(8 * null); // → 0
console.log("5" - 1); // → 4
console.log("5" + 1); // → 51
console.log("five" * 2); // → NaN
console.log(false == 0); // → true
console.log(null == undefined); // → true
console.log("" === false); // → false
console.log(0 === false); // → false

! Short-Circuiting of Logical Operators
console.log(null || "user"); // → "user"
console.log("Agnes" || "user"); // → "Agnes"

console.log(false && "user"); // → false
console.log("Agnes" && "user"); // → "user"

console.log(0 || 100); // → 100
The ?? operator returns the value on its right only if the value on its left is null or undefined. 
console.log(0 ?? 100); // → 0
console.log(null ?? 100); // → 100


*/