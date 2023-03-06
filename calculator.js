
console.log("\nWelcome to the FINS2618 Calculator!")
console.log("Here's a guide to what we have in store:\n")

console.log("Section: Short-Term Debt")
console.log("   1. Opportunity Cost")
console.log("   2. Price (Simple Interest)")
console.log("   3. Rate of Return / Yield\n") // remember to remove \n until it's the last one
// or find a better way to print out the whole guide...

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// make sure that it is the correct number
readline.question('Which formula do you need to use? ', name => {
    console.log(`Preparing to load formula ${name}!`);
    readline.close();
});

