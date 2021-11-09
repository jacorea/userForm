import React, { useState } from 'react'
import USER_DATA from './Data/userUtils';
import Users from './components/Users/Users';
import NewUserForm from './NewUser/NewUserForm/NewUserForm';


const App = () => {
  const [users, setUsers] = useState(USER_DATA)

  const onAddUser = (newUser) => {
    setUsers((prevUsers)=>{
      return([...users, newUser])
    })
  }

  return (
    <div>
      <NewUserForm addUser={onAddUser} />
      <Users users={users} />
    </div>
  );
}

export default App;
