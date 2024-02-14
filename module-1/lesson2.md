# Variables and Data Types in JavaScript

Variables are containers that store values in JavaScript. They can be declared using the keywords var, let, or const, depending on the scope and mutability of the variable. Data types are categories of values that have different characteristics and behaviors in JavaScript. There are six primitive data types in JavaScript: number, string, boolean, null, undefined, and symbol. There are also object data types, such as arrays, functions, and dates, that can store multiple values and properties. Operators are symbols that perform operations on values, such as arithmetic, comparison, logical, and bitwise operations.

## Declaring Variables

Variables can be declared using the keywords var, let, or const. The keyword var declares a variable that has a function or global scope, depending on where it is declared. The keyword let declares a variable that has a block scope, which means it is only accessible within the block where it is declared. The keyword const declares a constant variable that has a block scope and cannot be reassigned. For example:

```javascript
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
```

## Data Types

Data types are categories of values that have different characteristics and behaviors in JavaScript. There are six primitive data types in JavaScript: number, string, boolean, null, undefined, and symbol. There are also object data types, such as arrays, functions, and dates, that can store multiple values and properties.

### Number

The number data type represents numeric values in JavaScript. It can store integers and decimals, as well as special values such as Infinity, -Infinity, and NaN (not a number). For example:

```javascript
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
```

### String

The string data type represents textual values in JavaScript. It can store any sequence of characters enclosed by single or double quotes. It can also use backticks to create template literals that can embed expressions and support multi-line strings. For example:

```javascript
var f = 'Hello'; // f is a string with single quotes
var g = "World"; // g is a string with double quotes
var h = `Hello ${g}`; // h is a template literal with backticks
console.log(typeof f); // "string"
console.log(typeof g); // "string"
console.log(typeof h); // "string"
console.log(h); // "Hello World"
```

### Boolean

The boolean data type represents logical values in JavaScript. It can only have two possible values: true or false. It can be used to evaluate conditions and control the flow of the program. For example:

```javascript
var i = true; // i is a boolean with value true
var j = false; // j is a boolean with value false
var k = 5 > 3; // k is a boolean with value true
var l = 5 < 3; // l is a boolean with value false
console.log(typeof i); // "boolean"
console.log(typeof j); // "boolean"
console.log(typeof k); // "boolean"
console.log(typeof l); // "boolean"
```

### Null

The null data type represents an empty or non-existent value in JavaScript. It can be assigned to a variable to indicate that it has no value or reference. For example:

```javascript
var m = null; // m is null
console.log(typeof m); // "object" (this is a bug in JavaScript)
console.log(m === null); // true