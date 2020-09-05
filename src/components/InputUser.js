import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { inputUserService } from "../services/userServices";
import {
  INPUT_USER_HEADING,
  ADD_BUTTON,
  MIN_USERNAME_LEN,
} from "../utils/constants";
import PropTypes from "prop-types";

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
    <>
      <h1>{INPUT_USER_HEADING}</h1>
      <TextField
        label="username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button onClick={inputUser} variant="contained" color="primary">
        {ADD_BUTTON}
      </Button>
    </>
  );
};

InputUser.propTypes = {
  setUsers: PropTypes.func,
  users: PropTypes.array,
};
