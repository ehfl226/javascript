// 명시적 타입 변환
// 표준 빌트인 생성자 함수(String, Number, Boolean)를 new연산자 없이 호출하는 방법,
// 빌트인 메서드를 사용하는 방법, 암묵적 타입 변환을 이용하는 방법이 있다.

// 문자열 타입이 아닌 값을 문자열 타입으로 변환

// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
// 숫자 타입 => 문자열 타입
console.log(String(1)); // "1"
// var x = String(1);
// console.log(typeof x, x);

console.log(String(NaN)); // "NaN"
// var x = String(NaN);
// console.log(typeof x, x);

console.log(String(Infinity)); // "Infinity"

// 불리언 타입 => 문자열 타입
console.log(String(true)); // "true"
console.log(String(false)); // "false"


// 2. Object.prototype.toString 메서드를 사용하는 방법
// 숫자 타입 => 문자열 타입
console.log((1).toString());        // "1"
console.log((NaN).toString());      // "NaN"
console.log((Infinity).toString()); // "Infinity"

// 불리언 타입 => 문자열 타입
console.log((true).toString());     // "true"
console.log((false).toString());    // "false"


// 3. 문자열 연결 연산자를 이용하는 방법
// 숫자 타입 => 문자 타입
console.log(1 + '');        // "1"
console.log(NaN + '');      // " NaN"
console.log(Infinity + ''); // "Infinity"

// 불리언 타입 => 문자 타입
console.log(true + '');     // "true"
console.log(false + '');    // "false"