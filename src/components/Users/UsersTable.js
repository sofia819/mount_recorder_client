import React, { useState } from "react";
import {
  USER_COLUMN,
  EDIT_COLUMN,
  ROWS_PER_PAGE_OPTIONS,
} from "../../utils/constants";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@material-ui/core";
import { EditUserButton } from "./EditUser/EditUserButton";
import PropTypes from "prop-types";

export const UsersTable = (props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(ROWS_PER_PAGE_OPTIONS[0]);
  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  return (
    <>
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
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
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
      <TablePagination
        rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
        component="div"
        count={props.users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
};

UsersTable.propTypes = {
  users: PropTypes.array,
  setUsers: PropTypes.func,
};
