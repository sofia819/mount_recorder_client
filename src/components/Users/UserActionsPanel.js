import React from "react";
import { ROWS_PER_PAGE_OPTIONS, USERNAME_TEXT } from "../../utils/constants";
import { Grid, TablePagination, TextField, Box } from "@material-ui/core";
import { AddUserButton } from "./AddUser/AddUserButton";
import PropTypes from "prop-types";

export const UserActionsPanel = (props) => (
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
      <Grid item xs={12}>
        <AddUserButton users={props.users} setUsers={props.setUsers} />
      </Grid>
    </Grid>
  </Box>
);

UserActionsPanel.propTypes = {
  searchUsername: PropTypes.func,
  onChangeSearchUsername: PropTypes.func,
  count: PropTypes.number,
  rowsPerPage: PropTypes.number,
  page: PropTypes.number,
  onChangePage: PropTypes.func,
  onChangeRowsPerPage: PropTypes.func,
  users: PropTypes.array,
  setUsers: PropTypes.func,
};
