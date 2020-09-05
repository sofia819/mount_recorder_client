import React, { useState } from "react";
import { deleteUserService } from "../services/userServices";
import { UserTable } from "./UserTable";
import PropTypes from "prop-types";

export const ListUsers = (props) => {
  // Delete user
  const deleteUser = (id, auth) => {
    deleteUserService(id, auth)
      .then(({ response }) => {
        if (response) {
          props.setUsers(props.users.filter((user) => user.user_id !== id));
        }
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
        handleCloseModal();
      });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <UserTable
      users={props.users}
      deleteUser={deleteUser}
      isModalOpen={isModalOpen}
      onOpenModal={handleOpenModal}
      onCloseModal={handleCloseModal}
    />
  );
};

ListUsers.propTypes = {
  users: PropTypes.array,
  setUsers: PropTypes.func,
};
