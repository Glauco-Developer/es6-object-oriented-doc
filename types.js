/*
    Values vs References Types
*/

// Primitives are copied by their VALUE
let x = 10;
let y = x;

x = 20;

console.log(x)
console.log(y)

/*
    Objects are copied by their reference (the object is stored in the memory)
*/

let a = { value: 30 };
let b = a; // memory location is assign to the "b" variable

a.value = 40;

console.log('Reference type (memory)')
console.log(a.value);
console.log(b.value);