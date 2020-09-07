import React from "react";
import { UserMountsTablePanel } from "./UserMountsTablePanel";

//called by NavigationBar.js
export const UserMountsPanel = (props) => {
  return (
    <UserMountsTablePanel
      users={props.users}
      mounts={props.mounts}
      userMounts={props.userMounts}
    />
  );
};
