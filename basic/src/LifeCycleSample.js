import React, {Component} from 'react';

class LifeCycleSample extends Component{
    state = {
        number:0,
        color:null
    }

    myRef = null; // ref 설정할 부분

    /*
        constructor : 컴포넌트의 생성자 메소드
                      컴포넌트를 만들 때 처음으로 실행. 
                      초기 state 정할 수 있음 
    */
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    /* 
        getDerivedStateFromProps() : props로 받아 온 값을 state에 동기화시키는 용도로 사용
                                     컴포넌트를 마운트하거나 props를 변경할 때 호출
    */
    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.color !== prevState.color){ // 조건에 따라 특정 값 동기화
            return {color:nextProps.color}; 
        }
        return null; // state를 변경할 필요가 없다면 null 반환
    }

    /*
        componentDidMount() : 컴포넌트를 만들고, 첫 렌더링을 다 마친 후 실행
                              다른 자바스크립트 라이브러리 또는 프레임워크 함수 호출,
                              이벤트 등록, setTimeOut, setInterval, 네트워크 요청 같은 
                              비동기 작업 처리하면 됨
    */
    componentDidMount() {
        console.log('componentDidMount');
    }

    /* 
        shouldComponentUpdate() : props 또는 state 변경 시, 리렌더링을 시작할지 여부를 지정하는 메소드.
                                  반드시 true 또는 false 값을 반환해야 함
                                  (따로 생성하지 않으면 기본적으로 true 값 반환)
                                  false값을 반환한다면 업데이트 과정은 여기서 중지됨.
    */
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        return nextState.number % 10 !== 4; // 숫자의 마지막 자리가 4일 때 리렌더링 X
    }

    /* 
        componentWillUnmount() : 컴포넌트를 DOM에서 제거할 때 실행함.
                                 componentDidMount에서 등록한 이벤트, 타이머, 
                                 직접 생성한 DOM이 있다면 여기에서 제거해야함
    */
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        this.setState({
            number:this.state.number + 1
        });
    }

    /* 
        getSnapshotBeforeUpdate() 
        : render 메소드 호출 후 DOM에 변화를 반영하기 바로 직전에 호출
          반환하는 값은 componentDidUpdate에서 세 번째 파라미터인 snapshot 값으로 전달받을 수 있음.
    */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    /* 
        componentDidUpdate() : 리렌더링 완료 후 실행
                               업데이트가 끝난 직후이므로, DOM 관련 처리를 해도 무방함.
                               prevProps 또는 prevState를 사용하여
                               컴포넌트가 이전에 가졌던 데이터에 접근할 수 있음.
                               getSnapshotBeforeUpdate에서 반환할 값이 있다면,
                               여기에서 snapshot 값을 전달받을 수 있음.
    */
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if(snapshot) {
            console.log('업데이트 되기 직전 색상 : ', snapshot);
        }
    }

    /* 
        render() : 컴포넌트 모양새 정의. 
                   라이프사이클 메소드 중 유일한 필수 메소드.

                   이 메소드 내에서 
                   this.props, this.state에 접근 가능, 리액트 요소 반환
                   이 메소드 내에서 state 변형, 웹 브라우저 접근 안됨!
                   (DOM에서 정보를 가져오거나 변화를 줄 때는 componentDidMount에서 처리해야함.)
    */
    render() {
        console.log('render');

        const style = {
            color:this.props.color
        };

        return(
            <div>
                <h1 style={style} ref={ref => this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color:{this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        )
    }
}

export default LifeCycleSample;