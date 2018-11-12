import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      /* 
        Virtual DOM에서 컴포넌트 변화를 감지할 때 
        효율적으로 비교할 수 있도록
        컴포넌트 내부는 하나의 DOM 트리 구조여야 함.
      */
      <div className="App">
        <h1>리액트 기초 시작</h1>
        <h2>Hello React-!</h2>
      </div>
    );
  }
}

export default App;
