/*
When action grows unprofitable, gather information; when information grows unprofitable, sleep.

! why Language Matters
To add number from 1 to 10

setting switches or punching holes in cards

00110001 00000000 00000000
00110001 00000001 00000001

Store the number 0 in memory location 0.
Store the number 1 in memory location 1.
Store the value of memory location 1 in memory location 2.
Subtract 11 from the value in memory location 2.
If the value in memory location 2 is 0, continue with instruction 9.
Add the value of memory location 1 to memory location 0.
Add 1 to the value of memory location 1.
Continue with instruction 3.
Output the value of memory location 0.

above one is so confusing

Set “total” to 0.
Set “count” to 1.
[loop]
Set “compare” to “count”.
Subtract 11 from “compare”.
If “compare” is 0, continue at [end].
Add “count” to “total”.
Add 1 to “count”.
Continue at [loop].
[end]
Output “total”.
is is fine
*/
let total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);
// this is more esay

console.log(sum(range(1,10)))
// it is just simple

/*
The same program can be written in long, complex ways or short, readable ways. The first version was hard to read, while the last one is almost like English.
*/

/*
 !JavaScript
 one of the programming language to talk with computer
 It allows for modern web applications that don’t need to reload the page for every action and adds interactivity to traditional websites.
 for this reason it used as a standard  across all the browsers
 a standard was created to ensure all software supporting JavaScript worked the same way.
 This standard is called ECMAScript, and you can use "ECMAScript" and "JavaScript" interchangeably.

https://eloquentjavascript.net/code/
 This is our code sandbox (online js interpreture)
 */
