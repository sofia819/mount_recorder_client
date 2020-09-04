import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { InputUser } from "./InputUser";
import { ListUsers } from "./ListUsers";
import { ListMounts } from "./ListMounts";
import { HOME_NAV, USER_NAV, MOUNTS_NAV } from "../utils/constants";

export const NavigationBar = () => (
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
          <InputUser />
          <ListUsers />
        </Route>
        <Route path="/mounts" exact>
          <ListMounts />
        </Route>
      </Switch>
    </div>
  </Router>
);
