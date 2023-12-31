// Objects
// one of the JsvaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value }; (키 : 접근할 수 있는 변수(프로퍼티)와 그 프로퍼티가 가지고 있는 값)

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
yoon.hasJob = true;
console.log(yoon.hasJob);

// can delete properties later
delete yoon.hasJob;
console.log(yoon.hasJob);


// 2. Computed properties
// key should be always string
console.log(yoon.name); // 코딩하는 순간 키에 해당하는 값을 받아올때
console.log(yoon['name']); // 어떤 키가 필요한지 모를 때, 런타임때 결정
yoon['hasJob'] = true; 
console.log(yoon.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(yoon, 'name');
printValue(yoon, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('yoon', 30);
console.log(person4);


// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    return this;
}


// 5. in operator: property existence check (key in obj)
console.log('name' in yoon);
console.log('age' in yoon);
console.log('random' in yoon);
console.log(yoon.random);


// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in yoon) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assingn(dest, [obj1, obj2, obj3...])
const user = {name: 'yoon', age: '30' };
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);