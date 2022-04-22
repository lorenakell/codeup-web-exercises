console.log("BREAK_AND_CONTINUE START");

//Exercise 2 & 3

let promptAnswer;
do {
    promptAnswer = prompt("Please enter an odd number between 0 and 50");

    if(promptAnswer < 50 && promptAnswer > 1 && promptAnswer % 2 !== 0) {
        break;
    }
} while (true);
for (let i = 1; i < 50; i +=2) {
    if (i == promptAnswer) {
        console.log("Yikes! Skipping number: " + i);
        continue;
    } else {
        console.log("Here is an odd number: " + i)
    }
}
