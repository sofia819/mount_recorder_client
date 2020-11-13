import React, { createRef, useState } from 'react';
import { Button, Modal } from '@material-ui/core';
import { MountOwnedUsersList } from 'components/Mounts/MountsOwner/MountOwnedUsersList';
import PropTypes from 'prop-types';

export const MountsOwnedButton = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <Button variant='outlined' color='primary' onClick={handleOpenModal}>
        {props.mountName}
      </Button>
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        disableBackdropClick
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <MountOwnedUsersList
          mountName={props.mountName}
          ownedUsers={props.ownedUsers}
          ref={createRef()}
          onCloseModal={handleCloseModal}
        />
      </Modal>
    </>
  );
};

MountsOwnedButton.propTypes = {
  mountName: PropTypes.string,
  ownedUsers: PropTypes.array,
};
