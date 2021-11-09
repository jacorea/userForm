import React from 'react'
import './Button.css'

function Button(props) {
    const classes='button ' + props.className
    return (
        <button 
            className={classes} 
            type={props.type || 'button' } 
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button
