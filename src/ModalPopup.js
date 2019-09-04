import React from "react";
import ReactDOM from "react-dom";
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { modalToggleTask } from './actions';
// import Modal from 'react-bootstrap-modal';

// const ModalPopup = props => {
class ModalPopup extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            value: '',
            defaultValue: ''
         };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    handleClose = () => {
        // console.log('modal props', this.props);
        // this.setState({ showModal: false });
        // return this.state.showModal;
        // console.log('modal props', this.props);
        return this.props.modalToggleTaskAction(false);
        // console.log('global state',this.props.modalToggleState);

    }
    // modalToggle = () =>{
    //     console.log(this.props.modalToggleState);
    // }
    handleDefaultValue = () => {

        // console.log(this.props.filtered);

        let defaultValue = '';
        if (this.props.filtered) {
            // console.log(this.props.filtered);
            this.setState({defaultValue:  this.props.filtered[0].description});
            // return defaultValue = this.props.filtered[0].description;
        }
        return defaultValue;
    }

    render() {
        return ReactDOM.createPortal(
            <div onClick={e => e.stopPropagation()}>
                {/* {console.log('s',this.props.filtered)} */}
                {/* <Modal show={this.props.showModal} */}
                {/* {this.props.modalToggleState} */}
                <Modal show={this.props.modalToggleState}
                    onHide={this.handleClose}>
                    <form>
                        <Modal.Header closeButton>
                            <Modal.Title>Change the task</Modal.Title>
                        </Modal.Header>
                        {/* {this.handleDefaultValue()} */}
                        <Modal.Body>
                            <input type="text"
                            // defaultValue={this.state.defaultValue}
                            // defaultValue={this.handleDefaultValue}
                            value={this.state.value} 
                            onChange={this.handleChange} 

                            />
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                            {/* <Button variant="primary">Save changes</Button> */}
                            <input type="submit" value="Save changes" className="btn bg-primary text-white"/>
                        </Modal.Footer>
                    </form>
                </Modal>

            </div>, document.querySelector("#modal"));
    }
}



// class Modal extends React.Component {
//     constructor(props) {
//         super(props);

//         this.checkConsole = this.checkConsole.bind(this);

//     }
//     checkConsole = () => {
//         console.log(this.props);
//         }
//     render() {
//         return ReactDOM.createPortal(ModalData, document.querySelector("#modal-root"));
//     }

// }

// const ModalInfo = () => {

//     return ReactDOM.createPortal(ModalData, document.querySelector("#modal"));

// }
const mapStateToProps = (state) => {
    return {
        modalToggleState: state.todoList.modalToggle
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        modalToggleTaskAction: (modalTrigger) => dispatch(modalToggleTask(modalTrigger))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalPopup);