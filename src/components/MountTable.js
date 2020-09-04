import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { MOUNT_COLUMN } from "../utils/constants";

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
  
  export const MountTable = (props) => (
    <TableContainer component={Paper}>
      <Table className={useStyles().table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{MOUNT_COLUMN}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.mounts.map((row) => (
            <StyledTableRow key={row.mount_id}>
              <StyledTableCell component="th" scope="row">
                {row.mount_name}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );