// 동등 비교 연산자(==)와 일치 비교 연산자(===)는 +0과 -0을 동일하다고 평가한다.
// 동일한 값인 NaN NaN을 비교하면 다른 값이라고 평가한다.

//ES6에서 도입된 Object.is 메서드는 예측 가능한 정확한 비교 결과를 반환한다. 그 외에는 일치 비교 연산자(===)와 동일하게 동작한다.
console.log(-0 === +0); // true
console.log(Object.is(-0, +0)); // false

console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true

// 부동등 비교 연산자(!=)와 불일치 비교 연산자(!==)는 각각 동등 비교(==) 연산자와 일치 비교(===) 연산자의 반대 개념이다.
// 부동등 비교(!=)
console.log(5 != 8); // true
console.log(5 != 5); // false
console.log( 5!= '5'); // false (암묵적 타입 변환)

// 뷸일치 비교(!==)
console.log(5 !== 8); // true
console.log(5 !== 5); // flase
console.log(5 !== '5'); // true