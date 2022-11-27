////////////////////////////////////////////////////////////////////////////////////////////

// 1. Check if two dates are equal → 

function equalChecker(a, b) {
    return a.valueOf() == b.valueOf();
}

////////////////////////////////////////////////////////////////////////////////////////////

// 2. How many days passed between two dates → 

// Return the number of days between two dates
// Input -> two date instances 
// Output -> the number of days that lies between those dates
function numsBetweenDates(a, b) {
    let res = (a.getTime() - b.getTime()) / (1000 * 3600 * 24);
    // converting to a positive number
    return Math.abs(res);
}
console.log(numsBetweenDates(new Date('2020-06-21'), new Date('2020-06-01')));
// output -> 20
console.log(numsBetweenDates(new Date('2000-01-01'), new Date('2020-06-01')));
// output -> 745

////////////////////////////////////////////////////////////////////////////////////////////

// 3. Check if one date is earlier than the other → 

// input -> two date instances (a and b) 
// It should return true if a is earlier than b
 
function checkingTheDates(a, b) {
    return a < b;
    // or
    // let aTime = Math.floor(a / 1000);
    // let bTime = Math.floor(b / 1000);
    // return aTime < bTime ? true : false;
}
console.log(checkingTheDates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));
// true
console.log(checkingTheDates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));
// false

////////////////////////////////////////////////////////////////////////////////////////////

// 4. Add n days to an existing date → 

// Write a function that takes as argument a date instance (a) and a number (b)
// It should add b days to a and return the number of milliseconds since January 1, 1970, 00:00:00 UTC
function addDays(a, b) {
    const currentDays = a.getDate();
    return a.setDate(currentDays + b)
    // or
    // let res = a.setDate(a.getDate() + b);
    // return res;
}

////////////////////////////////////////////////////////////////////////////////////////////

// 5. Calculate difference between two date objects (in hr, min and sec) → 

// input → two date instances 
// output → an object with the properties 'hrs', 'min', and 'sec'
// The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds
function dateDifference(a, b) {
    const dif = Math.abs(a - b);
    const hrs = Math.floor(dif / 1000 / 60 / 60);
    const min = Math.floor(dif / 1000 / 60) % (hrs * 60 || 60);
    const sec = Math.floor(dif / 1000) % (min * 60 + hrs * 60 * 60 || 60);
    return { hrs, min, sec }
  }
  console.log(dateDifference(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:10')));
// output -> { hrs: 0, min: 45, sec: 10 }
 
// what I did →
function dateDifference2(a, b) {
    // getting the diff in milliseconds
    let diff = Math.abs(a - b) / 1000;
    // hours
    let hours = Math.floor(diff / 3600) % 24;
    diff -= hours * 3600;
    // min
    let minutes = Math.floor(diff / 60) % 60;
    diff -= minutes * 60;
    // sec
    let seconds = Math.floor(diff) % 60;
    diff -= seconds;
    // returning an obj
    let res = {};
    res.hrs = hours;
    res.min = minutes;
    res.sec = seconds;
    return res;
}

////////////////////////////////////////////////////////////////////////////////////////////
