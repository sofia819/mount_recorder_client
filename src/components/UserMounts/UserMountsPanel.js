import React from "react";
import { UserMountsTablePanel } from "./UserMountsTablePanel";

export const UserMountsPanel = (props) => {
  return (
    <UserMountsTablePanel
      users={props.users}
      mounts={props.mounts}
      userMounts={props.userMounts}
      setUserMounts={props.setUserMounts}
    />
  );
};
