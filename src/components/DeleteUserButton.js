import React from "react";
import { Button, Modal } from "@material-ui/core";
import { DELETE_BUTTON } from "../utils/constants";
import { AdminLogin } from "./AdminLogin";
import PropTypes from "prop-types";

export const DeleteUserButton = (props) => {
  return (
    <>
      <Button variant="contained" color="secondary" onClick={props.onOpenModal}>
        {DELETE_BUTTON}
      </Button>
      <Modal
        open={props.isModalOpen}
        onClose={props.onCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <AdminLogin deleteUser={props.deleteUser} userId={props.userId} />
      </Modal>
    </>
  );
};

DeleteUserButton.propTypes = {
  onOpenModal: PropTypes.func,
  deleteUser: PropTypes.func,
  onCloseModal: PropTypes.func,
  userId: PropTypes.number,
  isModalOpen: PropTypes.bool,
};
