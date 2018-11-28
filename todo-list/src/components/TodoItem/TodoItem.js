import React, { Component } from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class TodoItem extends Component{
    shouldComponentUpdate(nextProps, nextState) {
        /* 
            this.props.done 값과 
            nextProps.done 값이 같지 않을 때
            true 리턴함
        */
        return this.props.done !== nextProps.done;
    }
    render() {

        /*
            비구조화 할당을 이용하여 this.props 안에 있는 
            done, chileren, onToggle, onRemove 레퍼런스 만들어 줌

            장점 :
            1) props를 사용할 때마다 
               this.props.onToggle, this.props.done처럼
               매번 앞부분에 this.props를 붙이는 것 생략 가능

            2) 렌더링 함수 위쪽에서 이 컴포넌트가 어떤 props를 사용하는지 한눈에 볼 수 있음
        */
        const {done, children, onToggle, onRemove} = this.props;

        return (
            /*
                onToggle : 일정 완료 상태를 껐다 켰다 하는 함수
                done : 해당 일정을 완료했는지 하지 않았는지 여부를 가리킴
                children : 일정 정보 내용
                onRemove : 해당 일정을 제거하는 함수
            */
            <div className={cx('todo-item')} onClick={onToggle}>
                <input className={cx('tick')} type="checkbox" checked={done} readOnly />
                {/*
                    조건부 className
                    done 값이 참일 때 해당 요소에 done 클래스 적용
                    text 클래스와 done 클래스가 함께 있으면 중간 선 표시됨
                */}
                <div className={cx('text', {done})}>{children}</div>
                <div className={cx('delete')} onClick={(e) => {onRemove(); e.stopPropagation();}}>[지우기]</div>
            </div>
        )
    }
}

export default TodoItem;