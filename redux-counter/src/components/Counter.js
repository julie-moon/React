import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({number, color, index, onIncrement, onDecrement, onSetColor}) => {
    return (
        <div className="Counter"
             onClick={() => onIncrement(index)}
             /* 
                onContextMenu : 마우스 오른쪽을 눌렀을 때 메뉴가 열리는 이벤트
                                이 함수가 실행될 때 e.preventDefault() 함수를 호출하면
                                메뉴가 열리는 것을 방지
             */
             onContextMenu={(e) => {e.preventDefault(); 
                                    onDecrement(index);}
                           }
             onDoubleClick={() => onSetColor(index)}
             style={{backgroundColor:color}}
        >
            {number}
        </div>
    )
}

Counter.propTypes = {
    index:PropTypes.number,
    number:PropTypes.number,
    color:PropTypes.string,
    onIncrement:PropTypes.func,
    onDecrement:PropTypes.func,
    onSetColor:PropTypes.func
}

Counter.defaultProps = {
    index:0,
    number:0,
    color:'#000',
    onIncrement:() => console.warn('onIncrement is not defind'),
    onDecrement:() => console.warn('onDecrement is not defind'),
    onSetColor:() => console.warn('onSetColor is not defind'),
}

export default Counter;