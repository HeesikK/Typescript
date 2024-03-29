/* 
  any 타입

  애플리케이션을 만들 때, 알지 못하는 타입을 표현해야 할 수도 있습니다. 
  이 값들은 사용자로부터 받은 데이터나 서드 파티 라이브러리 같은 동적인 컨텐츠에서 올 수도 있습니다. 
  이 경우 타입 검사를 하지 않고, 그 값들이 컴파일 시간에 검사를 통과하길 원합니다. 이를 위해, any 타입을 사용할 수 있습니다:
*/

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // (o)

/*
  any 타입은 기존에 JavaScript로 작업할 수 있는 강력한 방법으로, 컴파일 중에 점진적으로 타입 검사를 하거나 하지 않을 수 있습니다. 
  혹 다른 언어에서 그렇듯, Object가 비슷한 역할을 할 수 있을 것 같다고 생각할 수도 있습니다. 
  그런데, Object로 선언된 변수들은 오직 어떤 값이든 그 변수에 할당할 수 있게 해주지만 실제로 메서드가 존재하더라도, 임의로 호출할 수는 없습니다:
*/

let notOk: any = 4;
notOk.ifItExists(); // (o) ifItExists 는 런타임엔 존재할 것입니다
notOk.toFixed(); // (o) toFixed는 존재합니다. (하지만 컴파일러는 검사하지 않음)

let prettySure: Object = 4;
prettySure.toFixed(); // (x) 프로퍼티 'toFixed'는 'Object'에 존재하지 않습니다.
