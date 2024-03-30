/*
  record

  K를 속성으로, T를 그 속성 값의 타입으로 갖는 새로운 타입을 반환

  T: 타입
  U: 또 다른 타입
  K: 속성(key)
*/

type Record<K extends keyof any, T> = {
  [P in K]: T;
};

// https://seokzin.tistory.com/entry/TypeScript-%EC%9C%A0%ED%8B%B8%EB%A6%AC%ED%8B%B0-%ED%83%80%EC%9E%85-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-Utility-Types
