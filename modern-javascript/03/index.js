//modern-javascript/03/index.js
const arr = [1, 2, 3];
arr.forEach(console.log);
//arr.forEach(alert);
// - 오류 [ ReferenceError: alert is not defined ]
//브라우저에 알림창을 띄우는 alert 함수는 브라우저에서만 동작하는 클라이언트 사이트 Web API이므로 브라우저 환경에서만 유효하다.

//클라이언트 사이트 Web API가 포한된 소스코드는 Code Runner 확장 플러그인을 통해 실행하지 말고 브라우저 환경에서 실행해야 한다. 
