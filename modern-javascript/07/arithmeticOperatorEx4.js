// - 단항 연산자
// -단항 연산자는 피연산자의 부호를 반전한 값을 반환한다. 
// 피연산자를 변경하는 것은 아니고 부호를 반전한 값을 생성해 반환한다. 부수 효과는 없다.

// 부호를 반전한다.
-(-10); 
console.log(-(-10)); // 10

// 문자열을 숫자로 타입 변환한다.
-'10';
console.log(-'10'); // -10

// 불리언 값을 숫자로 타입 변환한다.
-true; 
console.log(-true); // -1

// 문자열은 숫자로 타입 변환할 수 없으므로 NaN을 반환한다.
-'Hello';
console.log(-'Hello'); // NaN