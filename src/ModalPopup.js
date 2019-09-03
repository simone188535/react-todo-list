import React from "react";
import ReactDOM from "react-dom";
import { Modal, Button } from 'react-bootstrap';
// import Modal from 'react-bootstrap-modal';

const ModalPopup = props => {


    console.log(props);
    // if(props.filtered){
    //     console.log('full');
    // }else{
    //     console.log('empty');
    // }
    return ReactDOM.createPortal(
        <div>
            {/* {console.log(this.props)} */}
            <Modal show={props.showModal}>
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

export default ModalPopup;