import React from 'react';
import { connect } from 'react-redux';
import { addTask } from './actions';

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todoValue: '',
            isText: false,
            isSubmitted: false

        };

        this.onSubmit = this.onSubmit.bind(this);
        this.handleState = this.handleState.bind(this);
        // this.checkTextWarning = this.checkTextWarning.bind(this);
    }

    handleState = (event) => {
        this.setState({ todoValue: event.target.value });
    }

    // componentDidUpdate(prevProps, prevState){
        
    //     if(this.state.isText !== prevState.isText){
    //         this.checkTextOnSubmit();
    //     }
    //     // console.log(this.state.isText);

    // }
    checkTextOnSubmit = () => {

        //     //checks if text was added on submission. If not, prevent further action

        if (!this.state.todoValue) {
            //         //  <div className="alert alert-danger">No text was submitted.</div>;
            //          this.setState({ isText: !this.state.isText });

            //     }
            //     console.log(this.state.isText);
            //         // return this.setState({ isText: true });

            this.setState({ isText: false },this.checkTextResult);

        } else {
            this.setState({ isText: true },this.checkTextResult);
           
        }


    }

    checkTextResult = () => {
        // console.log('activate');
        if(this.state.isText){
            return this.props.addTaskAction(this.state.todoValue);
        }
        return false;
    
    }
    checkTextWarning = () => {
        
        let checkTextWarning = "";
        if(!this.state.isText){
            return checkTextWarning = <div className="alert alert-danger">No text was submitted.</div>;
        }
        return checkTextWarning;
    }

    DefaultNoList = () => {

        const todoListState = this.props.todoListState;
        const todoListCount = todoListState.length;

        let noListWarning = '';

        //checks if there are list items
        if (todoListCount < 1) {
            return noListWarning = <div className="alert alert-danger">Sorry, There are no Todo Items. Please add one.</div>;
        }
        return noListWarning;


    }

    onSubmit = (event) => {
        //check text value before submission
        event.preventDefault();
        if(!this.state.isSubmitted){
            this.setState({isSubmitted: true});
        }
        this.checkTextOnSubmit();
        // console.log(this.state.isText);

        // console.log(this.state.isText);


        // this.props.addTaskAction(this.state.todoValue);
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
                <div>{this.DefaultNoList()}</div>
                <div>{this.state.isSubmitted && !this.state.isText && this.checkTextWarning()}</div>
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

//put all errors in a central location, use state to determine whether there is an 
//error or not, also use state to determine if error is true or false, if false,
//create a task: this.props.addTaskAction(this.state.todoValue) and reset state

//onsubmit trigger function that determines the state of isText. if false, show error message
//(may use ternary operator)