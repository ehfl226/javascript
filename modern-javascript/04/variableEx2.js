console.log(score); // undefined

var score; // 1) 변수 선언
score = 80; // 2) 값의 할당
// 1)변수 선언은 런타임 이전에 먼저 실행, 2)값의 할당은 런타임에 실행된다. -> 이미 undefined로 초기화
// score 변수에 값을 할당하면 undefined-> 80으로 변경(재할당)된다. 

// 변수 선언과 값의 할당을 다음과 같이 하나의 문으로 단축 표현할 수도 있다.
var score = 80; // 변수 선언과 값의 할당

console.log(score); // 80
// 변수의 선언과 값의 할당을 하나의 문장으로 단축 표현해도 자바스크립트 엔진은 변수의 선언과 값의 할당을 2개의 문으로 각각 실행한다.
// 따라서 변수에 undefined가 할당되어 초기화되는 것은 변함이 없다.
// undefined가 저장되어 있던 메모리 공간을 지우고 그 메모리 공간에 할당 값을 80을 새롭게 저장하는 것이 아니라
// 새로운 메모리 공간을 확보하고 그곳에 할당 값 80을 저장한다.

console.log(score); //undefined

score = 80; // 값의 할당
var score; // 변수 선언

console.log(score); // 80
