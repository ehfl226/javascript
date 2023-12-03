    // 1. Use strict
    // added in ES 5
    // use this for Valina Javascript.
    'use strict'; 



    // 2. Variable, rw(read/write - 메모리에 값을 읽고 쓰기가 가능)
    // (변수 : 변할 수 있는 수, 변수는 값을 저장하고 참조하기 위해 사용한다.)
    // let (added in ES6) : javascript에서 변수를 만들 때 쓰는 키워드

    let x; // 변수의 선언
    x = 6; // 정수값의 할당

    let globalName = 'global name'; // 블럭 안 밖 모두에서 출력 가능(어플리케이션의 시작부터 끝날때까지 항상 메모리에 탑제된 상태기 때문에 최소한으로 사용하는 것이 좋다.
                                    // class나 함수 if나 for 필요할때만 정의해서 쓰는 것이 좋다.)
    { // Block scope
      let name = 'yoon';            // 변수를 정의하게 되면 메모리에 값 저장 가능
      console.log(name); // yoon

      name = 'hello';
      console.log(name); // hello   // 다른 값 저장 가능
      console.log(globalName); // global scope 전역변수는 블록 안에서도 기능함 - 메모리에 항상 탑재
    }
    // console.log(name);      // Block scope 안에 정의된 값을 사용할 수 없음 Error
    console.log(globalName);   // 전역변수는 사용가능

    // var (ES6 이전에 사용 현재는 쓰지 않는게 좋다.) 
    // 대부분 프로그래밍 언어에서는 변수를 선언하고 나서 값을 할당해야하는데 var를 사용하면서 선언도 하기 전에 값을 할당하거나 console.log로 불러올 수 있었다.
    // undefined로 뜸 (변수는 정의되어 있지만 값이 없다)

    // var hoisting (move declaration from bottom to top)
    // 어디에 선언했냐에 상관없이 항상 제일 위로 선언을 끌어올려 주는 것을 말한다.
    // has no block scope - 블럭을 이용해서 선언해도 어디서나 보인다!(규모있는 프로젝트를 하다보면 블럭안에 코드를 집어 넣어도 아무곳에서 불러와져서 에러가 생김)

    {
        console.log(age); // undefined - 선언은 했지만 값은 없음(선언도 하기 전에 값을 할당, 값을 할당전에도 출력 가능)
        age = 4;          // 값 할당
        console.log(age); // 4, var hosting
        var age; 
    }
    console.log(age); // 4, 스코프를 무시한다.

    // var의 여러 단점들로 인해 let을 씀



    // 3. Constant, r(read only - 메모리에 값을 읽기만 가능) (한 번 할당하면 const 설정한 값 절대 변경 불가, 재정의가 불가능한 변환되지 않는 값을 말한다.)
    // (읽기만 가능, const를 선언하고 값을 할당하면 자물쇠가 생겨서 읽기만 가능하고 다시 다른 값으로 쓰는 것이 불가능하다.)
    // const(Immutable data type) <-> (값이 계속 변경될 수 있는 것을 Mutable data type > let 키워드를 통해 선언한 변수)
    //      favor inmmutable data type always for a few reasons:
    //     - security (보안상의 이유 : 설정값을 변경 할 수 없기 때문)
    //     - thread safety (다양한 쓰레드들이 동시에 값을 변경할 수 있는데 위험성이 있음.)
    //     - reduce human mistakes (개발자의 실수들을 방지한다. 앞으로 변경될 이유 없다면 const를 사용해서 프로그램 작성)
    const daysInWeek = 7;
    const maxNumber = 5;
    


    // 4. Variable types (메모리에 변수가 저장되는 방식은 두 가지가 있다. primitive (더이상 작은 단위로 나누어질 수 없는 single item), object (single item 여러개를 묶어서 한 박스로 관리할 수 있도록 해줌.))
    // primitive, single item: number, string, boolean, null, undefiedn,symbol (값 자체가 메모리에 저장)
    // object, box container (메모리에 레퍼런스가 담겨있고, 객체 안에 있는 값은 변경 가능하다. 레퍼런스가 저장된다.)
    // function, first-class function (data type 중 하나, 변수의 할당 가능하기 떄문에 함수의 parameter 인자로도 전달이되고, 함수에서 return type으로도 function return 가능하다.)

    const count = 17; // integer (정수)
    const size = 17.1; // decimal number (소숫점 숫자)
    console.log(`value: ${count}, type: ${typeof count}`);
    console.log(`value: ${size}, type: ${typeof size}`);

    // number - speicla numeric values: infinity, -infinity, NaN
    // 계산할때 나누고자하는 값을 정확하게 확인하지 않고 연산을 하면 에러가 발생
    // 현업에서 이런 문제로 에러가 발생*
    
    const infinity = 1 / 0; // infinity(숫자를 0으로 나누면 무한대의 숫자가 발생)
    const negativeInfinity = -1 / 0; // -infinity(-네거티브를 나누게 되면)
    const nAn = 'not a number' / 2; // NaN(숫자가 아닌 문자를 나누면 NaN값이 출력)
    console.log(infinity);
    console.log(negativeInfinity);
    console.log(nAn)  

    // bigInt (fairly new, don't use it yet) 숫자 끝에 n붙이는 것
    const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
    console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

    // string 
    const char = 'c';
    const brendan = 'brendan';
    const greeting = 'hello ' + brendan;
    console.log(`value: ${greeting}, type: ${typeof greeting}`);
    const helloBob = `hi ${brendan}!`; // template literals (`안에 string에 ${)쓰면 변수의 값이 붙여져서 나옴!`)
    console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
    //기존의 + 기호 방법 (번거롭다.)
    //console.log('value: ' + helloBob + ' type: ' + typeof helloBob);
    
    // boolean
    // false: 0, null, undefiend, NaA, ''
    // true: any other value
    const canRead = true;
    const test = 3 < 1; // false
    console.log(`value: ${canRead}, type: ${typeof canRead}`);
    console.log(`value: ${test}, type: ${typeof test}`);

    // null (텅 빈값)
    let noting = null;
    console.log(`value: ${noting}, type: ${typeof noting}`);

    // undefined (선언은 되었지만 값이 지정되어있지 않음)
    // let x;
    // console.log(`value: ${x}, type: ${typeof x}`);

    // symbol, create unique identifiers for odjects (고유한 식별자가 필요할때 씀)
    const symbol1 = Symbol('id'); // (동일한 string을 작성했어도 고유한 식별자가 다름)
    const symbol2 = Symbol('id');
    console.log(symbol1 === symbol2); // false
    const gSymbol1 = Symbol.for('id'); // string이 똑같다면 동일한 symbol을 만들고 싶다면 
    const gSymbol2 = Symbol.for('id'); // Symbol.for('id'); (주어진 string에 맞는 symbol을 만들어줘)
    console.log(gSymbol1 === gSymbol2); // true
    console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
    //symbol은 출력하면 오류가 나기때문에 .description을 이용해서 string으로 변환해서 출력해야한다.

    // object(박스 형태), real-life object, data structure
    const yoon = { name: 'yoon', age: 30 }; // (yoon은 const로 정의되어있기 때문에 한 번 할당된 object는 변경 불가능)
    yoon.age = 30; // yoon안에 name, age 메모리에는 다른 값으로 변경 가능


    
    // 5. Dynamic typing: dynamically typed language (변수를 선언할때 어떤 type인지 선언하지않고 프로그램이 동작할 때(런타임) 할당된 값에 따라서 type이 변경된다.)
    let text = 'hello';
    console.log(text.charAt(0)); // h
    console.log(`value: ${text}, type: ${typeof text}`);  // value: hello, type: string
    text = 1;
    console.log(`value: ${text}, type: ${typeof text}`);  // value: 1, type: number
    text = '7' + 5; // +연산자 : string + string으로 변환!
    console.log(`value: ${text}, type: ${typeof text}`);  // value: 75, type: string
    text = '8' / '2'; // 숫자를 나누는 /연산자 : number + number으로 변환하여 계산
    console.log(`value: ${text}, type: ${typeof text}`);  // value: 4, type: number
    console.log(text.charAt(0)); // error 