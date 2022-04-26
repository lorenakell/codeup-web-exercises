(function () {
    "use strict";

    // /**
    //  * TODO:
    //  * Create an object with firstName and lastName properties that are strings
    //  * with your first and last name. Store this object in a variable named
    //  * `person`.
    //  *
    //  * Example:
    //  *  > console.log(person.firstName) // "Rick"
    //  *  > console.log(person.lastName) // "Sanchez"
    //  */

    const person = {};

        person.firstName: "Lorena",
        person.lastName: "Kell"
    };

    console.log(person.firstName)  // shows Lorena
    console.log(person.lastName)   // shows Kell

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */


    person.sayHello = function () {
        return "Hello from " + this.firstName + " " + this.lastName + "!";
    }

    // should show "Hello from Lorena Kell!"

    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    const shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

function discount(amount) {
    let discountAmount;
    if (amount > 200) {
        discountAmount = (amount * 0.12);
        return discountAmount;
    } else if {
        discountAmount = 0;
        return discountAmount;
    }
}

shoppers.forEach(function (shopper) {
    console.log("This shopper's name is " + shopper.name + ".");
    console.log("They owe $" + shopper.amount + ".");
    console.log("Their discount total is $" + discount(shopper.amount).toFixed(2) + ".");
    console.log("After discount , (if they qualified, they owe $" + (shopper.amount - discount(shopper.amount)).toFixed((2));
});


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let title = "";
    let author = "";
    let bookNum = 0;

    do{
        function createBooks (parameters){
            let title = parameters.title;
            let author = poarameters.author;
            console.log("Book #:" + (bookNum + 1) + "Title:" + title + " Author: " + author);
        }

        createBooks(books);
    }

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function(book) {
        console.log("Book #" + ((Number(books.indexOf(book))) + 1));
        console.log(book.title);
        console.log(book.author.firstName + book.author.lastName);
        console.log("---------");
    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
});
