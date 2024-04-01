/*
  pick

  Pick<T,K> T에서 K의 집합으로 이루어진 새로운 타입을 반환

  구현 방법

  type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
  };
 */

type keys = "name" | "age";

type User = {
  name: string;
  age: number;
  email: string;
};

type PickUser = Pick<User, keys>;

const pickUser: PickUser = {
  name: "Levi",
  age: 26,
};
