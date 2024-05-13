/*
  Partial

  Partial<T> T의 모든 프로퍼티를 선택적 프로퍼티로 변경한 새로운 타입을 반환합니다

  구현 방법

  type Partial<T> = {
  [P in keyof T]?: T[P];
  };
*/

type Person = { name: string; age: number };

type PartialPerson = Partial<Person>;

const partialPerson: PartialPerson = {
  name: "Levi",
};
