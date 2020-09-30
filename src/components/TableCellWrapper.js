import React from 'react';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';

export const TableCellWrapper = (props) => {
  return (
    <Box
      width={props.dimensions.width}
      height={props.dimensions.height}
      justifyContent='center'
      alignItems='center'
      overflow='hidden'
      display='flex'
      margin='auto'
    >
      {props.children}
    </Box>
  );
};

TableCellWrapper.propTypes = {
  dimensions: PropTypes.object,
  children: PropTypes.node,
};
