import { ADD_TASK, DELETE_TASK, EDIT_TASK } from '../actions/action-types';
import { combineReducers } from 'redux';

const initialState = {
    filtering: [],
    payload: [],
    modalToggle: false
}

export const todoListReducer = (state = initialState, action) => {

    if (action.type === ADD_TASK) {
        return Object.assign({}, state, {
            payload: state.payload.concat({
                id: action.id,
                description: action.payload
            })
        });

    }
    if (action.type === DELETE_TASK) {

        let val = state.payload.filter(item => {
            return item.id !== action.removePayload;
        });
        return { ...state, payload: val }
    }


    if (action.type === EDIT_TASK) {

        let selectedVal = state.payload.filter((item) => {
            return item.id === action.editPayload;

        });

        let indexedSelectedVal = selectedVal[0];
        return {...state, filtering: indexedSelectedVal};

    }

    return state;
}

const rootReducer = combineReducers({
    todoList: todoListReducer
});

export default rootReducer;