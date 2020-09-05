import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { UserTable } from "./UserTable";
import { ListMounts } from "./ListMounts";
import { HOME_NAV, USER_NAV, MOUNTS_NAV } from "../utils/constants";
import { getMountsService } from "../services/mountServices";
import { getUsersService } from "../services/userServices";

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
      {
        //TODO: Make this look pretty
      }
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">{HOME_NAV}</Link>
            </li>
            <li>
              <Link to="/users">{USER_NAV}</Link>
            </li>
            <li>
              <Link to="/mounts">{MOUNTS_NAV}</Link>
            </li>
          </ul>
        </nav>
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
      </div>
    </Router>
  );
};
