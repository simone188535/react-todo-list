import React from 'react';
import { connect } from 'react-redux';
import { addTask } from './actions';

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        
        this.onSubmit = this.onSubmit.bind(this);
        this.handleState = this.handleState.bind(this);
    }
    handleState(event){
        this.setState({value: event.target.value});
    }
    onSubmit(event) {
        //check text value before submission
        event.preventDefault();

        
        this.props.addTaskAction(this.state.value);
        // this.props.test();
        // console.log(this.props);
        // console.log(this.state.value); 

    }
    render() {
        return (
            <form onSubmit={this.onSubmit} className="w-100">
                <div className="input-group my-3 w-50 mx-auto">
                    <input type="text" className="form-control" value={this.state.value} onChange={this.handleState} placeholder="Description"></input>
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">Add Task</button>
                    </div>
                </div>
            </form>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         listTasks: state.value
//     }
// }

const mapDispatchToProps = (dispatch) => ({
    addTaskAction: (text) => dispatch(addTask(text))
    
})

export default connect(null, mapDispatchToProps)(TodoList);