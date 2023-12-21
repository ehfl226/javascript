// Objects
// one of the JsvaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal" syntax
const obj2 = new Object(); // 'object constructor' syntax

// const name = 'yoon';  primitive type은 변수 하나당 값을 하나만 받을 수 있음
// const age = '50';
// print(name, age); 출력하고 싶은 함수를 만든다면 이름과 나이를 각각 파라미터로 전달해야됨

// function print(name, age) { 함수를 정의해서 쓸 때도 두가지의 파라미터를 받아올 수 있게 만들어야함
//     console.log(name);
//     console.log(age);
// }

function print(person) { // 2. name과 age를 따로 받지 않고 person이란 데이터를 받아서
    console.log(person.name); // person의 이름과
    console.log(person.age); // person의 나이를 출력
}

// 1. object로 관리
const ellie = { name: 'yoon', age: 50}; // js에선 class가 없어도 {}를 이용해서 object 생성가능하다
print(yoon); // 3. 전달할때도 yoon만 호출한다.


// with JavaScript magic(dynamically typed language)
// 동적으로 type이 Runtime때 결정되는 언어
// can add properties later