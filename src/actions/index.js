import  { ADD_TASK } from './action-types';

export function addTask( payload) {
    return { type: ADD_TASK, payload};
}

// export function deleteTask(description) {
//     return { type: DELETE_TASK, description }
// }