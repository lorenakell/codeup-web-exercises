"use strict";

// function firstFunction(name) {
//     return name;
//
//
//
//     // in an arrow function, the above function looks like:
//
//     const firstArrowFunction = name
//
//    // console.log(firstFunction("Miguel"));
//     //console.log(firstFunction("Lorena"));
//     //console.log(firstFunction("Orlando"));
//
//     // Parsing my stuff in a function
//     function parseMyStuff(input) {
//         input = parseFloat(input)
//         return input;
//     };
//
//     var price = parseMyStuff(prompt("How much does this thing cost"));
//     //console.log(price);
//
//
//
//     function isString(maybeString) {
//         return typeof maybeString == "string";
//     }
//
//    // console.log(isString(maybeString))
// }
//
//
// function isNumber(input) {
//     return typeof input === "number";
// }
//
// //console.log(isNumber("4"));
//
// //console.log(isNumber(NaN));
//
// //function myFunction(a, n) {
// //    return typeof
// //};
//
//
// //Anonymous Function
//
// var increment = function(x) {
//     return x + 1;
// }
//
// //console.log(increment(x5));
//
// //Arrow function
//
// const myArrowFunction = (firstName, lastName) => {
//     firstName = firstName.toUpperCase();
//     lastName = lastName.toUpperCase()
//     return firstName + "" + lastName;
// }
//
// //console.log(myArrowFunction("Jay", "Arredondo"));
//
//
// //function scope
//
// let weekDays = 6;
//
// function scopeTest() {
//     let weekDays = 5;
//     console.log(weekDays)
// }
//
// scopeTest();

// anything with curly braces has blocks

// APRIL 22, 2022



let i;
for (i=1; i<=100; i++)
{
    // number divisible by 3 and 5 will
    // always be divisible by 15, print
    // 'FizzBuzz' in place of the number
    if (i%15 == 0)
        console.log("FizzBuzz" + " ");

        // number divisible by 3? print 'Fizz'
    // in place of the number
    else if ((i%3) == 0)
        console.log("Fizz" + " ");

        // number divisible by 5, print 'Buzz'
    // in place of the number
    else if ((i%5) == 0)
        console.log("Buzz" + " ");

    else // print the number
        console.log(i + " ");
};
console.log(`Yay! I completed the warm-up!`)

//  ANSWER

// function fizzBuzz(limit) {
//     if (limit === undefined) {
//         limit = 100;
//     }
//
//     for (let i = 1; i <= limit; i++) {
//         if (i % 15 === 0) {// i % 3 === 0 && i % 5 === 0
//             console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//             console.log("Fizz");
//     } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         };
//     };
// };
//
// fizzBuzz (limit:);
