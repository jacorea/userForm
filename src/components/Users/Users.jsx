import React from 'react'
import User from '../User/User'

const Users = ({ users }) => {
    return (
        <div>

            {users.map((user, index)=><User key={index} userName={user.userName} age={user.age} />)}
        </div>
    )
}

export default Users
