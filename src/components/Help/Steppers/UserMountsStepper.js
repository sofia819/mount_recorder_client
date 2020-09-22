import React from 'react';
import {
    Stepper,
    Step,
    StepLabel,
    Typography,
    Button,
} from '@material-ui/core';
import { USER_MOUNTS_STEPPER_STEPS, USER_MOUNTS_STEPPER_INSTRUCTIONS } from 'utils/constants';
import 'components/Help/Steppers/Stepper.scss';
import UserMountsInstructionsSelectUser from 'utils/Assets/UserMountsInstructions/UserMountsInstructionsSelectUser.gif';
import UserMountsInstructionsChangeOwned from 'utils/Assets/UserMountsInstructions/UserMountsInstructionsChangeOwned.gif';
import UserMountsInstructionsConfirmChanges from 'utils/Assets/UserMountsInstructions/UserMountsInstructionsConfirmChanges.gif';
import UserMountsInstructionsExpansionFilter from 'utils/Assets/UserMountsInstructions/UserMountsInstructionsExpansionFilter.gif';
import UserMountsInstructionsSearchUser from 'utils/Assets/UserMountsInstructions/UserMountsInstructionsSearchUser.gif';

const getStepContent = (stepIndex) => {
    switch (stepIndex) {
        case 0:
        return (
            <>
                <Typography>{USER_MOUNTS_STEPPER_INSTRUCTIONS[0]}</Typography>
                <div className='box'><img src={UserMountsInstructionsSelectUser} alt="How to select."/></div>
            </>
            
        );
        case 1:
        return (
            <>
                <Typography>{USER_MOUNTS_STEPPER_INSTRUCTIONS[1]}</Typography>
                <div className='box'><img src={UserMountsInstructionsChangeOwned} alt="How to edit."/></div>
            </>
        );
        case 2:
        return (
            <>
                <Typography>{USER_MOUNTS_STEPPER_INSTRUCTIONS[2]}</Typography>
                <div className='box'><img src={UserMountsInstructionsConfirmChanges} alt="How to save or discard edit."/></div>
            </>
        );
        case 3:
        return (
            <>
                <Typography>{USER_MOUNTS_STEPPER_INSTRUCTIONS[3]}</Typography>
                <div className='box'><img src={UserMountsInstructionsExpansionFilter} alt="How to change expansion."/></div>
            </>
        );
        case 4:
        return (
            <>
                <Typography>{USER_MOUNTS_STEPPER_INSTRUCTIONS[4]}</Typography>
                <div className='box'><img src={UserMountsInstructionsSearchUser} alt="How to search."/></div>
            </>
        );
        default:
        return 'Unknown stepIndex';
    }
}

export const UserMountsStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = USER_MOUNTS_STEPPER_STEPS;

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