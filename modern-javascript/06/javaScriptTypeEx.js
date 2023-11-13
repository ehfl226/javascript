// 자바스크립트의 변수는 선언이 아닌 할당에 의해 타입이 결정된다.
// 재할당에 의해 변수의 타입은 언제든지 동적으로 변할 수 있다.(동적 타이핑)

var foo;
console.log(typeof foo); // undefined

foo = 3;
console.log(typeof foo); // number

foo = 'Hello';
console.log(typeof foo); // string

foo = true;
console.log(typeof foo); // boolean

foo = null;
console.log(typeof foo); // object

foo = Symbol(); // 심벌
console.log(typeof foo); // symbol

foo = {}; // 객체
console.log(typeof foo); // object

foo = []; // 배열
console.log(typeof foo); // object

foo = function () {}; // 함수
console.log(typeof foo); // function

// 변수는 타입을 갖지 않는다. 하지만 값은 타입을 갖는다. 
// 현재 변수에 할당되어 있는 값에 의해 변수으 타입이 동적으로 결정된다고 표현
// 변수는 값에 묶여 있는 값에 대한 별명이기 때문이다.