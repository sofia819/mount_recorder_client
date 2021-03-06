import React, { forwardRef } from 'react';
import { Card, Button, Grid, Typography, Box } from '@material-ui/core';
import { CLOSE_BUTTON, NOT_OWNED_BY_USERS } from 'utils/constants';
import PropTypes from 'prop-types';
import 'components/ModalForm.scss';

export const MountsUsersLackingList = forwardRef((props, ref) => {
  return (
    <Card ref={ref} tabIndex={-1} className='form'>
      <Box mt={2} mb={2}>
        <Grid container align='center' spacing={2}>
          <Grid item xs={12}>
            <Typography>{`${NOT_OWNED_BY_USERS} ${props.mountName}`}</Typography>
          </Grid>
          <Grid container align='left'>
            <Box ml={4} mr={4} mt={1} mb={2}>
              {props.ownedUsers
                .sort((a, b) => a.username.localeCompare(b.username))
                .map((user) => (
                  <Grid item xs={12} key={user.username}>
                    <Box m={2}>
                      <Typography>{user.username}</Typography>
                    </Box>
                  </Grid>
                ))}
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

MountsUsersLackingList.propTypes = {
  mountName: PropTypes.string,
  ownedUsers: PropTypes.array,
  onCloseModal: PropTypes.func,
};
