/*
  conditional 타입

  입력된 제네릭 타입에 따라 타입을 결정하는 것을 말한다
*/

type IsStringType<T> = T extends string ? string[] : number[];

type T1 = IsStringType<string>;
type T2 = IsStringType<number>;

let t1: T1 = ["1", "2", "3"];
let t2: T2 = [1, 2, 3];

// 분산 조건부 타입

type IsNumberType<T> = T extends number ? "yes" : "no";

type T3 = IsNumberType<number | string>;

/*
  T3의 타입은 'yes'로 유추할 수 있지만 T3의 타입은 'no' 이다.
  이것이 분산 조건부 타입이다.
  분산 조건부 타입은 타입을 인스턴스화 중에 자동으로 유니언 타입으로 분산되는데,
  
  예를들어

  T에 대한 타입 인수를 A | B | C 를 사용하여 T extends U ? X : Y 를 인스턴스화하면
  (A extends U ? X | Y) | (B extends U ? X | Y) | (C extends U ? X | Y)로 결정한다.

  한마디로 유니온으로 묶인 타입 하나하나 마다 조건부 타입 검사를 하고 그 결과값들을 묶어 다시 유니온으로 반환한다는 것!
*/
