import React, { Component } from 'react';
import './App.css';
import LifeCycleSample from './LifeCycleSample';

/* 
    getRandomColor() : state의 color 값을 랜덤 색상으로 설정
    16777215를 hex로 표현하면 ffffff가 되므로 해당 코드는 000000부터 ffffff 값을 반환
*/
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color:'#000000'
  }

  handleClick = () => {
    this.setState({
      color:getRandomColor()
    });
  }

  render() {
    return (
      <div>
        {
          /*
              버튼을 렌더링하고, 
              누를 때마다 handleRandomizeColor 메소드가 호출되게 이벤트를 설정하며,
              불러온 LifeCycleSample 컴포넌트에 color 값을 props로 설정
          */
        }
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}

export default App;
