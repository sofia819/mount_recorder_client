import React, { forwardRef } from 'react';
import {
  Card,
  TextField,
  Button,
  Grid,
  Typography,
  Box,
} from '@material-ui/core';
import {
  EDIT_NAME_HEADING,
  UPDATE_BUTTON,
  CLOSE_BUTTON,
} from 'utils/constants';
import PropTypes from 'prop-types';
import 'components/ModalForm.scss';

export const EditUserForm = forwardRef((props, ref) => (
  <Card tabIndex={-1} className='form' ref={ref}>
    <Box mt={2} mb={2}>
      <Grid container spacing={2} align='center'>
        <Grid item xs={12}>
          <Typography>{EDIT_NAME_HEADING}</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant='outlined'
            defaultValue={props.username}
            onChange={props.onChangeInput}
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            variant='contained'
            color='primary'
            onClick={props.onUpdateUsername}
          >
            {UPDATE_BUTTON}
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant='contained'
            color='default'
            onClick={props.onCloseModal}
          >
            {CLOSE_BUTTON}
          </Button>
        </Grid>
      </Grid>
    </Box>
  </Card>
));

EditUserForm.propTypes = {
  username: PropTypes.string,
  onChangeInput: PropTypes.func,
  onUpdateUsername: PropTypes.func,
  onCloseModal: PropTypes.func,
};
