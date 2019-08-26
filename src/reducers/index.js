import { ADD_TASK } from '../actions/action-types';
import { combineReducers } from 'redux';

const initialState = {
// id:0,
payload: []
}

export const firstNamedReducer = (state = initialState, action) => {

    if(action.type === ADD_TASK){
        return Object.assign({}, state, {
            // state, info:[{
                // id: state.id + 1,
                //id may be auto generated
                payload: state.payload.concat({ 
                    // id: state.id + 1,
                    description : action.payload
                })
            // }]
        });
        
        // return {...state, info: [...state.info,state.id+1]}
        // return {...state, payload: state.payload.concat(action.payload)}

        // return Object.assign({}, state, {
        //     // id: state.id + 1,
        //     // payload: state.payload.concat(action.payload)
        // });

    }
   
        return state;
}

const rootReducer = combineReducers({
    firstNamedReducer
});

export default rootReducer;