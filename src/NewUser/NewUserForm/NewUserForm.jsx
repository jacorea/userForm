import React, { useState } from 'react'
import Button from '../../components/UI/Button/Button';
import Card from '../../components/UI/Card/Card'
import ErrorModal from '../../components/UI/ErrorModal/ErrorModal';
import './NewUserForm.css';

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
        if (userName.trim().length === 0 || age.trim().length === 0) {
            return;
        }
        if (Number(age) < 1) {
            return
        }

        props.addUser(userData);

        setUserInput((prevState)=>(
            {userName: '', age: '' }
        ))
    }

    const { userName, age } = userInput;
    return (
        <div>
            <ErrorModal title="error title" message="something went wrong" />
            <Card className="input">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" name='userName' value={userName} onChange={inputChangeHandler}  />
                    <label htmlFor="age">Age(years)</label>
                    <input id="age" type="number" min='0' step='1' name='age' value={age} onChange={inputChangeHandler}  />
                    <div>
                        <Button type="submit" > Add User</Button>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default NewUserForm
