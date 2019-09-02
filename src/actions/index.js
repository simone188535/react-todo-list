import { ADD_TASK, DELETE_TASK, EDIT_TASK } from './action-types';

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