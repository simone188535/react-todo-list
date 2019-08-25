import  { ADD_TASK } from './action-types';

export function addTask(description) {
    return { type: ADD_TASK, description }
}

// export function deleteTask(description) {
//     return { type: DELETE_TASK, description }
// }