import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { UsersPanel } from 'components/Users/UsersPanel';
import { MountsPanel } from 'components/Mounts/MountsPanel';
import { UserMountsPanel } from 'components/UserMounts/UserMountsPanel';
import { getMountsService } from 'services/mountServices';
import { HelpPanel } from "components/Help/HelpPanel";
import { getUsersService } from 'services/userServices';
import { getUserMountsService } from 'services/userMountsServices';
import { Tabs, Tab, AppBar, Paper } from '@material-ui/core/';
import {
  PAGES_NAV,
  PAGES_TAB_NAMES,
  EXPANSION_MAP,
  ALL_EXPANSIONS,
  USER_MOUNTS_NAV_KEY,
} from 'utils/constants';
import 'components/NaviagtionBar.scss';

export const NavigationBar = () => {
  const [users, setUsers] = useState([]);
  const [mounts, setMounts] = useState([]);
  const [userMounts, setUserMounts] = useState([]);
  const [selectedTab, setSelectedTab] = useState(() => {
    const currentPage = Object.keys(PAGES_NAV).find((page) =>
      window.location.pathname.includes(PAGES_NAV[page])
    );
    return currentPage ? PAGES_NAV[currentPage] : PAGES_NAV.USER_MOUNTS_NAV;
  });

  const [selectedExpansion, setSelectedExpansion] = useState(() => {
    const currentPage = Object.keys(EXPANSION_MAP).find((page) =>
      window.location.pathname.includes(EXPANSION_MAP[page])
    );
    return currentPage !== undefined
      ? parseInt(currentPage, 10)
      : ALL_EXPANSIONS;
  });

  const handleChangeSelectedExpansion = (expansion) => {
    setSelectedExpansion(expansion);
  };

  const handleSelectTab = (tab) => {
    if (tab === USER_MOUNTS_NAV_KEY) {
      setSelectedTab(PAGES_NAV[tab]);
      handleChangeSelectedExpansion(selectedExpansion);
    } else {
      setSelectedTab(PAGES_NAV[tab]);
    }
  };

  useEffect(() => {
    getMountsService()
      .then((res) => {
        setMounts(res);
      })
      .catch((err) => console.log(err));
    getUsersService()
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => console.log(err));
    getUserMountsService()
      .then((res) => {
        setUserMounts(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Router>
      <AppBar position='static' component={Paper}>
        <Tabs
          variant='fullWidth'
          indicatorColor='primary'
          textColor='primary'
          centered
          value={selectedTab}
          className='tabs'
        >
          {Object.keys(PAGES_NAV).map((page) => (
            <Tab
              key={page}
              label={PAGES_TAB_NAMES[page]}
              component={Link}
              to={`/${PAGES_NAV[page]}/${
                page === USER_MOUNTS_NAV_KEY
                  ? EXPANSION_MAP[selectedExpansion]
                  : ''
              }`}
              value={PAGES_NAV[page]}
              onClick={() => handleSelectTab(page)}
            />
          ))}
        </Tabs>
      </AppBar>
      <Switch>
        <Redirect
          exact
          from={`/`}
          to={`/${PAGES_NAV.USER_MOUNTS_NAV}/${EXPANSION_MAP[ALL_EXPANSIONS]}`}
        />
        <Route path={`/${PAGES_NAV.USERS_NAV}`} exact>
          <UsersPanel
            users={users}
            setUsers={setUsers}
            mounts={mounts}
            setUserMounts={setUserMounts}
          />
        </Route>
        <Route path={`/${PAGES_NAV.MOUNTS_NAV}`} exact>
          <MountsPanel mounts={mounts} setSelectedTab={setSelectedTab} />
        </Route>
        <Route path={`/${PAGES_NAV.USER_MOUNTS_NAV}`}>
          <UserMountsPanel
            userMounts={userMounts}
            users={users}
            mounts={mounts}
            setUserMounts={setUserMounts}
            onChangeSelectedExpansion={handleChangeSelectedExpansion}
            selectedExpansion={selectedExpansion}
          />
        </Route>
        <Route path={`/${PAGES_NAV.HELP_NAV}`} exact>
          <HelpPanel setSelectedTab={setSelectedTab} />
        </Route>
      </Switch>
    </Router>
  );
};
