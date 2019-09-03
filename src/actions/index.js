import { ADD_TASK, DELETE_TASK, EDIT_TASK, MODAL_TOGGLE } from './action-types';

let nextTodoId = 0;
export function addTask(payload) {
    return {
        type: ADD_TASK,
        id: nextTodoId++,
        payload
    };
}

export function deleteTask(removePayload){
    return{
        type: DELETE_TASK ,
        removePayload
   }
}
export function editTask(editPayload){
    return{
        type: EDIT_TASK ,
        editPayload
   }
}
export function modalToggleTask(modalTrigger){
    return{
        type: MODAL_TOGGLE,
        modalTrigger
   }
}