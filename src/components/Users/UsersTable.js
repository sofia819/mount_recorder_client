import React from "react";
import { USER_COLUMN, EDIT_COLUMN } from "../../utils/constants";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { EditUserButton } from "./EditUser/EditUserButton";
import PropTypes from "prop-types";

export const UsersTable = (props) => (
  <TableContainer component={Paper}>
    <Table className="table" aria-label="customized table">
      <TableHead className="table-head">
        <TableRow>
          <TableCell>{USER_COLUMN}</TableCell>
          <TableCell>{EDIT_COLUMN}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.users.map((row) => (
          <TableRow key={row.user_id} className="table-row">
            <TableCell component="th" scope="row" className="table-cell">
              {row.username}
            </TableCell>
            <TableCell>
              <EditUserButton
                username={row.username}
                userId={row.user_id}
                setUsers={props.setUsers}
              />
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
};
