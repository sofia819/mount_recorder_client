import React, { useState } from "react";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import { updateUserService } from "../services/userServices";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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

  //edit username function
  const updateUser = async (e) => {
    e.preventDefault();
    updateUserService(userId, username)
      .then(() => {
        //console.log(Response);
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
      <h2 id="simple-modal-title">Editing Mode</h2>
      <TextField
        variant="outlined"
        defaultValue={username}
        onChange={handleSetUsername}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={updateUser}
      >
        Edit
      </Button>
      <Button variant="contained" color="default" onClick={handleClose}>
        close
      </Button>
    </div>
  );

  return (
    <>
      <button type="button" onClick={handleOpen}>
        Edit User
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
