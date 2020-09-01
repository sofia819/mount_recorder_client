import React from "react";
import { Button } from '@material-ui/core';

export const DeleteUserButton = props => {
    return (
      <Button
        variant="contained"
        color="secondary"
        onClick={() => props.deleteUser(props.user_id)}
      >
        Delete
      </Button>
    );
}