import React, { useState } from "react";
import { UserMountsTable } from "./UserMountsTable";
import { EXPANSION_MAP } from "../../utils/constants";
import { Tabs, Tab } from "@material-ui/core";

export const UserMountsTablePanel = (props) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const changeSelectedTab = (expansion) => {
    setSelectedTab(expansion);
  };

  const filteredUserMounts = props.userMounts.filter(
    (userMount) => userMount.expansion === selectedTab
  );

  const filteredMounts = props.mounts.filter(
    (mount) => mount.expansion === selectedTab
  ); 

  return (
    <>
      <Tabs
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        value={selectedTab}
        centered
      >
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
        users={props.users}
        userMounts={filteredUserMounts}
      />
    </>
  );
};
