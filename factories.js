/*
    Factoriy Functions
    A factory function is any function which is not a class or constructor that returns a (presumably new)
    Good way to implement if the object has at least one method (behavior)
    If the key and value has the same name we can remove the value
*/

function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log(radius);
        }
    }
}

const circle = createCircle(1);
circle.draw();