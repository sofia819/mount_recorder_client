import React, { forwardRef } from 'react';
import {
  Card,
  Button,
  TextField,
  Grid,
  Typography,
  Box,
} from '@material-ui/core';
import {
  INPUT_USER_HEADING,
  ADD_BUTTON,
  CLOSE_BUTTON,
  USERNAME_TEXT,
} from 'utils/constants';
import PropTypes from 'prop-types';
import 'components/Shared/ModalForm.scss';

export const AddUserForm = forwardRef((props, ref) => (
  <Card ref={ref} tabIndex={-1} className='form'>
    <Box mt={2} mb={2}>
      <Grid container spacing={2} align='center'>
        <Grid item xs={12}>
          <Typography>{INPUT_USER_HEADING}</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label={USERNAME_TEXT}
            variant='outlined'
            value={props.username}
            onChange={(e) => props.setUsername(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <Button onClick={props.onAddUser} variant='contained' color='primary'>
            {ADD_BUTTON}
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button onClick={props.onCloseModal} variant='contained'>
            {CLOSE_BUTTON}
          </Button>
        </Grid>
      </Grid>
    </Box>
  </Card>
));

AddUserForm.displayName = 'AddUserForm';

AddUserForm.propTypes = {
  onCloseModal: PropTypes.func,
  onAddUser: PropTypes.func,
  setUsername: PropTypes.func,
  username: PropTypes.string,
};
