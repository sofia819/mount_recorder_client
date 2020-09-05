import React, { useState } from "react";
import { Modal, Card } from "@material-ui/core";
import { Button, TextField } from "@material-ui/core";
import { updateUserService } from "../services/userServices";
import {
  EDIT_NAME_HEADING,
  EDIT_BUTTON,
  CLOSE_BUTTON,
} from "../utils/constants";
import PropTypes from "prop-types";
import "./EditUserModal.scss";

export const EditUserModal = (props) => {
  const [username, setUsername] = useState(props.username);
  const [userId] = useState(props.userId);

  // Edit username
  const updateUser = () => {
    updateUserService(userId, username)
      .then(() => {
        window.location = "/users";
      })
      .catch((err) => console.log(err));
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUsername(props.username);
  };

  const handleSetUsername = (e) => setUsername(e.target.value);

  const body = (
    <Card className="modal">
      <h2 id="simple-modal-title">{EDIT_NAME_HEADING}</h2>
      <TextField
        variant="outlined"
        defaultValue={username}
        onChange={handleSetUsername}
      />
      <Button variant="contained" color="primary" onClick={updateUser}>
        {EDIT_BUTTON}
      </Button>
      <Button variant="contained" color="default" onClick={handleClose}>
        {CLOSE_BUTTON}
      </Button>
    </Card>
  );

  return (
    <>
      <Button
        type="button"
        onClick={handleOpen}
        variant="contained"
        color="primary"
      >
        {EDIT_BUTTON}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
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
