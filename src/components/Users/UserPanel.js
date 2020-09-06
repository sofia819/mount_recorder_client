import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { UsersTable } from "./UsersTable";
import { UserActionsPanel } from "./UserActionsPanel";
import { ROWS_PER_PAGE_OPTIONS, MIN_USERNAME_LEN } from "../../utils/constants";
import PropTypes from "prop-types";
import "../Table.scss";

export const UserPanel = (props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(ROWS_PER_PAGE_OPTIONS[0]);
  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };
  const [searchUsername, setSearchUsername] = useState("");

  const handleChangeUsername = (e) => setSearchUsername(e.target.value);

  const filteredUsers = props.users
    .filter((user) =>
      searchUsername.length >= MIN_USERNAME_LEN
        ? user.username.toLowerCase().includes(searchUsername.toLowerCase())
        : true
    )
    .sort((a, b) => a.username.localeCompare(b.username))
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Grid container>
      <Grid item xs={12}>
        <UsersTable users={filteredUsers} setUsers={props.setUsers} />
      </Grid>
      <Grid item xs={12} align="center">
        <UserActionsPanel
          rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
          component="div"
          count={filteredUsers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          onChangeSearchUsername={handleChangeUsername}
          searchUsername={searchUsername}
        />
      </Grid>
    </Grid>
  );
};

UserPanel.propTypes = {
  users: PropTypes.array,
  setUsers: PropTypes.func,
};