// The reduce() method applies a function against an accumulator and each element in the array
// (from left to right) to reduce it to a single value.

// Syntax
// arr.reduce(callback[, initialValue])

/**
The first time the callback is called, accumulator and currentValue can be one of two values.
If initialValue is provided in the call to reduce(), then accumulator will be equal to initialValue,  and currentValue will be equal to the first value in the array. If no initialValue is provided, then  accumulator will be equal to the first value in the array, and currentValue will be equal to the  second.
*/
// JavaScript Demo: Array.reduce()

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
