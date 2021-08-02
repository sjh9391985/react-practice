## ex04: Component - React Event

### 01. 기본개념
1. state
    - 컴포넌트 내부의 현재 상태를 나타내는 쓰기 가능한 데이터
    - 컴포넌트는 this.state 안에 여러 데이터를 가질 수 있다. (class component)
    - this.state은 특정 컴포넌트 전용이며 변경을 위해서는 setState() 함수를 사용한다. (class component)
    - 상태가 업데이트 되면 component의 반응형(Reactive) Rendering 이 트리거가 되고 컴포넌트와 자식 컴포넌트가 다시 렌더링 된다.
        + component 내부의 state은 최소한으로 유지하는 것이 좋다.
        + component 내부의 state을 외부에 정확하게 나타내고 인터페이스의 동기화를 위해서 다시 렌더링한다.
    - component가 동작(event)과 상호작용을 수행할 수 있는 매커니즘을 제공한다.
    - 상태의 변경은 UI를 다시 rendering 하게 한다.
    - 클래스 컴포넌트에서는 constructor에서 default 값 세팅으로 생성.
    - 함수 컴포넌트에서는 useState라는 후크 함수를 사용해서 초기화 한다. 
    - 대체적으로 사용자 이벤트로 변경되거나 통신으로 변경된다.
2. src/01 예제 

### 02. 제어 컴포넌트
1. <input>, <textarea>, <option>과 같은 폼 컴포넌트 중에 사용자 입력에 따라 state값이 변경되고 rendering 하는 컴포넌트를 제어(Controlled) 컴포넌트라고 한다.
2. form component가 반드시 제어 component로 작성해야 하는 것은 아니다. 상태를 제어하지 않는 비제어(Uncontrolled) 컴포넌트로 만들 수 있다.(Anti-Pattern)
3. form component를 제어 컴포넌트로 만드는 것은 조금 복잡해 보이지만 다음과 같은 장점이 있다.
    * 장점
    - component의 interface를 외부에서 직접 변경할 수 없고 내부의 상태 변경으로 가능한 리액트의 컴포넌트 작성 원칙을 준수할 수 있다.
    - 사용자 입력 값에 대한 Validation을 할 수 있다.
4. 예제
    - src/02 제어 컴포넌트
    - src/03 비제어 컴포넌트

### 03. 상태(Stateful) 컴포넌트 VS 순수(Pure, Dumb) 컴포넌트 
### 04. Data Flow(Bottom -> Up)

### Run Examples
```bash
$ npm run debug src={no}
```