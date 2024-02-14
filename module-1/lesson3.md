# Control Structures in JavaScript

Control structures are statements that control the flow of your program in JavaScript. They allow you to execute different blocks of code based on conditions or repeat a block of code multiple times. There are two main types of control structures in JavaScript: conditional statements and loops.

## Conditional Statements

Conditional statements are statements that execute different blocks of code based on conditions. There are two main types of conditional statements in JavaScript: if-else and switch-case.

### If-else

The if-else statement is the most basic and common type of conditional statement in JavaScript. It has the following syntax:

```javascript
if (condition) {
  // code to execute if condition is true
} else {
  // code to execute if condition is false
}
```

The condition is an expression that evaluates to a boolean value (true or false). If the condition is true, the code inside the first block is executed. If the condition is false, the code inside the second block is executed. The else block is optional and can be omitted if there is no code to execute when the condition is false. For example:

```javascript
var age = 18;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
// Output: "You are an adult."
```

The if-else statement can also be nested or chained to create multiple conditions. For example:

```javascript
var score = 85;
if (score >= 90) {
  console.log("You got an A.");
} else if (score >= 80) {
  console.log("You got a B.");
} else if (score >= 70) {
  console.log("You got a C.");
} else if (score >= 60) {
  console.log("You got a D.");
} else {
  console.log("You got an F.");
}
// Output: "You got a B."
```

### Switch-case

The switch-case statement is another type of conditional statement in JavaScript that can be used to execute different blocks of code based on multiple cases. It has the following syntax:

```javascript
switch (expression) {
  case value1:
    // code to execute if expression matches value1
    break;
  case value2:
    // code to execute if expression matches value2
    break;
  ...
  default:
    // code to execute if expression does not match any case
    break;
}
```

The expression is an expression that evaluates to a value. The value can be any data type, such as number, string, boolean, etc. The cases are values that are compared with the expression using strict equality (===). If the expression matches a case, the code inside that case is executed. The break statement is used to exit the switch-case statement and prevent the execution of the following cases. The default case is optional and can be used to provide a default code to execute if the expression does not match any case. For example:

```javascript
var day = "Monday";
switch (day) {
  case "Monday":
    console.log("Today is Monday.");
    break;
  case "Tuesday":
    console.log("Today is Tuesday.");
    break;
  case "Wednesday":
    console.log("Today is Wednesday.");
    break;
  case "Thursday":
    console.log("Today is Thursday.");
    break;
  case "Friday":
    console.log("Today is Friday.");
    break;
  case "Saturday":
    console.log("Today is Saturday.");
    break;
  case "Sunday":
    console.log("Today is Sunday.");
    break;
  default:
    console.log("Invalid day.");
    break;
}
// Output: "Today is Monday."
```

## Loops

Loops are statements that repeat a block of code multiple times until a certain condition is met. There are three main types of loops in JavaScript: for, while, and do-while.

### For

The for loop is the most common and versatile type of loop in JavaScript. It has the following syntax:

```javascript
for (initialization; condition; update) {
  // code to execute for each iteration
}
```

The initialization is an expression that is executed once before the loop starts. It is usually used to declare and initialize a loop variable. The condition is an expression that evaluates to a boolean value (true or false). It is checked before each iteration of the loop. If the condition is true, the code inside the loop is executed. If the condition is false, the loop ends. The update is an expression that is executed after each iteration of the loop. It is usually used to update the loop variable or change the condition. For example:

```javascript
for (var i = 0; i < 10; i++) {
  console.log(i);
}
// Output:

### While

The while loop is another type of loop in JavaScript that executes a block of code as long as a condition is true. It has the following syntax:

```javascript
while (condition) {
  // code to execute for each iteration
}
```

The condition is an expression that evaluates to a boolean value (true or false). It is checked before each iteration of the loop. If the condition is true, the code inside the loop is executed. If the condition is false, the loop ends. The condition can be changed inside the loop by using variables or statements. For example:

```javascript
var n = 1;
while (n <= 10) {
  console.log(n);
  n++;
}
// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
```

The while loop can also be used to create an infinite loop, which is a loop that never ends. This can be done by using a condition that is always true, such as true or 1. However, this is usually not desirable and should be avoided, as it can cause the program to freeze or crash. For example:

```javascript
while (true) {
  console.log("Hello");
}
// Output:
// "Hello"
// "Hello"
// "Hello"
// ...
```