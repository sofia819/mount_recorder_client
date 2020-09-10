import React from "react";
import { TablePagination, Grid, Box, TextField } from "@material-ui/core";
import { ROWS_PER_PAGE_OPTIONS, SEARCH_USER } from "../../utils/constants";
import PropTypes from "prop-types";

export const UserMountsActionPanel = (props) => (
  <Box m={1}>
    <Grid container align="center">
      <Grid item xs={1} />
      <Grid item xs={5} align="center">
        <TextField
          value={props.searchUsername}
          label={SEARCH_USER}
          fullWidth
          onChange={props.onChangeSearchUsername}
        />
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={5}>
        <TablePagination
          rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
          component="div"
          count={props.count}
          rowsPerPage={props.rowsPerPage}
          page={props.page}
          onChangePage={props.onChangePage}
          onChangeRowsPerPage={props.onChangeRowsPerPage}
        />
      </Grid>
    </Grid>
  </Box>
);

UserMountsActionPanel.propTypes = {
  searchUsername: PropTypes.string,
  onChangeSearchUsername: PropTypes.func,
  count: PropTypes.number,
  rowsPerPage: PropTypes.number,
  page: PropTypes.number,
  onChangePage: PropTypes.func,
  onChangeRowsPerPage: PropTypes.func,
};
