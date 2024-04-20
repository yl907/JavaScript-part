// 1.1.Optional parameters
// Sometimes parameters are optional — you don't have to specify them. If you don't, the function will generally adopt some kind of default behavior. As an example, the array join() function's parameter is optional:
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'
// If no parameter is included to specify a joining/delimiting character, a comma is used by default.

// 1.2.Default parameters
// If you're writing a function and want to support optional parameters, you can specify default values by adding = after the name of the parameter, followed by the default value:
function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

hello("Ari"); // Hello Ari!
hello(); // Hello Chris!


// 2.Anonymous functions and arrow functions
// So far we have just created a function like so:
function myFunction() {
  alert("hello");
}
// But you can also create a function that doesn't have a name:

// 2.1.Anonymous functions standard form.
(function () {
  alert("hello");
});
// This is called an anonymous function, because it has no name. You'll often see anonymous functions when a function expects to receive another function as a parameter. In this case the function parameter is often passed as an anonymous function.
// Note: This form of creating a function is also known as function expression. Unlike function declaration, function expressions are not hoisted.

// 2.2.Anonymous function example.
// normal function
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}
textBox.addEventListener("keydown", logKey);

// change into anonymous function
// Instead of defining a separate logKey() function, you can pass an anonymous function into addEventListener():
textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});

// 2.3.Arrow functions
// If you pass an anonymous function like this, there's an alternative form you can use, called an arrow function. Instead of function(event), you write (event) =>:
textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});

// If the function only takes one parameter, you can omit the parentheses around the parameter:
textBox.addEventListener("keydown", event => {
  console.log(`You pressed "${event.key}".`);
});

// Finally, if your function contains only one line that's a return statement, you can also omit the braces and the return keyword, and implicitly return the expression. In the following example we're using the map() method of Array to double every value in the original array:
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]
