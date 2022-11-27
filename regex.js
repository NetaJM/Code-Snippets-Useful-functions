////////////////////////////////////////////////////////////////////////////////////////////

// 1. Pattern for a standalone two-digit number → 

// RegEx Exercise: Find the Time
 
// The time has a format: hours:minutes
// Both hours and minutes has two digits, like 09:00
// Make a regex to find time in the string: Breakfast at 09:00 in the room 123:456
// In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result
 
// The regex should not match 123:456
// /\b\d\d\b/g -> the pattern \b\d\d\b looks for standalone 2-digit numbers
 
let regex = /\b\d\d:\d\d\b/;
 
let str = 'Breakfast at 09:00 in the room 123:456';
let res = str.match(regex);
 
console.log(res);

////////////////////////////////////////////////////////////////////////////////////////////

// 2. Return vowels → 

// Create a function that takes a string and
// returns the number (count) of vowels contained within it.
function countVowels(str) {
    return str.match(/[aeiou]/g).length;
}
console.log(countVowels("Celebration")); // ➞ 5

////////////////////////////////////////////////////////////////////////////////////////////

// 3. Searching for a word (case sensitive) → 

// Create a function that finds the word "bomb" in the given string (not case sensitive)
// If found, return "Duck!!!", otherwise return "There is no bomb, relax.".
// "bomb" may appear in different cases (i.e. uppercase, lowercase, mixed).
function bomb(str) {
    return str.match(/\bbomb\b/gi) ? `Duck!!!` : `There is no bomb, relax.`
}
console.log(bomb("There is a bomb.")); // ➞ "Duck!!!"
console.log(bomb("This goes boom!!!")); // ➞ "There is no bomb, relax."

////////////////////////////////////////////////////////////////////////////////////////////

// 4. Removing all vowels from an input string → 

// Remove Every Vowel from a String
// Create a function that takes a string and returns a new string with all vowels removed.
function removeVowels(str) {
    const regex = /[aeiou]/gi
    return str.replace(regex, '');
}
console.log(removeVowels("We're gonna build a wall!"));
// ➞ "W'r gnn bld  wll!"
console.log(removeVowels("I have never seen a thin person drinking Diet Coke."));
// ➞ " hv nvr sn  thn prsn drnkng Dt Ck."

////////////////////////////////////////////////////////////////////////////////////////////

// 5. Return the index of the first vowel in the string → 

// Return the Index of the First Vowel
// Create a function that returns the index of the first vowel in a string.
// Input will be single words.
// Characters in words will be upper or lower case.
// Input always contains a vowel.
function firstVowel(str) {
    return (str.match(/[aeiou]/i)).index;
}
console.log(firstVowel("apple")); // 0
console.log(firstVowel("hello")); // 1
console.log(firstVowel("STRAWBERRY")); // 3
console.log(firstVowel("pInEaPPLe")); // 1

////////////////////////////////////////////////////////////////////////////////////////////

// 6. Regex that matches only an even number → 

// Even Number
// Write a regular expression that matches only an even number.
// Numbers will be presented as strings.
// \d - digit
// * - zero or more occurrences
// $ - end of the string
 
let regex = /^\d*[02468]$/
 
// "2341" ➞ false
// "132"  ➞ true

////////////////////////////////////////////////////////////////////////////////////////////

// 7. Validate zip code → 

// Valid Zip Code
// Zip codes consist of 5 consecutive digits.
// input - string
// determine whether the input is a valid zip code
// A valid zip code is as follows:
// Must only contain numbers (no non-digits allowed). (\d)
// Must not contain any spaces.
// Must not be greater than 5 digits in length {5}
// (^ $) ->  ^ beginning of str | $ end of str
function isValid(zip) {
    return /^\d{5}$/.test(zip);
    // or
    return zip.match(/^\d{5}$/) === null ? false : true;
}
console.log(isValid("59001")) // ➞ true
console.log(isValid("853a7")) // ➞ false
console.log(isValid("732 32")) // ➞ false
console.log(isValid("393939")) // ➞ false

////////////////////////////////////////////////////////////////////////////////////////////

// 8. Determining of there’s an omnipresent value in each nested array of the input array → 
// Omnipresent Value
// A value is omnipresent if it exists in every subarray inside the main array.
// Example -> [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// 3 exists in every element inside this array, so is omnipresent.
// Create a function that determines whether an input value is omnipresent for a given array.
// Sub-arrays can be any length.
function isOmnipresent(arr, val) {
    // Option 1 ->
    return arr.every(e => e.includes(val));
    // Option 2 (my solution) ->
    let regex = new RegExp(`${val}`, 'g');
    return arr.flat().join('').match(regex).length >= arr.length;
}
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)); // T
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)); // F
console.log(isOmnipresent([[5], [5], [5], [6, 5]], 5)); // T
console.log(isOmnipresent([[5], [5], [5], [6, 5]], 6)); // F

////////////////////////////////////////////////////////////////////////////////////////////

// 9. Transform words into Binary Strings → 
 
// Transforming Words into Binary Strings
// Write a function that transforms all letters from [a, m] to 0
// and letters from [n, z] to 1 in a string
// Conversion should be case insensitive
function convertBinary(str) {
    return str.replace(/[a-m]/gi, 0).replace(/[n-z]/gi, 1)
}
console.log(convertBinary("moon")) // ➞ "0111"
console.log(convertBinary("house")) // ➞ "01110"
console.log(convertBinary("excLAIM")) // ➞ "0100000"
 
////////////////////////////////////////////////////////////////////////////////////////////
 
// 10. Adding Numbers in a String → 
 
// Adding Numbers in a String
// Given a string of numbers separated by a comma and space,
// return the total sum of all the numbers.
// Numbers will always be separated by a comma and space.
// Your function should accept negative numbers.
function addNums(nums) {
    return nums.match(/-?\d*\.{0,1}\d+/g).map(e => Number(e))
        .reduce((a, b) => a + b)
}
console.log(addNums("2, 5, 1, 8, 4")) // ➞ 20
console.log(addNums("1, 2, 3, 4, 5, 6, 7")) // ➞ 28
console.log(addNums("10")) // ➞ 10
 
////////////////////////////////////////////////////////////////////////////////////////////
 
// 11. Return the leftmost number as an int that is in the input str → 
 
// Most Left Digit
// Write a function that takes a string as an argument and
// returns the left most digit in the string
// Each string will have at least two numbers
// Return the result as an integer
function leftDigit(str) {
    return Number(str.match(/[0-9]/).join(''))
    // could also use str.match(/[\d]/)
}
console.log(leftDigit("V3r1ta$")) // ➞ 3
console.log(leftDigit("U//DertHe1nflu3nC3")) // ➞ 1
console.log(leftDigit("J@v@5cR1PT")) // ➞ 5
console.log(leftDigit("TrAdE2W1n95!")) // ➞ 2

////////////////////////////////////////////////////////////////////////////////////////////
 
// 12. Boundary Assertions → 
 
// RegEx: Boundary Assertions I
// Assume a program only reads .js or .jsx files
// Write a function that accepts a file path
// and returns true if it can read the file and false if it can't
// Use a RegEx boundary assertion in your function.
function isJS(path) {
    // Option 1
    return /jsx?$/.test(path)
    // Option 2
    return /js|x\b/.test(path)
}
console.log(isJS("/users/user.jsx")); // T
console.log(isJS("/users/user.js")); // T
console.log(isJS("/users/user.ts")); // F
 
////////////////////////////////////////////////////////////////////////////////////////////

// 13. Does the word start or end with a prefix / suffix → 
 
// Create two functions:
// 1. isPrefix(word, prefix-) - returns true if it begins with the prefix argument.
// 2. isSuffix(word, -suffix) - returns true if it ends with the suffix argument.
// Otherwise return false.
// The prefix and suffix arguments have dashes - in them.
function isPrefix(word, prefix) {
    let regexPrefix = new RegExp (`${prefix.replace('-', '')}`)
    return word.match(regexPrefix) ? true : false  
}
 
function isSuffix(word, suffix) {
    let regexSuffix = new RegExp (`${suffix.replace('-', '')}`)
    return word.match(regexSuffix) ? true : false
}
console.log(isPrefix("automation", "auto-")); //  ➞ true
console.log(isPrefix("retrospect", "sub-")); //  ➞ false
console.log(isSuffix("arachnophobia", "-phobia")); //  ➞ true
console.log(isSuffix("vocation", "-logy")); //  ➞ false

////////////////////////////////////////////////////////////////////////////////////////////

// 14. Replace all digits except the last four with ‘ * ‘ → 
 
// Hiding the Card Number
// Write a function that takes a credit card number
// and only displays the last four characters
// The rest of the card number must be replaced by ************
// Ensure you return a string.
// The length of the string must remain the same as the input.
function cardHide(card) {
    return card.replace(/.(?=.{4,}$)/g, '*')
}
console.log(cardHide("1234123456785678")) // ➞ "************5678"
console.log(cardHide("8754456321113213")) // ➞ "************3213"
console.log(cardHide("35123413355523")) // ➞ "**********5523"
 
////////////////////////////////////////////////////////////////////////////////////////////
 
// 15. Join two Strings with one separator between them → 
 
// Join Two Portions of a Path
// Write a function that receives two portions of a path and joins them
// The portions will be joined with the "/" separator
// There could be only one separator and if it is not present it should be added.
// Try not to solve this challenge using only if-else conditions.
 
function joinPath(portion1, portion2) {
// Option 1 (regex) ->
return `${portion1.replace('/','')}/${portion2.replace('/','')}`;
 
// Option 2 (my solution) ->
return ([...portion1].filter(e => e !== '/').concat('/').concat([...portion2]
    .filter(e => e !== '/'))).join('')
}
console.log(joinPath("portion1", "portion2")) // ➞ "portion1/portion2"
console.log(joinPath("portion1/", "portion2")) // ➞ "portion1/portion2"
console.log(joinPath("portion1", "/portion2")) // ➞ "portion1/portion2"
console.log(joinPath("portion1/", "/portion2")) // ➞ "portion1/portion2"

////////////////////////////////////////////////////////////////////////////////////////////
 
// 16. Test for an empty String → 
 
// RegEx Exercise: An empty string
// Use a regular expression to test for an empty string.
// instead of - "".length === 0 ➞ true
const REGEXP = /^$/
 
console.log(REGEXP.test("")) // ➞ true
console.log(REGEXP.test("juno")) // ➞ false
 
////////////////////////////////////////////////////////////////////////////////////////////
 
// 17. Find number of digits in a Number without using Strings → 
 
// Find Number of Digits in Number
// Create a function that will return an integer number
// corresponding to the amount of digits in the given integer num.
// Try to solve this challenge without using strings
function num_of_digits(num) {
 
    return `${num}`.match(/\d/g).length;
 
}
console.log(num_of_digits(1000)) // ➞ 4
console.log(num_of_digits(12)) // ➞ 2
console.log(num_of_digits(1305981031)) // ➞ 10
console.log(num_of_digits(0)) // ➞ 1
 
////////////////////////////////////////////////////////////////////////////////////////////
 
// 18. Evaluating if a number is a repdigit →
 
// Is the Number a Repdigit
// Repdigit -> a positive number composed out of the same digit.
// Create a function that takes an integer and
// returns whether it's a repdigit or not
// The number 0 should return true
function isRepdigit(num) {
 
return /^(\d)\1*$/.test(num);
 
}
console.log(isRepdigit(66)) // ➞ true
console.log(isRepdigit(0)) // ➞ true
console.log(isRepdigit(47)) // ➞ false
console.log(isRepdigit(-11)) // ➞ false
 
////////////////////////////////////////////////////////////////////////////////////////////
 
// 19. Moving the UpperCase letters to the front of the String → 
 
// Create a function that moves all capital letters to the front of a word
function capToFront(s) {
 
  return s.match(/[A-Z]/g).concat(s.match(/[a-z]/g)).join('')
}
console.log(capToFront("hApPy")) // ➞ "APhpy"
console.log(capToFront("moveMENT")) // ➞ "MENTmove"
console.log(capToFront("shOrtCAKE")) // ➞ "OCAKEshrt"
 
////////////////////////////////////////////////////////////////////////////////////////////

 
