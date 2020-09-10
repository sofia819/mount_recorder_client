import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from '@material-ui/core';
import { EXPANSION_MAP, PAGES_NAV, EXPANSION_TAB_NAMES } from 'utils/constants';
import PropTypes from 'prop-types';

export const UserMountsNavBar = (props) => (
  <Tabs
    variant='fullWidth'
    indicatorColor='primary'
    textColor='primary'
    value={props.selectedExpansion}
    centered
  >
    {Object.keys(EXPANSION_MAP)
      .sort()
      .map((expansion) => (
        <Tab
          key={expansion}
          onClick={() =>
            props.onChangeSelectedExpansion(parseInt(expansion))
          }
          to={`/${PAGES_NAV.USER_MOUNTS_NAV}/${EXPANSION_MAP[expansion]}`}
          component={Link}
          label={EXPANSION_TAB_NAMES[expansion]}
          value={parseInt(expansion)}
        />
      ))}
  </Tabs>
);

UserMountsNavBar.propTypes = {
  onChangeSelectedExpansion: PropTypes.func,
  selectedExpansion: PropTypes.number,
};
