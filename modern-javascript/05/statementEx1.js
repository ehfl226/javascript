// 변수 선언문
var x;
// 할당문
x = 5;
// 함수 선언문
function foo () {}
// 조건문
if (x > 1) { console.log(x); }
// 반복문
for (var i = 0; i <2; i++) { console.log(i); }


// 세미콜론 자동 삽입 기능(ASI automatic semicolon insertion)이 암묵적으로 수행
function foo () {
    return
     {}
    // ASI의 동작 결과 -> return; {}
    // 개발자의 예측 -> return {};
}

console.log(foo()); // undefined

var bar = function () {}
(function() {})();
// ASI의 동작 결과 -> var bar = function () {}(function() {})();
// 개발자의 예측 -> var bar = function () {}; (function() {})();
// TypeError: (intermediate value)(...) is not a function