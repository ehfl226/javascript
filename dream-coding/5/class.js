'use strict';
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

//1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const yoon = new Person('yoon', 30);
console.log(yoon.name);
console.log(yoon.age);
yoon.speak();


// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;;
    this.lastName = lastName;
    this.age = age;        
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    //    throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);