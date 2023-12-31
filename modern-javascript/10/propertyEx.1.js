// 프로퍼티
// 객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성된다.

var person = {
    // 프로퍼티 키는 name, 값은 'Lee'
    name: 'Lee',
    // 프로퍼티 키는 age, 값은 30
    age: 30
};

console.log(person); // { name: 'Lee', age: 30 }
// 프로퍼티를 나열할 때는 쉼표(,)로 구분, 일반적으로 마지막 프로퍼티 뒤에는 쉼표를 사용하지 않으나 가능함


// 프로퍼티키와 프로퍼티 값으로 사용할 수 있는 값은 다음과 같음
// 프로퍼티 키 : 빈 문자열을 포함하는 모든 문자열 또는 심벌 값
// 프로퍼티 값 : 자바스크립트에서 사용할 수 있는 모든 값


// 프로퍼티 키는 프로퍼티 값에 접근할 수 있는 이름으로 식별자 역할을 한다.
// 심벌 값도 프로퍼티 키로 사용할 수 있지만 일반적으로 문자열을 사용한다.
// 문자열이므로 ('...', "...")로 묶어야 한다.
// 식별자 네이밍 규칙을 따르지 않는 이름에는 반드시 따옴표를 사용해야한다.
var person = {
    firstName: 'ji-yoon',   // 식별자 네이밍 규칙을 준수하는 프로퍼티 키
    'last-name': 'Lee'      // 식별자 네이밍 규칙을 준수하지 않은 프로퍼티 키
};

console.log(person); // { firstName: 'ji-yoon', 'last-name': 'Lee' }


// 따옴표를 생략한 last-name을 -연산자가 있는 표현식으로 해석한다.
var person = {
    firstName: 'ji-yoon',   
//   last-name: 'Lee'      // SyntaxError: Unexpected token '-'
};

console.log(person);


// 문자열 또는 문자열로 평가할 수 있는 표현식을 사용해 프로퍼티 키를 동적으로 생성할 수도 있다.
// 이 경우는 프로퍼티 키로 사용할 표현식을 대괄호([...])로 묶어야 한다.
var obj = {};
var key = 'hello';

// ES5: 프로퍼티 키 동적 생성
obj[key] = 'world';
// ES6: 계산된 프로퍼티 이름
// var obj = {[key]: 'world'};

console.log(obj); // { hello: 'world' }


// 빈 문자열을 프로퍼티 키로 사용해도 에러가 발생하지는 않는다. 하지만 키로서의 의미를 갖지 못하므로 권장하지 않는다
var foo = {
    '':''     // 빈 문자열도 프로퍼티 키로 사용할 수 있다.
};

console.log(foo);// {"":""}


// 프로퍼티 키에 문자열이나 심벌 값 외의 값을 사용하면 암묵적 타입 변환을 통해 문자열이 된다.
// 프로퍼티 키로 숫자 리터럴을 사용하면 따옴표는 붙지 않지만 내부적으로는 문자열로 변환된다.
var foo = {
    0: 1,
    1: 2,
    2: 3
};

console.log(foo); // { '0': 1, '1': 2, '2': 3 }


// var, function 같은 예약어를 프로퍼티 키로 사용해도 에러가 발생하지 않지만 에러가 발생할 수 있으므로 권장하지 않는다.
var foo = {
    var: '',
    function: ''
}

console.log(foo); // { var: '', function: '' }



// 이미 존재하는 프로퍼티 키를 중복 선언하면 나중에 선언한 프로퍼티가 먼저 선언한 프로퍼티를 덮어쓴다.
// 이때 에러가 발생하지 않는다는 점에 주의한다.
var foo = {
    name: 'Lee',
    name: 'Kim'
}

console.log(foo); // { name: 'Kim' }