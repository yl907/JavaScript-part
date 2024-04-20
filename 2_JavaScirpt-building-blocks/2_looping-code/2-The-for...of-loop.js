// 1.The basic tool for looping through a collection is the for...of loop:
let cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}


// 2.You can use map() to do something to each item in a collection and create a new collection containing the changed items:
function toUpper(string) {
  return string.toUpperCase();
}

cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);  // [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
// Here we pass a function into cats.map(), and map() calls the function once for each item in the array, passing in the item. It then adds the return value from each function call to a new array, and finally returns the new array. In this case the function we provide converts the item to uppercase, so the resulting array contains all our cats in uppercase:
[ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]


// 3.You can use filter() to test each item in a collection, and create a new collection containing only items that match:
function lCat(cat) {
  return cat.startsWith("L");
}

cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);

console.log(filtered);  // [ "Leopard", "Lion" ]


// 4.The standard for loop
// 4.1.standard form.
// In the "drawing circles" example above, you don't have a collection of items to loop through: you really just want to run the same code 100 times. In a case like that, you should use the for loop. This has the following syntax:
for (initializer; condition; final-expression) {
  // code to run
}

// 4.2.an example.
const results = document.querySelector("#results");

function calculate() {
    for (let i = 1; i < 10; i++) {
      const newResult = `${i} x ${i} = ${i * i}`;
      results.textContent += `${newResult}\n`;
    }
    results.textContent += "\nFinished!";
  }
  
  const calculateBtn = document.querySelector("#calculate");
  const clearBtn = document.querySelector("#clear");
  
  calculateBtn.addEventListener("click", calculate);
  clearBtn.addEventListener("click", () => (results.textContent = ""));


// 5."for...of" VS "for()"
// Let's look again at our for...of example above:s
cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
// We could rewrite that code like this:
cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}

// 5.1.for() loop is important in some case
// in this case, we want the loop to be different on the final iteration.
cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    // We are at the end of the array
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."


// 6.Exiting loops with break
// If you want to exit a loop before all the iterations have been completed, you can use the break statement. We already met this in the previous article when we looked at switch statements — when a case is met in a switch statement that matches the input expression, the break statement immediately exits the switch statement and moves on to the code after it.

// Say we wanted to search through an array of contacts and telephone numbers and return just the number we wanted to find? First, some simple HTML — a text <input> allowing us to enter a name to search for, a <button> element to submit a search, and a <p> element to display the results in:

// <label for="search">Search by contact name: </label>
// <input id="search" type="text" />
// <button>Search</button>
// <p></p>

// Now on to the JavaScript:
const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const searchName = input.value.toLowerCase();
  input.value = "";
  input.focus();
  para.textContent = "";
  for (const contact of contacts) {
    const splitContact = contact.split(":");
    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
      break;
    }
  }
  if (para.textContent === "") {
    para.textContent = "Contact not found.";
  }
});


// 7.Skipping iterations with continue
// The continue statement works similarly to break, but instead of breaking out of the loop entirely, it skips to the next iteration of the loop. Let's look at another example that takes a number as an input, and returns only the numbers that are squares of integers (whole numbers).

// HMTL
/* <label for="number">Enter number: </label>
<input id="number" type="number" />
<button>Generate integer squares</button>

<p>Output:</p> */

// The JavaScript is mostly the same too, although the loop itself is a bit different:
para = document.querySelector("p");
input = document.querySelector("input");
btn = document.querySelector("button");

btn.addEventListener("click", () => {
  para.textContent = "Output: ";
  const num = input.value;
  input.value = "";
  input.focus();
  for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }
    para.textContent += `${i} `;
  }
});


// 8.while and do...while
// 8.1.for is not the only type of loop available in JavaScript. There are actually many others and, while you don't need to understand all of these now, it is worth having a look at the structure of a couple of others so that you can recognize the same features at work in a slightly different way.

// First, let's have a look at the while loop. This loop's syntax looks like so:
initializer
while (condition) {
  // code to run

  final-expression
}

// an example of while()
cats = ["Pete", "Biggles", "Jasmine"];

myFavoriteCats = "My cats are called ";

let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."

// 8.2.standard structure of do...while
initializer
do {
  // code to run

  final-expression
} while (condition)

// The main difference between a do...while loop and a while loop is that the code inside a do...while loop is always executed at least once.
// an example of do...while
cats = ["Pete", "Biggles", "Jasmine"];

myFavoriteCats = "My cats are called ";

i = 0;

do {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
} while (i < cats.length);

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."
