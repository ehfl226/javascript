 // switch문
 // switch문의 표현식은 불리언 값보다는 문자열이나 숫자 값인 경우가 많다.
 // switch문은 논리적 참, 거짓보다는 다양한 상황(case)에 따라 실행할 코드블록을 결정할때 사용한다.
 
 // 월을 영어로 변환한다. (11 -> 'November')
 var month = 11;
 var monthName;

 switch (month){
    case 1: monthName = 'January';
        break;
    case 2: monthName = 'February';
        break;
    case 3: monthName = 'March';
        break;
    case 4: monthName = 'April';
        break;
    case 5: monthName = 'May';
        break;
    case 6: monthName = 'June';
        break;    
    case 7: monthName = 'July';
        break;
    case 8: monthName = 'August';
        break;
    case 9: monthName = 'September';
        break;
    case 10: monthName = 'October';
        break;
    case 11: monthName = 'November';
        break;
    case 12: monthName = 'December';
        break;
    default: monthName = 'Invalid month';  // default문에서는 break문 생략     
 }

 console.log(monthName); // November