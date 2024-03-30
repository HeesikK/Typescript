/*
  enum 타입

  특정 값(상수)들의 집합
  타입 스크립트의 튜플 타입이 특정 타입이나 값을 고정하는 배열이라면, 
  Enum 타입은 특정 값을 고정하는 또다른 독립된 자료형이라고 보면된다.
*/

enum Color {
  Red,
  Green,
  Blue,
}

let c: Color;
c = Color.Red;
c = Color.Blue;
c = "hello"; // enum 타입 변수에는 반드시 설정된 enum 값 (Red, Green, Blue)만 올 수 있음

let d: Color.Red; // enum 값을 타입 자체로도 사용 가능!

/* 
  기본적으로 enum은 0부터 시작해서 멤버들의 번호를 매긴다는 특징을 가지고 있음(마치 배열의 인덱스 같은)
  but enum의 멤버 번호들은 반드시 0부터 시작할 필요 x
  아래와 같이 수동으로 값을 명시할 수 있으며, 값을 변경한 부분부터 다시 1씩 증가하게 매겨진다.
*/
enum Week {
  Sun = 0,
  Mon = 11,
  Tue = 12,
  Wed = 13,
  Thu = 14,
  Fri = 15,
  Sat = 16,
}

console.log(Week.Mon); // 11

// 추가로 enum은 꼭 숫자 번호 뿐만 아니라 문자열 값으로 초기화 가능

enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue",
}

console.log(Color.Red); // red
console.log(Color["Green"]); // green
