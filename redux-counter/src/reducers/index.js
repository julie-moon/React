import number from './number';
import color from './color';

import { combineReducers } from 'redux';

/* 
    서브 리듀서를 하나로 합침.
    combineReducers를 실행하고 나면, 나중에 store 형태를
    파라미터로 전달한 객체 모형대로 만듦.

    지금은 다음과 같이 만듦.
    {
        numberData:{
            number:0
        },
        colorData:{
            color:'#000'
        }
    }
*/

const reducers = combineReducers({
    numberData: number,
    colorData : color
})

export default reducers;