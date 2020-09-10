import React, { useState, createRef } from "react";
import { Modal, Button, Box } from "@material-ui/core";
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
    setUsername("");
  };

  const handleAddUser = () => {
    if (
      username.length >= MIN_USERNAME_LEN &&
      !props.users.find((user) => user.username === username)
    ) {
      inputUserService(username)
        .then((res) => {
          if (res.length > 0) {
            handleCloseModal();
            props.setUsers([...props.users, res[0]]);
            setUsername("");
            props.setUserMounts((prevState) => [
              ...prevState,
              ...props.mounts.map((mount) => {
                return {
                  expansion: mount.expansion,
                  mount_id: mount.mount_id,
                  mount_name: mount.mount_name,
                  owned: false,
                  ...res[0],
                };
              }),
            ]);
          }
        })
        .catch((err) => console.log(err));
    } else {
      handleCloseModal();
    }
  };

  return (
    <Box m={1}>
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
        disableBackdropClick
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <AddUserForm
          ref={createRef()}
          onAddUser={handleAddUser}
          setUsername={setUsername}
          onCloseModal={handleCloseModal}
        />
      </Modal>
    </Box>
  );
};

AddUserButton.propTypes = {
  username: PropTypes.string,
  users: PropTypes.array,
  setUsers: PropTypes.func,
  mounts: PropTypes.array,
  setUserMounts: PropTypes.func,
};
