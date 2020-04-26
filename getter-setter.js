/*
    Getter and Setters
*/

function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    this.draw = function () {
        console.log('draw')
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value.x || !value.y)
                throw new Error('Invalid value')

            defaultLocation = value;
        }
    })
}

const circle = new Circle(10);
circle.defaultLocation = 1 // setter
console.log(circle.defaultLocation) // getter