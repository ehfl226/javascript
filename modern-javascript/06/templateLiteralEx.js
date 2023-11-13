// 템플릿 리터럴 (template literal)
var template = `Template literal`;
console.log(template); // Template literal

// 멀티라인 문자열
// 일반 문자열 내에서는 줄바꿈(개행)이 허용되지 않는다.
//var str = 'Hello
//world.'; 
// SyntaxError: Invalid or unexpected token

// 일반 문자열('')내에서 줄바꿈 등의 공백을 표현하려면
// 이스케이프 시퀀스를 사용해야한다.[\n: 개행(다음 행으로 이동), \t: 탭(수평)]
var template = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';
console.log(template);
//<ul>
//	<li><a href="#">Home</a></li>
//</ul>

// 멀티라인 문자열 (백틱(``)을 사용할 경우 템플릿 리터럴 내에서는 이스케이프 시퀀스를 사용하지 않고도 줄바꿈이 허용되고 공백도 있는 그대로 적용된다.)
var template = `<ul>
    <li><a href="#">Home</a></li>
</ul>`;
console.log(template);
//<ul>
//	<li><a href="#">Home</a></li>
//</ul>

// 표현식 삽입 (ES5)
var first = 'ji-yoon';
var last = 'Lee';

//ES5 : 문자열 연결 (연산자+를 사용해 연결, 피연산자중 하나 이상이 문자열인 경우 문자열 연결 연산자로 동작한다.)
console.log('My name is '+ first + ' ' + last + '.'); //My name is ji-yoon Lee.

// 표현식 삽입(ES6)
var first = 'ji-yoon';
var last = 'Lee';

// ES6 : 표현식 삽입 (${}으로 표현식을 감싼다. / ``사용)
console.log(`My name is ${first} ${last}.`); // My name is ji-yoon Lee.

// ex1 (표현식의 평가결과가 문자열이 아니여도 문자열로 타입이 강제로 변환되어 삽입된다.)
console.log(`1 + 2 = ${1 + 2}`); // 1 + 2 = 3

// ex2 (표현식 삽입은 반드시 템플릿 리터럴(``) 내에서 사용해야 한다. 
// 일반 문자열('')에서의 표현식 삽입(${})은 문자열로 취급된다.)
console.log('1 + 2 = ${1 + 2}'); // 1 + 2 = ${1 + 2}