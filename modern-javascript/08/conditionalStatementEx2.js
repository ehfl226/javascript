// 조건문
// if...else문은 삼항 조건 연산자로 바꿔 쓸 수 있다.

// x가 짝수이면 result 변수에 문자열 '짝수'를 할당하고, 홀수이면 문자열 '홀수'를 할당한다.
var x = 2;
var result;

if (x % 2){ // 2 % 2는 0이다. 이때 0은 false로 암묵적 강제 변환된다.
    result = '홀수';
} else {
    result = '짝수';
}

console.log(result); // 짝수

// 위 예제를 삼항 조건 연산자로 바꾸면
var x = 2; 

// 0은 false로 취급된다.
var result = x % 2 ? '홀수' : '짝수';
console.log(result); // 짝수

// 세 가지('양수', '음수', '영') 경우의 수를 갖는 경우
var num = 2;

// 0은 false로 취급된다.
var kind = num ? (num > 0 ? '양수' : '음수') : '영';

console.log(kind); // 양수