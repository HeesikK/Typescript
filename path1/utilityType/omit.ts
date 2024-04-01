/*
  omit

  Omit<T,K> 에서 T에서 K의 집합을 제외한 새로운 타입을 반환

  구현 방법

  type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
*/

type Keys = "name" | "email";

type User = {
  name: string;
  age: number;
  email: string;
};

type OmitUser = Omit<User, Keys>;

const omitUser: OmitUser = {
  age: 26,
};
