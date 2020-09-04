import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
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

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export const UserTable = (props) => (
  <TableContainer component={Paper}>
    <Table className={useStyles().table} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>{USER_COLUMN}</StyledTableCell>
          <StyledTableCell>{EDIT_COLUMN}</StyledTableCell>
          <StyledTableCell>{DELETE_COLUMN}</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.users.map((row) => (
          <StyledTableRow key={row.user_id}>
            <StyledTableCell component="th" scope="row">
              {row.username}
            </StyledTableCell>
            <StyledTableCell align="left">
              <EditUserModal username={row.username} userId={row.user_id} />
            </StyledTableCell>
            <StyledTableCell align="left">
              <DeleteUserButton
                deleteUser={props.deleteUser}
                userId={row.user_id}
              />
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
