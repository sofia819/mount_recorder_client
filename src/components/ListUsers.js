import React, { useEffect, useState } from "react";
import { deleteUserService, getUsersService } from "../services/userServices";
import { UserTable } from "./UserTable";

export const ListUsers = () => {
  const [users, setUsers] = useState([]);

  // Delete user
  const deleteUser = (id) => {
    deleteUserService(id)
      .then(() => {
        setUsers(users.filter((user) => user.user_id !== id));
      })
      .catch((err) => console.log(err));
  };

  // Get all users
  const getUsers = () => {
    getUsersService()
      .then((res) => {
        setUsers(res.sort((a, b) => a.username.localeCompare(b.username)));
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getUsers();
  }, []);

  return <UserTable users={users} deleteUser={deleteUser} />;
};
