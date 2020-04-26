/*
    Adding Removing Properties
*/

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(2);

// Adding property
circle.location = { x: 1 };

console.log(circle);

delete circle.location;

// Deleting property
console.log(circle);