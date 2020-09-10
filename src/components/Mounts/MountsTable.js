import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import {
  MOUNT_COLUMN,
  EXPANSION_COLUMN,
  EXPANSION_MAP,
} from "../../utils/constants";
import PropTypes from "prop-types";
import "../Table.scss";

export const MountsTable = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table className="table" aria-label="customized table">
        <TableHead className="table-head">
          <TableRow>
            <TableCell align="center">{MOUNT_COLUMN}</TableCell>
            <TableCell align="center">{EXPANSION_COLUMN}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.mounts.map((row) => (
            <TableRow key={row.mount_id} className="table-row">
              <TableCell align="center" component="th" scope="row">
                {row.mount_name}
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                {EXPANSION_MAP[row.expansion]}
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
};
