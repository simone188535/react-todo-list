import React from 'react';
import { connect } from 'react-redux';
import { addTask } from './actions';

class TodoList extends React.Component {

    constructor() {
        super();
        this.addOnClick = this.addOnClick.bind(this);
      }

    addOnClick() {
        this.props.addTaskAction();
        console.log(this.props);
    
    }
    render() {
        return (
            <div className="input-group my-3 w-50 mx-auto">
                <input type="text" className="form-control" placeholder="Description"></input>
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button" onClick={this.addOnClick}>Add Task</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listTasks: state
    }
}

const mapDispatchToProps = dispatch => ({
    addTaskAction: () => dispatch(addTask('test'))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);