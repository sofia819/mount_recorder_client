import React from 'react';
import {
    Stepper,
    Step,
    StepLabel,
    Typography,
    Button,
} from '@material-ui/core';
import { MOUNTS_STEPPER_STEPS, MOUNTS_STEPPER_INSTRUCTIONS } from 'utils/constants';
import 'components/Help/Steppers/Stepper.scss';
import MountsInstructionsChangePage from 'utils/Assets/MountsInstructions/MountsInstructionsChangePage.gif';
import MountsInstructionsChangeRow from 'utils/Assets/MountsInstructions/MountsInstructionsChangeRow.gif';
import MountsInstructionsExpansionFilter from 'utils/Assets/MountsInstructions/MountsInstructionsExpansionFilter.gif';

const getStepContent = (stepIndex) => {
    switch (stepIndex) {
        case 0:
        return (
            <>
              <Typography>{MOUNTS_STEPPER_INSTRUCTIONS[0]}</Typography>
              <div className='box'><img src={MountsInstructionsChangePage} alt='How to select.'/></div>
            </>
        );
        case 1:
        return (
            <>
              <Typography>{MOUNTS_STEPPER_INSTRUCTIONS[1]}</Typography>
              <div className='box'><img src={MountsInstructionsChangeRow} alt='How to edit.'/></div>
            </>
        );
        case 2:
        return (
            <>
              <Typography>{MOUNTS_STEPPER_INSTRUCTIONS[2]}</Typography>
              <div className='box'><img src={MountsInstructionsExpansionFilter} alt='How to save or discard edit.'/></div>
            </>
        );
        default:
        return 'Unknown stepIndex';
    }
}

export const MountsStepper = () => {


const [activeStep, setActiveStep] = React.useState(0);
const steps = MOUNTS_STEPPER_STEPS;

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
          <Button onClick={handleReset}>Reset</Button>
        </>
      ) : (
        <>
          {getStepContent(activeStep)}
          <>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Button variant='contained' color='primary' onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </>
        </>
      )}
    </>
  </div>
);
};
