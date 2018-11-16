import React, { Component } from 'react';

class IterationSample extends Component{
    render() {
        {
            /* 
                map : 자바스크립트 배열 객체의 내장 함수
                      파라미터로 전달된 함수를 사용해서 
                      배열 내 각 요소를 프로세싱한 후
                      그 결과로 새로운 배열 생성

                arr.map(callback, [thisArg])
                1) callback : 새로운 배열의 요소를 생성하는 함수
                              파라미터 3가지
                              - currentValue : 현재 처리하고 있는 요소
                              - index : 현재 처리하고 있는 요소의 index 값
                              - array : 현재 처리하고 있는 원본 배열
                2) thisArg(선택항목) : callback 함수 내부에서 사용할 this 레퍼런스
            */
        }
        const names = ['눈사람', '얼음', '눈', '바람'];
        const nameList = names.map(
            /* 
                key : 컴포넌트 배열을 렌더링했을 때
                      어떤 원소에 변동이 있었는지 알아내려고 사용
            */
            (name, index) => (<li key={index}>{name}</li>)
        );

        return(
            <div>
                <ul>
                    {nameList}
                </ul>
            </div>
        )
    }
}

export default IterationSample;