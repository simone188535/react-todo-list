import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from './actions';

class Delete extends React.Component{
    
    filterAndRemove = (propToBeFiltered) => {

        const todoListState = this.props.todoListState;

        todoListState.map(x =>
            [x].map(item => {
                if(item.id === propToBeFiltered){
                    this.props.deleteTaskAction(propToBeFiltered);
                    // console.log('This is a match. One and only',item);
                }
                return null;
            }) 
        );

   }
      

    render(){
        return(
            <button className="btn bg-danger text-white mx-1" onClick={()=>this.filterAndRemove(this.props.listId)}>
                <div>Delete</div>
            </button>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        todoListState: state.todoList.payload
    }
}
const mapDispatchToProps = (dispatch) => ({
    deleteTaskAction: (listId) => dispatch(deleteTask(listId))

})

export default connect(mapStateToProps,mapDispatchToProps)(Delete);