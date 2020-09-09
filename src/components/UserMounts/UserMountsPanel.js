import React, { useState } from "react";
import { UserMountsTable } from "./UserMountsTable";
import {
  ROWS_PER_PAGE_OPTIONS,
  MIN_USERNAME_LEN,
  ALL_EXPANSIONS,
  EXPANSION_MAP,
  PAGES_NAV,
} from "../../utils/constants";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { UserMountsActionPanel } from "./UserMountsActionsPanel";
import { UserMountsNavBar } from "./UserMountsNavigationBar";
import PropTypes from "prop-types";

export const UserMountsPanel = (props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(ROWS_PER_PAGE_OPTIONS[0]);
  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };
  const [searchUsername, setSearchUsername] = useState("");

  const handleChangeUsername = (e) => setSearchUsername(e.target.value);

  const filteredUsers = props.users
    .filter((user) =>
      searchUsername.length >= MIN_USERNAME_LEN
        ? user.username.toLowerCase().includes(searchUsername.toLowerCase())
        : true
    )
    .sort((a, b) => a.username.localeCompare(b.username));

  const filteredMounts = props.mounts.filter(
    props.selectedExpansion === ALL_EXPANSIONS
      ? (mount) => mount
      : (mount) => mount.expansion === props.selectedExpansion
  );

  const filteredUserMounts =
    props.selectedExpansion === ALL_EXPANSIONS
      ? props.userMounts
      : props.userMounts.filter(
          (userMount) => userMount.expansion === props.selectedExpansion
        );

  return (
    <Router>
      <UserMountsNavBar
        selectedExpansion={props.selectedExpansion}
        onChangeSelectedExpansion={props.onChangeSelectedExpansion}
      />
      <Switch>
        <Redirect
          exact
          from={`/${PAGES_NAV.USER_MOUNTS_NAV}`}
          to={`/${PAGES_NAV.USER_MOUNTS_NAV}/${EXPANSION_MAP[ALL_EXPANSIONS]}`}
        />
        <Route
          path={`/${PAGES_NAV.USER_MOUNTS_NAV}/${
            EXPANSION_MAP[props.selectedExpansion]
          }`}
        >
          <UserMountsTable
            mounts={filteredMounts}
            users={filteredUsers.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage
            )}
            allUserMounts={props.userMounts}
            userMounts={filteredUserMounts}
            setUserMounts={props.setUserMounts}
            expansion={props.selectedExpansion}
          />
          <UserMountsActionPanel
            users={props.users}
            setUsers={props.setUsers}
            rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
            component="div"
            count={filteredUsers.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            onChangeSearchUsername={handleChangeUsername}
            searchUsername={searchUsername}
          />
        </Route>
      </Switch>
    </Router>
  );
};

UserMountsPanel.propTypes = {
  users: PropTypes.array,
  mounts: PropTypes.array,
  userMounts: PropTypes.array,
  setUserMounts: PropTypes.func,
  onChangeSelectedExpansion: PropTypes.func,
  selectedExpansion: PropTypes.number,
};
