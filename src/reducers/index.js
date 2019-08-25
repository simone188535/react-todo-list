import { ADD_TASK } from '../actions/action-types';
import { combineReducers } from 'redux';

export const firstNamedReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                // result: action.payload
                result: action.description
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    firstNamedReducer
});

export default rootReducer;