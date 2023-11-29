// 객체 리터럴에 의한 객체 생성
// 객체 리터럴은 중괄호({...}) 내에 0개 이상의 프로퍼티를 정의한다.
// 변수에 할당되는 시점에 자바스크립트 엔진은 객체 리터럴을 해석해 객체를 생성한다.
var person = {
    name: 'Lee',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

console.log(typeof person); // object
console.log(person);   // {name: "Lee", sayHello: f}

// 만약 중괄호 내에 프로퍼티를 정의하지 않으면 빈 객체가 생성된다.
var empty = {}; // 빈 객체
console.log(typeof empty, empty); // object