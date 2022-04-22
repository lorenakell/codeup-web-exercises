console.log("WHILE LOOPS START");

// Exercise 2

let x = 2;

while (x <= 65536) {
    console.log(x);
    x = 2 * x;
}

// DO WHILE LOOP - question 1.

let allCones = Math.floor(Math.random()*50) + 50;
console.log("I have " + allCones + " number of cones to sell everybody!");
let conesOrdered;
do {
    conesOrdered = Math.floor(Math.random() * 5) +1;
    if (conesOrdered > allCones) {
        console.log("I Cannot sell you " + conesOrdered + " cones I only have " + allCones);
        continue;
    } else {
        allCones = allCones - conesOrdered;
        console.log(conesOrdered + " cone(s) sold with " + allCones + " remaining");
    }
} while (allCones !== 0);
console.log("Yay! I sold them all!");
