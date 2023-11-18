// 비교 연산자
// 동등 비교 연산자 :  좌항과 우항의 피연산자가 같은 값으로 평가되는지 비교해 불리언 값을 반환

// 동등 비교(==)
console.log(5 == 5); // true

// 타입을 다르지만 암묵적 타입 변환을 통해 타입을 일치시키면 동등하다.
console.log(5 == '5'); // true

// 동등 비교. 결과를 예측하기 어렵다.
console.log('0' == ''); // false
console.log(0 == '');  // true
console.log(0 == '0'); // true
console.log(false == 'false'); // false
console.log(false == '0'); // true
console.log(false == 'null'); // false
console.log(false == 'undefined'); // false