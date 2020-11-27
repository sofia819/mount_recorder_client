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
import {
  MOUNT_COLUMN,
  EXPANSION_COLUMN,
  EXPANSION_TAB_NAMES,
} from 'utils/constants';
import { MountsUsersLackingButton } from 'components/Mounts/MountsOwner/MountsUsersLackingButton';
import { TableCellWrapper } from 'components/TableCellWrapper';
import PropTypes from 'prop-types';
import 'components/Table.scss';

export const MountsTable = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='customized table'>
        <TableHead className='table-head'>
          <TableRow>
            <TableCell align='center'>{MOUNT_COLUMN}</TableCell>
            <TableCell align='center'>{EXPANSION_COLUMN}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.mounts.map((row) => (
            <TableRow key={row.mount_id} className='table-row'>
              <TableCell align='center' component='th' scope='row'>
                <TableCellWrapper type='mounts'>
                  <MountsUsersLackingButton
                    mountName={row.mount_name}
                    ownedUsers={props.userMounts.filter(
                      (user) => user.mount_id === row.mount_id && !user.owned
                    )}
                  />
                </TableCellWrapper>
              </TableCell>
              <TableCell align='center' component='th' scope='row'>
                <TableCellWrapper type='expansions'>
                  {EXPANSION_TAB_NAMES[row.expansion]}
                </TableCellWrapper>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

MountsTable.propTypes = {
  mounts: PropTypes.array,
  userMounts: PropTypes.array,
};
