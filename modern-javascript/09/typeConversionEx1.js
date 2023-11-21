// 타입 변환
// 자바스크립트의 모든 값은 타입이 있다. 값의 타입은 개발자의 의도에 따라 다른 타입으로 변환할 수 있다.
// 개발자가 의도적으로 값의 타입을 변환하는 것을 명시적 타입변환(explicit coercoin), 타입 캐스팅(type casting)이라 한다.

var x = 10;

// 명시적 타입 변환(explicit coercoin)
// 숫자를 문자열로 타입 캐스팅(type casting)한다.
var str = x.toString();
console.log(typeof str, str); // string 10

// x 변수의 값이 변경된 것은 아니다.
console.log(typeof x, x); // number 10

// 개발자의 의도와는 상관없이 표현식을 평가하는 도중에 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되기도 한다.
// 이를 암묵적 타입 변환(implicit coercion) 또는 타입 강제 변환(type coercion)이라 한다.

var x = 10;

// 암묵적 타입 변환(implicit coercion)
// 문자열 연결 연산자는 숫자 타입 x의 값을 바탕으로 새로운 문자열을 생성한다.

var str = x + ''; // '10 + '';
console.log(typeof str, str); // string 10

// x 변수의 값이 변경된 것은 아니다.
console.log(typeof x, x); // number 10

// 명시적 타입 변환이나 암묵적 타입 변환이 기존 원시 값을 직접 변경하는 것은 아니다.
// 원시 값은 변경 불가능한 값이므로 변경할 수 없다.
// 타입 변환이란 기존 원시 값을 사용해 다른 타입의 새로운 원시 값을 생성하는 것이다.