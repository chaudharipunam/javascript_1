const prompt = require("prompt-sync")();
let n= prompt("Enter num: ")

if (n % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}
