import React, { useState } from "react";
import { Modal, Card } from "@material-ui/core";
import { Button, TextField } from "@material-ui/core";
import { updateUserService } from "../services/userServices";
import {
  EDIT_NAME_HEADING,
  EDIT_BUTTON,
  CLOSE_BUTTON,
  MIN_USERNAME_LEN,
} from "../utils/constants";
import PropTypes from "prop-types";
import "./EditUserModal.scss";

export const EditUserModal = (props) => {
  const [username, setUsername] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setUsername(props.username);
  };

  // Edit username
  const updateUser = () => {
    if (username.length >= MIN_USERNAME_LEN && props.username !== username) {
      updateUserService(props.userId, username)
        .then((res) => {
          props.setUsers((prevState) => [
            ...prevState.filter((user) => user.user_id !== props.userId),
            res,
          ]);
          handleCloseModal();
        })
        .catch((err) => {
          console.log(err);
          handleCloseModal();
        });
    } else {
      setIsModalOpen(false);
    }
  };

  const handleSetUsername = (e) => setUsername(e.target.value);

  const body = (
    <Card className="modal">
      <h2 id="simple-modal-title">{EDIT_NAME_HEADING}</h2>
      <TextField
        variant="outlined"
        defaultValue={props.username}
        onChange={handleSetUsername}
      />
      <Button variant="contained" color="primary" onClick={updateUser}>
        {EDIT_BUTTON}
      </Button>
      <Button variant="contained" color="default" onClick={handleCloseModal}>
        {CLOSE_BUTTON}
      </Button>
    </Card>
  );

  return (
    <>
      <Button
        type="button"
        onClick={handleOpenModal}
        variant="contained"
        color="primary"
      >
        {EDIT_BUTTON}
      </Button>
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
};

EditUserModal.propTypes = {
  username: PropTypes.string,
  userId: PropTypes.number,
};
