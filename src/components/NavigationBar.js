import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import InputUser from "./InputUser";
import ListUsers from "./ListUsers";

export const NavigationBar = () => (
  <Router>
    {
      //TODO: Make this look pretty
    }
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/mounts">Mounts</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact>
          <div>home</div>
        </Route>
        <Route path="/users" exact>
          <InputUser />
          <ListUsers />
        </Route>
        <Route path="/mounts" exact>
          <div>mounts</div>
        </Route>
      </Switch>
    </div>
  </Router>
);
