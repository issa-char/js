// Control structures in JS

// if, if-else
if (condition) {
    // code to execute if condition is true
  } else {
    // code to execute if condition is false
  }

  var age = 18;
  if (age >= 18) {
    console.log("You are an adult.");
  } else {
    console.log("You are a minor.");
  }
  // Output: "You are an adult."

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

// Switch-case
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


// loops
// for
for (initialization; condition; update) {
    // code to execute for each iteration
  }
  
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  // Output:
  
  // while
  while (condition) {
    // code to execute for each iteration
  }
 
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

while (true) {
    console.log("Hello");
  }
  // Output:
  // "Hello"
  // "Hello"
  // "Hello"
  // ...
  