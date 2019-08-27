import { ADD_TASK } from './action-types';

let nextTodoId = 0;
export function addTask(payload) {
    return {
        type: ADD_TASK,
        id: nextTodoId++,
        payload
    };
}

// export function deleteTask(description) {
//     return { type: DELETE_TASK, description }
// }