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

// 객체 리터럴의 중괄호는 코드 블록을 의미하지 않는다는데 주의한다.
// 코드 블록의 닫는 중괄호 뒤에는 세미콜론을 붙이지 않는다.
// 하지만 객체 리터럴은 값으로 평가되는 표현식이다. 따라서 객체 리터럴의 닫는 중괄호 뒤에는 세미콜론을 붙인다.

// 객체 리터럴은 객체를 생성하기 위해 클래스를 먼저 정의하고 new 연산자와 함께 생성자를 호출할 필요가 없다. 
// 숫자 값이나 문자열을 만드는 것과 유사하게 리터럴로 객체를 생성한다.
// 객체 리터럴에 프로퍼티를 포함시켜 객체를 생성함과 동시에 프로퍼티를 만들 수도 있고, 객체를 생성한 이후에 프로퍼티를 동적으로 추가할 수도 있다.
// 객체 리터럴 외의 객체 생성 방식은 모두 함수를 사용해 객체를 생성한다.