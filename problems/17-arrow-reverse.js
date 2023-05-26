/***********************************************************************
Write a function reverseStr(str) that accepts a string and returns that string
reversed.

Write this function using a fat arrow function!

Examples:
let result1 = reverseStr("hello"); // returns "olleh"
let result2 = reverseStr("garden"); // returns "nedrag"
let result3 = reverseStr("potato"); // returns "otatop"


***********************************************************************/

const reverseStr = (str) => {
  let reversed = ""
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
    }
    return reversed;
}

// let result1 = reverseStr("hello"); // returns "olleh"
// console.log(result1())
// let result2 = reverseStr("garden"); // returns "nedrag"
// console.log(result2())
// let result3 = reverseStr("potato"); // returns "otatop"
// console.log(result3())

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = reverseStr;
  } catch (e) {
    return null;
  }
