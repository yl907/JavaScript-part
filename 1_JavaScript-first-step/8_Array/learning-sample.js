// 1.Creating arrays
// Arrays consist of square brackets and items that are separated by commas.

// Suppose we want to store a shopping list in an array:
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping);
const sequence = [1, 1, 2, 3, 5, 8, 13];
const random = ["tree", 795, [0, 1, 2]];

// 2.Array is an object.
// You can find out the length of an array (how many items are in it) in exactly the same way as you find out the length (in characters) of a string — by using the length property.
shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping.length); // 5

// 3.Accessing and modifying array items(by index)
// Items in an array are numbered, starting from zero. This number is called the item's index. So the first item has index 0, the second has index 1, and so on. You can access individual items in the array using bracket notation and supplying the item's index, in the same way that you accessed the letters in a string.
// 3.1.access(read)
shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping[0]); // returns "bread"
// 3.2.modify
shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
shopping[0] = "tahini";
console.log(shopping); // shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]

// 4.Adding items--push(), unshift()
// 4.1.To add one or more items to the end of an array we can use push(). Note that you need to include one or more items that you want to add to the end of your array.
let cities = ["Manchester", "Liverpool"];
cities.push("Cardiff");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push("Bradford", "Brighton");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]

// 4.2.To add an item to the start of the array, use unshift():
cities = ["Manchester", "Liverpool"];
cities.unshift("Edinburgh");
console.log(cities); // [ "Edinburgh", "Manchester", "Liverpool" ]

// 5.Removing items
// 5.1.To remove the last item from the array, use pop().
cities = ["Manchester", "Liverpool"];
cities.pop();
console.log(cities); // [ "Manchester" ]
// The pop() method returns the item that was removed. To save that item in a new variable, you could do this:
cities = ["Manchester", "Liverpool"];
const removedCity = cities.pop();
console.log(removedCity); // "Liverpool"

// 5.2.To remove the first item from an array, use shift():
cities = ["Manchester", "Liverpool"];
cities.shift();
console.log(cities); // [ "Liverpool" ]

// 5.3.remove specific item with index
// If you know the index of an item, you can remove it from the array using splice():
cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities); // [ "Manchester", "Edinburgh", "Carlisle" ]

// In this call to splice(), the first argument says where to start removing items, and the second argument says how many items should be removed. So you can remove more than one item:
cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 2);
}
console.log(cities); // [ "Manchester", "Carlisle" ]


// 6.Accessing every item.
// 6.1.Very often you will want to access every item in the array. You can do this using the for...of statement:
const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds) {
  console.log(bird);
}
// 6.2.Sometimes you will want to do the same thing(same function) to each item in an array, leaving you with an array containing the changed items. You can do this using map(). The code below takes an array of numbers and doubles each number:
function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]
// We give a function to the map(), and map() calls the function once for each item in the array, passing in the item. It then adds the return value from each function call to a new array, and finally returns the new array.


// 6.3.Sometimes you'll want to create a new array containing only the items in the original array that match some test. You can do that using filter(). The code below takes an array of strings and returns an array containing just the strings that are greater than 8 characters long:
function isLong(city) {
  return city.length > 8;
}
cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter(isLong);
console.log(longer); // [ "Liverpool", "Edinburgh" ]
// Like map(), we give a function to the filter() method, and filter() calls this function for every item in the array, passing in the item. If the function returns true, then the item is added to a new array. Finally it returns the new array.


// 7.Converting between strings and arrays
// 7.1.Convert string into array:
// Often you'll be presented with some raw data contained in a big long string, and you might want to separate the useful items out into a more useful form and then do things to them, like display them in a data table. To do this, we can use the split() method. In its simplest form, this takes a single parameter, the character you want to separate the string at, and returns the substrings between the separator as items in an array.
const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";

cities = data.split(",");
cities;

cities.length;
cities[0]; // the first item in the array
cities[1]; // the second item in the array
cities[cities.length - 1]; // the last item in the array

// 7.2.Convert array into string:
// You can also go the opposite way using the join() method. Try the following:
const commaSeparated = cities.join(",");
commaSeparated;

// 7.3.Convert array into string(with default separator -- comma)
// Another way of converting an array to a string is to use the toString() method. toString() is arguably simpler than join() as it doesn't take a parameter, but more limiting. With join() you can specify different separators, whereas toString() always uses a comma. (Try running Step 4 with a different character than a comma.)
const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
dogNames.toString(); // Rocket,Flash,Bella,Slugger
