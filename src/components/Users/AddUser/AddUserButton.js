import React, { useState, createRef } from "react";
import { Modal, Button } from "@material-ui/core";
import { AddUserForm } from "./AddUserForm";
import PropTypes from "prop-types";
import { inputUserService } from "../../../services/userServices";
import { MIN_USERNAME_LEN, ADD_USER_BUTTON } from "../../../utils/constants";

export const AddUserButton = (props) => {
  const [username, setUsername] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setUsername(props.username);
  };

  const handleAddUser = () => {
    if (username.length >= MIN_USERNAME_LEN) {
      inputUserService(username)
        .then((res) => {
          props.setUsers([...props.users, res]);
          setUsername("");
          handleCloseModal();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <Button
        type="button"
        onClick={handleOpenModal}
        variant="contained"
        color="primary"
      >
        {ADD_USER_BUTTON}
      </Button>
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <AddUserForm
          ref={createRef()}
          onAddUser={handleAddUser}
          setUsername={setUsername}
        />
      </Modal>
    </>
  );
  // return
};

AddUserButton.propTypes = {
  users: PropTypes.array,
  setUsers: PropTypes.func,
};
