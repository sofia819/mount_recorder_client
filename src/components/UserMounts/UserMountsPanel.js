import React from "react";
import { UserMountsTablePanel } from "./UserMountsTablePanel";
import PropTypes from "prop-types";

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

UserMountsPanel.propTypes = {
  users: PropTypes.array,
  mounts: PropTypes.array,
  userMounts: PropTypes.array,
  setUserMounts: PropTypes.func,
};
