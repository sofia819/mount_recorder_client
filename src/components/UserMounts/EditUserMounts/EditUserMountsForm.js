import React, { forwardRef } from "react";
import {
  Card,
  Button,
  Grid,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
} from "@material-ui/core";
import { UPDATE_BUTTON, CLOSE_BUTTON } from "../../../utils/constants";
import PropTypes from "prop-types";
import "../../ModalForm.scss";

export const EditUserMountsForm = forwardRef((props, ref) => {
  return (
    <Card ref={ref} tabIndex={-1} className="form">
      <Box mt={2} mb={2}>
        <Grid container align="center" spacing={2}>
          <Grid item xs={12}>
            <Typography>{props.username}</Typography>
          </Grid>
          <Grid container align="left">
            <Box ml={4} mr={4} mt={1} mb={2}>
              {props.userMounts
                .sort((a, b) => a.mount_id - b.mount_id)
                .map((userMount) => (
                  <Grid item xs={12} key={userMount.mount_id}>
                    <FormControlLabel
                      label={userMount.mount_name}
                      control={
                        <Checkbox
                          checked={userMount.owned || false}
                          onChange={() => props.onChangeSelection(userMount)}
                        />
                      }
                    />
                  </Grid>
                ))}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Button
              onClick={props.updateUserMounts}
              color="primary"
              variant="contained"
            >
              {UPDATE_BUTTON}
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" onClick={props.updateUserMounts}>
              {CLOSE_BUTTON}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
});

EditUserMountsForm.propTypes = {
  onChangeSelection: PropTypes.func,
  userMounts: PropTypes.array,
  updateUserMounts: PropTypes.func,
};
