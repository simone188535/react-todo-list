import React from "react";
import ReactDOM from "react-dom";
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { modalToggleTask } from './actions';
// import Modal from 'react-bootstrap-modal';

const ModalPopup = props => {
// class ModalPopup extends React.Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         showModal: this.props.showModal
    //     }
    // }

    // console.log(props);
    // if(props.filtered){
    //     console.log('full');
    // }else{
    //     console.log('empty');
    // }

    const handleClose = () => {
        // console.log('modal props', this.props);
        // this.setState({ showModal: false });
        // return this.state.showModal;
        return props.modalToggleTaskAction(false);
        // console.log('global state',this.props.modalToggleState);
    }
    // modalToggle = () =>{
    //     console.log(this.props.modalToggleState);
    // }

   
        return ReactDOM.createPortal(
            <div onClick={e => e.stopPropagation()}>
                {/* {console.log(this.props)} */}
                {/* <Modal show={this.props.showModal} */}
                {/* {this.props.modalToggleState} */}
                <Modal show={props.modalToggleState}
                    onHide={handleClose}
                    //     this.props.showModal
                        //()=>{this.handleClose()
                    //     console.log('modal props:', this.props.showModal);
                    //     console.log('modal state:', this.state.showModal);
                    //}
                    // }
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Modal body text goes here.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal>

            </div>, document.querySelector("#modal"));
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