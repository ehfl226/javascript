// break 문
// 레이블 문, 반복문(for, for...in, for...of, while, do...while), switch문의

// 코드 블록 외에 break문을 사용하면 SyntaxError(문법 에러)가 발생한다.
if (true){
// break; // Uncaught SyntaxError: Illegal break statement
}

// 레이블 문(식별자가 붙은 문)
// foo라는 레이블 식별자가 붙은 레이블 문
foo: console.log('foo');

// 레이블 문은 프로그램의 실행 순서를 제어하는 데 사용한다. 사실 switch문의 case문과 default문도 레이블문이다.
// 레이블 문을 탈출하려면 break문에 레이블 식별자를 지정한다.
// foo라는 식별자가 붙은 레이블 블록문
foo: {
    console.log(1);
    break foo; // foo 레이블 블록문을 탈출한다.
    console.log(2);
}

console.log('Done!');

// 중첩된 for 문의 내부 for 문에서 break 문을 실행하면 내부 for 문을 탈출하여 외부 for 문으로 진입한다.
// 이때 내부 for 문이 아닌 외부 for 문을 탈출하려면 레이블 문을 사용한다.
// outer라는 식별자가 붙은 레이블 for 문
outer: for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      // i + j === 3이면 outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
      if (i + j === 3) break outer;         // inner [0 0]
      console.log(`inner [${i} ${j}]`);     // inner [0 1] 
    }                                       // inner [0 2]            
}                                           // inner [1 0]
                                            // inner [1 1]
console.log('Done!');
// 레이블 문은 중첩된 for 문 외부로 탈출할 때 유용하지만 그 밖의 경우에는 일반적으로 권장하지 않는다.

// break 문은 레이블 문뿐 아니라 반복문, switch 문에서도 사용할 수 있다.
// 이 경우 break 문에 레이블 식별자를 지정하지 않는다.
// break 문은 반복문을 더 이상 진행하지 않아도 될 때 불필요한 반복을 회피할 수 있다.

// 문자열에서 특정 문자의 인덱스(위치)를 검색하는 예
var string = 'Hello World.';
var search = 'l';
var index;

// 문자열은 유사 배열이므로 for 문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++){
    // 문자열의 개별 문자가 'l'이면
    if (string[i] === search) {
      index = i;
      break; // 반복문을 탈출한다.
    }
}
console.log(index); // 2

// String.prototype.indexOf 메서드를 사용해도 같은 동작을 한다.
console.log(string.indexOf(search)); // 2