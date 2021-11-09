import React from 'react'
import Card from '../UI/Card/Card'
import User from '../User/User'
import './Users.css'

const Users = ({ users }) => {
    return (
        <Card className="users">
            <ul>
                {users.map((user, index)=><User key={index} userName={user.userName} age={user.age} />)}
            </ul>
        </Card>
    )
}

export default Users
