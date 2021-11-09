import React, { useState } from 'react'

const NewUserForm = (props) => {

    const [ userInput, setUserInput] = useState({ userName: '', age: '' })

    const inputChangeHandler = (e) => {
        setUserInput((prevState)=>(
            {
            ...prevState,
            [e.target.name]: e.target.value}
        ))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let {userName, age} = userInput;
        const userData = {
            userName: userName,
            age: Number(age)
        }
        props.addUser(userData);

        setUserInput((prevState)=>(
            {userName: '', age: '' }
        ))
    }

    const { userName, age } = userInput;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label>Username</label>
                    <input type="text" name='userName' value={userName} onChange={inputChangeHandler}  />
                </div>
                <div>
                    <label>Age(years)</label>
                    <input type="number" min='0' step='1' name='age' value={age} onChange={inputChangeHandler}  />
                </div>
            </div>
            <div>
                <button type="submit"> Add User</button>
            </div>
            
        </form>
    )
}

export default NewUserForm
