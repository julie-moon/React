import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      /* 
        Virtual DOM에서 컴포넌트 변화를 감지할 때 
        효율적으로 비교할 수 있도록
        컴포넌트 내부는 하나의 DOM 트리 구조여야 함.

        div로 감싸지 않고 여러 요소를 렌더링하고 싶을 때,
        Component와 함께 Fragment를 import 해서 사용해도 됨.
        (불필요한 div 렌더링 생략 가능)
      */
      <Fragment>
        <h1>리액트 기초 시작</h1>
        <h2>Hello React-!</h2>
      </Fragment>
    );
  }
}

export default App;
