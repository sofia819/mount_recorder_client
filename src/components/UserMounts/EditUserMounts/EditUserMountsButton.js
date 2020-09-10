import React, { createRef, useState, useEffect } from "react";
import { Button, Modal } from "@material-ui/core";
import { EditUserMountsForm } from "components/UserMounts/EditUserMounts/EditUserMountsForm";
import { updateUserMountsService } from "services/userMountsServices";
import PropTypes from "prop-types";

export const EditUserMountsButton = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const [userMounts, setUserMounts] = useState(props.userMounts);

  const handleChangeSelection = (updatedUserMount) => {
    setUserMounts((prevState) => [
      ...prevState.filter(
        (userMount) => userMount.mount_id !== updatedUserMount.mount_id
      ),
      {
        ...updatedUserMount,
        owned: !updatedUserMount.owned,
      },
    ]);
  };

  const updateUserMounts = () => {
    const userOwnedMounts =
      props.expansion === -1
        ? []
        : props.allUserMounts
            .filter(
              (userMount) =>
                userMount.user_id === props.userId &&
                userMount.expansion !== props.expansion &&
                userMount.owned
            )
            .map((userMount) => userMount.mount_id);
    updateUserMountsService(props.userId, [
      ...userOwnedMounts,
      ...userMounts
        .filter((userMount) => userMount.owned)
        .map((userMount) => userMount.mount_id),
    ])
      .then(({ response }) => {
        if (response) {
          const updatedUserMounts =
            props.expansion === -1
              ? props.allUserMounts.filter(
                  (userMount) => userMount.user_id !== props.userId
                )
              : props.allUserMounts.filter(
                  (userMount) =>
                    userMount.user_id !== props.userId ||
                    userMount.expansion !== props.expansion
                );
          props.setUserMounts([...updatedUserMounts, ...userMounts]);
        }
        setIsModalOpen(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => setUserMounts(props.userMounts), [props.userMounts]);

  return (
    <Button variant="outlined" color="primary" onClick={handleOpenModal}>
      {props.username}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <EditUserMountsForm
          username={props.username}
          ref={createRef()}
          updateUserMounts={updateUserMounts}
          userMounts={userMounts}
          onChangeSelection={handleChangeSelection}
        />
      </Modal>
    </Button>
  );
};

EditUserMountsButton.propTypes = {
  userMounts: PropTypes.array,
  userId: PropTypes.number,
  setUserMounts: PropTypes.func,
  allUserMounts: PropTypes.array,
  expansion: PropTypes.number,
  username: PropTypes.string,
};
