import React, { Component } from 'react';

class EventPractice extends Component{

    /* 
        input 여러 개 핸들링
        : event 객체를 활용
    */

    state = {
        username:'',
        message:''
    }
    
    handleChange = (e) => {
        this.setState({
            // [] 안에 있는 값을 key 값으로 사용함
            [e.target.name]: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.username + ' : ' + this.state.message);
        this.setState({
            username:'',
            message:''
        })
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }

    render(){
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input type='text' 
                       name='username'
                       placeholder='유저명'
                       value={this.state.username}
                       onChange={this.handleChange}
                />
                <input type='text'
                       name='message'
                       placeholder='아무거나 입력해보세요'
                       value={this.state.message}
                       onChange={this.handleChange}
                       onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;