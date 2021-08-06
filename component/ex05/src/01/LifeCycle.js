import React, {Component} from "react"

export default class LifeCycle extends Component {

    constructor() {
        super(...arguments)
        this.h4Ref = null;
        this.state = {  //컴포넌트에 지역 state가 필요하다면 생성자 내에서 this.state에 초기 state 값을 할당하면 됩니다.
            color: null
        }
        console.log(`[MOUNT01]: constructor`);
    }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log(`[MOUNT02][UPDATE02]: getDerivedStateFromProps(${nextProps.color}, ${prevState.color})`);

        return nextProps.color !== prevState.color ? {color: nextProps.color} : null; 
    }

    /*
        shouldComponentUpdate: state이 변경 되었을 때, 렌더링 여부를 결정한다.
        현재 데이터: this.props, this.state
        변경될 데이터: nextProps, nextState
        로 접근이 가능하다.

        컴포넌트 성능 최적화(튜닝)에 사용할 수 있다.
    */
    shouldComponentUpdate(nextProps, nextState){
        console.log(`[UPDATE02]: shouldComponentUpdate(${nextProps.color}, ${nextState.color})`);

        return true;
    }

    render() {
        console.log(`[MOUNT03][UPDATE03]: render`);
        return (
            <h3
                style={{
                    width: 300,
                    height: 50,
                    backgroundColor: this.state.color
                }}
                ref={ ref => this.h4Ref = ref }
                />
        );
    }

    /* 
        render 메소드 호출 직 후 , DOM에 변화를 반영하기 직전에 호출한다.[v16.3]
        반환 값은 다음 메소드 componentDidUpdate()의 세번째 파라미터(snapshot)로 전달.
        변경 전의 props, state 접근이 가능하다.
        주로 업데이트 직전의 값을 참고해서 할 일이 있을 때 오버라이딩 한다.
    */
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(`[UPDATE04]: getSnapshotBeforeUpdate(${prevProps.color},${prevState.color})`);
        return prevProps.color !== this.state.color ? this.h4Ref.style.backgroundColor: null;
    }

    /*
        DOM 업데이트가 끝난 직 후, DOM 작업이 가능하다.
        변경 전의 props, state 접근이 가능하다.
        사용자가 변화된  UI를 확인하는 과정.
    */
    componentDidUpdate(prevProps, prevState, snapshot) {
        function rgb2hex(snapshot){
            snapshot = snapshot.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
            return (snapshot && snapshot.length === 4) ? "#" +
             ("0" + parseInt(snapshot[1],10).toString(16)).slice(-2) +
             ("0" + parseInt(snapshot[2],10).toString(16)).slice(-2) +
             ("0" + parseInt(snapshot[3],10).toString(16)).slice(-2) : '';
           }
        console.log(`[UPDATE05]: componentDidUpdate(${prevProps.color},${prevState.color},${rgb2hex(snapshot)})`);
        
    }

    /*
        컴포넌트 생성을 마치고 첫 렌더링 작업이 끝난 후!
        다른 자바스크립트 라이브러리 또는 프레임워크 함수 호출 또는
        1. 이벤트 등록
        2. 타이머 설정
        3. 네트워크 통신
        등을 할 수 있다.
     */
    componentDidMount(){       
         console.log(`[MOUNT04]: componentDidMount()`);
    }


    /*
        컴포넌트를 DOM에서 제거 할 때
        componentDidMount 에서 등록한 이벤트, 타이머, 직접 생성한 DOM 엘리먼트 등을 제거(clean-up)
        작업을 한다.
    */
    componentWillUnmount(){

    }

}