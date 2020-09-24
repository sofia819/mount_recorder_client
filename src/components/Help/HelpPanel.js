import React, {useState} from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core';
import { PAGES_TAB_NAMES } from 'utils/constants';
import { UserMountsStepper } from 'components/Help/Steppers/UserMountsStepper';
import { UsersStepper } from 'components/Help/Steppers/UsersStepper';
import { MountsStepper } from 'components/Help/Steppers/MountsStepper';

export const HelpPanel = () => {
        const [expanded, setExpanded] = useState(false);
      
        const handleChange = (panel) => (event, isExpanded) => {
          setExpanded(isExpanded ? panel : false);
        };

    return (
      <div>
        <Accordion
          expanded={expanded === 'panelUserMounts'}
          onChange={handleChange('panelUserMounts')}
        >
          <AccordionSummary
            aria-controls='panelUserMountsbh-content'
            id='panelUserMountsbh-header'
          >
            <Typography>{PAGES_TAB_NAMES.USER_MOUNTS_NAV}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <UserMountsStepper />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panelUsers'}
          onChange={handleChange('panelUsers')}
        >
          <AccordionSummary
            aria-controls='panelUsersbh-content'
            id='panelUsersbh-header'
          >
            <Typography>{PAGES_TAB_NAMES.USERS_NAV}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <UsersStepper />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panelMounts'}
          onChange={handleChange('panelMounts')}
        >
          <AccordionSummary
            aria-controls='panelMountsbh-content'
            id='panelMountsbh-header'
          >
            <Typography>{PAGES_TAB_NAMES.MOUNTS_NAV}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <MountsStepper />
          </AccordionDetails>
        </Accordion>
      </div>
    );
};