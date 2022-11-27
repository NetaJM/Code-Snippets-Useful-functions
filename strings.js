////////////////////////////////////////////////////////////////////////////////////////////

// 1. Filtering out lowerCase letters & returning that word → 

// Filter out lowerCase letters & return the word
// the word will be spread out amongst the random letters,
function detectWord(str) {
    let lowerCase = /[a-z]/;
    let arr = str.split('').filter(char => char.match(lowerCase));
    return arr.join('');
}
console.log(detectWord("UcUNFYGaFYFYGtNUH")) // cat

////////////////////////////////////////////////////////////////////////////////////////////

// 2. Finding how many times a certain word appears in a string → 

function potatoes(str) {
    let regex = /potato/g;
    return str.match(regex).length;
 
// Other Options -->
// 1.
const potatoes = s => s.match(/potato/g).length;
 
// 2.
var arr = str.split("potato")
    return arr.length-1
 
}
// console.log(potatoes("potatopotato")); // 2
// console.log(potatoes("potatoapple")); // 1
// console.log(potatoes("potatoapplepotatopotato")) // 3

////////////////////////////////////////////////////////////////////////////////////////////

// 3. Count instances of a character in a string → 

// Count Instances of a Character in a String
// Create a function that takes two strings as arguments and
// returns the number of times the first string (the single character) is found in the second string
// output must be case-sensitive;
 
function charCount(myChar, str) {
    // Option 1 ->
    let regex = new RegExp(myChar, 'g');
    return str.match(regex).length;
 
    // Option 2 ->
    let arr = str.split('');
    let res = arr.filter((e, i) => e === myChar);
    return res.length;
}
console.log(charCount("b", "big fat bubble")) // ➞ 4
console.log(charCount('j', 'Juninzon is a jukizon, jaknunzin jukijukjik')); // ➞ 5

////////////////////////////////////////////////////////////////////////////////////////////

// 4. Returning a fixed & re-arranged string → 

// Incorrect Import Statement
// Given a string of an incorrect import statement, return the fixed string.
// All import statements will be the wrong way round.
// The correct syntax ->
// from module_name import object
function fixImport(str) {
    let res = str.split(' ');
    return `${res[2]} ${res[3]} ${res[0]} ${res[1]}`;
}
console.log(fixImport("import object from module_name")); // ➞ "from module_name import object"
console.log(fixImport("import randint from random")); // ➞ "from random import randint"
console.log(fixImport("import pi from math")); // ➞ "from math import pi"

////////////////////////////////////////////////////////////////////////////////////////////

// 5. Repeating letters → 

// Repeating Letters
// Create a function that takes a string and returns a string in which each character is repeated once.
function doubleChar(str) {
    return str.split('').map(a => a + a).join('');
}
console.log(doubleChar("Juno")) // ➞ "JJuunnoo"
console.log(doubleChar("Hello World!")) // ➞ "HHeelllloo  WWoorrlldd!!"
console.log(doubleChar("1234!_ ")) // ➞ "11223344!!__  "

//////////////////////////////////////////////////////////////////////////////////////////// 

// 6. Check if each first letter of a word in a string is Uppercase → 

// Check if a string title is a title string or not.
// A title string = one which has all the words in the string start with a upper case letter.
function checkTitle(title) {
 
    let words = title.split(' ');
    let matched = title.match(/[A-Z]/g);
 
    return words.length === matched.length ? true : false;
}
console.log(checkTitle("A Simple Java Script Program!")); // ➞ true
console.log(checkTitle("Water is transparent")) // ➞ false
console.log(checkTitle("A Mind Boggling Achievement")) // ➞ true

////////////////////////////////////////////////////////////////////////////////////////////

// 7. Repeat a given string n times (without using repeat( ) method) → 

// Recursion to Repeat a String n Number of Times
// Create a recursive function that takes two parameters and repeats the string n number of times
// txt - is the string to be repeated
// n - the number of times the string is to be repeated
// n is positive integer.
// String.prototype.repeat() is not allowed
function repetition(txt, n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(txt);
    }
    return arr.join('');
}
console.log(repetition("ab", 3)); //  ➞ "ababab"
console.log(repetition("kiwi", 1)); // ➞ "kiwi"
console.log(repetition("cherry", 2)); //  ➞ "cherrycherry"

////////////////////////////////////////////////////////////////////////////////////////////

// 8. Evaluate if a relation between two numbers (written as a string) is T or F → 
 
// input -> a relation between two numbers, written as a string.
// Write a function that determines if the relation is true or false.
// Tests will only have three types of relations: =, >, and <
function isTrue(relation) {
    return eval(relation.replace('=', '==='));
}
console.log(isTrue("2=2")); // T
console.log(isTrue("8<7")); // F

////////////////////////////////////////////////////////////////////////////////////////////
 
// 9. Return the right version of a string based on a number passed → 
 
// Write a function that takes a string name and a number num (either 0 or 1)
// and return "Hello" + name if num is 1,
// otherwise return "Bye" + name
// The name you return must be capitalized.
function sayHelloBye(name, num) {
 
    let fixedName = name.charAt(0).toUpperCase() + name.slice(1);
    return num > 0 ? `Hello ${fixedName}` : `Bye ${fixedName}`;
}
 
console.log(sayHelloBye('juno', 1)); // 'Hello Juno'
console.log(sayHelloBye('janun', 0)); // 'Bye Janun'

////////////////////////////////////////////////////////////////////////////////////////////

// 10. Returning the number of certain characters in a string → 
 
// Hashes and Pluses
// Create a function that returns the number
// of hashes and pluses in a string
// Return [0, 0] for an empty string
// Return in the order of [hashes, pluses]
function hashPlusCount(str) {
    // Option 1
    let s = [...str];
    return [s.filter(e => e == '#').length, s.filter(e => e == '+').length]
    // Option 2 (my solution)
    if (str.includes('+') && str.includes('#'))
        return [str.match(/#/g).length, str.match(/\+/g).length]
    if (str.includes('+')) return [0, str.match(/\+/g).length]
    if (str.includes('#')) return [str.match(/#/g).length, 0]
    return [0, 0];
}
console.log(hashPlusCount("")) // ➞ [0, 0]
console.log(hashPlusCount("###+")) // ➞ [3, 1]
console.log(hashPlusCount("##+++#")) // ➞ [3, 3]
console.log(hashPlusCount("#+++#+#++#")) // ➞ [4, 6]
 
////////////////////////////////////////////////////////////////////////////////////////////

// 11. Sort first letters alphabetically → 
 
// Create a function that takes in an array of names and returns the result
// the result = the first letter of each of their names, sorted in alphabetical order
// it needs to be entirely uppercased
function returnLetters(names) {
    return names.map(el => el[0]).sort().join('')
}
console.log(returnLetters(["Adam", "Sarah", "Malcolm"])) // ➞ "AMS"
console.log(returnLetters(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"])) // ➞ "CJMPRR"
 
////////////////////////////////////////////////////////////////////////////////////////////
 
// 12. Reverse the letters in the String (lowerCase to upperCase and the other way around) → 
 
// Reverse the Case
// Given a string, create a function to reverse the case.
// All lower-cased letters should be upper-cased, and vice versa.
function reverseCase(str) {
    // Option 1
    return [...str].map(e => e.match(/[A-Z]/) ? e.toLowerCase() : e.toUpperCase()).join('')
    // Option 2 (my solution)
    return [...str].map(e => {
        if (e.match(/[A-Z]/)) return e.toLowerCase()
        return e.toUpperCase()
    }).join('')
}
console.log(reverseCase("abc ABC")); // ➞ 'ABC abc'
console.log(reverseCase("jUNO IS the cutest")); // ➞ 'Juno is THE CUTEST'
 
////////////////////////////////////////////////////////////////////////////////////////////
 
 // 13. Convert array of percentage numbers as strings into decimal notation → 

// Convert to Decimal Notation
// Create a function to convert an array of percentages
// to their decimal equivalents.
function convertToDecimal(perc) {
    return perc.map(e => parseFloat(e) / 100)
}
console.log(convertToDecimal(["1%", "2%", "3%"])); //  ➞ [0.01, 0.02, 0.03]
console.log(convertToDecimal(["45%", "32%", "97%", "33%"])); // ➞ [0.45, 0.32, 0.97, 0.33]
console.log(convertToDecimal(["33%", "98.1%", "56.44%", "100%"])); // ➞ [0.33, 0.981, 0.5644, 1]
 
// 14. Capitalize the characters by ASCII → 
 
// Capitalize by ASCII
// Create a function that takes a string as input
// and capitalizes a letter if its ASCII code is even
// and returns its lower case version if its ASCII code is odd.
function asciiCapitalize(str) {
    return ([...str].map(e => e.charCodeAt() % 2 ? e.toUpperCase() : e.toLowerCase())).join('')
}
console.log(asciiCapitalize("to be or not to be!")) // ➞ "To Be oR NoT To Be!"
console.log(asciiCapitalize("THE LITTLE MERMAID")) // ➞ "THe LiTTLe meRmaiD"
console.log(asciiCapitalize("Oh what a beautiful morning.")) //  ➞ "oH wHaT a BeauTiFuL moRNiNg."
 
////////////////////////////////////////////////////////////////////////////////////////////

// 15. Transform words into Binary Strings → 
 
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
 
// 16. Time presented as a String in seconds → 
 
// Video Length in Seconds
// You are given the length of a video in minutes (mm:ss)
// Create a function that takes the video length and return it in seconds.
// The video length is given as a string.
// If the number of seconds is 60 or over, return false
function minutesToSeconds(time) {
    let seconds = time.split(':').map(e => Number(e))
    if (seconds.length > 2) return seconds[0] * 3600 + seconds[1] * 60 + seconds[2]
    else return seconds[1] > 59 ? false : seconds[0] * 60 + seconds[1]
}
console.log(minutesToSeconds("1:13:56")); // 4436
console.log(minutesToSeconds("13:56")); // 836
console.log(minutesToSeconds("10:60")); // false
console.log(minutesToSeconds("01:00")); // 60

////////////////////////////////////////////////////////////////////////////////////////////

// 17. Return highest and lowest number from a String → 
 
// Return the Highest and Lowest Numbers
// Create a function that accepts a string of space separated numbers
// and returns the highest and lowest number (as a string)
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.
 
function highLow(str) {
    let a = str.split(' ').map(e => Number(e))
    return `${Math.max(...a)} ${Math.min(...a)}`
}
console.log(highLow("1 2 3 4 5")) // ➞ "5 1"
console.log(highLow("1 2 -3 4 5")) // ➞ "5 -3"
console.log(highLow("1 9 3 4 -5")) // ➞ "9 -5"
console.log(highLow("13")) // ➞ "13 13"
 
////////////////////////////////////////////////////////////////////////////////////////////

// 18. How many decimal places are there in a string number → 
 
// How Many Decimal Places Are There
// Create a function that returns the number of decimal places a number (given as a string) has.
// Return 0 if the number doesn't have any decimal places
function getDecimalPlaces(num) {
    return num.includes('.') ? num.split('.')[1].length : 0
}
console.log(getDecimalPlaces("43.20")); // 2
console.log(getDecimalPlaces("400")); // 0
console.log(getDecimalPlaces("3.1")); // 1
 
////////////////////////////////////////////////////////////////////////////////////////////
 
// 19. Shuffle the word according to even and odd indexes of the characters →
 
// Index Shuffle
// Write a function that takes all even-indexed characters
// and odd-indexed characters from a string
// and concatenates them together.
// 0 should be treated as an even number
// indexShuffle("abcd") ➞ "acbd"
// "ac" (even-indexed) + "bd" (odd-indexed)
 
function indexShuffle(str) {
   return [...str].filter((e, i)=> i % 2 === 0).join('')
   .concat([...str].filter((e, i) => i % 2 !== 0).join(''))
}
console.log(indexShuffle("maybe")) // ➞ "myeab"
console.log(indexShuffle("abcdefg")) // ➞ "acegbdf"
console.log(indexShuffle("holiday")) // ➞ "hldyoia"
 
////////////////////////////////////////////////////////////////////////////////////////////

// 20. Does the word start or end with a prefix / suffix → 

// Create two functions:
// 1. isPrefix(word, prefix-) - returns true if it begins with the prefix argument.
// 2. isSuffix(word, -suffix) - returns true if it ends with the suffix argument.
// Otherwise return false.
// The prefix and suffix arguments have dashes - in them.
function isPrefix(word, prefix) {
    return word.startsWith(prefix.replace("-", ""));
}
 
function isSuffix(word, suffix) {
    return word.endsWith(suffix.replace("-", ""));
}
console.log(isPrefix("automation", "auto-")); //  ➞ true
console.log(isPrefix("retrospect", "sub-")); //  ➞ false
console.log(isSuffix("arachnophobia", "-phobia")); //  ➞ true
console.log(isSuffix("vocation", "-logy")); //  ➞ false
 
////////////////////////////////////////////////////////////////////////////////////////////
 
// 21. Replace all digits except the last four with ‘ * ‘ → 
 
// Hiding the Card Number
// Write a function that takes a credit card number
// and only displays the last four characters
// The rest of the card number must be replaced by ************
// Ensure you return a string.
// The length of the string must remain the same as the input.
function cardHide(card) {
    // Solution 1
    return '*'.repeat(card.length - 4) + card.slice(-4);

    // Solution 2
    return card.slice(-4).padStart(card.length, '*');

    // Solution 3 - My Solution
    let arr = [...card]
    for (let i = 0; i < arr.length - 4; i++) {
        arr[i] = '*'
    }
    return arr.join('')
}

console.log(cardHide("1234123456785678")) // ➞ "************5678"
console.log(cardHide("8754456321113213")) // ➞ "************3213"
console.log(cardHide("35123413355523")) // ➞ "**********5523"
 
////////////////////////////////////////////////////////////////////////////////////////////
 
// 22. Function that takes a word (string) and spells it out (array) → 
 
// Spelling it Out
// Create a function which takes in a word and spells it out,
// by consecutively adding letters until the full word is completed.
function spelling(str) {
// Option 1 ->
return str.split('').map((curr, i) => str.slice(0, i+1))
 
// Option 2 (my solution) ->
let res = [];
   for (let i = 1; i <= [...str].length; i++) {
    res.push([...str].slice(0, i).join(''))
   }
   return res  
}

console.log(spelling("bee")) // ➞ ["b", "be", "bee"]
console.log(spelling("happy")) // ➞ ["h", "ha", "hap", "happ", "happy"]
console.log(spelling("eagerly")) // ➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]

////////////////////////////////////////////////////////////////////////////////////////////
 
// 23. Evaluating if a number is a repdigit → 
 
// Is the Number a Repdigit
// Repdigit -> a positive number composed out of the same digit.
// Create a function that takes an integer and
// returns whether it's a repdigit or not
// The number 0 should return true
function isRepdigit(num) {
return (num.toString().split('')).every(e => e === num.toString()[0])
}
console.log(isRepdigit(66)) // ➞ true
console.log(isRepdigit(0)) // ➞ true
console.log(isRepdigit(47)) // ➞ false
console.log(isRepdigit(-11)) // ➞ false
 
//////////////////////////////////////////////////////////////////////////////////////////// 

// 24. Join two Strings with one separator between them → 
 
// Join Two Portions of a Path
// Write a function that receives two portions of a path and joins them
// The portions will be joined with the "/" separator
// There could be only one separator and if it is not present it should be added.
// Try not to solve this challenge using only if-else conditions.
 
function joinPath(portion1, portion2) {
// Option 1 ->
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
 
// 25. Basic Calculator → 
 
// Basic Calculator
// Create a function that takes two numbers and a mathematical operator + - / *
// and will perform a calculation with the given numbers.
// If the input tries to divide by 0, return: "Error"
function calculator(num1, operator, num2) {
 
  return num2 === 0 && operator === '/'  ? 'Error' : eval([num1, operator, num2].join(''))
}
console.log(calculator(2, "+", 2)) // ➞ 4
console.log(calculator(2, "*", 2)) // ➞ 4
console.log(calculator(4, "/", 2)) // ➞ 2
console.log(calculator(4, "/", 0)) // ➞ Error

////////////////////////////////////////////////////////////////////////////////////////////

// 26.  Find a word and its index → 
 
// You're given a string of words, and you need to find the word "Nemo",
// and return a string like this:
// "I found Nemo at [the order of the word you find Nemo]!".
// If you can't find Nemo, return "I can't find Nemo :("
// If there are multiple Nemo's in the sentence, only return the first one
function findNemo(sentence) {
// Solution 1
let idx = sentence.split(" ").indexOf("Nemo") + 1
return idx ? `I found Nemo at ${idx}!` : "I can't find Nemo :("
 
  // Solution 2 (my solution)
let idx = sentence.split(' ').indexOf('Nemo')  
return idx !== -1 ?  `I found Nemo at ${idx + 1}!` : `I can't find Nemo :(`
}
console.log(findNemo("I am finding Nemo !")) // ➞ "I found Nemo at 4!"
console.log(findNemo("Nemo is me")) // ➞ "I found Nemo at 1!"
console.log(findNemo("I Nemo am")) // ➞ "I found Nemo at 2!"
 
////////////////////////////////////////////////////////////////////////////////////////////
 
// 27. Reverse words in a String without the white spaces → 
 
// Reverse Words in a String
// Reverse the string word by word, the first word will be the last, and so on
// A word is defined as a sequence of non-space characters
// The input string may contain leading or trailing spaces
// However, your reversed string should not contain leading or trailing spaces
// You need to reduce multiple spaces between two words to a single space in the reversed string
function reverseWords(string) {
 
  return string.split(' ').filter(e => e !== '').reverse().join(' ')
}
console.log(reverseWords("hello   world!  ")) // ➞ "world! hello"
console.log(reverseWords(" the sky is blue")) // ➞ "blue is sky the"
console.log(reverseWords("a good example")) // ➞ "example good a"
 
////////////////////////////////////////////////////////////////////////////////////////////
 
// 28.  Moving all the UpperCase letters to the front of the String → 
 
// Create a function that moves all capital letters to the front of a word
function capToFront(s) {
 
  return s.match(/[A-Z]/g).concat(s.match(/[a-z]/g)).join('')
}
console.log(capToFront("hApPy")) // ➞ "APhpy"
console.log(capToFront("moveMENT")) // ➞ "MENTmove"
console.log(capToFront("shOrtCAKE")) // ➞ "OCAKEshrt"
 
////////////////////////////////////////////////////////////////////////////////////////////
 
// 29. Basic Arithmetic Operations (input as separate Strings) → 
 
// Basic Arithmetic Operations
// Write a function that does the following for the given values:
// add, subtract, divide and multiply
// Division results will be rounded down to their integral parts
// If the operation results in Infinity, then return undefined
 
// Solution 1
function operation(a, b, op) {
  return op[0] == 'a'? +a + +b:
         op[0] == 's'? +a - +b:
         op[0] == 'd'? b == 0? 'undefined': +a / +b:
         op[0] == 'm'? +a * +b:
         'undefined';
}
 
// Solution 2
function operation(a, b, op) {
a = parseInt(a);
b = parseInt(b);
switch(op) {
  case 'add': return a + b;
  case 'subtract': return a - b;
  case 'multiply': return a * b;
  case 'divide': return b !== 0 ? Math.floor(a / b) :'undefined';
}
 }
 
// Solution 3
const operation = (...e) => {
const operators = {add: '+', subtract: '-', multiply: '*', divide: '/'}
return (res = eval(e[0]+operators[e[2]]+e[1])) == Infinity ?
'undefined' : res
}
 
 
// Solution 4 (My solution)
function operation(a, b, op) {
if (b === '0' && op === 'divide') return 'undefined'
if (op === 'add') return +a + +b;
if (op === 'subtract') return a - b;
if (op === 'multiply') return (a * b);
else return Math.floor(a / b)
}
 
console.log(operation("4",  "5",  "subtract")) // ➞ -1
console.log(operation('4', '3', 'divide')) // ➞ 1
console.log(operation("6",  "3",  "divide")) // ➞ 2
console.log(operation("1",  "2",  "add" )) // ➞ 3
console.log(operation("6",  "3",  "multiply")) // ➞ 18
console.log(operation("6",  "0",  "divide")) // ➞ undefined
 
////////////////////////////////////////////////////////////////////////////////////////////
 