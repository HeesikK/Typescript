가드문, 흔히 우리가 알기에 예외 처리문이라고 알고 있을 실행문은 조건문을 활용해 예외 상황을 만들 수 있는 데이터가 함수에 접근했을 때 그 데이터를 사전 처리하는 것을 이야기 합니다.

타입 가드문 또한 마찬가지입니다. 특정 함수의 매개 변수는 어떠한 타입이 올 수 있기 때문에 any 타입으로 추론되기 때문에 타입이 명확하지 않습니다.

예를 들면 아래와 같습니다.

```javascript
function print(obj <-- any){
	obj.seongyong // <-- any 타입에는 seongyong 속성은 존재하지 않음
}

// 따라서 조금더 타입이 안정적인 환경과 생산성을 위한 자동안성을 지원하기 위해 타입 가드문을 사용합니다.

function print(obj){
	if(타입 === seongyong){ // <-- 타입 가드문
    obj.seongyong
	}
}
```

Type Guard 구현하기
 

1.'typeof' 연산자 

 

 

유니온타입이 string, number 등의 기본 타입들로만 구성되어 있을 경우에 사용한다.

 

 

if 문과 typeof 연산자를 결합하여 타입가드를 구현할 수 있다.

function add(a: number | string, b: number | string): number | string {
   
   //타입가드: a와 b 가 number일 경우
   
   if (typeof a === 'number' && typeof b === 'number') {
        return a + b}
   
   //타입가드 a와 b가 string일 경우
   
   else if (typeof a === 'string' && typeof b === 'string') {
        return a + b 
    }

    else {return 'a and b should have same type'}
}


//위의 코드의 두개의 if문이 type guard 역할을 수행한다.
 

 

2. 타입가드를 요구하지 않는 예시

타입가드가 필요없는 예시
type CheeseBurger = {
    numBread: number;
    numCheese: number;
}

type BeefBurger = {
    numBread: number;
    numBeef: number;
}

// 재료를 알려주는 함수
// parameter가 union type으로 되어있다.

function sayIngredient (burger: CheeseBurger | BeefBurger) {
    console.log('number of bread : ' + burger.numBread)
    }
    


 //numBread는 CheeseBurger와 BeefBurger 전부 가지고있는 요소이다.
 // 그래서 TS 컴파일러가 이미 알고있기때문에
 // Type Guard가 필요없다.
 

 

 

 

3.  "typeof"는 내가 정의한 커스텀타입에는 사용할 수없다.

// burger매개변수는 유니온타입이 지정되어있다.

function sayIngredient (burger: CheeseBurger | BeefBurger) {

//BeefBurger일때만 실행되는 코드. 그러니
// 커스텀타입은 typeof로 체크해줄수 없다

if (typeof burger === 'BeefBurger') {
        console.log('number of beef : ' + burger.numBeef
    }

console.log('number of bread : ' + burger.numBread)
    }
