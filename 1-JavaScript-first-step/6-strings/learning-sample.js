// 1.Embedding JavaScript
// Inside a template literal, you can wrap JavaScript variables or expressions inside ${ }, and the result will be included in the string:
let name = "Chris";
let greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"

// 2.concatenation
// 2.1.concatenation in context
// You can use the same technique to join together two variables:
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${name}${two}, nice to see you!`;
console.log(joined); // "Hello, how are you?"

// 2.2.concatenation using "+"
greeting = "Hello";
name = "Chris";
let result = greeting + ", " + name;
console.log(result); // "Hello, Chris"

// 2.3.An advice
// However, template literals usually give you more readable code:
greeting = "Hello";
name = "Chris";
console.log(`${greeting}, ${name}`); // "Hello, Chris"

// 2.4.Including expressions in strings
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."

// 3.1.Multiline strings
// Template literals respect the line breaks in the source code, so you can write strings that span multiple lines like this:
let newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);
/*
One day you finally knew
what you had to do, and began,
*/

// 3.2.To have the equivalent output using a normal string you'd have to include line break characters (\n) in the string:
newline = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline);
/*
One day you finally knew
what you had to do, and began,
*/


// 4.Including quotes in strings
// Since we use quotes to indicate the start and end of strings, how can we include actual quotes in strings? We know that this won't work:

// 4.1.One common option is to use one of the other characters to declare the string:
const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;
// 4.2.Another option is to escape the problem quotation mark. Escaping characters means that we do something to them to make sure they are recognized as text, not part of the code. In JavaScript, we do this by putting a backslash just before the character. Try this:
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);


// 5.Number and String
// If you have a numeric variable that you want to convert to a string, or a string variable that you want to convert to a number, you can use the following two constructs:

// 5.1.The Number() function converts anything passed to it into a number, if it can. Try the following:
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);// number
// 5.2.Conversely, the String() function converts its argument to a string. Try this:
const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);// string

