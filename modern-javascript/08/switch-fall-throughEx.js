// 폴스루(fall through)
// switch문의 표현식의 평가 결과와 일치하는 case문으로 실행 흐름이 이동하여 문을 실행한 것은 맞지만,
// 문을 실행한 후 switch문을 탈출하지 않고 switch문이 끝날 때까지 이후의 모든 case문과 default문을 실행했기 때문이다.

// 월을 영어로 변환한다. (11 -> 'November')
 var month = 11;
 var monthName;

 switch (month){
    case 1: monthName = 'January';
    case 2: monthName = 'February';
    case 3: monthName = 'March';
    case 4: monthName = 'April';
    case 5: monthName = 'May';
    case 6: monthName = 'June';
    case 7: monthName = 'July';
    case 8: monthName = 'August';
    case 9: monthName = 'September';
    case 10: monthName = 'October';
    case 11: monthName = 'November';
    case 12: monthName = 'December';
    default: monthName = 'Invalid month';
    }

    console.log(monthName); // Invalid month

// monthName변수에 'November'가 할당된 후 switch문을 탈출하지 않고 연이여 'December'가 
// 재할당되고 마지막으로 'Invalid month'가 재할당된것이다.
// break키워드로 구성된 break문은 코드 블록에서 탈출하는 역할을 한다.
// break문이 없다면 case문의 표현식이 일치하지 않더라도 실행 흐름이 다음 case문으로 연이어 이동한다.        
// default문에는 breck문을 생략하는 것이 일반적이다. switch문 맨 마지막에 위치함으로
// default문의 실행이 종료되면 switch문을 빠져나간다.

// 풀스루를 활용해 여러 개의 case문을 하나의 조건으로 사용할 수도 있다.
// 다음 예제는 윤년인지 판별해서 2월의 일수를 계산하는 예제다.

var year = 2000; // 2000년은 윤년으로 2월이 29일이다.
var month = 2;
var days = 0;

switch (month){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
      // 윤년 계산 알고리즘
      // 1. 연도가 4로 나누어떨어지는 해(2000, 2004, 2008, 2012, 2016, 2020 ...)는 윤년이다.
      // 2. 연도가 4로 나누어떨어지더라도 연도가 100으로 나누어 떨어지는 해 (2000, 2100, 2200...)는 평년이다.
      // 3. 연도가 400으로 나누어 떨어지는 해(2000, 2400, 2800...)는 윤년이다.
      days = ((year % 4 === 0 && yesr % 100 !==0)||(year % 400 ===0)) ? 29 : 28;
      break;
    default:
        console.log('Invalid month');
}

console.log(days); // 29