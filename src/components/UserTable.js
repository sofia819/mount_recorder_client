import React from "react";
import { InputUser } from "./InputUser";
import { ListUsers } from "./ListUsers";
import PropTypes from "prop-types";
import "./Table.scss";

export const UserTable = (props) => (
  <>
    <InputUser users={props.users} setUsers={props.setUsers} />
    <ListUsers users={props.users} setUsers={props.setUsers} />
  </>
);

UserTable.propTypes = {
  users: PropTypes.array,
  setUsers: PropTypes.func,
};
