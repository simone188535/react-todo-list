import { ADD_TASK } from '../actions/action-types';
import { combineReducers } from 'redux';

const initialState = {
    payload: []
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

    return state;
}

const rootReducer = combineReducers({
    todoList: todoListReducer
});

export default rootReducer;