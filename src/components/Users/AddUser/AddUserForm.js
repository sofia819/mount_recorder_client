import React, { forwardRef } from "react";
import { Card, Button, TextField, Grid } from "@material-ui/core";
import {
  INPUT_USER_HEADING,
  ADD_BUTTON,
  USERNAME_TEXT,
} from "../../../utils/constants";
import PropTypes from "prop-types";
import "./AddUserForm.scss";

export const AddUserForm = forwardRef((props, ref) => (
  <Card ref={ref} tabIndex={-1} className="form">
    <h2>{INPUT_USER_HEADING}</h2>
    <Grid container alignItems="center">
      <Grid item xs={4}>
        <TextField
          label={USERNAME_TEXT}
          variant="outlined"
          value={props.username}
          onChange={(e) => props.setUsername(e.target.value)}
        />
      </Grid>
      <Grid item>
        <Button onClick={props.onAddUser} variant="contained" color="primary">
          {ADD_BUTTON}
        </Button>
      </Grid>
    </Grid>
  </Card>
));

AddUserForm.propTypes = {
  onAddUser: PropTypes.func,
  username: PropTypes.string,
};
