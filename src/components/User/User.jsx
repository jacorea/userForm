import React from 'react'
import './User.css';

const User = ({ userName, age }) => {
    return (
        <li>
            {userName} ({age} years old)
        </li>
    )
}

export default User
