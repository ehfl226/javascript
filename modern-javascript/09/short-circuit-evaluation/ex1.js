// 단축 평가
// 논리 연산자를 사용한 단축 평가

// 논리합 (||) 또는 논리곱 (&&) 연산자 표현식의 평가 결과는 불리언 값이 아닐 수도 있다.
// 언제나 2개의 피연산자 중 어느 한 쪽으로 평가된다.

// 논리곱 (&&) 연산자
console.log('Cat' && 'Dog'); // 'Dog'
// 논리곱(&&) 연산자는 두 개의 피연산자가 모두 true로 평가될 때 true를 반환한다. 좌항에서 우항으로 평가가 진행된다.
// 첫 번째 피연산자 'Cat'은 Trthy값이므로 true로 평가된다. 두 번째 연산자까지 평가해봐야 한다. 두 번째 피연산자가 위 논리곱 연산자 표현식의 평가 결과를 결정한다.
// 논리곱 연산자는 논리 연산의 결과를 결정하는 두 번째 피연산자, 즉 문자열 'Dog'를 그대로 반환한다.

console.log('Cat' && 'Dog'); // 'Dog'
console.log(false && 'Dog'); // false
console.log('Cat' && false); // false


// 논리합 (||) 연산자
console.log('Cat' || 'Dog'); // 'Cat'
// 논리합 연산자는 두 개의 피연산자 중 하나만 true로 평가되어도 true를 반환한다. 좌항에서 우항으로 평가가 진행된다.
// 첫 번째 피연산자 'Cat'은 Trthy값이므로 true로 평가된다. 두 번째 피연산자까지 평가해보지 않아도 위 표현식을 평가할 수 있다.
// 이때 논리합 연산자는 논리 연산의 결과를 결정한 첫 번째 피연산자, 즉 문자열 'Cat'을 그대로 반환한다.

console.log('Cat' || 'Dog'); // 'Cat'
console.log(false || 'Dog'); // 'Dog'
console.log('Cat' || false); // 'Cat'

// 이처럼 논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 반환한다.
// 이를 단축 평가라 한다. 단축 평갸는 표현식을 평가하는 도중에 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것을 말한다.

// 단축 평가 표현식          평가 결과  
// true  || anything       true
// false || anything     anything
// true  && anything     anything
// false && anything      false