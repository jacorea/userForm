import React from 'react'
import Button from '../Button/Button'
import Card from '../Card/Card'
import './ModalOverlay.css'


const ModalOverlay = (props) => {
    return (
    <Card className="modal" >
        <header className="header">
            <h2>{props.title}</h2>
        </header>
        <div className="content">
            <p>{props.message}</p>
        </div>
        <footer className="actions">
            <Button onClick={props.onError}>Okay</Button>
        </footer>
    </Card>
    )
}

export default ModalOverlay
