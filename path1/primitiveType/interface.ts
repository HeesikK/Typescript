/*
  interface

  인터페이스는 일반적으로 타입 체크를 위해 사용되며 변수, 함수, 클래스에 사용할 수 있다. 
  인터페이스는 여러가지 타입을 갖는 프로퍼티로 이루어진 새로운 타입을 정의하는 것과 유사하다.
*/

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

let todo: Todo;
todo = { id: 1, content: "typescript", completed: true };

/*
  인터페이스를 사용하여 함수 파라미터의 타입을 선언할 수 있다.
  이때 해당 함수에는 함수 파라미터의 타입으로 지정한 인터페이스를 준수하는 인수를 전달하여야 한다.
  함수에 객체를 전달할 때 복잡한 매개변수 체크가 필요없어서 매우 유용하다.
*/

interface Todo2 {
  id: number;
  content: string;
  completed: boolean;
}

let todos: Todo2[] = [];

const addTodo = (todo: Todo2) => {
  todos = [...todos, todo];
};

const newTodo: Todo2 = { id: 1, content: "typescript", completed: false };
addTodo(newTodo);

/*
  인터페이스는 함수의 타입으로 사용할 수 있다. 
  이때 함수의 인터페이스에는 타입이 선언된 파라미터 리스트와 리턴 타입을 정의한다.
  함수 인터페이스를 구현하는 함수는 인터페이스를 준수해야 한다.
*/

interface SquareFunc {
  (num: number): number;
}

const squareFunc: SquareFunc = (num: number) => {
  return num * num;
};

/*
  선택적 프로퍼티

  인터페이스의 프로퍼티는 반드시 구현해야 한다. 
  하지만 인터페이스의 프로퍼티가 선택적으로 필요한 경우가 있을 수 있다.
  선택적 프로퍼티는 프로퍼티 뒤에 ?를 붙이며 생략하여도 에러가 발생하지 않는다.
*/

interface UserInfo {
  userName: string;
  password: string;
  age?: number;
  address?: string;
}

const userInfo: UserInfo = {
  userName: "test@test.com",
  password: "123456",
};

/*
  인터페이스 상속

  인터페이스는 extends 키워드를 사용하여 인터페이스 또는 클래스를 상속받을 수 있다.
*/

interface Person {
  name: string;
  age?: number;
}

interface Student extends Person {
  grade: number;
}

let student: Student = {
  name: "Levi",
  grade: 90,
};

// 복수의 인터페이스도 상속 가능하다.

interface Developer extends Person, Student {}

let developer: Developer = {
  name: "Levi",
  grade: 90,
};
