import React, { useState, createRef } from 'react';
import { Modal, Button } from '@material-ui/core';
import { updateUserService } from 'services/userServices';
import {
  MIN_USERNAME_LEN,
  ALERT_ERROR_SHORT_NAME,
  ALERT_ERROR_DUPE_NAME,
  ALERT_ERROR_UNEXPECTED,
  ALERT_SUCCESS,
  ALERT_WARNING_SAME_NAME,
} from 'utils/constants';
import { EditUserForm } from 'components/Users/EditUser/EditUserForm';
import PropTypes from 'prop-types';

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
    const usernameHasMinLength = username.length >= MIN_USERNAME_LEN;
    const hasDifferentUsername = props.username !== username;
    const hasUniqueUsername = !props.users.find(
      (user) => user.username === username
    );

    if (usernameHasMinLength && hasDifferentUsername && hasUniqueUsername) {
      updateUserService(props.userId, username)
        .then((res) => {
          if (res.length > 0) {
            props.setUsers((prevState) => [
              ...prevState.filter((user) => user.user_id !== props.userId),
              res[0],
            ]);
            props.dispatchAlert({ type: ALERT_SUCCESS });
          } else {
            props.dispatchAlert({ type: ALERT_ERROR_UNEXPECTED });
          }
          setIsModalOpen(false);
        })
        .catch((err) => {
          console.log(err);
          props.dispatchAlert({ type: ALERT_ERROR_UNEXPECTED });
        });
    } else {
      if (!usernameHasMinLength) {
        props.dispatchAlert({ type: ALERT_ERROR_SHORT_NAME });
      } else if (!hasDifferentUsername) {
        props.dispatchAlert({ type: ALERT_WARNING_SAME_NAME });
      } else if (!hasUniqueUsername) {
        props.dispatchAlert({ type: ALERT_ERROR_DUPE_NAME });
      }
    }
  };

  return (
    <>
      <Button
        type='button'
        onClick={handleOpenModal}
        variant='outlined'
        color='primary'
      >
        {props.username}
      </Button>
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        disableBackdropClick
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
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
  dispatchAlert: PropTypes.func,
};
