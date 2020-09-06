import React, { useState } from "react";
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
import {
  MOUNT_COLUMN,
  EXPANSION_COLUMN,
  EXPANSION_MAP,
  ROWS_PER_PAGE_OPTIONS,
} from "../../utils/constants";
import { ExpansionFilter } from "./ExpansionFilter";
import PropTypes from "prop-types";
import "../Table.scss";

export const MountsTable = (props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(ROWS_PER_PAGE_OPTIONS[0]);
  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const [checkedExpansions, setCheckedExpansions] = useState(() =>
    Object.keys(EXPANSION_MAP)
  );

  const handleChangeCheckbox = (targetExpansion) => {
    setCheckedExpansions((prevState) => {
      if (prevState.includes(targetExpansion)) {
        return prevState.filter((expansion) => expansion !== targetExpansion);
      }
      return [...prevState, targetExpansion];
    });
  };

  return (
    <>
      <ExpansionFilter
        checkedExpansions={checkedExpansions}
        onChangeCheckbox={handleChangeCheckbox}
      />
      <TableContainer component={Paper}>
        <Table className="table" aria-label="customized table">
          <TableHead className="table-head">
            <TableRow>
              <TableCell>{MOUNT_COLUMN}</TableCell>
              <TableCell>{EXPANSION_COLUMN}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.mounts
              .filter((mount) =>
                checkedExpansions.includes(mount.expansion.toString())
              )
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.mount_id} className="table-row">
                  <TableCell component="th" scope="row" className="table-cell">
                    {row.mount_name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {EXPANSION_MAP[row.expansion]}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
        component="div"
        count={props.mounts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
};

MountsTable.propTypes = {
  mounts: PropTypes.array,
};
