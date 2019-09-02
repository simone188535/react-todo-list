import React from 'react';
import { connect } from 'react-redux';
import { editTask } from './actions';

import ModalPopup from './ModalPopup';

class Edit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modalData: null
        }
    }

    passedPropToModal = (propsPassed) => {
        this.setState({ modalData: propsPassed });
    }

    selectThisItem = () => {
        console.log(this.props);
        this.props.editTaskAction(this.props.listId);
        this.passedPropToModal(this.props.filtered);
        // console.log(this.props.filtered);
    }

    render() {
        return (
            // <button className="btn bg-primary text-white mx-1" onClick={()=>{this.props.editTaskAction(this.props.listId)}}>
            <button className="btn bg-primary text-white mx-1" onClick={() => this.selectThisItem()}>
                <div>Edit</div>
                <ModalPopup test="test" filtered={this.state.modalData} />
                {/* //pass prop to child only on onclick */}
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
        editTaskAction: (listId) => dispatch(editTask(listId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Edit);

// put modal Here. Use react-Bootstrap to create it using a portal. 
// onclick change state of toggle for modal and pass it down to the modal component