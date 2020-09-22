import React from 'react';
import {
    Stepper,
    Step,
    StepLabel,
    Typography,
    Button,
} from '@material-ui/core';
import { USERS_STEPPER_STEPS, USERS_STEPPER_INSTRUCTIONS } from 'utils/constants';
import 'components/Help/Steppers/Stepper.scss';
import UsersInstructionsSelectUser from 'utils/Assets/UsersInstructions/UsersInstructionsSelectUser.gif';
import UsersInstructionsEditUsername from 'utils/Assets/UsersInstructions/UsersInstructionsEditUsername.gif';
import UsersInstructionsConfirmChanges from 'utils/Assets/UsersInstructions/UsersInstructionsConfirmChanges.gif';
import UsersInstructionsAddUser from 'utils/Assets/UsersInstructions/UsersInstructionsAddUser.gif';
import UsersInstructionsSearchUser from 'utils/Assets/UsersInstructions/UsersInstructionsSearchUser.gif';

const getStepContent = (stepIndex) => {
    switch (stepIndex) {
        case 0:
        return (
            <>
                <Typography>{USERS_STEPPER_INSTRUCTIONS[0]}</Typography>
                <div className='box'><img src={UsersInstructionsSelectUser} alt="How to select."/></div>
            </>
        );
        case 1:
        return (
            <>
                <Typography>{USERS_STEPPER_INSTRUCTIONS[1]}</Typography>
                <div className='box'><img src={UsersInstructionsEditUsername} alt="How to edit."/></div>
            </>
        );
        case 2:
        return (
            <>
                <Typography>{USERS_STEPPER_INSTRUCTIONS[2]}</Typography>
                <div className='box'><img src={UsersInstructionsConfirmChanges} alt="How to save or discard edit."/></div>
            </>
        );
        case 3:
        return (
            <>
                <Typography>{USERS_STEPPER_INSTRUCTIONS[3]}</Typography>
                <div className='box'><img src={UsersInstructionsAddUser} alt="How to add user."/></div>
            </>
        );
        case 4:
        return (
            <>
                <Typography>{USERS_STEPPER_INSTRUCTIONS[4]}</Typography>
                <div className='box'><img src={UsersInstructionsSearchUser} alt="How to search."/></div>
            </>
        );
        default:
        return 'Unknown stepIndex';
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
