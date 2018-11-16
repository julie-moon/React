import React, { Component } from 'react';

class IterationSample extends Component{

    /* 유동적인 데이터 렌더링 */
    state = {
        names : ['눈사람', '얼음', '눈', '바람'],
        name : ''
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleInsert = () => {
        // names 배열에 값을 추가하고, name 값을 초기화
        this.setState({
            /*
                concat : 기존 배열을 직접 수정하지 않고,
                         기존 배열과 새 값을 합친 새 배열을 생성
            */
            names: this.state.names.concat(this.state.name),
            name:''
        })
    }

    handleRemove = (index) => {
        // 편의상 name의 레퍼런스 미리 만듦(비구조화 할당 사용)
        const {names} = this.state;
        this.setState({
            names:[
                /* 
                    ... : 전개 연산자 
                          ... 뒤에 위치한 배열 값을 그대로 꺼내서 현재 배열에 복사
                    slice : 배열 내장 함수
                            handleRemove는 slice를 사용하여 
                            배열의 0부터 주어진 index 전까지 원소들을 가진 새 배열 만듦
                            또 index + 1부터 마지막까지 원소들을 가진 새 배열을 만든 후,
                            전개 연산자를 사용하여 배열 하나로 합쳐줌.
                */
                ...names.slice(0, index),
                ...names.slice(index+1, names.length)
            ]
        })
    }

    render() {
        const nameList = this.state.names.map(
            (name, index) => (<li key={index} 
                                  onDoubleClick={() => this.handleRemove(index)}
                              >{name}</li>)
        );

        return(
            <div>
                <input type='text'
                       onChange={this.handleChange}
                       value={this.state.name}
                />
                <button onClick={this.handleInsert}>추가</button>
                <ul>
                    {nameList}
                </ul>
            </div>
        )
    }
}

export default IterationSample;