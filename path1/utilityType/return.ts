/*
  return

  ReturnType<T> 함수 타입 T의 반환 타입을 새로운 타입으로 반환

  구현 방법

  type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
*/
function func(a: string | number, b: boolean) {
  return [a, b];
}

type T = ReturnType<typeof func>; // (string | number | boolean)[]
