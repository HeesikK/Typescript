/*
  type alias

  타입 앨리어스도 인터페이스와 마찬가지로 타입으로 사용할 수 있다.
*/

type Person = {
  name: string;
  age?: number;
};

const person = {} as Person;
person.name = "Levi";
person.age = 20;

// 타입 앨리어스는 원시값, 유니온 타입, 튜플 등도 타입으로 지정할 수 있다.

// 문자열 리터럴로 타입 지정
type Str = "Lee";

// 유니온 타입으로 타입 지정
type Union = string | null;

// 문자열 유니온 타입으로 타입 지정
type Name = "Lee" | "Kim";

// 숫자 리터럴 유니온 타입으로 타입 지정
type Num = 1 | 2 | 3 | 4 | 5;

// 객체 리터럴 유니온 타입으로 타입 지정
type Obj = { a: 1 } | { b: 2 };

// 함수 유니온 타입으로 타입 지정
type Func = (() => string) | (() => void);

// 인터페이스 유니온 타입으로 타입 지정
type Shape = Square | Rectangle | Circle;

// 튜플로 타입 지정
type Tuple = [string, boolean];
const t: Tuple = ["", ""]; // Error
