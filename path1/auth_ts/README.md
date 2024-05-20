1. ReactElement
   ReactElement는 ReactNode에 포함되어 있기도 합니다. 우선 d.ts에서 살펴봅시다.

interface ReactElement<
P = any,
T extends string | JSXElementConstructor<any> =
| string
| JSXElementConstructor<any>

> {
> type: T
> props: P
> key: Key | null
> }
> ReactElement 는 createElement 함수를 통해 생성된 객체의 타입입니다. 즉, 위에서 알아보았던 ReactNode과 달리 원시타입을 포함하지 않고 완성된 jsx 요소만을 허용합니다.

⭐️ ReactElement는 원시타입을 포함하지 않고 완성된 `jsx` 요소만을 허용한다.
따라서 jsx 요소를 리턴하는 children에 대해서는 ReactElement을 타입으로 지정해 주어도 전혀 문제가 없습니다.

import { ReactElement } from 'react'

interface Props {
children: ReactElement
}

const Component: FC<Props> = ({ children }) => {
return <div>{children}</div>
} 2. PropsWithChildren
PropsWithChildren 타입을 사용하게 되면 반복적으로 children 타입을 설정해줘야하는 번거로움이 사라질 수 있습니다.

import { PropsWithChildren } from 'react'

interface Props {
name: string
}

export const Foo: FC<PropsWithChildren<Props>> = ({ name, children }) => {
return (
<>
<div>{name}</div>
<div>{children}</div>
</>
)
}
이전에는 Props에 children: ReactNode 혹은 children: ReactElement 하고 적어주었었습니다.

반면, 위 코드에서는 Props에서 children을 명시하지 않고 바로 children을 사용해 주었습니다.

d.ts에서 살펴봅시다.

type PropsWithChildren<P = unknown> = P & { children?: ReactNode | undefined }
PropsWithChildren의 children 타입이 옵셔널인 것을 확인할 수 있습니다.

🤔 FC에서 children이 암시적으로 존재해서 문제가 있었다면서요.
👩🏻‍💻 맞아요.
그래서 PropsWithChildren도 children을 넘겨주지 않아도
에러가 발생하지 않기 때문에 의도하지 않은 동작을 할 수 있어요.

따라서, children을 반드시 받아야 하는 경우에는
PropsWithChildren을 사용하지 않는 게 좋아요.
🤔 그럼 그냥 ReactNode나 ReactElement를 사용하면 되나요?
👩🏻‍💻 네, 그래도 돼요.
일반적인 경우에는 ReactNode를 사용하는 것 같아요.
Props에 { children: ReactNode }로 명시해주면
사용하는 쪽에서 "children이 없으면 필수라고 에러"로 알려줘요. 3. RefObject
React에서 특정 DOM을 선택해야할 땐 이 기능을 대체할 수 있는 useRef 훅을 제공합니다.

useRef를 사용하다보면 인자로 어떨 때 null을 넣어야할지? 비어둘지? 고민을 하게 되었었는데요. 이와 관련이 되어 있습니다!

⭐️ useRef에는 3가지 오버로딩이 존재

1. 인자: [초기값] => 리턴: MutableRefObject<T>;

2. 인자: [초기값 | null] => 리턴: RefObject<T>;

3. 인자: [] => 리턴: MutableRefObject<T | undefined>;
   위를 보게 되면 총 2개의 타입이 존재합니다. MutableRefObject과 RefObject입니다.

✔️ useRef는 .current 프로퍼티에 변경 가능한 값을 담고 있는 “상자” 📦
인수를 .current에 저장하게 된다.

아래 두 개의 리턴타입은 .current 프로퍼티를 직접 수정 가능 여부에 따라 구분

✔️ MutableRefObject<T>
직접 수정 가능 ⭕️

✔️ MutableRefObject<T | undefined>
직접 수정 불가능 ❌, 다만 undefined이 아님이 체크되면 가능 ⭕️

✔️ RefObject<T>
직접 수정 불가능 ❌
즉, 특정 초기값 혹은 비어두게 되면 current를 직접 수정 가능하며, null을 부여할 경우 current를 직접 수정 불가능하게 됩니다. 쉽게 말해 null로 부여할 경우 아래와 같은 경우에 에러가 발생하는 것이죠.

const ref = React.useRef<number>(null)

ref.current += 1
//~~~~~~~~~~~~~~ 읽기 전용 속성이므로 'current'에 할당할 수 없습니다.
🤔 그래서 결론적으로 어떤 상황에 어떤 걸 사용해야 하나요?
👩🏻‍💻 DOM 요소를 참조하고 싶은 경우에는 null을 입력해주면 돼요.
DOM 요소에 ref를 연결하고 싶다면 readonly인 RefObject만을 할당할 수 있어요.

만약 DOM 요소에 MutableRefObject한 ref를 할당해주려면 아래와 같이 에러가 발생해요.
image

4. SetStateAction
   Props로 상태를 업데이트하는 함수, 예를 들어 setData를 넘겨야 할 때도 있습니다. 이때 타입을 어떻게 주어야 할까요?

저는 평소에 아래와 같이 해주었었습니다.

interface Props {
setData: (data: string) => void
}
사실 위와 같이 타입을 선언해 주어도 문제를 없지만 일반 함수와 구별이 되지 않으며 state함수임을 이름을 통해서만 유추해야 합니다.

⭐️ React에서는 state함수를 명시적으로 나타낼 수 있는 적절한 타입을 제공하고 있다

→ SetStateAction !!
이떄 사용할 수 있는 타입이 바로 SetStateAction입니다. SetStateAction은 React의 useState 또는 useReducer 훅에서 상태 값을 업데이트하기 위해 사용되는 타입입니다. 이 타입은 새로운 상태 값을 계산하는 함수를 나타내며, 이 함수는 현재 상태 값을 인자로 받아 새로운 상태 값을 반환합니다.

사용 방법은 아래와 같습니다.

interface Props {
setData: Dispatch<SetStateAction<string>>
}
d.ts에서 SetStateAction는 다음과 같습니다.

type SetStateAction<S> = S | ((prevState: S) => S)
제네릭에 타입을 넘겨주면 state함수의 형태에 알맞게 타입을 지정해줍니다. 그런데 여기서 드는 생각이 있습니다.

🤔 그럼 SetStateAction만 써도 될 거 같은데, 겉에 왜 Dispatch가 필요한가요?
👩🏻‍💻 그럼 한번 없애보고 뭐가 문제가 되는지 알아볼까요?

interface Props {
setData: SetStateAction<string>
}

이렇게 한번 해봅시다. 그럼 아래와 같이 에러가 발생해요.
image
🤔 호출 시그니처부터 모르겠는데요..
👩🏻‍💻 호출 시그니처는 타입스크립트에서 함수의 타입을 지정할 때 사용하는 문법이에요.
함수에 함수를 인수로 전달하거나,
함수를 반환하는 경우 이 문법을 통해 인수나 반환 함수의 타입을 지정할 수 있어요.

SetStateAction을 다시 살펴보면 (prev: S) => S 라고 되어있어요.
사실 이는 우리가 setState(여기에) 넣는 것이고
정확하게는 아무것도 리턴하지 않아요. 아래 제가 테스트해 본 결과를 같이 봅시다.
const handleInputValue = () => {
const test = setData('hello')
console.log(`test: ${test}`) // test: undefined
}
image

👩🏻‍💻 위처럼 undefined 즉, 아무 것도 리턴하지 않고 있는 것도 확인해보았고,
setData에 마우스를 가져가서 확인해도 리턴타입이 void예요.

결론적으로, SetStateAction는 본인을 인자로 하여 void를 리턴하도록 해줄 수 있는
호출 시그니처라는 자기를 감싸주는 그런 것이 필요했던 거죠. 5. Dispatch
위에서 Dispatch의 필요성에 대해 조금 알아보았습니다.

⭐️ Dispatch는 React에서 상태를 업데이트하는 함수의 호출 시그니처
d.ts에서 직접 확인해봅시다.

type Dispatch<A> = (value: A) => void
위에서 알아보았던 대로, 리턴타입을 void로 해주는 호출 시그니처의 모습이 맞았습니다.
