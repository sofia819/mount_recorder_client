import React, { useState } from 'react';
import {
  Button,
  Grid,
} from '@material-ui/core';
import { PAGES_TAB_NAMES } from 'utils/constants';
import { HelpStepper } from 'components/Help/HelpStepper';
import {
  USER_MOUNTS_STEPPER_INSTRUCTIONS,
  USERS_STEPPER_INSTRUCTIONS,
  MOUNTS_STEPPER_INSTRUCTIONS,
} from 'components/Help/HelpConstants';

export const HelpPanel = () => {
  const [stepperCase, setStepperCase] = useState(0);

  const handleOpenUserMountsStepper = () => {
    setStepperCase(0);
  }

  const handleOpenUsersStepper = () => {
    setStepperCase(1);
  }

  const handleOpenMountsStepper = () => {
    setStepperCase(2);
  }

  return (
    <>
      <Grid container direction='row' justify='space-evenly' alignItems='center'>
        <Grid item xs={3}>
          <Button
            variant='contained'
            color='primary'
            fullWidth={true}
            onClick={handleOpenUserMountsStepper}
            disabled={stepperCase === 0}
          >
            {PAGES_TAB_NAMES.USER_MOUNTS_NAV}
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant='contained'
            color='primary'
            fullWidth={true}
            onClick={handleOpenUsersStepper}
            disabled={stepperCase === 1}
          >
            {PAGES_TAB_NAMES.USERS_NAV}
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant='contained'
            color='primary'
            fullWidth={true}
            onClick={handleOpenMountsStepper}
            disabled={stepperCase === 2}
          >
            {PAGES_TAB_NAMES.MOUNTS_NAV}
          </Button>
        </Grid>
      </Grid>
      <br />
      {stepperCase === 0 && <HelpStepper instructions={USER_MOUNTS_STEPPER_INSTRUCTIONS}/>}
      {stepperCase === 1 && <HelpStepper instructions={USERS_STEPPER_INSTRUCTIONS}/>}
      {stepperCase === 2 && <HelpStepper instructions={MOUNTS_STEPPER_INSTRUCTIONS}/>}
    </>
  );
};
