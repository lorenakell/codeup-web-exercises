"use strict";

function firstFunction(name) {
    return name;



    // in an arrow function, the above function looks like:

    const firstArrowFunction = name

   // console.log(firstFunction("Miguel"));
    //console.log(firstFunction("Lorena"));
    //console.log(firstFunction("Orlando"));

    // Parsing my stuff in a function
    function parseMyStuff(input) {
        input = parseFloat(input)
        return input;
    };

    var price = parseMyStuff(prompt("How much does this thing cost"));
    //console.log(price);



    function isString(maybeString) {
        return typeof maybeString == "string";
    }

   // console.log(isString(maybeString))
}


function isNumber(input) {
    return typeof input === "number";
}

//console.log(isNumber("4"));

//console.log(isNumber(NaN));

//function myFunction(a, n) {
//    return typeof
//};


//Anonymous Function

var increment = function(x) {
    return x + 1;
}

//console.log(increment(x5));

//Arrow function

const myArrowFunction = (firstName, lastName) => {
    firstName = firstName.toUpperCase();
    lastName = lastName.toUpperCase()
    return firstName + "" + lastName;
}

//console.log(myArrowFunction("Jay", "Arredondo"));


//function scope

let weekDays = 6;

function scopeTest() {
    let weekDays = 5;
    console.log(weekDays)
}

scopeTest();

// anything with curly braces has blocks

