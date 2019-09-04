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
        this.props.modalToggleTaskAction(true);
        
        // console.log(this.props.modalToggleTaskAction());
        // console.log('filtered ',this.props.filtered[0].description);
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

const mapStateToProps = (state,ownProps) => {
    return {
        filtered: state.todoList.payload.filter((item) => {
                return item.id === ownProps.listId;
    
            })
        // filtered: state.todoList.filtering
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

// Next Steps: pull filter out of reducer and put it into mapStateToProps
// after getting data into the modal. update the next in the reducer using the map function