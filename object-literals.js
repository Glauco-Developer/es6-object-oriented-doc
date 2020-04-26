/*
    Object literals
    Syntax key/value pair
    If a member is a function it's called METHOD if isn't we called PROPERTY
    It's not a good way to implement if the object has at least one method (behavior)
*/

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log('draw');
    }
};

circle.draw();