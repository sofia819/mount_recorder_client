import React, { useState } from "react";
import { Card, Button, TextField, Grid } from "@material-ui/core";
import { inputUserService } from "../services/userServices";
import {
  INPUT_USER_HEADING,
  ADD_BUTTON,
  MIN_USERNAME_LEN,
  USERNAME_TEXT,
} from "../utils/constants";
import PropTypes from "prop-types";
import "./InputUser.scss";

export const InputUser = (props) => {
  const [username, setUsername] = useState("");

  const inputUser = () => {
    if (username.length >= MIN_USERNAME_LEN) {
      inputUserService(username)
        .then((res) => props.setUsers([...props.users, res]))
        .then(() => setUsername(""))
        .catch((err) => console.log(err));
    }
  };

  return (
    <Card className="form">
      <h2>{INPUT_USER_HEADING}</h2>
      <Grid container alignItems="center">
        <Grid item xs={4}>
          <TextField
            label={USERNAME_TEXT}
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button onClick={inputUser} variant="contained" color="primary">
            {ADD_BUTTON}
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

InputUser.propTypes = {
  setUsers: PropTypes.func,
  users: PropTypes.array,
};
