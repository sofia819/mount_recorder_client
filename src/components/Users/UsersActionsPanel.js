import React from 'react';
import { ROWS_PER_PAGE_OPTIONS, SEARCH_USER_TEXT } from 'utils/constants';
import {
  Grid,
  TablePagination,
  TextField,
  Box,
  Tooltip,
} from '@material-ui/core';
import { AddUserButton } from 'components/Users/AddUser/AddUserButton';
import PropTypes from 'prop-types';

export const UserActionsPanel = (props) => (
  <Box m={1}>
    <Grid container align='center'>
      <Grid item xs={1} />
      <Grid item xs={5} align='center'>
        <Tooltip title='Min 3 chars'>
          <TextField
            value={props.searchUsername}
            label={SEARCH_USER_TEXT}
            fullWidth
            onChange={props.onChangeSearchUsername}
          />
        </Tooltip>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={5}>
        <TablePagination
          rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
          component='div'
          count={props.count}
          rowsPerPage={props.rowsPerPage}
          page={props.page}
          onChangePage={props.onChangePage}
          onChangeRowsPerPage={props.onChangeRowsPerPage}
        />
      </Grid>
      <Grid item xs={12}>
        <AddUserButton
          mounts={props.mounts}
          setUserMounts={props.setUserMounts}
          users={props.users}
          setUsers={props.setUsers}
        />
      </Grid>
    </Grid>
  </Box>
);

UserActionsPanel.propTypes = {
  searchUsername: PropTypes.string,
  onChangeSearchUsername: PropTypes.func,
  count: PropTypes.number,
  rowsPerPage: PropTypes.number,
  page: PropTypes.number,
  onChangePage: PropTypes.func,
  onChangeRowsPerPage: PropTypes.func,
  users: PropTypes.array,
  setUsers: PropTypes.func,
  mounts: PropTypes.array,
  setUserMounts: PropTypes.func,
};
