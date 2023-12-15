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
    constructor(name, age) { // 생성자를 만들어
        // fields
        this.name = name; // 전달된 데이터에 할당
        this.age = age;
    }

    // methods
    speak() {       // this : 생성된 object.name = yoon
        console.log(`${this.name}: hello!`);
    }
}

const yoon = new Person('yoon', 30); // 새로운 object 만들기
console.log(yoon.name);
console.log(yoon.age);
yoon.speak(); // speak 메소드 호출


// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) { // 3개의 field
    this.firstName = firstName;;
    this.lastName = lastName;
    this.age = age; // 2) .age에 값을 할당할 수 있는것은 내부적으로 getter와 setter를 이용하기 때문이다.
  }

  get age() { // get : 값을 리턴
    return this._age; // get age() 호출 시 this.age로 return 함
  } // get을 정의하는 순간 위 this.age는 메모리에 올라가있는 데이터를 읽어오는것이 아니라
    // get을 호출해서 _기호를 이용해 변수 이름을 바꿈
  set age(value) { // set : 값을 설정, value를 받아와야됨
    // if (value < 0) {
    //    throw Error('age can not be negative');
    // }       // value가 값이 -라면 0을 쓰고 아니면 지정된 value를 쓰겠다.
    this._age = value < 0 ? 0 : value;
  } // set을 정의하는 순간 위 = age는 메모리에 값을 할당하는게 아니라 set을 호출하게됨
}   // set안에서 전달된 value를 this.age에 할당할 때 메모리값을 업데이트하는게 아니라  
    // set을 호출하게됨(반복), _기호를 이용해 변수 이름을 바꿈
const user1 = new User('Steve', 'Job', -1); // -1..?
console.log(user1.age); // 1) .age을 호출할 수 있는것


// 3. Fields (public, private)
// Too soon!
class Experiment { // 생성자를 쓰지 않고 field를 정의할 수 있다.
    publicField = 2;   // 외부에서 접근 가능
    #privateField = 0; // # : class 내부에서만 값이 보여지고, 접근,변경가능 | 외부에선 값을 읽을 수도 변경도 불가능
}
const Experiment = new Experiment();
console.log(experiment.publicField);  // 2
console.log(experiment.privateField); // undefined


// 4. Static properties and methods
// Too soon!
class Article { 
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
      console.log(Article.publisher);
    }

    static printPublisher() {
      console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher); // Dream Coding
Article.printPublisher(); // Dream Coding
// object가 아니라 class이름으로 호출함
// object에 상관없이, 들어오는 데이터에 상관없이 공통적으 쓸 수 있다면
// static과 메소드를 사용하는것이 메모리의 사용을 조금이라도 줄여줌


// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, heigth, color) {
    this.width = width;
    this.heigth = heigth;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color !`);
  }

  getArea() {
    return width * this.heigth;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log('🔺');
  }
  getArea() {
    return (this.width * this.heigth) / 2;
  }


  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const Triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


// 6. Class checking: instanceeOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());
console.log(triangle instanceof Rectangle);