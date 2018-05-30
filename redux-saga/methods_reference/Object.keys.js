// The Object.keys() method returns an array of a given object's property names,
// in the same order as we get with a normal loop.

//Syntax
// Object.keys(obj)

// obj
// The object of which the enumerable's own properties are to be returned.

// ::::::::::::::::: Examples ::::::::::::::::::::::::::::::

// simple array
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr));
// console: ['0', '1', '2'] returns an array of a given object's property names,

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj));
// console: ['0', '1', '2'] returns an array of a given object's property names,

// array like object with random key ordering
var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj));
// console: ['2', '7', '100'] returns an array of a given object's property names,

// getFoo is a property which isn't enumerable
var myObj = Object.create(
	{},
	{
		getFoo: {
			value: function() {
				return this.foo;
			}
		}
	}
);
myObj.foo = 1;
console.log(Object.keys(myObj));
// console: ['foo']
