import React from 'react';
import { Checkbox, FormControlLabel, Box } from '@material-ui/core';
import { EXPANSION_TAB_NAMES, ALL_EXPANSIONS } from 'utils/constants';
import PropTypes from 'prop-types';

export const ExpansionFilter = (props) => {
  return (
    <Box m={1}>
      {Object.keys(EXPANSION_TAB_NAMES).map(
        (expansion) =>
          parseInt(expansion) !== ALL_EXPANSIONS && (
            <FormControlLabel
              key={expansion}
              control={
                <Checkbox
                  checked={props.checkedExpansions.includes(expansion)}
                  onChange={() => props.onChangeCheckbox(expansion)}
                />
              }
              label={EXPANSION_TAB_NAMES[expansion]}
            />
          )
      )}
    </Box>
  );
};

ExpansionFilter.propTypes = {
  checkedExpansions: PropTypes.array,
  onChangeCheckbox: PropTypes.func,
};
