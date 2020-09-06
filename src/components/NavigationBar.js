import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { UserTable } from "./UserTable";
import { ListMounts } from "./ListMounts";
import { getMountsService } from "../services/mountServices";
import { getUsersService } from "../services/userServices";
import { Tabs, Tab, AppBar } from "@material-ui/core/";
import { HOME_NAV, USERS_NAV, MOUNTS_NAV } from "../utils/constants";

export const NavigationBar = () => {
  const [users, setUsers] = useState([]);
  const [mounts, setMounts] = useState([]);

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

  return (
    <Router>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          centered
          aria-label="nav tabs example"
          className="tabs"
        >
          <Tab label={HOME_NAV} component={Link} to={`/`} />
          <Tab label={USERS_NAV} component={Link} to={`/${USERS_NAV}`} />
          <Tab label={MOUNTS_NAV} component={Link} to={`/${MOUNTS_NAV}`} />
        </Tabs>
      </AppBar>
      <Switch>
        <Route path="/" exact>
          <div>{HOME_NAV}</div>
        </Route>
        <Route path="/users" exact>
          <UserTable users={users} setUsers={setUsers} />
        </Route>
        <Route path="/mounts" exact>
          <ListMounts mounts={mounts} />
        </Route>
      </Switch>
    </Router>
  );
};
