////////////////////////////////////////////////////////////////////////////////////////////

// Fibonacci Sequence → 

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,
     144, 233, 377, 610, 987, 1597, 2584, 4181, 6765];
// F(0) = 0 | F(1) = 1 | F(n) = F(n-1) + F(n-2)

// Meaning → the curr value = previous value + its previous value → 8 = 5 + 3
 
//////////////////////////////////////////////////////////////////////////////////////////// 

// Smooth scrolling → 

Option (1) 
section.scrollIntoView({ behavior: 'smooth' });
 
// Option (2)   (smooth scrolling + the coordinates)
window.scrollTo({
    left: coords.left + window.pageXOffset,
    top: coords.top + window.pageYOffset,
    behavior: 'smooth'
});
 
////////////////////////////////////////////////////////////////////////////////////////////

// Making Sticky Navigation → The intersection observer API 
 
const obsCallback = function (entries, observer) {
    entries.forEach(entry => {
    })
}
const obsOptions = {
    root: null,
    threshold: [0, 0.2],
};
new observer = IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
 
////////////////////////////////////////////////////////////////////////////////////////////
 
// Generating a Random Color → 


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    const color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

////////////////////////////////////////////////////////////////////////////////////////////

// Converting rgb color to hex → 


function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b)
        .toString(16).slice(1);
}

////////////////////////////////////////////////////////////////////////////////////////////

// Generating a random rgb color function →
 
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

////////////////////////////////////////////////////////////////////////////////////////////

// Get Random time →


function getTime() {
    return new Date().toString().split(' ')[4];
}


////////////////////////////////////////////////////////////////////////////////////////////


// To know what keys you’re pressing on → Ev.code


function handleKey(ev) {
    console.log('ev:', ev);
if (ev.code === 'Escape') closeModal();
 

////////////////////////////////////////////////////////////////////////////////////////////

// Get a Random Integer →


// Generates a random integer between min and up to max (not including):
 
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
 

////////////////////////////////////////////////////////////////////////////////////////////
