import React from 'react'
import ReactDOM from 'react-dom';



import './ErrorModal.css';
import Backdrop from '../Backdrop/Backdrop';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onError={props.onError} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay onError={props.onError} message={props.message} title={props.title}/>, document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}

export default ErrorModal
