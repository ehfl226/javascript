// 조건문
// 조건문은 주어진 조건식의 평가 결과에 따라 코드 블록(블록문)의 실행을 결정한다.
// 조건식은 불리언 값으로 평가될 수 있는 표현식이다.

var num = 2;
var kind;

// if문
if (num > 0){
    kind = '양수'; // 음수를 구별할 수 없다.
}
console.log(kind); // 양수

// if...else문 
if (num > 0){
    kind = '양수';
} else {
    kind = '음수'; // 0은 음수가 아니다.
}
console.log(kind); // 양수

// if...else if문
if (num > 0){
    kind = '양수';
} else if (num < 0){
    kind = '음수';
} else {
    kind = '영';
}
console.log(kind); // 양수

// 코드 블록 내의 문이 하나뿐이라면 중괄호를 생략할 수 있다.
var num = 2;
var kind;

if (num > 0)        kind = '양수';
else if (num < 0)   kind = '음수';
else                kind = '영';

console.log(kind); // 양수