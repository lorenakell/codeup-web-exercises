console.log("FOR_LOOPS START");

// Exercise 2.

function showMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + i * num);
    }
    return "";
}
console.log(showMultiplicationTable(7));

// Exercise 3.

for(let i = 1; i <= 10; i++) {
    let randomNumber = Math.floor((Math.random() * 200) + 20);
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is even");
    } else {
        console.log(randomNumber + " is odd")
    }
}

// Exercise 4.

for (let i = 1; i < 10; i++) {
    let tri = "";
    for (let j = 1; j <= i; j++) {
        tri = tri + i;
    }
    console.log(tri);
}

// Exercise 5.

for (let i = 100; i > 0; i -=5) {
    console.log(i);
}
