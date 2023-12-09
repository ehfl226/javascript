// Function
// parameters를 받아서(input) 처리 후 return(output)을 하는 것!
// - fundamental building block in the program (프로그램을 구성하는 기본적인 building block)
// - subprogram can be used multiple times (여러 번 재사용 장점)
// - performs a task or calculates a value (한 가지 task나 값을 계산하기 위해)


// 1. Function declaration 
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb (동사형태로 함수 이름 정하기)
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
    console.log('Hello');
}
printHello(); // Hello 밖에 출력 못 함

function log(message) { // parameter로 메세지 전달
    console.log(message); // 전달된 메세지를 화면에 출력
}
log('Hello@');  // log함수 호출하면서 원하는 메세지 입력 가능하다! -> 전달된 Hello@가 출력된다.
log(1234);      //  숫자타입 자동 변환 '1234' but TypeScript 배우자!

// TypeScript
// [함수이름][전달돼야하는 파라미터]와[데이터 타입][어떤 값이 리턴되는지]          
// function log(message: string): number {
//    console.log(message);
//    return 0;
//}


// 2. Parameters
// premitive parameters: passed by value (premitive는 memory가 value가 저장되어 있어, 전달)
// object parameters: passed by reference (object는 reference가 전달)
function changeName(obj) { // changeName은 
    obj.name = 'coder'; // 전달된 obj에 name을 'coder'로 무조건 변경하는 함수
}
const yoon = { name: 'yoon'}; // yoon이라는 const를 정의하고 'yoon'이라는 obj(name)을 만들어서 할당해주면
changeName(yoon);             // 메모리에는 obj가 만들어진 reference가 메모리에 들어가고 reference는 obj를 메모리 어딘가에 yoon을 가리키고 있음
console.log(yoon);            // changeName(yoon)을 전달하게 되면 obj.[const yoon = { name: 'yoon'};(yoon이 가리키고 있는 이름을)] name = 'coder'로 변경
// {name: "coder"}
// 오브젝트는 reference로 전달되기 때문에 함수안에서 값을 변경하게 되면,
// 변경된 사항이 그대로 메모리에 적용이 되기 때문에 추후에 변경된 사항 확인 가능하다. 


// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') { // 2. from = 'unknown'값이 대체되어 출력된다.
    console.log(`${message} by ${from}`); // Hi! by unknown
}
showMessage('Hi!'); // 1. 사용자가 parameter를 전달하지 않을 때


// 4. Rest parameters (added in ES6)
function printAll(...args) { // ... -> Rest parameters(배열 형태로 전달)
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
    
    for (const arg of args) { // args에 있는 값들이 차례대로 arg에 지정되어 출력된다.
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg)); // 배열에서!
}
printAll('dream', 'coding', 'yoon');


// 5. Local scope (밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.)
let globalMessage = 'global'; // global variable
function printMessage() {
    console.log(message); // {}블럭 안에서 변수를 선언하게되면 : local variable(지역변수)
    console.log(globalmessage); // globalmessage 출력 가능 -> scope
    function printAnother() {
        console.log(message); // 1. 자식은 부모의 message 확인 가능
        let childMessage = 'hello'; // 2. 하지만 자식에 정의된 childMessage를 보려고 한다면
    } 
    // console.log(cildMessage); // 3. error가 발생한다.
    // return undefined; - return type이 없는 함수에 생략되어 있다.
} // 중첩된 함수에서 자식의 함수가 부모 함수에 접근 가능한 것이 클로저!
printMessage(); 


// 6. return a value 
function sum(a, b) { // 함수에서는 parameters(a, b)로 값들을 전달받아서
    return a + b;    // 계산된 값을 return 할 수 있다.
}
const reault = sum(1, 2); // sum이라는 함수를 호출하게 되면 1과 2를 더해서 3이 return된다.
console.log(`sum: ${sum(1, 2)}`);


// 7. Early return, early exit
//bad
function upgradeUser(user) {
    if (user.print > 10) {  // if...else를 번갈아 쓰기 보단
        // long upgrade logic...
    }
}

//good
function upgradeUser(user) {
    if (user.print <= 10) { // 1. 조건이 맞지 않는 경우, 값이 -1, undefined인 경우
        return;             // 빨리 return을 하고 
    }
    // long upgrade logic... 2. 조건이 맞을 때만 필요한 로직 실행
}


// First-class function (다른 변수와 마찬가지로 변수에 할당이 되고, 함수에 파라미터 값으로 전달되며 리턴값으로도 리턴이 됨)
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression (위를 가능하게 하는 것)
// a function declaration and be called earlier than it is defiend.(hoisted) (function declaration - 함수가 선언되기 이전에 호출가능(자바스크립트 엔진이 선언된 것을 제일 위로 올려주기 때문에!)
// a function expression is created when the execution reaches it. (function expression : 할당된 다음부터 호출 가능)
const print = function () { // 함수를 선언 함과 동시에 print라는 변수에 할당
    console.log('print');   
};
print(); // 'print'
const printAgain = print; // printAgain은 function를 가리키고 있음
printAgain(); // 'print'
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) { 
    if (answer === 'love you') {
      printYes(); // 정답일 경우 printYes라는 Callback function 호출
    }else {
      printNo();
    }
  }
  // anonymous function 
  const printYes = function () {
    console.log('yes!');
  };

  // named function
  // better debugging in debugger's stack traces
  // recursions
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function () {
//   console.log('simplePrint!');
// };
const simplePrint = () => console.log('simplePrint!');

const add = (a, b) => a + b;
// const add = function (a, b) {
//  return a + b ;
// }

// {} 필요할 때 return값 넣기
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();
// 선언함과 동시에 호출하려면 함수를()묶고 함수를 호출하듯이 ();.


// Fun quiz time 🤍
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
// 정해진 데이터 처리 시 switch문을 사용하는 것이 좋다!
function calculate(command, a, b) {
    switch (command) {
        case 'add':
          return a + b;
        case 'substract':
          return a - b;  
        case 'divide':
          return a / b;  
        case 'multiply':
          return a * b;  
        case 'remainder':
          return a % b;  
        default:
            throw Error('unkonwn command');
      }
    }
    console.log(calculate('add', 2, 3));