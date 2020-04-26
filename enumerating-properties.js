/*
    Enumerating Properties
    Iterate/enumerate over properties in an object
*/

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(10);

// key holds the key of an object
for (let key in circle) {
    console.log(key);
}

// Display the key and value
for (let key in circle) {
    console.log(key, circle[key]);
}

// Display the key and value
for (let key in circle) {
    console.log(key, circle[key]);
}

// Display only properties (not methods)
for (let key in circle) {
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key]);
}

// Other approach (get all the keys)
const keys = Object.keys(circle);
console.log(keys);

// Check if an Object has a key
if ('radius' in circle) {
    console.log('Circle has a radius')
}