import React, { useState, createRef } from "react";
import { Modal, Button } from "@material-ui/core";
import { updateUserService } from "services/userServices";
import { MIN_USERNAME_LEN } from "utils/constants";
import { EditUserForm } from "components/Users/EditUser/EditUserForm";
import PropTypes from "prop-types";

export const EditUserButton = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setUsername(props.username);
  };

  const [username, setUsername] = useState(props.username);
  const handleSetUsername = (e) => setUsername(e.target.value);

  // Edit username
  const updateUser = () => {
    if (
      username.length >= MIN_USERNAME_LEN &&
      props.username !== username &&
      !props.users.find((user) => user.username === username)
    ) {
      updateUserService(props.userId, username)
        .then((res) => {
          if (res.length > 0) {
            props.setUsers((prevState) => [
              ...prevState.filter((user) => user.user_id !== props.userId),
              res[0],
            ]);
          }
          setIsModalOpen(false);
        })
        .catch((err) => {
          console.log(err);
          handleCloseModal();
        });
    } else {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <Button
        type="button"
        onClick={handleOpenModal}
        variant="outlined"
        color="primary"
      >
        {props.username}
      </Button>
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        disableBackdropClick
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <EditUserForm
          username={username}
          ref={createRef()}
          onChangeInput={handleSetUsername}
          onUpdateUsername={updateUser}
          onCloseModal={handleCloseModal}
        />
      </Modal>
    </>
  );
};

EditUserButton.propTypes = {
  users: PropTypes.array,
  username: PropTypes.string,
  userId: PropTypes.number,
  setUsers: PropTypes.func,
};
