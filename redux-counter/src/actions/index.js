/*
    action 객체를 만드는 액션 생성 함수들을 선언. (action creators)
    여기에서 () = > ({})은 function() { return {} }과 동일한 의미
*/

import * as types from './ActionTypes';

/*
    카운터를 새로 만들 때, 기본 색상을 받을 수 있도록 
    color가 파라미터로 설정되어 있음.
*/
export const create = (color) => ({
    type:types.CREATE,
    color
})

/* 
    맨 마지막 카운터를 삭제하기 때문에
    따로 index값이 주어지지 않음.
*/
export const remove = () => ({
    type:types.REMOVE
})

/* 
    increment, decrement, setColor는
    어떤 카운터를 수정해야 할지 명시하기 위해
    index값을 파라미터로 받음.

    ex > increment(3)으로 만든 액션은
         index가 3인 카운터 값을 1씩 증가함
*/
export const increment = (index) => ({
    type:types.INCREMENT,
    index
})

export const decrement = (index) => ({
    type:types.DECREMENT,
    index
})

export const setColor = ({index, color}) => ({
    type:types.SET_COLOR,
    index,
    color
})