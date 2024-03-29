/*
  string 타입

  웹 페이지, 서버 같은 프로그램을 JavaScript로 만들 때 기본적으로 텍스트 데이터를 다루는 작업이 필요합니다. 
  다른 언어들처럼, TypeScript에서는 텍스트 데이터 타입을 string으로 표현합니다. 
  JavaScript처럼 TypeScript도 큰따옴표 (")나 작은따옴표 (')를 문자열 데이터를 감싸는데 사용합니다.

  또한 템플릿 문자열 을 사용하면 여러 줄에 걸쳐 문자열을 작성할 수 있으며, 표현식을 포함시킬 수도 있습니다. 
  이 문자열은 백틱/백쿼트 (` ) 문자로 감싸지며, ${ expr }과 같은 형태로 표현식을 포함시킬 수 있습니다.
*/

let color: string = "blue";
color = "red";

let fullName: string = `Levi`;
let age: number = 26;
let sentence: string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next year.`;
let _sentence: string = "Hello, my name is" + fullName + ".\n\n" + "I'll be" + (age + 1) + "years old next year.";
