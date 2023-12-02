// Hello World! 출력
// Preparation(환경설정)
// async vs defer의 차이점

// Whole-script strict mode syntax
// JavaScript is very flexible
// flexible === dangerous
// added ECMAScript 5
'use strict'; // 순수 javascript를 쓸 때 써주는 것이 좋다.(효율적으로 빠르게 분석 가능, 실행시 성능개선 가능)

console.log('Hello World!');

let a;  // 2. let a 선언 하면 에러 해결
a = 6;  // 1. use strict를 선언하지 않아도 브라우저에서는 에러 안남, use strict 선언 후 -> Error