// continue 문
// 반복문의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로
// 실행 흐름을 이동시킨다. break 문처럼 반복문을 탈출하지는 않는다.

// 문자열에서 특정 문자의 개수를 세는 예
var string = 'Hello Wordl';
var search = 'l';
var count = 0;

// 문자열을 유사 배열이므로 for 문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++){
    // 'l'이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.  
    if (string[i] !== search) continue;
    count++; // continue 문이 실행되면 이 문은 실행되지 않는다.
}

console.log(count); // 3

// 참고로 String.prototype.match 메서드를 사용해도 같은 동작을 한다.
const regexp = new RegExp(search, 'g');
console.log(string.match(regexp).length); // 3


// 위 예제 for문과 동일한 코드
for(var i = 0; i < string.length; i++){
    // 'l'이면 카운트를 증가시킨다.
    if (string[i] === search) count++;
} 

console.log(count); // 3
// if 문 내에서 실행해야 할 코드가 한 줄이라면 continue 문을 사용했을 때보다 간편하고 가독성이 좋다.
// 코드가 길다면 들여쓰기가 한 단계 더 깊어지므로 continue 문을 사용하는 편이 가독성이 더 좋다.

// continue 문을 사용하지 않으면 if 문 내에 코드를 작성해야 한다.
for (var i = 0; i <string.length; i++) {
    // 'l'이면 카운트를 증가시킨다.
    if (string[i] === search){
        count++;
        // code
        // code
        // code
    }
}

// continue 문을 사용하면 if 문 밖에 코드를 작성할 수 있다.
for (var i = 0; i < string.length; i++){
    // 'l'이 아니면 카운트를 증가시키지 않는다.
    if(string[i] !== search) continue;

    count++;
    // code
    // code
    // code
}