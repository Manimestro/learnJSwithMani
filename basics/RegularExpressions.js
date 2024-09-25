//! Regular Expressions
/*
    Regular expressions are strings of some patterns
    javascript syntax and many other languages 

    the strings start and end with forward slash is a regex string
*/
let manualRegex = /abc/
let regexbyCon = RegExp('abc')

console.log(manualRegex.test('abcd')) // --> true

// to find wheter a digit exisits in string 

//* Sets of characters []
let digitcheck = /[0123456789]/
digitcheck = /[0-9]/
digitcheck = /\d/
console.log("🚀 ~ digitcheck:", digitcheck.test('sdf5'))

let datetime = '14-12-2024 01:40AM'

let datetimeregex = /\d\d-\d\d-\d\d\d\d \d\d:\d\d[AP]M/

console.log(datetimeregex.test(datetime), "datetime test")

let nondDigitsRegex = /[^\d]/
let person = "mani1"

console.log("🚀 ~ nondDigitsRegex:", nondDigitsRegex.test(person))

//* Repeating parts of patterns

// gorup of digits if exists in a string 
let groupofDigits = /\d*/
let digits = "s"
console.log("🚀 ~ groupofDigits:", groupofDigits.test(digits)) //true

// gorup of digits even no exists 
// A* A is optional 
groupofDigits = /\d*/
digits = "abc"
console.log("🚀 ~ groupofDigits:", groupofDigits.test(digits)) //true

//optional part of pattern ?
// name? e is optional
let optionalRegex = /name?/
console.log("🚀 ~ optionalRegex:", optionalRegex.test('name'))
console.log("🚀 ~ optionalRegex:", optionalRegex.test('nam'))

// A{1,2} A should come at least once at max twice 
datetimeregex = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{1,2}/
console.log("🚀 ~ datetimeregex:", datetimeregex.test("1-30-2003 8:45"))

//* Grouping subexpressions

let word = 'Boohoooohoohooo'
let wordRegex = /bo+(ho+)+/i
console.log("🚀 ~ wordRegex:", wordRegex.test(word))
