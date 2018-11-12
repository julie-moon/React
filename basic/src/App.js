import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const text = 'Hello React-!'
    const condition = true;
    /*
        DOM 요소에 스타일을 적용할 때는 문자열 형태로 적용할 수 없음
        CSS 스타일을 자바스크립트 객체 형식을 만들어 적용(camelCase)
    */
    const style = {
        backgroundColor:'pink',
        border:'1px solid #424242',
        width:Math.round(Math.random()*300)+50,
        height:Math.round(Math.random()*300)+50,
        WebkitTransition:'all',
        MozTransition:'all',
        msTransition:'all'
    }

    return (
      <div className='my-div'>
        <h1>리액트 기초 시작</h1>
        {
          /* 
            JSX 내에서 자바스크립트 표현식을 사용할 수 있음
            사용법 : JSX 내부에서 코드를 { }로 감싸기
          */
        }
        <h2>{text}</h2>
        {
          /*
            JSX 내부의 자바스크립트 표현식에서 if문 사용 불가능
            조건에 따라 다른 것을 렌더링 해야할 때는 
            1) JSX 밖에서 if문을 사용하거나
            2) { } 안에 삼항 연산자 사용
          */
        }
        {condition ? '참' : '거짓'} <br />
        {
          /*
            특정 조건을 만족할 때는 보여주고, 
            만족하지 않을 때는 보여주고 싶지 않을 때 
            1) null 사용 {condition ? '보여주세요' : null}
            2) && 사용한 조건부 렌더링
          */
        }
        {condition && '보여주세요'}
        <div style={style}></div>
      </div>
    );
  }
}

export default App;
