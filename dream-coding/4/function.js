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

function log(message) {
    console.log(message);
}
log('Hello@');  // 타입이 중요한 경우 난해할 수 있음 타입스크립트를 배우자..!
log('1234');

// 2. Parameters
// premitive parameters: passed by value (memory가 value가 저장되어 있어, 전달)
// object parameters: passed by reference (reference가 전달)
function changeName(obj) {
    obj.name = 'coder';
}
const yoon = { name: 'yoon'};
changeName(yoon);
console.log(yoon);

// 3. Default parameters (added in ES6)
function showMessage(message, from) {
    if (from === undefined) {
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
    
    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'yoon');




























































































