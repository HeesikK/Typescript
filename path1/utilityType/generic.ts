/*
  generic

  제네릭은 타입을 선언 시점이 아닌 생성 시점에 결정하는 프로그래밍 기법이다.
  이를 통해 함수, 클래스, 등을 다양한 타입에 대해 범용적으로 사용할 수 있게 된다.
*/

// 제네릭의 기본 구조와 호출 방식은 아래와 같음

function getValue<T>(value: T): T {
  return value;
}

getValue<string>("hello");
getValue<number>(10);
getValue<boolean>(true);

// 둘 이상의 타입 변수는 주로 T 다음 알파벳 순서대로 표시

function getValues<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

// 그렇다면 제네릭은 왜 등장한걸까?

// 단순히 매개변수를 그대로 반환하는 함수를 예로 들면

function getStringValue(value: string): string {
  return value;
}

// 다른 타입을 받고 싶다면 함수를 추가로 선언해줘야 함..

function getNumberValue(value: number): number {
  return value;
}

function getBooleanValue(value: boolean): boolean {
  return value;
}

// 그렇다면 any 타입을 사용하면 어떨까?

function getAnyValue(value: any): any {
  return value;
}

/*
  any 타입은 어떤 타입이든 인자로 받을 수 있다는 점에서 제네릭과 비슷함
  그러나 함수의 매개변수와 리턴 값에 대한 타입 정보를 알 수 없음
  또한 any 타입은 타입 검사를 하지 않아 에러가 발생할 위험이 높다.
*/

// 제네릭 인터페이스

interface Foo<T, U> {
  x: T;
  y: U;
}

// 제네릭 함수

interface Bar<T> {
  (text: T): T;
}

interface Let {
  <T>(text: T): T;
}

// 제네릭 화살표 함수

// Error
const func = <T>(arg: T): T => {
  return arg;
}; // <T>를 태그로 인식해 오류 발생

const func = <T extends {}>(arg: T): T => {
  return arg;
}; // 이렇게 사용해야 한다
