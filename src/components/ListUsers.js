import React, { useEffect, useState } from "react";
import { deleteUserService, getUsersService } from "../services/user-services";

const ListUsers = () => {
  const [users, setUsers] = useState([]);

  const deleteUser = (id) =>
    deleteUserService(id)
      .then(() => setUsers(users.filter((user) => user.user_id !== id)))
      .catch((err) => console.error(err));

  const getUsers = () =>
    getUsersService()
      .then((res) => setUsers(res))
      .catch((err) => console.log(err));

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <table className="table table-dark table-hover mt-5 text-center">
        <thead>
          <tr>
            <th>Username</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                    </tr>*/}
          {users.map((user) => (
            <tr key={user.user_id}>
              <td>{user.username}</td>
              <td>Edit</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(user.user_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListUsers;
