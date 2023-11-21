// 암묵적 타입변환

// 문자열 타입으로 변환
console.log(1 + '2'); // 12
//var x = 1 + '2';
//console.log(typeof x, x); // string 12

// + 연산자는 피연산자 중 하나 이상이 문자열이므로 문자열 연결 연사자로 동작한다.
// 문자열 연결 연산자의 역할은 문자열 값을 만드는 것이다.
// 문자열 연결 연산자의 모든 피연산자는 코드의 문맥상 문자열 타입이어야 한다.(암묵적 타입 변환)

// 연산자 표현식의 피연산자(피연산자도 표현식이다)만이 암묵적 타입 변환의 대상이 되는 것은 아니다.
// ES6에서 도입된 템플릿 리터럴의 표현식 삽입은 표현식의 평가 결과를 문자열 타입으로 암묵적 타입 변환한다.
console.log(`1 + 1 = ${1 + 1}`); // 1 + 1 = 2
// var x = `1 + 1 = ${1 + 1}`;
// console.log(typeof x, x); // string 1 + 1 = 2


// 숫자 타입 -> 문자열 타입으로 암묵적 변환
console.log(0 + ''); // "0"
// var x = `0 + ''`;
// console.log(typeof x, x); // string 0 + ''

console.log(-0 + ''); // "0"

console.log(1 + ''); // "1"

console.log(-1 + ''); // "-1"

console.log(NaN + ''); // "NaN"

console.log(Infinity + ''); // "Infinity"

console.log(-Infinity + ''); // "-Infinity"


// 불리언 타입 -> 문자열 타입으로 암묵적 변환
console.log(true + ''); // "true"
// var x = `true + ''`;
// console.log(typeof x, x); // string true + ''

console.log(false + ''); // "false"


// null 타입 -> 문자열 타입으로 암묵적 변환
console.log(null + ''); // "null"
// var x = `null + ''`;
// console.log(typeof x, x); //string null + ''


// undefined 타입 -> 문자열 타입으로 암묵적 변환
console.log(undefined + ''); // "undefined"


// 심벌 타입 -> 문자열 타입으로 암묵적 변환(Error)
//console.log((Symbol()) + ''); // TypeError: Cannot convert a Symbol value to a string


// 객체 타입 -> 문자열 타입
console.log(({}) + ''); // "[object Object]"
// var x = ({}) + '';
// console.log(typeof x, x); 

console.log(Math + ''); // "[object Math]"
console.log([] + ''); // "" 빈 배열
console.log([10, 20] + ''); // "10,20"
console.log((function(){}) + ''); // "function(){}"
console.log(Array + ''); // "function Array() { [native code] }"