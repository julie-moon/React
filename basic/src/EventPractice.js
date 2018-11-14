import React, { Component } from 'react';

class EventPractice extends Component{

    state = {
        message:''
    }

    /*  
        임의 메소드 만들기

        1) 기본 방법
        컴포넌트에 임의 메소드를 만들면 기본적으로 this에 접근할 수 없음
        따라서 컴포넌트 생성자 constructor에서 각 메소드를 this와 바인딩 해줘야 함.
        즉, 메소드에서 this를 사용할 수 있도록 메소드에 this를 묶어줌.

        constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        }

        2) 화살표 함수 형태로 메소드 정의
    */
    
    handleChange = (e) => {
        this.setState({
            message: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.message);
        this.setState({
            message:''
        })
    }

    render(){
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input type='text'
                       name='message'
                       placeholder='아무거나 입력해보세요'
                       value={this.state.message}
                       onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;