// 1. what is constant
// As well as variables, you can declare constants. These are like variables, except that:

// you must initialize them when you declare them
// you can't assign them a new value after you've initialized them.

// 2.1.Note that although a constant in JavaScript must always name the same value, you can change the content of the value that it names. 
// This isn't a useful distinction for simple types like numbers or booleans, but consider an object:
const bird = { species: "Kestrel" };
console.log(bird.species); // "Kestrel"

// 2.2.You can update, add, or remove properties of an object declared using const, because even though the content of the object has changed, 
// the constant is still pointing to the same object:
bird.species = "Striated Caracara";
console.log(bird.species); // "Striated Caracara"

// 3.When to use const and when to use let
// If you can't do as much with const as you can with let, why would you prefer to use it rather than let? In fact const is very useful. If you use const to name a value, it tells anyone looking at your code that this name will never be assigned to a different value. Any time they see this name, they will know what it refers to.

// In this course, we adopt the following principle about when to use let and when to use const:

// Use const when you can, and use let when you have to.

// This means that if you can initialize a variable when you declare it, and don't need to reassign it later, make it a constant.