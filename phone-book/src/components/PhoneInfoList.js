import React, {Component} from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component{
    static defaultProps = {
        data : [],
        onRemove : () => console.warn('onRemove is not defined;'),
        onUpdate : () => console.warn('onUpdate is not defined;')
    }

    /*
        App 컴포넌트 state가 업데이트되면 컴포넌트 리렌더링이 발생
        그리고 그 컴포넌트의 자식 컴포넌트도 함께 리렌더링 됨.

        낭비되는 자원을 아끼기 위해
        shouldComponentUpdate LifeCycle API 사용

        다음에 받아올 data가 현재 data랑 다른 배열일 때 true로 설정
    */
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data !== this.props.data;
    }

    render() {
        // console.log('render PhoneInfoList');

        const { data, onRemove, onUpdate } = this.props;
        const list = data.map(
            info => (<PhoneInfo key={info.id} 
                                info={info} 
                                onRemove={onRemove} 
                                onUpdate={onUpdate}/>
                    )
        )

        return (
            <div>
                {list}
            </div>
        )
    }
}

export default PhoneInfoList;