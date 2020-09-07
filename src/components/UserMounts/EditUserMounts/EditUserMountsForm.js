import React, { forwardRef } from "react";
import { Card, Button, Grid, Checkbox } from "@material-ui/core";
import { UPDATE_BUTTON } from "../../../utils/constants";
import PropTypes from "prop-types";
import "../../ModalForm.scss";

export const EditUserMountsForm = forwardRef((props, ref) => (
  <Card ref={ref} tabIndex={-1} className="form">
    <Grid item>
      <Grid container alignItems="center">
        {props.userMounts.map((userMount) => (
          <>
            <Grid item xs={8}>
              {userMount.mount_name}
            </Grid>
            <Grid item xs={4}>
              <Checkbox />
            </Grid>
          </>
        ))}
      </Grid>
      <Button>{UPDATE_BUTTON}</Button>
    </Grid>
  </Card>
));

EditUserMountsForm.propTypes = {
  userMounts: PropTypes.array,
};
