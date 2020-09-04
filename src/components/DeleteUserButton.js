import React from "react";
import { Button } from "@material-ui/core";
import { DELETE_BUTTON } from "../utils/constants";

export const DeleteUserButton = (props) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => props.deleteUser(props.userId)}
    >
      {DELETE_BUTTON}
    </Button>
  );
};
