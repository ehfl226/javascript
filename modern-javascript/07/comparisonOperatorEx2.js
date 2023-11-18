// 비교 연산자
// 일치 비교(===) 연산자는 좌항과 우항의 피연산자가 타입도 같고 값도 같은 경우에 한하여 true를 반환한다. 
// 암묵적 타입 변환을 하지 않고 값을 비교한다. 값을 예측하기 쉽다.

// 일치 비교(===)
console.log(5 === 5); // true

// 암묵적 타입 변환을 하지 않고 값을 비교한다.
// 즉, 값과 타입이 모두 같은 경우만 true를 반환한다.
console.log(5 === '5'); // false

// NaN은 자신과 일치하지 않는 유일한 값이다.
console.log(NaN === NaN); // false

// NaN은 자신과 일치하지 않는 유일한 값이다. 따라서 숫자가 NaN인지 조사하려면 빌트인 함수 Number.isNaN을 사용한다.
// Number.isNaN 함수는 지정한 값이 NaN인지 확인하고 그 결과를 불리언 값으로 반환한다.
Number.isNaN(NaN); 
console.log(isNaN(NaN)); // true

Number.isNaN(10); 
console.log(isNaN(NaN)); // false

Number.isNaN(1 + undefined); 
console.log(isNaN(NaN)); // true

// 양의 0과 음의 0의 비교. 일치 비교/동등 비교 모두 결과는 true다.
console.log(0 === -0); // true
console.log(0 == -0); // true