import React, { createRef, useState } from 'react';
import { MountsImage } from 'components/Mounts/MountsImage/MountsImage';
import { Button, Modal, Avatar } from '@material-ui/core';
import PropTypes from 'prop-types';

export const MountsImageButton = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <Button variant='outlined' color='primary' onClick={handleOpenModal}>
        <Avatar src={props.imageUrl} alt={props.mountName} />
      </Button>
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        disableBackdropClick
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <MountsImage
          mountName={props.mountName}
          imageUrl={props.imageUrl}
          ref={createRef()}
          onCloseModal={handleCloseModal}
        />
      </Modal>
    </>
  );
};

MountsImageButton.propTypes = {
  mountName: PropTypes.string,
  imageUrl: PropTypes.string,
};
