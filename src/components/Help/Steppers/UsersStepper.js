import React from 'react';
import {
    Stepper,
    Step,
    StepLabel,
    Typography,
    Button,
} from '@material-ui/core';
import {
  BACK_BUTTON,
  NEXT_BUTTON,
  FINISH_BUTTON,
  RESET_BUTTON,
  UNKNOWN_STEP,
  USERS_STEPPER_STEPS,
  USERS_STEPPER_INSTRUCTIONS,
} from 'components/Help/HelpConstants';
import 'components/Help/Steppers/Stepper.scss';

const getStepContent = (stepIndex) => {
  const imagePaths = Object.keys(USERS_STEPPER_INSTRUCTIONS).map(
    (key) => USERS_STEPPER_INSTRUCTIONS[key].imagePath
  );

  const altTexts = Object.keys(USERS_STEPPER_INSTRUCTIONS).map(
    (key) => USERS_STEPPER_INSTRUCTIONS[key].altText
  );

  switch (stepIndex) {
    case 0:
    return (
      <>
        <div className='box'><img src={imagePaths[stepIndex]} alt={altTexts[stepIndex]} /></div>
      </>
    );
    case 1:
    return (
      <>
        <div className='box'><img src={imagePaths[stepIndex]} alt={altTexts[stepIndex]} /></div>
      </>
    );
    case 2:
    return (
      <>
        <div className='box'><img src={imagePaths[stepIndex]} alt={altTexts[stepIndex]} /></div>
      </>
    );
    case 3:
    return (
      <>
        <div className='box'><img src={imagePaths[stepIndex]} alt={altTexts[stepIndex]} /></div>
      </>
    );
    case 4:
    return (
      <>
        <div className='box'><img src={imagePaths[stepIndex]} alt={altTexts[stepIndex]} /></div>
      </>
    );
    default:
    return UNKNOWN_STEP;
  }
}

export const UsersStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = USERS_STEPPER_STEPS;

  const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
      setActiveStep(0);
  };

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <>
        {activeStep === steps.length ? (
          <>
            <Typography>All steps completed</Typography>
            <Button onClick={handleReset}>{RESET_BUTTON}</Button>
          </>
        ) : (
          <>
            {getStepContent(activeStep)}
            <>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                {BACK_BUTTON}
              </Button>
              <Button variant='contained' color='primary' onClick={handleNext}>
                {activeStep === steps.length - 1 ? FINISH_BUTTON : NEXT_BUTTON}
              </Button>
            </>
          </>
        )}
      </>
    </div>
  );
};
