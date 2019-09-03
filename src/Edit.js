import React from 'react';
import { connect } from 'react-redux';
import { editTask, modalToggleTask } from './actions';

import ModalPopup from './ModalPopup';

class Edit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modalData: null,
            showModal:false
        }

        // this.selectThisItem = this.selectThisItem.bind(this);
    }

    passedPropsToModal = (propsPassed) => {
        this.setState({ modalData: propsPassed });
        // this.setState({ modalData: propsPassed, showModal:  true });
        // this.setState({ showModal:  true});
    }
    // handleClose = () =>{
    //     this.setState({ showModal:  false });
    // }

    // handleShow = () =>{
    //     this.setState({ showModal:  true });
    // }

    selectThisItem = (event) => {
        // console.log(this.props);
        this.props.editTaskAction(this.props.listId);
        this.passedPropsToModal(this.props.filtered);
        // this.handleShow();
        this.props.modalToggleTaskAction('active');
        
        // console.log(this.props.modalToggleTaskAction());
        // console.log(this.props.filtered);
    }

    render() {
        return (
            // <button className="btn bg-primary text-white mx-1" onClick={()=>{this.props.editTaskAction(this.props.listId)}}>
            <button className="btn bg-primary text-white mx-1" onClick={() => this.selectThisItem()}>
                <div>Edit</div>
                <ModalPopup filtered={this.state.modalData} />
            </button>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // filtered: state.todoList.payload
        filtered: state.todoList.filtering
    }
}
//rewrite this in modal portal, but leave dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        editTaskAction: (listId) => dispatch(editTask(listId)),
        modalToggleTaskAction: (modalTrigger) => dispatch(modalToggleTask(modalTrigger))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Edit);

// put modal Here. Use react-Bootstrap to create it using a portal. 
// onclick change state of toggle for modal and pass it down to the modal component