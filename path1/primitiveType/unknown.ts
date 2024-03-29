/*
  unknown 타입

  any와 마찬가지로 모든 타입을 집어넣을 수 있음.
  아직 어떤 타입이 들어올지 모를 경우, 다양한 타입을 집어넣어야할 경우 이걸 사용해보시길 바랍니다. 
  중요한 특징은
  1. unknown 타입엔 모든 자료 다 집어넣을 수 있음
  2. 자료집어넣어도 타입은 그대로 unknown입니다. 

*/

let user: unknown = "Levi";
user = 123;
user = undefined;
user = {};

/*
  unknown 타입과 any 타입의 차이점?

  unknown 타입에는 any 타입 외에 어떤 타입도 할당할 수 없음
  하지만 any 타입에는 never를 제외한 모든것이 할당 가능

  따라서 unknown 타입에는 어떤 것을 대입하는게 유효하지 않기 때문에 any 타입보다 안전하다.
*/
let a: number = user;
let b: string = user;
let c: boolean = user;
let d: any = user;

let person: any = true;

let x: number = person;
let y: string = person;
let z: boolean = person;
let w: never = person;
