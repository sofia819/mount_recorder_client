import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { MountsTable } from 'components/Mounts/MountsTable';
import PropTypes from 'prop-types';
import { ROWS_PER_PAGE_OPTIONS, EXPANSION_MAP } from 'utils/constants';
import { MountsActionsPanel } from 'components/Mounts/MountsActionsPanel';

export const MountsPanel = (props) => {
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
    setPage(0);
  };

  const filteredMounts = props.mounts.filter((mount) =>
    checkedExpansions.includes(mount.expansion.toString())
  );

  return (
    <Grid container>
      <Grid item xs={12}>
        <MountsTable
          mounts={filteredMounts.slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage
          )}
        />
      </Grid>
      <Grid item xs={12} align='center'>
        <MountsActionsPanel
          checkedExpansions={checkedExpansions}
          onChangeCheckbox={handleChangeCheckbox}
          count={filteredMounts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Grid>
    </Grid>
  );
};
MountsPanel.propTypes = {
  mounts: PropTypes.array,
};
