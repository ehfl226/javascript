// + 단항 연산자
// 숫자 타입이 아닌 피연산자에 + 단항 연산자를 사용하면, 숫자 타입으로 변환하여 반환한다.
// 피연산자를 변경하는 것이 아닌 숫자 타입으로 변환한 값을 생성해서 반환한다. 부수 효과는 없다.

var x = '1';

// 문자열을 숫자로 타입 변환한다.
console.log(+x); // 1
// 부수 효과는 없다. 
console.log(x); // "1"

// 불리언 값을 숫자로 타입 변환한다.
x = true;
console.log(+x); // 1
// 부수 효과는 없다.
console.log(x); // true

// 불리언 값을 숫자로 타입 변환한다.
x = false;
console.log(+x); // 0
// 부수 효과는 없다.
console.log(x); // false

// 문자열을 숫자로 타입 변환할 수 없으므로 NaN을 반환한다.
x = 'Hello';
console.log(+x); // NaN
// 부수 효과는 없다.
console.log(x); // "Hello"