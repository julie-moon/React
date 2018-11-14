import React, { Component } from 'react';

class EventPractice extends Component{

    state = {
        message:''
    }

    render(){
        return(
            <div>
                <h1>이벤트 연습</h1>
                {/* 
                    이벤트 사용 시 주의할 점
                    1) 이벤트명은 camelCase로 작성 ex> onClick, onKeyUp..
                    2) 함수 형태의 값을 전달
                    3) DOM 요소에만 이벤트 설정 가능
                */}
                <input type='text'
                       name='message'
                       placeholder='아무거나 입력해보세요'
                       value={this.state.message}
                       /* 
                            e 객체 : SyntheticEvent
                                     웹 브라우저의 네이티브 이벤트를 감싸는 객체 
                       */
                       onChange={(e) => 
                            {
                                this.setState({
                                    message:e.target.value
                                })
                            }
                       }
                />
                <button onClick={() => 
                    {
                        alert(this.state.message);
                        this.setState({
                            message:''
                        });
                    }
                }>확인</button>
            </div>
        );
    }
}

export default EventPractice;