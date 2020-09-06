import React, { forwardRef } from "react";
import { Card, TextField, Button } from "@material-ui/core";
import {
  EDIT_NAME_HEADING,
  EDIT_BUTTON,
  CLOSE_BUTTON,
} from "../../../utils/constants";
import PropTypes from "prop-types";
import "./EditUserForm.scss";

export const EditUserForm = forwardRef((props, ref) => (
  <Card tabIndex={-1} className="modal" ref={ref}>
    <h2 id="simple-modal-title">{EDIT_NAME_HEADING}</h2>
    <TextField
      variant="outlined"
      defaultValue={props.username}
      onChange={props.onChangeInput}
    />
    <Button
      variant="contained"
      color="primary"
      onClick={props.onUpdateUsername}
    >
      {EDIT_BUTTON}
    </Button>
    <Button variant="contained" color="default" onClick={props.onCloseModal}>
      {CLOSE_BUTTON}
    </Button>
  </Card>
));

EditUserForm.propTypes = {
  username: PropTypes.string,
  onChangeInput: PropTypes.func,
  onUpdateUsername: PropTypes.func,
  onCloseModal: PropTypes.func,
};
