// 문자열 연결 연산자
// +연산자는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자로 동작한다.

// 문자열 연결 연산자
console.log('1'+2); // 12
console.log(1+'2'); // 12

// 산술 연산자
console.log(1 + 2); // 3

// true는 1로 타입 변환된다.
console.log(1 + true); // 2

// false는 0으로 타입 변환된다.
console.log(1 + false); // 1

// null은 0으로 타입 변환된다.
console.log(1 + null); // 1

// undefined는 숫자로 타입 변환되지 않는다.
console.log(+undefined); // NaN
console.log(1 + undefined); // NaN