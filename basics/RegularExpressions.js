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

//* Sets of characters
let digitcheck = /[0123456789]/
digitcheck = /[0-9]/
digitcheck = /\d/
console.log("🚀 ~ digitcheck:", digitcheck.test('sdf5'))

let datetime = '14-12-2024 01:40AM'

let datetimeregex = /\d\d-\d\d-\d\d\d\d \d\d:\d\d[AP]M/

console.log(datetimeregex.test(datetime), "datetime test")

let nondDigitsRegex = /[^\d]/
let person = "mani"

console.log("🚀 ~ nondDigitsRegex:", nondDigitsRegex.test(person))
