import React, { useState, createRef } from "react";
import { Button, Modal } from "@material-ui/core";
import {
  DELETE_BUTTON,
  MIN_USERNAME_LEN,
  MIN_PASSWORD_LEN,
} from "../utils/constants";
import { AdminLogin } from "./AdminLogin";
import { deleteUserService } from "../services/userServices";
import PropTypes from "prop-types";

export const DeleteUserButton = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Delete user
  const deleteUser = (id, auth) => {
    if (
      auth.username.length >= MIN_USERNAME_LEN &&
      auth.password.length >= MIN_PASSWORD_LEN
    ) {
      deleteUserService(id, auth)
        .then(({ response }) => {
          if (response) {
            handleCloseModal();
            props.setUsers((prevState) =>
              prevState.filter((user) => user.user_id !== id)
            );
          } else {
            handleCloseModal();
          }
        })
        .catch((err) => {
          console.log(err);
          handleCloseModal();
        });
    }
    handleCloseModal();
  };

  return (
    <>
      <Button variant="contained" color="secondary" onClick={handleOpenModal}>
        {DELETE_BUTTON}
      </Button>
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <AdminLogin
          ref={createRef()}
          deleteUser={deleteUser}
          userId={props.userId}
        />
      </Modal>
    </>
  );
};

DeleteUserButton.propTypes = {
  setUsers: PropTypes.func,
  userId: PropTypes.number,
};
