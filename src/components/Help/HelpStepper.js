import React, { useState } from 'react';
import {
    Stepper,
    Step,
    StepButton,
    Button,
    Grid,
} from '@material-ui/core';
import {
  BACK_BUTTON,
  NEXT_BUTTON,
} from 'components/Help/HelpConstants';
import 'components/Help/Stepper.scss';

const getStepContent = (instructions, stepIndex) => {
  const imagePaths = Object.keys(instructions).map(
    (key) => instructions[key].imagePath
  );

  const altTexts = Object.keys(instructions).map(
    (key) => instructions[key].altText
  );

  return (
    <div className='box'>
      <img src={imagePaths[stepIndex]} alt={altTexts[stepIndex]} />
    </div>
  );
};

export const HelpStepper = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = Object.keys(props.instructions).map(
    (key) => props.instructions[key].step
  );

  const isLastStep = () => {
    return activeStep === steps.length - 1;
  };

  const handleNext = () => {
    if(isLastStep()) {
      setActiveStep(0);
    }
    else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <>
      <Stepper alternativeLabel nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const buttonProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepButton
                onClick={handleStep(index)}
                {...buttonProps}
              >
                {label}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
      {getStepContent(props.instructions, activeStep)}
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