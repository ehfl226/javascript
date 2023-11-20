// 반복문(loop statment)은 조건식의 평가 결과가 참인 경우 코드 블록을 실행한다..
// 그 후 조건식을 다시 평가하여 여전히 참인 경우 코드 블록을 다시 실행한다. 조건식이 거짓일때까지 반복한다.
// for문, while문, do...while문

// for문 : 조건식이 거짓으로 평가될 때까지 코드 블록을 반복 실행한다.
// for (변수 선언문 또는 할당문; 조건식; 증감식){
// 조건식이 참인 경우 반복 실행될 문;   
// }

//for (var i = 0; i < 2; i++){
//    console.log(i);
//} // 0 1
// 1. for문을 실행하면 맨 먼저 변수 선언문 var i = 0이 실행된다. 변수 선언문은 단 한 번만 실행된다.
// 2. 변수 선언문의 실행이 종료되면 조건식이 실행된다. 현재 i 변수의 값은 0이므로 조건식의 평가 결과는 true다.
// 3. 조건식의 평가 결과가 true이므로 코드 블록이 실행된다. 증감문으로 실행 흐름이 이동하는 것이 아니라 
//    코드 블록으로 실행흐름이 이동하는 것에 주의하자.
// 4. 코드 블록의 실행이 종료되면 증감식 i++가 실행되어 i 변수의 값은 1이 된다.
// 5. 증감식 실행이 종료되면 다시 조건식이 실행된다. 변수 선언문이 실행되는 것이 아니라 조건식이 실행된다는 점에 주의하자.
//    (앞에서 설명 했지만 변수 선언문은 단 한 번만 실행된다.) 현재 i 변수의 값은 1이므로 조건식의 평가 결과는 true다.
// 6. 조건식의 평가 결과가 true이므로 코드 블록이 다시 실행된다.
// 7. 코드 블록의 실행이 종료되면 증감식 i++가 실행되어 i 변수의 값은 2가 된다.
// 8. 증감식 실행이 종료되면 다시 조건식이 실행된다. 현재 i 변수의 값은 2이므로 조건식 평가 결과는 false다.
//    조건식의 평가 결과가 false이므로 for문의 실행이 종료된다.

// 역으로 반복되는 for문
//for (var i = 1; i >= 0; i){
//    console.log(i);
//}

// 무한루프
//for(;;){   }

// 중첩 for문
// 두 개의 주사위를 던졌을 때 두 눈의 합이 6이 되는 모든 경우의 수를 출력하기 위해
// 이중 중첩 for문을 사용한 예다.
for (var i = 1; i <= 6; i++){
    for(var j = 1; j<= 6; j++){
        if(i + j === 6 )console.log(`[${i} ${j}]`);
    }
}
// [1, 5]
// [2, 4]
// [3, 3]
// [4, 2]
// [5, 1]