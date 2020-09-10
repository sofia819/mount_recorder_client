import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import { USER_COLUMN } from 'utils/constants';
import { EditUserMountsButton } from 'components/UserMounts/EditUserMounts/EditUserMountsButton';
import PropTypes from 'prop-types';
import 'components/Shared/Table.scss';

export const UserMountsTable = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table className='table' aria-label='customized table'>
        <TableHead className='table-head'>
          <TableRow>
            <TableCell align='center'>{USER_COLUMN}</TableCell>
            {props.mounts.map((mount) => (
              <TableCell align='center' key={mount.mount_name}>
                {mount.mount_name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.users
            .sort((a, b) => a.username.localeCompare(b.username))
            .map((row) => {
              const filteredUserMounts = props.userMounts
                .filter((userMount) => userMount.user_id === row.user_id)
                .sort((a, b) => a.mount_id - b.mount_id);
              return (
                <TableRow key={row.user_id} className='table-row'>
                  <TableCell
                    width='10%'
                    align='center'
                    component='th'
                    scope='row'
                  >
                    <EditUserMountsButton
                      userId={row.user_id}
                      allUserMounts={props.allUserMounts}
                      userMounts={filteredUserMounts}
                      username={row.username}
                      setUserMounts={props.setUserMounts}
                      expansion={props.expansion}
                    />
                  </TableCell>
                  {filteredUserMounts.map((userMount) => (
                    <TableCell
                      width='5%'
                      align='center'
                      key={`${props.userId}_${props.expansion}_${userMount.mount_id}`}
                    >
                      {userMount.owned ? (
                        <CheckIcon color='primary' />
                      ) : (
                        <ClearIcon color='error' />
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

UserMountsTable.propTypes = {
  userId: PropTypes.number,
  mounts: PropTypes.array,
  users: PropTypes.array,
  userMounts: PropTypes.array,
  allUserMounts: PropTypes.array,
  setUserMounts: PropTypes.func,
  expansion: PropTypes.number,
};
