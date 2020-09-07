import React, { forwardRef } from "react";
import {
  Card,
  Button,
  Grid,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import { UPDATE_BUTTON } from "../../../utils/constants";
import PropTypes from "prop-types";
import "../../ModalForm.scss";

export const EditUserMountsForm = forwardRef((props, ref) => {
  return (
    <Card ref={ref} tabIndex={-1} className="form">
      <Grid item>
        <Grid container alignItems="center">
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
        </Grid>
        <Button onClick={props.updateUserMounts}>{UPDATE_BUTTON}</Button>
      </Grid>
    </Card>
  );
});

EditUserMountsForm.propTypes = {
  onChangeSelection: PropTypes.func,
  userMounts: PropTypes.array,
  updateUserMounts: PropTypes.func,
};
