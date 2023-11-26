// 단축 평가를 유용하게 쓸 수 있는 상황

// 1. 객체가 가리키키기를 기대하는 변수가 null or undefined가 아닌지 확인하고 프로퍼티를 참조할때
// 객체는 키(Key)와 값(Value)으로 구성된 프로퍼티(property)의 집합이다. 

// 변수의 값이 null 또는 undefined인 경우 객체 프로퍼티를 참조하면 타입 에러가 발생한다. 에러가 발생하면 프로그램이 강제 종료된다.
// var elem = null;
// var value = elem.value; // TypeError: Cannot read property 'value' of null

// 이때 단축 평가를 사용하면 에러를 발생시키지 않는다.
var elem = null;
// elem이 null이나 undefined와 같은 Falsy 값이면 elem으로 평가되고
// elem이 Truthy 값이면 elem.value로 평가된다.
var value = elem && elem.value; // -> null

console.log(value);


// 2. 함수 매개변수에 기본값을 설정할때
// 함수를 호출할 떄 인수를 전달하지 않으면 매개변수에는 undefined가 할당된다. 
// 이때 단축 평가를 사용해 매개변수의 기본값을 설정하면 undefined로 인헤 발생할 수 있는 에러를 방지할 수 있다.

// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
    str = str || '';
    return str.length;
}

console.log(getStringLength());     // 0
console.log(getStringLength('Hi')); // 2

// ES6의 매개변수의 기본값 설정
function getStringLength(str = '') {
    return str.length;
}

console.log(getStringLength());     // 0
console.log(getStringLength('Hi')); // 2