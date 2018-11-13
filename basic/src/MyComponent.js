import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component{
    /*
        props 기본값 설정 방법 
        2) static default Props
    */
    static defaultProps = {
        name: '기본 이름'
    }

    /*
        2) static propTypes
    */
    static propTypes = {
        name: PropTypes.string, // name props 타입을 문자열로 설정
        age: PropTypes.number.isRequired // 필수적으로 존재해야하며, 숫자여야 함
    }

    render() {
        return(
            <div>
                {/*
                    props를 렌더링할 때는 JSX 내부에서 { } 안에 감싸주면 됨
                    props에 접근할 때는 this 키워드를 사용하여 접근함  
                */}
                <h1>안녕하세요. 제 이름은 {this.props.name}입니다.</h1>
                <h2>저는 {this.props.age}살 입니다.</h2>
            </div>
        );
    }
}

/* 
    props 기본값 설정 방법
    1) defaultProps

    MyComponent.defaultProps = {
        name: '기본 이름'
    }
*/

/*
    propTypes 
    컴포넌트의 필수 props를 지정하거나 
    props 타입을 지정할 때

    설정 방법
    0) PropTypes 모듈 import
    1) 클래스 밖에서 설정

MyComponent.propTypes = {
    name:PropTypes.string // name props 타입을 문자열로 설정
}
*/

export default MyComponent;