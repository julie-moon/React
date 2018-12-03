import * as types from '../actions/ActionTypes';

const initialState = {
    counters: [
        {
            color:'#000',
            number:0
        }
    ]
}

function counter(state = initialState, action) {
    const { counters } = state;

    switch(action.type) {
        case types.CREATE:
            return {
                /* 
                    배열 업데이트 방법은 
                    setState로 컴포넌트의 state 안에 있는 배열을 다룰 때와 동일함.
                    기존 배열을 바꾸지 않고
                    전개 연산자(...)를 사용하거나 
                    slice 함수를 배열로 잘라서 새로 생성해야함.
                */
                counters:[
                    ...counters, 
                    {
                        color:action.color,
                        number:0
                    }
                ]
            }
        case types.REMOVE: 
            return {
                counters: counters.slice(0, counters.length - 1)
            }

        case types.INCREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index), // 선택한 인덱스의 전 아이템들
                    {
                        ...counters[action.index], // 기존 객체에
                        number:counters[action.index].number + 1 // 새 number값 덮어쓰기
                    },
                    ...counters.slice(action.index + 1, counters.length) // 선택한 인덱스의 다음 아이템들 
                ]
            }
        case types.DECREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number:counters[action.index].number - 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            }
        case types.SET_COLOR:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        color:action.color
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            }
        default: return state;
    }
}

export default counter;