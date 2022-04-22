"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


function analyzeColor(color) {
    if (color === "blue") {
        return "Blue is the color of the sky!";
    } else if (color === "red") {
        return "Strawberries are red";
    } else if (color === "cyan") {
        return "I don't know anything about cyan";
    } else {
        return "Still trying to come up with something clever for that color 🤔";
    }
}

console.log(analyzeColor("blue"));
console.log(analyzeColor("red"));
console.log(analyzeColor("cyan"));
console.log(analyzeColor("pink"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
//}
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

let aColor = analyzeColor(randomColor);
console.log(aColor);

////        RIGHT ANSWER

//      console.log(analyzeColor(randomeColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

switch(randomColor){
    case "blue":
        alert("The sky is " + randomColor);
        break;
    case "red":
        alert("Strawberries are " + randomColor);
        break;
    case "cyan":
        alert("I don't know anything about " + randomColor);
        break;
    default: 
        alert("Still trying to come up with something clever for that color 🤔");
        break;
}

console.log(randomColor);

////        RIGHT ANSWER

// function analyzeColorSwitch(color) {
//     switch (color) {
//     case "blue":
//      return "Blue is the color of the sky!";
//     case "red":
//      return "Strawberries are red";
//     case "cyan"
//      return "I don't know anything about cyan";
//     default:
//         return "Still trying to come up with something clever for that color 🤔";
//     }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

 let color = prompt("Please provide a color.");
 alert(analyzeColor(color));


//          CORRECT ANSWER

//    let promptVal = prompt("What is your favorite color?").toLowerCase().trim()
//      alert(analyzeColorSwitch(promptVal));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal (luckyNumber, totalAmt) {
    switch (luckyNumber) {
        case: 0:
            let discountAmt = totalAmt;
            alert("You have no discount :(");
            break;
        case: 1:
            let discountAmt = totalAmt;
            alert("You get a 10% discount!");
            break;
        case: 2:
            let discountAmt = totalAmt;
            alert("You get a 25% discount!");
            break;
        case: 3:
            let discountAmt = totalAmt;
            alert("You get a 35% discount!");
            break;
        case: 4:
            let discountAmt = totalAmt;
            alert("You get a 50% discount!");
            break;
        case: 5:
            let discountAmt = totalAmt;
            alert("You get a 100% discount!");
            break;
        default:
            alert("Your lucky number is not valid");
            break;
    }
}


console.log(calculateTotal(0, 100));
console.log(calculateTotal(4, 100));
console.log(calculateTotal(5, 100));


//      CORRECT ANSWER

function calculateTotal(luckyNum, total) {
    switch (luckyNum) {
        case 1:
            return total * .9;  // or total - (total * .1)
        case 2:
            return total * .75;
        case 3:
            return total * .65;
        case 4:
            return total / 2;
        case 5:
            return 0;
        default:
            return total;
    }
}

console.log(calculateTotal(0, 100));
console.log(calculateTotal(4, 100));
console.log(calculateTotal(5, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */


function numberGame(){
    let userVal = parseFloat(prompt("Give me a number"));
    if(isNaN(userVal)) {
        alert("That's not a number...");
    } else {
        alert("Hey, did you know that " + userVal + "is a(n) " + evenOrOdd(userVal) + number
        )
    }   alert("Hey, did you know that " + userVal + "plus 100 is " + plus100(userVal) + "?");
)       alert("Hey, did you know that " + userVal + "is a " + positiveOrNegative(userVal) + number
    )
}

function plus100(num){
    return num + 100;

    function evenOrOdd(num) {
        if (num === 0) {
        } else if (num % 2 === 0) {
            return "even";
        } else {
            return "odd";
        }
    }

playWithMe();