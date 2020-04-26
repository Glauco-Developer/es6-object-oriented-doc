/*
    Constructor Function
    A constructor is a function that initializes an object.
    By default 'this' point to the global (browser - window, node - global) object
    When we call 'new' operator thre things happend:
    1 is created a new empty object
    2 'this' is pointed to the new object
    3 it will return the object from the function (Circle)
*/

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(2);
circle.draw();