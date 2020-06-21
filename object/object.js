
function Device() {
  this.id = 0; // or increment
}

function Car() {
  this.name = "Car";
  this.color = "Red";
}

Car.prototype = new Device();

var x = new Car();
console.log(x.id); 

class Animal{
  constructor(){
    this.id = 1
  }
}
class Dog extends Animal{
  constructor(){
    super()
    this.name = "yolk";
    this.color = "white";
  }
}


var d = new Dog();
console.log(d.id); 