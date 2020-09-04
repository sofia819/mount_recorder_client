import React, { useState } from "react";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import { updateUserService } from "../services/userServices";
import { EDIT_NAME_HEADING, EDIT_BUTTON, CLOSE_BUTTON } from "../utils/constants";

const getModalStyle = () => {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

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

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
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
    <div style={modalStyle} className={classes.paper}>
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
    </div>
  );

  return (
    <>
      <button type="button" onClick={handleOpen}>
        {EDIT_BUTTON}
      </button>
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
