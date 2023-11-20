// while문
// 주어진 조건식의 평가 결과가 참이면 코드블록을 계속해서 반복 실행한다.
// for문은 반복 횟수가 명확할 때 주로 사용하고 while문은 반복 횟수가 불명확할 때 주로 사용한다.
// 조건문의 평가 결과가 거짓이 되면 코드 블록을 실행하지 않고 종료한다.
// (조건식의 평가결과가 불리언 값이 아니면 불리언 값으로 강제 변환하여 참, 거짓을 구별한다.)

var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
while (count < 3){
    console.log(count); // 0 1 2 
    count++;
} 

// 무한루프
// 조건식의 평가 결과가 언제나 참이면 무한루프가 된다.
while (true) {      }

// 탈출 하기 위해서는 코드 블록 내에 if 문으로 탈출 조건을 만들고 break문으로 코드블록을 탈출한다.
var count = 0;
// 무한루프
while (true) {
    console.log(count);
    count++;
    // count가 3이면 코드 블록을 탈출한다.
    if (count === 3) break;
} // 0 1 2 

// do...while 문
// 코드 블록을 먼저 실행하고 조건식을 평가한다. 따라서 코드 블록은 무조건 한 번 이상 실행된다.
var count = 0;
// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
do {
    console.log(count); // 0 1 2 
    count++
} while (count < 3);