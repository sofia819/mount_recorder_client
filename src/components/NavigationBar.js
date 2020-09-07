import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { UserPanel } from "./Users/UserPanel";
import { MountsPanel } from "./Mounts/MountsPanel";
import { UserMountsPanel } from "./UserMounts/UserMountsPanel";
import { getMountsService } from "../services/mountServices";
import { getUsersService } from "../services/userServices";
import { getUserMountsService } from "../services/userMountsServices";
import { Tabs, Tab, AppBar, Paper } from "@material-ui/core/";
import { PAGES_NAV } from "../utils/constants";
import "./NaviagtionBar.scss";

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
            label={PAGES_NAV.USER_MOUNTS_NAV}
            component={Link}
            to={`/`}
            value={PAGES_NAV.USER_MOUNTS_NAV}
            onClick={() => onSelectTab(PAGES_NAV.USER_MOUNTS_NAV)}
          />
          <Tab
            label={PAGES_NAV.USERS_NAV}
            component={Link}
            to={`/${PAGES_NAV.USERS_NAV}`}
            value={PAGES_NAV.USERS_NAV}
            onClick={() => onSelectTab(PAGES_NAV.USERS_NAV)}
          />
          <Tab
            label={PAGES_NAV.MOUNTS_NAV}
            component={Link}
            to={`/${PAGES_NAV.MOUNTS_NAV}`}
            value={PAGES_NAV.MOUNTS_NAV}
            onClick={() => onSelectTab(PAGES_NAV.MOUNTS_NAV)}
          />
        </Tabs>
      </AppBar>
      <Switch>
        <Route path="/" exact>
          <UserMountsPanel
            userMounts={userMounts}
            users={users}
            mounts={mounts}
            setUserMounts={setUserMounts}
          />
        </Route>
        <Route path="/users" exact>
          <UserPanel
            users={users}
            setUsers={setUsers}
            setSelectedTab={setSelectedTab}
          />
        </Route>
        <Route path="/mounts" exact>
          <MountsPanel mounts={mounts} setSelectedTab={setSelectedTab} />
        </Route>
      </Switch>
    </Router>
  );
};
