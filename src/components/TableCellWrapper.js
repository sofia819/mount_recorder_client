import React from 'react';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';

export const TableCellWrapper = (props) => {
  return (
    <Box
      width={props.children['width']}
      height={props.children['height']}
      justifyContent='center'
      alignItems='center'
      overflow='hidden'
      display='flex'
      margin='auto'
    >
      {props.content}
    </Box>
  );
};

TableCellWrapper.propTypes = {
  content: PropTypes.object,
  children: PropTypes.node,
};
