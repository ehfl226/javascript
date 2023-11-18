// 삼항 조건 연산자 (조건식 ? 조건식이 true일 때 반환할 값 : 조건식이 false일 때 반환할 값)
// 조건식의 평가 결과에 따라 반환할 값을 결정한다.

var x = 2;

// 2 % 2는 0이고 [0은 false]로 암묵적 타입 변환된다.
var result = x % 2 ? '홀수' : '짝수';

console.log(result); // 짝수

// 삼항 조건 연산자의 첫 번째 피연산자는 조건식이므로 삼항 조건 연산자 표현식은 조건문이다. if...else문과 유사하게 처리할 수 있다.
var x = 2, result;

// 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
if(x % 2) result = '홀수';
else      result = '짝수';

console.log(result); // 짝수

// 차이점은 삼항 조건 연산자 표현식은 값처럼 사용할 수 있지만 if...else문은 값처럼 사용할 수 없다.(표현식이 아닌 문)
var x = 10;

// if...else 문은 표현식이 아닌 문이다. 따라서 값처럼 사용할 수 없다.
// var result = if (x % 2){result = '홀수';} else {result = '짝수';};
// SyntaxError: Unexpected token 'if'

// 삼항 조건 연산자 표현식은 값으로 평가할 수 있는 표현식인 문이다.
var x = 10;

// 삼항 조건 연산자 표현식은 표현식인 문이다. 따라서 값처럼 사용할 수 있다.
var result = x % 2 ? '홀수' : '짝수';
console.log(result); // 짝수

// 조건에 따라 어떤 값을 결정해야 한다면 삼항 조건 연산자 표현식을 사용하는 편이 유리하다.
// 하지만 조건에 따라 수행해야 할 문이 하나가 아니라 여러 개라면 if...else문의 가독성이 더 좋다.