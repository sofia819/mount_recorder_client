import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { MOUNT_COLUMN } from "../utils/constants";
import PropTypes from "prop-types";
import "./Table.scss";

export const MountTable = (props) => (
  <TableContainer component={Paper}>
    <Table className="table" aria-label="customized table">
      <TableHead className="table-head">
        <TableRow>
          <TableCell>{MOUNT_COLUMN}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.mounts.map((row) => (
          <TableRow key={row.mount_id} className="table-row">
            <TableCell component="th" scope="row">
              {row.mount_name}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

MountTable.propTypes = {
  mounts: PropTypes.array,
};
