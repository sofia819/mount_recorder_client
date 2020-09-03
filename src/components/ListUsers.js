import React, { useEffect, useState } from "react";
import { deleteUserService, getUsersService } from "../services/userServices";
import { UserTable } from "./UserTable";

const ListUsers = () => {
  const [users, setUsers] = useState([]);

  //delete user function
  const deleteUser = async (id) => 
  {
    deleteUserService(id)
      .then(() => {
        setUsers(users.filter((user) => user.user_id !== id));
      })
      .catch((err) => console.log(err));
  };

  //it's what it sounds like
  const getUsers = () => {
    getUsersService()
      .then((res) => {
        setUsers(res.sort((a, b) => a.username.localeCompare(b.username)));
      })
      .catch((err) => console.log(err));
  }
    useEffect(() => {
      getUsers();
    }, []);


return <UserTable users={users} deleteUser={deleteUser} />};
export default ListUsers;