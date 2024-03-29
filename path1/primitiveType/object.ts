/*
  object 타입

  object는 원시 타입이 아닌 타입을 나타냅니다. 
  예를 들어, number, string, boolean, bigint, symbol, null, 또는 undefined 가 아닌 나머지를 의미합니다.
  object 타입을 쓰면, Object.create 같은 API 가 더 잘 나타납니다. 예를 들어:
*/

const create = (o: object | null): void => {};

create({ prop: 0 }); // 성공
create(null); // 성공

create(42); // 오류
create("string"); // 오류
create(false); // 오류
create(undefined); // 오류
