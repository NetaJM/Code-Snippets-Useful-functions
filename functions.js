////////////////////////////////////////////////////////////////////////////////////////////

// 1. Function that takes a string and returns a func. that returns that str → 

// A Redundant Function
// Write a function that takes in a string  
// and returns a function that returns str.
// Your function should return a function, not a string.
 
function redundant(str) {
    return () => str
}
 
const f1 = redundant("apple")
console.log(f1()) // ➞ "apple"
const f2 = redundant("pear")
console.log(f2()) // ➞ "pear"
const f3 = redundant("")
console.log(f3()) // ➞ ""

////////////////////////////////////////////////////////////////////////////////////////////

// 2. Anonymous Function / adding suffixes → 

// Anonymous Functions: Adding Suffixes
// Write a function that returns an anonymous function,
// which transforms its input by adding a particular suffix at the end.
 
const add_suffix = suffix => word => word + suffix;

add_ly = add_suffix("ly")
console.log(add_ly("hopeless")) // ➞ "hopelessly"
console.log(add_ly("total")) // ➞ "totally"
add_less = add_suffix("less")
console.log(add_less("fear")) // ➞ "fearless"
console.log(add_less("ruth")) // ➞ "ruthless"

////////////////////////////////////////////////////////////////////////////////////////////

// Currying and Closure → 

// Currying is when you break down 
// a function that takes multiple arguments into a series of 
// functions - that each take only one argument. 
 
// A regular function that takes two arguments, a and b, and returns their sum → 

function add (a, b) {
    return a + b;
  }
  add(3, 4); // returns 7

// Currying that function → 

function add(a) {
    return function (b) {
        return a + b;
    }
}

// Another example -> 
// find a way to to multiply an array of numbers using currying functions
// Create a function which takes a array of integers as an argument.
// This function must return another function,
// which takes a single integer as an argument and returns a new array.
// The returned array should consist of each of the elements
// from the first array multiplied by the integer.
 
// Option 1
multiply = arr => a => arr.map(e => e * a)
 
// Option 2 (what I did)
function multiply(arr) {
    return function b(int) {
        return arr.map(el => el * int);
    }
}
console.log(multiply([1, 2, 3])(2)); // ➞ [2, 4, 6]
console.log(multiply([4, 6, 5])(10)) // ➞ [40, 60, 50]
console.log(multiply([1, 2, 3])(0)) // ➞ [0, 0, 0]


////////////////////////////////////////////////////////////////////////////////////////////

