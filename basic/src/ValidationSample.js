import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {

    state = {
        password:'',
        clicked:false,
        validated:false
    }

    handleChange = (e) => {
        this.setState({
            password:e.target.value
        })
    }

    handleButtonClick = () => {
        this.setState({
            clicked:true,
            validated:this.state.password === '0000'
        })
        this.input.focus();
    }

    render(){
        return(
            <div>
                <input type='password'
                       /* 
                          ref를 사용해야 하는 상황
                          : state만으로 해결할 수 없는 기능을 구현할 때

                          1) 특정 input에 포커스 주기
                          2) 스크롤 박스 조작하기
                          3) canvas 요소에 그림 그리기 등

                          사용법 
                          <input ref={(ref) => {this.input=ref}} />
                                       ref 값으로는 콜백 함수를 전달
                                       콜백 함수는 ref를 파라미터로 가지며, 
                                       콜백 함수 내부에서 컴포넌트의 멤버 변수에 ref를 담는 코드 작성

                                       this.input은 input 요소의 DOM을 가리킴.
                       */
                       ref={(ref) => this.input=ref}
                       value={this.state.password}
                       /*
                          onChange 이벤트 발생 시 
                          -> handleChange 호출
                          -> state의 password 값 업데이트
                       */
                       onChange={this.handleChange}
                       /* 
                          버튼을 누르기 전에는 비어있는 문자열을 전달
                                 누른 후에는 검증 결과에 따라 success 혹은 failure 값 설정
                                 값에 따라 input 색상이 skyblue or pink로 나타남
                       */
                       className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />
                {/* 
                    onClick 이벤트 발생 시
                    -> handleButtonClick 호출
                    -> clicked 값을 참으로 설정, 
                       validated 값을 검증 결과로 설정
                */}
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }

}

export default ValidationSample;