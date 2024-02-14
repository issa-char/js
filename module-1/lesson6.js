// Objects
let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2005
  };

  let car = new Object();
car.make = 'Toyota';
car.model = 'Corolla';
car.year = 2005;


// Adding a property
car.color = 'blue';

// Modifying a property
car.year = 2010;

// Removing a property
delete car.color;

// Searching a property
let hasModel = 'model' in car; // returns true

// Iterating over properties
for (let key in car) {
  console.log(key, car[key]);
}


function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  Car.prototype.getColor = function() {
    return this.color;
  };
  
  let myCar = new Car('Toyota', 'Corolla', 2005);
  myCar.color = 'blue';
  console.log(myCar.getColor()); // returns 'blue'

