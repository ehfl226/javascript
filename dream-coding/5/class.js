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

  draw() { // method
    console.log(`drawing ${this.color} color !`); //  상속을 이용하면 한 곳에서만 수정하면 모두 동일하게 수정됨
  }

  getArea() {
    return width * this.heigth;
  }
}

// extends라는 키워드를 이용해서 Shape을 연장한다.
// 이렇게만 정의해도 Shape에서 정의한 fields와 method가 자동으로 Rectangle에 포함된다.
class Rectangle extends Shape {} 
class Triangle extends Shape {
  draw() {
    super.draw(); // 부모의 메소드 호출!
    console.log('🔺');
  }
  getArea() { // 재정의해서 사용할 수 있다.(오버라이딩)
    return (this.width * this.heigth) / 2;
  }


  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue'); // drawing blue color !
rectangle.draw(); // rectangle에 있는 draw() 함수 호출
console.log(rectangle.getArea()); // 400
const Triangle = new Triangle(20, 20, 'red'); // 다양성으로 필요한 함수만 재정의 
triangle.draw();
console.log(triangle.getArea()); // 200


// 6. Class checking: instanceeOf (왼쪽 object가 오른쪽 class를 이용해서 만들었는지 t/f로 확인)
console.log(rectangle instanceof Rectangle); // t
console.log(triangle instanceof Rectangle); // f
console.log(triangle instanceof Triangle); // t
console.log(triangle instanceof Shape); // t :Shape을 상속!
console.log(triangle instanceof Object); // t :모든 bject는 Object를 상속 
console.log(triangle.toString()); // [object Object]