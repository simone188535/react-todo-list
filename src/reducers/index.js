import { ADD_TASK, DELETE_TASK, EDIT_TASK, MODAL_TOGGLE } from '../actions/action-types';
import { combineReducers } from 'redux';

const initialState = {
    payload: [],
    filtering: [],
    id:null,
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
        return { ...state, filtering: indexedSelectedVal };

    }
    if (action.type === MODAL_TOGGLE) {

        // console.log(!state.modalToggle);
        let isActive = '';
        if(action.modalTrigger === true){
            isActive = true;
            // console.log(isActive);
        }
        if(action.modalTrigger === false){
            isActive = false;
            // console.log(isActive);
        }
        return {...state, modalToggle: isActive};
        
    }

    return state;
}

const rootReducer = combineReducers({
    todoList: todoListReducer
});

export default rootReducer;