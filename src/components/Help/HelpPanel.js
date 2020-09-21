import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core';
import { PAGES_TAB_NAMES } from 'utils/constants';
import { UserMountsStepper } from 'components/Help/Steppers/UserMountsStepper';

export const HelpPanel = () => {
        const [expanded, setExpanded] = React.useState(false);
      
        const handleChange = (panel) => (event, isExpanded) => {
          setExpanded(isExpanded ? panel : false);
        };

    return (
      <div>
        <h1 align='center'>{PAGES_TAB_NAMES.HELP_NAV}</h1>
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
            <Typography>
              Users tab shows a list of all players registered in the app.
              Clicking a name lets you edit that players name.
            </Typography>
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
            <Typography>
              Mounts tab shows all mounts that Updog plans on farming.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
};