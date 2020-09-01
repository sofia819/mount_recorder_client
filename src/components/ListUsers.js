import React, { useEffect, useState } from "react";
import { deleteUser as delUser, getUsers as retrieveUser } from "../services/userServices";
import { UserTable } from "./UserTable";

const ListUsers = () => {
  const [users, setUsers] = useState([]);

  //delete user function
  const deleteUser = async (id) => {
      delUser(id)
        .then(() => {
          setUsers(users.filter((user) => user.user_id !== id));
        })
        .catch((err) => console.log(err));
  };

  //it's what it sounds like
  const getUsers = () => {
    retrieveUser()
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => console.log(err));
  }
    useEffect(() => {
      getUsers();
    }, []);


return <UserTable users={users} deleteUser={deleteUser} />};
export default ListUsers;