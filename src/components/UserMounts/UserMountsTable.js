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
import { USER_COLUMN } from "../../utils/constants";

export const UserMountsTable = (props) => {
    return (
    <TableContainer component={Paper}>
    <Table className="table" aria-label="customized table">
        <TableHead className="table-head">
        <TableRow>
            <TableCell>{USER_COLUMN}</TableCell>
            {props.mounts.map((mount) => <TableCell key={mount.mount_name}>{mount.mount_name}</TableCell>)}
        </TableRow>
        </TableHead>
        <TableBody>
        {props.users.map((row) => (
            <TableRow key={row.user_id} className="table-row">
            <TableCell component="th" scope="row" className="table-cell">
                {row.username}
            </TableCell>
            <TableCell>
            </TableCell>
            </TableRow>
        ))}
        </TableBody>
    </Table>
    </TableContainer>
    )
};