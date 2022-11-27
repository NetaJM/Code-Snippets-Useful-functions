////////////////////////////////////////////////////////////////////////////////////////////

// GENERATING A RANDOM INT BETWEEN TWO VALUES ->

const min = 1 // (the minimum number);
const max = 5 // (the maximum num);
const randomInt = Math.floor(Math.random() * (max - min) + 1) + min;

////////////////////////////////////////////////////////////////////////////////////////////

// Converting a decimal number to a binary number → 
 
function dec2bin(dec){
    return (dec >>> 0).toString(2);
// or 
decimal.toString(2);
  }

// Converting a binary number to a decimal number → 
 
  function bin2dec(bin){
      return parseInt(bin, 2).toString(10);
    }
  

////////////////////////////////////////////////////////////////////////////////////////////

// RECRUSION 

// Recursion is the act of writing a function that calls itself from within its own code. 
// Recursion by simply counting down from a given number to zero; 
// Explanation →  
// The function starts by initializing the target number (0), 
// then it creates a base case by checking if the
// inputted number has reached the target number yet. 
// If it has, then the function ends and it prints the statement, 
// else the function inputs num subtracted by one and then runs the function again.
 
function factorial(num) {
    let targetNumber = 0
    if (num == targetNumber) { console.log("Countdown complete!") }
    else { factorial(num - 1) }
}

////////////////////////////////////////////////////////////////////////////////////////////

// Calculating the Factorial of a Number ->
 
// Returning the factorial of the given number using Recursion
// Factorial formula - n! = n*(n -1)!
// Example - 3!
// 3(3 − 1)(3 − 2) = 3 x 2 x 1 = 6
 
// Option 1
function factorial(num) {
  return !num || n * factorial(--num);
}
// Option 2
function factorial(num) {
let res = 1;
    for (let i = num; i > 0; i--) {
        res *= i;
    }
    return res;
}
// Option 3
function factorial(num) {
if (num < 0) return;
    if (num === 0) return 1;
    return num * factorial(num - 1);

////////////////////////////////////////////////////////////////////////////////////////////

// Calculating a number of squares in a NxN grid  →
 
// Formula = (n  (n+1) * (2n+1)) / 6
// Or - (n**2 + (n-1)**2 + (n-2)**2 ….. (n-n+1)**2)
 
function numberSquares(n) {
    let res = (n * (n + 1) * (2 * n + 1)) / 6;
    return res;
}
console.log(numberSquares(2));//5
console.log(numberSquares(4));//30
console.log(numberSquares(5));//55

////////////////////////////////////////////////////////////////////////////////////////////

// 1. Calculating the sum of all digits of a given number → 
 
// Add up the Numbers from a Single Number
// eg. input 4 --> output = 10 (1 + 2 + 3 + 4)
function sumUp(num) {
    let sum = (num / 2) * (num + 1);
    return sum;
}
console.log(sumUp(4)); // 10
console.log(sumUp(13)); // 91
console.log(sumUp(600));  // 180300
 

// Formula →   S = n/2(n + 1)

////////////////////////////////////////////////////////////////////////////////////////////

// 2. Reversing a two digit positive integer → 
 
function reverseIntg(num) {
    let arr = num.toString().split('').reverse();
    let res = Number(arr.join(''));
    return res;
}
 
// Other (smarter) options → 
// 1
function largestSwap(num) {
    return num.toString().charAt(0) >= num.toString().charAt(1);
}
// 2
function largestSwap(num) {
    return num / 10 > num % 10
}

////////////////////////////////////////////////////////////////////////////////////////////

// 3. Non constructible change algorithm →   
 
// Set of Coins →  Coins = [ 1 ] ; 
// The change that can be made out of the coins → Change = 1 ; 
// Value of a single coin (currently iterated) → CurrCoin = 1 ; 
// ITERATING THROUGH THE COINS CONDITIONS  → 
// 1. IF   CurrCoin  >  Change + 1  →  Change + 1  is the amount of change that CAN’T be made ; 
// 2. IF  CurrCoin  <=  Change + 1  →  all combinations of  Change + CurrValue  values can be made ; 
 
// Non-Constructible Change
// input -> arr of coins (all positive int) / (value in cents)
// output -> the min amount of the change that CAN'T be created by the coins
// example - [1, 2, 5] => res = 4;

// Steps ->
// 1. Sort the coins arr in ascending order
// 2. Loop one coin at the time & keep track hom much change can be created
// 3. Checking condition - currCoin > change + 1
// 4. If true, return - the curr (change + 1)
// 5. If not, add the curr coin to the change and continue until true

function nonConstructibleChange(coins) {
    coins.sort((a, b) => a - b);
    let change = 0;
    for (const coin of coins) {
        if (coin > change + 1) return change + 1;
        change += coin;
    }
    return change + 1;
}
console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])); // 20

////////////////////////////////////////////////////////////////////////////////////////////

// 4. Flipping the numbers 0 & 1 → 
 
// Flip 0 -> 1 or 0 -> 1
// Write a function that returns 0 if the input is 1, and returns 1 if the input is 0.
// Try completing this challenge without using any:
// Conditionals, Ternary operators, Negations, Bit operators
function flip(a) {
    return Math.abs(a - 1);
    // or
    return 1 - a;
}
console.log(flip(1)); // 0
console.log(flip(0)); // 1

////////////////////////////////////////////////////////////////////////////////////////////

// 5. Split number and half and return an array with the halves → 
 
// Number Split
// Given a number, return an array containing the two halves of the number
// If the number is odd, make the rightmost number higher
// All numbers will be integers
// You can expect negative numbers too
// Math.floor( ) - rounds down // unshift()
// Math.ceil( ) - rounds up // push()
function numberSplit(n) {
    return [Math.floor(n / 2), Math.ceil(n / 2)];
}
console.log(numberSplit(4)) // ➞ [2, 2]
console.log(numberSplit(10)) // ➞ [5, 5]
console.log(numberSplit(11)) // ➞ [5, 6]
console.log(numberSplit(-9)) // ➞ [-5, -4]

////////////////////////////////////////////////////////////////////////////////////////////

// 6. Calculate Minimum Waiting Time → 

// execute the queries in an order so that they're executed as fast as possible
// Input -> array of positive int representing amount of times that specific queries take to execute
// // only one query can be executed at a time, but they can be executed in any order
// // queries waiting time = amount of time it waits before its exec. Starts
// // (if the query is executed second, it's waiting time is the duration of the 1st query)
// Output -> the min amount of total waiting for all the queries
// e.g [5, 1, 4] -> 0 + 5 + (5 + 1) = 11  
// [6, 1] -> 0 + 6 = 6 || [1, 6] = 0 + 1 = 1 -> Waiting time when there's only 1 query -> is always gonna be 0
// // you're allowed to mutate the input arr
// Steps ->
// 1. figure out the optimal order in which to execute the queries
// in order to have minimal waiting time -> sort the arr (ascending)
// (execute the querier with the shortest duration first)
// 2. create variable to store total waiting time
// 3. iterate the array - and in each iteration -
// num of queries left x duration of curr query -> add that to total
function minimumWaitingTime(queries) {
    queries.sort((a, b) => a - b);
    let total = 0;
    for (let i = 0; i < queries.length; i++) {
        const curr = queries[i];
        const querLeft = queries.length - (i + 1);
        total += curr * querLeft;
    }
    return total;
}
console.log(minimumWaitingTime([3, 2, 1, 2, 6])); // 17


////////////////////////////////////////////////////////////////////////////////////////////

// 7. Returning the highest digit of a number → 
 
// Highest Digit
// Create a function that takes a number as an argument and
// returns the highest digit in that number.
function highestDigit(number) {
    return Number(number.toString().split('')
        .reduce((prev, curr) => prev > curr ? prev : curr));
}
console.log(highestDigit(377401)); // ➞ 7
console.log(highestDigit(379)); // ➞ 9
console.log(highestDigit(2)); // ➞ 2
console.log(highestDigit(143422456892)); // ➞ 9


////////////////////////////////////////////////////////////////////////////////////////////

// 8. Returning all the even numbers with an even index number → 

// input ->  array of numbers
// output -> array which contains all the even numbers in the original array,
// which also have even indices.
function getOnlyEvens(nums) {
    return nums.filter((el, i) => el % 2 === 0 && i % 2 === 0);
}
console.log(getOnlyEvens([0, 1, 2, 3, 4])); // ➞ [0, 2, 4]
console.log(getOnlyEvens([1, 3, 2, 6, 4, 8])); // ➞ [2, 4]
console.log(getOnlyEvens([1, 2, 3, 4, 5])); // ➞ []


////////////////////////////////////////////////////////////////////////////////////////////

// 9. Returning PI rounded to specific decimal places → 
 
// Pi to N Decimal Places
// Given a number n, write a function that returns PI to n decimal places.
// n will not be above 15, to keep this challenge simple.
// Round up the last digit if the next digit in PI is greater or equal to 5 (see second example above).
// The return value must be a number, not a string.
function myPi(n) {
    return Number(Math.PI.toFixed(n));
}
console.log(myPi(1)); // ➞ 3.1
console.log(myPi(5)); // ➞ 3.14159
console.log(myPi(4)); // ➞ 3.1416
console.log(myPi(15)); // ➞ 3.141592653589793

////////////////////////////////////////////////////////////////////////////////////////////

// 10. Calculate the factorial of the number → 
 
// Recursion: Factorials
// Write a function that calculates the factorial of a number recursively.
function factorial(n) {
    let res = 1;
    for (let i = n; i > 0; i--) {
        res *= i;
    }
    return res;
}
console.log(factorial(5)); // 120
console.log(factorial(3)); // 6
console.log(factorial(1)); // 1
console.log(factorial(0)); // 1

////////////////////////////////////////////////////////////////////////////////////////////

// 11. Evaluate if a relation between two numbers (written as a string) is T or F → 
 
// input -> a relation between two numbers, written as a string.
// Write a function that determines if the relation is true or false.
// Tests will only have three types of relations: =, >, and <
function isTrue(relation) {
    return eval(relation.replace('=', '==='));
}
console.log(isTrue("2=2")); // T
console.log(isTrue("8<7")); // F

////////////////////////////////////////////////////////////////////////////////////////////

// 12. Calculate the Average of the array numbers with 2 decimal points → 
 
// Calculate the Mean
// Create a function that takes an array of numbers and
// returns the mean (average) of all those numbers
// Round to two decimal places.
// You can expect a number ranging from 0 to 10,000.
function mean(arr) {
    return Number((arr.reduce((acc, curr) => acc + curr) / arr.length).toFixed(2));
}
console.log(mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3])); // 2.55
console.log(mean([2, 3, 2, 3])); // 2.50
console.log(mean([3, 3, 3, 3, 3])); // 3.00

////////////////////////////////////////////////////////////////////////////////////////////

// 13. Sort numbers in descending order → 
 
// Sort Numbers in Descending Order
// Create a function that takes any nonnegative number as an argument
// and return it with it's digits in descending order.
// You can expect non-negative numbers for all test cases.
function sortDescending(num) {
    return Number((num.toString().split('')).sort((a, b) => b - a).join(''))
}
console.log(sortDescending(34152)) // ➞ 54321
console.log(sortDescending(123)) // ➞ 321
console.log(sortDescending(1254859723)) // ➞ 9875543221
console.log(sortDescending(73065)) //  ➞ 76530

////////////////////////////////////////////////////////////////////////////////////////////

// 14. Check if the Number is Symmetrical → 
 
// Check if the Number Symmetrical
// Create a function that takes a number as an argument
// and returns true or false depending on whether the number is symmetrical
// A number is symmetrical when it is the same as its reverse.
function isSymmetrical(num) {
    return Number(num.toString().split('').reverse().join('')) === num
}
console.log(isSymmetrical(9939)); // F
console.log(isSymmetrical(12567)); // F
console.log(isSymmetrical(44444444)); // T
console.log(isSymmetrical(1112111)); // T
console.log(isSymmetrical(7227)); // T

////////////////////////////////////////////////////////////////////////////////////////////

// 15. Return the factorial of the given number using Recursion → 
 
// Recursion
// return the factorial of an inputted integer
function factorial(num) {
    if (num < 0) return;
    if (num === 0) return 1;
    return num * factorial(num - 1);
}
console.log(factorial(5)); // 120
console.log(factorial(3)); // 6


////////////////////////////////////////////////////////////////////////////////////////////

// 16. Spotlight Sum of n inside a 10x10 (1-100) Grid → 
 
// Spotlight Sum
// input -> a 10x10 grid of numbers 1-100
// return the Spotlight Sum, given a number n
// spotlight sum can be defined as the total of the 8 numbers
// immediately surrounding the number n on the grid, including n in the total.
function spotlightSum(n) {
    // First Option
    return n * 9
    // Second Option
    return [n - 11, n - 10, n - 9, n - 1, n, n + 1, n + 9, n + 10, n + 11]
        .reduce((acc, i) => acc + i, 0)
}
console.log(spotlightSum(19)); // 171
console.log(spotlightSum(48)); // 432
console.log(spotlightSum(88)); // 792
// Why n * 9 ?
// n + (n-1) + (n-1) + (n-9) + (n-10) + (n-11) + (n+9) + (n+10) + (n+11)
// get out of brackets - sum of all nums = 0 | left with 9n => 9*n
// Spotlight Sum Example ->
[
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
  ]
  spotlight_sum(45) ➞ 405
// The 8 numbers surrounding 45 on the grid are:
// [34, 35, 36, 44, 46, 54, 55, 56]
// Total of the numbers is 360.
// Include 45 in the total (360 + 45 = 405)

////////////////////////////////////////////////////////////////////////////////////////////

// 17. Return the highest possible sum of an Array by using 5 of 10 of it’s elements values → 

// Maximum Possible Total
// Given an array of 10 numbers,
// return the maximum possible total made by summing just 5 of the 10 numbers
// You can select any 5 numbers from the given array to form maximum possible total.
function maxTotal(nums) {
    return nums.sort((a, b) => b - a).slice(0, 5).reduce((a, b) => a + b)
}
console.log(maxTotal([1, 2, 5, 4, 3, 10, 20, 30, 40, 50])); // 150
console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1])); // 43
console.log(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100])); // 100
console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 40

////////////////////////////////////////////////////////////////////////////////////////////

// 18. Convert array of percentage numbers as strings into decimal notation → 

// Convert to Decimal Notation
// Create a function to convert an array of percentages
// to their decimal equivalents.
function convertToDecimal(perc) {
    return perc.map(e => parseFloat(e) / 100)
}
console.log(convertToDecimal(["1%", "2%", "3%"])); //  ➞ [0.01, 0.02, 0.03]
console.log(convertToDecimal(["45%", "32%", "97%", "33%"])); // ➞ [0.45, 0.32, 0.97, 0.33]
console.log(convertToDecimal(["33%", "98.1%", "56.44%", "100%"])); // ➞ [0.33, 0.981, 0.5644, 1]

////////////////////////////////////////////////////////////////////////////////////////////

// 19. Convert Numbers to Arrays and Arrays to Numbers → 

// Numbers to Arrays and Vice Versa
// Write two functions:
// 1. toArray(), which converts a number to an array of its digits.
// 2. toNumber(), which converts an array of digits back to its number.
// All test cases will be weakly positive numbers: >= 0
function toArray(num) {
    return String(num).split('').map(Number)
}
function toNumber(arr) {
    return Number(arr.join(''))
}
console.log(toArray(235)) // ➞ [2, 3, 5]
console.log(toArray(0)) // ➞ [0]
console.log(toNumber([2, 3, 5])) // ➞ 235
console.log(toNumber([0])) // ➞ 0

////////////////////////////////////////////////////////////////////////////////////////////

// 20. Conditionals for a Boarding Game → 

// In a board game, a piece may advance 1-6 tiles forward
// depending on the number rolled on a six-sided dice.
// If you advance your piece onto the same tile as another player's piece,
// both of you earn a bonus.
// The goal is to reach your friend's tile number in the next roll.
// Create a function that takes your position a and your friend's position b
// and returns a boolean representation of whether it's possible
// to earn a bonus on any dice roll.
// Rules -> You cannot move backward
// If you are already on the same tile, return false, as you would be advancing away.
// Expect only positive integer inputs.
function possibleBonus(a, b) {
    // Solution 1 ->
    return b - a <= 6 && b - a > 0
    // Solution 2 (my solution) ->
    if (a > b) return false
    return (b - a <= 6 && a !== b) ? true : false
}
console.log(possibleBonus(3, 7)) // ➞ true
console.log(possibleBonus(1, 9)) // ➞ false
console.log(possibleBonus(3, 3)) // ➞ true

////////////////////////////////////////////////////////////////////////////////////////////

// 21. Calculating Right Shift by Division → 

// Right Shift by Division
// The right shift operation is similar to floor division by powers of two
// Sample calculation using the right shift operator ( >> ) :
// 80 >> 3 = floor(80/2^3) = floor(80/8) = 10
// -24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6
// -5 >> 1 = floor(-5/2^1) = floor(-5/2) = -3
// Write a function that mimics the right shift op. (without the use of >>)
// and returns the result from the two given integers.
function shiftToRight(x, y) {
    return Math.floor(x / (2 ** y))
}
console.log(shiftToRight(80, 3)) // 10
console.log(shiftToRight(-24, 2)) // -6
console.log(shiftToRight(-5, 1)) // -3
console.log(shiftToRight(4666, 6)) // 72
console.log(shiftToRight(3777, 6)) // 59
console.log(shiftToRight(-512, 10)) // -1

////////////////////////////////////////////////////////////////////////////////////////////

// 22. Find number of digits in a Number without using Strings → 

// Find Number of Digits in Number
// Create a function that will return an integer number
// corresponding to the amount of digits in the given integer num.
// Try to solve this challenge without using strings
function num_of_digits(num) {
 
    return Math.max(Math.floor(Math.log10(Math.abs(num))), 0) + 1;
}
console.log(num_of_digits(1000)) // ➞ 4
console.log(num_of_digits(12)) // ➞ 2
console.log(num_of_digits(1305981031)) // ➞ 10
console.log(num_of_digits(0)) // ➞ 1


////////////////////////////////////////////////////////////////////////////////////////////

// 23. Returning a derivative of a function → 

// Derivative of a Function
// Create a function that takes numbers b and m as arguments and
// returns the derivative of the function f(x)=x^b
// with respect to x evaluated at x=m, where b and m are constants.
// ^ in the context of this challenge means "to the power of",
// also known as the "exponent" operator.
function derivative(b, m) {
    return b * Math.pow(m, (b - 1))
}
console.log(derivative(3, -2)) // ➞ 12
console.log(derivative(1, 4)) // ➞ 1
console.log(derivative(4, -3)) // ➞ -108

////////////////////////////////////////////////////////////////////////////////////////////

// 24. Triangular Number Sequence → 

// Triangular Number Sequence
// This Triangular Number Sequence is generated from a pattern of dots that form a triangle.
// The first 5 numbers of the sequence, or dots, are: 1, 3, 6, 10, 15
// This means that the first triangle has just one dot, the second one has three dots,
// the third one has 6 dots and so on.
// Write a function that returns the number of dots when given
// its corresponding triangle number of the sequence.
// Triangular Number -> xn = n(n+1)/2  
function triangle(n) {
    return n * (n + 1) / 2
}
console.log(triangle(6)) //➞ 21
console.log(triangle(1)) // ➞ 1
console.log(triangle(215)) // ➞ 23220


////////////////////////////////////////////////////////////////////////////////////////////

// 25. Checking if an Integer is within bounds of lower and upper number → 

// Is the Integer in Range
// Create a function that validates whether a number n
// is within the bounds of lower and upper.
// Within bounds ->  n >= lower bound & n < upper bound
// Return false if n is not an integer
function intWithinBounds(n, lower, upper) {
 
    return Number.isInteger(n) && n >= lower && n < upper
}
console.log(intWithinBounds(3, 1, 9)) // ➞ true
console.log(intWithinBounds(6, 1, 6)) // ➞ false
console.log(intWithinBounds(4.5, 3, 8)) // ➞ false


////////////////////////////////////////////////////////////////////////////////////////////

// 26. Evaluating if a number is a repdigit →
 
// Is the Number a Repdigit
// Repdigit -> a positive number composed out of the same digit.
// Create a function that takes an integer and
// returns whether it's a repdigit or not
// The number 0 should return true
function isRepdigit(num) {
// 1. String & Array
return (num.toString().split('')).every(e => e === num.toString()[0])
 
// Regex
return /^(\d)\1*$/.test(num);
 
// Sets
 return new Set(`${num}`).size === 1
 return new Set('' + num).size === 1
}
console.log(isRepdigit(66)) // ➞ true
console.log(isRepdigit(0)) // ➞ true
console.log(isRepdigit(47)) // ➞ false
console.log(isRepdigit(-11)) // ➞ false

////////////////////////////////////////////////////////////////////////////////////////////

// 27. Removing trailing and leading zeros from a number → 
 
// Remove Trailing and Leading Zeros
// Create a function that takes in a number as a string n
// and returns the number without trailing and leading zeros.
// Trailing Zeros -> zeros after a decimal point which don't affect the value
// (e.g. the last three zeros in 3.4000 and 3.04000)
// Leading Zeros -> zeros before a whole number which don't affect the value
// (e.g. the first three zeros in 000234 and 000230)
// Return a string
// If you get a number with .0 on the end, return the integer value
// (e.g. return "4" rather than "4.0").
// If the number is 0, 0.0, 000, 00.00, etc... return "0"
// Regex pattern for leading zeros -> /^0+/g
function removeLeadingTrailing(n) {
 
// Solution 1
return ` ${parseFloat(n)}`
// Solution 2
return Math.abs(n).toString()
}
console.log(removeLeadingTrailing("03.1400")) // ➞ "3.14"
console.log(removeLeadingTrailing("230.000")) // ➞ "230"
console.log(removeLeadingTrailing("00402")) // ➞ "402"
console.log(removeLeadingTrailing("30")) // ➞ "30"
console.log(removeLeadingTrailing("00")) // ➞ "0"

////////////////////////////////////////////////////////////////////////////////////////////

// 28. Get area of the country → 

// Get the Area of a Country
// Create a function that takes a country's name and its area as arguments
// and returns the area of the country's proportion of the total world's landmass.
// Round the result to two decimal places.
// The total world's landmass is 148,940,000 [Km^2]
function areaOfCountry(name, area) {
const perc = ((area / 148940000) * 100).toFixed(2)
  return `${name} is ${perc}% of the total world's landmass`
  // or
  `${name} is ${+(area / 1489400).toFixed(2)}% of the total world's landmass`;
}
console.log(areaOfCountry("Russia", 17098242))
// ➞ "Russia is 11.48% of the total world's landmass"
console.log(areaOfCountry("USA", 9372610))
// ➞ "USA is 6.29% of the total world's landmass"
console.log(areaOfCountry("Iran", 1648195))  
// ➞ "Iran is 1.11% of the total world's landmass"

////////////////////////////////////////////////////////////////////////////////////////////

// 29. Returning the total number of possible options for a given number → 

// Travelling Salesman Problem
// Return the total number of possible paths a salesman
// can travel - given n cities.
// If we have cities A, B and C, possible paths would be:
// A -> B -> C
// A -> C -> B
// B -> A -> C
// B -> C -> A
// C -> B -> A
// C -> A -> B
function paths(n) {
    return !n || n * paths(--n);
}
console.log(paths(4)) // ➞ 24
console.log(paths(1)) // ➞ 1
console.log(paths(9)) // ➞ 362880

////////////////////////////////////////////////////////////////////////////////////////////

// 30. Return the volume of a cone → 

// Create a function that takes the height and radius of a cone
// and returns the volume of the cone rounded to the nearest hundredth.
// Cone volume formula - V = πr2(h/3)
function coneVolume(h, r) {
  return +((Math.PI * Math.pow(r,2)) * (h/3)).toFixed(2)
}
console.log(coneVolume(3, 2)) // ➞ 12.57
console.log(coneVolume(15, 6)) // ➞ 565.49
console.log(coneVolume(18, 0)) // ➞ 0

////////////////////////////////////////////////////////////////////////////////////////////

// 31. Basic Calculator → 
 
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

// 32. Calculate the final price after the given discount → 

// Create a function that takes two arguments:
// the original price and the discount percentage as integers
// and returns the final price after the discount
// The answer should be rounded to two decimal places
function dis(price, discount) {
// Option 1
return +(((100 - discount) / 100 ) * price).toFixed(2)  
// Option 2
return +(price - ((price * discount) / 100)).toFixed(2)
}
console.log(dis(134.5, 17)) // ➞ 111.64
console.log(dis(1500, 50)) // ➞ 750
console.log(dis(89, 20)) // ➞ 71.2

////////////////////////////////////////////////////////////////////////////////////////////

// 33. Returning the thickness of a paper after being folded n times → 

// Create a function that returns the thickness (in meters)
// of a piece of paper after folding it n number of times
// The paper starts off with a thickness of 0.5mm
// There are 1000mm in a single meter
// Don't round answers
// Explanation how to calculate -
// Since it doubles each time you fold it,
// you should multiply the thickness by 2 on power of number of foldings
function numLayers(n) {
  // Option 1
  return `${((0.5 * Math.pow(2, n)) / 1000)}m`
  // Option 2
  return `${Math.pow(2, n-1) / 1000}m`
}
console.log(numLayers(1)) // ➞ "0.001m"
console.log(numLayers(4)) // ➞ "0.008m"
console.log(numLayers(21)) // ➞ "1048.576m"

////////////////////////////////////////////////////////////////////////////////////////////

// 34. Squaring every digit of a given number → 

// Create a function that squares every digit of a number
// The function receives an integer and must return an integer
function squareDigits(n) {
  // Option 1
  return +[...String(n)].map(e => e ** 2).join('')
// Option 2
  return +n.toString().split('').map(e => e ** 2).join('')
}
console.log(squareDigits(9119)) // ➞ 811181
console.log(squareDigits(2483)) // ➞ 416649
console.log(squareDigits(3212)) // ➞ 9414

////////////////////////////////////////////////////////////////////////////////////////////

// 35. Algebra Sequence - Boxes → 

// Algebra Sequence — Boxes
// Create a function that takes a number (step) as an argument
// and returns the amount of boxes in that step of the sequence
// Step 0: Start with 0
// Step 1: Add 3
// Step 2: Subtract 1
// Repeat Step 1 & 2 ...
// (0) - 0 / (1) - 3 / (2) - 2 / (3) - 5 / (4) - 4 / (5) - 7 / (6) - 6
// For an odd step add 3, for an even step subtract 1
function boxSeq(step) {
// My solution
return step % 2 === 0 ? step : step + 2
// Second solution
return step + (step % 2 * 2)
}
console.log(boxSeq(0)) // ➞ 0
console.log(boxSeq(1)) // ➞ 3
console.log(boxSeq(2)) // ➞ 2
console.log(boxSeq(3)) // ➞ 5
console.log(boxSeq(4)) // ➞ 4
console.log(boxSeq(5)) // ➞ 7
console.log(boxSeq(6)) // ➞ 6

////////////////////////////////////////////////////////////////////////////////////////////

// 36. Basic Arithmetic Operations (input as separate Strings) → 

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

// 37. Return sum of all fibonacci numbers that that odd and less or equal to the input number → 

// Return sum of all odd numbers that are less than
// or equal to num from the fibonacci sequence
// F(0) = 0 | F(1) = 1 | F(n) = F(n-1) + F(n-2)
// First 20 numbers -
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,
// 233, 377, 610, 987, 1597, 2584, 4181, 6765;
 
function sumFibs(num) {
  let prev = 0;
  let curr = 1;
  let result = 0;
  while (curr <= num) {
    if (curr % 2 !== 0) {
      result += curr;
    }
    curr += prev;
    prev = curr - prev;
  }
  return result;
}
console.log(sumFibs(75024)) // 60696
console.log(sumFibs(4000000)) // 4613732
 
////////////////////////////////////////////////////////////////////////////////////////////

// 38. Evaluating if a number is a repdigit → 

// Is the Number a Repdigit
// Repdigit -> a positive number composed out of the same digit.
// Create a function that takes an integer and
// returns whether it's a repdigit or not
// The number 0 should return true
function isRepdigit(num) {
// Option 1
   return new Set(`${num}`).size === 1
 
// Option 2
  return new Set('' + num).size === 1
  }
 
  // Numbers aren't iterables - have to convert first in order
  // to insert into a set
  console.log(isRepdigit(66)) // ➞ true
  console.log(isRepdigit(0)) // ➞ true
  console.log(isRepdigit(47)) // ➞ false
  console.log(isRepdigit(-11)) // ➞ false

////////////////////////////////////////////////////////////////////////////////////////////
