// 문자열 타입
var string;
string = '문자열'; // 작은따옴표
string = "문자열"; // 큰따옴표
string = `문자열`; // 백틱(ES6)
string = '작은 따옴표로 감싼 문자열 내의 "큰따옴표"는 문자열로 인식된다.';
string =  "큰따옴표로 감싼 문자열 내의 '작은따옴표'는 문자열로 인식된다.";

// 문자열을 따옴표로 감싸는 이유는 키워드나 식별자 같은 토큰과 구분하기 위해서다.

// 따옴표로 감싸지 않은 hello를 식별자로 인식한다.
var string hello; //ReferenceError: hello is not defined