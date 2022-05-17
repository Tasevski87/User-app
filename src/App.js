import React from 'react';
import AddUser from './User/User';
import UserList from './User/UserList';


function App() {
  return (
    <div>
        <AddUser />
        <UserList users={[]} />
    </div>
  );
}

export default App;
