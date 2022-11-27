////////////////////////////////////////////////////////////////////////////////////////////

//////////////// Removing duplicates from an Array //////////////////////
 
// 1. By creating a new set( ) → 
let arr = ['A', 'B', 'A', 'C', 'B'];
let noDuplicatesArr = [...new Set(arr)];
// Output -
['A', 'B', 'C']
 
// 2. By using includes( ) and forEach( ) → 
let arr = ['A', 'B', 'A', 'C', 'B'];
let newArr = [];
arr.forEach((element) => {
    if (!newArr.includes(element)) {
        newArr.push(element);
    }
});
console.log(newArr);
// Output - ['A', 'B', 'C']
 
// 3. By using indexOf( ) and filter( ) → 
let arr = ['A', 'B', 'A', 'C', 'B'];
// The duplicate element is the element whose index is different from its indexOf() value ;
// To eliminate duplicates, the filter() method is used to include only the elements whose indexes match their indexOf values
// (the filer method returns a new array based on the operations performed on it)

let newArr = arr.filter((element, index) => {
    return arr.indexOf(element) === index;
});
// Output - ['A', 'B', 'C']
 
// 4. Getting the array of the duplicates → 
// If we need the duplicates, we can modify our function a little just by changing the condition -  
let dupChars = chars.filter((element, index) => {
    return chars.indexOf(element) !== index;
});
console.log(dupChars);
// ['A', 'B'] - Output
 

// Destructuring Arrays → 
// unpacking values from arrays;
const numbers = [1, 2, 3, 4, 5, 6, 7];
const [firstPlace, secondPlace, thirdPlace, ...theRest] = numbers;
// output:
// firstPlace - 1
// secondPlace - 2
// thirdPlace - 3
// theRest - [4, 5, 6, 7]
 

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////// Array intersection, difference, and union //////////////////////
 
// 1. Intersection → 
let intersection = arrA.filter(x => arrB.includes(x));

// 2. Difference → 
let difference = arrA.filter(x => !arrB.includes(x));

// 3. Symmetrical Difference → 
let difference = arrA.filter(x => !arrB.includes(x))
                 .concat(arrB.filter(x => !arrA.includes(x)));
// 4. Union → 
let union = [...new Set([...arrA, ...arrB)];
 
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////  Multiplying Elements of 2 different Arrays //////////////////////// 

// Multiply elements of two Arrays ->
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [10, 20, 30, 40, 50]

//  1. Using Reduce
let product = arr1.reduce((r, a, i) => r + a * arr2[i], 0)
console.log(product) // 550

//  2. Using for loop
let sum = 0;
for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i] * arr2[i];
}
console.log(sum) // 550

//  3. Array of the products as elements
let arr = [];
for (let i = 0; i < arr1.length; i++) {
    arr.push(arr1[i] * arr2[i])
}
console.log(arr) // [10, 40, 90, 160, 250]


////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////// 


////////////////////////////////////////////////////////////////////////////////////////////

// 1. Creating an array with a range of specific numbers → 
 
// 1. create an empty array
// 2. using for() starting from min and has to be smaller / equal to max
// 3. push it to the array (loops from min until max)
 
function numRange(min, max) {
   let arr = [];
    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
    return arr;
}
 
////////////////////////////////////////////////////////////////////////////////////////////

// 2. Grouping array of strings by first letter (returning separated arrays in an object) → 
 
// 1. Create an empty object
// 2. loop through the array and create 2 var ->
// a var of each element / str -> let item = arr[i]
// the first letter of the str ->  let firstLetter = item[0]
// 3. if a key of a certain letter doesn't exist -> create it []
// 4. not really sure honestly
function groupingOption(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        let firstLetter = item[0]
        if (!result[firstLetter]) {
            result[firstLetter] = [];
        }
        if (result[firstLetter].indexOf(item) < 0) {
            result[firstLetter].push(item);
        }
    }
    return result;
}
 
////////////////////////////////////////////////////////////////////////////////////////////

// 3. Determining if sum of two array elements is according to input → 
// 1. Two Number Sum
// Time Complexity and Space Complexity
function twoNumSum(arr, sum) {
    for (let i = 0; i < arr.length - 1; i++) {
        const firstNum = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            const secondNum = arr[j];
            if (firstNum + secondNum === sum) {
                return [firstNum, secondNum];
            }
        }
    }
    return [];
}
let arr = [3, 5, -4, 8, 11, 1, -1, 6]
console.log(twoNumSum(arr, 10)); // output [-1, 11]

////////////////////////////////////////////////////////////////////////////////////////////

// 4. Validating if an array is a subsequence of a given array → 
// subsequence - subsequence of a given sequence is a sequence that can be derived from the given sequence
// by deleting some or no elements without changing the order of the remaining elements;
// the int in the sequence have to be the same as in the og arr and also in the same order
// Steps ->  Look for the seq. array's first element in the array
// initialize a pointer under the 1st el. of the subseq
// and loop through the first arr until it's found
// once it's found - do the same for the next element in the subseq
// and at the same time moving forward w/ the arr elements too
// because order matters (no need to go back)
// First option
function isValidSubsequence(array, sequence) {
    let arrIdx = 0;
    let seqIdx = 0;
    while (arrIdx < array.length && seqIdx < sequence.length) {
        if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
        arrIdx++;
    }
    return seqIdx === sequence.length;
}
// Second option
function isValidSubsequence(array, sequence) {
let seqIdx = 0;
for (const value of array) {
if (seqIdx === sequence.length) break;
if (sequence[seqIdx] === value) seqIdx++;
}
return seqIdx === sequence.length;
}
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [22, 25, 6]));
// true

////////////////////////////////////////////////////////////////////////////////////////////

// 5. Returning a Sorted Squared Array - of squared values in an ascending order (some elements might be negative values) → 

// Solution 1
// 1. Traverse the array value by value - square each value and insert in the output arr
// 2. Sorting the values - directly insert them into their position in the output arr once squared
function sortedSquaredArray(array) {
// initializing a new empty array with 0's
const res = new Array(array.length).fill(0);
// taking the value of each arr element and square it
// and putting in the new arr
for (let i = 0; i < array.length; i++) {
    const value = array[i];
    res[i] = value * value;
}
// sorting the sqw values in ascending order in the output arr
res.sort((a, b) => a - b);
return res;
}
console.log(sortedSquaredArray([-50, -33, -7, -6, -4, 1, 2, 3, 4, 5]));
// Output -> [1, 4, 9, 16, 16, 25, 36, 49, 1089, 2500]
 
// Solution 2
// 1. initialize a new empty array
// 2. look at the abs. value of each el in the input arr
// 3. compare those (abs) values and square the largest and push() to the end of the arr
// 4. using 2 pointers -> start and end (largest pos and largest neg val)
// squaring the largest absolute val first, and place it at the end of the output arr
// fill the output arr from right to left & move pointers accordingly
function sortedSquaredArray(array) {
    const res = new Array(array.length).fill(0);
    // The pointers
    let smallerValIdx = 0;
    let largerValIdx = array.length - 1; // last index of the arr
    // looping through the arr in reverse | starting at the last index
    // looping right -> left
    for (let i = array.length - 1; i >= 0; i--) {
        // getting the smaller and larger val at their idx
        const smallerVal = array[smallerValIdx];
        const largerVal = array[largerValIdx];

        if (Math.abs(smallerVal) > Math.abs(largerVal)) {
            res[i] = smallerVal * smallerVal;
            smallerValIdx++;
        } else {
            res[i] = largerVal * largerVal;
            largerValIdx--;
        }
    }
    return res;
}
console.log(sortedSquaredArray([-50, -33, -7, -6, -4, 1, 2, 3, 4, 5]));
// Output -> [1, 4, 9, 16, 16, 25, 36, 49, 1089, 2500]
 
////////////////////////////////////////////////////////////////////////////////////////////

// 6. Non constructible change algorithm   →   

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
// 2. Loop one coin at the time & keep track how much change can be created
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
 
// 7. Determining if the first array has a slightly superior value than the second input array → 

// Slightly Superior Value
// input -> two extremely similar arrays (both same length, same data types)
// but exactly one of the items in an array will be valued slightly higher than its counterpart
// output -> T/F whether the first array is slightly superior to that of the second
// If the two arrays are the same, return false;
// Steps ->
// convert to string like + merge together to get a single val of each arr
// then compare for the return value
function isFirstSuperior(arr1, arr2) {
    let res = arr1.join('') > arr2.join('') ? true : false
    return (arr1.join('') === arr2.join('')) ? false : res
}
console.log(isFirstSuperior([1, 2, 4], [1, 2, 3])); // true
console.log(isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4])); // false
console.log(isFirstSuperior(["a", "d", "c"], ["a", "b", "c"])); // true

////////////////////////////////////////////////////////////////////////////////////////////

// 8. Sorting Objects inside an Array → 

// Sort Objects inside an Array
// output -> the drinks objects sorted by price in ascending order.
// Input -> array of drinks, with each drink being an object with two properties: name and price
function sortDrinkByPrice(drinks) {
    let res = [...drinks];
    res.sort((a, b) => {
        return a.price - b.price;
    })
    return res;
}
let drinks1 = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 }
];
console.log(sortDrinkByPrice(drinks1))
// output [{name: "lime", price: 10}, {name: "lemonade", price: 50// Slightly Superior Value

////////////////////////////////////////////////////////////////////////////////////////////

// 9. Filter out strings and only leaving numbers from an Array →  

// Create a function that takes an array of non-negative integers and strings
// and return a new array without the strings.
// Zero is a non-negative integer.
// Numbers in the array should not repeat.
// The original order must be maintained.
function filterArray(arr) {
    return arr.filter(el => typeof (el) === 'number');
}
console.log(filterArray([1, 2, "a", "b"])) // ➞ [1, 2]
console.log(filterArray([1, "a", "b", 0, 15])) // ➞ [1, 0, 15]

////////////////////////////////////////////////////////////////////////////////////////////
 
// 10. Calculate Minimum Waiting Time → 

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
 
// 11. Sort Strings in the Array by ascending order (length) → 

// Sort by String Length
// Create a function that returns an array of strings sorted by length in ascending order.
// Strings will have unique lengths, so don't worry about comparing two strings with identical length.
// Return an empty array if the input array is empty
function sortByLength(arr) {

    return arr.sort((a, b) => a.length - b.length);
}
console.log(sortByLength(["a", "ccc", "dddd", "bb"])) // ➞ ["a", "bb", "ccc", "dddd"]
console.log(sortByLength(["may", "april", "september", "august"])); // ➞ ["may", "april", "august", "september"]
console.log(sortByLength([])); // ➞ []

////////////////////////////////////////////////////////////////////////////////////////////

// 12. Sum of cubes of an array → 

// Sum of Cubes
// Create a function that takes in an array of numbers and returns the sum of its cubes.
// sumOfCubes([1, 5, 9]) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

function sumOfCubes(nums) {
    return nums.map(el => el ** 3).reduce((a, b) => a + b, 0);
}
console.log(sumOfCubes([3, 4, 5])) // ➞ 216
console.log(sumOfCubes([2])); // ➞ 8
console.log(sumOfCubes([])); // ➞ 0
 
////////////////////////////////////////////////////////////////////////////////////////////
 
// 13. Returning all the even numbers with an even index number → 

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

// 14. Lodash .dropRight function in Vanilla JS → 

// Lodash: .dropRight - Drop the Last Elements of an Array
// Create a slice of an array with n elements dropped from the end
function dropRight(arr, num = 1) {
    return arr.splice(0, arr.length - num);
}
console.log(dropRight([1, 2, 3])); // ➞ [1, 2]
console.log(dropRight([1, 2, 3], 2)); // ➞ [1]
console.log(dropRight([1, 2, 3], 5)); //  ➞ []
console.log(dropRight([1, 2, 3], 0)); // ➞ [1, 2, 3]
 
////////////////////////////////////////////////////////////////////////////////////////////

// 15. Return sum of absolute values of the array variables → 

// Absolute Sum
// Take an array of integers (positive or negative or both)
// and return the sum of the absolute value of each element.
function getAbsSum(arr) {
    return arr.reduce((acc, curr) => acc + Math.abs(curr), 0);
}
console.log(getAbsSum([2, -1, 4, 8, 10])); // 25
console.log(getAbsSum([-3, -4, -10, -2, -3])); // 22
console.log(getAbsSum([2, 4, 6, 8, 10])); // 30
console.log(getAbsSum([-1])); // 1
 
////////////////////////////////////////////////////////////////////////////////////////////

// 16. Check for null, undefined or [ ] and then return in ascending order → 

// Sort Numbers in Ascending Order
// Create a function that takes an array of numbers
// and returns a new array, sorted in ascending order
// If the function's argument is null, an empty array, or undefined; return an empty array.
// Return a new array of sorted numbers.
function sortNumsAscending(arr) {
    if (arr === undefined || arr === null) return [];
    return arr.sort((a, b) => a - b);
}
console.log(sortNumsAscending([1, 2, 10, 50, 5])); // ➞ [1, 2, 5, 10, 50]
console.log(sortNumsAscending([80, 29, 4, -95, -24, 85])); // ➞ [-95, -24, 4, 29, 80, 85]
console.log(sortNumsAscending([])); // []
console.log(sortNumsAscending(null)); // []
console.log(sortNumsAscending(undefined)); // []

////////////////////////////////////////////////////////////////////////////////////////////

// 17. Find largest numbers in a group of arrays → 

// Find the Largest Numbers in a Group of Arrays
// Create a function that takes an array of arrays with numbers
// Return a new (single) array with the largest numbers of each.
// Watch out for negative integers (numbers).
function findLargestNums(arr) {
    return arr.map(el => Math.max(...el));
}
console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])); 
//   ➞ [7, 90, 2]
console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])); 
// ➞ [-34, -2, 7]
console.log(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]])); 
//  ➞ [0.7634, 9.32, 9]
 
////////////////////////////////////////////////////////////////////////////////////////////

// 18. Transform into an array with no duplicates → 

// Transform into an Array with No Duplicates
// A set is a collection of unique items.
// A set can be formed from an array by removing all duplicate items.
// Create a function that sorts an array and removes all duplicate items from it.
// Output an array, not a set.
function set(arr) {
    // Option 1.
    return [...new Set(arr)]
    // Option 2.
    return Array.from(new Set(arr));
    // My solution -
    return arr.filter((el, i) => arr.indexOf(el) === i);
}
console.log(set([1, 3, 3, 5, 5])) // ➞ [1, 3, 5]
console.log(set([4, 4, 4, 4])) // ➞ [4]

////////////////////////////////////////////////////////////////////////////////////////////

// 19. Phone Number Formatting → 

// Phone Number Formatting
// Create a function that takes an array of 10 numbers (between 0 and 9)
// and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).
// Don't forget the space after the closing parenthesis.
function formatPhoneNumber(numbers) {
    // My solution
    let first = numbers.slice(0, 3).join('');
    let second = numbers.slice(3, 6).join('');
    let third = numbers.slice(6).join('')
    return `(${first}) ${second}-${third}`
    // A better solution
    let arr = "(XXX) XXX-XXXX".split('');
    numbers.forEach(n => {
        arr[arr.indexOf('X')] = n;
    });
    return arr.join('');
}
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // ➞ "(123) 456-7890"
console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8])) // ➞ "(519) 555-4468"
console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7])) //  ➞ "(345) 501-2527"
 
////////////////////////////////////////////////////////////////////////////////////////////
 
// 20. Currying Function - multiplying array elements by given integer → 

// Currying Functions
// find a way to to multiply an array of numbers using currying functions
// Create a function which takes a array arr of integers as an argument.
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
  
// 21. Amplify the Multiples of four → 

// Amplify the Multiples of Four
// Generate a sequence of consecutive numbers -
// the first one will always be 1, up to a variable given higher bound (num)
// Each number of the sequence that can be exactly divided by 4 must be amplified by 10
// The given parameter num will always be equal to or greater than 1.
function amplify(num) {
    // Solution 1
    return Array(num).fill(1).map((el, i) => el + i)
        .map(el => el % 4 === 0 ? el * 10 : el)
    // Solution 2 (my solution)
    let arr = new Array(num).fill(1).map((el, i) => i + 1)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 4 === 0) {
            arr[i] *= 10;
        }
    }
    return arr;
}
console.log(amplify(4)) // ➞ [1, 2, 3, 40]
console.log(amplify(3)) // ➞ [1, 2, 3]
console.log(amplify(25));
// ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
 
////////////////////////////////////////////////////////////////////////////////////////////
 
// 22. Create an array based on inputs (from what to what number) and return only elements that are divisible by n → 

// Array Operation
// Create a function that takes three parameters -
// x is the start of the range (inclusive)
// y is the end of the range (inclusive)
// n is the divisor to be checked against
// Return an ordered array with numbers in the range
// that are divisible by the third parameter n.
// Return an empty array if there are no numbers that are divisible by n.
function arrayOperation(x, y, n) {
    let arr = [];
    for (let i = x; i <= y; i++) {
        if (i % n === 0) arr.push(i)
    }
    return arr
}
console.log(arrayOperation(1, 10, 3)) // ➞ [3, 6, 9]
console.log(arrayOperation(7, 9, 2)) // ➞ [8]
console.log(arrayOperation(15, 20, 7)) // ➞ []
 
////////////////////////////////////////////////////////////////////////////////////////////

// 23. Return the highest possible sum of an Array by using 5 of 10 of it’s elements values → 

// Maximum Possible Total
// Given an array of 10 numbers,
// return the maximum possible total made by summing just 5 of the 10 numbers
// You can select any 5 numbers from the given array to form the maximum possible total.
function maxTotal(nums) {
    return nums.sort((a, b) => b - a).slice(0, 5).reduce((a, b) => a + b)
}
console.log(maxTotal([1, 2, 5, 4, 3, 10, 20, 30, 40, 50])); // 150
console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1])); // 43
console.log(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100])); // 100
console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 40

////////////////////////////////////////////////////////////////////////////////////////////

// 24. Determining of there’s an omnipresent value in each nested array of the input array → 

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
 
// 25. Convert Numbers to Arrays and Arrays to Numbers → 

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

// 26. Check if one Array is a subset of another Array → 

// Check if One Array is a Subset of Another
// Create a function that returns true if the first array is a subset of the second
// Return false otherwise
// Both arrays will contain only unique values
function isSubset(arr1, arr2) {
    return arr1.every(e => arr2.includes(e))
}
console.log(isSubset([3, 2, 5], [5, 3, 7, 9, 2])) // ➞ true
console.log(isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6])) // ➞ true
console.log(isSubset([1, 2], [3, 5, 9, 1])) // ➞ false
 
////////////////////////////////////////////////////////////////////////////////////////////

// 27. Summing a slice of an Array → 

// Summing a Slice
// Given an array and an integer n,
// return the sum of the first n numbers in the array.
// If n is larger than the length of the array, return the sum of the whole array.
function sliceSum(arr, n) {
    return arr.slice(0, n).reduce((a, b) => a + b, 0)
}
console.log(sliceSum([1, 3, 2], 6)) // ➞ 6
console.log(sliceSum([1, 3, 2], 2)) // ➞ 4
console.log(sliceSum([4, 2, 5], 4)) // ➞ 11
console.log(sliceSum([4, 2, 5, 7], 4)) // ➞ 18
console.log(sliceSum([3, 6, 2], 0)) // ➞ 0
 
////////////////////////////////////////////////////////////////////////////////////////////

// 28. Count how many ones there are in the 2D Array → 

// Create a function to count the number of 1s in a 2D array.
function countOnes(matrix) {
    return matrix.flat().filter(e => e === 1).length
}
console.log(countOnes([[1, 1, 1], [0, 0, 1], [1, 1, 1]])) // ➞ 7
console.log(countOnes([[1, 0], [0, 0]])) // ➞ 1
console.log(countOnes([[1, 2, 3], [0, 2, 1], [5, 7, 33]])) // ➞ 2
 
////////////////////////////////////////////////////////////////////////////////////////////
 
// 29. Return the Number of users in the chatroom → 

// Chat Room Status
// Write a function that returns the number of users in a chatroom based on the following rules:
// 1. If there is no one, return "no one online".
// 2. If there is 1 person, return "user1 online".
// 3. If there are 2 people, return "user1 and user2 online".
// 4. If there are n>2 people, return the first two names and add "and n-2 more online".
// For example, if there are 5 users, return:
// "user1, user2 and 3 more online"
function chatroomStatus(users) {
    // My Solution
    if (users.length === 0) return `no one online`
for (let i = 0; i < users.length; i++) {
    if (users.length === 1) return `${users[i]} online`
    if (users.length === 2) return `${users[i]} and ${users[i+1]} online`
    else return `${users[i]}, ${users[i+1]} and ${users.length -2} more online`
}
// Other Option
switch (users.length){
    case 0: return "no one online"
    case 1: return users[0]+' online'
    case 2: return users[0]+' and '+users[1]+ ' online'
    default: return users[0]+', '+users[1]+' and '+(users.length-2)+' more online'
}
}
console.log(chatroomStatus([])); // ➞ "no one online"
console.log(chatroomStatus(["paRIE_to"])); // ➞ "paRIE_to online"
console.log(chatroomStatus(["s234f", "mailbox2"])); //  ➞ "s234f and mailbox2 online"
console.log(chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"])); // ➞ "pap_ier44, townieBOY and 4 more online"
 
////////////////////////////////////////////////////////////////////////////////////////////
 
// 30. Function that takes a word (String) and spells it out (Array) → 
 
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

// 31. Return just the first and last index of a given character in a String -> 

// First and Last Index
// Given a word, write a function that returns the first index
// and the last index of a character.
// If the character does not exist in the word, return undefined.
// If only one instance of the character exists, the first and last index will be the same.
function charIndex(word, char) {

    return word.includes(char) ? [word.indexOf(char), word.lastIndexOf(char)] : undefined

}
console.log(charIndex("hello", "l")) // ➞ [2, 3]
console.log(charIndex("circumlocution", "c")) // ➞ [0, 8]
console.log(charIndex("happy", "h")) // ➞ [0, 0]
console.log(charIndex("happy", "e")) // ➞ undefined

////////////////////////////////////////////////////////////////////////////////////////////

// 32. Returning the right information according to the input (stored in an array) → 

// Create a function that takes a number x and
// a character y ("m" for male, "f" for female)
// and returns the name of an ancestor (m/f) or descendant (m/f)
// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".
// table with rules -> https://edabit.com/challenge/48EJWLhF224na8po3
function generation(x, y) {
    let female = ['great grandmother', 'grandmother', 'mother', 'me!', 'daughter', 'granddaughter', 'great granddaughter']
    let male = ['great grandfather', 'grandfather', 'father', 'me!', 'son', 'grandson', 'great grandson']
    return y === 'f' ? female[x + 3] : male[x + 3]
}
console.log(generation(1, "f")) // ➞ "daughter"
console.log(generation(2, "f")) // ➞ "granddaughter"
console.log(generation(-3, "m")) // ➞ "great grandfather"

////////////////////////////////////////////////////////////////////////////////////////////

// 33. Concating all input sub-arrays into one in their order → 

// Concatenate Variable Number of Input Arrays
// Create a function that concatenates n input arrays, where n is variable.
// Arrays should be concatenated in order of the arguments.
function concat(...args) {
    return args.flat()
}
console.log(concat([1, 2, 3], [4, 5], [6, 7])) // ➞ [1, 2, 3, 4, 5, 6, 7]
console.log(concat([1], [2], [3], [4], [5], [6], [7])) // ➞ [1, 2, 3, 4, 5, 6, 7]
console.log(concat([1, 2], [3, 4])) // ➞ [1, 2, 3, 4]
console.log(concat([4, 4, 4, 4, 4])) // ➞ [4, 4, 4, 4, 4]

////////////////////////////////////////////////////////////////////////////////////////////
 
// 34. Calculate the amount of change that’s in the pocket → 
 
// Given a total due and an array representing the amount of change in your pocket,
// determine whether or not you are able to pay for the item.
// Change will be represented in the following order:
// quarters, dimes, nickels, pennies.
// quarter: 25c/$0.25 | dime: 10c/$0.10 | nickel: 5c/$0.05 | penny: 1c/$0.01
 
// Solution 1 (my solution) ->
 function changeEnough(change, amountDue) {
 
    const amount = [0.25, 0.10, 0.05, 0.01]
    return change.reduce((a, b, i) => a + b * amount[i], 0) >= amountDue;
}
console.log(changeEnough([0, 0, 20, 5], 0.75)) // ➞ true
console.log(changeEnough([30, 40, 20, 5], 12.55)) // ➞ true
console.log(changeEnough([10, 0, 0, 50], 3.85)) // ➞ false
console.log(changeEnough([1, 0, 5, 219], 19.99)) // ➞ false
console.log(changeEnough([2, 100, 0, 0], 14.11)) // ➞ false

// Solution 2 ->
 function changeEnough([q, d, n, p], amountDue) {
 
    return (q * 0.25 + d * 0.1 + n * 0.05 + p * 0.01) >= amountDue
}

// Solution 3 ->
 changeEnough = (a, b) => (a[0] / 4 + a[1] / 10 + a[2] / 20 + a[3] / 100) >= b

// Solution 4 ->
 function changeEnough(change, amountDue) {
    let [q, d, n, p] = change;
    return (q * .25) + (d * .10) + (n * .05) + (p * .01) >= amountDue;
}
 
////////////////////////////////////////////////////////////////////////////////////////////

// 35. Array of multiples → 
 
// // Array of Multiples
// // Create a function that takes two numbers as arguments (num, length)
// // and returns an array of multiples of num until the array length reaches length.
// // num is also included in the returned array.
 
// Solution 1 (my solution) ->
function arrayOfMultiples(num, length) {
 
    let res = Array.from(Array(length + 1).fill(num), (e, i) => e * i)
    res.shift(res[0])
    return res
}
 
// Solution 2 ->
const arrayOfMultiples = (num, length) =>
    Array.from({ length }, (_, i) => num * (i + 1));
 
// Solution 3 ->
function arrayOfMultiples(num, length) {
    let result = []
    for (let i = 1; i <= length; i++) {
        result.push(num * i)
    }
    return result
}
 
console.log(arrayOfMultiples(7, 5)) // ➞ [7, 14, 21, 28, 35]
console.log(arrayOfMultiples(12, 10)) // ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
console.log(arrayOfMultiples(17, 6)) // ➞ [17, 34, 51, 68, 85, 102]
 
////////////////////////////////////////////////////////////////////////////////////////////

// 36. Finding adjustment nodes in a multidimensional Array → 
 
// Finding Adjacent Nodes
// For two nodes in a graph to be considered adjacent to one another,
// there must be an edge between them.
// An adjacency matrix for a graph with "n" nodes is an "n * n" matrix
// where the entry at row "i" and column "j" is a 0 if nodes "i" and "j" are not adjacent,
// and 1 if nodes "i" and "j" are adjacent.
// Example ->
// [  [ 0, 1, 0, 0 ], -> node 0 connects to node 1 | doesn't to itself, 2, and 3;
//   [ 1, 0, 1, 1 ], -> node 1 connects to node 0, 2, 3 | doesn't to itself;
//   [ 0, 1, 0, 1 ], -> node 2 connects to node 1 and 3 | doesn't to itself and 0;
//   [ 0, 1, 1, 0 ]  ] ->  node 3 connects to node 1 and node 2 | doesn't itself and 0;
// Your task is to determine if two nodes are adjacent in an undirected graph
// when given the adjacency matrix and the two nodes.
 
function isAdjacent(matrix, node1, node2) {
 
    return matrix[node1][node2] === 1
}
// Test 1  
let matrix1 = [
    [0, 1, 0, 0],
    [1, 0, 1, 1],
    [0, 1, 0, 1],
    [0, 1, 1, 0]
]
console.log(isAdjacent(matrix1, 0, 1)) // -> true
console.log(isAdjacent(matrix1, 0, 2)) // -> false
// // Test 2
let matrix2 = [
    [0, 1, 0, 1, 1],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 1, 0]
]
console.log(isAdjacent(matrix2, 0, 3)) // -> true
console.log(isAdjacent(matrix2, 1, 4)) // -> false

////////////////////////////////////////////////////////////////////////////////////////////
 
// 37.  Sorting the input (mixed) Array → 
 
// Sort the Unsortable
// Input -> Array, and its elements are either an integer
// or an array containing a single integer
// Create a function that sorts the array according to the
// content of the elements, and in an ascending order;
function sortIt(arr) {
 
  return [...arr].sort((a, b) => a - b)
}
console.log(sortIt([4, 1, 3])) // ➞ [1, 3, 4]
console.log(sortIt([4, [1], 3])) // ➞ [[1], 3, 4]
console.log(sortIt([[4], [1], [3]])) // ➞ [[1], [3], [4]]
console.log(sortIt([[4], 1, [3]])) // ➞ [1, [3], [4]]
console.log(sortIt([[3], 4, [2], [5], 1, 6])) // ➞ [1, [2], [3], 4, [5], 6]
 
////////////////////////////////////////////////////////////////////////////////////////////
 
// 38.  Checking if 2 Arrays are equal → 
 
// Value vs. Reference Types
// Create a function that returns true if two arrays contain identical values,
// and false otherwise
// To be equal, the arrays must have the same elements in the same order
function checkEquals(arr1, arr2) {
// Solution 1
  return JSON.stringify(arr1) == JSON.stringify(arr2)
// Solution 2
return arr1.every((x, i) => x == arr2[i])
// Solution 3
return arr1.toString() == arr2.toString();
}
console.log(checkEquals([1, 2], [1, 2])) // ➞ true
console.log(checkEquals([4, 5, 6], [4, 5, 6])) // ➞ true
console.log(checkEquals([1, 2], [1, 3])) // ➞ false
console.log(checkEquals([4, 7, 6], [4, 5, 6])) // ➞ false
 
////////////////////////////////////////////////////////////////////////////////////////////

// 39. Return second largest number of the given Array → 
 
// Return the Second Largest Number
// Create a function that takes an array of numbers
// and returns the second largest number.
// There will be at least two numbers in the array.
function secondLargest(arr) {
return arr.sort((a, b) => b - a)[1]
}
 
console.log(secondLargest([10, 40, 30, 20, 50])) // ➞ 40
console.log(secondLargest([25, 143, 89, 13, 105])) // ➞ 105
console.log(secondLargest([54, 23, 11, 17, 10])) // ➞ 23
 
////////////////////////////////////////////////////////////////////////////////////////////
 
// 40. Returning an array containing all the falsy values filtered of the input array → 

// In  lodash  _.compact creates an array with all falsey values removed
// The values false, null, 0, "", undefined, and NaN are falsey
// Build this helper function without using lodash
// The function receives an array and removes all falsey values
function compact(arr) {
 
  // Solution 1
  return arr.filter(e => e);
 
  // Solution 2
  return arr.filter(Boolean)
  // The Boolean object is an object wrapper for a boolean value.
 
  // Solution 3 (my solution)
  let falsy = [false, null, 0, "", undefined, NaN]
  return arr.filter(e => !falsy.includes(e))
}
console.log(compact([0, 1, false, 2, "", 3])) // => [1, 2, 3])

////////////////////////////////////////////////////////////////////////////////////////////
 
// 41. Clone the array and add it to the original one → 
 
// Clone an Array
function clone(arr) {
  return [...arr, arr]
}
console.log(clone([1, 1])) // ➞ [1, 1, [1, 1]]
console.log(clone([1, 2, 3])) // ➞ [1, 2, 3, [1, 2, 3]]
console.log(clone(["x", "y"])) // ➞ ["x", "y", ["x", "y"]]
 
////////////////////////////////////////////////////////////////////////////////////////////
 
// 42. Check for jackpot - if all Array elements are identical → 
 
// Create a function that takes in an array (slot machine outcome)
// and returns true if all elements in the array are identical,
// and false otherwise
// The array will contain 4 elements
// The elements must be exactly identical for there to be a jackpot
function testJackpot(result) {
// Option 1
  return new Set(result).size === 1
 
// Option 2
  return result.every(x => x === result[0]);  
}
console.log(testJackpot(["@", "@", "@", "@"])) // ➞ true
console.log(testJackpot(["abc", "abc", "abc", "abc"])) // ➞ true
console.log(testJackpot(["SS", "SS", "SS", "SS"])) // ➞ true
console.log(testJackpot(["&&", "&", "&&&", "&&&&"])) // ➞ false
console.log(testJackpot(["SS", "SS", "SS", "Ss"])) // ➞ false
 
////////////////////////////////////////////////////////////////////////////////////////////

// 43. Return sum of the Number elements of the given Array → 
 
// Sum of Number Elements in an Array
// Create a function that takes a mixed array and
// returns the sum of all numbers in the array
function numbersSum(arr) {
// Solution 1
return arr.reduce((a, b) => a + (typeof b === 'number' ? b : 0), 0)
 
// Solution 2
return arr.filter(e => typeof(e) === 'number')
  .reduce((a, b) => a + b, 0);
 
// Solution 3 (my solution)
let nums = arr.filter(e => Number.isInteger(e))
return nums.length !== 0 ? nums.reduce((a, b) => a + b) : 0
}
console.log(numbersSum([1, 2, "13", "4", "645"])) // ➞ 3
console.log(numbersSum([true, false, "123", "75"])) // ➞ 0
console.log(numbersSum([1, 2, 3, 4, 5, true])) // ➞ 15
 
////////////////////////////////////////////////////////////////////////////////////////////

// 44. Return T if sum of all num in the Array is 25 (& convert negative to positive) →
 
// Return true if the sum of the int in the array is 25
// If num is negative - convert it to a positive
// Return false if the arguments are empty or not provided
function marathonDistance(d) {
  return d.map(e => Math.abs(e)).reduce((a, b) => a + b, 0) === 25
}
console.log(marathonDistance([1, 9, 5, 8, 2])) // ➞ true
console.log(marathonDistance([-6, 15, 4])) // ➞ true
console.log(marathonDistance([1, 2, 3, 4])) // ➞ false
 
////////////////////////////////////////////////////////////////////////////////////////////
 
// 45. Add 7 to each the end of Array element unless it already contains it → 
 
// Create a function which concatenates the number 7
// to the end of every chord in an array
// Ignore all chords which already end with 7
// Return an empty array if the given array is empty
function jazzify(arr) {
 
  return arr.map(e => e.includes('7') ? e :  e+'7')
}
console.log(jazzify(["Dm", "G", "E", "A"])) // ➞ ["Dm7", "G7", "E7", "A7"]
console.log(jazzify(["G", "F", "C"])) // ➞ ["G7", "F7", "C7"]
console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"])) // ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
console.log(jazzify([])) // ➞ []
 
////////////////////////////////////////////////////////////////////////////////////////////
 
// 46. Multiple elements of each sub-array and return the sum → 
 
// Given an array of boxes, create a function that returns  
// the total volume of all those boxes combined together
// A box is represented by an array with three elements:
// length, width and height;
// Example - ([2, 3, 2], [6, 6, 7], [1, 2, 1]) =
// (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266
function totalVolume(...boxes) {
 
  return [...boxes].map(e => e.reduce((a, b) => a * b)).reduce((a, b) => a + b)
}
console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])) // ➞ 63
console.log(totalVolume([2, 2, 2], [2, 1, 1])) // ➞ 10
console.log(totalVolume([1, 1, 1])) // ➞ 1
 
////////////////////////////////////////////////////////////////////////////////////////////

// 47. Multiple each element by its index and return the sum 

// Index Multiplier
// Return the sum of all items in an array,
// where each item is multiplied by its index (zero-based)
// (e1 * 0 + e2 * 1 + e3 * 2... )
// For empty arrays, return 0
function indexMultiplier(arr) {
  // Solution 1
  return arr.reduce((curr, val, i) => curr + val * i, 0);
 
  // Solution 2
  return arr.map((e, i) => e * i).reduce((a, b) => a + b, 0);
}
console.log(indexMultiplier([ ])) // ➞ 0
console.log(indexMultiplier([1, 2, 3, 4, 5])) // ➞ 40
console.log(indexMultiplier([-3, 0, 8, -6])) // ➞ -2

////////////////////////////////////////////////////////////////////////////////////////////

// 48. Check if even value element has even index, and the other way around → 
 
// Special Arrays
// An array is special if every even index contains an even number
// and every odd index contains an odd number
// Create a function that returns true if an array is special,
// and false if it's not
function isSpecialArray(arr) {
 
  return arr.every((e, i) => e % 2 === i % 2);
};
console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])) // ➞ true
// Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]
console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])) // ➞ false
// Index 2 has an odd number 9.
console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])) // ➞ false
// Index 3 has an even number 8.
 
////////////////////////////////////////////////////////////////////////////////////////////
 
// 49. Filtering out Falsy Values → 
 
function bouncer(arr) {
  return arr.filter(e => !e == false)
}
 
console.log(bouncer([7, "ate", "", false, 9])) // [7, "ate", 9]
console.log(bouncer(["a", "b", "c"])) // ["a", "b", "c"]
console.log(bouncer([false, null, 0, NaN, undefined, ""])) // []
 
////////////////////////////////////////////////////////////////////////////////////////////

// 50. Splitting the input array into n sub-arrays → 


function chunkArrayInGroups(arr, size) {
  const res = [];
  let i = 0;
  while (i < arr.length) {
    res.push(arr.slice(i, i += size))
    }
  return res;
  }
 
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))
// [["a", "b"], ["c", "d"]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3))
// // [[0, 1, 2], [3, 4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2))
// // [[0, 1], [2, 3], [4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4))
// // [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
 


////////////////////////////////////////////////////////////////////////////////////////////

 
