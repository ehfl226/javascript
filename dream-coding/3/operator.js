// 1. String conacatenation (문자열 + 문자열 = 새로운 문자열)
console.log('my' + ' cat');
console.log('1' +  2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);


// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponetiation


// 3. Increment and decrement operators
let counter = 2;
// (++)
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); // 3, 3
const postIncrement = counter++; // 할당을 먼저, 업데이트는 그 뒤에!
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); // 3, 4

// (--)
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); // 3, 3
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`); // 3, 2


// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y; (9)
x -= y; // x = x - y; (-3)
x *= y; // x = x * y; (18)
x /= y; // x = x / y; (0.5)
console.log(x /= y);


// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal


// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`); // true가 나오면 멈춤!

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`); // false가 나오면 멈춤!(모두 true 여야 함)

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if(nullableObject != null) {
//    nullableObject.something;
// }

// ! (not)
console.log(!value1); // false기 떄문에 true로 바꿈!


function check(){
    for (let i = 0; i < 10; i++);{
       // wasting time
       console.log('😱');
    }
    return true;        
}


// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by regerence
const yoon1 = { name: 'yoon' };
const yoon2 = { name: 'yoon' };
const yoon3 = yoon1;
console.log(yoon1 == yoon2); // false (각각 다른 reference가 저장되어있어서 다르다.)
console.log(yoon1 === yoon2); // false
console.log(yoon1 === yoon3); // true (yoon1의 reference value를 yoon3에 할당, 똑같다.)

// equality = puzzler
console.log(0 == false); // true
console.log(0 === false); // false (0은 boolean type이 아님)
console.log('' == false); // true
console.log('' === false); // false (''은 boolean type이 아님)
console.log(null == undefined); // true
console.log(null === undefined); // false


// 8. Conditional operators : if
// if, else if, else
const name = 'yoon';
if (name === 'yoon') {
  console.log('Welcome, yoon!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
    console.log('unkwnon')
}


// 9. Ternary operator: ?
// condition ? value1 : value2; // true면 value1을 실행
console.log(name === 'yoon' ? 'yes' : 'no');


// 10. Switch statment
// use for mutiple if checks
// use for eum-like value check
// use for mutiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE' :
      console.log('go away!');
      break;
    case 'Chrome':
    case 'Firefox': 
      console.log('love you!');
      break;
    // case 'Chrome':
    //   console.log('love you!');
    //   break;
    // case 'Firefox' :
    //   console.log('love you!');
    //   break; 
    default:
      console.log('same all!');
      break;
}


// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
// 조건문이 맞을때만 블럭을 실행하고 싶을때 쓴다.
// false가 나올때까지 무한대로 반복, 출력
let i = 3;
while (i > 0) {                      // while: 3                 
    console.log(`while: ${i}`);      // while: 2
    i--;                             // while: 1
}

// do while loop, body code is executed first,
// then check the condition.
// 블럭을 먼저 실행, 출력하고 조건이 맞는지 검사한다.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i --) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration (블럭 안 지역변수 선언))
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) { // i:0 j:0-9, i:1 j:0-9 ... 반복
  for (let j = 0; j < 10; j++){
    console.log(`i: ${i}, j: ${j}`);
  }
}

// breck (loop를 완전히 끝내는 것), continue(현재만 넘어가고 다시 다음으로 넘어감)
// 01. iterate from 0 to 10 and print only even numbers (use contiue)
// 0-10까지 짝수인 숫자만 print
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0){
    continue;
  }
  console.log(`q1. ${i}`);
}
// for (let i = 0; i < 11; i++) {
//     if (i % 2 === 0){
//       console.log(`q1. ${i}`);
//     }
//   }

// 02. iterate from 0 to 10 and print number until reahing 8 (use break)
// 0-10까지의 범위 8을 만나면 그만
for (let i = 0; i < 11; i++) {
  if (i > 8){
    break;
  }
  console.log(`q2. ${1}`)
}