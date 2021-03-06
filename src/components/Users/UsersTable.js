import React from 'react';
import { USER_COLUMN } from 'utils/constants';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import { EditUserButton } from 'components/Users/EditUser/EditUserButton';
import { TableCellWrapper } from 'components/TableCellWrapper';
import PropTypes from 'prop-types';

export const UsersTable = (props) => (
  <TableContainer component={Paper}>
    <Table aria-label='customized table'>
      <TableHead className='table-head'>
        <TableRow>
          <TableCell align='center'>{USER_COLUMN}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.users.map((row) => (
          <TableRow key={row.user_id} className='table-row'>
            <TableCell align='center' component='th' scope='row'>
              <TableCellWrapper type='users'>
                <EditUserButton
                  users={props.users}
                  username={row.username}
                  userId={row.user_id}
                  setUsers={props.setUsers}
                  dispatchAlert={props.dispatchAlert}
                />
              </TableCellWrapper>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

UsersTable.propTypes = {
  users: PropTypes.array,
  setUsers: PropTypes.func,
  dispatchAlert: PropTypes.func,
};
