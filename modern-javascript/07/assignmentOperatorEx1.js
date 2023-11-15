// 할당 연산자(assignment operator)
// 우항에 있는 피연산자의 평가 결과를 좌항에 있는 변수에 할당한다.
// 할당 연산자는 좌항의 변수에 값을 할당하므로 변수값이 변하는 부수 효과가 있다.

var x;

x = 10;
console.log(x); // 10

x += 5; // x = x + 5;
console.log(x); // 15

x -= 5; // x = x - 5; 
console.log(x); // 10

x *= 5; // x = x * 5;
console.log(x); // 50

x /= 5; // x = x / 5;
console.log(x); // 10

x %= 5; // x = x % 5;
console.log(x); // 0

var str = 'My name is ';

// 문자열 연결 연산자
str += 'Lee'; // str = str + 'Lee';
console.log(str); // 'My name is Lee'
