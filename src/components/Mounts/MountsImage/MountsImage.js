import React, { forwardRef } from 'react';
import { Card, Button, Grid, Typography, Box } from '@material-ui/core';
import { CLOSE_BUTTON } from 'utils/constants';
import PropTypes from 'prop-types';
import 'components/ModalForm.scss';

export const MountsImage = forwardRef((props, ref) => {
  return (
    <Card ref={ref} tabIndex={-1} className='form'>
      <Box mt={2} mb={2}>
        <Grid container align='center' spacing={2}>
          <Grid item xs={12}>
            <Typography>{props.mountName}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Box ml={4} mr={4} mt={1} mb={2} justifyContent='center'>
              <img src={props.imageUrl} alt={props.mountName} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' onClick={props.onCloseModal}>
              {CLOSE_BUTTON}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
});

MountsImage.propTypes = {
  mountName: PropTypes.string,
  imageUrl: PropTypes.string,
  ownedUsers: PropTypes.array,
  onCloseModal: PropTypes.func,
};
