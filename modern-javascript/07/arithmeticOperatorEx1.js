// 산술 연산자 (arithmetic operator)
// 단항 산술 연산자 : 1개의 피연산자를 산술 연산하여 숫자 값을 만든다.
var x = 1;

// ++연산자는 피연산자의 값을 변경하는 암묵적 할당이 이뤄진다.
x++; // x = x + 1;
console.log(x); // 2

// --연산자는 피연산자의 값을 변경하는 암묵적 할당이 이루어진다.
x--; // x = x - 1; 
console.log(x); // 1

// 증가/감소(++/--) 연산자는 피연산자의 값을 변경하는 부수 효과가 있다.
// (증가/감소 연산을 하면 피연산자의 값을 변경하는 암묵적 할당이 이뤄진다.)