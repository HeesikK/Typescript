/*
  TypeScript는 JavaScript처럼 값들을 배열로 다룰 수 있게 해줍니다. 
  배열 타입은 두 가지 방법으로 쓸 수 있습니다. 
*/

//  첫 번째 방법은, 배열 요소들을 나타내는 타입 뒤에 []를 쓰는 것입니다:

let arr1: (number | string)[] = [1, 2, 3, "안녕하세요"];

// 두 번째 방법은 제네릭 배열 타입을 쓰는 것입니다. Array<elemType>:

let arr2: Array<number | string> = [1, 2, 3, "안녕하세요"];
