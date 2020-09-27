import React from 'react';
import { Stepper, Step, StepButton, Button, Grid } from '@material-ui/core';
import { BACK_BUTTON, NEXT_BUTTON } from 'components/Help/HelpConstants';
import 'components/Help/Stepper.scss';
import PropTypes from 'prop-types';

export const HelpStepper = (props) => {
  const steps = Object.keys(props.instructions).map(
    (key) => props.instructions[key].step
  );

  const handleNext = () =>
    props.activeStep === steps.length - 1
      ? props.setActiveStep(0)
      : props.setActiveStep(props.activeStep + 1);

  const handleBack = () =>
    props.setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleChangeStep = (step) => props.setActiveStep(step);

  return (
    <>
      <Stepper alternativeLabel nonLinear activeStep={props.activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton onClick={() => handleChangeStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div className='box'>
        <img
          src={props.instructions[props.activeStep].imagePath}
          alt={props.instructions[props.activeStep].altText}
        />
      </div>
      <Grid
        container
        direction='row'
        justify='space-evenly'
        alignItems='center'
      >
        <Grid item xs={2}>
          <Button
            disabled={props.activeStep === 0}
            onClick={handleBack}
            fullWidth
          >
            {BACK_BUTTON}
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant='contained'
            color='primary'
            onClick={handleNext}
            fullWidth
          >
            {NEXT_BUTTON}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

HelpStepper.propTypes = {
  activeStep: PropTypes.number,
  setActiveStep: PropTypes.func,
  instructions: PropTypes.array,
};
