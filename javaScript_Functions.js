// // function 1. 
// // maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them.

// const maxOfTwoNumbers = (x, y) => {
//     if (x > y) {
//         return x;
//     } else {
//         return y;
//     }
// }
// console.log(maxOfTwoNumbers(5, 19))

// // function 2. 
// // maxOfThreethat takes three numbers as arguments and returns the largest of them.

// const maxOfThree = (x, y, z) => {
//     if (x > y && x > z) {
//         return x
//     } else if (y > x && y > z) {
//         return y
//     } else if (z > x && z > y) {
//         return z
//     }
// }
// console.log(maxOfThree(300, 5, 7))

// //function 3.  
// //isCharAVowel takes a character as an argument and returns true if it is a vowel

// const isCharAVowel = (word) => {
//     if (word === "a" || word === "e" || word === "i" || word === "o" || word === "u") {
//         return "true"
//     } else {
//         return "false"
//     }
// }
// console.log(isCharAVowel("m"))

//function 4.
// sumArray takes an array of numbers and returns the sum of those numbers

// const sumArray = (digits) => {
//     let sum = 0
//     for (let i = 0; i < digits.length; i++)
//         sum += (digits[i])
//     return sum
// }
// console.log(sumArray([3, 8, 0, 1, 40, 99]))


// function 5
// multiplyArraythat takes an array of numbers and returns the product those numbers.

// const MultiplyArray = (digitss) => {
//     let product = 1

//     for (let i = 0; i < digitss.length; i++)
//         product *= (digitss[i])
//     return product
// }
// console.log(MultiplyArray([1, 3, 5, 10, 20]))


// //function 6
// //6. Define a function, as a function expression, numArgs that 
// //returns the number of arguments passed to the function when called.

// const numArgs = (...args) => {
//     return args.length
// }
// console.log(numArgs("feet", "arms", "hands", "hair", "eyes"))

// // function 7
// const reverseString = (string) => {
//     return string.split("").reverse().join("");
// };
// console.log(reverseString("rockstar"))

// //8
// returns the length of the longest string

// const longestStringInArray = (bigString) => {
//     let biggestString = ""
//     for (let i = 0; i < bigString.length; i++) {
//         if (bigString[i].length > biggestString.length) {
//             biggestString = bigString[i]
//         }
//     }
//     let bigStringSize = biggestString.length
//     return bigStringSize
// }
// console.log(longestStringInArray(["a", "fun", "dope", "chuck", "robots"]))


// //9
// const wordArray = ["alphabet", "stars", "up", "photosynthesis", "row", "car"]

// const stringsLongerThan = (arr, filter) => {
//     //  console.log(arr)
//     const Results = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > filter) {
//             Results.push(arr[i])
//         }
//     }
//     return Results
// }
// console.log(stringsLongerThan(wordArray, 3))