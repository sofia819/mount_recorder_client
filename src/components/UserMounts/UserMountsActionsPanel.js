import React from "react";
import { TablePagination, Grid, Box, TextField } from "@material-ui/core";
import { ROWS_PER_PAGE_OPTIONS, USERNAME_TEXT } from "../../utils/constants";

export const UserMountsActionPanel = (props) => (
  <Box m={1}>
    <Grid container align="center">
      <Grid item xs={1} />
      <Grid item xs={5} align="center">
        <TextField
          value={props.searchUsername}
          label={USERNAME_TEXT}
          fullWidth
          onChange={props.onChangeSearchUsername}
        />
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={5}>
        <TablePagination
          rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
          component="div"
          count={props.count}
          rowsPerPage={props.rowsPerPage}
          page={props.page}
          onChangePage={props.onChangePage}
          onChangeRowsPerPage={props.onChangeRowsPerPage}
        />
      </Grid>
    </Grid>
  </Box>
);
