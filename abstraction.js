/*
    Abstraction
    Closure means that an inner function always has access to the vars and parametersof its outer function,
    even after the outer function has returned. 
*/

function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    let computeOptimunLocation = function () {
        // ...
    }

    this.draw = function () {
        computeOptimunLocation();
        console.log('draw')
    }
}

const circle = new Circle(10);
circle.draw();