/*
  extract

  Extract<T,U> T에서 U와 겹치는 타입을 반환한다.

  구현 방법

  type Partial<T> = {
    [P in keyof T]?: T[P];
  };
*/

type Event = {
  id: string;
  title: string;
};

type Point = {
  target: string;
  amount: number;
};

type PointInfo = Extract<Event | Point, Point>;
// PointInfo 타입과 Point 타입은 동일한 타입이다.
