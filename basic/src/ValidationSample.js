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
    }

    render(){
        return(
            <div>
                <input type='password'
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