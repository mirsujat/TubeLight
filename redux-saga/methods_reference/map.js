/**
The map() method creates a new array with the results of calling a provided function on every element in the calling array.

*/

// JavaScript Demo: Array.map()

var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

//Syntax
/**
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
}[, thisArg])
*/

// ::::::::::::::::::::::: Examples :::::::::::::::::::::::::::::::::
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]
