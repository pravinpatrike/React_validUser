import { React, useState, Fragment } from 'react';
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'


function App() {
  const [usersList, setusersList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setusersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }]
    })
  }
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}
export default App;
