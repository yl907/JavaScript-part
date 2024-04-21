// 1.Strings as objects(every string is an object)
// Most things are objects in JavaScript. When you create a string, for example by using
const string = "This is my string";
// your variable becomes a string object instance, and as a result has a large number of properties and methods available to it. You can see this if you go to the String object page and look down the list on the side of the page!

// 1.1.length
const browserType = "mozilla";
browserType.length;

// 1.2.Retrieving a specific string character(by index)
// On a related note, you can return any character inside a string by using square bracket notation
browserType[0];
browserType[browserType.length - 1];

// 2.Testing if a string contains a substring
// 2.1.Sometimes you'll want to find if a smaller string is present inside a larger one (we generally say if a substring is present inside a string). This can be done using the includes() method, which takes a single parameter — the substring you want to search for.

// It returns true if the string contains the substring, and false otherwise.
browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}

// Often you'll want to know if a string starts or ends with a particular substring. This is a common enough need that there are two special methods for this: startsWith() and endsWith():
// 2.2.startsWith()
browserType = "mozilla";

if (browserType.startsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}

// 2.3.endsWith()
browserType = "mozilla";

if (browserType.endsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}


// 3.find index of substring through the substring content.(reversely, of course you can find string content by index.)
// 3.1.first occurrence of substring.
// You can find the position of a substring inside a larger string using the indexOf() method. This method takes two parameters – the "substring" that you want to search for, and an optional parameter that specifies the "starting point" of the search.
// If the string contains the substring, indexOf() returns the index of the first occurrence of the substring. If the string does not contain the substring, indexOf() returns -1.
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20

console.log(tagline.indexOf("x")); // -1

// 3.2.subsequent substring.
// So now that you know how to find the first occurrence of a substring, how do you go about finding subsequent occurrences? You can do that by passing in a value that's greater than the index of the previous occurrence as the second parameter to the method.
const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35

// 3.3.Extracting a substring from a string("slice" is also a very important thing)
// You can extract a substring from a string using the slice() method. You pass it:
// * the index at which to start extracting
// * the index at which to stop extracting. This is exclusive, meaning that the character at this index is not included in the extracted substring.
browserType = "mozilla";
console.log(browserType.slice(1, 4)); // "ozi"

// 3.4.If you know that you want to extract all of the remaining characters in a string after a certain character, you don't have to include the second parameter. Instead, you only need to include the character position from where you want to extract the remaining characters in a string. Try the following:
browserType.slice(2); // "zilla"


// 4.Changing case
// The string methods toLowerCase() and toUpperCase() take a string and convert all the characters to lower- or uppercase, respectively. This can be useful for example if you want to normalize all user-entered data before storing it in a database.

// Let's try entering the following lines to see what happens:
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase()); // my name is mud
console.log(radData.toUpperCase()); // MY NAME IS MUD


// 5.Updating parts of a string
// You can replace one substring inside a string with another substring using the replace() method.

// In this example, we're providing two parameters — the string we want to replace, and the string we want to replace it with:
browserType = "mozilla";
const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"

// Note that replace(), like many string methods, doesn't change the string it was called on, but returns a new string. If you want to update the original browserType variable, you would have to do something like this:
browserType = "mozilla";
browserType = browserType.replace("moz", "van");

console.log(browserType); // "vanilla"

// Be aware that replace() in this form only changes the first occurrence of the substring. If you want to change all occurrences, you can use replaceAll():
let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote); // "To code or not to code"