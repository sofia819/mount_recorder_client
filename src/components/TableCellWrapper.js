import React from 'react';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import { TABLE_DIMENSIONS } from 'utils/constants';

export const TableCellWrapper = (props) => {
  const { type } = props;
  return (
    <Box
      width={TABLE_DIMENSIONS[type].width}
      height={TABLE_DIMENSIONS[type].height}
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
