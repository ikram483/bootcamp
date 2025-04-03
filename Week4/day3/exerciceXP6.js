//[2] === [2] // false
//{} === {}   // false

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)//4
console.log(object3.number)//4
console.log(object4.number)//5
//object2 and object3 are references to object1, so if you modify object1.number, it also changes for object2 and object3.
//object4 is a new, separate object, so it keeps number: 5.

// Animal class
class Animal {
    constructor(name, type, color) {
      this.name = name;
      this.type = type;
      this.color = color;
    }
  }
  
  // Mammal class extending Animal
  class Mammal extends Animal {
    sound(sound) {
      return `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
  }
  
  // farmerCow instance
  const farmerCow = new Mammal("Lily", "cow", "brown and white");
  console.log(farmerCow.sound("Moooo")); 