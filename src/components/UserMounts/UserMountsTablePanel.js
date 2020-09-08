import React, { useState } from "react";
import { UserMountsTable } from "./UserMountsTable";
import {
  EXPANSION_MAP,
  ROWS_PER_PAGE_OPTIONS,
  MIN_USERNAME_LEN,
} from "../../utils/constants";
import { Tabs, Tab } from "@material-ui/core";
import { UserMountsActionPanel } from "./UserMountsActionsPanel";
import PropTypes from "prop-types";

export const UserMountsTablePanel = (props) => {
  const [selectedExpansion, setSelectedExpansion] = useState(-1);
  const changeSelectedTab = (expansion) => {
    setSelectedExpansion(expansion);
  };

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
    selectedExpansion === -1
      ? (mount) => mount
      : (mount) => mount.expansion === selectedExpansion
  );

  const filteredUserMounts =
    selectedExpansion === -1
      ? props.userMounts
      : props.userMounts.filter(
          (userMount) => userMount.expansion === selectedExpansion
        );

  return (
    <>
      <Tabs
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        value={selectedExpansion}
        centered
      >
        <Tab
          onClick={() => changeSelectedTab(-1)}
          label={EXPANSION_MAP[-1]}
          value={-1}
        />
        <Tab
          onClick={() => changeSelectedTab(0)}
          label={EXPANSION_MAP[0]}
          value={0}
        />
        <Tab
          onClick={() => changeSelectedTab(2)}
          label={EXPANSION_MAP[2]}
          value={2}
        />
        <Tab
          onClick={() => changeSelectedTab(3)}
          label={EXPANSION_MAP[3]}
          value={3}
        />
        <Tab
          onClick={() => changeSelectedTab(4)}
          label={EXPANSION_MAP[4]}
          value={4}
        />
        <Tab
          onClick={() => changeSelectedTab(5)}
          label={EXPANSION_MAP[5]}
          value={5}
        />
      </Tabs>
      <UserMountsTable
        mounts={filteredMounts}
        users={filteredUsers.slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage
        )}
        allUserMounts={props.userMounts}
        userMounts={filteredUserMounts}
        setUserMounts={props.setUserMounts}
        expansion={selectedExpansion}
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
    </>
  );
};

UserMountsTablePanel.propTypes = {
  userMounts: PropTypes.array,
  users: PropTypes.array,
  mounts: PropTypes.array,
  setUserMounts: PropTypes.func,
  setUsers: PropTypes.func,
};
