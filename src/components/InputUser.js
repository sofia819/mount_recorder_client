import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { inputUserService } from "../services/userServices";
import {
  INPUT_USER_HEADING,
  ADD_BUTTON,
  MIN_USERNAME_LEN,
} from "../utils/constants";

export const InputUser = () => {
  const [username, setUsername] = useState("");

  const inputUser = () => {
    if (username.length >= MIN_USERNAME_LEN) {
      inputUserService(username)
        .then(() => {
          window.location = "/users";
        })
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
        onChange={setUsername}
      />
      <Button onClick={inputUser} variant="contained" color="primary">
        {ADD_BUTTON}
      </Button>
    </>
  );
};
