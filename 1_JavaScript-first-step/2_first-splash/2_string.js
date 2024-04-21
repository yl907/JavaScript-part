// 1.Text strings
// You can also declare strings using backticks (`). Strings declared like this are called template literals and have some special properties. 
// In particular, you can embed other variables or even expressions in them:
// 1.1.normal(double quote -- "" or single quote -- '')
const name = "Mahalia";
// 1.2.template literal(backticks)
const greeting = `Hello ${name}`;

// 2.Loops
// One part of the above code that we need to take a more detailed look at is the (for...of) loop.
const fruits = ["apples", "bananas", "cherries"];
for (const fruit of fruits) {
  console.log(fruit);
}
