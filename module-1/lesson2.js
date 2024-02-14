// Declaring variables
var x = 10; // x is a global variable
function foo() {
  var y = 20; // y is a local variable
  let z = 30; // z is a block-scoped variable
  if (true) {
    let w = 40; // w is also a block-scoped variable
    const v = 50; // v is a constant variable
    console.log(x, y, z, w, v); // 10 20 30 40 50
  }
  console.log(x, y, z); // 10 20 30
  // console.log(w); // ReferenceError: w is not defined
  // console.log(v); // ReferenceError: v is not defined
}
foo();
console.log(x); // 10
// console.log(y); // ReferenceError: y is not defined
// console.log(z); // ReferenceError: z is not defined


// data types
var a = 5; // a is an integer
var b = 3.14; // b is a decimal
var c = Infinity; // c is positive infinity
var d = -Infinity; // d is negative infinity
var e = NaN; // e is not a number
console.log(typeof a); // "number"
console.log(typeof b); // "number"
console.log(typeof c); // "number"
console.log(typeof d); // "number"
console.log(typeof e); // "number"


// Strings
var f = 'Hello'; // f is a string with single quotes
var g = "World"; // g is a string with double quotes
var h = `Hello ${g}`; // h is a template literal with backticks
console.log(typeof f); // "string"
console.log(typeof g); // "string"
console.log(typeof h); // "string"
console.log(h); // "Hello World"


// Boolean
var i = true; // i is a boolean with value true
var j = false; // j is a boolean with value false
var k = 5 > 3; // k is a boolean with value true
var l = 5 < 3; // l is a boolean with value false
console.log(typeof i); // "boolean"
console.log(typeof j); // "boolean"
console.log(typeof k); // "boolean"
console.log(typeof l); // "boolean"


// Null
var m = null; // m is null
console.log(typeof m); // "object" (this is a bug in JavaScript)
console.log(m === null); // true