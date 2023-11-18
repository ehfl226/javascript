// 논리 연산자는 우항과 좌항의 피연산자(부정 논리 연산자의경우 우항의 피연산자)를 논리 연산 한다.
// 논리합(||: OR) 연산자
console.log(true || true); //  true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// 논리곱(&&: AND) 연산자
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // falase

// 논리 부정(! : NOT)
console.log(!true); // false
console.log(!false); // true

// 논리 부정(!) 연산자는 언제나 불리언 값을 반환한다. 피연산자가 불리언 값이 아니면 불리언 타입으로 암묵적 타입 변환한다.
// 암묵적 타입 변환
console.log(!0); // true
console.log(!'Hello'); // false

// 논리합(||) 또는 논리곱(&&) 연산자 표현식의 평가 결과는 불리언 값이 아닐 수도 있다.
// 논리합(||) 또는 논리곱(&&) 연산자 표현식은 언제나 2개의 피연산자 중 어느 한쪽으로 평가된다.
// 단축 평가 
console.log('Cat' && 'Dog'); // Dog
console.log('Dog' && 'Cat'); // Cat

// 드 모르간의 법칙
var x, y;
console.log(!(x || y) === (!x && !y)); // true
console.log(!(x && y) === (!x || !y)); // true