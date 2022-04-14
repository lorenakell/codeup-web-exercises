"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

let favoriteColor = prompt("What is your favorite color?");
console.log(color);

alert("Awesome! " + favoriteColor + "is my son's favorite color too!");

// Working w/ Data Types, Operators & Variables Exercises - Problem 3.1



let littleMermaid = prompt('How many days did you rent The Little Mermaid?');
let brotherBear = prompt('How many days did you rent Brother Bear?');;
let hercules = prompt('How many days did you rent Hercules?');
let pricePerDay = 3;
let totalPrice;

let totalPrice = alert("Your total for all of the movies is: $ " + ((Number(littleMermaid) * pricePerDay ) + ((Number)brotherBear) * pricePerDay)) + (Number(hercules) * pricePerDay)));

// Working w/ Data Types, Operators & Variables Exercises - Problem 3.2

let googlePay = 400;
let amazonPay = 380;
let facebookPay = 350;

let googleHours = prompt('How many hours did you work for Google?');
let amazonHours = prompt('How many hours did you work for Amazon?');
let facebookHours = prompt('How many hours did you work for Facebook?');

let totalPay;

let totalPay = alert('Your total pay is $ ' + ((Number(googleHours) * googlePay) + ((Number(amazonHours) * amazonPay)) + (Number(facebookHours) * facebookPay)));

// Working w/ Data Types, Operators & Variables Exercises - Problem 3.3

let classNotFull = confirm('Is this class full? Please select OK if yes');
let scheduleNoConflict = confirm('Does this class conflict with your current schedule? If yes, please select OK.');
let enrollStudent = classNotFull && scheduleNoConflict;

// Working w/ Data Types, Operators & Variables Exercises - Problem 3.4

let moreThanTwoItems = true;
let offerIsValid = true;
let isPremiumMember = false;
let offerCanBeApplied = offerIsValid && (moreThanTwoItems || isPremiumMember);


