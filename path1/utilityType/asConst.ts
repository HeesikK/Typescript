/*
  as const 타입
*/

let a = "hi"; // let a: 선언한 변수의 타입인 string 로 타입 추론이 일어난다
const b = "hi"; // const b: "hi" 선언한 변수들은 리터럴 타입을 가진다

// 그러나 배열, 튜플, 객체는 let, const 모두 리터럴 타입으로 범위를 좁히지 않음

let c = [1, 2, 3, 4]; // let c: number[] 로 타입 추론
const d = [1, 2, 3, 4]; // const d: number[] 로 타입 추론

let e = {
  num: 1, // num: number
  str: "hi", // str: string
};

const f = {
  num: 1, // num: number
  str: "hi", // str: string
};

/* 
  타입 스크립트 3.4 버전부터 도입된 const assertion을 활용하여 이런 경우에도 타입 추론의 범위를 좁힐 수 있다.
  사용법은 변수 선언문 뒤에 as const를 추가하거나
  제네릭 부분에 <const>를 사용하면 된다.
*/

let x = "hi" as const; // let x: "hi"

/*
  이처럼 let에서 as const를 사용하게 되면 리터럴 타입이 적용되는 것을 볼 수 있다.
  그리고 타입이 리터럴 타입으로 고정되었기 때문에 다른 값으로 재할당이 불가능하다.
*/
