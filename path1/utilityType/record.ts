/*
  record

  K를 속성으로, T를 그 속성 값의 타입으로 갖는 새로운 타입을 반환

  T: 타입
  U: 또 다른 타입
  K: 속성(key)

  구현 방법

  type Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  제네릭의 extends는 부분집합으로 바라보면 해석이 편리합니다.

  K는 keyof any의 부분집합 형태입니다.
*/

type ScoreRecord = Record<"Levi" | "Elvin", number>;

let score: ScoreRecord = {
  Levi: 100,
  Elvin: 200,
};

// https://seokzin.tistory.com/entry/TypeScript-%EC%9C%A0%ED%8B%B8%EB%A6%AC%ED%8B%B0-%ED%83%80%EC%9E%85-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-Utility-Types
