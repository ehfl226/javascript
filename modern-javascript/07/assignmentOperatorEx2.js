// 할당 연산자
var x;

// 할당문은 값으로 평가되는 표현식인 문이다.
console.log(x = 10); // 10
// x = 10은 x에 할당된 숫자 값 10으로 평가된다.

// 따라서 할당문을 다른 변수에 할당할 수도 있다. 여러 변수에 동일한 값을 연쇄 할당할 수 있다.
var a, b, c;

// 연쇄 할당, 오른쪽에서 왼쪽으로 진행된다.
// 1. c = 0 : 0으로 평가된다.
// 2. b = 0 : 0으로 평가된다.
// 3. a = 0 : 0으로 평가된다.
a = b = c = 0;

console.log(a, b, c); // 0, 0, 0