// 1.Only one data type of number in JavaScript.
// The second bit of good news is that unlike some other programming languages, JavaScript only has one data type for numbers, both integers and decimals — you guessed it, Number. This means that whatever type of numbers you are dealing with in JavaScript, you handle them in exactly the same way.

const myInt = 5;
const myFloat = 6.667;
myInt;
myFloat;

// both result are "number"
typeof myInt;
typeof myFloat;


// 2.Converting to number data types.
// Sometimes you might end up with a number that is stored as a string type, which makes it difficult to perform calculations with it. This most commonly happens when data is entered into a form input, and the input type is text. There is a way to solve this problem — passing the string value into the Number() constructor to return a number version of the same value.
let myNumber = "74";
myNumber = Number(myNumber) + 3;

