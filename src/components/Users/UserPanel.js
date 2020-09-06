import React from "react";
import { UsersTable } from "./UsersTable";
import {AddUserButton} from './AddUser/AddUserButton'
import PropTypes from "prop-types";
import "../Table.scss";

export const UserPanel = (props) => (
  <>
    <AddUserButton users={props.users} setUsers={props.setUsers}  />
    <UsersTable users={props.users} setUsers={props.setUsers} />
  </>
);

UserPanel.propTypes = {
  users: PropTypes.array,
  setUsers: PropTypes.func,
};
