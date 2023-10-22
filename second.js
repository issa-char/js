let name = "jonh"
let school = "Maseno Uni"
const cars = ["bmw", "volvo", "toyota", "peugeot", "subaru"];

console.log(cars);
console.log(cars[0]);

cars[2] = "chevrolet";
console.log(cars.toString()); // converts array to a comma separated string
console.log(typeof(cars));	// arrays are a special type of object, we can use to store different values/functions/expressions
// arrays use numbered indexes while objects use named indexes
//array properties and methods
console.log(cars.length)   //length returns number of elements
console.log(cars.sort());   // sort the object contents
console.log(cars[cars.length - 1]); // access the last element

let i = 0;

for (i; i < cars.length; i++){
		console.log(cars[i]);
}

cars.push("benz");  // Add an element in an array
// how to know if a variable is really an integer
let type = Array.isArray(cars);
console.log(type);
let ty = cars instanceof Array
console.log(ty)

// other array methods
// push(), pop(), shift(), toString(), unshift(), length(), join(),delete(),concat(),flat(), splice(), slice()

console.log(cars.pop());
console.log(cars.join("*"));


// js objects
/*  representation of real world items: objects have properties however the properties differ from object to object
 *  color is property, while white is a property value. Objects also have methods which refer to what actions
 *  objects can do/achieve/perform, e.g a person can walk, talk, cry ..., methods are defined as functions in objects
 */
const person = { name:"alex", age:44, height:56, color:"person of color", stat:"single", personAge:function(){ return this.name + " " + this.age;}}
console.log(person.name);
console.log(person.personAge());

