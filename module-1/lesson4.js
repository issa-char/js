// Arrays

var fruits = ["apple", "banana", "cherry"]; // an array of strings
var numbers = [1, 2, 3, 4, 5]; // an array of numbers
var mixed = [true, "hello", 42, null]; // an array of mixed data types

var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; // a two-dimensional array
var cube = [[[1, 2], [3, 4]], [[5, 6], [7, 8]], [[9, 10], [11, 12]]]; // a three-dimensional array

var fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "cherry"
console.log(fruits[3]); // undefined


var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(matrix[0][0]); // 1
console.log(matrix[0][1]); // 2
console.log(matrix[0][2]); // 3
console.log(matrix[1][0]); // 4
console.log(matrix[1][1]); // 5
console.log(matrix[1][2]); // 6
console.log(matrix[2][0]); // 7
console.log(matrix[2][1]); // 8
console.log(matrix[2][2]); // 9


var fruits = new Array("apple", "banana", "cherry"); // an array of strings
var numbers = new Array(5); // an empty array of length 5
var mixed = new Array(true, "hello", 42); // an array of mixed data types

var fruits = Array("apple", "banana", "cherry"); // an array of strings
var numbers = Array(5); // an empty array of length 5
var mixed = Array(true, "hello", 42); // an array of mixed data types


var x = [10]; // an array with one element: 10
var y = new Array(10); // an empty array with length: 10
console.log(x.length); // 1
console.log(y.length); //