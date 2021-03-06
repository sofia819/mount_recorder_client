import React, { useState, forwardRef } from "react";
import { USERNAME_TEXT, LOGIN_BUTTON, PASSWORD_TEXT } from "utils/constants";
import {
  Button,
  TextField,
  Card,
  CardContent,
  CardActions,
  Grid,
} from "@material-ui/core";
import PropTypes from "prop-types";
import "components/Legacy/AdminLogin.scss";

export const AdminLogin = forwardRef((props, ref) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    props.deleteUser(props.userId, { username, password });
  };

  return (
    <Card tabIndex={-1} ref={ref} className="modal" outlined="true">
      <CardContent>
        <Grid container>
          <Grid item>
            <TextField
              label={USERNAME_TEXT}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label={PASSWORD_TEXT}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className="card-action">
        <Button variant="contained" onClick={handleLogin}>
          {LOGIN_BUTTON}
        </Button>
      </CardActions>
    </Card>
  );
});

AdminLogin.propTypes = {
  deleteUser: PropTypes.func,
  userId: PropTypes.number,
};
