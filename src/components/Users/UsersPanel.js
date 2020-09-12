import React, { useState, useReducer } from 'react';
import { Grid, Snackbar } from '@material-ui/core';
import { UsersTable } from 'components/Users/UsersTable';
import { UserActionsPanel } from 'components/Users/UsersActionsPanel';
import { ROWS_PER_PAGE_OPTIONS, MIN_USERNAME_LEN } from 'utils/constants';
import { alertReducer } from 'utils/reducers';
import MuiAlert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';
import 'components/Table.scss';

export const UsersPanel = (props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(ROWS_PER_PAGE_OPTIONS[0]);
  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };
  const [searchUsername, setSearchUsername] = useState('');

  const handleChangeUsername = (e) => setSearchUsername(e.target.value);

  const filteredUsers = props.users
    .filter((user) =>
      searchUsername.length >= MIN_USERNAME_LEN
        ? user.username.toLowerCase().includes(searchUsername.toLowerCase())
        : true
    )
    .sort((a, b) => a.username.localeCompare(b.username));

  const [alert, dispatchAlert] = useReducer(alertReducer, {
    isAlertOpen: false,
    alertMessage: '',
    alertSeverity: '',
  });

  return (
    <Grid container>
      <Grid item xs={12}>
        <UsersTable
          users={filteredUsers.slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage
          )}
          setUsers={props.setUsers}
          dispatchAlert={dispatchAlert}
        />
      </Grid>
      <Grid item xs={12} align='center'>
        <UserActionsPanel
          users={props.users}
          setUsers={props.setUsers}
          rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
          component='div'
          count={filteredUsers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          onChangeSearchUsername={handleChangeUsername}
          searchUsername={searchUsername}
          mounts={props.mounts}
          setUserMounts={props.setUserMounts}
        />
      </Grid>
      <Snackbar
        open={alert.isAlertOpen}
        autoHideDuration={3000}
        onClose={() => dispatchAlert({ type: 'Close' })}
      >
        <MuiAlert severity={alert.alertSeverity} variant='filled'>
          {alert.alertMessage}
        </MuiAlert>
      </Snackbar>
    </Grid>
  );
};

UsersPanel.propTypes = {
  users: PropTypes.array,
  setUsers: PropTypes.func,
  mounts: PropTypes.array,
  setUserMounts: PropTypes.func,
};
