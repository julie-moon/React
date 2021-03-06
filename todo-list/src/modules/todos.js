import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

// 액션 타입 정의
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// 액션 생성 함수 만들기
export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

// 초기 상태 정의하기
const initialState = List([
    Map({
        id:0,
        text:'리액트 공부하기',
        done:true
    }), 
    Map({
        id:1,
        text:'컴포넌트 스타일링 해보기',
        done:false
    })
])

// 리듀서 정의하기
export default handleActions({
    [INSERT] : (state, action) => {
        /* 
            payload 안에 있는 id, text, done의 레퍼런스를 만들어 줌
            레퍼런스를 만들지 않고 바로 push(Map(action.payload))를 해도 되지만,
            나중에 이 코드를 봤을 때,
            이 액션이 어떤 데이터를 처리하는지 쉽게 볼 수 있도록 함
        */
        const { id, text, done } = action.payload;

        return state.push(Map({
            id, text, done
        }))
    },
    [TOGGLE] : (state, action) => {
        const { payload:index } = action;
        /* 
            = const index = action.payload
            비구조화 할당으로 index 레퍼런스에 action.payload 값을 넣음
            
            나중에 이 코드를 봤을 때,
            여기에서 payload가 어떤 값을 의미하는지 쉽게 이해할 수 있음

            updateIn으로 현재 값을 참조하여 반대 값으로 설정

            updateIn을 사용하지 않는다면
            다음과 같이 작성할 수도 있음
            return state.setIn([index, 'done'], !state.getIn([index, 'done']))
        */
        return state.updateIn([index, 'done'], done => !done);
    },
    [REMOVE] : (state, action) => {
        const { payload:index } = action;
        return state.delete(index);
    }
}, initialState)