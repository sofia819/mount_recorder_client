import React from "react";
import { ExpansionFilter } from "components/Mounts/ExpansionFilter";
import { TablePagination, Grid, Box } from "@material-ui/core";
import { ROWS_PER_PAGE_OPTIONS } from "utils/constants";
import PropTypes from "prop-types";

export const MountsActionsPanel = (props) => (
  <Box m={1}>
    <Grid container align="center">
      <Grid item xs={7}>
        <ExpansionFilter
          checkedExpansions={props.checkedExpansions}
          onChangeCheckbox={props.onChangeCheckbox}
        />
      </Grid>
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

MountsActionsPanel.propTypes = {
  checkedExpansions: PropTypes.array,
  onChangeCheckbox: PropTypes.func,
  count: PropTypes.number,
  rowsPerPage: PropTypes.number,
  page: PropTypes.number,
  onChangePage: PropTypes.func,
  onChangeRowsPerPage: PropTypes.func,
};
