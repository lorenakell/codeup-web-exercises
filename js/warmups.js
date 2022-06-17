// "use strict";
//
//
// // function firstFunction(name) {
// //     return name;
// //
// //
// //
// //     // in an arrow function, the above function looks like:
// //
// //     const firstArrowFunction = name
// //
// //    // console.log(firstFunction("Miguel"));
// //     //console.log(firstFunction("Lorena"));
// //     //console.log(firstFunction("Orlando"));
// //
// //     // Parsing my stuff in a function
// //     function parseMyStuff(input) {
// //         input = parseFloat(input)
// //         return input;
// //     };
// //
// //     var price = parseMyStuff(prompt("How much does this thing cost"));
// //     //console.log(price);
// //
// //
// //
// //     function isString(maybeString) {
// //         return typeof maybeString == "string";
// //     }
// //
// //    // console.log(isString(maybeString))
// // }
// //
// //
// // function isNumber(input) {
// //     return typeof input === "number";
// // }
// //
// // //console.log(isNumber("4"));
// //
// // //console.log(isNumber(NaN));
// //
// // //function myFunction(a, n) {
// // //    return typeof
// // //};
// //
// //
// // //Anonymous Function
// //
// // var increment = function(x) {
// //     return x + 1;
// // }
// //
// // //console.log(increment(x5));
// //
// // //Arrow function
// //
// // const myArrowFunction = (firstName, lastName) => {
// //     firstName = firstName.toUpperCase();
// //     lastName = lastName.toUpperCase()
// //     return firstName + "" + lastName;
// // }
// //
// // //console.log(myArrowFunction("Jay", "Arredondo"));
// //
// //
// // //function scope
// //
// // let weekDays = 6;
// //
// // function scopeTest() {
// //     let weekDays = 5;
// //     console.log(weekDays)
// // }
// //
// // scopeTest();
// // anything with curly braces has blocks
//
// // APRIL 22, 2022
//
//
//
// let i;
// for (i=1; i<=100; i++)
// {
//     // number divisible by 3 and 5 will
//     // always be divisible by 15, print
//     // 'FizzBuzz' in place of the number
//     if (i%15 == 0)
//         console.log("FizzBuzz" + " ");
//
//         // number divisible by 3? print 'Fizz'
//     // in place of the number
//     else if ((i%3) == 0)
//         console.log("Fizz" + " ");
//
//         // number divisible by 5, print 'Buzz'
//     // in place of the number
//     else if ((i%5) == 0)
//         console.log("Buzz" + " ");
//
//     else // print the number
//         console.log(i + " ");
// };
// console.log(`Yay! I completed the warm-up!`)
//
// //  ANSWER
//
// // function fizzBuzz(limit) {
// //     if (limit === undefined) {
// //         limit = 100;
// //     }
// //
// //     for (let i = 1; i <= limit; i++) {
// //         if (i % 15 === 0) {// i % 3 === 0 && i % 5 === 0
// //             console.log("FizzBuzz");
// //     } else if (i % 3 === 0) {
// //             console.log("Fizz");
// //     } else if (i % 5 === 0) {
// //             console.log("Buzz");
// //         } else {
// //             console.log(i);
// //         };
// //     };
// // };
// //
// // fizzBuzz (limit:);
//
// //// April 27, 2022
//
// // Write a function that takes in an array of strings and returns a string of the first letter of each element concatenated together:
// //
// // Ex: allFirstLetters(["dog", "cat", "frog",. "bat"]) -> "dcfb";
//
// let animals = ["dog", "cat", "frog", "bat"];
//
// function allFirstLetter () {
//     let allFirstLetter = animals.map(function(animals) {
//         return animals[0];
//     });
//
// // CORRECT ANSWER(S)
//
//     function allFirstLetters() {
//         let bucket = "";
//         for (let el of arr) {
//             bucket += el.substring(0, 1);
//         }
//         return bucket;
//     }
//
//     const testArrStrings = ['dog', 'cat', 'frog', 'bat'];
//     console.log(allFirstLetters(testArrStrings));
//
//
// //  April 28, 2022
//
// // Write a function that takes in a string and returns that string in alphabetical order.
//
//     function(codeup) {
//         return text.split('').sort().join;
//     };
// }
// codeup();
//
// //  RIGHT ANSWER
//
// function alphabetize(str) {
//     let strArray = str.split('');
//     console.log(strArray)
//     let sortedArray = strASrray.sort()
//     console.log(sortedArray);
//     return sortedArray.join('');
// }
//
// console.log(alphabetize)(str:"codeup");
//
// // May 10, 2022
//
// Warm-Up:
// Write a function that will accept an array of objects and return the object from the array that is the most colorful.
//
//
// // May 11, 2022
//
//     Warm-Up:
// Write a function that will accept a string. It should return an object with the following properties: string, size, containsLetterFromRSTLNE, and isOneWord.
//
//     Ex 1. makeObjectFromString(“tacocat”) -> {
//     string: “tacocat”,
//     size: 7,
//         containsLetterFromRSTLNE: true,
//         isOneWord: true
// };
//
// Ex 2. makeObjectFromString(“John Jacob”) -> {
//     string: “John Jacob”,
//     size: 10,
//         containsLetterFromRSTLNE: false,
//         isOneWord: false
// };
//
// //      May 24, 2022
//
// // DOM Question #4
//
// // When the mouse enters the content area of the 4th div with the class of "question", an alert should pop up
// // that reads "CONGRATULATIONS ON YOUR NEW CRUISE!";
//
//
//
//
//




