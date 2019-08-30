import React from 'react';
import { connect } from 'react-redux';
import { addTask } from './actions';

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { todoValue: '' };

        this.onSubmit = this.onSubmit.bind(this);
        this.handleState = this.handleState.bind(this);
    }

    handleState = (event) => {
        this.setState({ todoValue: event.target.value });
    }

    errorHandling = () =>{

        const todoListState = this.props.todoListState;
        const todoListCount = todoListState.length;

        let Warning = '';

        if (todoListCount < 1) {
            return Warning = <div className="alert alert-danger">Sorry, There are no Todo Items. Please add one.</div>;
        }
        return Warning;
        
        
    }
    onSubmit = (event) => {
        //check text value before submission
        event.preventDefault();
        

        this.errorHandling();

        this.props.addTaskAction(this.state.todoValue);
        // this.props.test();
        // console.log(this.props);
        // console.log(this.state.value); 

    }
    render() {
        return (
            <div className="w-100">
                <form onSubmit={this.onSubmit}>
                    <div className="input-group my-3 w-50 mx-auto">
                        <input type="text" className="form-control" value={this.state.todoValue} onChange={this.handleState} placeholder="Description"></input>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="submit">Add Task</button>
                        </div>
                    </div>
                </form>
                <div>{this.errorHandling()}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todoListState: state.todoList.payload
    }
}
const mapDispatchToProps = (dispatch) => ({
    addTaskAction: (text) => dispatch(addTask(text))

})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);