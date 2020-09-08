import React, { useState } from "react";
import { UserMountsTable } from "./UserMountsTable";
import {
  EXPANSION_MAP,
  ROWS_PER_PAGE_OPTIONS,
  MIN_USERNAME_LEN,
  ALL_EXPANSIONS,
  MISC_EXPANSION,
  ARR_EXPANSION,
  HW_EXPANSION,
  SB_EXPANSION,
  SHB_EXPANSION,
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
    selectedExpansion === ALL_EXPANSIONS
      ? (mount) => mount
      : (mount) => mount.expansion === selectedExpansion
  );

  const filteredUserMounts =
    selectedExpansion === ALL_EXPANSIONS
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
          onClick={() => changeSelectedTab(ALL_EXPANSIONS)}
          label={EXPANSION_MAP[ALL_EXPANSIONS]}
          value={ALL_EXPANSIONS}
        />
        <Tab
          onClick={() => changeSelectedTab(MISC_EXPANSION)}
          label={EXPANSION_MAP[MISC_EXPANSION]}
          value={MISC_EXPANSION}
        />
        <Tab
          onClick={() => changeSelectedTab(ARR_EXPANSION)}
          label={EXPANSION_MAP[ARR_EXPANSION]}
          value={ARR_EXPANSION}
        />
        <Tab
          onClick={() => changeSelectedTab(HW_EXPANSION)}
          label={EXPANSION_MAP[HW_EXPANSION]}
          value={HW_EXPANSION}
        />
        <Tab
          onClick={() => changeSelectedTab(SB_EXPANSION)}
          label={EXPANSION_MAP[SB_EXPANSION]}
          value={SB_EXPANSION}
        />
        <Tab
          onClick={() => changeSelectedTab(SHB_EXPANSION)}
          label={EXPANSION_MAP[SHB_EXPANSION]}
          value={SHB_EXPANSION}
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
