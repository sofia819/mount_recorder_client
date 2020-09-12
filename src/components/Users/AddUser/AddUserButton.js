import React, { useState, createRef } from 'react';
import { Modal, Button, Box } from '@material-ui/core';
import { AddUserForm } from 'components/Users/AddUser/AddUserForm';
import PropTypes from 'prop-types';
import { inputUserService } from 'services/userServices';
import {
  MIN_USERNAME_LEN,
  ADD_USER_BUTTON,
  ALERT_ERROR_SHORT_NAME,
  ALERT_ERROR_DUPE_NAME,
  ALERT_ERROR_UNEXPECTED,
  ALERT_SUCCESS,
} from 'utils/constants';

export const AddUserButton = (props) => {
  const [username, setUsername] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setUsername('');
  };

  const handleAddUser = () => {
    const usernameHasMinLength = username.length >= MIN_USERNAME_LEN;
    const hasUniqueUsername = !props.users.find(
      (user) => user.username === username
    );

    if (usernameHasMinLength && hasUniqueUsername) {
      inputUserService(username)
        .then((res) => {
          if (res.length > 0) {
            handleCloseModal();
            props.setUsers([...props.users, res[0]]);
            setUsername('');
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
            props.dispatchAlert({ type: ALERT_SUCCESS });
          }
        })
        .catch((err) => {
          console.log(err);
          props.dispatchAlert({ type: ALERT_ERROR_UNEXPECTED });
        });
    } else {
      if (!usernameHasMinLength) {
        props.dispatchAlert({ type: ALERT_ERROR_SHORT_NAME });
      } else if (!hasUniqueUsername) {
        props.dispatchAlert({ type: ALERT_ERROR_DUPE_NAME });
      }
    }
  };

  return (
    <Box m={1}>
      <Button
        type='button'
        onClick={handleOpenModal}
        variant='contained'
        color='primary'
      >
        {ADD_USER_BUTTON}
      </Button>
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        disableBackdropClick
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
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
  dispatchAlert: PropTypes.func,
};
