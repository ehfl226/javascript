// 모두 숫자 타입이다. (자바스크립트는 하나의 숫자 타입만 존재, 모든 수를 실수로 처리한다.)
var integer = 10; // 정수
var double = 10.12; // 실수
var negative = -20; // 음의 정수

// 숫자 타입은 모두 실수로 처리된다.
console.log(1 === 1.0); //true
console.log(4 / 2); // 2
console.log(3 / 2); // 1.5

// 숫자 타입의 세 가지 특별한 값
console.log(10 / 0);    // Infinity : 양의 무한대
console.log(10 / -0);    // -Infinity : 음의 무한대
console.log(1 * 'String');    // NaN : 산술 연산 불가 (not-a-number)