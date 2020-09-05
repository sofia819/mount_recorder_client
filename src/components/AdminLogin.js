import React, { useState } from "react";
import { USERNAME_TEXT, LOGIN_BUTTON, PASSWORD_TEXT } from "../utils/constants";
import {
  Button,
  TextField,
  Card,
  CardContent,
  CardActions,
  Grid,
} from "@material-ui/core";
import PropTypes from "prop-types";
import "./AdminLogin.scss";

export const AdminLogin = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    props.deleteUser(props.userId, { username, password });
  };

  return (
    <Card className="modal" outlined>
      <CardContent>
        <Grid>
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
};

AdminLogin.propTypes = {
  deleteUser: PropTypes.func,
  userId: PropTypes.number,
};
