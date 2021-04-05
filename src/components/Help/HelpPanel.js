import React, { useState } from 'react';
import { Button, Grid, Box } from '@material-ui/core';
import { HelpStepper } from 'components/Help/HelpStepper';
import { HELP_CATEGORIES_INSTRUCTIONS } from 'components/Help/HelpConstants';

export const HelpPanel = () => {
  // User mounts instrcutions are selected by default
  const [selectedHelpCategory, setSelectedHelpCategory] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const handleChangeCategory = (category) => {
    setSelectedHelpCategory(category);
    setActiveStep(0);
  };

  return (
    <>
      <Box m={1}>
        <Grid
          container
          direction='row'
          justify='space-evenly'
          alignItems='center'
        >
          {HELP_CATEGORIES_INSTRUCTIONS.map((category, index) => (
            <Grid item xs={3} key={category.categoryName}>
              <Button
                variant='contained'
                color='primary'
                fullWidth={true}
                onClick={() => handleChangeCategory(index)}
                disabled={selectedHelpCategory === index}
              >
                {category.categoryName}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
      <HelpStepper
        instructions={
          HELP_CATEGORIES_INSTRUCTIONS[selectedHelpCategory].instructions
        }
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
    </>
  );
};
