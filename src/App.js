import React,{useState} from "react";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";


function App() {
  const [userList,setUserList]= useState([]);
  const addUserHandler = (uName,uAge,uCollge)=>{
    setUserList((prevUserList)=>{
      return [...prevUserList,{name:uName, age:uAge,collge:uCollge ,id:Math.random().toString()}]
    });
  }

  return ( 
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
