import React from "react";
import { USER_COLUMN, EDIT_COLUMN } from "../../utils/constants";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
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
        {props.users
          .sort((a, b) => a.username.localeCompare(b.username))
          .map((row) => (
            <TableRow key={row.user_id} className="table-row">
              <TableCell component="th" scope="row">
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
