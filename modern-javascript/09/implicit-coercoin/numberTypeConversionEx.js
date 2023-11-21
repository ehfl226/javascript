// 암묵적 타입 변환
// 숫자타입으로 변환
console.log(1 - '1'); // 0
// var x = 1 - '1';
// console.log(typeof x, x);

console.log(1 * '10'); // 10

console.log(1 / 'one'); // NaN

// 산술 연산자의 역할은 숫자 값을 만드는 것, 따라서 모든 피연산자는 코드 문맥상 숫자 타입이여야한다.
// 피연산자 중 숫자 타입이 아닌 경우 암묵적 타입 변환한다.
// 숫자 타입으로 변환할 수 없는 경우는 산술 연산을 수행할 수 없으므로 표현식의 평가 결과는 NaN이다.


// 비교 연산자 boolean으로 반환
console.log('1' > 0); // true
// 비교 연산자의 역할은 불리언 값으로 만드는 것이다. 크기를 비교하므로 코드의 문맥상 모두 숫자 타입이여야한다.
// + 단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입 변환을 수행한다.


// 문자열 타입 -> 숫자 타입
console.log(+''); // 0
// var x = +'';
// console.log(typeof x, x);

console.log(+'0'); // 0

console.log(+'1'); // 1

console.log(+'String'); // NaN


// 불리언 타입 -> 숫자 타입
console.log(+true); // 1
// var x = +true;
// console.log(typeof x, x);

console.log(+false); // 0

// null 타입 -> 숫자 타입
console.log(+null); // 0
// var x = +null;
// console.log(typeof x, x);


// undifined 타입 -> 숫자 타입
console.log(+undefined); // NaN
// var x = +undefined;
// console.log(typeof x, x);


// 심벌 타입 -> 숫자 타입
console.log(+Symbol()); 
// TypeError: Cannot convert a Symbol value to a number


// 객체 타입 -> 숫자 타입
console.log(+{}); // NaN
// var x = +{};
// console.log(typeof x, x);

console.log(+[]); // 0

console.log(+[10, 20]); // NaN

console.log(+(function(){})); // NaN

// 빈 문자열(''), 빈 배열([]), null, false는 0으로 true는 1로 변환된다.
// 객체와 빈 배열이 아닌 배열, undefined는 변환되지 않아 NaN이 된다는 것에 주의한다.