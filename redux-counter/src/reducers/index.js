import * as types from '../actions/ActionTypes';

/* 
    리듀서 : action type에 따라 변화를 일으키는 함수. 
             리듀서를 작성할 때는 최초 변화를 일으키기 전
             가지고 있어야 할 초기 상태를 정의해야 함
*/

// 초기 상태 정의
const initialState = {
    color:'#000',
    number:0
}

/*
    리듀서 함수 정의 
    - 리듀서는 state와 action을 파라미터로 받음
    - 스토어가 생성될 당시 state가 undefined일 때,
      state의 기본값을 initialState로 사용
    - action.type에 따라 다른 작업을 하고, 새 state를 만들어서 반환함
      이때 주의할 점은 state를 직접 수정하면 안 되고,
      기존 state 값을 덮어쓴 새로운 객체를 만들어서 반환해야 함

*/
function counter(state = initialState, action) {
    switch (action.type) {
        case types.INCREMENT: 
            return {
                ...state,
                number:state.number + 1
            };
        case types.DECREMENT:
            return {
                ...state,
                number:state.number - 1
            };
        default:
            return state;
    }
}

export default counter;