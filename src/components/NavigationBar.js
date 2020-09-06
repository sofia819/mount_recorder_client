import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { UserPanel } from "./Users/UserPanel";
import { MountsPanel } from "./Mounts/MountsPanel";
import { getMountsService } from "../services/mountServices";
import { getUsersService } from "../services/userServices";
import { Tabs, Tab, AppBar, Paper } from "@material-ui/core/";
import { HOME_NAV, USERS_NAV, MOUNTS_NAV } from "../utils/constants";
import './NaviagtionBar.scss'

export const NavigationBar = () => {
  const [users, setUsers] = useState([]);
  const [mounts, setMounts] = useState([]);
  const [selectedTab, setSelectedTab] = useState(HOME_NAV);

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
  }, []);

  const onSelectTab = (tabName) => setSelectedTab(tabName);

  return (
    <Router>
      <AppBar position="static" component={Paper}>
        <Tabs
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          centered
          value={selectedTab}
          className="tabs"
        >
          <Tab
            label={HOME_NAV}
            component={Link}
            to={`/`}
            value={HOME_NAV}
            onClick={() => onSelectTab(HOME_NAV)}
          />
          <Tab
            label={USERS_NAV}
            component={Link}
            to={`/${USERS_NAV}`}
            value={USERS_NAV}
            onClick={() => onSelectTab(USERS_NAV)}
          />
          <Tab
            label={MOUNTS_NAV}
            component={Link}
            to={`/${MOUNTS_NAV}`}
            value={MOUNTS_NAV}
            onClick={() => onSelectTab(MOUNTS_NAV)}
          />
        </Tabs>
      </AppBar>
      <Switch>
        <Route path="/" exact>
          <div>{HOME_NAV}</div>
        </Route>
        <Route path="/users" exact>
          <UserPanel users={users} setUsers={setUsers} />
        </Route>
        <Route path="/mounts" exact>
          <MountsPanel mounts={mounts} />
        </Route>
      </Switch>
    </Router>
  );
};
