
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. Creating an object from 2 arrays

// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object
function createAnObjFrom2arr(arr1, arr2) {
  let result = {};
  arr1.forEach((key, val) => result[key] = arr2[val]);
  return result;
}
let array1 = [1, 2, 3, 4];
let array2 = ['Juno', 'Jungin', 'Juknuk', 'Jukizon'];
console.log(secondOption(array1, array2));
// output -> {1: 'Juno', 2: 'Jungin', 3: 'Juknuk', 4: 'Jukizon'}
// Second Option ->
function thirdOption(arr1, arr2) {
  return arr1.reduce((acc, cur, i) =>
      ({ ...acc, [cur]: arr2[i] }), {});
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Extract and return an arrays of all the keys of an Object 

function returnObjectKeys(obj) {   
  // option 1.
  return Object.keys(obj);
  // or (option 2.)
  const res = [];
  for (let key in obj) {
      res.push(key)
  }
  return res;  
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Sum Object Values

function sumOfValues(obj) {
  return Object.values(obj).reduce((sum, cur) => sum + cur, 0);
};
let obj1 = {
   a: 10,
   b: 40,
   c: 25,
   d: 20,
   e: 5
};
console.log(sumOfValues(obj1)); // output -> 100

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4.Remove property from an Object 

// It should return an object with all original object properties
// except for the property with key 'b'
function removeProperty(obj) {
  // option 1.
  delete obj['b'];
  return obj;
  // option 2.
  const { b, ...rest } = obj;
return rest;
}
let obj1 = {
  a: 1123,
  aa: 2334,
  b: 45656,
  aaa: 3324435
};
console.log(removeProperty(obj1));
// Output -> {a: 1123, aa: 2334, aaa: 3324435}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Protecting an object against new entries

// The police send you the electronic statement again for you to sign,
// this time you are able to sign it and, to speed up bureaucracy, you try to sign for your spouse as well
// Unfortunately, the document is still protected against new entries…
// The function you are given already contains some code that you should not change or remove
// Also, don't use a return statement, it is already included
// Your task is - given an object, prevent new properties from being added to that object,
// but you should still be able to change the value of the existing properties
function signYourName(obj) {
  Object.seal(obj);
  obj.yourSignature = "Whatever";
  obj.spouseSignature = "Nice Try"
  return obj;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. Multiple all object’s values by a certain number

// Multiply all object values by a certain number
// Input -> object and a number
// Multiply all values of the obj by the input number
// Return the resulting object
function multiplyValues(obj, num) {
  for (let val in obj) {
      obj[val] *= num;
  }
  return obj;
}
// or
function multiplyValues2(obj, num) {
  return Object.entries(obj).reduce((acc, [key, val]) => {
      return { ...acc, [key]: val * num };
  }, {});
}

let obj1 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
}
console.log(multiplyValues(obj1, 5));
// output -> {a: 5, b: 10, c: 15, d: 20, e: 25}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7. Swapping Object’s keys and values →

// Swap the Javascript object's key with its values and return the resulting object
function swapEm(obj) {
  let res = Object.entries(obj).map(
      ([key, value]) => [value, key]
  );
  return Object.fromEntries(res);
  // or (i don't really like this) →
  // return Object.entries(obj).reduce((acc, [key, val]) => {
  //     return { ...acc, [val]: key };
  //  }, {});
}

let theObj = {
  'Jun': 1,
  'Junin': 2,
  'Jaknuz': 3,
  'Jakjuk': 4,
  'Shvung': 5
}
console.log(swapEm(theObj));
// output -> {1: 'Jun', 2: 'Junin', 3: 'Jaknuz', 4: 'Jakjuk', 5: 'Shvung'}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8. Adding property to each object in an array of objects  → 

function objectFunc(arr, str) {
  arr.forEach((element) => {
      element.continent = str;
  })
  return arr;
  // or using map
  // arr.map((element) => ({
  //     ...element,
  //     continent: str
  // }));
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9. Returning a value based on a condition without using conditionals → 

// Create a function that takes a number as an argument and returns the appropriate error message.
// Do this without using the switch or if statements.
// The input error will be 1 to 5 -written in the object;
// For any other value, return 101 (you can use an if statement here).
function errorMsg(n) {
    const obj = {
        1: "Check the fan: e1",
        2: "Emergency stop: e2",
        3: "Pump Error: e3",
        4: "c: e4",
        5: "Temperature Sensor Error: e5"
    }
    return obj[n] || 101;
}
console.log(errorMsg(4)); // ➞ "Check the fan: e1"
console.log(errorMsg(7)); // ➞ 101

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 10. Calculating Differences between an obj value and outside value → 
 
// Burglary Series: Calculate Difference
// The insurance guy calls again and apologizes.
// They found another policy made by your spouse, but this one is limited to cover a particular maximum in losses
// You send a bill to your spouse for the difference you lost.
// Given an object of the stolen items and a limit,
// return the difference between the total value of those items and the limit of the policy
// The object will always contain items (no empty objects).
// The sum of the items will always be greater than the limit.
function calculateDifference(obj, limit) {
    return Object.values(obj).reduce((a, b) => a + b) - limit;
}
console.log(calculateDifference({ "baseball bat": 20 }, 5)); // ➞ 15
console.log(calculateDifference({ skate: 10, painting: 20 }, 19)); // ➞ 11
console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400)) // ➞ 1


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 11. Replace word with the matching symbol in a sentence → 

// Emotify the Sentence
// Create a function that changes specific words into emoticons.
// Given a sentence as a string,
// replace the words smile, grin, sad and mad with their corresponding emoticons.
// Try to solve this without using conditional statements like if/else or switch.
// smile -> :D | grin -> :) | sad -> :( | mad -> :P |
function emotify(str) {
    let [one, two, mood] = str.split(' ');
    const obj = { 'smile': ':D', 'grin': ':)', 'sad': ':(', 'mad': ':P' }
    return `Make me ${obj[mood]}`
}
console.log(emotify("Make me smile")); // ➞ "Make me :D"
console.log(emotify("Make me grin")); // ➞ "Make me :)"
console.log(emotify("Make me sad")); // ➞ "Make me :("


///////////////////////////////////////////////////////////

// 12. Sum values of all object’s values (nested inside an array) → 

// Given an array of scrabble tiles, create a function that
// outputs the maximum possible score a player can achieve by summing up
// the total number of points for all the tiles in their hand.
// Each hand contains 7 scrabble tiles.
// Each tile is represented as an object with two keys: tile and score.
// * Example
// [
//     { tile: "N", score: 1 },
//     { tile: "K", score: 5 },
//     { tile: "Z", score: 10 },
//     { tile: "X", score: 8 },
//     { tile: "D", score: 2 },
//     { tile: "A", score: 1 },
//     { tile: "E", score: 1 }
//   ]
// The players maximumScore from playing all these tiles would be -  
// 1 + 5 + 10 + 8 + 2 + 1 + 1, or 28.
function maximumScore(tileHand) {
    return (tileHand.reduce((p, c) => p + c.score, 0));
    // My solution ->
    let obj = { ...tileHand }
    let res = 0;
    for (let score in obj) {
        res += obj[score].score;
    }
    return res;
}
console.log(maximumScore([
    { tile: "B", score: 2 },
    { tile: "V", score: 4 },
    { tile: "F", score: 4 },
    { tile: "U", score: 1 },
    { tile: "D", score: 2 },
    { tile: "O", score: 1 },
    { tile: "U", score: 1 }
])); // ➞ 15


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 13. Smallest value in the object values → 

// Printer Levels
// Given an object of how many more pages each ink color can print,
// output the maximum number of pages the printer can print
// before any of the colors run out.
function inkLevels(inks) {
    // First option
    return Math.min(...Object.values(inks))
    // My solution
    return Object.values(inks).reduce((a, b) => Math.min(a, b))
}
console.log(inkLevels({
    "cyan": 23,
    "magenta": 12,
    "yellow": 10
})) // ➞ 10
console.log(inkLevels({
    "cyan": 432,
    "magenta": 543,
    "yellow": 777
})) // ➞ 432
console.log(inkLevels({
    "cyan": 700,
    "magenta": 700,
    "yellow": 0
})) // ➞ 0

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 14. Insert to the object the new key value property that is passed → 

// Given three arguments ⁠— an object obj of the stolen items, the pets name and a value
// return an object with that name and value in it (as key-value pairs).
// The value argument will be a number.
function addName(obj, name, value) {
    // Option 1 ->
    return {...obj, [name]: value}
    // Option 2 (my solution) ->
    obj[name] = value;
    return obj
}
console.log(addName({}, "Brutus", 300)); // ➞ { Brutus: 300 }
console.log(addName({ piano: 500 }, "Brutus", 400));
// ➞ { piano: 500, Brutus: 400 }
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440));
//  ➞ { piano: 500, stereo: 300, Caligula: 440 }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 15. Converting objects into an Array with sub-arrays → 

// Converting Objects to Arrays
// Write a function that converts an object into an array,
// where each element represents a key-value pair in the form of an array.
// Return an empty array if the object is empty.
function toArray(obj) {
    // Solution 1 ->
    return Object.entries(obj);
    // Solution 2 (my solution) ->
    return (Object.keys(obj)).map((e, i) => [e, (Object.values(obj))[i]])   

    // Step by step solution ->
    // let keys = Object.keys(obj)
    // let values = Object.values(obj)
    // return keys.map((e, i) => [e, values[i]])
}
console.log(toArray({ a: 1, b: 2 })) // ➞ [["a", 1], ["b", 2]]
console.log(toArray({ juno: 15, juni: 12 })) // ➞ [["shrimp", 15], ["tots", 12]]
console.log(toArray({})) // ➞ []

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 16.  Returning 2 sorted separated arrays of the objects keys and values  → 

// Return the Objects Keys and Values
// Create a function that takes an object
// and returns the keys and values as separate arrays
// Return the keys sorted alphabetically,
// and their corresponding values in the same order.
function keysAndValues(obj) {
    return [(Object.keys(obj)).sort(), Object.values(obj)]
}
console.log(keysAndValues({ b: "Apple", a: "Microsoft", c: "Google" }))
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }))
// // ➞ [["key1", "key2", "key3"], [true, false, undefined]]
console.log(keysAndValues({ a: 1, b: 2, c: 3 }))
// // ➞ [["a", "b", "c"], [1, 2, 3]]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 17. Convert key and values in an object to Array → 

// Convert Key, Values in an Object to Array
// Write a function that converts an object
// into an array of keys and values.
function objectToArray(obj) {
    return Object.entries(obj)
}
console.log(objectToArray({ D: 1, B: 2, C: 3 }))
// ➞ [["D", 1], ["B", 2], ["C", 3]]  
console.log(objectToArray({ likes: 2, dislikes: 3, followers: 10 }))
// ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 18. Return true if the input value is an Object → 

// Create a function to check
// whether the given parameter is an Object or not
// Inputs may be null, primitive wrapper types, dates
function isObject(value) {
// Solution 1
return value instanceof Object
// Solution 2
return value === Object(value);
}
console.log(isObject(function add(x,y) {return x + y})) // ➞ true
console.log(isObject(new RegExp('^[a-zA-Z0-9]+$', 'g'))) // ➞ true
console.log(isObject(null)) // ➞ false
console.log(isObject("")) // ➞ false

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

