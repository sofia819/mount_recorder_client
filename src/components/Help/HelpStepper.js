import React, { useState } from 'react';
import { Stepper, Step, StepButton, Button, Grid } from '@material-ui/core';
import { BACK_BUTTON, NEXT_BUTTON } from 'components/Help/HelpConstants';
import 'components/Help/Stepper.scss';

export const HelpStepper = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = Object.keys(props.instructions).map(
    (key) => props.instructions[key].step
  );

  const handleNext = () =>
    activeStep === steps.length - 1
      ? setActiveStep(0)
      : setActiveStep(activeStep + 1);

  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleChangeStep = (step) => setActiveStep(step);

  return (
    <>
      <Stepper alternativeLabel nonLinear activeStep={activeStep}>
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
          src={props.instructions[activeStep].imagePath}
          alt={props.instructions[activeStep].altText}
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
            disabled={activeStep === 0}
            onClick={handleBack}
            fullWidth={true}
          >
            {BACK_BUTTON}
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant='contained'
            color='primary'
            onClick={handleNext}
            fullWidth={true}
          >
            {NEXT_BUTTON}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
