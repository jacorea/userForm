import React from 'react'
import './Backdrop.css'

const Backdrop = (props) => {
    return (
        <div className="backdrop" onClick={props.onError}>
            
        </div>
    )
}

export default Backdrop
