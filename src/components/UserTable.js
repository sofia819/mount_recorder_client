import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { DeleteUserButton } from "./DeleteUserButton";
import { EditUserModal } from "./EditUserModal";
import { DELETE_COLUMN, USER_COLUMN, EDIT_COLUMN } from "../utils/constants";
import PropTypes from "prop-types";
import "./Table.scss";

export const UserTable = (props) => (
  <TableContainer component={Paper}>
    <Table className="table" aria-label="customized table">
      <TableHead className="table-head">
        <TableRow>
          <TableCell>{USER_COLUMN}</TableCell>
          <TableCell>{EDIT_COLUMN}</TableCell>
          <TableCell>{DELETE_COLUMN}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.users.map((row) => (
          <TableRow key={row.user_id} className="table-row">
            <TableCell component="th" scope="row">
              {row.username}
            </TableCell>
            <TableCell align="left">
              <EditUserModal username={row.username} userId={row.user_id} />
            </TableCell>
            <TableCell align="left">
              <DeleteUserButton
                deleteUser={props.deleteUser}
                userId={row.user_id}
                onOpenModal={props.onOpenModal}
                onCloseModal={props.onCloseModal}
                isModalOpen={props.isModalOpen}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

UserTable.propTypes = {
  users: PropTypes.array,
  deleteUser: PropTypes.func,
  onOpenModal: PropTypes.func,
  onCloseModal: PropTypes.func,
  isModalOpen: PropTypes.bool,
};
